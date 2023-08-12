import { css, styled } from "styled-components";
import { FileAddOutlined } from "@ant-design/icons";

export const TodoListRow = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 600px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TodoListStyle = styled.ul`
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid #eee;
  border-radius: 3px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TodoListTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 12px 0;

  ${(props) =>
    props.label === "todo" &&
    css`
      color: #888;
    `};

  ${(props) =>
    props.label === "work" &&
    css`
      color: ${(props) => props.theme.baseColor};
    `};

  ${(props) =>
    props.label === "done" &&
    css`
      color: green;
    `}
`;

export const TodoItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1.5px solid #eee;
  border-radius: 3px;
  background: #fff;
  box-sizing: border-box;
`;

export const TodoUpdateIcon = styled(FileAddOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
