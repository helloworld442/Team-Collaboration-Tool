import { TodoListInputStyle } from "./input.style";

const TodoListInput = ({ name, value, active, onChange }) => {
  return <TodoListInputStyle type="text" name={name} disabled={!active} />;
};

export { TodoListInput };
