import React, { useState } from 'react'

const FormilarioLogin = (props) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.value);
        if (e.target.name === "user") {
            setUser(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (user === "abr" && password === "123") {
            //alert("Correcto");
            props.cambiarSesion(true);
        } else {
            //alert("Incorrecto");
        }
    };

    return (
        <div className="container mt-4">
            <p>Usuario: {user}</p>
            <p>Contraseña: {password}</p>
            <form onSubmit={onSubmit}>
                <div className='input-group'>
                    <label htmlFor="user">Usuario</label>
                    <input
                        type="text"
                        name='user'
                        id='user'
                        value={user}
                        onChange={onChange}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Contraeña</label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <button className='btn btn-success' type=''>Iniciar sesion</button>
            </form>
        </div>
    );
}

export default FormilarioLogin;