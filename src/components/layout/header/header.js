import './header.scss';

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const container = header.querySelector('.header__container');

  if (window.scrollY > 30) {
    container.classList.add('scrolled');
  } else {
    container.classList.remove('scrolled');
  }
});
