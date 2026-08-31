import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Project Card",
  subtitle: "Project management card with status, progress, members, priority, due date, tags, and quick actions.",
  storageKey: "card-collection:14-project-card",
  defaults: {
    preset: "graphite",
    radius: 22,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "circuit",
    stage: "grid",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
