import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm"

@Entity()
export class paslon {

    @PrimaryGeneratedColumn()
    id: number

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

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}
