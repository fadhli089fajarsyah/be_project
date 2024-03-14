import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm"

@Entity()
export class partai {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nama_partai: string

    @Column()
    ketua_umum_partai: string

    @Column()
    visi_misi: string

    @Column()
    alamat_partai: string
    
    @Column()
    image_partai: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
