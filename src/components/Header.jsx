import Nav from "./Nav"
import { Link } from "react-router-dom"

import React from 'react'

const Header = () => {
  return (
    <header>
        <Link to="/"><img src={"/logo.png"} alt="little lemon"/></Link>
        <Nav/>
      </header>
  )
}

export default Header