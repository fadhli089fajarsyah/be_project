import { AppDataSource } from "../data-source"
import { paslon } from "../entity/paslon"

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
    async delete(id: number): Promise<void> {
        try {
            await AppDataSource
                .createQueryBuilder()
                .delete()
                .from(paslon)
                .where("id = :id", { id })
                .execute()
        } catch (error) {
            throw error
        }
    }
    async edit(id: number, reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(paslon)
    
            const dataPaslonEdit = await repository.findOne({ where: { id } })
    
            
            repository.merge(dataPaslonEdit, reqBody)
            const updatedpaslon = await repository.save(dataPaslonEdit)
    
            return updatedpaslon
        } catch (error) {
            throw error
        }
    }
}