const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.hero__backdrop');

if (openBtn && closeBtn && backdrop) {
  openBtn.addEventListener('click', () => {
    backdrop.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    backdrop.classList.remove('active');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('active');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      backdrop.classList.remove('active');
    }
  });
}
