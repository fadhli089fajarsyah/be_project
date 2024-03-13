import { Request, Response } from "express";
import beritaService from "../services/beritaService";
import { beritaVald } from "../validator/beritaValidator";

export default new class UserControllers {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = req.body

            const {error, value} = beritaVald.validate(data)
			if(error) return res.status(400).json({message: error.details[0].message})

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

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id_berita } = req.params

            await beritaService.delete(parseInt(id_berita))

            return res.status(204).json({});

        } catch (error) {
            throw error
        }
    }

    async edit(req: Request, res: Response): Promise<Response> {
        try {
            const { id_berita } = req.params;
            const data = req.body;

            const { error, value } = beritaVald.validate(data);
            if (error) return res.status(400).json({ message: error.details[0].message });

            await beritaService.edit(parseInt(id_berita), data);

            return res.status(200).json({ message: "Berita berhasil diperbarui." });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Terjadi kesalahan dalam mengedit berita." });
        }
    }
}