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

        try {
            const token = await this.userService.getToken(email, password);

            return response.status(200).json({token})
        } catch (error) {
            return response.status(500).json({message: `Erro ao autenticar usuário', error: ${error}.message`});
        }
    }
}
