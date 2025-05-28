import { UserService } from "./UserService"
import * as jwt from 'jsonwebtoken';

jest.mock('../repositories/UseRepository')
jest.mock('../database', () => {
    initialize: jest.fn()
})

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'token')
}))

const mockUserRepository = require('../repositories/UseRepository')

describe('UserService', () => {

    const userService = new UserService(mockUserRepository)
    const mockUser = {
        id_user: '222',
        name: 'rodrigo',
        email: 'rodrigo@gmail.com',
        password: 'senha'
    }

    it('Deve criar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('rodrigo','rodrigo@gmail.com', 'senha');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_user: '222',
            name: 'rodrigo',
            email: 'rodrigo@gmail.com',
            password: 'senha'
        })
    })

    it('Deve responder com o token do usuário autenticado', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken('rodrigo@gmail.com', 'senha');
        expect(token).toBe('token')
    })

    it('Deve retornar um erro se o usuário não for encontrado', async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken('', 'senhaerrada')).rejects.toThrow(new Error('Usuário não encontrado ou senha incorreta'))
    })

})