import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class berita {

    @PrimaryGeneratedColumn()
    id_berita: number

    @Column()
    judul_berita: string

    @Column()
    author_berita: string

    @Column()
    tanggal: Date

    @Column()
    detail_berita: string

    @Column()
    iamage_berita: string

    
}
