import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Product Card",
  subtitle: "E-commerce product card with visual product stage, rating, price, variants, favorite state, and purchase CTA.",
  storageKey: "card-collection:12-product-card",
  defaults: {
    preset: "ocean",
    radius: 22,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "dots",
    stage: "dots",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
