---
sidebar_position: 3
---

# Grid System

## Rows

Basil includes a grid system using CSS grid layout. The .row class creates a grid container with 8 equal columns.

```
/* example */
.row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: var(--sm);
}
```

- The `.row` class should be used to define a horizontal row. It utilizes CSS grid layout's `grid-template-columns` to automatically divide the row into 8 equal parts. The grid gap (spacing between cells) is defined using the small size CSS variable (`--sm`).

- For larger screens (minimum width of 764px), use `.big:row` to define a row. The functionality is the same as the `.row` class.

```
/* example */
@media (min-width: 764px) {
  .big:row {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: var(--sm);
  }
}
```

## Columns

- `.col-1` to `.col-8` will each span their number of columns. For example, `.col-1` will span 1 column, and `.col-8` will span 8 columns.
- At a minimum screen width of 764px, the `.big:col-1` to `.big:col-8` classes behave similarly, allowing you to adjust your layout for larger screens.

```
/* example */
.col-1 {
  grid-column: span 1;
}
```

The same classes are also provided for larger screens (viewport width of 764px or greater), prefixed with big:.

```
/* example */
@media (min-width: 764px) {
  .big:col-1 {
    grid-column: span 1;
  }
}
```
