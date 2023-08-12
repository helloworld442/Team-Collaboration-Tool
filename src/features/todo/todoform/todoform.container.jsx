import { useState } from "react";
import TodoForm from "./todoform.component";

const TodoFormContainer = () => {
  const [form, setForm] = useState("");

  const onChangeInput = (e) => setForm(e.target.value);

  const onSubmitInput = (e) => {
    e.preventDefault();
    setForm("");
  };

  return <TodoForm form={form} onInsert={onChangeInput} onSubmit={onSubmitInput} />;
};

export default TodoFormContainer;
