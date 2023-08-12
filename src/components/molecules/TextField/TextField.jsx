import { styled } from "styled-components";
import { TodoInput } from "../../atom/Input/Input";
import { TodoUpdateText } from "../../atom/Text/Text";
import { FileAddOutlined } from "@ant-design/icons";
import { useState } from "react";

const TextField = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickUpdateIcon = () => setIsActive(!isActive);

  return (
    <TextFieldStyle>
      <TodoInput type="text" name="title" disabled={!isActive} value="asfds" />
      <TodoUpdateText onClick={onClickUpdateIcon}>
        <FileAddOutlined />
      </TodoUpdateText>
    </TextFieldStyle>
  );
};

const TextFieldStyle = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1.5px solid #eee;
  border-radius: 3px;
  background: #fff;
  box-sizing: border-box;
`;

export default TextField;
