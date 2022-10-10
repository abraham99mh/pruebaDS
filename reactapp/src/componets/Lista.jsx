import React from "react";
import { Titulo, Titulo2 } from "./Titulo";
import Alumno from "./Alumno";

const Lista = () => {
    const alumnos = ["Abraham", "Stephano", "Tom", "Jerry"];
    return (
        <>
            <h3>Lista</h3>
            <ul>
                {alumnos.map((nombre, i) => {
                    return <Alumno nombre={nombre} index={i} key={i} />
                })}
            </ul>
        </>

    );
};

export default Lista;