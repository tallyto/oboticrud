import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Product1708706643193 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "product",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "sku",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "brand_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "inventory_id",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "short_description",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "price",
                    type: "decimal(10, 2)",
                    isNullable: false,
                },
                {
                    name: "max_price",
                    type: "decimal(10, 2)",
                    isNullable: false,
                },
                {
                    name: "discount",
                    type: "decimal(5, 2)",
                    isNullable: false,
                },
                {
                    name: "percent",
                    type: "decimal(5, 2)",
                    isNullable: false,
                },
                {
                    name: "number_of_payments",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "monthly_payment",
                    type: "decimal(10, 2)",
                    isNullable: false,
                },
                {
                    name: "rating_value",
                    type: "decimal(5, 4)",
                    isNullable: false,
                },
                {
                    name: "rating_count",
                    type: "int",
                    isNullable: false,
                },
                {
                    name: "is_marketable",
                    type: "boolean",
                    isNullable: false,
                },
                {
                    name: "discontinued",
                    type: "boolean",
                    isNullable: false,
                },
            ],
        }), true);

        await queryRunner.createForeignKey("product", new TableForeignKey({
            columnNames: ["brand_id"],
            referencedTableName: "brand",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("product", new TableForeignKey({
            columnNames: ["inventory_id"],
            referencedTableName: "inventory",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product");
    }

}
