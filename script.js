const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    navLinks.dataset.open = 'false';
    menuButton.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navLinks.classList.add('is-open');
    navLinks.dataset.open = 'true';
    menuButton.setAttribute('aria-expanded', 'true');
  };

  const toggleMenu = () => {
    const isOpen = navLinks.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (event) => {
    const clickedInside = menuButton.contains(event.target) || navLinks.contains(event.target);
    if (!clickedInside) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

const presetCards = document.querySelectorAll('.preset-card');
presetCards.forEach((card) => {
  const applyHover = () => {
    card.style.boxShadow = '0 18px 40px rgba(56, 189, 248, 0.16)';
  };

  const removeHover = () => {
    card.style.boxShadow = 'none';
  };

  card.addEventListener('mouseenter', applyHover);
  card.addEventListener('mouseleave', removeHover);
  card.addEventListener('focusin', applyHover);
  card.addEventListener('focusout', removeHover);
});
