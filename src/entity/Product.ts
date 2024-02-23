import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Brand } from './Brand'; 
import { Inventory } from './Inventory'; 

@Entity('product')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    sku: string;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @ManyToOne(() => Brand, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'brand_id' })
    brand: Brand;

    @ManyToOne(() => Inventory, { nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'inventory_id' })
    inventory: Inventory;

    @Column({ type: 'varchar', nullable: false, name: "short_description"})
    shortDescription: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false, name: "max_price" })
    maxPrice: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
    discount: number;

    @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
    percent: number;

    @Column({ type: 'int', nullable: false, name: "number_of_payments" })
    numberOfPayments: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false, name: "monthly_payment" })
    monthlyPayment: number;

    @Column({ type: 'decimal', precision: 5, scale: 4, nullable: false, name: "rating_value" })
    ratingValue: number;

    @Column({ type: 'int', nullable: false, name: "rating_count" })
    ratingCount: number;

    @Column({ type: 'boolean', nullable: false, name: "is_marketable" })
    isMarketable: boolean;

    @Column({ type: 'boolean', nullable: false })
    discontinued: boolean;
}
