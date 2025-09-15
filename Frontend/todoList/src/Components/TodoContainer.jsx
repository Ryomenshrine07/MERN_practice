import React from 'react'
import { useState } from 'react'
import Todo from './Todo';
import { useRef } from 'react';

function TodoContainer() {
    const inpRef = useRef(null);
    let[todos,setTodos] = useState([]);
    let [todo,setTodo] = useState('');
    function editTodo(id){
        let res = prompt("Enter new todo");
        setTodos(todos.map((t, index) => index == id ? res : t))
    }
  return (
    <div>
        <div>
            <label htmlFor="todoinput">Todo :</label>
            <input type="text" id='todoinput' ref={inpRef} placeholder='Enter your Todo' onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => {
                // console.log(inpRef.current.value)
                setTodos([todo,...todos]);
            }} >Add</button>
        </div>
        <div>
            {todos && todos.map((t,idx) => <Todo key={idx} task={t} id={idx} editTodo={editTodo} />)}
        </div>
    </div>
  )
}

export default TodoContainer