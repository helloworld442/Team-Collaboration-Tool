import { styled } from "styled-components";

const TodoTemplateStyle = styled.div`
  position: relative;
  width: 350px;
  height: 600px;
  padding: 14px;
  box-sizing: border-box;
  border: 2px solid #888;
  border-radius: 6px;
  background: ${(props) => props.theme.cardColor};
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateStyle>{children}</TodoTemplateStyle>;
};

const Template = TodoTemplate;

export { Template };
