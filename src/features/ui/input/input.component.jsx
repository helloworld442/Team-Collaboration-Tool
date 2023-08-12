import { TodoInputStyle } from "./input.style";

const TodoListInput = ({ value, isActive, onChange }) => {
  return <TodoInputStyle type="text" name="title" disabled={!isActive} />;
};

const TodoFormInput = ({ value, isActive, onChange }) => {
  return (
    <TodoInputStyle type="text" name="title" disabled={!isActive} placeholder="내용을 입력하세요" />
  );
};

export { TodoListInput, TodoFormInput };
