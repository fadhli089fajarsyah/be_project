// Controllers for logical system application

import { Request, Response } from "express";
import paslonService from "../services/paslonService";

export default new class UserControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const paslon = await paslonService.create(data)

            return res.status(201).json(paslon)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const paslons = await paslonService.find()

            return res.status(200).json(paslons)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}