import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import Tag from "../ui/tag/Tag";
import { useState } from "react";

const TodoItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 84px;
  padding: 14px;
  box-sizing: border-box;
  border: 2px solid #888;
  border-radius: 6px;
  background: ${(props) => props.theme.itemColor};

  .item-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .item-setting {
    position: absolute;
    top: 14px;
    right: 14px;
    display: none;
  }

  .item-tags {
    position: absolute;
    bottom: 14px;
    left: 14px;
    display: none;
  }

  .hovered {
    display: inline-block;
  }
`;

const TodoItem = ({ todo }) => {
  const [isHover, setIsHover] = useState(false);

  console.log("hello world!");

  const onMouseEnter = () => setIsHover(true);

  const onMouseLeave = () => setIsHover(false);

  return (
    <TodoItemStyle onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <h4 className="item-title">{todo.value}</h4>
      <span className={`item-tags ${isHover ? "hovered" : ""}`}>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </span>
      <span className={`item-setting ${isHover ? "hovered" : ""}`}>
        <FontAwesomeIcon icon={faEllipsis} />
      </span>
    </TodoItemStyle>
  );
};

export default TodoItem;
