import TodoList from "./todolist.component";
import { TodoListRow } from "./todolist.style";

const TodoListContainer = () => {
  return (
    <TodoListRow>
      <TodoList label="todo" />
      <TodoList label="work" />
      <TodoList label="done" />
    </TodoListRow>
  );
};

export default TodoListContainer;
