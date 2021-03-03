// Obtiene la diferencia de años
export function obternerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

// Calcula el total a pagar según la marca
export function calcularSegunMarca(marca) {
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.3;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

// Calcula el total a pagar según el tipo de seguro (básico o completo)
export function calcularSegunPlan(plan) {
    return plan === 'basico' ? 1.2 : 1.5;
}
