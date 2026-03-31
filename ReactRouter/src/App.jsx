import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Login from './components/Login'
import User from './components/User'

// MOSTLY HUM ROUTING KA APNA SARA KAM MAIN.JSX ME KARTE HAI

// Jaha par bhi humhare ye browsre router use karne hai vaha par hum apne Router provider ko fit kar denge

// To install react router use npm i react-router-dom OR npm install react-router-dom --legacy-peer-deps

function App() {
  // YAHA PAR HUMNE EK ROUTER BANAYA HAI AUR YAHA HUM USKE MADAT SE YAHA APNA SAB KUCH IMPORT KARENGE
  const router = createBrowserRouter([
          {
            path: "/",
            element: <><Navbar /><Home /></>
          },
          {
            path: "/login",
            element: <><Navbar /><Login /></>
          },
          {
            path: "/About",
            element: <><Navbar /><About /></>
          },
          {
            path: "/user/:username",
            // agar humne link me /user/Unmesh dala to yaha pe I am user Unmesh aa jayega
            element: <><Navbar /><User /></>
          },
      ])

  return (
    <>
  
    <RouterProvider router={router} />
    </>
  )
}

export default App
