import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setcount] = useState(0);
  // Count ek state he jiske value hum 0 initialize kar rahe hai using useState aur setcount se hum count ke value kabhi bhi change kar sakte hai

  return (
    <>
      <div>Count is {count}</div>
      <button onClick={() => {setcount(count+1)}}>Update Count</button>
    </>
  )
}

export default App
