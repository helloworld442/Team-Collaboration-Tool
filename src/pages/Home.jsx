import { MainLayout } from "../layout/MainLayout";
import * as Todo from "../components/todo";
import TodoContainer from "../container/TodoContainer";

const Home = () => {
  return (
    <MainLayout>
      <TodoContainer>
        <Todo.Template>
          <Todo.Head label="todo" />
          <Todo.List label="todo" />
          <Todo.Form label="todo" />
        </Todo.Template>
        <Todo.Template>
          <Todo.Head label="work" />
          <Todo.List label="work" />
          <Todo.Form label="work" />
        </Todo.Template>
        <Todo.Template>
          <Todo.Head label="done" />
          <Todo.List label="done" />
          <Todo.Form label="done" />
        </Todo.Template>
      </TodoContainer>
    </MainLayout>
  );
};

export default Home;
