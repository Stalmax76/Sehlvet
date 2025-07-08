import './cardtrending.scss';

document.querySelectorAll('.action-cardtrending__item--icon-mark-cart').forEach((item) =>
  item.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    item.classList.toggle('action-cardtrending__item--icon-mark-cart--active');

    item.classList.toggle('active');
  })
);
