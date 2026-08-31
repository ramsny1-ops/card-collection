import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Loyalty Card",
  subtitle: "Rewards card with points, progress, tier, next milestone, and a scannable visual area.",
  storageKey: "card-collection:06-loyalty-card",
  defaults: {
    preset: "emerald",
    radius: 26,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "dots",
    stage: "spotlight",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
