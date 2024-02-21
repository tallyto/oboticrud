import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    "username": "oboticrud@user",
    "password": "oboticrud@password",
    "database": "oboticrud_db",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
