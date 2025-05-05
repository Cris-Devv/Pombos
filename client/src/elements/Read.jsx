  import React, {useEffect, useState} from 'react'
  import axios from 'axios'
  import {Link} from 'react-router-dom'

function Read() {
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:3001/pombos').then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
      <center><h1>Pombos cadastrados</h1></center>
      <div className='d-flex justify-content-end'>
        <Link className='btn btn-success' to='/create'>Cadastrar pombo</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID: </th>
            <th>Nome: </th>
            <th>Idade: </th>
            <th>UF: </th>
          </tr>
        </thead>
        <tbody>
          {data.map((pombo)=>{
              return (<tr>
                <td>{pombo.id}</td>
                <td>{pombo.name}</td>
                <td><center>{pombo.age}</center></td>
                <td>{pombo.uf}</td>
                <td>
                  <Link className='btn btn-success' to={`/detail/${pombo.id}`}>Detalhes</Link>
                  <Link className='btn btn-success' to={`/update/${pombo.id}`}>Editar</Link>
                </td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Read