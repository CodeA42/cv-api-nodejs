import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Cv from "./Cv.Entity";
import Image from "./Image.Entity";
import User from "./User.Entity";

@Entity()
export default class UserDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(type => User, userDetails => userDetails.details, {
        onDelete: 'CASCADE',
        nullable: true
    })
    user: User

    @OneToOne(type => Cv, cv => cv.details, {
        onDelete: 'CASCADE',
        nullable: true
    })
    cv: Cv

    @OneToOne(type => Image, {
        cascade: true,
        onDelete: 'CASCADE'
    }) @JoinColumn()
    image: Image

    @Column({
        type: 'text',
        nullable: true
    })
    address: string

    @Column({
        length: 86,
        nullable: true,
        type: 'character varying'
    })
    town: string

    @Column({
        length: 60,
        nullable: true,
        type: 'character varying'
    })
    country: string

    @Column({
        length: 20,
        nullable: true,
        type: 'character varying'
    })
    phoneNumber: string
}