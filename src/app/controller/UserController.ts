import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../entities/User";
import { AppDataSource } from "../database/postgres";
import bcrypt from "bcrypt";


export const login = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { email, password } = req.body as any;

        const user = await AppDataSource.getRepository(User).findOne({
            where: { email }
        });

        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(400).send({ message: "Invalid user or password" });
        }

        const token = await res.jwtSign({ id: user.id });

        const data = {
            id: user.id,
            username: user.username,
            email: user.email,
            token: token
        };

        return res.status(200).send(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
};

export const getUser = async (req: FastifyRequest, res: FastifyReply): Promise<User> => {
    const { id } = req.params as any;

    const user = await AppDataSource.getRepository(User).findOne({ where: { id } });

    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send(user);
}

export const saveUser = async (req: FastifyRequest, res: FastifyReply): Promise<User> => {

    const { username, email, password } = req.body as any;

    // Verifique se o usuário já existe no banco de dados
    const existingUser = await AppDataSource.getRepository(User).findOne({ where: { email } });;

    if (existingUser) {
        return res.status(400).send({ message: "User already exists" });
    }

    // Hash da senha antes de salvar no banco de dados
    const passwordHash = await bcrypt.hash(password, 8);

    // Salve o novo usuário no banco de dados
    const newUser = await AppDataSource.getRepository(User).save({
        username,
        email,
        password: passwordHash,
    });

    // Não envie a senha no response
    delete newUser.password;

    return res.status(200).send(newUser);
};
