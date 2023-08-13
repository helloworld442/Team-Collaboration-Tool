import { styled } from "styled-components";

const TodoItemStyle = styled.li`
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  border: 1px solid rgb(33, 38, 45);
  border-radius: 6px;
  background: ${(props) => props.theme.itemColor};
`;

const TodoItem = () => {
  return <TodoItemStyle>af</TodoItemStyle>;
};

export default TodoItem;
