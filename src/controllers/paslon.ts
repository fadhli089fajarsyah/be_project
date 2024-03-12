// Controllers for logical system application

import { Request, Response } from "express";
import paslonService from "../services/paslonService";
import { paslonVald } from "../validator/paslon";

export default new class UserControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const {error, value} = paslonVald.validate(data)
			if(error) return res.status(400).json({message: error.details[0].message})

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

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id_paslon } = req.params

            await paslonService.delete(parseInt(id_paslon))

            return res.status(204).send()

        } catch (error) {
            throw error
        }
    }
}