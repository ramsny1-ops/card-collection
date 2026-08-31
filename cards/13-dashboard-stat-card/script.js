import { createCardLab } from "../../assets/card-lab.js";

const lab = createCardLab({
  title: "Dashboard Stat Card",
  subtitle: "Analytics KPI card with metric, delta, micro chart, target status, and density controls.",
  storageKey: "card-collection:13-dashboard-stat-card",
  defaults: {
    preset: "emerald",
    radius: 22,
    scale: 1,
    pattern: 0.12,
    duration: 650,
    motion: "none",
    patternType: "grid",
    stage: "grid",
    flipEnabled: true,
    tiltEnabled: true
  }
});

window.cardCollectionDemo = lab;
