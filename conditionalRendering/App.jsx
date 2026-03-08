import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  // We will create multiple todo list using usestate
  const [todos, settodos] = useState([
    {
      title : "Unmesh",
      desc : "Hii I am Unmesh"
    },
    {
      title : "Yash",
      desc : "Hii I am Yash"
    },
    {
      title : "Ayush",
      desc : "Hii I am Ayush"
    }
  ])

  // const Todo = ({todo}) => {return (<>
  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>
  // </>)}

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
      {/* btn */}
      {/* Below is condition to show btn without conditional Rendering */}
      {showbtn?<button>Show button is true</button>:<button>Show button is false</button>}
      {/* {showbtn && <button>I will be seen only when another btn is clicked</button>} */}
      {/* mtlb agar show btn true hai tabhi dikhega ye btn humhara but ye hum else statement dikhane ke liye nahi use kar sakte hai so to show else statement use above statement only */}


      {/* Ab Hum ek list jo ke hai humhare todo usse render karenge apne react me */}
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        // Generally hum directly apne upar vale div ko he yaha return karvate hai
        return ((
        <div key={todo.title} className="maintodo">
       <div className="todo">{todo.title}</div>
       <div className="todo">{todo.desc}</div>
       </div>
      ))
      })}
      <div className="card">
        {/* Now we will show aur button when the below btn is clicked */}
        <button onClick={() => setshowbtn(!showbtn)}>
          Click me see the Magic
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
