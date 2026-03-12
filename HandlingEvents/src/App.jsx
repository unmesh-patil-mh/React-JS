import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [value, setvalue] = useState("Unmesh")
  const [form, setform] = useState({email:"" , phone:""})

const handleinput = ((e) => {
  setform({...form,[e.target.name]:e.target.value})
})


const  handleclick = (() =>{
alert("Hey I am Clicked")
})

const handleMouseover = (() =>{
  alert("I am Mouse over")
})

// Ye imput tag ke ek default practice hai jo humesha follow ke jati hai 

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click Me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseover}> */}
        {/* I am Red div */}
      {/* </div> */}
      <input type="email" name='email' value={form.email} onChange={handleinput}/>
      <input type="phone" name='phone' value={form.phone} onChange={handleinput}/>
    </>
  )
}

export default App
