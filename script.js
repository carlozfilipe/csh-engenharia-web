const nav = document.querySelector('.container');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

/* toggle button */
for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/* links */
for (const link of links) {
  link.addEventListener('click', () => nav.classList.remove('show'));
}

/* change scroll */
window.addEventListener('scroll', () =>
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
);
