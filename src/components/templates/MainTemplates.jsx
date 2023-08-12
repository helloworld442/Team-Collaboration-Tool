import { styled } from "styled-components";
import TodoListOrganism from "../organisms/TodoListOragisms";

const MainTemplate = () => {
  return (
    <MainLayout>
      <MainRow>
        <TodoListOrganism label="todo" />
        <TodoListOrganism label="work" />
        <TodoListOrganism label="done" />
      </MainRow>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  background: #fff;
`;

const MainRow = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 1000px;
  height: 600px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default MainTemplate;
