import menuTemplate from '../templates/menu.hbs';
import menuData from '../menu.json';

const markup = menuTemplate(menuData);

const menuRef = document.querySelector('ul.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
