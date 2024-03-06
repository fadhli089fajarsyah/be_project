import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class voter {

    @PrimaryGeneratedColumn()
    id_voter: number

    @Column()
    nama_voter: string

    @Column()
    alamat_voter: string

    @Column()
    jenis_kelamin_voter: string

    @Column()
    pilihan_voter: string

}
