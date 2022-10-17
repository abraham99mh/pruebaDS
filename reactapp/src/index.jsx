import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Contador from "./componets/Contador";
import Lista from "./componets/Lista";
import { Titulo2 } from "./componets/Titulo";
import FormilarioLogin from "./componets/FormularioLogin";
import FormilarioRegistro from "./componets/FormularioRegistro";
import Boton from "./estilos/boton";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [sesion, cambiarSesion] = useState(false);
  const [registro, mostrarRegistro] = useState(false);

  return (
    <div className="container">
      {sesion === true ? (
        <>
          <Titulo2 alumno="Luis" matricula="182598" color="purple" />
          <Lista />
          <Boton id="cerrarSesion" onClick={() => cambiarSesion(false)}>
            Cerrar sesión
          </Boton>
          <Contador />
        </>
      ) : (
        <>
          { registro === true ? (
            <>
              <FormilarioRegistro cambiarSesion={cambiarSesion} mostrarRegistro={mostrarRegistro}></FormilarioRegistro>
            </>
          ) :(
            <>
              <FormilarioLogin cambiarSesion={cambiarSesion} mostrarRegistro={mostrarRegistro}></FormilarioLogin>
            </>
          )}
        </>
      )}
    </div>
  );
};

root.render(<App />);
