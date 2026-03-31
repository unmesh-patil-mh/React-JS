import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    
  return (
    <div>
      <span>
        <NavLink className={(e) =>{return e.isActive?"red" :""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) =>{return e.isActive?"red" :""}} to="/login"><li>login</li></NavLink>
        <NavLink className={(e) =>{return e.isActive?"red" :""}} to="/About"><li>About</li></NavLink>
      </span>
    </div>
  )
}

export default Navbar
