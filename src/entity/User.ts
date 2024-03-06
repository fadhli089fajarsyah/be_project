import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama_user: string

    @Column()
    alamat_user: string

    @Column()
    jenis_kelamin_user: string

    @Column()
    username_user: string

    @Column()
    password_user: string

    @Column()
    image_user: string

}
