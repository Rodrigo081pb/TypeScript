import { login } from "./Login"

describe('login realizado', () => {

    const Mock = jest.fn()
    window.alert = Mock

    it('Alert Boas vindas', () => {
        login()
        expect(Mock).toHaveBeenCalledWith('Bem vindo')
    })
})