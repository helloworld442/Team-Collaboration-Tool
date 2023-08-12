import { PlusOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

export const TodoFormStyle = styled.form`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TodoFormIcon = styled(PlusOutlined)`
  margin-right: 12px;
  font-size: 1.2rem;
  color: #888;
`;
