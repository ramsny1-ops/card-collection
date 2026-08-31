import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Hotel Key Card",
  subtitle: "Hospitality key card with guest name, room, stay dates, access zones, and elegant reverse instructions.",
  storageKey: "card-collection:10-hotel-key-card",
  defaults: {
    preset: "graphite",
    radius: 26,
    scale: 1,
    pattern: 0.18,
    duration: 650,
    motion: "none",
    patternType: "rings",
    stage: "plain",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
