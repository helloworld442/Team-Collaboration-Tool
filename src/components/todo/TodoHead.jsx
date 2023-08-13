import { styled } from "styled-components";

const TodoHeadStyle = styled.div`
  margin-bottom: 14px;
  display: flex;
  align-items: flex-start;
  .head-title {
    margin-right: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
  }

  .head-todo-num {
    display: inline-block;
    padding: 2px 6px 0 6px;
    font-size: 0.925rem;
    font-weight: 600;
    line-height: 1;
    border-radius: 20px;
    color: #888;
    background: #2e3138;
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
