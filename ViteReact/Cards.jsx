import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='cards' style={{border: "2px solid black"}}>
      <h2>{props.title}</h2>
      <img src="https://imgs.search.brave.com/KBgsJjCmeUeaDMVFYzLVfLIHuTWitLJ2Iv8DHLxNmPU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/MjIyLzEwMi9zbWFs/bC9hYnN0cmFjdC1t/b2Rlcm4tdGVjaC1v/Zi1wcm9ncmFtbWlu/Zy1jb2RlLXNjcmVl/bi1kZXZlbG9wZXIt/ZnJlZS1waG90by5q/cGc" alt="" style={{marginTop: "10px" , marginBottom:"10px"}} />
      <p>{props.desc}</p>
    </div>
  )
}

export default Cards
