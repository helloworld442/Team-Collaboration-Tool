import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../container/TodoContainer";

const TodoListStyle = styled.ul`
  width: 100%;
  height: 500px;
`;

const TodoList = () => {
  const { todos } = useTodoState();

  return (
    <TodoListStyle>
      <TodoItem />
    </TodoListStyle>
  );
};

const List = TodoList;

export { List };
