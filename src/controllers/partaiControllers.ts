import { Request, Response } from "express";
import partaiService from "../services/partaiService";

export default new class partaiControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body
            const partai = await partaiService.create(data)
            return res.status(201).json(partai)

        } catch (error) {
            throw error
        }
    }
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const partais = await partaiService.find()
            return res.status(200).json(partais)

        } catch (error) {
            throw error
        }
    }
    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id_partai } = req.params

            await partaiService.delete(parseInt(id_partai))

            return res.status(204).send()

        } catch (error) {
            throw error
        }
    }
}