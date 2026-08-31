import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Credit Card",
  subtitle: "Premium banking card with chip, masked number, holder details, network mark, flip-to-back CVV area.",
  storageKey: "card-collection:01-credit-card",
  defaults: {
    preset: "royal",
    radius: 26,
    scale: 1,
    pattern: 0.18,
    duration: 650,
    motion: "none",
    patternType: "circuit",
    stage: "grid",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
