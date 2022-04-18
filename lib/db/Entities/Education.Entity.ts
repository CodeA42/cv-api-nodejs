import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Cv from "./Cv.Entity"
import Experience from "./Experience.Entity"

@Entity()
export default class Edication {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => Cv, cv => cv.education)
    cv: Cv

    @OneToOne(type => Experience) @JoinColumn()
    experience: Experience

    @Column({
        type: 'text',
        nullable: true
    })
    type: string
}