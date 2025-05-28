import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export function verifyAuth(request: Request,response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(authToken){
        const [, token] = authToken.split(' ');

        try{
            const {sub} = verify(token, '12345');
            console.log(`Token válido para o usuário: ${sub}`);
            return next();
        } catch (error) {
            return response.status(401).json({message: 'Token inválido ou expirado'});
        }
    }

    return response.status(401).json({message: 'Token inválido ou expirado'});
}