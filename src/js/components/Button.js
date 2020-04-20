/* eslint-disable class-methods-use-this */
import store from '../store/store';
// TODO: rename to switcher
class Button {
  render() {

  }

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
  }
}

const button = new Button();
const label = document.querySelector('.switch');
label.addEventListener('mouseup', button.buttonSwitch);


export default button;
