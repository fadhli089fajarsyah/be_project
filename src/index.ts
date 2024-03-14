import { AppDataSource } from "./data-source"
import express, { Request, Response } from "express"
import Route from "./routes"
import cors from 'cors';

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 5000

    app.use(cors())
    app.use(express.json())
    app.use('/api', Route)


    app.get('/hello', (req: Request, res: Response) => {
        res.status(200).json({ data: "Success get data" })
    })

    app.listen(port, () => console.log(`Server succes on PORT ${port}`))
}).catch(error => console.log(error))
