import React from 'react'
import { useState } from 'react'
import Todo from './Todo';
import { useRef } from 'react';
import { useCallback } from 'react';

function TodoContainer() {
    const inpRef = useRef(null);
    let[todos,setTodos] = useState([]);
    let [todo,setTodo] = useState('');
    const editTodo = useCallback((id) => {
        let res = prompt("Enter new todo");
        setTodos(todos.map((t, index) => index == id ? res : t));
        console.log("Rendering todo........");
    },[todos])
    const addTodo = useCallback(() => {
        console.log("hjere")
        setTodos(prev => [...prev, todo]);
        setTodo("");
        console.log("Rendering todo........");
    },[todo]);
    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter((data, key)=> key !== id));
        console.log("Rendering todo........");
    },[]);
  return (
    <div>
        <div>
            <label htmlFor="todoinput">Todo :</label>
            <input type="text" id='todoinput' ref={inpRef} placeholder='Enter your Todo' onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo} >Add</button>
        </div>
        <div>
            {todos && todos.map((t,idx) => <Todo key={idx} task={t} id={idx} editTodo={editTodo} deleteTodo={deleteTodo} />)}
        </div>
    </div>
  )
}

export default TodoContainer