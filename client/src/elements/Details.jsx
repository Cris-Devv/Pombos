import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Details() {

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/get_pombo/${id}`).then((res) => {
      setData(res.data);
    })
      .catch((err) => {
        console.log(err);
      })
  }, [id])

  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
      <h1>Detalhes do pombo {id}</h1>
      <Link className='btn btn-success' to='/read'>Voltar</Link>
      {data.map((pombo) => {
        return (
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
        );
      })}
    </div>
  );
}

export default Details