import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "ID Profile Card",
  subtitle: "Modern staff or student identification card with avatar, verified status, department, and emergency detail reverse.",
  storageKey: "card-collection:05-id-profile-card",
  defaults: {
    preset: "ocean",
    radius: 26,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "cross",
    stage: "grid",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
