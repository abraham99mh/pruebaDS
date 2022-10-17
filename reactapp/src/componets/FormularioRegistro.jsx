import React, { useState }  from 'react'
import Boton from '../estilos/boton';
import { Button } from 'bootstrap';

const FormilarioRegistro = (props) => {

    const [user, setUser] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        console.log(e.target.value);
        if (e.target.name === "user") {
            setUser(e.target.value);
        } else if (e.target.name === "mail") {
            setMail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.cambiarSesion(true);
        //console.log(props.cambiarSesion().value);
    };

    const onIniciarSesion = () => {
        props.mostrarRegistro(false);
    };

    return (
        <div className="container mt-4">
            <h3>Registro</h3>
            <p>Usuario: {user}</p>
            <p>Mail: {mail}</p>
            <p>Contraseña: {password}</p>
            
            <form onSubmit={onSubmit}>
                <div>
                    <span id="basic-addon1">Usuario</span>
                    <input
                        type="text"
                        name='user'
                        id='userRegistro'
                        value={user}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <span id="basic-addon1">Correo</span>
                    <input
                        type="text"
                        name='mail'
                        id='mailRegistro'
                        value={mail}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraeña</label>
                    <input
                        type="password"
                        name='password'
                        id='passwordRegistro'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <Boton verde type=''>Registrarse</Boton>
            </form>
            <Boton onClick={onIniciarSesion} type=''>Iniciar Sesión</Boton>
        </div>
    );
}

export default FormilarioRegistro;