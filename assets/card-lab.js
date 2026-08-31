"use strict";

export const DEFAULT_PRESETS = Object.freeze({
  midnight: {
    cardBg: "#171a20",
    cardBg2: "#0f1116",
    cardBackBg: "#101217",
    cardBackBg2: "#090b0f",
    cardText: "#ffffff",
    cardAccent: "#8b7bff",
    cardAccent2: "#58d68d",
    pageBg: "#08090d",
    patternOpacity: 0.16,
    pattern: "diagonal",
    stage: "grid"
  },
  emerald: {
    cardBg: "#0d241c",
    cardBg2: "#07130f",
    cardBackBg: "#0b1a14",
    cardBackBg2: "#050c09",
    cardText: "#f6fff9",
    cardAccent: "#58d68d",
    cardAccent2: "#9ff3be",
    pageBg: "#06100c",
    patternOpacity: 0.19,
    pattern: "grid",
    stage: "dots"
  },
  graphite: {
    cardBg: "#22252b",
    cardBg2: "#0e1013",
    cardBackBg: "#171a20",
    cardBackBg2: "#090a0d",
    cardText: "#f8f9fb",
    cardAccent: "#b3b9c4",
    cardAccent2: "#69717f",
    pageBg: "#090a0d",
    patternOpacity: 0.11,
    pattern: "cross",
    stage: "plain"
  },
  royal: {
    cardBg: "#241a3a",
    cardBg2: "#100b1c",
    cardBackBg: "#1a122b",
    cardBackBg2: "#0b0711",
    cardText: "#fbf8ff",
    cardAccent: "#a58cff",
    cardAccent2: "#d3c8ff",
    pageBg: "#090610",
    patternOpacity: 0.18,
    pattern: "rings",
    stage: "spotlight"
  },
  sunrise: {
    cardBg: "#43251a",
    cardBg2: "#1c0f0a",
    cardBackBg: "#2f1911",
    cardBackBg2: "#130906",
    cardText: "#fff9f3",
    cardAccent: "#ff9e64",
    cardAccent2: "#ffd27d",
    pageBg: "#100905",
    patternOpacity: 0.18,
    pattern: "waves",
    stage: "lines"
  },
  ocean: {
    cardBg: "#0b2530",
    cardBg2: "#06141b",
    cardBackBg: "#0a1b23",
    cardBackBg2: "#040c10",
    cardText: "#f5fdff",
    cardAccent: "#46c7e8",
    cardAccent2: "#73f0dc",
    pageBg: "#061014",
    patternOpacity: 0.17,
    pattern: "circuit",
    stage: "spotlight"
  },
  monochrome: {
    cardBg: "#171717",
    cardBg2: "#050505",
    cardBackBg: "#101010",
    cardBackBg2: "#020202",
    cardText: "#ffffff",
    cardAccent: "#ffffff",
    cardAccent2: "#8d8d8d",
    pageBg: "#050505",
    patternOpacity: 0.12,
    pattern: "dots",
    stage: "plain"
  }
});

const qs = (selector, scope = document) => scope.querySelector(selector);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function safeJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function randomHex() {
  const value = Math.floor(Math.random() * 0xffffff);
  return `#${value.toString(16).padStart(6, "0")}`;
}

