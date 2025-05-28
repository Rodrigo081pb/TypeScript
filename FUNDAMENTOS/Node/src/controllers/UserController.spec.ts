import { UserController } from "./UserController"
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from "express"
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn()
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', () => {


    const userController = new UserController();
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Rodrigo',
                email: 'Rodrigo@gmail.com',
                password: 'senha'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    })

    it('Deve retornar um erro caso o usuário não informar o nome', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'Rodrigo@gmail.com',
                password: 'senha'
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'bad request: Todos os campos são obrigatórios' })
    })

    it('Deve retornar um erro caso o usuário não informar o email', () => {
        const mockRequest = {
            body: {
                name: 'Rodrigo',
                email: '',
                password: 'senha'
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'bad request: Todos os campos são obrigatórios' })
    })

    it('Deve retornar um erro caso o usuário não informar a senha', () => {
        const mockRequest = {
            body: {
                name: 'Rodrigo',
                email: 'Rodrigo@gmail.com',
                password: ''
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'bad request: Todos os campos são obrigatórios' })
    })

    it('Deve retornar o usuário com o userId informado', () => {
        const mockRequest = makeMockRequest({
            params: {
                userId: '12345'
            }
        })

        userController.getUser(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('12345')
        expect(mockResponse.state.status).toBe(200)
    })

})