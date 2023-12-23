import { QuizList } from './QuizList/QuizList';
import initialQuizData from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { HiAcademicCap, HiChartPie } from 'react-icons/hi';
import { IconButton } from './IconButton/IconButton';
import { Component } from 'react';

export class App extends Component {
  state = {
    quizData: initialQuizData,
  };

  handleDelete = quizId => {
    this.setState(prevState => {
      return {
        quizData: prevState.quizData.filter(item => item.id !== quizId),
      };
    });
  };

  render() {
    return (
      <Layout>
        <SearchBar />
        <QuizList items={this.state.quizData} onDelete={this.handleDelete} />
        <IconButton variant="primary">
          <HiAcademicCap size={32} color="blue" />
        </IconButton>
        <IconButton variant="secondary">
          <HiChartPie size={32} color="tomato" />
        </IconButton>
        <GlobalStyle />
      </Layout>
    );
  }
}
