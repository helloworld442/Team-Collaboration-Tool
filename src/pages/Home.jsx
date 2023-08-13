import { MainLayout, MainRow } from "../layout/MainLayout";
import * as Todo from "../components/todo";

const Home = () => {
  return (
    <MainLayout>
      <MainRow>
        <Todo.Template>
          <Todo.Head />
          <Todo.List />
          <Todo.Form />
        </Todo.Template>
      </MainRow>
    </MainLayout>
  );
};

export default Home;
