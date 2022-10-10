import React from "react";

const Titulo = () => {
    var name = "Abraham";
    return (
        <h1 className='saludo' style={{ color: 'green' }}>Hola {name}</h1>
    );
};

const Titulo2 = ({ alumno, matricula, color }) => {
    console.log(alumno);
    var apellido = "Meléndez";
    return (
        <>
            <h1 className='saludo' style={{ color: color }}>Hola {alumno} - {matricula}</h1>
            {apellido && <p>Tu apellido es: {apellido}</p>}
        </>
    );
};

export { Titulo, Titulo2 };