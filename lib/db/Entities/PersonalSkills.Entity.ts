import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Cv from "./Cv.Entity"

@Entity()
export default class PersonalSkills {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => Cv, cv => cv.personalSkills, {
        onDelete: 'CASCADE'
    })
    cv: Cv

    @Column({
        type: 'text',
        nullable: false
    })
    name: string

    @Column({
        nullable: true
    })
    level: number
}   