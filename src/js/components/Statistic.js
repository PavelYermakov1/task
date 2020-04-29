/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

import store from '../store/store';
import sets from '../constants/sets';

const mainContainer = document.querySelector('.main-container');
class Statistic {
  render() {
    const prevStatisticsContainer = document.querySelector('.statistics-container');
    const prevCategoryContainer = document.querySelector('.category-container');
    if (store.getState().category === 'Statistics') {
      if (JSON.parse(localStorage.getItem('train')) !== null) {
        store.setState({
          train: JSON.parse(localStorage.getItem('train')),
        });
      } else {
        store.setState({
          train: [],
        });
      }
      if (JSON.parse(localStorage.getItem('gameCorrect')) !== null) {
        store.setState({
          gameCorrect: JSON.parse(localStorage.getItem('gameCorrect')),
        });
      } else {
        store.setState({
          gameCorrect: [],
        });
      }
      if (JSON.parse(localStorage.getItem('gameWrong')) !== null) {
        store.setState({
          gameWrong: JSON.parse(localStorage.getItem('gameWrong')),
        });
      } else {
        store.setState({
          gameWrong: [],
        });
      }

      if (prevStatisticsContainer) {
        prevStatisticsContainer.remove();
      }
      if (prevCategoryContainer) {
        prevCategoryContainer.remove();
      }
      mainContainer.insertAdjacentHTML('afterend', '<div class="statistics-container"></div>');

      const statisticsButtonContainer = document.createElement('div');
      statisticsButtonContainer.classList.add('statistics-button-container');


      const statisticsButtonRepeat = document.createElement('button');
      statisticsButtonRepeat.classList.add('statistics-button');
      statisticsButtonRepeat.classList.add('statistics-button-repeat');
      statisticsButtonRepeat.textContent = 'Repeat difficult words';
      const statisticsButtonClear = document.createElement('button');
      statisticsButtonClear.classList.add('statistics-button');
      statisticsButtonClear.classList.add('statistics-button-clear');
      statisticsButtonClear.textContent = 'Reset statistics';

      statisticsButtonContainer.append(statisticsButtonRepeat, statisticsButtonClear);


      const tableContainer = document.createElement('div');
      tableContainer.classList.add('table-container');

      const statisticsTable = document.createElement('table');
      statisticsTable.classList.add('statistics-table');

      const statisticsTableHead = document.createElement('thead');
      statisticsTableHead.classList.add('statistics-table-head');

      const line = document.createElement('tr');
      const pointWord = document.createElement('th');
      pointWord.classList.add('statistics-table-head-cell');
      pointWord.textContent = 'word';
      const pointTranstation = document.createElement('th');
      pointTranstation.classList.add('statistics-table-head-cell');
      pointTranstation.textContent = 'translation';
      const pointCategory = document.createElement('th');
      pointCategory.classList.add('statistics-table-head-cell');
      pointCategory.textContent = 'category';
      const pointTrain = document.createElement('th');
      pointTrain.classList.add('statistics-table-head-cell');
      pointTrain.textContent = 'sounded on train';
      const pointCorrect = document.createElement('th');
      pointCorrect.classList.add('statistics-table-head-cell');
      pointCorrect.textContent = 'correct answer';
      const pointWrong = document.createElement('th');
      pointWrong.classList.add('statistics-table-head-cell');
      pointWrong.textContent = 'wrong answer';
      const pointPercent = document.createElement('th');
      pointPercent.classList.add('statistics-table-head-cell');
      pointPercent.textContent = 'persent of wrong, %';


      line.append(pointWord, pointTranstation, pointCategory,
        pointTrain, pointCorrect, pointWrong, pointPercent);
      statisticsTableHead.append(line);

      const statisticsTableBody = document.createElement('tbody');

      statisticsTableBody.append(this.createWord(sets));


      statisticsTable.append(statisticsTableHead, statisticsTableBody);

      tableContainer.append(statisticsTable);

      const statisticsContainer = document.querySelector('.statistics-container');
      statisticsContainer.append(statisticsButtonContainer, tableContainer);
      this.clearStatistics();
    }
  }


  createWord() {
    const {
      setA, setB, setC, adjective, setD, setI, clothes, emotion,
    } = sets;
    const fragment = document.createDocumentFragment();

    setA.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    setB.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    setC.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    adjective.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    setD.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    setI.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    clothes.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    emotion.forEach((element) => {
      fragment.appendChild(this.helperCreateWord(element));
    });
    return fragment;
  }

  helperCreateWord(elem) {
    const tr = document.createElement('tr');
    const tdWord = document.createElement('td');
    tdWord.classList.add('statistics-table-cell');
    tdWord.textContent = `${elem.word}`;
    const tdTraslate = document.createElement('td');
    tdTraslate.classList.add('statistics-table-cell');
    tdTraslate.textContent = `${elem.translation}`;
    const tdCategory = document.createElement('td');
    tdCategory.classList.add('statistics-table-cell');
    tdCategory.textContent = `${elem.category}`;
    const tdTraining = document.createElement('td');
    tdTraining.classList.add('statistics-table-cell');
    tdTraining.textContent = this.helperStatistics(store.getState().train, elem.word);
    const tdCorrect = document.createElement('td');
    tdCorrect.classList.add('statistics-table-cell');
    tdCorrect.textContent = this.helperStatistics(store.getState().gameCorrect, elem.word);
    const tdWrong = document.createElement('td');
    tdWrong.classList.add('statistics-table-cell');
    tdWrong.textContent = this.helperStatistics(store.getState().gameWrong, elem.word);
    const tdPersent = document.createElement('td');
    tdPersent.classList.add('statistics-table-cell');
    tdPersent.textContent = this.helperPersentStatistics(
      this.helperStatistics(store.getState().gameCorrect, elem.word),
      this.helperStatistics(store.getState().gameWrong, elem.word),
    );

    tr.append(tdWord, tdTraslate, tdCategory, tdTraining, tdCorrect, tdWrong, tdPersent);
    return tr;
  }

  helperStatistics(arr, word) {
    return arr.reduce((acc, cur) => {
      if (cur === word) {
        acc++;
        return acc;
      }
      return acc;
    }, 0);
  }

  helperPersentStatistics(right, wrong) {
    if (!right || !wrong) {
      return 0;
    }
    const result = (right / (right + wrong)) * 100;
    return Math.round(100 - result);
  }


  clearStatistics() {
    const statisticsButtonClear = document.querySelector('.statistics-button-clear');
    statisticsButtonClear.addEventListener('click', () => {
      localStorage.clear();
      this.render();
    });
  }
}

const statistic = new Statistic();

export default store.connect(statistic, ['category']);
