import React from "react";
import { useState } from "react";
import BtnContador from "./BtnContador";

const Contador = () => {
    let [cont, cambiarCont] = useState(0);
    return (
        <>
            <h4 style={{ "marginTop": "10vh" }}>Contador: {cont}</h4>
            <button onClick={() => cambiarCont(cont = cont + 1)}>Suma</button>
            <button onClick={() => cambiarCont(cont = cont - 1)}>Resta</button>
            <button onClick={() => cambiarCont(cont = cont * 2)}>x2</button>
            <BtnContador type='1' />
        </>
    );
};

export default Contador;