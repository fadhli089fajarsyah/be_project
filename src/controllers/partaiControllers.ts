import { Request, Response } from "express";
import partaiService from "../services/partaiService";
import { partaiVald } from "../validator/partaiValidator";

export default new class partaiControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const {error, value} = partaiVald.validate(data)
			if(error) return res.status(400).json({message: error.details[0].message})

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
            const { id } = req.params

            await partaiService.delete(parseInt(id))

            return res.status(204).send()

        } catch (error) {
            throw error
        }
    }
    async edit(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const data = req.body;

            const { error, value } = partaiVald.validate(data);
            if (error) return res.status(400).json({ message: error.details[0].message });

            await partaiService.edit(parseInt(id), data);

            return res.status(200).json({ message: "Berita berhasil diperbarui." });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Terjadi kesalahan dalam mengedit berita." });
        }
    }
}