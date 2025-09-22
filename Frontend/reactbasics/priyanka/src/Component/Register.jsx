import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthenticationContext';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setUser} = useAuth();
 
    const handleClick = (e) => {
        e.preventDefault();
        console.log(name,email,password);
        const user = {
            name:name,
            email:email,
            password:password
        }
        setUser(user);
    }

  return (
    <div style={{width:'500px'}}>
        <h1>Register</h1>
        <form action="" onSubmit={handleClick}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" onChange={(e) => setName(e.target.value)}/>
            </div>
            <hr />
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
        <button onClick={() => navigate('/')}>Login</button>
    </div>
  )
}

export default Register