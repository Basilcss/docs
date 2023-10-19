---
sidebar_position: 1
slug: "/"
---

# Introduction

---

## What is Basil.css

Basil.css is a lightweight and highly customizable UI framework made with the goal of bridging the gap between developers who like using UI frameworks and those who prefer styling apps without them. Basil follows mobile first design principles so it's fully responsive for both small and big devices.

By using Basil you speed up your development by only sprinkling the bare minimum of basil on your spaghetti code. Basil only uses CSS grids, flexbox, height, width, margin, padding and media queries. That leaves you to style the rest of the app with whatever CSS method you want.

## The reality of maintaining CSS

If a product is build originally with Basil, the maintainer can jump into the prjoect and change it simply by adding more CSS classes the way he likes best without having to think about learning Basil.css, thus embracing the complexity and chatotic nature of maintaning CSS.
If the maintainer wishes to use Basil.css, the framework provides an easy-to-use grid system and various utility classes that aim to speed up your development process while maintaining a high degree of flexibility.

### Here is a minimal example:

[Visit this page to see the results](https://html5.basilcss.com/)

```html
<section class="row">
  <img
    class="pic col-8 full-width vh-50 big:col-4 big:vh-100"
    src="https://source.unsplash.com/random"
    alt="lorem"
  />
  <div class="m-b-1 col-8 big:col-4 big:flex-col-justifyCenter-alignCenter">
    <div class="big:w-80">
      <h1 class="m-b-1">Lorem, ipsum dolor.</h1>
      <p class="big:w-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam
        dolores suscipit neque commodi repellat, deserunt temporibus ducimus
        quidem corporis nobis nihil inventore at officia a recusandae quasi ex
        odit.
      </p>
    </div>
  </div>
</section>
```

The above example demonstrates the core features of the framwork:

- The grid system
- The flexbox system
- The mobile first responsive layout
- The width & height system
- The margin & padding system

You may already have questions - don't worry. We will cover every little detail in the rest of the documentation.

[If you wish to help out with the development of the framework, feel free to make a pull request in the repo](https://github.com/Basilcss/core)
