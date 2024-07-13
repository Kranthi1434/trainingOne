import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./component/actions";
import TodoList from "./TodoList";

function TodoForm() {
  const [todoTitle, setTodoTitle] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleTodo = () => {
    if (todoTitle.trim()) {
      const newTodo = {
        title: todoTitle,
      };
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };

  return (
    <>
      <div className="container fluid" style={{ width: "500px" }}>
        <h2>Todo List</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo"
            value={todoTitle}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary ms-3" onClick={() => handleTodo()}>
            Add Todo
          </button>
        </div>
      </div>
      <TodoList/>
    </>
  );
}

export default TodoForm;
