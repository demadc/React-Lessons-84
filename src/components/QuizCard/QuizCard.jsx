import { Topic, Wrapper } from './QuizCard.styled';
import { Text } from './QuizCard.styled';

export const QuizCard = (
  { item: { id, topic, level, time, questions } },
  onDelete
) => {
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
    </Wrapper>
  );
};
