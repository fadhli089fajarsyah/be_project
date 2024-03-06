// Controllers for logical system application

import { Request, Response } from "express";
import beritaService from "../services/beritaService";

export default new class UserControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const berita = await beritaService.create(data)

            return res.status(201).json(berita)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        try {
            const beritas = await beritaService.find()

            return res.status(200).json(beritas)
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}