import { styled } from "styled-components";
import Tag from "../ui/tag/Tag";

const TodoItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 84px;
  padding: 14px;
  margin: 14px 0;
  box-sizing: border-box;
  border: 2px solid #888;
  border-radius: 6px;
  background: ${(props) => props.theme.itemColor};

  .item-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .item-tags {
    position: absolute;
    bottom: 14px;
  }
`;

const TodoItem = ({ todo, onDragStart, onDragOver, onDragLeave, onDrop }) => {
  return (
    <TodoItemStyle
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {/* 아이템의 타이틀 */}
      <h4 className="item-title">{todo.value}</h4>

      {/* 아이템의 테그들 */}
      <span className="item-tags">
        {todo.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </span>
    </TodoItemStyle>
  );
};

export default TodoItem;
