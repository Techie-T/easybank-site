# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Easybank landing page solution](#frontend-mentor---easybank-landing-page-solution)
  - [Table of contents](#table-of-contents)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![alt text](<Screenshot (79).png>)

### Links

- Solution URL: [(https://github.com/Techie-T/easybank-site.git)](Github Repository)
- Live Site URL: [(https://kaleidoscopic-mousse-763a4f.netlify.app/)](Netlify)

## My process

Started with the html file and added the functionality, started by creating the mobile vresion before moving to the desktop view of the website, had some issues with the hero section but was able to navigate through it

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- A little bit of javascript

### What I learned

I learnt that creating the mobile version before the desktop version is quite easier for me and a little more responsive than my other codes.

```html
<article></article>
```

```css
show-menu {
}
```

```js
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const menuBar = document.getElementById("nav-menu");
  menuBar.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
```

### Continued development

I would like to improve my JS knowldege and advance more in the web space, i found that building the mobile first helps make the code more responsive.

## Acknowledgments

All thanks to the leaders of web3brigde for creating this wonderful expereience and all thanks to Jehovah for the grace to find the program no matter my location.
