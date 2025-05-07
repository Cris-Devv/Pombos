//Importando dependências do projeto
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import Header from './Header'
import './style/App.css'

//Criando esquema de validação
const validationSchema = Yup.object().shape({
    txtName: Yup.string().required('Insira o nome do pombo'),
    txtAge: Yup.string().required('Insira a idade do pombo'),
    cmbUF: Yup.string().required('Insira a localização do pombo')
})

function Create() {
//Configurando navegação 
    const navigate = useNavigate();

//Configurando API do IBGE
    const [estados, setEstados] = useState([]);
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
            setEstados(res.data);
        })
    }, [])

//Forms
    return (
        <div class='app'>
            <Header title='Cadastrar Pombo'/>
            <Link to='/read' class='botao'>Pombos cadastrados</Link>
            <div class='screen'>
                <Formik
                    initialValues={{
                        txtName: '',
                        txtAge: '',
                        cmbUF: '',
                        txtType: '',
                        txtPhoto: ''
                    }}
                    onSubmit={values => {
                        if (values.txtType === ''){
                            values.txtType = 'Indefinida'
                        }
                        axios.post('http://localhost:3001/add_pombo', values).then(
                            alert(`Pombo cadastrado com sucesso!`),
                            navigate('/read')
                        ).catch((err) => {
                            alert("Algo deu errado.");
                        })
                    }}
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit }) => (
                        <Form class='container' onSubmit={handleSubmit}>
                            <div class='form'>
                            <div>
                                <label class='label'>*Nome: </label>
                                <Field class='input' type="text" name="txtName"></Field>
                                <ErrorMessage name="txtName" component="div" className="error"></ErrorMessage>
                            </div>
                            <div>
                                <label class='label'>*Idade: </label>
                                <Field class='input' type="number" name="txtAge"></Field>
                                <ErrorMessage name="txtAge" component="div" className="error"></ErrorMessage>
                            </div>
                            <div>
                                <label class='label'>*UF: </label>
                                <Field class='input' as="select" name="cmbUF">
                                    <option value="">Selecione uma opção</option>
                                    {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                                </Field>
                                <ErrorMessage name="cmbUF" component="div" className="error"></ErrorMessage>
                            </div>
                            <div>
                                <label class='label'>Espécie: </label>
                                <Field class='input' type="text" name="txtType"></Field>
                            </div>
                            {/* <div>
                                <label class='label'>Foto: </label>
                                <Field class='input' type="file" name="txtPhoto"></Field>
                            </div> */}
                            <div>
                                <button class='submit' type="submit">Cadastrar</button>
                            </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Create