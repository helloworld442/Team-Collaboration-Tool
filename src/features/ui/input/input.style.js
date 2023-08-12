import { styled } from "styled-components";

export const InputStyle = styled.input`
  width: 200px;
  height: 30px;
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;

  &:disabled {
    background-color: transparent;
  }

  &:enabled {
    border: 2px solid #888;
    border-radius: 3px;
  }
`;
