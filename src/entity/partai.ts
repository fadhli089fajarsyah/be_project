import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class partai {

    @PrimaryGeneratedColumn()
    id_partai: number

    @Column()
    nama_partai: string

    @Column()
    ketua_umum_partai: string

    @Column()
    visi_misi: string

    @Column()
    alamat_partai: string
    
    @Column()
    iamage_partai: string
}
