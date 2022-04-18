import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm"
import Cv from "./Cv.Entity"
import UserDetails from "./UserDetails.Entity"

@Entity()
export default class User {
    @PrimaryColumn()
    id: string

    @OneToMany(type => Cv, cv => cv.user)
    cvs: Cv[]

    @OneToOne(type => UserDetails, {
        cascade: true,
        eager: true
    }) @JoinColumn()
    details: UserDetails

    @Column({
        length: 64,
        nullable: true,
        type: 'character varying'
    })
    firstName: string

    @Column({
        length: 64,
        nullable: true,
        type: 'character varying'
    })
    lastName: string
}