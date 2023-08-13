import { FileAddOutlined } from "@ant-design/icons";
import { styled } from "styled-components";
import { useTodoDispatch } from "../../context/TodoContext";

const TodoItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid #eee;
  border-radius: 3px;
  background: #fff;
  box-sizing: border-box;
`;

const TodoItemInput = styled.input`
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  background: transparent;

  &:disabled {
    background-color: transparent;
  }

  &:enabled {
    border: 2px solid #888;
    border-radius: 3px;
  }
`;

const TodoUpdateIcon = styled(FileAddOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;

const TodoItem = ({ todo }) => {
  const dispatch = useTodoDispatch();

  const onToggleIcon = () => {
    dispatch({ type: "TOGGLE_TODO_FIELD", id: todo.id });
  };

  const onChangeInput = (e) => {
    dispatch({ type: "CHANGE_TODO_FIELD", id: todo.id, title: e.target.value });
  };

  return (
    <TodoItemStyle>
      <TodoItemInput value={todo.title} disabled={todo.isActive} onChange={onChangeInput} />
      <TodoUpdateIcon onClick={onToggleIcon} />
    </TodoItemStyle>
  );
};

export default TodoItem;
