import { StyledButton } from "./style";

export const Buttons = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
