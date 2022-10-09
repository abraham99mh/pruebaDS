import React from "react";
import { Titulo, Titulo2 } from "./Titulo";
import Alumno from "./Alumno";

const Lista = () => {
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
                        return <Alumno nombre={nombre} index={i} />
                    })}
                </ul>
            </>
        </>
    );
};

export default Lista;