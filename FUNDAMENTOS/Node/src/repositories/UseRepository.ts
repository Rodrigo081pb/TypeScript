import { EntityManager } from "typeorm";
import { User } from "../entities/User";

// Classe responsável por gerenciar operações relacionadas ao usuário no banco de dados
export class UserRepository {
    
    private manager: EntityManager

    // O construtor recebe uma instância do EntityManager, que é usada para interagir com o banco
    constructor(
        manager: EntityManager
    ) {
        this.manager = manager;
    }

    // Cria um novo usuário no banco de dados
    createUser = async (user: User): Promise<User> => {
        return this.manager.save(user)
    }

    // Busca um usuário pelo ID
    getUser = async (idUser: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where: {
                id_user: idUser
            }
        })
    }

    // Busca um usuário pelo e-mail e senha
    getUserByEmailAndPassword = async (email: string, password: string): Promise<User | null> => {
        return this.manager.findOne(User, {
            where: {
                email: email,      // campo de e-mail do usuário
                password: password // campo de senha do usuário
            }
        })
    }
}