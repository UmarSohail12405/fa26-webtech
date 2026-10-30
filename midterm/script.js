// Task 3: live search, price sort, Premium label (plain JavaScript)
// N = 65  ->  Premium limit = N x 100 = 6500

const PREMIUM_LIMIT = 6500;

const grid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const sortButton = document.getElementById("sort-price");
const noResults = document.getElementById("no-results");
const categoryRadios = document.querySelectorAll('input[name="category"]');

// Read the price from the card itself: "Rs. 215,000" -> 215000
function getPrice(card) {
  return Number(card.querySelector(".price").textContent.replace(/[^0-9]/g, ""));
}

function getName(card) {
  return card.querySelector("h3").textContent.toLowerCase();
}

function getSelectedCategory() {
  return document.querySelector('input[name="category"]:checked').value;
}

// A card is visible only if it matches BOTH the search text and the category filter.
// The category is hidden by CSS (Task 1); here we only use the `hidden` attribute for
// the search, then count what is really visible to decide about the message.
function applyFilters() {
  const text = searchInput.value.trim().toLowerCase();
  const category = getSelectedCategory();
  let visibleCount = 0;

  grid.querySelectorAll(".card").forEach(function (card) {
    const matchesSearch = getName(card).includes(text);
    const matchesCategory = category === "all" || card.dataset.category === category;

    card.hidden = !matchesSearch;
    if (matchesSearch && matchesCategory) {
      visibleCount++;
    }
  });

  // "No products found" replaces the grid when nothing is visible
  noResults.hidden = visibleCount !== 0;
  grid.hidden = visibleCount === 0;
}

searchInput.addEventListener("input", applyFilters);
categoryRadios.forEach(function (radio) {
  radio.addEventListener("change", applyFilters);
});

// Sort by price: toggles low -> high, then high -> low, ...
let ascending = true;

sortButton.addEventListener("click", function () {
  const cards = Array.from(grid.querySelectorAll(".card"));

  cards.sort(function (a, b) {
    return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
  });

  // appendChild MOVES an existing element, so this re-orders the real cards
  cards.forEach(function (card) {
    grid.appendChild(card);
  });

  sortButton.textContent = ascending ? "Sort by price (low → high)" : "Sort by price (high → low)";
  ascending = !ascending;
});

// "Premium" label for products above N x 100
grid.querySelectorAll(".card").forEach(function (card) {
  if (getPrice(card) > PREMIUM_LIMIT) {
    const label = document.createElement("span");
    label.className = "premium-label";
    label.textContent = "Premium";
    card.insertBefore(label, card.firstChild);
  }
});
