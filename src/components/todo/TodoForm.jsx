import { PlusOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

const TodoFormStyle = styled.form`
  position: absolute;
  bottom: 14px;
  left: 14px;
  width: 318px;
  height: 35px;
  padding: 24px 6px;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 14px;

  &:hover {
    background: #eee;
  }

  button {
    padding: 0;
    border: none;
    outline: none;
    font-size: 1.2rem;
    background: transparent;
  }

  input {
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    outline: none;
    background: transparent;
  }
`;

const TodoForm = () => {
  return (
    <TodoFormStyle>
      <button>
        <PlusOutlined />
      </button>
      <input type="text" placeholder="Add item" />
    </TodoFormStyle>
  );
};

const Form = TodoForm;

export { Form };
