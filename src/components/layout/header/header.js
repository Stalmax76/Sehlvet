import './header.scss';

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
