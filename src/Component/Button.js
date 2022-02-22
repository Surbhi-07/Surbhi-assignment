import React from 'react'

export default function Button() {

  const handleClick = (e)=>{
    alert("you clicked "+e.target.innerHTML)
  }
  return (
    <div>
      <button onClick={handleClick}>button1
      
      </button>
      <button onClick={handleClick}>button2
      
      </button> 
      <button onClick={handleClick}>button3
     
      </button>
    </div>
  )
}
