import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

function Details() {

  const navigate = useNavigate();
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

    function handleDelete(id){
      axios.delete(`http://localhost:3001/delete/${id}`).then(
        navigate('/read')
      )
      .catch((err)=> {
        console.log(err);
      })
    }

  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
      <center><h1>Detalhes do pombo {id}</h1></center>
      <Link className='btn btn-success' to='/read'>Voltar</Link>
      {data.map((pombo) => {
        return (
          <div>
            <ul className='list-group'>
              <li className='list-group-item'>
                <b>ID: </b>
                {pombo['id']}
              </li>
              <li className='list-group-item'>
                <b>Nome: </b>
                {pombo['name']}
              </li>
              <li className='list-group-item'>
                <b>Idade: </b>
                {pombo['age']}
              </li>
              <li className='list-group-item'>
                <b>UF: </b>
                {pombo['uf']}
              </li>
              <li className='list-group-item'>
                <b>Tipo: </b>
                {pombo['type']}
              </li>
              {/* <li className='list-group-item'>
        <b>Foto: </b>
        {pombo['photo']}
      </li> */}
            </ul>
            <button onClick={() => handleDelete(pombo.id)} className='btn btn-danger'>Deletar</button>
          </div>
        );
      })}
    </div>
  );
}

export default Details