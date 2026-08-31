# card-collection

A professional collection of fifteen reusable card interfaces built with HTML, CSS, and vanilla JavaScript.

The repository is both a visual gallery and a source-code learning project. Every demo can be opened independently, customized live, exported as CSS variables or JSON, and adapted into another application.

## Included cards

| No. | Card | Category |
| --- | --- | --- |
| 01 | Credit Card | Finance |
| 02 | Debit Card | Finance |
| 03 | Business Card | Identity |
| 04 | Membership Card | Identity |
| 05 | ID Profile Card | Identity |
| 06 | Loyalty Card | Commerce |
| 07 | Gift Card | Commerce |
| 08 | Event Ticket Card | Travel |
| 09 | Boarding Pass | Travel |
| 10 | Hotel Key Card | Hospitality |
| 11 | Pricing Card | Web UI |
| 12 | Product Card | Web UI |
| 13 | Dashboard Stat Card | Dashboard |
| 14 | Project Card | Productivity |
| 15 | Social Profile Card | Social |

## Why this repository exists

Card UI examples are often presented as screenshots or isolated snippets. This project treats each card as a small, complete interface with documentation, responsive behavior, customization, interaction, accessibility considerations, and source code that can actually be reused.

## Features

- 15 complete card demos
- independent HTML, CSS, JavaScript, and README files
- live title and subtitle editing
- theme presets
- full color customization
- independent front and back palettes
- secondary accent channel
- seven pattern families
- pattern scale, angle, spacing, thickness, and opacity
- configurable micro-grid layer
- adjustable border strength
- adjustable shadow depth
- glass overlay strength
- gloss highlight strength
- spotlight intensity
- five preview environment backgrounds
- decorative line, ring, and block layers
- typography presets
- adjustable radius, scale, pattern density, and animation duration
- pointer-based 3D tilt
- front and back card faces
- animated float and pulse modes
- reduced-motion support
- JSON configuration import and export
- CSS variable export
- local preset save and restore
- responsive layout
- no framework dependency
- no external assets required
- professional documentation site
- automated repository verifier
- GitHub issue templates and pull-request template
- security policy
- contribution guidelines
- code of conduct
- MIT license

## Run locally

With Node available:

```bash
npm run verify
npm run serve
```

Then open:

```text
http://localhost:4173
```

You can also open `index.html` directly in a browser.

## Repository structure

```text
card-collection/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/
│   ├── card-lab.js
│   ├── main.css
│   └── main.js
├── cards/
│   ├── 01-credit-card/
│   ├── 02-debit-card/
│   ├── 03-business-card/
│   ├── 04-membership-card/
│   ├── 05-id-profile-card/
│   ├── 06-loyalty-card/
│   ├── 07-gift-card/
│   ├── 08-event-ticket-card/
│   ├── 09-boarding-pass-card/
│   ├── 10-hotel-key-card/
│   ├── 11-pricing-card/
│   ├── 12-product-card/
│   ├── 13-dashboard-stat-card/
│   ├── 14-project-card/
│   └── 15-social-profile-card/
├── docs/
├── scripts/
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── ROADMAP.md
├── SECURITY.md
└── SUPPORT.md
```

## Customization

Each demo exposes a controller:

```js
window.cardCollectionDemo.setConfig({
  cardBg: "#171a20",
  cardBg2: "#0f1116",
  cardText: "#ffffff",
  cardAccent: "#8b7bff",
  pageBg: "#08090d",
  radius: 28,
  scale: 1,
  pattern: 0.16,
  duration: 650,
  font: "system",
  motion: "float",
  tiltEnabled: true,
  flipEnabled: true
});
```

Read `docs/customization.html` for the full guide.

## Keyboard controls

When focus is not inside a form control:

```text
F  flip the card
R  reset the demo
```

## Security and sample data

All finance, identity, ticket, travel, and access-card values are fictional examples. Never place real secrets or sensitive credentials into a public demo.

Read `SECURITY.md` before reporting a vulnerability.

## Contributing

Read `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` before opening a pull request.

## License

MIT.

## Advanced visual system

The card renderer is intentionally layered.

```text
Stage background
    ↓
Card surface gradient
    ↓
Spotlight
    ↓
Pattern engine
    ↓
Micro grid
    ↓
Decorative lines / rings / blocks
    ↓
Card content
    ↓
Gloss sweep
```

This gives contributors far more control than a single gradient or background image.

### Pattern types

```text
none
diagonal
cross
grid
dots
circuit
rings
waves
```

### Example

```js
window.cardCollectionDemo.setConfig({
  patternType: "rings",
  patternGap: 18,
  patternLineWidth: 1.4,
  patternAngle: 35,
  cardAccent: "#8b7bff",
  cardAccent2: "#58d68d",
  glassOpacity: 0.10,
  glossOpacity: 0.20,
  spotlightOpacity: 0.16,
  shadowStrength: 0.40,
  stage: "spotlight"
});
```
