import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Event Ticket Card",
  subtitle: "Event admission card with venue, date, seat, ticket status, barcode-like detail, and animated tear line.",
  storageKey: "card-collection:08-event-ticket-card",
  defaults: {
    preset: "royal",
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
