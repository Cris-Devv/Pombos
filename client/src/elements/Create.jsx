//Importando dependências do projeto
    import React, {useEffect, useState} from 'react'
    import axios from 'axios'
    import {Link, useNavigate} from 'react-router-dom'

//Configurando valores padrões do Forms
    function Create() {
        const navigate = useNavigate();
        const [estados, setEstados] = useState([]);
        const [values, setValues] = useState({
            txtName: '',
            txtAge: 0,
            cmbUF: '0',
            txtType: 'Indefinido',
            txtPhoto: '../../imgs/default-avatar-icon-of-social-media-user-vector.jpg'
        })

//Redirecionamento à rota de cadastro

    function handleInputChange (event) {
        values[event.target.name] = event.target.value;
        setValues(values);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3001/add_pombo', values).then(
            alert(`Usuário cadastrado com sucesso!`),
            navigate('/read')
        )
    }

//Configurando API do IBGE
    useEffect(() => {
            axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
                setEstados(res.data);
            })
        }, [])

//Forms
  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
        <div className='row'>
            <h1>Cadastrar Pombo</h1>
            <div className='d-flex justify-content-end'>
                <Link to='/read' className='btn btn-success'>Pombos cadastrados</Link>
            </div>
            <form onSubmit={handleFormSubmit} action="">
                <div className='form-group my-3'>
                    <label>Nome: </label>
                    <input type="text" name='txtName' required onChange={handleInputChange}/>
                </div>
                <div className='form-group my-3'>
                    <label>Idade: </label>
                    <input type="number" name='txtAge' required onChange={handleInputChange}/>
                </div>
                <div className='form-group my-3'>
                    <label>UF:
                        <select name="cmbUF" id="cmbUF" required onChange={handleInputChange}>
                            <option value="0">Selecione uma opção</option>
                            {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                        </select>
                    </label>
                </div>
                <div className='form-group my-3'>
                    <label>Tipo: </label>
                    <input type="text" name='txtType' onChange={handleInputChange}/>
                </div>
                <div className='form-group my-3'>
                    <label>Photo: </label>
                    <input type="file" name='txtPhoto' onChange={handleInputChange}/>
                </div>
                <div className='form-group my-3'>
                    <input type="submit" value="Salvar" className='btn btn-success'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create