import { TodoListInputStyle } from "./input.style";

const TodoListInput = ({ name, value, isActive, onChange }) => {
  return <TodoListInputStyle type="text" name={name} disabled={!isActive} />;
};

export { TodoListInput };
