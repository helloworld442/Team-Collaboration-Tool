import { styled } from "styled-components";

const TodoItemStyle = styled.li`
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  border: 2px solid #888;
  border-radius: 6px;
  background: ${(props) => props.theme.itemColor};
`;

const TodoItem = () => {
  return <TodoItemStyle>af</TodoItemStyle>;
};

export default TodoItem;
