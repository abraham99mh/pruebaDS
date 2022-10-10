import React from "react";

const BtnContador = (type) => {
    switch (type) {
        case '1':
            return (
                <button>Suma</button>
            );
        default:
            return <p>Default</p>
    }
};

export default BtnContador;