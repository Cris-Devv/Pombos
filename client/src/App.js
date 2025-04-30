<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
//Importando dependências
  import React from 'react';
  import {BrowserRouter, Routes, Route} from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Home from './elements/Home';
  import Create from './elements/Create';
  import Read from './elements/Read';
  import Update from './elements/Update';
  import Delete from './elements/Delete';

//Aplicação
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/delete/:id' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

export default App
>>>>>>> 69c1feb (Fazendo a página de Create (comentar ainda))
