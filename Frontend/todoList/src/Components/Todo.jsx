import React from 'react'

const Todo =  React.memo(function Todo({task, id, editTodo, deleteTodo}) {
  if(!task){
    return null;
  }
  console.log("rendering todo with task :",task);
  return (
    <div key={id}>
        <p>{task}</p>
        <button onClick={() => editTodo(id)}>edit</button>
        <button onClick={() => deleteTodo(id)}>delete</button>
    </div>
  )
});

export default Todo