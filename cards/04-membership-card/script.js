import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Membership Card",
  subtitle: "Club membership card with tier, member ID, expiry, benefits, and premium visual hierarchy.",
  storageKey: "card-collection:04-membership-card",
  defaults: {
    preset: "royal",
    radius: 26,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "rings",
    stage: "spotlight",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
