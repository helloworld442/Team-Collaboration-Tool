import { useState } from "react";
import { TodoItemStyle, TodoListStyle, TodoListTitle, TodoUpdateIcon } from "./todolist.style";
import TodoFormContainer from "../todoform/todoform.container";
import Input from "../../ui/input/input.component";

const labelDict = {
  todo: "할 일",
  work: "진행 중",
  done: "완료",
};

const TodoList = ({ label, todos }) => {
  return (
    <TodoListStyle>
      <TodoListTitle label={label}>{labelDict[label]}</TodoListTitle>
      <TodoItem />
      <TodoFormContainer label={label} />
    </TodoListStyle>
  );
};

const TodoItem = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickUpdateIcon = () => setIsActive(!isActive);

  return (
    <TodoItemStyle>
      <Input isActive={isActive} />
      <TodoUpdateIcon onClick={onClickUpdateIcon} />
    </TodoItemStyle>
  );
};

export default TodoList;
