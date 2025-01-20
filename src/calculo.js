function calcularJurosCompostos(principal, taxa, periodo) {
    return principal * Math.pow((1 + taxa), periodo);
}

module.exports = calcularJurosCompostos;