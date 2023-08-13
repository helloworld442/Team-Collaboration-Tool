import { PlusOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

const TodoFormStyle = styled.form`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    border-radius: 3px;
    background-color: #eee;
    color: #333;
  }
`;

const TodoFormButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;

const TodoFormButtonIcon = styled(PlusOutlined)`
  font-size: 1rem;
  font-weight: bold;
`;

const TodoFormInput = styled.input`
  padding: 6px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  background: transparent;
`;

const TodoForm = () => {
  return (
    <TodoFormStyle>
      <TodoFormButton>
        <TodoFormButtonIcon />
      </TodoFormButton>
      <TodoFormInput placeholder="제목을 입력하세요" />
    </TodoFormStyle>
  );
};

export default TodoForm;
