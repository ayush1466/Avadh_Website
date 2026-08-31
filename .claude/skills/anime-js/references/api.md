# anime.js v3 — API reference

Condensed from the official v3 docs. Read the relevant section below rather than guessing at parameter names or easing syntax.

## Targets

`targets` accepts any of: a CSS selector string (`'.item'`), a DOM node, a NodeList, a plain JS object with numeric properties, or an array mixing any of these (`['.item', domNode, jsObject]`). Pseudo-elements can't be targeted from JS.

## What can be animated

- **CSS properties** — any CSS property, by name (`opacity`, `left`, `backgroundColor`, ...). Prefer `opacity` and transforms over layout-triggering properties (`left`, `width`, `top`) for smooth animation.
- **CSS transforms** — animate individually rather than as a shorthand string: `translateX/Y/Z` (default unit `px`), `rotate/rotateX/Y/Z` (default `deg`), `scale/scaleX/Y/Z` (unitless), `skew/skewX/Y` (default `deg`), `perspective` (default `px`).
- **Plain object properties** — any numeric property on a JS object, e.g. animating a counter: `anime({ targets: myObj, count: 100 })`.
- **DOM/SVG attributes** — any attribute holding a numeric value (`value`, `volume`, custom `data-*` attributes, SVG `points`, `scale`, etc.).

## Value formats

- **Number** — unitless; if the target already has a unit for that property, it's preserved (`translateX: 250` on an element already using px works as expected).
- **String with unit** — forces a specific unit and converts the starting value accordingly, e.g. `width: '100%'`. Conversion accuracy varies by unit pair.
- **Relative** — `'+=100'` (add), `'-=50'` (subtract), `'*=2'` (multiply), relative to the current value.
- **Colors** — hex, `rgb()`, `rgba()`, `hsl()`, `hsla()` are all supported. Named CSS colors (`'red'`) are **not** supported in v3.
- **From/To array** — `[fromValue, toValue]` explicitly sets a starting value that differs from the element's current computed value.
- **Function-based values** — a function `(target, index, targetsLength) => value` returning a different value per target; useful for per-element randomization.

## Property parameters (timing per-property or per-animation)

| Parameter | Type(s) | Notes |
|---|---|---|
| `duration` | Number, `anime.stagger()`, function | ms. Default `1000`. |
| `delay` | Number, `anime.stagger()`, function | ms. Default `0`. |
| `endDelay` | Number, `anime.stagger()`, function | Extra ms tacked onto the end. |
| `easing` | String | See Easings below. Default `'easeOutElastic(1, .5)'`. |
| `round` | Number | Rounds animated value to N decimals. |

**Per-property overrides**: wrap a single property in an object to override just that property's timing, inheriting everything else from the parent animation:
```js
anime({
  targets: '.el',
  translateX: 250,
  rotate: { value: 360, duration: 1800, easing: 'easeInOutSine' },
  duration: 800 // applies to translateX, not rotate
});
```

**Function-based parameters** for `duration`/`delay`/`endDelay`: `(target, index, targetsLength) => number`. Prefer `anime.stagger()` over hand-writing these for the common "delay increases per element" case.

## Animation-level parameters

- `direction`: `'normal'` (0→100%), `'reverse'` (100%→0%), `'alternate'` (0→100→0).
- `loop`: `Number` of iterations, or `true` for infinite.
- `autoplay`: `true` (default) starts immediately; `false` requires calling `.play()`.

## Keyframes

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

## Staggering

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

Use `anime.stagger()` as the value for `delay` (most common) but it can be used for any numeric property.

## Timelines

```js
const tl = anime.timeline(parameters); // parameters = defaults inherited by all children
tl.add(childParameters, offset);
```

- By default, each `.add()`'d animation starts when the previous one ends.
- `offset` (2nd arg to `.add()`): omit for sequential; a **Number** is an absolute time in ms from timeline start; a **String** `'+=200'`/`'-=200'` is relative to the previous animation's end.
- Inheritable from parent timeline to children (only if not overridden per-child): `targets`, `easing`, `duration`, `delay`, `endDelay`, `round`.
- Timelines support the same playback controls as single animations (`play()`, `pause()`, `restart()`, `seek()`, `reverse()`).

## Playback controls

All returned from `anime()` or `anime.timeline()`:
- `.play()` / `.pause()` — resume or pause.
- `.restart()` — reset to initial values and replay.
- `.reverse()` — flip direction.
- `.seek(timeInMs)` — jump to a specific point; useful for scroll-linked animation via `animation.seek((scrollPercent / 100) * animation.duration)`.

## Callbacks & promises

All receive the animation instance as their argument:
- `update` — every frame while playing.
- `begin` / `complete` — once each, at start/end. Both fire even if `duration: 0`.
- `loopBegin` / `loopComplete` — once per loop iteration.
- `change` — every frame between `delay` and `endDelay`.
- `changeBegin` / `changeComplete` — when active change starts/stops (direction affects ordering).
- `animation.finished` — a Promise resolved on completion; not supported in IE < 11.

## SVG

- **Line drawing**: give the path `fill: none` and a visible `stroke`, then animate `strokeDashoffset: [anime.setDashoffset, 0]`.
- **Morphing**: animate the `d`/`points` attribute between two shapes that have the **same number of points**.
- **Motion path**: `const path = anime.path('svg path selector'); anime({ targets: '.dot', translateX: path('x'), translateY: path('y'), rotate: path('angle') })`. `path('x')`, `path('y')`, `path('angle')` each return a function usable as an animatable value.

## Easings

- `'linear'` — no easing, good for opacity/color transitions.
- Penner-style names: combine `In`/`Out`/`InOut`/`OutIn` with `Quad`, `Cubic`, `Quart`, `Quint`, `Sine`, `Expo`, `Circ`, `Back`, `Bounce`, `Elastic` — e.g. `'easeInOutQuad'`, `'easeOutExpo'`, `'easeInOutBack'`.
- Cubic bezier: `'cubicBezier(x1, y1, x2, y2)'`.
- Spring physics: `'spring(mass, stiffness, damping, velocity)'` — mass 0-100 (default 1), stiffness 0-100 (default 100), damping 0-100 (default 10), velocity 0-100 (default 0). **Duration is derived from the spring physics, not the `duration` parameter.**
- Elastic with params: `'easeOutElastic(amplitude, period)'` — amplitude 1-10 (default 1, overshoot amount), period 0.1-2 (default 0.5, oscillation count).
- Steps: `'steps(numberOfSteps)'` — default 10.
- Custom function: a function returning `(time) => number` where `time` is progress 0-1.

## Helpers

- `anime.remove(targets)` — stops and removes targets from all running animations, or `animation.remove(targets)` for one instance.
- `anime.get(target, propertyName, unit?)` — reads the current value (via `getComputedStyle`); CSS transforms only read inline values.
- `anime.set(targets, { property: value })` — sets values immediately, no animation.
- `anime.random(min, max)` — random integer in range.
- `animation.tick(time)` — advance manually via an external rAF loop (set `autoplay: false` first).
- `anime.running` — array of all currently active instances.
- `anime.suspendWhenDocumentHidden` — `true` by default; set `false` to keep animating in background tabs.
