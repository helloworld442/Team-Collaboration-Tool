import { css, styled } from "styled-components";

const TagStyle = styled.span`
  font-size: 0.7rem;
  font-weight: 900;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 15px;

  ${(props) =>
    props.tag === "medium" &&
    css`
      color: rgb(255, 165, 0);
      background: rgb(255, 165, 0, 0.3);
    `}

  ${(props) =>
    props.tag === "large" &&
    css`
      color: rgb(255, 0, 0);
      background: rgb(255, 0, 0, 0.3);
    `}
`;

const Tag = ({ tag }) => {
  return <TagStyle tag={tag}>{tag}</TagStyle>;
};

export default Tag;
