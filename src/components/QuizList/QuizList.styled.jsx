import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const getBorderColor = ({ theme, level }) => {
  switch (level) {
    case 'beginner':
      return theme.colors.success;
    case 'intermediate':
      return theme.colors.warning;
    case 'advanced':
      return theme.colors.accept;
    default:
      return theme.colors.black;
  }
};
export const ListItem = styled.li`
  border: 10px solid ${getBorderColor};

  :hover {
    background-color: tomato;
  }
`;
