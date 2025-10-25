import React, { useState } from 'react'
import NumberCompo from './NumberCompo';

function NumberPage() {
    let[arr,setArr] = useState([1,2,3,4,5,6]);
    let[person, setPerson] = useState({
      name:'Vinayak',
      email:'sds@gmail.com'
    });
    let p = {
      name:'dfdsf',
    }
    console.log(p.dob?.year);
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Email: {person.email}</p>
      <p>Dob: {person.dob}</p>
        {arr.map((e) =>{
           return e % 2 == 0 ? <NumberCompo number={e} /> : <></>
        })}
    </div>
  )
}

export default NumberPage