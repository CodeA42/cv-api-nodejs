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
        type: 'bigint',
        nullable: true
    })
    startDate: number

    @Column({
        nullable: true
    })
    stillEngaged: boolean

    @Column({
        type: 'bigint',
        nullable: true
    })
    endDate: number

    @Column({
        type: 'text',
        nullable: true
    })
    information: string
}