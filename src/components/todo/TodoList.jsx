import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../context/TodoContext";

const TodoListStyle = styled.ul`
  width: 100%;
  max-height: 600px;
  overflow-y: scroll;
`;

const TodoList = ({ label }) => {
  const { todos } = useTodoState();
  const todoList = todos.filter((item) => item.isStatus == label);

  return (
    <TodoListStyle>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
