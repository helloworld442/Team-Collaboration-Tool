import {
  TodoInput,
  TodoItemStyle,
  TodoListStyle,
  TodoListTitle,
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
    </TodoListStyle>
  );
};

const TodoItem = () => {
  return (
    <TodoItemStyle>
      <TodoInput />
      <TodoUpdateIcon />
    </TodoItemStyle>
  );
};

export default TodoList;
