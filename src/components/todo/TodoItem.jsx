import { useState } from "react";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

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

  .item-tag-trigger {
    position: absolute;
    bottom: 14px;
    display: none;
  }

  .item-tag-modal {
    display: none;
  }

  .hovered {
    display: inline-block;
  }

  .opened {
    display: inline-block;
  }
`;

const TodoItem = ({ todo }) => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onMouseEnter = () => setIsHover(true);

  const onMouseLeave = () => setIsHover(false);

  const onOpenModal = () => setIsOpen(!isOpen);

  return (
    <TodoItemStyle onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* 아이템의 타이틀 */}
      <h4 className="item-title">{todo.value}</h4>

      {/* 아이템의 테그들 */}
      <span className="item-tags"></span>

      {/* 아이템 테그들을 추가하는 플러스 버튼 */}
      <span className={`item-tag-trigger ${isHover ? "hovered" : ""}`} onClick={onOpenModal}>
        <FontAwesomeIcon icon={faPlus} />
      </span>

      {/* 아이템 테그들을 추가하는 모달창 */}
      <span className={`item-tag-modal ${isOpen ? "opened" : ""}`}>hell0 wor1d!</span>
    </TodoItemStyle>
  );
};

export default TodoItem;
