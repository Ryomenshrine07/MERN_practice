import React from 'react'

function Todo({task, id, editTodo}) {
  if(!task){
    return null;
  }
  return (
    <div key={id}>
        <p>{task}</p>
        <button onClick={() => editTodo(id)}>edit</button>
        <button>delete</button>
    </div>
  )
}

export default Todo