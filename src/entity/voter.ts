import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne

} from "typeorm"

import { User } from "./User"

@Entity()
export class voter {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    id_user: string

    @Column()
    id_paslon: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @ManyToOne(() => User, (User) => User.votes)
    User: User

}
