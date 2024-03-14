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
            const { id } = req.params

            await paslonService.delete(parseInt(id))

            return res.status(204).send()

        } catch (error) {
            throw error
        }
    }

    async edit(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const data = req.body;

            const { error, value } = paslonVald.validate(data);
            if (error) return res.status(400).json({ message: error.details[0].message });

            await paslonService.edit(parseInt(id), data);

            return res.status(200).json({ message: "Berita berhasil diperbarui." });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Terjadi kesalahan dalam mengedit berita." });
        }
    }
}