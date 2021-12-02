# Frontend Mentor - myteam website solution

This is a solution to the [myteam website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW)

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for each page depending on their device's screen size
-  See hover states for all interactive elements throughout the site
-  See the correct content for each team member on the About page when the + icon is clicked
-  Receive an error message when the contact form is submitted if:
-  The Name, Email Address or Message fields are empty should show "This field is required"
-  The Email Address is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./screenshot.jpg)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Mobile-first workflow
-  Flexbox
-  CSS Grid
-  Sass
-  Typescript

### What I learned

```html
<a class="skip-to-content text-pm-white btn btn--pm" href="#main-content"
   >Skip to main content</a
>

<legend class="sr-only">Contact form</legend>
```

One big step I took towards increasing the accessibility of my future projects was learning about how to implement a 'skip to content' link, which would be visually hidden but still accessible by visually impaired users of the site. This link would direct users to the `<main>` sections content, which provides a great benefit to users who don't want to tab through pre-existing content each time they visit the page.

I also included a `<legend>` within the form on the Contact page, even though according to the design one didn't seem to be present. I added the 'sr-only' class to visually hide the `<legend>` but it would still be read aloud with each form element the user would focus on.

```scss
$type-scale: (
   small: (
      fs-500-contact: 2.9rem,
      fs-500: 3.8rem,
      fs-500-about: 3.8rem,
      ...,
   ),
);

:root {
   @each $color, $value in $colors {
      --clr-#{$color}: #{$value};
   }
}

@each $color, $value in $colors {
   .text-#{$color} {
      color: var(--clr-#{$color}, $value);
   }
}
```

Since this was my first time building a multi-page site, I decided to implement the use of utility classes to handle all the basic styling required cross-site. Sass provides many features that allow us to not only produce these utility classes, but also declare CSS variables based on a set of data housed in either a map or list. Furthermore, these variables can be re-declared at different media breakpoints so that their value changes, ultimately providing us a neat syntax to achieving responsiveness design within our projects.

```scss
.sidebar {
   display: none;
   @include mq(max-width, tablet) {
      display: block;
      padding: min(10rem, 20vh) 3rem;
   }
}
```

Logical properties - min(), max() + inset, aspect-ratio, grid + place-items: center (shorthands)

```scss
.header {
   @include m(home) {
      @include mq(min-width, large) {
         background-image: url('../assets/bg/bg-pattern-home-1.svg');
         background-repeat: no-repeat;
         background-position: calc(0% - 100px) 90%;
         background-size: 200px;
      }
      @include mq(min-width, align-mw) {
         background-position: calc(0% - 100px) 37%;
      }
   }
}
```

Tablet design provided - opened our eyes to design possibilityes + ways of filling space | not just enlarging font + trying to fit it all barely in until major change happens for medium screens (flex-row) | moving bg imgs around vs hidding them (wider styles)

```ts
 const isVisible = hamburger.getAttribute('aria-expanded')
   if (isVisible === 'false') {
      hamburger.setAttribute('aria-expanded', 'true')
```

```html
<body class="home bg-pm-green text-pm-white" data-visible="false">
   ...
</body>
```

Accessibility - aria-expand + selected | using data attrs - toggle mobile nav + overlay on body | use same data attr for multiple purposes | classes - often doing descendant class selctors (which can interfere with other dynamic classes in same context) | always a powerful technique - tooltips | like to seperate classes from JS where possible - keep to data naming convention | using data-required to select forms below...

```ts
function validate(e: Event) {
   const userData: HTMLInputElement[] = Array.from(
      form.querySelectorAll('[data-required="true"]')
   )
   const errors = userData.filter(
      (input) => input.value === '' || input.value === null
   )
   if (
      !regex.test(email.value) &&
      !errors.find((input) => input.id === 'input-email')
   )
      errors.push(email)
   if (errors.length) {
      e.preventDefault()
      errors.forEach((input) => createErrorMsg(input))
   }
}
```

Validation - dynamic methods (from React) | boolean logic being auto-returned from these | checking if length is thruthy - no need to specify number

### Continued development

Development process - building design system 1st vs writing HTML 1st (have classes to apply)

SVG animation - hamburger + cross icons in about page | add extra level of sophistication

Sass maps - more organised | Sass lists - haven't used yet (brake up maps more if appropiate)

### Useful resources

-  [Build a space travel website with Kevin Powell](https://scrimba.com/learn/spacetravel) - As this way my first multi-page project to this degree of scale, I wanted to adopt a methodology that allowed me to work efficiently when tackling such a project. Kevin is an amazing teacher who I learn from every time I watch him, and this series of lessons helped me refine the way I wrote organised and efficient CSS (most notably through the increasing use of utility classes).

-  [Modular CSS with Sass Course](https://teamtreehouse.com/library/modular-css-with-sass) - Treehouse is an immense resource of great information from long-time developers in the industry. Although some of it can be outdated, the theoretical knowledge you gain of how the tech works behind the scenes way outweighs that small issue.

-  [Kevin Powell - most common HTML mistakes](https://www.youtube.com/watch?v=NexL5_Vdoq8&ab_channel=KevinPowell) - This video was a great resource in showing me how to semantically structure a HTML page, focusing on not overusing headings and instead styling additional context about sections of content in the style of another element, if that design is desired.

-  [Generate Custom Properties & Utility Classes with Sass](https://www.youtube.com/watch?v=gP8yFWCTr7Q&ab_channel=KevinPowell) - As mentioned previously, I decided to use utility classes throughout the whole of this project to cover a lot of the basic styles the design required (font-sizes, colours, etc). Since I was working in Sass, I used this tutorial to learn more about specific features like `@each` loops, that we can use to generate variables and utility classes based off data inputted into either Sass maps or lists.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()
