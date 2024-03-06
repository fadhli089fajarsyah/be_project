import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { paslon } from "./entity/paslon"
import { partai } from "./entity/partai"
import { berita } from "./entity/berita"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Fadhli123",
    database: "be_project",
    synchronize: true,
    logging: false,
    entities: [
        User,
        paslon,
        partai,
        berita
    ],
    migrations: [],
    subscribers: [],
})
