import { TodoFormInput } from "../../ui/input/input.component";
import { TodoFormIcon, TodoFormStyle } from "./todoform.style";

const TodoForm = () => {
  return (
    <TodoFormStyle>
      <TodoFormIcon />
      <TodoFormInput />
    </TodoFormStyle>
  );
};

export default TodoForm;
