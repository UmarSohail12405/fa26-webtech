# Web Technologies (CSC336) - Lab Mid Term

- Name: UMAR SOHAIL
- Roll number: FA24-BCS-165
- N = 65
- BP = 600 + 65 = **665px**
- H = (65 x 7) mod 360 = 455 mod 360 = **95** -> accent colour `hsl(95, 70%, 45%)`
- K = (65 mod 3) + 3 = 2 + 3 = **5** categories (6 radio buttons with "All")
- Sticky offset = (65 mod 40) + 70 = **95px**
- Premium limit = N x 100 = **6500**

## Files changed (all inside `midterm/`)
- `index.html` - product listing page (made from `testings.html`): category filter, search box, sort button, cards turned into `article` elements
- `product.html` - product detail page (grid layout and sticky box)
- `script.js` - new file for Task 3
- `README.md` and `FA24-BCS-165-midterm.pdf`

## Task 1 - CSS-only category filter
I gave every card a `data-category` (standard, plus, pro, promax, special) and added 6 radio buttons ("All" is checked by default). When a radio is checked, a `:has()` rule hides all cards that do not belong to that category with `display: none`, so the remaining cards close up and leave no gaps. The checked label gets the accent colour `hsl(95, 70%, 45%)`. No JavaScript is used for this.

## Task 2 - Product page grid and sticky box
`product.html` uses CSS Grid with named areas. Below 665px the areas are stacked in one column (image, details, description). From 665px the areas become "image details" on the first row and "description description" on the second row. In that media query the details box gets `position: sticky; top: 95px` and `align-self: start`, so it stays 95px from the top while the page scrolls past the tall image. The description is long so the scrolling is visible.

## Task 3 - JavaScript search, sort and Premium label
`script.js` listens to the `input` event of the search box and hides cards whose name does not contain the typed text (case-insensitive). It also checks the selected category radio, so a card is counted as visible only if it matches both, and if none match it shows "No products found" instead of the grid. The sort button reads the number from each card's `.price`, sorts the existing cards and moves them with `appendChild`, switching between low-to-high and high-to-low on every click. On page load, cards priced above 6500 get a "Premium" label.

## Notes (honest)
- The baseline copy was uploaded after the Task 2 commit because I made a mistake with the GitHub upload.
- During the exam I accidentally uploaded files into `assignment-2` at about 3:25 pm instead of `midterm`. My midterm work was not changed by it.
- All five series sections were merged into one product grid so that sorting by price works across all phones.

## AI tools used
Claude (Anthropic)
