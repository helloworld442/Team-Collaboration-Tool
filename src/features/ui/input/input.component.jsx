import { TodoListInputStyle } from "./input.style";

const TodoListInput = ({ value, isActive, onChange }) => {
  return <TodoListInputStyle type="text" name="title" disabled={!isActive} />;
};

const TodoFormInput = ({ value, isActive, onChange }) => {
  return <TodoListInputStyle type="text" name="title" disabled={!isActive} />;
};

export { TodoListInput, TodoFormInput };
