import { createContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
  todo: {
    id: 0,
    title: "",
    isActive: true,
    isStatus: "",
  },
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE":
      return { ...state, todos: state.todos.concat(action.payload) };
    default:
      return state;
  }
}

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
