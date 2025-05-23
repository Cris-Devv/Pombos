//Importando dependências
  import React, {useEffect, useState} from 'react'
  import axios from 'axios'
  import {Link} from 'react-router-dom'
  import Header from './Header'
  import './style/App.css'

//Criação da página Read
function Read() {

  const [data, setData] = useState([]); //Definindo variáveis para pesquisa de dados
   
  useEffect(()=>{
//Usando rota get para buscar dados no Banco
 axios.get('http://localhost:3001/pombos').then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div class='app'>
      <Header title="Pombos cadastrados" />
      <div className='d-flex justify-content-end'>
        <Link class='botao' to='/create'>Cadastrar pombo</Link>
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
//data.map utilizado para implementar dados do banco na variável pombo
              return (<tr>
                <td>{pombo.id}</td>
                <td>{pombo.name}</td>
                <td><center>{pombo.age}</center></td>
                <td>{pombo.uf}</td>
                <td>
                  <Link class='botao2' to={`/detail/${pombo.id}`}>Detalhes</Link>
                  <Link class='botao3' to={`/update/${pombo.id}`}>Editar</Link>
                </td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

//Exportando página Read
export default Read