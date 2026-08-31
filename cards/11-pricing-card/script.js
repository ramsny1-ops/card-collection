import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Pricing Card",
  subtitle: "SaaS pricing card with plan title, price, feature list, CTA, badge, hover depth, and theme controls.",
  storageKey: "card-collection:11-pricing-card",
  defaults: {
    preset: "royal",
    radius: 22,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "cross",
    stage: "spotlight",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
