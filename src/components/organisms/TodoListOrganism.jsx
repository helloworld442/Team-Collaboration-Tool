import { styled } from "styled-components";
import { TodoTitleText } from "../atom/Text/Text";
import TextField from "../molecules/TextField/TextField";

const TodoListOrganism = ({ label, todos }) => {
  const labelDict = {
    todo: "할 일",
    work: "진행 중",
    done: "완료",
  };

  return (
    <TodoListOrganismStyle>
      <TodoTitleText label={label}>{labelDict[label]}</TodoTitleText>
      <TextField />
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
`;

export default TodoListOrganism;
