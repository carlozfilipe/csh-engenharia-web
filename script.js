const nav = document.querySelector('.container');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('#header');
const backToTopButton = document.querySelector('.back-to-top');
const navHeight = header.offsetHeight;
const sections = document.querySelectorAll('main section[id]');

function changeHeaderWhenScroll() {
  window.scrollY >= navHeight
    ? header.classList.add('scroll')
    : header.classList.remove('scroll')
}

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* Toggle button */
for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/* Links */
for (const link of links) {
  link.addEventListener('click', () => nav.classList.remove('show'));
}

/* Testimonials - SwiperJS */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  mousewheel: false,
  keyboard: true,
  breakpoints: { 
    767:{
    slidesPerView: 2,
    setWrapperSize: true
    }
  }
});

/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 }
);

/* Active menu */
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active');
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active');
    }
  }
}

/* Change scroll and Back to top button*/
window.addEventListener('scroll', function() {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

