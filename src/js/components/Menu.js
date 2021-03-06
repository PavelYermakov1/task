/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */

import store from '../store/store';

const menuLink = document.querySelectorAll('.header-item');
const mainContainer = document.querySelector('.main-container');


class Menu {
  render() {

  }

  activedMenu(event) {
    const { target } = event;
    menuLink.forEach((e) => e.classList.remove('active'));
    target.classList.toggle('active');
    mainContainer.style.display = 'none';
    store.setState({
      category: `${target.textContent.trim()}`,
    });
  }
}

const menu = new Menu();

for (const elem of menuLink) {
  elem.addEventListener('click', menu.activedMenu);
}

export default menu;
