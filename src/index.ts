import 'reflect-metadata';
import fastify from 'fastify'
import fjwt from '@fastify/jwt'
import swagger from '@fastify/swagger';
import swaggerui from '@fastify/swagger-ui';
import cors from '@fastify/cors'

import { UserRoutes } from './app/routes/UserRoutes';
import { AppDataSource } from './data-source';
import { BrandRoutes } from './app/routes/BrandRoutes';
import { InventoryRoutes } from './app/routes/InventoryRoutes';
import { ProductRoutes } from './app/routes/ProductRoutes';
import userSchema from './app/schemas/UserSchema';
import brandSchema from './app/schemas/BrandSchema';
import inventorySchema from './app/schemas/InventorySchema';
import productSchema from './app/schemas/ProductSchema';

const server = fastify()


const app = async () => {

    try {
        await AppDataSource.initialize()

        server.register(cors, {
            allowedHeaders: "*",
            origin: "*",
            methods: "*",
        })

        server.register(swagger, {
            swagger: {
                info: {
                    title: 'Oboticário Challenge',
                    description: 'API para cadastro de produtos',
                    version: '0.1.0'
                },
                externalDocs: {
                    url: 'https://github.com/tallyto/oboticrud',
                    description: 'Mais informações aqui'
                },
                schemes: ['http'],
                consumes: ['application/json'],
                produces: ['application/json'],
                tags: [
                    { name: 'user', description: 'User related end-points' },
                ],
                definitions: {
                    User: userSchema,
                    Brand: brandSchema,
                    Inventory: inventorySchema,
                    Product: productSchema
                },
                securityDefinitions: {
                    bearerAuth: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'header',
                        description: 'JWT Bearer token',
                    },
                },
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
            }
        })

        server.register(swaggerui, {
            routePrefix: '/documentation',

        })

        server.register(fjwt, {
            secret: 'oboticrud-challenge'
        })

        server.get('/ping', (req, res) => {
            res.send({ message: "pong" })
        })

        server.get('/', (req, res) => {
            res.send({ message: "Hello World" })
        })

        server.register(UserRoutes, {
            prefix: "users"
        })

        server.register(BrandRoutes, {
            prefix: "brands"
        })

        server.register(InventoryRoutes, {
            prefix: "inventory"
        })

        server.register(ProductRoutes, {
            prefix: "products"
        })


        const PORT = Number(process.env.PORT) || 3000

        server.listen({ port: PORT }, (err, address) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            console.log(`Server listening at ${address}`)
        })


    } catch (err) {
        console.log(err)
    }
}

app()




