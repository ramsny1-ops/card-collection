"use strict";

const searchInput = document.querySelector("#searchInput");
const filter = document.querySelector("#categoryFilter");
const cards = [...document.querySelectorAll("[data-demo-card]")];
const count = document.querySelector("#visibleCount");

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const category = filter.value;

  let visible = 0;

  for (const card of cards) {
    const haystack = `${card.dataset.title} ${card.dataset.tags}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = category === "all" || card.dataset.category === category;
    const show = matchesQuery && matchesCategory;

    card.hidden = !show;
    if (show) visible += 1;
  }

  count.textContent = String(visible);
}

searchInput.addEventListener("input", applyFilters);
filter.addEventListener("change", applyFilters);
applyFilters();
