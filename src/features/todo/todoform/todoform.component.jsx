import { TodoFormInput } from "../../ui/input/input.component";
import { TodoFormIcon, TodoFormStyle } from "./todoform.style";

const TodoForm = ({ form, onInsert, onSubmit }) => {
  return (
    <TodoFormStyle onSubmit={onSubmit}>
      <TodoFormIcon />
      <TodoFormInput value={form} onChange={onInsert} />
    </TodoFormStyle>
  );
};

export default TodoForm;
