import { AppDataSource } from "../data-source";
import { berita } from "../entity/berita";

export default new class paslonService {
    async create(reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(berita)

            const beritaAdd = repository.create({
                judul_berita: reqBody.judul_berita,
                author_berita: reqBody.author_berita,
                tanggal: reqBody.tanggal,
                detail_berita: reqBody.detail_berita,
                iamage_berita: reqBody.iamage_berita,
            })
            await AppDataSource
                .getRepository(berita)
                .createQueryBuilder()
                .insert()
                .into(berita)
                .values(beritaAdd)
                .execute()
        }

        catch {

        }

    }
    async find(): Promise<any> {
        try {
            const beritaAdds = await AppDataSource
                .getRepository(berita)
                .createQueryBuilder("paslon")
                .getMany()

            return beritaAdds
        } catch (error) {
            throw error
        }
    }
    async delete(id: number): Promise<void> {
        try {
            await AppDataSource
                .createQueryBuilder()
                .delete()
                .from(berita)
                .where("id_berita = :id", { id })
                .execute();
        } catch (error) {
            throw error;
        }
    }

    async edit(id_berita: number, reqBody: any): Promise<any> {
        try {
            const repository = AppDataSource.getRepository(berita);
    
            const existingBerita = await repository.findOne({ where: { id_berita } });
    
            if (!existingBerita) {
                throw new Error("Berita tidak ditemukan");
            }
    
            repository.merge(existingBerita, reqBody);
            const updatedBerita = await repository.save(existingBerita);
    
            return updatedBerita;
        } catch (error) {
            throw error;
        }
    }

    
}
