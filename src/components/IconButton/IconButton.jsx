import { Button } from './IconButton.styled';

export const IconButton = ({ children, variant }) => {
  return <Button variant={variant}>{children}</Button>;
};
