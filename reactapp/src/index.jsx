import React from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from './componets/Alumno';

const root = ReactDOM.createRoot(document.getElementById('root'));

var sesion = true;

const jsx = (
  <>
    {sesion === true ? (
      <>
        <Alumno />
        <Alumno />
        <Alumno />
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

