import { login } from "./Login"
import { api } from "../api"

describe('login realizado', () => {

    const Mock = jest.fn()
    window.alert = Mock

    const MockEmail = 'rodrigo@gmail.com'

    it('Alert Boas vindas', async() => {
        await login(MockEmail)
        expect(Mock).toHaveBeenCalledWith('Bem vindo rodrigo@gmail.com')
    })

    it("Não deve exibir alerta de boas vindas sem o e-mail", async() => {
        await login(MockEmail)
        expect(Mock).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('Deve exibir um erro caso o email seja invalido', async() => {
        await login('email@invalido')
        expect(Mock).toHaveBeenLastCalledWith("Email inválido")
    })

})