import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../container/TodoContainer";

const TodoListStyle = styled.ul`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TodoList = () => {
  const { todos } = useTodoState();

  return (
    <TodoListStyle>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListStyle>
  );
};

const List = TodoList;

export { List };
