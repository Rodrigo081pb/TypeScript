import { login } from "./Login"

describe('login realizado', () => {

    const Mock = jest.fn()
    window.alert = Mock

    const MockEmail = 'rodrigo@gmail.com'

    it('Alert Boas vindas', async() => {
        const response = await login(MockEmail)
        expect(response).toBeTruthy()

    })

    it('Deve exibir um erro caso o email seja invalido', async() => {
        const response = await login('email@invalido')
        expect(response).toBeFalsy()
    })

})