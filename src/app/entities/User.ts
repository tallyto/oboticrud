import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    
    constructor(username: string, email: string, password: string) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
