import { AppDataSource } from "../data-source";
import { paslon } from "../entity/paslon";

export default new class paslonService {
    async create(reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(paslon)

            const paslonAdd = repository.create({
                nama_paslon: reqBody.nama_paslon,
                image_paslon: reqBody.image_paslon,
                koalisi: reqBody.koalisi,
                visi_misi: reqBody.visi_misi,
                nomor_urut_paslon: reqBody.nomor_urut_paslon,
            })
            await AppDataSource
                .getRepository(paslon)
                .createQueryBuilder()
                .insert()
                .into(paslon)
                .values(paslonAdd)
                .execute()
        }

        catch {

        }

    }
    async find(): Promise<any> {
        try {
            const passlonAdds = await AppDataSource
                .getRepository(paslon)
                .createQueryBuilder("paslon")
                .getMany()

            return passlonAdds
        } catch (error) {
            throw error
        }
    }
}