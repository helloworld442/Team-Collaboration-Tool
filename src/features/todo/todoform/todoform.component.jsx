import Button from "../../ui/button/button.component";
import { TodoFormIcon, TodoFormStyle } from "./todoform.style";

const TodoForm = () => {
  return (
    <TodoFormStyle>
      <Button width="280px" height="30px">
        <TodoFormIcon /> 새로 만들기
      </Button>
    </TodoFormStyle>
  );
};

export default TodoForm;
