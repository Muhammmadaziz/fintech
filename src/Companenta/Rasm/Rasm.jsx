import React from 'react'
import "./Rasm.css"
import {useNavigate} from "react-router-dom";
function Rasm({item}) {
  const navigate=useNavigate();
  const btnimg=()=>{
   navigate(`/savat/${item.id}`)
  }
  return (
    <div className='rasmm'>
        <img onClick={btnimg} src={item.img} alt="" />
        <h3>{item.nomi}</h3>
        <button>Yuklash</button>  
    </div>
  )
}

export default Rasm