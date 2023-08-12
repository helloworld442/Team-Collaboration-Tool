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

const TodoList = ({ label, todos, onToggle }) => {
  const todoList = todos.filter((todo) => todo.label === label);

  console.log(todoList);

  return (
    <TodoListStyle>
      <TodoListTitle label={label}>{labelDict[label]}</TodoListTitle>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}
      <TodoToggle onToggle={onToggle} />
    </TodoListStyle>
  );
};

const TodoItem = ({ title }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickUpdateIcon = () => setIsActive(!isActive);

  return (
    <TodoItemStyle>
      <Input value={title} isActive={isActive} />
      <TodoUpdateIcon onClick={onClickUpdateIcon} />
    </TodoItemStyle>
  );
};

const TodoToggle = ({ onToggle }) => {
  return (
    <Button onClick={onToggle}>
      <TodoToggleIcon /> 새로 만들기
    </Button>
  );
};

export default TodoList;
