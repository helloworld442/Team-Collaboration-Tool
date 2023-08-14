import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodoState } from "../../container/TodoContainer";

const TodoListStyle = styled.ul`
  width: 100%;
  height: 500px;
  overflow-y: scroll;

  .bottom-box {
    width: 100%;
    height: 80px;
    margin-top: 14px;
  }
`;

const TodoList = ({ label }) => {
  const { todos, draggedTodo } = useTodoState();
  const dispatch = useTodoDispatch();
  const labelTodos = todos.filter((todo) => todo.label === label);
  const dummyTodo = { id: labelTodos.length - 1, value: "", label };

  const onDragStart = (e, todo) => {
    dispatch({ type: "UPDATE_TODO_BY_DRAG", payload: todo.id });
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e, todo) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "lightgray";
  };

  const onDragLeave = (e, todo) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#f8f8f8";
  };

  const onDrop = async (e, targetTodo) => {
    e.preventDefault();

    const updateTodos = [...todos];

    if (draggedTodo.label !== targetTodo.label) {
      draggedTodo.label = targetTodo.label;
    }

    const draggedIndex = updateTodos.findIndex((todo) => todo.id === draggedTodo.id);
    const targetIndex = updateTodos.findIndex((todo) => todo.id === targetTodo.id);

    updateTodos.splice(draggedIndex, 1);
    updateTodos.splice(targetIndex, 0, draggedTodo);

    //바꾼 todos를 업데이트 하는 로직
    dispatch({ type: "UPDATE_TODO_BY_DROP", payload: updateTodos });

    // 드래그 앤 드랍 후 원해 색깔로 초기화 하기
    e.currentTarget.style.backgroundColor = "#f8f8f8";
  };

  return (
    <TodoListStyle>
      {labelTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDragStart={(e) => onDragStart(e, todo)}
          onDragOver={(e) => onDragOver(e, todo)}
          onDragLeave={(e) => onDragLeave(e, todo)}
          onDrop={(e) => onDrop(e, todo)}
        />
      ))}
      <div
        className="bottom-box"
        onDragOver={(e) => onDragOver(e)}
        onDragLeave={(e) => onDragLeave(e)}
        onDrop={(e) => onDrop(e, dummyTodo)}
      ></div>
    </TodoListStyle>
  );
};

const List = TodoList;

export { List };
