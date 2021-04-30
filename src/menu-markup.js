import menuCardsTemplate from "./menu-item.hbs"
import menCards from "./menu.json"

const menuContainer = document.querySelector('.js-menu');
menuContainer.insertAdjacentHTML('afterbegin', menuCardsTemplate(menCards));

