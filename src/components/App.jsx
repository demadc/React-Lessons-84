import { QuizList } from './QuizList/QuizList';
import initialQuizData from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { HiAcademicCap, HiChartPie } from 'react-icons/hi';
// import { IconButton } from './IconButton/IconButton';
import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';

export class App extends Component {
  state = {
    quizData: initialQuizData,
    filters: {
      topic: '',
      level: 'all',
    },
  };

  changeTopicFilter = newTopic => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          topic: newTopic,
        },
      };
    });
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          level: newLevel,
        },
      };
    });
  };

  handleDelete = quizId => {
    this.setState(prevState => {
      return {
        quizData: prevState.quizData.filter(item => item.id !== quizId),
      };
    });
  };

  addQuiz = newQuiz => {
    this.setState(prevState => {
      return {
        quizData: [...prevState.quizData, newQuiz],
      };
    });
  };

  getVisibleQuizItems = () => {
    const { quizData, filters } = this.state;

    return quizData.filter(item => {
      if (filters.level === 'all') {
        return item.topic
          .toLowerCase()
          .includes(filters.topic.toLocaleLowerCase());
      }
      return (
        item.topic.toLowerCase().includes(filters.topic.toLocaleLowerCase()) &&
        item.level === filters.level
      );
    });
  };

  render() {
    const { filters } = this.state;
    const visibleQuizItems = this.getVisibleQuizItems();
    return (
      <Layout>
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
        />
        <QuizForm onAdd={this.addQuiz} />
        <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />
        {/* <IconButton variant="primary">
          <HiAcademicCap size={32} color="blue" />
        </IconButton>
        <IconButton variant="secondary">
          <HiChartPie size={32} color="tomato" />
        </IconButton> */}
        <GlobalStyle />
      </Layout>
    );
  }
}
