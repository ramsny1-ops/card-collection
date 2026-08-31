# Boarding Pass

Flight boarding pass with route, gate, seat, boarding time, barcode pattern, and compact travel hierarchy.

## Overview

The Boarding Pass demo is one of fifteen independent examples in `card-collection`. It is built with semantic HTML, modern CSS, and vanilla JavaScript. The design is intentionally framework-free so the card can be copied into an existing site, design system, dashboard, portfolio, or application without requiring a component library.

Category: travel

Design family: Travel

## Files

```text
09-boarding-pass-card/
├── index.html
├── style.css
├── script.js
└── README.md
```

The demo imports the shared customization runtime from:

```text
../../assets/card-lab.js
```

## Live customization

The studio provides controls for:

- title
- subtitle
- primary card surface
- secondary card surface
- text color
- accent color
- page background
- preset color schemes
- font family
- corner radius
- card scale
- background pattern opacity
- motion mode
- motion duration
- pointer tilt
- flip interaction
- JSON export
- JSON import
- CSS variable export
- local preset saving
- local preset loading
- random design generation

## Quick reuse

Copy the markup inside `#cardScene` and the relevant visual rules from `style.css`.

A minimal embedding pattern looks like this:

```html
<div class="card-scene" id="cardScene">
  <div class="card-face" id="cardFront">
    <div class="card-content">
      <h2 class="card-title">Your title</h2>
      <p class="card-subtitle">Your supporting text</p>
    </div>
  </div>
</div>
```

Then define the design tokens:

```css
:root {
  --card-bg: #171a20;
  --card-bg-2: #0f1116;
  --card-text: #ffffff;
  --card-accent: #8b7bff;
  --card-radius: 26px;
  --pattern-opacity: .16;
}
```

## JavaScript API

The demo exposes its controller for experimentation:

```js
const lab = window.cardCollectionDemo;

console.log(lab.getConfig());

lab.setConfig({
  cardAccent: "#58d68d",
  radius: 34,
  motion: "pulse"
});

lab.flip();
```

Available methods include:

```text
getConfig()
setConfig()
applyPreset()
flip()
reset()
randomize()
exportConfig()
destroy()
```

## Configuration example

```js
window.cardCollectionDemo.setConfig({
  title: "Custom Boarding Pass",
  subtitle: "Designed for my own application",
  cardBg: "#111318",
  cardBg2: "#08090c",
  cardText: "#ffffff",
  cardAccent: "#8b7bff",
  pageBg: "#050608",
  radius: 28,
  scale: 1,
  pattern: 0.14,
  duration: 720,
  font: "system",
  flipEnabled: true,
  tiltEnabled: true,
  motion: "float"
});
```

## Design guidance

Use the card as a visual foundation rather than a locked template. Change the hierarchy to fit the domain. Decorative graphics should never compete with critical information. Keep text contrast high and avoid using color as the only status indicator.

For physical-card-inspired interfaces, never place real credentials, payment details, authentication secrets, real CVVs, or other sensitive values in public demos or screenshots.

## Accessibility

The demo uses native form controls and buttons in the customization panel. Motion respects `prefers-reduced-motion`. If you integrate the card into a production application, provide meaningful labels for interactive controls and ensure any decorative content is ignored by assistive technologies when appropriate.

## Responsive behavior

The studio switches from a two-column workspace to a single-column layout on narrower screens. The card itself uses fluid typography and a maximum width rather than fixed desktop dimensions.

## Performance

The effect uses only CSS transitions and one lightweight `requestAnimationFrame` loop for pointer tilt interpolation. It does not load a rendering engine, animation package, or framework.

If you do not need pointer tilt, disable it:

```js
window.cardCollectionDemo.setConfig({
  tiltEnabled: false
});
```

## Security

This repository contains UI demonstrations only. It does not process real payment data, credentials, identity documents, ticket credentials, or access tokens.

See the root `SECURITY.md` for vulnerability reporting.

## License

MIT. You may use and customize this demo in personal and commercial projects subject to the repository license.
