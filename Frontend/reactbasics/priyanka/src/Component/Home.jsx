import React, { useMemo, useState } from 'react'
import { useAuth } from '../Context/AuthenticationContext'

function Home() {
const {isAuthenticated,user} = useAuth();
const [number, setNumber] = useState(0);
const [theme, setTheme] = useState("light");

function calculateDoule(number){
  console.log("Calculating double.......");
  let i =0;
  while(i < 2000000000) i++;
  return number * 2;
}

const double = useMemo(() => calculateDoule(number),[number]);

// const double = calculateDoule(number);
console.log("current Theme", theme);

if(!isAuthenticated) return;
  return (
    <div>
      <h1>Hello {user.name}</h1>
      <h3>Number : {number}</h3>
      <h3>Double : {double}</h3>
      <button onClick={() => setNumber(number + 1)} >increase</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>change theme</button>
    </div>
  )
}

export default Home