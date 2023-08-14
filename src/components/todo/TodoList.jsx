import { styled } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodoState } from "../../container/TodoContainer";
import { useRecoilState } from "recoil";
import { draggedState } from "../../recoil/draggedItem";

const TodoListStyle = styled.ul`
  width: 100%;
  height: 500px;
  overflow-y: scroll;
`;

const TodoList = ({ label }) => {
  let { todos } = useTodoState();
  const dispatch = useTodoDispatch();
  const [draggedItem, setDraggedItem] = useRecoilState(draggedState);

  const onDragStart = (e, todo) => {
    setDraggedItem(todo);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e, index) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "lightgray";
  };

  const onDragLeave = (e, index) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = "#eee";
  };

  const onDrop = (e, targetTodo) => {
    e.preventDefault();

    const updateTodos = [...todos];

    // 동일한 하나의 TodoList에서 Drag and Drop을 구현했을 경우
    const draggedIndex = updateTodos.findIndex((todo) => todo.id === draggedItem.id);
    const targetIndex = updateTodos.findIndex((todo) => todo.id === targetTodo.id);

    updateTodos.splice(draggedIndex, 1);
    updateTodos.splice(targetIndex, 0, draggedItem);

    //바꾼 todos를 업데이트 하는 로직
    dispatch({ type: "UPDATE_TODO_BY_DROP", payload: updateTodos });

    setDraggedItem(null);

    //드래그 앤 드랍 후 원해 색깔로 초기화 하기
    e.currentTarget.style.backgroundColor = "#eee";
  };

  return (
    <TodoListStyle>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDragStart={(e) => onDragStart(e, todo)}
          onDragOver={(e) => onDragOver(e, todo)}
          onDragLeave={(e) => onDragLeave(e, todo)}
          onDrop={(e) => onDrop(e, todo)}
        />
      ))}
    </TodoListStyle>
  );
};

const List = TodoList;

export { List };
