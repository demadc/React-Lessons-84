import { QuizList } from './QuizList';
import quizData from '../data.json';
import { SearchBar } from './SearchBar';

export const App = () => {
  return (
    <>
      <SearchBar />
      <QuizList items={quizData} />
    </>
  );
};
