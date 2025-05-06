import React from 'react'
import logo from '../imgs/logo.png'
import Header from './Header'
import "./style/App.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class="app">
      <Header />
      <Link to='/read' class='botao'>Pombos cadastrados</Link>
      <div class="background">
        <img src={logo} alt="logo" class="logo" />
        <h1 class='text'>Um site para cadastro de pombos</h1>
      </div>
    </div>
  )
}

export default Home