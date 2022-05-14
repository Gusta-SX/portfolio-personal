// outside click
function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {html.addEventListener(userEvent, handleOutside)});
    })
    element.setAttribute(outside, '');
  }
  
  function handleOutside(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside, '');
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutside);
      })
      callback();
    }
  }
}

// toggle style switcher
const events = ['click', 'touchstart', 'scroll'];
const styleSwitcher = document.querySelector('.style-switcher-toggler');
const switcherOpen = document.querySelector('.style-switcher');

function openSwitcher() {
  switcherOpen.classList.toggle('open');
  outsideClick(switcherOpen, events, () => {
    switcherOpen.classList.remove('open');
  });
}

events.forEach(event => {
  styleSwitcher.addEventListener(event, openSwitcher)
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
  switcherOpen.classList.remove('open');
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