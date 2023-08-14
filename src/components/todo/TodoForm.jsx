import { useState } from "react";
import { useTodoDispatch, useTodoState } from "../../container/TodoContainer";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoFormStyle = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 14px;
  border-radius: 6px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 14px;

  &:hover {
    background: #ddd;
  }

  button {
    padding: 0;
    border: none;
    outline: none;
    font-size: 1.2rem;
    background: transparent;
    color: #888;
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

    // todo form으로 보낼 데이터 양식
    const payload = { id: todos.length + 1, value, isDone: false };

    // todo form으로 데이터를 보내는 코드
    dispatch({ type: "CREATE_TODO", payload });

    // todo form의 value값을 초기화하는 코드
    setValue("");
  };

  return (
    <TodoFormStyle onSubmit={onSubmitInput}>
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <input type="text" value={value} onChange={onChangeInput} placeholder="Add item" />
    </TodoFormStyle>
  );
};

const Form = TodoForm;

export { Form };