export function createCardLab(options = {}) {
  const root = document.documentElement;
  const scene = qs("#cardScene");
  const front = qs("#cardFront");
  const back = qs("#cardBack");
  const preset = qs("#preset");
  const title = qs("#titleInput");
  const subtitle = qs("#subtitleInput");
  const primary = qs("#primaryColor");
  const secondary = qs("#secondaryColor");
  const text = qs("#textColor");
  const accent = qs("#accentColor");
  const page = qs("#pageColor");
  const backPrimary = qs("#backPrimaryColor");
  const backSecondary = qs("#backSecondaryColor");
  const accent2 = qs("#accentColor2");
  const patternSelect = qs("#patternSelect");
  const patternSize = qs("#patternSizeRange");
  const patternAngle = qs("#patternAngleRange");
  const patternGap = qs("#patternGapRange");
  const patternLineWidth = qs("#patternLineWidthRange");
  const gridOpacity = qs("#gridOpacityRange");
  const gridSize = qs("#gridSizeRange");
  const borderWidth = qs("#borderWidthRange");
  const shadowStrength = qs("#shadowStrengthRange");
  const glassOpacity = qs("#glassOpacityRange");
  const glossOpacity = qs("#glossOpacityRange");
  const spotlightOpacity = qs("#spotlightOpacityRange");
  const stageSelect = qs("#stageSelect");
  const radius = qs("#radiusRange");
  const scale = qs("#scaleRange");
  const pattern = qs("#patternRange");
  const duration = qs("#durationRange");
  const font = qs("#fontSelect");
  const flipEnabled = qs("#flipEnabled");
  const tiltEnabled = qs("#tiltEnabled");
  const motion = qs("#motionSelect");
  const flipButton = qs("#flipButton");
  const resetButton = qs("#resetButton");
  const randomButton = qs("#randomButton");
  const exportButton = qs("#exportButton");
  const copyCssButton = qs("#copyCssButton");
  const importArea = qs("#importArea");
  const importButton = qs("#importButton");
  const saveButton = qs("#saveButton");
  const loadButton = qs("#loadButton");
  const statusTheme = qs("#statusTheme");
  const statusMotion = qs("#statusMotion");
  const statusFlip = qs("#statusFlip");
  const statusStorage = qs("#statusStorage");

  const titleTarget = qs("[data-card-title]");
  const subtitleTarget = qs("[data-card-subtitle]");

  const defaults = {
    preset: options.preset || "midnight",
    title: options.title || titleTarget?.textContent?.trim() || "Card title",
    subtitle: options.subtitle || subtitleTarget?.textContent?.trim() || "Customizable card UI",
    font: "system",
    radius: 26,
    scale: 1,
    pattern: 0.16,
    patternType: "diagonal",
    patternSize: 180,
    patternAngle: 115,
    patternGap: 22,
    patternLineWidth: 1,
    gridOpacity: 0.08,
    gridSize: 26,
    borderWidth: 1,
    shadowStrength: 0.34,
    glassOpacity: 0.08,
    glossOpacity: 0.16,
    spotlightOpacity: 0.16,
    stage: "grid",
    duration: 650,
    flipEnabled: true,
    tiltEnabled: true,
    motion: "none",
    ...(options.defaults || {})
  };

  // Correct Python generated token above at runtime source generation.
  let config = { ...defaults, ...DEFAULT_PRESETS[defaults.preset] };
  let flipped = false;
  let rafId = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;

  const fontMap = {
    system: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    serif: 'Georgia, "Times New Roman", serif'
  };

  function cssVariables() {
    return {
      "--card-bg": config.cardBg,
      "--card-bg-2": config.cardBg2,
      "--card-back-bg": config.cardBackBg,
      "--card-back-bg-2": config.cardBackBg2,
      "--card-text": config.cardText,
      "--card-accent": config.cardAccent,
      "--card-accent-2": config.cardAccent2,
      "--page-bg": config.pageBg,
      "--card-radius": `${config.radius}px`,
      "--card-scale": String(config.scale),
      "--pattern-opacity": String(config.pattern),
      "--pattern-size": `${config.patternSize}px`,
      "--pattern-angle": `${config.patternAngle}deg`,
      "--pattern-gap": `${config.patternGap}px`,
      "--pattern-line-width": `${config.patternLineWidth}px`,
      "--grid-opacity": String(config.gridOpacity),
      "--grid-size": `${config.gridSize}px`,
      "--card-border-width": `${config.borderWidth}px`,
      "--card-shadow-strength": String(config.shadowStrength),
      "--glass-opacity": String(config.glassOpacity),
      "--gloss-opacity": String(config.glossOpacity),
      "--spotlight-opacity": String(config.spotlightOpacity),
      "--motion-duration": `${config.duration}ms`,
      "--font-family": fontMap[config.font] || fontMap.system
    };
  }

  function applyConfig() {
    for (const [name, value] of Object.entries(cssVariables())) {
      root.style.setProperty(name, value);
    }

    front.dataset.pattern = config.patternType || config.pattern || "diagonal";
    back.dataset.pattern = config.patternType || config.pattern || "diagonal";
    qs(".stage")?.setAttribute("data-stage", config.stage || "grid");

    if (titleTarget) titleTarget.textContent = config.title;
    if (subtitleTarget) subtitleTarget.textContent = config.subtitle;

    scene.classList.toggle("motion-float", config.motion === "float");
    front.classList.toggle("motion-pulse", config.motion === "pulse");
    back.classList.toggle("motion-pulse", config.motion === "pulse");

    if (!config.flipEnabled) {
      flipped = false;
      scene.classList.remove("is-flipped");
    }

    syncControls();
    syncStatus();

    options.onChange?.(structuredClone(config));
  }

  function syncControls() {
    preset.value = config.preset;
    title.value = config.title;
    subtitle.value = config.subtitle;
    primary.value = config.cardBg;
    secondary.value = config.cardBg2;
    text.value = config.cardText;
    accent.value = config.cardAccent;
    page.value = config.pageBg;
    backPrimary.value = config.cardBackBg;
    backSecondary.value = config.cardBackBg2;
    accent2.value = config.cardAccent2;
    patternSelect.value = config.patternType || config.pattern || "diagonal";
    patternSize.value = config.patternSize;
    patternAngle.value = config.patternAngle;
    patternGap.value = config.patternGap;
    patternLineWidth.value = config.patternLineWidth;
    gridOpacity.value = config.gridOpacity;
    gridSize.value = config.gridSize;
    borderWidth.value = config.borderWidth;
    shadowStrength.value = config.shadowStrength;
    glassOpacity.value = config.glassOpacity;
    glossOpacity.value = config.glossOpacity;
    spotlightOpacity.value = config.spotlightOpacity;
    stageSelect.value = config.stage;
    radius.value = config.radius;
    scale.value = config.scale;
    pattern.value = config.pattern;
    duration.value = config.duration;
    font.value = config.font;
    flipEnabled.checked = config.flipEnabled;
    tiltEnabled.checked = config.tiltEnabled;
    motion.value = config.motion;

    qs("#radiusValue").value = `${config.radius}px`;
    qs("#scaleValue").value = `${Number(config.scale).toFixed(2)}x`;
    qs("#patternValue").value = Number(config.pattern).toFixed(2);
    qs("#durationValue").value = `${config.duration}ms`;
    qs("#patternSizeValue").value = `${config.patternSize}px`;
    qs("#patternAngleValue").value = `${config.patternAngle}°`;
    qs("#patternGapValue").value = `${config.patternGap}px`;
    qs("#patternLineWidthValue").value = `${Number(config.patternLineWidth).toFixed(1)}px`;
    qs("#gridOpacityValue").value = Number(config.gridOpacity).toFixed(2);
    qs("#gridSizeValue").value = `${config.gridSize}px`;
    qs("#borderWidthValue").value = `${Number(config.borderWidth).toFixed(1)}px`;
    qs("#shadowStrengthValue").value = Number(config.shadowStrength).toFixed(2);
    qs("#glassOpacityValue").value = Number(config.glassOpacity).toFixed(2);
    qs("#glossOpacityValue").value = Number(config.glossOpacity).toFixed(2);
    qs("#spotlightOpacityValue").value = Number(config.spotlightOpacity).toFixed(2);
  }

  function syncStatus() {
    statusTheme.textContent = config.preset;
    statusMotion.textContent = config.motion;
    statusFlip.textContent = config.flipEnabled ? (flipped ? "Back" : "Front") : "Disabled";
    statusStorage.textContent = localStorage.getItem(options.storageKey || "card-collection:custom") ? "Saved" : "Empty";
  }

  function applyPreset(name) {
    const values = DEFAULT_PRESETS[name];
    if (!values) return;
    config = {
      ...config,
      ...values,
      preset: name
    };
    applyConfig();
  }

  function flip() {
    if (!config.flipEnabled) return;
    flipped = !flipped;
    scene.classList.toggle("is-flipped", flipped);
    syncStatus();
  }

  function reset() {
    config = { ...defaults, ...DEFAULT_PRESETS[defaults.preset] };
    flipped = false;
    scene.classList.remove("is-flipped");
    applyConfig();
  }

  function randomize() {
    config = {
      ...config,
      preset: "midnight",
      cardBg: randomHex(),
      cardBg2: randomHex(),
      cardAccent: randomHex(),
      cardAccent2: randomHex(),
      cardBackBg: randomHex(),
      cardBackBg2: randomHex(),
      pageBg: "#08090d",
      patternType: ["diagonal","cross","grid","dots","circuit","rings","waves"][Math.floor(Math.random() * 7)],
      stage: ["grid","dots","spotlight","lines","plain"][Math.floor(Math.random() * 5)],
      patternGap: Math.round(12 + Math.random() * 28),
      patternAngle: Math.round(Math.random() * 180),
      patternLineWidth: Number((0.5 + Math.random() * 2.5).toFixed(1)),
      gridOpacity: Number((Math.random() * 0.14).toFixed(2)),
      shadowStrength: Number((0.18 + Math.random() * 0.38).toFixed(2)),
      glassOpacity: Number((Math.random() * 0.18).toFixed(2)),
      glossOpacity: Number((Math.random() * 0.3).toFixed(2)),
      spotlightOpacity: Number((0.06 + Math.random() * 0.22).toFixed(2)),
      radius: Math.round(clamp(18 + Math.random() * 24, 12, 52)),
      pattern: Number(clamp(Math.random() * 0.35, 0, 0.4).toFixed(2)),
      scale: Number(clamp(0.92 + Math.random() * 0.12, 0.9, 1.06).toFixed(2))
    };
    applyConfig();
  }

  function exportConfig() {
    const payload = JSON.stringify(config, null, 2);
    importArea.value = payload;
    return payload;
  }

  async function copyCss() {
    const css = `:root {\n${Object.entries(cssVariables())
      .map(([name, value]) => `  ${name}: ${value};`)
      .join("\n")}\n}`;
    try {
      await navigator.clipboard.writeText(css);
      copyCssButton.textContent = "Copied";
      setTimeout(() => copyCssButton.textContent = "Copy CSS variables", 1200);
    } catch {
      importArea.value = css;
    }
  }

  function importConfig() {
    const value = safeJson(importArea.value);
    if (!value || typeof value !== "object") {
      importArea.setCustomValidity("Enter valid JSON configuration.");
      importArea.reportValidity();
      return;
    }
    importArea.setCustomValidity("");
    config = {
      ...config,
      ...value,
      radius: clamp(Number(value.radius ?? config.radius), 8, 60),
      scale: clamp(Number(value.scale ?? config.scale), 0.75, 1.25),
      pattern: clamp(Number(value.pattern ?? config.pattern), 0, 0.5),
      duration: clamp(Number(value.duration ?? config.duration), 0, 3000),
      patternSize: clamp(Number(value.patternSize ?? config.patternSize), 40, 420),
      patternAngle: clamp(Number(value.patternAngle ?? config.patternAngle), 0, 360),
      patternGap: clamp(Number(value.patternGap ?? config.patternGap), 6, 80),
      patternLineWidth: clamp(Number(value.patternLineWidth ?? config.patternLineWidth), 0.2, 6),
      gridOpacity: clamp(Number(value.gridOpacity ?? config.gridOpacity), 0, 0.3),
      gridSize: clamp(Number(value.gridSize ?? config.gridSize), 8, 80),
      borderWidth: clamp(Number(value.borderWidth ?? config.borderWidth), 0, 6),
      shadowStrength: clamp(Number(value.shadowStrength ?? config.shadowStrength), 0, 0.8),
      glassOpacity: clamp(Number(value.glassOpacity ?? config.glassOpacity), 0, 0.3),
      glossOpacity: clamp(Number(value.glossOpacity ?? config.glossOpacity), 0, 0.5),
      spotlightOpacity: clamp(Number(value.spotlightOpacity ?? config.spotlightOpacity), 0, 0.4)
    };
    applyConfig();
  }

  function saveConfig() {
    localStorage.setItem(options.storageKey || "card-collection:custom", JSON.stringify(config));
    syncStatus();
  }

  function loadConfig() {
    const saved = safeJson(localStorage.getItem(options.storageKey || "card-collection:custom") || "");
    if (!saved) return;
    config = { ...config, ...saved };
    applyConfig();
  }

  function animateTilt() {
    currentTiltX += (targetTiltX - currentTiltX) * 0.12;
    currentTiltY += (targetTiltY - currentTiltY) * 0.12;

    if (!flipped && config.tiltEnabled) {
      scene.style.setProperty("--tilt-x", `${currentTiltX.toFixed(2)}deg`);
      scene.style.setProperty("--tilt-y", `${currentTiltY.toFixed(2)}deg`);
    } else {
      scene.style.setProperty("--tilt-x", "0deg");
      scene.style.setProperty("--tilt-y", "0deg");
    }

    rafId = requestAnimationFrame(animateTilt);
  }

  function handlePointerMove(event) {
    if (!config.tiltEnabled || flipped) return;
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / Math.max(1, rect.width);
    const y = (event.clientY - rect.top) / Math.max(1, rect.height);
    targetTiltY = clamp((x - 0.5) * 10, -6, 6);
    targetTiltX = clamp((0.5 - y) * 10, -6, 6);
  }

  function clearTilt() {
    targetTiltX = 0;
    targetTiltY = 0;
  }

  preset.addEventListener("change", () => applyPreset(preset.value));
  title.addEventListener("input", () => { config.title = title.value; applyConfig(); });
  subtitle.addEventListener("input", () => { config.subtitle = subtitle.value; applyConfig(); });
  primary.addEventListener("input", () => { config.cardBg = primary.value; config.preset = "midnight"; applyConfig(); });
  secondary.addEventListener("input", () => { config.cardBg2 = secondary.value; config.preset = "midnight"; applyConfig(); });
  text.addEventListener("input", () => { config.cardText = text.value; applyConfig(); });
  accent.addEventListener("input", () => { config.cardAccent = accent.value; config.preset = "midnight"; applyConfig(); });
  page.addEventListener("input", () => { config.pageBg = page.value; applyConfig(); });
  backPrimary.addEventListener("input", () => { config.cardBackBg = backPrimary.value; applyConfig(); });
  backSecondary.addEventListener("input", () => { config.cardBackBg2 = backSecondary.value; applyConfig(); });
  accent2.addEventListener("input", () => { config.cardAccent2 = accent2.value; applyConfig(); });
  patternSelect.addEventListener("change", () => { config.patternType = patternSelect.value; applyConfig(); });
  patternSize.addEventListener("input", () => { config.patternSize = Number(patternSize.value); applyConfig(); });
  patternAngle.addEventListener("input", () => { config.patternAngle = Number(patternAngle.value); applyConfig(); });
  patternGap.addEventListener("input", () => { config.patternGap = Number(patternGap.value); applyConfig(); });
  patternLineWidth.addEventListener("input", () => { config.patternLineWidth = Number(patternLineWidth.value); applyConfig(); });
  gridOpacity.addEventListener("input", () => { config.gridOpacity = Number(gridOpacity.value); applyConfig(); });
  gridSize.addEventListener("input", () => { config.gridSize = Number(gridSize.value); applyConfig(); });
  borderWidth.addEventListener("input", () => { config.borderWidth = Number(borderWidth.value); applyConfig(); });
  shadowStrength.addEventListener("input", () => { config.shadowStrength = Number(shadowStrength.value); applyConfig(); });
  glassOpacity.addEventListener("input", () => { config.glassOpacity = Number(glassOpacity.value); applyConfig(); });
  glossOpacity.addEventListener("input", () => { config.glossOpacity = Number(glossOpacity.value); applyConfig(); });
  spotlightOpacity.addEventListener("input", () => { config.spotlightOpacity = Number(spotlightOpacity.value); applyConfig(); });
  stageSelect.addEventListener("change", () => { config.stage = stageSelect.value; applyConfig(); });
  radius.addEventListener("input", () => { config.radius = Number(radius.value); applyConfig(); });
  scale.addEventListener("input", () => { config.scale = Number(scale.value); applyConfig(); });
  pattern.addEventListener("input", () => { config.pattern = Number(pattern.value); applyConfig(); });
  duration.addEventListener("input", () => { config.duration = Number(duration.value); applyConfig(); });
  font.addEventListener("change", () => { config.font = font.value; applyConfig(); });
  flipEnabled.addEventListener("change", () => { config.flipEnabled = flipEnabled.checked; applyConfig(); });
  tiltEnabled.addEventListener("change", () => { config.tiltEnabled = tiltEnabled.checked; clearTilt(); applyConfig(); });
  motion.addEventListener("change", () => { config.motion = motion.value; applyConfig(); });

  flipButton.addEventListener("click", flip);
  resetButton.addEventListener("click", reset);
  randomButton.addEventListener("click", randomize);
  exportButton.addEventListener("click", exportConfig);
  copyCssButton.addEventListener("click", copyCss);
  importButton.addEventListener("click", importConfig);
  saveButton.addEventListener("click", saveConfig);
  loadButton.addEventListener("click", loadConfig);

  scene.addEventListener("pointermove", handlePointerMove);
  scene.addEventListener("pointerleave", clearTilt);

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea, select")) return;
    if (event.key.toLowerCase() === "f") flip();
    if (event.key.toLowerCase() === "r") reset();
  });

  applyConfig();
  rafId = requestAnimationFrame(animateTilt);

  return {
    getConfig: () => structuredClone(config),
    setConfig(next) {
      config = { ...config, ...next };
      applyConfig();
    },
    applyPreset,
    flip,
    reset,
    randomize,
    exportConfig,
    destroy() {
      cancelAnimationFrame(rafId);
      scene.replaceWith(scene.cloneNode(true));
    }
  };
}
