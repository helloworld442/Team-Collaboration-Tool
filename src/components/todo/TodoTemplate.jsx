import { styled } from "styled-components";

const TodoTemplateStyle = styled.div`
  width: 350px;
  height: 100%;
  padding: 14px;
  box-sizing: border-box;
  border: 1px solid rgb(33, 38, 45);
  border-radius: 6px;
  background: ${(props) => props.theme.cardColor};
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateStyle>{children}</TodoTemplateStyle>;
};

const Template = TodoTemplate;

export { Template };
