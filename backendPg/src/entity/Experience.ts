import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum STATUS {
    OK = 'OK',
    INVALID = 'Os campos não podem ser vazio',
    REGISTER_ERROR = 'Não foi registrado',
    UPDATE_SUCESS = 'Experiência Atualizada com sucesso',
    EXPERIENCE_NOT_EXIST = 'Experiência não encontrada',
    DELETE_SUCESS = 'Experiência excluida com sucesso',
}

@Entity()
export class Experience {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    responsible: string;

    @Column()
    image: string;

    @Column()
    whats: string;

    @Column()
    email: string;

    @Column()
    description: string;

    constructor(
        title: string,
        responsible: string,
        image: string,
        whats: string,
        email: string,
        description: string
        ){
        this.title = title
        this.responsible = responsible
        this.image = image
        this.whats = whats
        this.email = email
        this.description = description
    }


    isValid(): STATUS {
        if(
            !this.title || this.title.length == 0 
            || !this.responsible || this.responsible.length == 0
            || !this.image || this.image.length == 0
            || !this.whats || this.whats.length == 0
            || !this.email || this.email.length == 0
            || !this.description || this.description.length == 0
            ) {
            return STATUS.INVALID
        }
    
        return STATUS.OK
    }
}
