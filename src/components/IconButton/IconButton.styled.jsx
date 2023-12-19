import styled from 'styled-components';

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;

  color: ${props => (props.variant === 'primary' ? 'green' : 'yellow')};

  svg: {
    width: 100%;
    height: 100%;
  }
`;
