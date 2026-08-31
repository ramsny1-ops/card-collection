import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Debit Card",
  subtitle: "Everyday debit card with account tier, transaction status, secure contactless styling, and reverse details.",
  storageKey: "card-collection:02-debit-card",
  defaults: {
    preset: "ocean",
    radius: 26,
    scale: 1,
    pattern: 0.18,
    duration: 650,
    motion: "none",
    patternType: "diagonal",
    stage: "lines",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
