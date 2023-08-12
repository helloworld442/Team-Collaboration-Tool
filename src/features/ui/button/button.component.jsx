import { ButtonStyle } from "./button.style";

const Button = ({ children, width, height }) => {
  return (
    <ButtonStyle width={width} height={height}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
