import { css, styled } from "styled-components";

export const TodoTitleText = styled.h4`
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

export const TodoSelectText = styled.span``;

export const TodoUpdateText = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
