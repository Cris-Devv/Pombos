import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

function Update() {
  const navigate = useNavigate();
  const [estados, setEstados] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/get_pombo/${id}`).then((res) => {
      setData(res.data);
    })
      .catch((err) => {
        alert("Algo deu errado.")
      })
  }, [id])

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
      setEstados(res.data);
    })
  }, [])

  // function handleInputChange(event) {
  //   data[event.target.name] = event.target.value;
  //   setData(data);
  // }

  function handleFormSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:3001/update_pombo/${id}`, data[0]).then(
      alert(`Pombo atualizado com sucesso!`),
      navigate('/read')
  ).catch((err)=>alert("Algo deu errado."))
  }

  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
      {data.map((pombo) => {
        return (
          <div>
            <Link className='btn btn-success' to='/read'>Voltar</Link>
            <center><h1>Editando pombo {id}</h1></center>
          <form onSubmit={handleFormSubmit}>
            <div className='form-group my-3'>
              <label>Nome: </label>
              <input 
              value={pombo.name} 
              type="text" 
              name='txtName' 
              required 
              onChange={(e) =>{
                setData([{...data[0], name: e.target.value}])
              }} 
              />
            </div>
            <div className='form-group my-3'>
              <label>Idade: </label>
              <input 
              value={pombo.age} 
              type="number" 
              name='txtAge' 
              required 
              onChange={(e) =>{
                setData([{...data[0], age: e.target.value}])
              }}  
              />
            </div>
            <div className='form-group my-3'>
              <label>UF:
                <select name="cmbUF" id="cmbUF" required onChange={(e) =>{setData([{...data[0], uf: e.target.value}])}} >
                  <option value={pombo.uf}>UF Anterior: {pombo.uf}</option>
                  {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                </select>
              </label>
            </div>
            <div className='form-group my-3'>
              <label>Tipo: </label>
              <input 
              value={pombo.type} 
              type="text" 
              name='txtType' 
              onChange={(e) =>{
                setData([{...data[0], type: e.target.value}])
              }} 
              />
            </div>
            <div className='form-group my-3'>
              <label>Photo: </label>
              <input 
              type="file" 
              name='txtPhoto' 
              onChange={(e) =>{
                setData([{...data[0], photo: e.target.value}])
              }} 
              />
            </div>
            <div className='form-group my-3'>
              <input 
              type="submit" 
              value="Salvar" 
              className='btn btn-success' 
              />
            </div>
          </form>
          </div>
        )
      })}
    </div>
  );
}

export default Update