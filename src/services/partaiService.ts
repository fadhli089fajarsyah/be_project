import { AppDataSource } from "../data-source";
import { partai } from "../entity/partai";

export default new class partaiService {
    async create(reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(partai)

            const partaiAdd = repository.create({
                nama_partai: reqBody.nama_partai,
                ketua_umum_partai: reqBody.ketua_umum_partai,
                visi_misi: reqBody.visi_misi,
                alamat_partai: reqBody.alamat_partai,
                image_partai: reqBody.image_partai
            })
            await AppDataSource
                .getRepository(partai)
                .createQueryBuilder()
                .insert()
                .into(partai)
                .values(partaiAdd)
                .execute()
        } catch (error) {
            throw error
        }
    }

    async find(): Promise<any> {
        try {
            const partais = await AppDataSource
                .getRepository(partai)
                .createQueryBuilder("partai")
                .getMany()

            return partais
        } catch (error) {
            throw error
        }
    }

}
