import React from 'react';

function Resumen({ datos }) {
    // Extraer de datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: </li>
                <li>Año del Vehículo: </li>
                <li>Plan: </li>
            </ul>
        </>
    );
}

export default Resumen;
