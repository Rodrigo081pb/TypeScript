import { UserService } from "./UserService"

jest.mock('../repositories/UseRepository')

const mockUserRepository = require('../repositories/UseRepository')

describe('UserService', () => {

    const userService = new UserService(mockUserRepository)

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            user_id: '222',
            name: 'nome',
            email: 'rodrigo@gmail.com',
            password: 'senha'
        }))
        const response = await userService.createUser('rodrigo', 'rodrigo@gmail.com', 'senha');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject(
            {
                user_id: '222',
                name: 'nome',
                email: 'rodrigo@gmail.com',
                password: 'senha'
            }
        )
    })

})