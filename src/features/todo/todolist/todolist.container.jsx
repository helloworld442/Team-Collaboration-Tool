import { useState } from "react";
import TodoList from "./todolist.component";
import { TodoListRow } from "./todolist.style";

const TodoListContainer = () => {
  const [todos, setTodos] = useState([{ id: 0, title: "행복", label: "todo" }]);

  const onToggleButton = (label) => {
    const todo = { id: todos[todos.length - 1].id, title: "", label };
    setTodos(todos.concat(todo));
  };

  return (
    <TodoListRow>
      <TodoList label="todo" todos={todos} onToggle={onToggleButton} />
      <TodoList label="work" todos={todos} onToggle={onToggleButton} />
      <TodoList label="done" todos={todos} onToggle={onToggleButton} />
    </TodoListRow>
  );
};

export { TodoListContainer };
