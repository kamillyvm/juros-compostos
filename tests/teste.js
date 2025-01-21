// Importa a função que será testada
const calcularJurosCompostos = require('../calcularJurosCompostos');

describe('Testes para a função calcularJurosCompostos', () => {
    test('Calcula o montante correto para capital inicial de 1000, taxa de 5% e 12 períodos', () => {
        const principal = 1000; // Capital inicial
        const taxa = 0.05; // Taxa de 5% (em formato decimal)
        const periodo = 12; // 12 períodos
        const resultadoEsperado = 1795.8563260221301; // Resultado esperado

        const resultado = calcularJurosCompostos(principal, taxa, periodo);
        expect(resultado).toBeCloseTo(resultadoEsperado, 2); // Valida com margem de erro de 2 casas decimais
    });

    test('Retorna o capital inicial quando a taxa é 0', () => {
        const principal = 1000;
        const taxa = 0; // Taxa de 0%
        const periodo = 12;

        const resultado = calcularJurosCompostos(principal, taxa, periodo);
        expect(resultado).toBe(1000); // Montante deve ser igual ao capital inicial
    });

    test('Calcula corretamente para apenas 1 período', () => {
        const principal = 500;
        const taxa = 0.10; // Taxa de 10%
        const periodo = 1; // Apenas 1 período

        const resultadoEsperado = 550; // 500 * (1 + 0.10)
        const resultado = calcularJurosCompostos(principal, taxa, periodo);
        expect(resultado).toBeCloseTo(resultadoEsperado, 2);
    });
});
