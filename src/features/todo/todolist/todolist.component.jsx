import { useState } from "react";
import { Button, Input } from "../../ui";
import {
  TodoListStyle,
  TodoItemStyle,
  TodoListTitle,
  TodoToggleIcon,
  TodoUpdateIcon,
} from "./todolist.style";

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
      <TodoToggle />
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

const TodoToggle = () => {
  return (
    <Button>
      <TodoToggleIcon /> 새로 만들기
    </Button>
  );
};

export default TodoList;
