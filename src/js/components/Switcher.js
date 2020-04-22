/* eslint-disable class-methods-use-this */
import store from '../store/store';

const checkbox = document.querySelector('.hamburger-menu>input');
class Switcher {
  buttonSwitch() {
    switch (store.getState().switch) {
      case 'train':
        store.setState({
          switch: 'play',
        });
        break;
      case 'play':
        store.setState({
          switch: 'train',
        });
        break;

      default:
        break;
    }
    checkbox.checked = false;
  }
}

const swither = new Switcher();
const label = document.querySelector('.switch');
label.addEventListener('mouseup', swither.buttonSwitch);


export default swither;
