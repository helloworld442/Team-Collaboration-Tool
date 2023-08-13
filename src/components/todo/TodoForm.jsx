import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { styled } from "styled-components";
import { useTodoDispatch, useTodoState } from "../../context/TodoContext";

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

const TodoForm = ({ label }) => {
  const [value, setValue] = useState("");
  const { todos } = useTodoState();
  const dispatch = useTodoDispatch();

  const onChangeInput = (e) => setValue(e.target.value);

  const onSubmitInput = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: todos.length + 1,
        title: value,
        isActive: true,
        isStatus: label,
      },
    });
    setValue("");
  };

  return (
    <TodoFormStyle onSubmit={onSubmitInput}>
      <TodoFormButton>
        <TodoFormButtonIcon />
      </TodoFormButton>
      <TodoFormInput
        type="text"
        value={value}
        onChange={onChangeInput}
        placeholder="제목을 입력하세요"
      />
    </TodoFormStyle>
  );
};

export default TodoForm;
