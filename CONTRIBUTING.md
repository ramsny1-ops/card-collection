# Contributing to card-collection

Thank you for improving the project.

## Principles

A contribution should improve usability, implementation quality, documentation, accessibility, performance, or visual craft. Avoid adding complexity only to make a demo look more technical.

## Development

```bash
npm run verify
npm run serve
```

## New card requirements

Every new card must include:

```text
index.html
style.css
script.js
README.md
```

A new card must also:

- use fictional demonstration data
- work without a framework
- remain usable on narrow screens
- respect reduced-motion preferences
- use semantic native controls for interactive settings
- document customization
- document reuse
- avoid unnecessary dependencies
- pass `npm run verify`

## Pull requests

Keep pull requests focused. Explain the user-facing change, technical approach, testing performed, and any accessibility or performance implications.

## Code style

Use two-space indentation. Prefer `const` unless reassignment is necessary. Use modern JavaScript modules. Prefer browser platform APIs over dependencies.

## Design style

Prefer clear hierarchy, readable typography, restrained decoration, and meaningful interaction. Avoid visual effects that reduce legibility.

## Commit guidance

Short descriptive messages are preferred.

Examples:

```text
feat: add insurance card demo
fix: preserve flip state after palette change
docs: expand accessibility guidance
refactor: simplify card preset runtime
```
