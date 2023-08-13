import { styled } from "styled-components";

const TodoTemplateStyle = styled.div`
  width: 300px;
  height: 600px;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid #eee;
  border-radius: 3px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateStyle>{children}</TodoTemplateStyle>;
};

export default TodoTemplate;
