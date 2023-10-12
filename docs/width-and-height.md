---
sidebar_position: 5
---

# Width and Height

Basil provides classes to help you quickly set the width and height of elements, both as a percentage of their parent and as a percentage of the viewport height (vh). There are classes for 10% increments as well as for 100%.

```
/* example */
.w-10 {
  width: 10%;
}

.vh-10 {
  height: 10vh;
}

```

The same classes are also provided for larger screens (viewport width of 764px or greater), prefixed with big:.

```
/* example */
@media (min-width: 764px) {
  .big:w-10 {
    width: 10%;
  }

  .big:vh-10 {
    height: 10vh;
  }
}
```

- `.w-10` to `.w-90` and `.full-width` will set the width of an element to the specified percentage of its parent. For larger screens (minimum width of 764px), use `.big:w-10` to `.big:w-90` and `.big:full-width`.
- `.h-10` to `.h-90` and `.full-height` will set the height of an element to the specified percentage of its parent. For larger screens (minimum width of 764px), use `.big:h-10` to `.big:h-90` and `.big:full-height`.
- `.vh-10` to `.vh-100` will set the height of an element to the specified percentage of the viewport height. For larger screens (minimum width of 764px), use `.big:vh-10` to `.big:vh-100`.
