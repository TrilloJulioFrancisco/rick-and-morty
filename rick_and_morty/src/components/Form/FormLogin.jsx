import React, { useState } from 'react'
import Validation from './Validation.js';

export default function FormLogin({login}) {
    const [userData, setUserData] = useState({email:'', password:''});
    const [errors, setErrors] = useState({email:'', password:''});

    const handleChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors);
    }
    const handleSubmit = (event) =>{
        event.preventDefault() //para que no se borren los input al apretar submit
        login(userData);
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='email'>User:</label>
            <input type='text' name="email" placeholder='Email...' value={userData.email} onChange={handleChange}></input>
            <p>{errors.email}</p>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' value={userData.password} placeholder='Password...' onChange={handleChange}></input>
            <p>{errors.password}</p>
        </div>
        <button>Submit</button>
      </form>
    );
}
