//Importando dependências
  import React from 'react';
  import {BrowserRouter, Routes, Route} from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Home from './elements/Home';
  import Create from './elements/Create';
  import Read from './elements/Read';
  import Update from './elements/Update';
  import Details from './elements/Details';

//Aplicação
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/detail/:id' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

export default App
