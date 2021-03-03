import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    color: #00838f;
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const MensajeCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

function Resultado({ cotizacion }) {
    return cotizacion === 0 ? (
        <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
    ) : (
        <ResultadoCotizacion>
            <MensajeCotizacion>El total es: $ {cotizacion}</MensajeCotizacion>
        </ResultadoCotizacion>
    );
}

export default Resultado;
