import React from "react";
import { Titulo, Titulo2 } from "./Titulo";

const Alumno = () => {
    var apellido = "Meléndez";
    const alumnos = ["Abraham", "Stephano", "Tom", "Jerry"];
    return (
        <>
            <Titulo />
            <Titulo2 alumno="Luis" matricula="182598" color="purple" />
            {apellido && <p>Tu apellido es: {apellido}</p>}
            <>
                <h3>Lista</h3>
                <ul>
                    {alumnos.map((nombre, i) => {
                        return <li key={i}>{nombre}</li>
                    })}
                </ul>
            </>
        </>
    );
};

export default Alumno;