const calcularJurosCompostos = require('../calcularJurosCompostos');

describe('Testes para a função calcularJurosCompostos', () => {
    test('Calcula o montante correto para capital inicial de 1000, taxa de 5% e 12 períodos', () => {
        const principal = 1000;
        const taxa = 0.05;
        const periodo = 12;
        const resultadoEsperado = 1795.8563260221301;

        const resultado = calcularJurosCompostos(principal, taxa, periodo);
        expect(resultado).toBeCloseTo(resultadoEsperado, 2);
    });

    test('Retorna o capital inicial quando a taxa é 0', () => {
        const principal = 1000;
        const taxa = 0;
        const periodo = 12;

        const resultado = calcularJurosCompostos(principal, taxa, periodo);
        expect(resultado).toBe(1000);
    });

    test('Calcula corretamente para apenas 1 período', () => {
        const principal = 500;
        const taxa = 0.10;
        const periodo = 1;

        const resultadoEsperado = 550;
        const resultado = calcularJurosCompostos(principal, taxa, periodo);
        expect(resultado).toBeCloseTo(resultadoEsperado, 2);
    });
});
