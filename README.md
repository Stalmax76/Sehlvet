//================= English documentation =================

🧩 Core technologies
HTML5 The page structure is built using modern semantic HTML5, using the <header>, <main>, <section>, <footer> elements for logical content organization.

CSS (SCSS/Minified) Styling is implemented via an external index.min.css file, likely generated from SCSS. Modular classes, BEM methodology (block\_\_element--modifier) ​​and adaptive styles are used.

JavaScript (ES Modules) The index.min.js script is connected as an ES module. It is responsible for interactivity: opening a modal window, working with burger menus, sliders, buttons, etc.

Swiper.js The Swiper library is used to implement sliders (for example, the reviews section), as can be seen from the swiper-slide, swiper-wrapper, swiper-button-prev/next classes.

WebP and Picture Element Images are optimized in .webp format, and <picture> is used for adaptive loading depending on the screen width.

Custom Font Preloading The wilkysta.woff2 font is preloaded, which improves performance.

ARIA and Accessibility Partially implemented accessibility via aria-label for social icons.

🛠️ Additional features
Modular component structure Components have their own classes with prefixes (cardtrending**, sectionheader**, item-reviews\_\_), which indicates a component approach.

Responsive design Use of media queries (<source media="(max-width: 600px)">) and classes for mobile image variants.

Interactive elements Buttons with classes btn--icon-arrow-exp, open-modal-btn, icon-menu — interactive, probably with animations or JS events.

// ================= Українська документація =================
🧩 Основні технології
HTML5 Структура сторінки побудована за допомогою сучасного семантичного HTML5, з використанням елементів <header>, <main>, <section>, <footer> для логічної організації контенту.

CSS (SCSS/Minified) Стилізація реалізована через зовнішній файл index.min.css, ймовірно згенерований із SCSS. Використовуються модульні класи, BEM-методологія (block\_\_element--modifier) та адаптивні стилі.

JavaScript (ES Modules) Підключено скрипт index.min.js як ES-модуль. Він відповідає за інтерактивність: відкриття модального вікна, роботу бургер-меню, слайдерів, кнопок тощо.

Swiper.js Для реалізації слайдерів (наприклад, секція відгуків) використовується бібліотека Swiper, що видно з класів swiper-slide, swiper-wrapper, swiper-button-prev/next.

WebP та Picture Element Зображення оптимізовані у форматі .webp, а <picture> використовується для адаптивного завантаження залежно від ширини екрану.

Custom Font Preloading Шрифт wilkysta.woff2 підвантажується через preload, що покращує продуктивність.

ARIA та Accessibility Частково реалізована доступність через aria-label для соціальних іконок.

🛠️ Додаткові особливості
Модульна структура компонентів Компоненти мають власні класи з префіксами (cardtrending**, sectionheader**, item-reviews\_\_), що свідчить про компонентний підхід.

Адаптивний дизайн Використання медіа-запитів (<source media="(max-width: 600px)">) та класів для мобільних варіантів зображень.

Інтерактивні елементи Кнопки з класами btn--icon-arrow-exp, open-modal-btn, icon-menu — інтерактивні, ймовірно з анімаціями або подіями JS.
