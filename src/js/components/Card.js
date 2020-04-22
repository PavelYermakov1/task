/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */

import store from '../store/store';

const mainCards = document.querySelectorAll('.main-card');
const listNavigation = document.querySelector('.menu');
const mainContainer = document.querySelector('.main-container');
const menuLink = document.querySelectorAll('.header-item');
const checkbox = document.querySelector('.hamburger-menu>input');

class Card {
  render() {
    switch (store.getState().switch) {
      case 'train':
        mainCards.forEach((e) => e.classList.add('green'));
        listNavigation.classList.add('green');
        break;
      case 'play':
        mainCards.forEach((e) => e.classList.remove('green'));
        listNavigation.classList.remove('green');
        break;
      default:
        break;
    }
  }

  renderCards(set) {
    const fragment = document.createDocumentFragment();

    set.forEach((e) => {
      const elementContainer = document.createElement('div');
      elementContainer.classList.add('element-container');

      const element = document.createElement('div');
      element.classList.add('element');


      const front = document.createElement('div');
      front.classList.add('front');
      front.style.backgroundImage = `url("${e.image}")`;
      front.setAttribute('data', `${e.audioSrc}`);

      const back = document.createElement('div');
      back.classList.add('back');
      back.style.backgroundImage = `url("${e.image}")`;

      const rotate = document.createElement('div');
      rotate.classList.add('rotate');

      const cardTitle = document.createElement('div');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = e.word;

      const cardTitleBack = document.createElement('div');
      cardTitleBack.classList.add('card-title');
      cardTitleBack.textContent = e.translation;

      if (store.getState().switch === 'play') {
        cardTitle.classList.add('none');
        cardTitleBack.classList.add('none');
        rotate.classList.add('none');
        element.classList.add('card-cover');
      } else if (store.getState().switch === 'train') {
        cardTitle.classList.remove('none');
        cardTitleBack.classList.remove('none');
        rotate.classList.remove('none');
        element.classList.remove('card-cover');
      }

      front.append(cardTitle);
      back.append(cardTitleBack);
      element.append(front, back, rotate);
      elementContainer.append(element);

      fragment.appendChild(elementContainer);
    });
    return fragment;
  }

  categorySelection(event) {
    const { currentTarget } = event;
    mainContainer.style.display = 'none';
    store.setState({
      category: `${currentTarget.textContent.trim()}`,
    });
    menuLink.forEach((e) => {
      e.classList.remove('active');
      if (e.textContent === store.getState().category) {
        e.classList.add('active');
      }
    });
    checkbox.checked = false;
  }
}

const card = new Card();
for (const elem of mainCards) {
  elem.addEventListener('click', card.categorySelection);
}


export default store.connect(card, ['switch']);
