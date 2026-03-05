import React from 'react'
import { useEffect } from 'react'



const Navbar = ({color}) => {
    useEffect(() => {
      alert("color was changed")
    }, [color])

    
  return (
    <div>
      I am Navbar of {color} color
    </div>
  )
}

export default Navbar
