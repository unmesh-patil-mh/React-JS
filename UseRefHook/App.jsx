import { useState ,useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0;

  // useEffect(() => {
  //   a= a+1;
  //   console.log("Rendering... and value of a is " + a); 
  // },);
  // UseEffect har bar State change hoga utne barr useeffect render karega yani useEffect uthni barr reload and change hoga
// Isliye yaha a+1 to hoga par har bar rerender hone ke vaje se a ke value 0 hoti rahegi aur badegi he nahi to iske liye hum useRef karte hai

// USE CASE 1 OF REF HOOK
// Ab upar ka code hum useRef se karte hai jaha hum a ke value ko same return karenge
// const a = useRef(0);

// useEffect(() => {
//   a.current = a.current + 1;
//   console.log(`Rendering The value of a is ${a.current}`)
// },);

// USE CASE 2 TO USE REF HOOK
const btnref = useRef();
// givinf the refrence to button see button code

useEffect(() => {
  console.log(`First Refrence....`)
    btnref.current.style.backgroundColor = "red"
},[]);



  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => (btnref.current.style.backgroundColor = "Grey")}>click me</button>
      {/* Yaha hum upare ke button jisse humne btnref set kiya hai uska background color grey ho jaye */}
    </>
  )
}

export default App
