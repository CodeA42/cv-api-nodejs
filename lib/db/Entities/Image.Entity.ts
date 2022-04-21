import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import UserDetails from "./UserDetails.Entity";

@Entity()
export default class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'text',
        nullable: true
    })
    avatar: string

    @OneToOne(type => UserDetails, userDetails => userDetails.image, {
        onDelete: 'CASCADE'
    })
    userDetails: UserDetails
}