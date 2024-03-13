import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm"

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

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
