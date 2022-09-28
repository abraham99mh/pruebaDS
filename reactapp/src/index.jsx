import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

var name = "Abraham"
var apellido = "Melendez"
var sesion = true

const alumnos = ["Abraham", "Stephano", "Tom", "Jerry"];

const jsx = (
  <>
    {sesion === true ? (
      <>
        <h1 className='saludo' style={{ color: 'green' }}>Hola {name}</h1>
        {apellido && <p>{apellido}</p>}

        <>
          <h3>Lista</h3>
          <ul>
            {alumnos.map((nombre, i) => {
              return <li key={i}>{nombre}</li>
            })}
          </ul>
        </>

      </>
    ) : (
      <h2>Primero inicia sesion</h2>
    )}
  </>


);

root.render(
  <React.StrictMode>
    {jsx}

  </React.StrictMode>
);

