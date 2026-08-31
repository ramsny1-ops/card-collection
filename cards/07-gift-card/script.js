import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Gift Card",
  subtitle: "Digital gift card with balance, recipient, message, redemption code, and celebratory motion.",
  storageKey: "card-collection:07-gift-card",
  defaults: {
    preset: "sunrise",
    radius: 26,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "waves",
    stage: "spotlight",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
