import axios from 'axios';

axios.defaults.baseURL = 'https://64ecdd2ff9b2b70f2bfb120c.mockapi.io/api/v1';

export const fetchQuizzes = async (req, res) => {
  const response = await axios.get('/quizzes');
  return res.data;
};
