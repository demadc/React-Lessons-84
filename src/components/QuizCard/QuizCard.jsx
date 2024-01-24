import { Component } from 'react';
import { Topic, Wrapper, Text } from './QuizCard.styled';
import Modal from 'react-modal';

const customStyle = {
  content: {
    top: '50%',
    left: '50',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50',
    transform: 'translate(-50%, auto)',
  },
};

Modal.setAppElement('#root');

export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      item: { id, topic, level, time, questions },
      onDelete,
    } = this.props;

    return (
      <Wrapper>
        <Topic onClick={this.openModal}>{topic}</Topic>
        <Text>
          <b>Level:{level}</b>
        </Text>
        <Text>
          <b>Time: {time}</b>
        </Text>
        <Text>
          <b>Questions:{questions}</b>
        </Text>
        <div>
          {/* <button onClick={onDelete}>Delete</button> "коли нам не потрібно */}
          {/* передавати аргумент, ми передаємо лише посилання на функцію;" */}
          <button
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
          {/* "Коли нам треба передати аргумент ми передаємо посилання на анонимну
        ф-ю" */}
        </div>

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyle}
          contentLabel="Example Modal"
        >
          <h1>Super Modal</h1>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </Wrapper>
    );
  }
}
