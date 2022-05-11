// toggle style switcher
const styleSwitcher = document.querySelector('.style-switcher-toggler');
const switcherOpen = document.querySelector('.style-switcher');
styleSwitcher.addEventListener('click', () => {
  switcherOpen.classList.toggle('open');
})

// hide style on scroll
window.addEventListener('scroll', () => {
  if(switcherOpen.classList.contains('open')) {
    switcherOpen.classList.remove('open');
  }
})

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// light - dark mode 
const dayNight = document.querySelector('.day-night');
const imgIonic = document.querySelector('[data-img="ionic"]')
const imgVscode = document.querySelector('[data-img="vscode"]')
const imgTs = document.querySelector('[data-img="ts"]')
const imgFirebase = document.querySelector('[data-img="firebase"]')

dayNight.addEventListener('click', () => {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
  if(dayNight.querySelector('i').classList.contains('fa-sun')) {
    imgIonic.setAttribute('src', '/img/ionic-dark.svg');
    imgVscode.setAttribute('src', '/img/vs-code-dark.svg');
    imgTs.setAttribute('src', '/img/typescript-dark.svg');
    imgFirebase.setAttribute('src', '/img/firebase-dark.svg');

  } else {
    imgIonic.setAttribute('src', '/img/ionic.svg');
    imgVscode.setAttribute('src', '/img/vs-code.svg');
    imgTs.setAttribute('src', '/img/typescript.svg');
    imgFirebase.setAttribute('src', '/img/firebase.svg');
  }
})

window.addEventListener('load', () => {
  if(document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
    dayNight.querySelector('i').classList.remove('fa-moon');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
    dayNight.querySelector('i').classList.remove('fa-sun');
  }
})

// TYPING HOME PAGE
var typed = new Typed(".typing", {
  strings: [
    '',
    '',
    'Desenvolvedor Web',
    'Desenvolvedor Mobile',
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});