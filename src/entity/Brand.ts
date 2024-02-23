import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Brand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: "slug_name" })
    slugName: string;

    @OneToMany(() => Product, product => product.brand)
    products: Product[];
}
