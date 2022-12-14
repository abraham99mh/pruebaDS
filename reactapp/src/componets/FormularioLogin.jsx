import React, { useState } from 'react'
import Boton from '../estilos/boton';

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
            setUser("");
            setPassword("");
        }
    };
    const onRegistro = () => {
        props.mostrarRegistro(true);
    };

    return (
        <div className="container mt-4">
            <h3>Inicio de sesión</h3>
            <p>Usuario: {user}</p>
            <p>Contraseña: {password}</p>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="user">Usuario</label>
                    <input
                        type="text"
                        name='user'
                        id='user'
                        value={user}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraeña</label>
                    <input
                        type="password"
                        name='password'
                        id='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <Boton type=''>Iniciar sesion</Boton>
            </form>
            <Boton verde onClick={onRegistro}>Registrarse</Boton>
        </div>
    );
}

export default FormilarioLogin;