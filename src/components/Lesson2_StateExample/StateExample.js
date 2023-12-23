import { Component } from 'react';

const styles = {
  backgroundColor: 'tomato',
  padding: 12,
};

export class StateExample extends Component {
  state = {
    numberOfClicks: 0,
  }; //публічна властивість класу

  render() {
    return (
      <div style={styles}>
        StateExample
        <button>1</button>
      </div>
    );
  }
}
