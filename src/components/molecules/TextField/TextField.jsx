import { styled } from "styled-components";
import { TodoInput } from "../../atom/Input/Input";
import { TodoUpdateText } from "../../atom/Text/Text";

const TextField = () => {
  return (
    <TextFieldStyle>
      <TodoInput type="text" name="title" disabled={true} value="asfds" />
      <TodoUpdateText></TodoUpdateText>
    </TextFieldStyle>
  );
};

const TextFieldStyle = styled.li`
  width: 100%;
  height: 80px;
  padding: 10px;
  border: 1.5px solid #eee;
  border-radius: 3px;
  background: #fff;
  box-sizing: border-box;
`;

export default TextField;
