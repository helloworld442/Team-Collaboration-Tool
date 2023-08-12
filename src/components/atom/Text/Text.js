import { css, styled } from "styled-components";

export const Text = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;

  ${(props) =>
    props.label === "todo" &&
    css`
      color: #888;
    `}

  ${(props) =>
    props.label === "work" &&
    css`
      color: ${(props) => props.theme.baseColor};
    `}

  ${(props) =>
    props.label === "done" &&
    css`
      color: green;
    `}
`;
