import fastify from 'fastify'
import 'reflect-metadata';
import fjwt from '@fastify/jwt'
import {UserRoutes} from './app/routes/UserRoutes';
import {AppDataSource} from './data-source';
import {BrandRoutes} from './app/routes/BrandRoutes';
import {InventoryRoutes} from './app/routes/InventoryRoutes';
import {ProductRoutes} from './app/routes/ProductRoutes';

const server = fastify()


const app = async () => {

    try {
        await AppDataSource.initialize()

        server.register(fjwt, {
            secret: 'oboticrud-challenge'
        })

        server.get('/ping', (req, res) => {
            res.send({message: "pong"})
        })

        server.get('/', (req, res) => {
            res.send({message: "Hello World"})
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

        server.listen({port: PORT}, (err, address) => {
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




