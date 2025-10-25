import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NumberPage from './Component/NumberPage'
import MyComponent from './Component/MyComponent'
import Register from './Component/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import { AuthProvider } from './Context/AuthenticationContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'100vh'}}>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </AuthProvider>
    </div>
  )
}

export default App
