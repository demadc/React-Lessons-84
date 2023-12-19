import { Topic, Wrapper } from './QuizCard.styled';
import { Text } from './QuizCard.styled';

export const QuizCard = ({ item: { topic, level, time, questions } }) => {
  return (
    <Wrapper>
      <Topic>{topic}</Topic>
      <Text>
        <b>Level:{level}</b>
      </Text>
      <Text>
        <b>Time: {time}</b>
      </Text>
      <Text>
        <b>Questions:{questions}</b>
      </Text>
    </Wrapper>
  );
};
