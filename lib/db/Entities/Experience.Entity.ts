import { Column, Entity, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'text',
        nullable: true
    })
    name: string

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
        type: 'timestamp',
        nullable: false
    })
    startDate: number

    @Column({
        nullable: true
    })
    stillEngaged: boolean

    @Column({
        type: 'timestamp',
        nullable: true
    })
    endDate: string

    @Column({
        type: 'text',
        nullable: true
    })
    information: string
}