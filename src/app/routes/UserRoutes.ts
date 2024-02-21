import { FastifyInstance } from "fastify"
import { verifyJwt } from "../middleware/AuthJWT"
import { getUser, login, saveUser } from "../controller/UserController"

export const UserRoutes =  async (app: FastifyInstance) => {
    app.get('/:id', { onRequest: [verifyJwt] }, getUser)

    app.post('/login', login)

    app.post("/", saveUser)

}