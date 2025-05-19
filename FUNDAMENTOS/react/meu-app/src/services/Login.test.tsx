import { useContext } from "react"
import { login } from "./Login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        isLoggedIn:true
    })
}))

describe('login realizado', () => {

    const Mock = jest.fn()
    window.alert = Mock

    const MockEmail = 'rodrigo@gmail.com'

    it('Alert Boas vindas', async() => {
        await login(MockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenLastCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja invalido', async() => {
        await login('email@invalido')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith()
        expect(Mock).toHaveBeenLastCalledWith("Email inválido")
    })

})