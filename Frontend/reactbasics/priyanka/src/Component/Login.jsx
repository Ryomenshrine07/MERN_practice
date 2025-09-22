import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthenticationContext';

function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const {user,setIsAuthenticated} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.email === email && user.password === password){
            alert("Login Successfull");
            setIsAuthenticated(true);
            navigate('/home');
        }else{
            alert("User not found");
        }
    }   
  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <hr />
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <hr />
            <button>Submit</button>
        </form>
        <button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}

export default Login