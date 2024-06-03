let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.skills .container .bar');
  bars.forEach((bar) => {
    bar.addEventListener('click', function () {
      const link = bar.getAttribute('data-link');
      if (link) {
        window.open(link, '_blank');
      }
    });
  });
  const educationContents = document.querySelectorAll('.education .content');
  educationContents.forEach((content) => {
    content.addEventListener('click', function () {
      const link = content.getAttribute('data-link');
      if (link) {
        window.open(link, '_blank');
      }
    });
  });
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
