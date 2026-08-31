---
name: anime-js
description: Write, debug, or review JavaScript animations built with anime.js (v3) for websites, landing pages, UI components, and interactive demos. Use any time the user wants something on a webpage to move, animate, transition, or feel alive — even when vague or when no library is named, e.g. "make it look animated", "add some motion", "make this feel more polished/premium", "animate on scroll/hover/load", "make these cards appear one after another", "add a loading spinner", "draw this logo like it's being sketched" — plus explicit asks for CSS/SVG/DOM animation, staggered reveals, timelines, SVG line-drawing/morphing, or easing/spring/bounce effects. If animating a vanilla JS/HTML page with no other animation library (GSAP, Framer Motion, CSS-only) already in use or requested, default to anime.js via this skill over hand-rolled requestAnimationFrame or CSS keyframes. Also use for debugging/converting anime.js code, or questions about its easing, stagger, or timeline syntax.
---

# anime.js (v3)

anime.js is a lightweight JavaScript animation library that animates CSS properties, SVG attributes, DOM attributes, and plain JS object properties with one consistent API. This skill targets **v3**, the version most existing tutorials, Stack Overflow answers, and codebases use. (The anime.js docs now point people to v4, which has a different import style and some renamed functions — if the user's project is already on v4, or they explicitly ask for v4, don't use this skill's syntax as-is; flag the version difference instead of silently mixing APIs.)

Why this matters: v3's global `anime()` function API is easy to mix up with v4's tree-shakeable `import { animate } from 'animejs'` API, or with plausible-sounding but nonexistent options. Getting the exact property names, function signatures, and easing string formats right the first time saves the user a debugging round-trip. Reach for `references/api.md` any time you're not fully certain of a parameter name, an easing string's exact syntax, or a stagger/timeline option — it's a condensed, accurate cheat sheet distilled from the official v3 docs.

## Setup

anime.js v3 is a single dependency with no config needed.

- **CDN** (fastest for a quick demo or single HTML file): `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>`, which exposes a global `anime`.
- **npm**: `npm install animejs@3` then `import anime from 'animejs';` (or `const anime = require('animejs');` in CommonJS).

Default to the CDN approach for artifacts, single-file demos, or anywhere there's no build step. Use npm when the user is working inside an existing bundled project (Vite, webpack, etc.).

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

Think of every anime.js task as answering three questions, in order:
1. **What am I animating?** (`targets` — selector, node(s), object, or SVG element)
2. **What properties change, and to/from what values?** (CSS props, transforms, SVG attrs, or object props — see `references/api.md` for the full list of what's animatable and how values/units/relative values work)
3. **How does it move over time?** (`duration`, `delay`, `easing`, and whether it's a single animation or several synced in a `anime.timeline()`)

For anything beyond a single one-shot animation, prefer a **timeline** over juggling multiple independent `anime()` calls with manually-computed delays — it keeps sequencing readable and lets you use relative offsets (`'-=200'`) instead of hardcoded numbers:

```js
const tl = anime.timeline({ easing: 'easeOutExpo', duration: 750 });
tl.add({ targets: '.title', opacity: [0, 1], translateY: [-20, 0] })
  .add({ targets: '.subtitle', opacity: [0, 1], translateY: [-20, 0] }, '-=500')
  .add({ targets: '.cta', scale: [0.8, 1], opacity: [0, 1] }, '-=400');
```

## Common patterns worth knowing by heart

- **Staggering a group of elements**: use `anime.stagger(ms)` (or with options like `{ from: 'center', grid: [rows, cols], easing: 'easeOutQuad' }`) as the value for `delay`, rather than computing per-index delays manually.
- **From→to values**: pass an array, `[startValue, endValue]`, instead of `anime.set()` + `anime()`, when you need an explicit starting point that differs from the element's current computed style.
- **Relative values**: `'+=100'`, `'-=50'`, `'*=2'` animate relative to the current value — useful for "nudge" or cumulative animations without knowing the absolute starting number.
- **SVG line drawing**: animate `strokeDashoffset: [anime.setDashoffset, 0]` on a path that has `fill: none` and a visible `stroke`; this "draws" the path.
- **SVG motion path**: `const path = anime.path('svg path'); anime({ targets: '.dot', translateX: path('x'), translateY: path('y'), rotate: path('angle') })` moves a target along an SVG path.
- **Looping/bouncing UI (spinners, pulses)**: `direction: 'alternate'` + `loop: true` on a simple property (e.g. `scale` or `opacity`) is usually enough — don't reach for a timeline unless multiple elements need to be synced.
- **Reacting to completion**: use the `complete: () => {...}` callback or `animation.finished.then(...)` rather than `setTimeout` guessing at the duration.

## Matching the animation to the situation

When the request is vague ("make it look animated", "add some motion", "make this feel more premium"), don't default to one generic effect everywhere — look at what's actually on the page and pick the technique that fits that element. A rough guide:

| What's on the page | Good default technique |
|---|---|
| Hero heading / page load | Timeline: fade + `translateY` in on text, then CTA button, staggered slightly |
| Grid or list of cards/items | `anime.stagger()` on `opacity`/`translateY`/`scale`, triggered on load or on scroll into view |
| Nav links, buttons, icons | Small, fast (150-300ms) `scale`/`translateY` on hover, `easeOutQuad` or `easeOutBack` for a little snap |
| Loading indicator | `loop: true` + `direction: 'alternate'` on `scale`/`rotate`/`opacity` of a simple shape |
| Logo, icon, hand-drawn feel | SVG line-drawing (`strokeDashoffset`) on page load |
| Progress bar, stat counter, chart | Animate the plain-object or attribute value directly (`width`, a JS object property, or an SVG attribute) |
| Modal, dropdown, accordion | Short (200-400ms) `scale`/`translateY` + `opacity` in and out, paired with the show/hide logic |
| Scroll-linked reveals | Pair an `IntersectionObserver` (to detect visibility) with a one-shot `anime()` call per element, rather than `.seek()` — `.seek()` is for scrubbing a single animation's progress against scroll position (e.g. a hero animation that tracks scroll depth), which is a different use case |

If several elements need coordinated timing (e.g. a hero section with heading, subtext, and button), reach for a single `anime.timeline()` rather than several independent `anime()` calls — see Core mental model above. If elements are independent (e.g. hover states on unrelated buttons), independent `anime()` calls per element/event are simpler and correct.

When in doubt about scope, a tasteful default beats over-animating: subtle opacity/translate combos (200-800ms, `easeOutQuad`/`easeOutExpo`) read as "polished" on most sites; bouncy/elastic easings and long durations are better reserved for playful or game-like UIs, and can feel out of place on e.g. a business or documentation site.

## Building artifacts / demos

When producing a runnable HTML demo (e.g. in an artifact), load anime.js from the CDN script tag above, keep all JS inline in a `<script>` tag after the animated elements exist in the DOM, and give animated elements sensible initial CSS (e.g. `opacity: 0` in a stylesheet if the animation fades them in) so the pre-animation state doesn't flash unstyled content.

## When something looks wrong

Check, in this order:
1. **Targets not matching anything** — a typo'd selector fails silently (no error, nothing animates). Log `document.querySelectorAll(selector).length` to confirm.
2. **Animating a CSS transform shorthand directly** — v3 wants individual properties (`translateX`, `rotate`, etc.), not a raw `transform: 'translateX(10px)'` string as the value.
3. **Units mismatch** — if a property already has a unit on the element (e.g. `width: '50%'` in CSS) and you animate to a unitless number, anime.js keeps the original unit; if you need a different unit, use `references/api.md`'s guidance on forcing units.
4. **Missing `fill: none` / stroke on SVG line-drawing** — the dash-offset trick only reads as "drawing" if the path has a stroke and no fill.

If the fix isn't obvious from the above, check `references/api.md` before guessing at a parameter name — v3's API has enough surface area (30+ easing names, several stagger option shapes, per-property parameter overrides) that guessing tends to produce plausible-but-wrong code.
