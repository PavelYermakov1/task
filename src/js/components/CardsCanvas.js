/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import store from '../store/store';
import sets from '../constants/sets';
import Card from './Card';
import ButtonGame from './ButtonGame';


const mainContainer = document.querySelector('.main-container');


class CardsCanvas {
  render() {
    const prevCategoryContainer = document.querySelector('.category-container');
    if (store.getState().category !== null) {
      if (prevCategoryContainer) {
        prevCategoryContainer.remove();
      }


      mainContainer.insertAdjacentHTML('afterend', '<div class="category-container"></div>');

      const rating = document.createElement('div');
      rating.classList.add('rating');
      rating.classList.add('none');

      const categoryContainer = document.querySelector('.category-container');
      categoryContainer.append(rating);
      switch (store.getState().category) {
        case 'Main Page':
          categoryContainer.style.display = 'none';
          mainContainer.style.display = 'flex';
          break;
        case 'Action (set A)':
          categoryContainer.append(Card.renderCards(sets.setA));
          this.audioPlay(sets.setA);
          break;
        case 'Action (set B)':
          categoryContainer.append(Card.renderCards(sets.setB));
          this.audioPlay(sets.setB);
          break;
        case 'Action (set C)':
          categoryContainer.append(Card.renderCards(sets.setC));
          this.audioPlay(sets.setC);
          break;
        case 'Adjective':
          categoryContainer.append(Card.renderCards(sets.adjective));
          this.audioPlay(sets.adjective);
          break;
        case 'Animal (set A)':
          categoryContainer.append(Card.renderCards(sets.setD));
          this.audioPlay(sets.setD);
          break;
        case 'Animal (set B)':
          categoryContainer.append(Card.renderCards(sets.setI));
          this.audioPlay(sets.setI);
          break;
        case 'Clothes':
          categoryContainer.append(Card.renderCards(sets.clothes));
          this.audioPlay(sets.clothes);
          break;
        case 'Emotion':
          categoryContainer.append(Card.renderCards(sets.emotion));
          this.audioPlay(sets.emotion);
          break;
        default:
          break;
      }

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('btns');
      const startbutton = document.createElement('button');
      startbutton.classList.add('btn');
      startbutton.textContent = 'Start game';

      if (store.getState().switch === 'play') {
        startbutton.classList.remove('none');
      } else if (store.getState().switch === 'train') {
        startbutton.classList.add('none');
      }


      buttonContainer.append(startbutton);
      categoryContainer.append(buttonContainer);

      this.rotate();
      ButtonGame.play();
    }
  }


  rotate() {
    const rotate = document.querySelectorAll('.rotate');
    for (const elem of rotate) {
      elem.addEventListener('click', () => {
        store.setState({
          rotate: 'back',
        });
        elem.parentElement.classList.add('translate');
      });
      const move = elem.parentElement;
      move.addEventListener('mouseout', () => {
        if (store.getState().rotate === 'back') {
          elem.parentElement.classList.remove('translate');
          store.setState({
            rotate: 'front',
          });
        }
      });
    }
  }

  audioPlay(sound) {
    if (store.getState().switch === 'train') {
      const content = document.querySelectorAll('.element');
      for (const elem of content) {
        elem.addEventListener('click', (event) => {
          const { target } = event;
          if (target.className !== 'rotate') {
            sound.forEach((e) => {
              if (e.word === target.firstChild.textContent) {
                const audio = new Audio(`${e.audioSrc}`);
                audio.play();
              }
            });
          }
        });
      }
    }
  }
}


const category = new CardsCanvas();


export default store.connect(category, ['category', 'switch']);
