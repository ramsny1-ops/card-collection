import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Boarding Pass",
  subtitle: "Flight boarding pass with route, gate, seat, boarding time, barcode pattern, and compact travel hierarchy.",
  storageKey: "card-collection:09-boarding-pass-card",
  defaults: {
    preset: "ocean",
    radius: 26,
    scale: 1,
    pattern: 0.18,
    duration: 650,
    motion: "none",
    patternType: "grid",
    stage: "grid",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
