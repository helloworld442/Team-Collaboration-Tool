import { useState } from "react";
import { useTodoDispatch, useTodoState } from "../../container/TodoContainer";
import { styled } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

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
  const [value, setValue] = useState("");
  const { todos } = useTodoState();
  const dispatch = useTodoDispatch();

  const onChangeInput = (e) => setValue(e.target.value);

  const onSubmitInput = (e) => {
    e.preventDefault();
    const payload = { id: todos.length + 1, value, isDone: false };
    dispatch({ type: "CREATE_TODO", payload });
  };

  return (
    <TodoFormStyle onSubmit={onSubmitInput}>
      <button type="submit">
        <PlusOutlined />
      </button>
      <input type="text" value={value} onChange={onChangeInput} placeholder="Add item" />
    </TodoFormStyle>
  );
};

const Form = TodoForm;

export { Form };
