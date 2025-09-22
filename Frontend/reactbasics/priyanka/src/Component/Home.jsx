import React from 'react'
import { useAuth } from '../Context/AuthenticationContext'

function Home() {
const {isAuthenticated,user} = useAuth();
if(!isAuthenticated) return;
  return (
    <div>Hello {user.name}</div>
  )
}

export default Home