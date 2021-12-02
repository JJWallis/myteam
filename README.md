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
-  [Acknowledgments](#acknowledgments)

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
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
   color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
   console.log('🎉')
}
```

### Continued development

Development process - building design system 1st vs writing HTML 1st (have classes to apply)

Img handling -

SVG animation -

Sass maps - for out-putting CSS rules (vs hard-coding)

Accessibility - write more semantic HTML (better wrappers, multiple headers + footers, headings where appropaite)

### Useful resources

-  [Build a space travel website with Kevin Powell](https://scrimba.com/learn/spacetravel) - As this way my first multi-page project to this degree of scale, I wanted to adopt a methodology that allowed me to work efficiently when tackling such a project. Kevin is an amazing teacher who I learn from every time I watch him, and this series of lessons helped me refine the way I wrote organised and efficient CSS (most notably through the increasing use of utility classes).

-  [Modular CSS with Sass Course](https://teamtreehouse.com/library/modular-css-with-sass) - Treehouse is an immense resource of great information from long-time developers in the industry. Although some of it can be outdated, the theoretical knowledge you gain of how the tech works behind the scenes way outweighs that small issue.

-  [Kevin Powell - most common HTML mistakes](https://www.youtube.com/watch?v=NexL5_Vdoq8&ab_channel=KevinPowell) - This video was a great resource in showing me how to semantically structure a HTML page, focusing on not overusing headings and instead styling additional context about sections of content in the style of another element, if that design is desired.

-  [Generate Custom Properties & Utility Classes with Sass](https://www.youtube.com/watch?v=gP8yFWCTr7Q&ab_channel=KevinPowell) - As mentioned previously, I decided to use utility classes throughout the whole of this project to cover a lot of the basic styles the design required (font-sizes, colours, etc). Since I was working in Sass, I used this tutorial to learn more about certain features

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments

###### TODO

HTML:

CSS:

JS:

Design system - utility classes pre HTML | components + how to re-use as much as poss (1st with ultilities after)

Accessibility - aria-selected

specific selectors to re-use active class + keep JS code more DRY

Sass TH features - organised map vs hardcoding css vars + utility classes | placeholders vs utility classes

CSS vars vs Sass vars - overriding | alpha channel | can’t override Sass variables directly (have to declare multiple versions of them)

Accessibility - form (aria-label + legend + labels - with .sr-only class)

Tablet design provided - opened our eyes to design possibilityes + ways of filling space | not just enlarging font + trying to fit it all barely in until major change happens for medium screens (flex-row) | moving bg imgs around vs hidding them (wider styles)

Logical properties - min(), max() + inset, aspect-ratio, grid + place-items: center (shorthands)
