import React from 'react';
import styled from '@emotion/styled';
import { primeraLetraMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Ul = styled.ul`
    padding-left: 0;
`;

function Resumen({ datos }) {
    // Extraer de datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <Ul>
                <li>Marca: {primeraLetraMayuscula(marca)} </li>
                <li>Año del Vehículo: {year} </li>
                <li>Plan: {primeraLetraMayuscula(plan)} </li>
            </Ul>
        </ContenedorResumen>
    );
}

export default Resumen;
