import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Business Card",
  subtitle: "Professional identity card with role, contact information, company details, QR-inspired visual block, and alternate reverse.",
  storageKey: "card-collection:03-business-card",
  defaults: {
    preset: "graphite",
    radius: 26,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "grid",
    stage: "dots",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
