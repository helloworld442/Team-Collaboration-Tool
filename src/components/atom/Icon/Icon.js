import { FileAddOutlined, PlusOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

export const PlusIcon = styled(PlusOutlined)`
  margin-right: 10px;
  font-size: 1rem;
  font-weight: bold;
`;

export const UpdateIcon = styled(FileAddOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
