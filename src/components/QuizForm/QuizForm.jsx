import React from 'react';
import { Formik } from 'formik';
import { StyledForm, StyledField, StyledError } from './QuizForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const QuizSchema = Yup.object().shape({
  topic: Yup.string().min(1).required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
  time: Yup.number()
    .positive('Must be > 0')
    .min(10, 'Not enough time')
    .required('Required'),
  questions: Yup.number()
    .positive('Must be > 0')
    .min(5, 'Min 5 que-s')
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        topic: '',
        level: 'beginner',
        time: '0',
        questions: '0',
      }}
      validationSchema={QuizSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="topic">Topic</label>
        <StyledField id="topic" name="topic" placeholder="QuizTopic....." />
        <StyledError component="div" name="topic" />

        <label htmlFor="level">Level</label>
        <StyledField as="select" id="level" name="level">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </StyledField>
        <StyledError name="level" component="div" />

        <label htmlFor="time">Time</label>
        <StyledField id="time" name="time" type="number" />
        <StyledError name="time" component="div" />

        <label htmlFor="questions">Questions</label>
        <StyledField id="questions" name="questions" type="number" />
        <StyledError name="questions" component="div" />
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
