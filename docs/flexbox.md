---
sidebar_position: 4
---

# Flexbox System

### Flex Containers

In Basil.css, the `.flex-row` and `.flex-column` class establishes a flex container.

```css
.flex-row {
  display: flex;
}
```

Elements within a flex container become flex items.

To switch to a column-based flex container, you can use the .flex-column class.

```css
.flex-column {
  display: flex;
  flex-direction: column;
}
```

### Flex Direction and Wrapping

To change the flex direction and wrapping, use `.flex-row-wrap`, `.flex-row-nowrap`, `.flex-column-wrap`, and `.flex-column-nowrap`.

```css
.flex-row-wrap {
  flex-flow: row wrap;
}
```

```css
.flex-row-nowrap {
  flex-flow: row nowrap;
}
```

```css
.flex-column-wrap {
  flex-flow: column wrap;
}
```

```css
.flex-column-nowrap {
  flex-flow: column nowrap;
}
```

### Justify and Align

`.justify-start`, `.justify-center`, `.justify-end`, `.justify-between`, and `.justify-around` can be used to set the justify-content property.

`.align-start`, `.align-center`, `.align-end`, `.align-baseline`, and `.align-stretch` can be used to set the align-items property.

```css
.justify-start {
  justify-content: flex-start;
}
```

```css
.align-start {
  align-items: flex-start;
}
```

### Large screens

For larger screens (minimum width of 764px), use the `.big:`prefix to change the layout. The functionality is the same as the .flex class.

```css
@media (min-width: 764px) {
  .big:flex {
    display: flex;
  }
}
```
