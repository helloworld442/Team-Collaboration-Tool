import Button from "../../ui/button/button.component";
import { TodoFormIcon, TodoFormStyle } from "./todoform.style";

const TodoForm = () => {
  return (
    <TodoFormStyle>
      <Button width="100%" height="50px">
        <TodoFormIcon /> 새로 만들기
      </Button>
    </TodoFormStyle>
  );
};

export default TodoForm;
