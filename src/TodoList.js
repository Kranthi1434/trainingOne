import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo';


const TodoList = () => {

  const todos = useSelector((state)=>state.todos);
    // const handleDeleteTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };
  return (
    <>
      <ul className="list-group text-center">
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title}/>
         
        ))}
      </ul>
    </>
  )
}

export default TodoList


// { <li
// key={index}
// className="list-group-item d-flex justify-content-between align-items-center"
// >
// {todo}
// <button
//   className="btn btn-danger btn-sm"
//   onClick={() => handleDeleteTodo(index)}
// >
//   Delete
// </button>
// </li> }