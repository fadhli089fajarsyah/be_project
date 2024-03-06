import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class paslon {

    @PrimaryGeneratedColumn()
    id_paslon: number

    @Column()
    nama_paslon: string

    @Column()
    nomor_urut_paslon: number

    @Column()
    visi_misi: string

    @Column()
    image_paslon: string
    
    @Column()
    koalisi: string
}
