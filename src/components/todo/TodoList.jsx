import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodoState } from "../../container/TodoContainer";
import { useState } from "react";

const TodoListStyle = styled.ul`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
`;

const TodoList = () => {
  const { todos } = useTodoState();
  const dispatch = useTodoDispatch();
  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStart = (e, index) => {
    setDraggedItem(todos[index]);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e, index) => {
    e.preventDefault();
    //   e.currentTarget.style.backgroundColor = 'lightgray';
  };

  const onDrop = (e, index) => {
    e.preventDefault();

    const updateTodos = [...todos];

    const draggedItemIndex = todos.indexOf(draggedItem);

    // dragged item과 dragging item의 위치를 바꾸는 로직
    updateTodos.splice(draggedItemIndex, 1);
    updateTodos.splice(index, 0, draggedItem);

    //바꾼 todos를 업데이트 하는 로직
    dispatch({ type: "UPDATE_TODO_BY_DRAG", payload: updateTodos });
  };

  return (
    <TodoListStyle>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDragStart={(e) => onDragStart(e, index)}
          onDragOver={(e) => onDragOver(e, index)}
          onDrop={(e) => onDrop(e, index)}
        />
      ))}
    </TodoListStyle>
  );
};

const List = TodoList;

export { List };
