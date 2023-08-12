import { styled } from "styled-components";

export const TodoListInputStyle = styled.input`
  width: 200px;
  height: 30px;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;

  &:disabled {
    background-color: #fff;
  }

  &:enabled {
    border: 2px solid #888;
    border-radius: 3px;
  }
`;
