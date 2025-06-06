import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UseRepository"
import  { sign } from 'jsonwebtoken';

export class UserService {
    private userRepository: UserRepository;

    constructor(
        userRepository = new UserRepository(AppDataSource.manager),
    ) {
        this.userRepository = userRepository;
    }

    createUser = async (name: string, email: string, password: string): Promise<User> => {
        const user = new User(name, email, password)
        return this.userRepository.createUser(user)
    }

    getUser =async (userId: string):Promise<User | null> => {
        console.log(userId)
        return this.userRepository.getUser(userId)
    }

    getAuthenticatedUser = async (email: string, password: string): Promise<User | null> => {
        return this.userRepository.getUserByEmailAndPassword(email, password)
    }

    getToken = async (email:string, password:string): Promise<String> => {
        const user = await this.getAuthenticatedUser(email, password);

        if(!user) {
            throw new Error('Usuário não encontrado ou senha incorreta');
        }

        const tokenData ={
            name: user?.name,
            email: user?.email
        }

        const tokenKey = '12345'
    
        const tokenOptions = {
            subject: user?.id_user,
        }

        const token = sign(tokenData, tokenKey, tokenOptions)

        return token;
    }


}