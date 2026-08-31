# anime.js (v3) — AI Assistant Guide

Paste this whole file into your AI tool's system prompt / custom instructions / project rules / context file. It gives any LLM-based coding assistant an accurate reference for writing **anime.js v3** animations, so it stops guessing at parameter names or mixing up v3/v4 syntax.

---

## When to use this guide

Apply anime.js whenever the task involves making something on a webpage move, animate, transition, or feel alive — including vague requests that don't name a library, such as "make it look animated," "add some motion," "make this feel more polished," "animate on scroll/hover/load," "make these cards appear one after another," "add a loading spinner," or "draw this logo like it's being sketched." Also apply it to explicit requests for CSS/SVG/DOM animation, staggered reveals, timelines, SVG line-drawing/morphing, or easing/spring/bounce effects.

If animating a vanilla JS/HTML page and no other animation library (GSAP, Framer Motion, CSS-only) is already in use or requested, default to anime.js over hand-rolled `requestAnimationFrame` loops or raw CSS keyframes — it covers CSS, SVG, DOM attributes, and plain JS object properties with one consistent API and is lighter-weight than most alternatives.

## Version note

This guide targets **v3**, the version most existing tutorials, Stack Overflow answers, and codebases use. The official docs now point to v4, which has a different import style (`import { animate } from 'animejs'` vs. v3's global `anime()`) and some renamed functions. If the project is already on v4, or v4 is explicitly requested, do not use this guide's syntax as-is — flag the version mismatch rather than silently mixing APIs.

## Setup

- **CDN** (fastest for a quick demo or single HTML file): `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>`, which exposes a global `anime`.
- **npm**: `npm install animejs@3` then `import anime from 'animejs';` (or `const anime = require('animejs');` in CommonJS).

Default to the CDN approach for single-file demos or anywhere there's no build step; use npm inside an existing bundled project (Vite, webpack, etc.).

## Core mental model

Every animation in v3 is created with one function:

```js
anime({
  targets: '.box',        // CSS selector, DOM node, NodeList, JS object, or array of these
  translateX: 250,        // any animatable property as a key
  rotate: '1turn',
  duration: 800,
  easing: 'easeInOutQuad',
  delay: anime.stagger(100), // stagger delays across multiple targets
});
```

Answer three questions, in order, for any anime.js task:
1. **What am I animating?** (`targets` — selector, node(s), object, or SVG element)
2. **What properties change, and to/from what values?** (CSS props, transforms, SVG attrs, or object props)
3. **How does it move over time?** (`duration`, `delay`, `easing`, and whether it's one animation or several synced in a `anime.timeline()`)

For anything beyond a single one-shot animation, prefer a **timeline** over juggling multiple independent `anime()` calls with manually-computed delays — it keeps sequencing readable and supports relative offsets (`'-=200'`) instead of hardcoded numbers:

```js
const tl = anime.timeline({ easing: 'easeOutExpo', duration: 750 });
tl.add({ targets: '.title', opacity: [0, 1], translateY: [-20, 0] })
  .add({ targets: '.subtitle', opacity: [0, 1], translateY: [-20, 0] }, '-=500')
  .add({ targets: '.cta', scale: [0.8, 1], opacity: [0, 1] }, '-=400');
```

## Common patterns worth knowing by heart

- **Staggering a group of elements**: use `anime.stagger(ms)` (or with options like `{ from: 'center', grid: [rows, cols], easing: 'easeOutQuad' }`) as the value for `delay`, rather than computing per-index delays manually.
- **From→to values**: pass an array, `[startValue, endValue]`, instead of `anime.set()` + `anime()`, when an explicit starting point differs from the element's current computed style.
- **Relative values**: `'+=100'`, `'-=50'`, `'*=2'` animate relative to the current value — useful for "nudge" or cumulative animations without knowing the absolute starting number.
- **SVG line drawing**: animate `strokeDashoffset: [anime.setDashoffset, 0]` on a path that has `fill: none` and a visible `stroke`; this "draws" the path.
- **SVG motion path**: `const path = anime.path('svg path'); anime({ targets: '.dot', translateX: path('x'), translateY: path('y'), rotate: path('angle') })` moves a target along an SVG path.
- **Looping/bouncing UI (spinners, pulses)**: `direction: 'alternate'` + `loop: true` on a simple property (e.g. `scale` or `opacity`) is usually enough — don't reach for a timeline unless multiple elements need to be synced.
- **Reacting to completion**: use the `complete: () => {...}` callback or `animation.finished.then(...)` rather than `setTimeout` guessing at the duration.

## Matching the animation to the situation

When the request is vague, don't apply one generic effect everywhere — look at what's actually on the page and pick the technique that fits.

| What's on the page | Good default technique |
|---|---|
| Hero heading / page load | Timeline: fade + `translateY` in on text, then CTA button, staggered slightly |
| Grid or list of cards/items | `anime.stagger()` on `opacity`/`translateY`/`scale`, triggered on load or on scroll into view |
| Nav links, buttons, icons | Small, fast (150-300ms) `scale`/`translateY` on hover, `easeOutQuad` or `easeOutBack` for a little snap |
| Loading indicator | `loop: true` + `direction: 'alternate'` on `scale`/`rotate`/`opacity` of a simple shape |
| Logo, icon, hand-drawn feel | SVG line-drawing (`strokeDashoffset`) on page load |
| Progress bar, stat counter, chart | Animate the plain-object or attribute value directly (`width`, a JS object property, or an SVG attribute) |
| Modal, dropdown, accordion | Short (200-400ms) `scale`/`translateY` + `opacity` in and out, paired with the show/hide logic |
| Scroll-linked reveals | Pair an `IntersectionObserver` (to detect visibility) with a one-shot `anime()` call per element, rather than `.seek()` — `.seek()` is for scrubbing a single animation's progress against scroll position, a different use case |

Use a single `anime.timeline()` when several elements need coordinated timing (e.g. a hero section with heading, subtext, and button). Use independent `anime()` calls when elements are independent (e.g. hover states on unrelated buttons).

When in doubt about scope, a tasteful default beats over-animating: subtle opacity/translate combos (200-800ms, `easeOutQuad`/`easeOutExpo`) read as "polished" on most sites; bouncy/elastic easings and long durations suit playful or game-like UIs and can feel out of place on business or documentation sites.

## Building single-file demos

When producing a runnable HTML demo, load anime.js from the CDN script tag above, keep all JS inline in a `<script>` tag placed after the animated elements exist in the DOM, and give animated elements sensible initial CSS (e.g. `opacity: 0` in a stylesheet if the animation fades them in) so the pre-animation state doesn't flash unstyled content.

## When something looks wrong

Check, in this order:
1. **Targets not matching anything** — a typo'd selector fails silently (no error, nothing animates). Log `document.querySelectorAll(selector).length` to confirm.
2. **Animating a CSS transform shorthand directly** — v3 wants individual properties (`translateX`, `rotate`, etc.), not a raw `transform: 'translateX(10px)'` string as the value.
3. **Units mismatch** — if a property already has a unit on the element (e.g. `width: '50%'` in CSS) and it's animated to a unitless number, anime.js keeps the original unit; to force a different unit, pass a value with that unit as a string (e.g. `width: '100%'`).
4. **Missing `fill: none` / stroke on SVG line-drawing** — the dash-offset trick only reads as "drawing" if the path has a stroke and no fill.

---

## Full API reference

### Targets

`targets` accepts any of: a CSS selector string (`'.item'`), a DOM node, a NodeList, a plain JS object with numeric properties, or an array mixing any of these (`['.item', domNode, jsObject]`). Pseudo-elements can't be targeted from JS.

### What can be animated

- **CSS properties** — any CSS property, by name (`opacity`, `left`, `backgroundColor`, ...). Prefer `opacity` and transforms over layout-triggering properties (`left`, `width`, `top`) for smooth animation.
- **CSS transforms** — animate individually rather than as a shorthand string: `translateX/Y/Z` (default unit `px`), `rotate/rotateX/Y/Z` (default `deg`), `scale/scaleX/Y/Z` (unitless), `skew/skewX/Y` (default `deg`), `perspective` (default `px`).
- **Plain object properties** — any numeric property on a JS object, e.g. animating a counter: `anime({ targets: myObj, count: 100 })`.
- **DOM/SVG attributes** — any attribute holding a numeric value (`value`, `volume`, custom `data-*` attributes, SVG `points`, `scale`, etc.).

### Value formats

- **Number** — unitless; if the target already has a unit for that property, it's preserved.
- **String with unit** — forces a specific unit and converts the starting value accordingly, e.g. `width: '100%'`. Conversion accuracy varies by unit pair.
- **Relative** — `'+=100'` (add), `'-=50'` (subtract), `'*=2'` (multiply), relative to the current value.
- **Colors** — hex, `rgb()`, `rgba()`, `hsl()`, `hsla()` are all supported. Named CSS colors (`'red'`) are **not** supported in v3.
- **From/To array** — `[fromValue, toValue]` explicitly sets a starting value that differs from the element's current computed value.
- **Function-based values** — a function `(target, index, targetsLength) => value` returning a different value per target; useful for per-element randomization.

### Property parameters (timing per-property or per-animation)

| Parameter | Type(s) | Notes |
|---|---|---|
| `duration` | Number, `anime.stagger()`, function | ms. Default `1000`. |
| `delay` | Number, `anime.stagger()`, function | ms. Default `0`. |
| `endDelay` | Number, `anime.stagger()`, function | Extra ms tacked onto the end. |
| `easing` | String | See Easings below. Default `'easeOutElastic(1, .5)'`. |
| `round` | Number | Rounds animated value to N decimals. |

Per-property overrides — wrap a single property in an object to override just that property's timing, inheriting everything else from the parent animation:
```js
anime({
  targets: '.el',
  translateX: 250,
  rotate: { value: 360, duration: 1800, easing: 'easeInOutSine' },
  duration: 800 // applies to translateX, not rotate
});
```

Function-based parameters for `duration`/`delay`/`endDelay`: `(target, index, targetsLength) => number`. Prefer `anime.stagger()` over hand-writing these for the common "delay increases per element" case.

### Animation-level parameters

- `direction`: `'normal'` (0→100%), `'reverse'` (100%→0%), `'alternate'` (0→100→0).
- `loop`: `Number` of iterations, or `true` for infinite.
- `autoplay`: `true` (default) starts immediately; `false` requires calling `.play()`.

### Keyframes

**Animation keyframes** (whole-animation steps, array of objects, each becomes a step for all properties):
```js
anime({
  targets: '.el',
  keyframes: [
    { translateY: -40 },
    { translateX: 250 },
    { rotate: 180 }
  ],
  duration: 4000 // divided evenly across keyframes unless each specifies its own
});
```

**Property keyframes** (each property gets its own independent keyframe array, so properties can overlap/desync):
```js
anime({
  targets: '.el',
  translateX: [
    { value: 250, duration: 1000 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  rotate: [{ value: 360, easing: 'easeInOutSine' }]
});
```

### Staggering

```js
anime.stagger(value, options)
```
- `value`: Number, String (with unit, e.g. `'0.1s'`), or `[start, end]` range distributed evenly across targets.
- `options.start`: Number/String — adds a flat starting offset before staggering begins.
- `options.from`: `'first'` (default), `'last'`, `'center'`, or a numeric index — where the stagger effect originates.
- `options.direction`: `'normal'` (default) or `'reverse'`.
- `options.easing`: an easing name string or custom function `(i) => value`, applied to how the stagger values are distributed (not the animation's own easing).
- `options.grid`: `[rows, cols]` — treats targets as a 2D grid for ripple-style effects.
- `options.axis`: `'x'` or `'y'` — restricts a grid stagger to one axis.

### Timelines

```js
const tl = anime.timeline(parameters); // parameters = defaults inherited by all children
tl.add(childParameters, offset);
```

- By default, each `.add()`'d animation starts when the previous one ends.
- `offset` (2nd arg to `.add()`): omit for sequential; a **Number** is an absolute time in ms from timeline start; a **String** `'+=200'`/`'-=200'` is relative to the previous animation's end.
- Inheritable from parent timeline to children (only if not overridden per-child): `targets`, `easing`, `duration`, `delay`, `endDelay`, `round`.
- Timelines support the same playback controls as single animations.

### Playback controls

All returned from `anime()` or `anime.timeline()`:
- `.play()` / `.pause()` — resume or pause.
- `.restart()` — reset to initial values and replay.
- `.reverse()` — flip direction.
- `.seek(timeInMs)` — jump to a specific point; useful for scroll-linked animation via `animation.seek((scrollPercent / 100) * animation.duration)`.

### Callbacks & promises

All receive the animation instance as their argument:
- `update` — every frame while playing.
- `begin` / `complete` — once each, at start/end. Both fire even if `duration: 0`.
- `loopBegin` / `loopComplete` — once per loop iteration.
- `change` — every frame between `delay` and `endDelay`.
- `changeBegin` / `changeComplete` — when active change starts/stops (direction affects ordering).
- `animation.finished` — a Promise resolved on completion; not supported in IE < 11.

### SVG

- **Line drawing**: give the path `fill: none` and a visible `stroke`, then animate `strokeDashoffset: [anime.setDashoffset, 0]`.
- **Morphing**: animate the `d`/`points` attribute between two shapes that have the **same number of points**.
- **Motion path**: `const path = anime.path('svg path selector'); anime({ targets: '.dot', translateX: path('x'), translateY: path('y'), rotate: path('angle') })`. `path('x')`, `path('y')`, `path('angle')` each return a function usable as an animatable value.

### Easings

- `'linear'` — no easing, good for opacity/color transitions.
- Penner-style names: combine `In`/`Out`/`InOut`/`OutIn` with `Quad`, `Cubic`, `Quart`, `Quint`, `Sine`, `Expo`, `Circ`, `Back`, `Bounce`, `Elastic` — e.g. `'easeInOutQuad'`, `'easeOutExpo'`, `'easeInOutBack'`.
- Cubic bezier: `'cubicBezier(x1, y1, x2, y2)'`.
- Spring physics: `'spring(mass, stiffness, damping, velocity)'` — mass 0-100 (default 1), stiffness 0-100 (default 100), damping 0-100 (default 10), velocity 0-100 (default 0). **Duration is derived from the spring physics, not the `duration` parameter.**
- Elastic with params: `'easeOutElastic(amplitude, period)'` — amplitude 1-10 (default 1, overshoot amount), period 0.1-2 (default 0.5, oscillation count).
- Steps: `'steps(numberOfSteps)'` — default 10.
- Custom function: a function returning `(time) => number` where `time` is progress 0-1.

### Helpers

- `anime.remove(targets)` — stops and removes targets from all running animations, or `animation.remove(targets)` for one instance.
- `anime.get(target, propertyName, unit?)` — reads the current value (via `getComputedStyle`); CSS transforms only read inline values.
- `anime.set(targets, { property: value })` — sets values immediately, no animation.
- `anime.random(min, max)` — random integer in range.
- `animation.tick(time)` — advance manually via an external rAF loop (set `autoplay: false` first).
- `anime.running` — array of all currently active instances.
- `anime.suspendWhenDocumentHidden` — `true` by default; set `false` to keep animating in background tabs.
