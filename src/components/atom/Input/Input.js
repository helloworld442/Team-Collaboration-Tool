import { styled } from "styled-components";

export const TodoInput = styled.input`
  width: 200px;
  height: 24px;
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
