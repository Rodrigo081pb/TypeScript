import { UserService } from "./UserService"

jest.mock('../repositories/UseRepository')
jest.mock('../database',() =>{
    initialize: jest.fn()
})

const mockUserRepository = require('../repositories/UseRepository')

describe('UserService', () => {

    const userService = new UserService(mockUserRepository)

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user: '222',
            name: 'nome',
            email: 'rodrigo@gmail.com',
            password: 'senha'
        }))
        const response = await userService.createUser('rodrigo', 'rodrigo@gmail.com', 'senha');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject(
            {
                id_user: '222',
                name: 'nome',
                email: 'rodrigo@gmail.com',
                password: 'senha'
            }
        )
    })

})