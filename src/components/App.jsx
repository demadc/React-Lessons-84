import { QuizList } from './QuizList/QuizList';
// import initialQuizData from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { HiAcademicCap, HiChartPie } from 'react-icons/hi';
// import { IconButton } from './IconButton/IconButton';
import { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { deleteQuiz, fetchQuizzes, createQuiz } from 'api';

export class App extends Component {
  state = {
    quizData: [],
    filters: {
      topic: '',
      level: 'all',
    },
    loading: false,
  };
  // методи ЖЦ використовуємо, коли нам треба зробити запити на БЕ
  // та записуємо наш апдейт в STATE, а також для роботи та запису
  // в Локал Сторадж;

  async componentDidMount() {
    // console.log('componentDidMount');
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters !== null) {
      this.setState({ filters: JSON.parse(savedFilters) });
    }
    this.setState({ loading: true });
    const quizData = await fetchQuizzes();
    this.setState({ quizData: quizData, loading: false });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('this.state:', this.state.filters);
    // console.log('prevState:', prevState.filters);
    // console.log(this.state.filters === prevState.filters);
    if (prevState.filters !== this.state.filters) {
      localStorage.setItem('filters', JSON.stringify(this.state.filters));
    }
  }

  componentWillUnmount() {
    // метод для очищення за собою, щоб прибрати таймери,
    // якісь слухачи подій, для того щоб уникнути витоку пам'яті
  }

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

  handleDelete = async quizId => {
    const deletedQuiz = await deleteQuiz(quizId);

    this.setState(prevState => {
      return {
        quizData: prevState.quizData.filter(item => item.id !== deletedQuiz.id),
      };
    });
  };

  addQuiz = async newQuiz => {
    const createdQuiz = await createQuiz(newQuiz);
    console.log(createdQuiz);
    this.setState(prevState => {
      return {
        quizData: [...prevState.quizData, createdQuiz],
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

  resetFilters = () => {
    this.setState({
      filters: {
        topic: '',
        level: 'all',
      },
    });
  };

  render() {
    const { filters, loading } = this.state;
    const visibleQuizItems = this.getVisibleQuizItems();
    return (
      <Layout>
        <SearchBar
          topicFilter={filters.topic}
          levelFilter={filters.level}
          onChangeTopic={this.changeTopicFilter}
          onChangeLevel={this.changeLevelFilter}
          onReset={this.resetFilters}
        />
        <QuizForm onAdd={this.addQuiz} />
        {loading ? (
          <div>LOADING...</div>
        ) : (
          <QuizList items={visibleQuizItems} onDelete={this.handleDelete} />
        )}

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
