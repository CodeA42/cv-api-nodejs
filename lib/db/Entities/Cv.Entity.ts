import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Education from "./Education.Entity"
import PersonalSkills from "./PersonalSkills.Entity"
import User from "./User.Entity"
import UserDetails from "./UserDetails.Entity"
import WorkExperience from "./WorkExperience.Entity"

@Entity()
export default class Cv {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => User, user => user.cvs, {
        onDelete: 'CASCADE'
    })
    user: User

    @OneToMany(type => Education, education => education.cv,{
        cascade: true,
        eager: true
    })
    education: Education[]

    @OneToMany(type => WorkExperience, workExperience => workExperience.cv,{
        cascade: true,
        eager: true
    })
    workExperience: WorkExperience[]

    @OneToMany(type => PersonalSkills, personalSkills => personalSkills.cv,{
        cascade: true,
        eager: true
    })
    personalSkills: PersonalSkills[]

    @OneToOne(type => UserDetails, {
        cascade: true,
        eager: true
    }) @JoinColumn()
    details: UserDetails

    @Column({
        length: 24,
        nullable: true,
        type: 'character varying'
    })
    color: string

    @Column({
        length: 24,
        nullable: true,
        type: 'character varying'
    })
    type: string

    @Column({
        type: 'text',
        nullable: true
    })
    name: string

    @Column({
        type: 'text',
        nullable: true
    })
    email: string
}   