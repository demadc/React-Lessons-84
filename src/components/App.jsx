import { QuizList } from './QuizList/QuizList';
import quizData from '../data.json';
import { SearchBar } from './SearchBar/SearchBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { HiAcademicCap, HiChartPie } from 'react-icons/hi';
import { IconButton } from './IconButton/IconButton';

export const App = () => {
  return (
    <Layout>
      <SearchBar />
      <QuizList items={quizData} />
      <IconButton variant="primary">
        <HiAcademicCap size={32} color="blue" />
      </IconButton>
      <IconButton variant="secondary">
        <HiChartPie size={32} color="tomato" />
      </IconButton>
      <GlobalStyle />
    </Layout>
  );
};
