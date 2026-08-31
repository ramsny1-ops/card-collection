import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Social Profile Card",
  subtitle: "Creator profile card with identity, role, stats, links, follow state, visual banner, and compact responsive mode.",
  storageKey: "card-collection:15-social-profile-card",
  defaults: {
    preset: "royal",
    radius: 22,
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
