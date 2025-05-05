import { soma, multi } from './soma'

describe('soma', () => {

    it("Deve somar 1 ao número informado", () => {
        const value = soma(1) // acionar a função
        expect(value).toBe(2) // verificação se é 2
    })

    it("Deve multiplicar números por 2", () => {
        const value = multi(2, 2)
        expect(value).toBe(4)
    })

    it("Deve multiplicar por 3", () => {
        const value = multi(2, 3)
        expect(value).toBe(6)
    })

    it('Deve informar um erro, com o multiplicador diferente de dois ou três', () => {
        const value = multi(2,4)
        expect(value).toBe("Erro")
    })

})