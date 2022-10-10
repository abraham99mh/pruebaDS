import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Contador from './componets/Contador';
import Lista from './componets/Lista';
import { Titulo2 } from './componets/Titulo';

const root = ReactDOM.createRoot(document.getElementById('root'));


const App = () => {
  const [sesion, cambiarSesion] = useState(true)

  return (
    <>
      {sesion === true ? (
        <>
          <Titulo2 alumno="Luis" matricula="182598" color="purple" />
          <Lista />
          <button id='cerrarSesion' onClick={() => cambiarSesion(false)}>Cerrar sesión</button>
          <Contador />
        </>
      ) : (
        <>
          <h2>Primero inicia sesion</h2>
          <button id='iniciarSesion' onClick={() => cambiarSesion(true)}>Iniciar sesión</button>
        </>
      )}
    </>
  )

};

root.render(<App />);

