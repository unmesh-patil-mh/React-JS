import React from 'react'
import { memo } from 'react'

const Navbar = ({adjactive,changeadj}) => {
    console.log("Navbar is Rendered")
  return (
    <div>
      I am a {adjactive} Navbar
      <button onClick={changeadj}>{changeadj()}</button>
    </div>
  )
}

export default memo(Navbar)
