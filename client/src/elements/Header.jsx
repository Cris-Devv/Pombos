import React from 'react'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'
import './style/App.css'

function Header(props) {
  return (
    <div class="app">
      <Link to="/"><img src={logo} alt="logo" class="logoH"/></Link>
      <h1 class='title'>{props.title}</h1>
    </div>
  )
}

export default Header