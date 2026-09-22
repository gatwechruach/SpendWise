# SpendWise Budget Tracker

SpendWise is a personal budget and expense tracker designed to help users organize and monitor their financial expenses.

## Week 4: Dashboard Shell with CSS Grid and Flexbox

For Week 4, I rebuilt the SpendWise interface into a responsive dashboard shell using modern CSS layout techniques. The dashboard uses realistic static financial information without adding application functionality.

### Dashboard Structure

The dashboard contains:

- **Sidebar/Navigation** — Provides navigation links for Dashboard, Expenses, Budget, Savings, and Reports.
- **Header** — Displays the dashboard title and a welcome message.
- **Financial Cards** — Six cards display static financial information for Food, Transport, Rent, Entertainment, Savings, and Utilities.

### CSS Grid

CSS Grid is used for the overall dashboard layout.

The desktop layout contains:

- A fixed-width sidebar.
- A flexible main content area.
- A three-column grid for the six financial cards.

On smaller screens, the layout changes to a single-column structure.

### Flexbox

Flexbox is used inside:

- The sidebar
- The navigation menu
- The dashboard header
- Each financial card

This allows the content to be aligned and spaced consistently.

### CSS Custom Properties

The dashboard theme is controlled using CSS variables defined in `:root`.

The variables include:

- Brand color
- Accent color
- Surface/background color
- Primary text color
- Secondary text color
- Border color

Using CSS variables makes the design easier to maintain and customize.

### Responsive Design

A media query is used for screens below 768px.

On smaller screens:

- The sidebar and main content become a single-column layout.
- The six financial cards become one card per row.
- The dashboard header changes to a vertical layout.
- Navigation items wrap to fit smaller screens.

The responsive layout was verified using Chrome DevTools Device Toolbar.

### Card Micro-interactions

The financial cards include hover and keyboard focus effects.

When a card is hovered over or receives keyboard focus:

- It moves slightly upward.
- A subtle box shadow appears.
- The transition lasts 200 milliseconds.

These interactions provide visual feedback while keeping the interface simple.

### Dark Theme

A dark theme was added as a stretch goal using:

```css
@media (prefers-color-scheme: dark)
```

The dark theme changes the CSS custom property values while keeping the same dashboard structure and layout.

## Files

- `index.html` — Contains the dashboard structure, sidebar, header, navigation, and six financial cards.
- `style.css` — Contains the dashboard layout, Grid and Flexbox rules, theme variables, responsive design, animations, and dark theme.
- `README.md` — Documents the Week 4 dashboard implementation.
- `budget-logo.svg` — Provides the SpendWise logo.