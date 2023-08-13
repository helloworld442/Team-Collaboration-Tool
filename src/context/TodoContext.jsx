import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE":
      return { ...state, todos: state.todos.concat(action.todo) };
    case "TOGGLE_TODO_FIELD":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isActive: !todo.isActive } : todo
        ),
      };
    case "CHANGE_TODO_FIELD":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, title: action.title } : todo
        ),
      };
    default:
      return state;
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

const useTodoState = () => {
  const { state } = useContext(TodoContext);
  return state;
};

const useTodoDispatch = () => {
  const { dispatch } = useContext(TodoContext);
  return dispatch;
};

export { useTodoState, useTodoDispatch };

export default TodoProvider;
