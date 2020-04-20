class Store {
  constructor() {
    this.state = {
      switch: 'train',
      statics: {
        correct: 110,
        wrong: 43,
      },
      category: null,
      rotate: 'front',
      counter: 0,
      currentWord: null,
      game: false,
      mainContener: true,
      categoryContainer: false,
    };

    this.subscriptions = [];
  }

  // TODO: try to bind context this method
  connect(component, deps) {
    this.subscriptions.push({
      render: component.render.bind(component),
      deps,
    });
    return component;
  }

  // TODO: try to bind context this method
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    const keys = Object.keys(newState);

    this.subscriptions.forEach(
      (subscription) => {
        if (subscription.deps.length !== 0) {
          subscription.deps.forEach((el) => {
            if (keys.includes(el)) {
              subscription.render();
            }
          });
        }
      },
    );
  }

  // TODO: try to bind context this method
  getState() {
    return this.state;
  }
}

const store = new Store();


export default store;
