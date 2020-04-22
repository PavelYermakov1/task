/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-loop-func */

import store from '../store/store';


class ButtonGame {
  play() {
    if (store.getState().switch === 'play' && store.getState().category != null) {
      const arr = [];
      let count = 0;
      const playButton = document.querySelector('.btn');
      const face = document.querySelectorAll('.front');
      const rating = document.querySelector('.rating');
      face.forEach((e) => arr.push(e));
      arr.sort(() => 0.5 - Math.random());
      const word = arr.pop().getAttribute('data');
      store.setState({
        currentWord: word,
      });
      playButton.addEventListener('click', () => {
        store.setState({
          game: true,
        });
        playButton.classList.add('repeat');
        playButton.textContent = 'Repeat';
        rating.classList.remove('none');
        this.audioPlay(store.getState().currentWord);
      });


      for (const elem of face) {
        elem.addEventListener('click', (event) => {
          if (store.getState().game) {
            const { target } = event;
            if (target.getAttribute('data') === store.getState().currentWord) {
              store.setState({
                counter: 0,
              });
              store.getState().gameCorrect.push(target.firstChild.textContent);
              localStorage.setItem('gameCorrect', JSON.stringify(store.getState().gameCorrect));
              target.classList.add('inactive');
              this.audioPlay('./src/assets/audio/success.mp3');
              const starSucces = document.createElement('div');
              starSucces.style.backgroundImage = 'url("./src/assets/img/star-win.svg")';
              starSucces.classList.add('star-succes');
              rating.append(starSucces);
              if (arr.length === 0) {
                store.setState({
                  currentWord: false,
                });
              } else {
                store.setState({
                  currentWord: arr.pop().getAttribute('data'),
                });
              }
              setTimeout(this.audioPlay, 1500, store.getState().currentWord);
            } else if (!target.classList.contains('inactive')) {
              this.audioPlay('./src/assets/audio/error.mp3');
              store.getState().gameWrong.push(target.firstChild.textContent);
              localStorage.setItem('gameWrong', JSON.stringify(store.getState().gameWrong));
              const starError = document.createElement('div');
              starError.style.backgroundImage = 'url("./src/assets/img/star.svg")';
              starError.classList.add('star-error');
              rating.append(starError);
              store.setState({
                counter: 0,
              });
              count += 1;
              store.setState({
                counter: count,
              });
            }
            if (!store.getState().currentWord) {
              if (store.getState().counter === 0) {
                store.setState({
                  counter: 0,
                });
                this.succedPlay();
                setTimeout(this.backPlay, 7000);
              } else {
                store.setState({
                  counter: 0,
                });
                this.failurePlay(store.getState().counter);
                setTimeout(this.backPlay, 7000);
              }
            }
          }
        });
      }
    }
  }

  audioPlay(src) {
    const audio = new Audio(`${src}`);
    audio.play();
  }

  succedPlay() {
    const rating = document.querySelector('.rating');
    const succedImage = document.createElement('div');
    const elemContener = document.querySelectorAll('.element-container');
    const starSucces = document.querySelectorAll('.star-succes');
    const starError = document.querySelectorAll('.star-error');
    succedImage.classList.add('succes-image');
    succedImage.style.backgroundImage = 'url("./src/assets/img/success.jpg")';
    succedImage.textContent = 'WIN !!!';
    rating.append(succedImage);
    elemContener.forEach((e) => {
      e.style.display = 'none';
    });
    starSucces.forEach((e) => {
      e.style.display = 'none';
    });
    starError.forEach((e) => {
      e.style.display = 'none';
    });
    rating.style.justifyContent = 'center';
    this.audioPlay('./src/assets/audio/gta.mp3');
  }

  failurePlay(number) {
    const rating = document.querySelector('.rating');
    const succedImage = document.createElement('div');
    const elemContener = document.querySelectorAll('.element-container');
    const starSucces = document.querySelectorAll('.star-succes');
    const starError = document.querySelectorAll('.star-error');
    succedImage.classList.add('succes-image');
    succedImage.style.backgroundImage = 'url("./src/assets/img/failure.jpg")';
    succedImage.textContent = `${number} Errors`;
    rating.append(succedImage);
    elemContener.forEach((e) => {
      e.style.display = 'none';
    });
    starSucces.forEach((e) => {
      e.style.display = 'none';
    });
    starError.forEach((e) => {
      e.style.display = 'none';
    });
    rating.style.justifyContent = 'center';
    this.audioPlay('./src/assets/audio/dun.mp3');
  }

  backPlay() {
    const mainContainer = document.querySelector('.main-container');
    const categoryContainer = document.querySelector('.category-container');
    store.setState({
      game: false,
    });

    store.setState({
      category: 'Main Page',
    });

    categoryContainer.style.display = 'none';
    mainContainer.style.display = 'flex';
  }
}


const buttonGame = new ButtonGame();


export default buttonGame;
