import { css, styled } from "styled-components";

const TagStyle = styled.span`
  font-size: 0.7rem;
  font-weight: 900;
  padding: 4px 8px;
  margin-right: 8px;
  border-radius: 15px;

  ${(props) =>
    props.tag === "small" &&
    css`
      color: rgb(65, 105, 225);
      background: rgb(65, 105, 225, 0.3);
    `}

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

const Tag = ({ tag, onClick }) => {
  return (
    <TagStyle tag={tag} onClick={onClick}>
      {tag}
    </TagStyle>
  );
};

export default Tag;
