import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  max-width: 250px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
`;

export const StyledError = styled(ErrorMessage)`
  color: ${prop => prop.theme.colors.error};
`;
