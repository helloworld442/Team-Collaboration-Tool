import { styled } from "styled-components";

const TodoHeadStyle = styled.div`
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  .head-title {
    margin-right: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
  }

  .head-todo-num {
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1;
    border-radius: 20px;
    color: #888;
  }
`;

const TodoHead = () => {
  return (
    <TodoHeadStyle>
      <span className="head-title">📋 Backlog</span>
      <span className="head-todo-num">2</span>
    </TodoHeadStyle>
  );
};

const Head = TodoHead;

export { Head };
