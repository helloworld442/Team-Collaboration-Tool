import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 10px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  color: #888;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    border-radius: 3px;
    background-color: #eee;
    color: #333;
  }
`;
