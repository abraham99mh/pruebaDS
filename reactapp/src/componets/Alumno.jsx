import React from "react";

const Alumno = ({ nombre, index }) => {
    console.log(index);
    //index = index + 1;
    return (
        <li id={index} style={{ listStyle: "in-line", color: "red" }}>{nombre}</li>
    );
};

export default Alumno;