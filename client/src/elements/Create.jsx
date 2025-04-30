import React, {useState} from 'react'

function Create() {
    const [values, setValues] = useState({
        name: '',
        age: 0,
        uf: '',
        type: '',
        photo: '../../imgs/default-avatar-icon-of-social-media-user-vector.jpg'
    })

    function handleSubmit(event){
        
    }
  return (
    <div className='container vh-100 vw-100 bg-primary'>
        <div className='row'>
            <h3>Cadastrar Pombo</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-3'>
                    <label htmlFor="name">name</label>
                    <input type="text" name='name' required onChange={(event)=> setValues({...values, name: event.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="name">age</label>
                    <input type="number" name='age' required onChange={(event)=> setValues({...values, age: event.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="uf">uf</label>
                    <input type="text" name='uf' required onChange={(event)=> setValues({...values, uf: event.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="type">Name</label>
                    <input type="text" name='type' required onChange={(event)=> setValues({...values, type: event.target.value})}/>
                </div>
                <div className='form-group my-3'>
                    <label htmlFor="photo">Name</label>
                    <input type="file" name='photo' onChange={(event)=> setValues({...values, photo: event.target.value})}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create