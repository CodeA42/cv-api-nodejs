import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class UserDetails {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'text',
        nullable: true
    })
    avatar: string

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