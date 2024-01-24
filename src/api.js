import axios from 'axios';

axios.defaults.baseURL = 'https://64ecdd2ff9b2b70f2bfb120c.mockapi.io/api/v1';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  return response.data;
};

export const deleteQuiz = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  return response.data;
};

export const createQuiz = async quiz => {
  const response = await axios.post('/quizzes/', quiz);
  return response.data;
};
