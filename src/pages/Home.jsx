import { MainLayout, MainRow } from "../layout/MainLayout";
import TodoProvider from "../context/TodoContext";
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
            <TodoList label="todo" />
            <TodoForm label="todo" />
          </TodoTemplate>
          <TodoTemplate>
            <TodoHead label="work" />
            <TodoList label="work" />
            <TodoForm label="work" />
          </TodoTemplate>
          <TodoTemplate>
            <TodoHead label="done" />
            <TodoList label="done" />
            <TodoForm label="done" />
          </TodoTemplate>
        </TodoProvider>
      </MainRow>
    </MainLayout>
  );
};

export default Home;
