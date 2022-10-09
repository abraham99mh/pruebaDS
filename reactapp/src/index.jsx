import React from 'react';
import ReactDOM from 'react-dom/client';
import Lista from './componets/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

var sesion = true;

const jsx = (
  <>
    {sesion === true ? (
      <>
        <Lista />
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

