import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Cv from "./Cv.Entity"
import Experience from "./Experience.Entity"

@Entity()
export default class WorkExperience {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => Cv, cv => cv.personalSkills)
    cv: Cv

    @OneToOne(type => Experience,{
        cascade: true,
        eager: true
    }) @JoinColumn()
    experience: Experience

    @Column({
        type: 'text',
        nullable: true
    })
    type: string

    @Column({
        type: 'text',
        nullable: false
    })
    jobTitle: string
}   