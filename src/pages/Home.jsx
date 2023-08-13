import { MainLayout, MainRow } from "../layout/MainLayout";
import { TodoProvider } from "../context/TodoContext";
import TodoTemplate from "../components/todo/TodoTemplate";
import TodoForm from "../components/todo/TodoForm";
import TodoHead from "../components/todo/TodoHead";
import TodoList from "../components/todo/TodoList";

const Home = () => {
  return (
    <MainLayout>
      <MainRow>
        <TodoProvider>
          <TodoTemplate>
            <TodoHead label="todo" />
            <TodoList />
            <TodoForm />
          </TodoTemplate>
          <TodoTemplate>
            <TodoHead label="work" />
            <TodoList />
            <TodoForm />
          </TodoTemplate>
          <TodoTemplate>
            <TodoHead label="done" />
            <TodoList />
            <TodoForm />
          </TodoTemplate>
        </TodoProvider>
      </MainRow>
    </MainLayout>
  );
};

export default Home;
