const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '76px';
    navLinks.style.left = '1rem';
    navLinks.style.right = '1rem';
    navLinks.style.padding = '1rem';
    navLinks.style.border = '1px solid rgba(148, 163, 184, 0.2)';
    navLinks.style.borderRadius = '16px';
    navLinks.style.background = 'rgba(15, 23, 42, 0.9)';
    navLinks.style.flexDirection = 'column';
    navLinks.style.alignItems = 'flex-start';
  });
}

const presets = document.querySelectorAll('.preset-card');
presets.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 18px 40px rgba(56, 189, 248, 0.16)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
