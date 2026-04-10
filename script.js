// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile nav when a link is clicked
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
  });
});

// Shrink nav on scroll
const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    nav.style.boxShadow = '0 1px 8px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
  lastScroll = y;
}, { passive: true });
