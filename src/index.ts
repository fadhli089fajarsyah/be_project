import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import express, { Request, Response } from "express"
import Route from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000

    app.use(express.json())
    app.use('/api', Route)


    app.get('/hello', (req: Request, res: Response) => {
        res.status(200).json({ data: "Success get data" })
    })

    app.listen(port, () => console.log(`Server succes on PORT ${port}`))
}).catch(error => console.log(error))

// console.log("Inserting a new user into the database...")
// const user = new User()
// user.nama_user = "Timber"
// user.alamat_user = "Saw"
// user.jenis_kelamin_user = "L"
// user.username_user = "aaaaa"
// user.password_user = "<PASSWORD>"
// user.image_user = "aaaaaalseiu2873bhsbuw"
// await AppDataSource.manager.save(user)
// console.log("Saved a new user with id: " + user.id)

// console.log("Loading users from the database...")
// const users = await AppDataSource.manager.find(User)
// console.log("Loaded users: ", users)

// console.log("Here you can setup and run express / fastify / any other framework.")
