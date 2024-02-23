import { FastifyInstance } from "fastify"
import { verifyJwt } from "../middleware/AuthJWT"
import { getUser, login, saveUser } from "../controller/UserController"
import userInputSchema from "../schemas/input/UserInputSchema"
import userLoginSchema from "../schemas/input/UserLoginSchema"
import userWithoutPasswordSchema from "../schemas/output/UserWithoutPasswordSchema"
import badRequestSchema from "../schemas/output/BadRequestSchema"
import userLoginResponseSchema from "../schemas/output/UserLoginResponseSchema"

export const UserRoutes = async (app: FastifyInstance) => {
    app.get('/:id', {
        onRequest: [verifyJwt], schema:  {
            tags: ['user'],
            description: 'Buscar usuário por id',
            params: {
                type: 'object',
                properties: {
                    id: { type: 'string' }
                }
            },
            response: {
                200: { 
                    description: "Success",
                    type: userLoginResponseSchema.type,
                    properties: userLoginResponseSchema.properties,
                },
                400: {
                    description: "Bad Request",
                    type: badRequestSchema.type,
                    properties: badRequestSchema.properties
                }
            }
        }
    }, getUser)

    app.post('/login', {
        schema: {
            tags: ['user'],
            description: "Efetuar login",
            body: userLoginSchema,
            response: {
                200: { 
                    description: "Success",
                    type: userLoginResponseSchema.type,
                    properties: userLoginResponseSchema.properties,
                },
                400: {
                    description: "Bad Request",
                    type: badRequestSchema.type,
                    properties: badRequestSchema.properties
                }
            }
        }
    }, login)

    app.post("/", {
        schema: {
            tags: ['user'],
            body: userInputSchema,
            description: "Criar novo usuário",
            response: {
                200: {
                    description: "Success",
                    type: userWithoutPasswordSchema.type,
                    properties: userWithoutPasswordSchema.properties,
                },
                400: {
                    description: "Bad Request",
                    type: badRequestSchema.type,
                    properties: badRequestSchema.properties
                }
            }
        }
    }, saveUser)

}