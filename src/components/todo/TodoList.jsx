import { styled } from "styled-components";
import TodoItem from "./TodoItem";

const TodoListStyle = styled.ul`
  width: 100%;
  height: 500px;
`;

const TodoList = () => {
  return (
    <TodoListStyle>
      <TodoItem />
    </TodoListStyle>
  );
};

const List = TodoList;

export { List };
