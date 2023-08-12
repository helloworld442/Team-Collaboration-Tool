import { TodoInputStyle } from "./input.style";

const TodoListInput = ({ value, isActive, onChange }) => {
  return <TodoInputStyle type="text" name="title" disabled={!isActive} />;
};

const TodoFormInput = ({ value, onChange }) => {
  return <TodoInputStyle type="text" name="title" value={value} onChange={onChange} />;
};

export { TodoListInput, TodoFormInput };
