import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NumberPage from './Component/NumberPage'
import MyComponent from './Component/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyComponent/>
      <NumberPage/>
    </>
  )
}

export default App
