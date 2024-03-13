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

    async delete(id: number): Promise<void> {
        try {
            await AppDataSource
                .createQueryBuilder()
                .delete()
                .from(partai)
                .where("id_partai = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    async edit(id_partai: number, reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(partai);
    
            const dataPartaiEdit = await repository.findOne({ where: { id_partai } });
    
            
            repository.merge(dataPartaiEdit, reqBody);
            const updatedpartai = await repository.save(dataPartaiEdit);
    
            return updatedpartai;
        } catch (error) {
            throw error;
        }
    }
}
