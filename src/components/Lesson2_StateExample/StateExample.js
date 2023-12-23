import { Component } from 'react';

const styles = {
  backgroundColor: 'tomato',
  padding: 12,
};

export class StateExample extends Component {
  state = {
    numberOfClicks: 0,
  }; //публічна властивість класу
  // в стані ми об'являємо динамічні дані

  handleClick = () => {
    this.setState(prevState => {
      return {
        numberOfClicks: prevState.numberOfClicks + 1,
      };
    });
  };
  render() {
    // це у нас метод класу, для того щоб достучатися
    //до властивості екземпляра класу, нам потрібно
    //використовувати this
    return (
      // наш компонент буде перерендериться, - коли компоненту
      // приходять нові ПРОПСИ або коли у Компонента змінюється СТАН

      <div style={styles}>
        StateExample
        <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
      </div>
    );
  }
}

// слухача подій ми ставимо через(забуваємо  про querySelector
//та addEventListener які у нас були на ванільному JS),слухач додається
// як пропс на елемент(наприклад кнопка onClick={},
// onMouseDown = {} onMouseMove = {})
// метод render викликається кожного разу коли оновивс СТАН
//
