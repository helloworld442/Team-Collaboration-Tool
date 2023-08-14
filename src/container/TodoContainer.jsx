import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext(null);

const initialState = {
  todos: [],
  todo: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return { ...state, todos: state.todos.concat(action.payload) };
    case "GET_TODO_BY_ID":
      return { ...state, todo: state.todos.find((todo) => todo.id === action.payload) };
    default:
      return state;
  }
};

const TodoContainer = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

const useTodoState = () => {
  const { state } = useContext(TodoContext);
  return state;
};

const useTodoDispatch = () => {
  const { dispatch } = useContext(TodoContainer);
  return dispatch;
};

export { useTodoState, useTodoDispatch };

export default TodoContainer;
