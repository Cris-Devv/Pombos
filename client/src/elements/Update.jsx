import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import Header from './Header';
import './style/App.css';

//Criando esquema de validação
const validationSchema = Yup.object().shape({
  txtName: Yup.string().required('Insira o nome do pombo'),
  txtAge: Yup.string().required('Insira a idade do pombo'),
  cmbUF: Yup.string().required('Insira a localização do pombo')
})

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

  return (
    <div className='container-fluid bg-primary vh-100 vw-100'>
      {data.map((pombo) => {
        return (
          <div>
            <Link className='btn btn-success' to='/read'>Voltar</Link>
            <center><h1>Editando {String(pombo.name)}</h1></center>
            <Formik
              initialValues={{
                txtName: pombo.name,
                txtAge: pombo.age,
                cmbUF: pombo.uf,
                txtType: pombo.type,
                txtPhoto: pombo.photo
              }}
              onSubmit={values => {
                axios.put(`http://localhost:3001/update_pombo/${id}`, values).then(
                  alert(`Pombo atualizado com sucesso!`),
                  navigate('/read')
                ).catch((err) => {
                  alert("Algo deu errado.");
                })
              }}
              validationSchema={validationSchema}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className='form-group my-3'>
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
                      <option value={pombo.uf}>Opção anterior: {pombo.uf}</option>
                      {estados.map(estado => (<option key={estado.sigla} value={estado.sigla}>{estado.sigla}</option>))}
                    </Field>
                    <ErrorMessage name="cmbUF" component="div" className="error"></ErrorMessage>
                  </div>
                  <div className='form-group my-3'>
                    <label>Tipo: </label>
                    <Field type="text" name="txtType"></Field>
                  </div>
                  {/* <div className='form-group my-3'>
                    <label>Photo: </label>
                    <Field type="file" name="txtphoto"></Field>
                  </div> */}
                  <div className='form-group my-3'>
                    <button type="submit" className='btn btn-success'>Salvar</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )
      })}
    </div>
  );
}

export default Update