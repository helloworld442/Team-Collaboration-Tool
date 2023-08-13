import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TodoList = () => {
  return (
    <TodoListStyle>
      <TodoItem />
    </TodoListStyle>
  );
};

export default TodoList;
