import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Contador from './componets/Contador';
import Lista from './componets/Lista';
import { Titulo2 } from './componets/Titulo';
import FormilarioLogin from './componets/FormularioLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  const [sesion, cambiarSesion] = useState(false)

  return (
    <>
      {sesion === true ? (
        <div className='container'>
          <Titulo2 alumno="Luis" matricula="182598" color="purple" />
          <Lista />
          <button className="btn btn-success" id='cerrarSesion' onClick={() => cambiarSesion(false)}>Cerrar sesión</button>
          <Contador />
        </div>
      ) : (
        <div className='container'>
          <h2>Primero inicia sesion</h2>
          <FormilarioLogin cambiarSesion={cambiarSesion} />
          {/* <button className="btn btn-success" id='iniciarSesion' onClick={() => cambiarSesion(true)}>Iniciar sesión</button> */}
        </div>
      )}
    </>
  )

};

root.render(<App />);

