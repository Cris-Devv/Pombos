//Importando dependências do projeto
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

//Criando esquema de validação
const validationSchema = Yup.object().shape({
    txtName: Yup.string().required('Insira o nome do pombo'),
    txtAge: Yup.string().required('Insira a idade do pombo'),
    cmbUF: Yup.string().required('Insira a localização do pombo')
})

//Configurando valores padrões do Forms
function Create() {
    const navigate = useNavigate();
    const [estados, setEstados] = useState([]);

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
                <center><h1>Cadastrar Pombo</h1></center>
                <div className='d-flex justify-content-end'>
                    <Link to='/read' className='btn btn-success'>Pombos cadastrados</Link>
                </div>
                <Formik
                    initialValues={{
                        // txtName: '',
                        // txtAge: '',
                        // cmbUF: '',
                        // txtType: 'Indefinida',
                        txtPhoto: ''
                    }}
                    onSubmit={values => {
                        // axios.post('http://localhost:3001/add_pombo', values).then(
                        //     alert(`Pombo cadastrado com sucesso!`),
                        //     navigate('/read')
                        // ).catch((err) => {
                        //     alert("Algo deu errado.");
                        // })
                        console.log(values)
                    }}
                    // validationSchema={validationSchema}
                >
                    {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            {/* <div className='form-group my-3'>
                                <label>*Nome: </label>
                                <Field type="text" name="txtName"></Field>
                                <ErrorMessage name="txtName" component="div" className="error"></ErrorMessage>
                            </div>
                            <div className='form-group my-3'>
                                <label>*Idade: </label>
                                <Field type="number" name="txtAge"></Field>
                                <ErrorMessage name="txtAge" component="div" className="error"></ErrorMessage>
                            </div>
                            <div className='form-group my-3'>
                                <label>*UF: </label>
                                <Field as="select" name="cmbUF">
                                    <option value="">Selecione uma opção</option>
                                    {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                                </Field>
                                <ErrorMessage name="cmbUF" component="div" className="error"></ErrorMessage>
                            </div>
                            <div className='form-group my-3'>
                                <label>Espécie: </label>
                                <Field type="text" name="txtType" value=""></Field>
                            </div> */}
                            <div className='form-group my-3'>
                                <label>Foto: </label>
                                <Field type="file" name="txtPhoto"></Field>
                            </div>
                            <div className='form-group my-3'>
                                <button type="submit" className='btn btn-success'>Cadastrar</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Create