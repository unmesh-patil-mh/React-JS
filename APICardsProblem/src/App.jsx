import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [cards, setcards] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setcards(data))
    .catch((error) => console.log("Error Fetching Data",error))
  }, [])
  
 

  return (
    <>
      <Navbar />
      <div className="cards-container">

    {cards.map((card) => (
        <div key={card.id} className="maindiv">
          <div className="userid">User ID: {card.userId}</div>
          <div className="id">Post ID: {card.id}</div>
          <div className="title">Title: {card.title}</div>
          <div className="body">Decs: {card.body}</div>
        </div>
      ))}
      </div>

      <Footer />
    </>
  )
}

export default App
