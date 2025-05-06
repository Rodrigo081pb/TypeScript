import { login } from "./Login"

describe('login realizado', () => {

    const Mock = jest.fn()
    window.alert = Mock
    const MockEmail = 'rodrigo@gmail.com'

    it('Alert Boas vindas', () => {
        login(MockEmail)
        expect(Mock).toHaveBeenCalledWith('Bem vindo rodrigo@gmail.com')
    })

    it("Não deve exibir alerta de boas vindas sem o e-mail", () => {
        login(MockEmail)
        expect(Mock).not.toHaveBeenCalledWith('Bem vindo!')
    })

})