// Importa os tipos Request e Response do Express
import { Request, Response } from 'express'

// Importa a função 'sign' do JWT para criar tokens
import { sign } from 'jsonwebtoken'
import { UserService } from '../services/UserService';


// Cria uma classe para o controller de login
export class LoginController {

    userService: UserService;

    constructor(
        userService = new UserService()
    ) {
        this.userService = userService;
    }

    // Método login que responde a requisições de login
    login = async (request: Request, response: Response) => {

        const { email, password } = request.body;

        const token = await this.userService.getToken(email, password);

        // Retorna o token como resposta
        return response.status(200).json({ token });
    }
}
