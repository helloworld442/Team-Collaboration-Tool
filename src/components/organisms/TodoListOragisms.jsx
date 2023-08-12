import { styled } from "styled-components";
import { Text } from "../atom/Text/Text";
import * as Todo from "../molecules/todo";

const labelDict = {
  todo: "할 일",
  work: "진행 중",
  done: "완료",
};

const TodoListOrganism = ({ label }) => {
  return (
    <TodoListOrganismStyle>
      <Text label={label}>{labelDict[label]}</Text>
      <Todo.ItemFiled />
      <Todo.ButtonField />
    </TodoListOrganismStyle>
  );
};

const TodoListOrganismStyle = styled.ul`
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid #eee;
  border-radius: 3px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default TodoListOrganism;
