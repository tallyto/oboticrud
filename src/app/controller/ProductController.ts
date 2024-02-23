import { FastifyReply, FastifyRequest } from "fastify";
import { Product } from "../../entity/Product";
import { AppDataSource } from "../../data-source";

export const getProduct = async (req: FastifyRequest, res: FastifyReply): Promise<Product> => {
    const { sku } = req.params as any;

    const product = await AppDataSource.getRepository(Product).findOne({
        where: { sku },
        relations: ["brand", "inventory"]
    });

    if (!product) {
        return res.status(404).send({ message: "Product not found" });
    }

    return res.status(200).send(product);
};

export const saveProduct = async (req: FastifyRequest, res: FastifyReply): Promise<Product> => {
    const {
        sku,
        name,
        brand,
        inventory,
        shortDescription,
        price,
        maxPrice,
        discount,
        percent,
        numberOfPayments,
        monthlyPayment,
        ratingValue,
        ratingCount,
        isMarketable,
        discontinued,
    } = req.body as any;

    // Verifique se o produto já existe no banco de dados
    const existingProduct = await AppDataSource.getRepository(Product).findOne({ where: { sku } });

    if (existingProduct) {
        return res.status(400).send({ message: "Product already exists" });
    }

    // Salve o novo produto no banco de dados
    const newProduct = await AppDataSource.getRepository(Product).save({
        sku,
        name,
        brand,
        inventory,
        shortDescription,
        price,
        maxPrice,
        discount,
        percent,
        numberOfPayments,
        monthlyPayment,
        ratingValue,
        ratingCount,
        isMarketable,
        discontinued,
    });

    return res.status(200).send(newProduct);
};

export const updateProduct = async (req: FastifyRequest, res: FastifyReply): Promise<Product> => {
    const { sku } = req.params as any;
    const {
        name,
        brand,
        inventory,
        shortDescription,
        price,
        maxPrice,
        discount,
        percent,
        numberOfPayments,
        monthlyPayment,
        ratingValue,
        ratingCount,
        isMarketable,
        discontinued,
    } = req.body as any;

    // Verifique se o produto existe no banco de dados
    const existingProduct = await AppDataSource.getRepository(Product).findOne({ where: { sku } });


    if (!existingProduct) {
        return res.status(404).send({ message: "Product not found" });
    }

    // Atualize os campos do produto
    existingProduct.name = name;
    existingProduct.brand = brand;
    existingProduct.brand = inventory;
    existingProduct.shortDescription = shortDescription;
    existingProduct.price = price;
    existingProduct.maxPrice = maxPrice;
    existingProduct.discount = discount;
    existingProduct.percent = percent;
    existingProduct.numberOfPayments = numberOfPayments;
    existingProduct.monthlyPayment = monthlyPayment;
    existingProduct.ratingValue = ratingValue;
    existingProduct.ratingCount = ratingCount;
    existingProduct.isMarketable = isMarketable;
    existingProduct.discontinued = discontinued;

    // Salve o produto atualizado no banco de dados
    const updatedProduct = await AppDataSource.getRepository(Product).save(existingProduct);

    return res.status(200).send(updatedProduct);
};

export const deleteProduct = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    const { sku } = req.params as any;

    // Verifique se o produto existe no banco de dados
    const existingProduct = await AppDataSource.getRepository(Product).findOne({ where: { sku } });

    if (!existingProduct) {
        return res.status(404).send({ message: "Product not found" });
    }

    // Remova o produto do banco de dados
    await AppDataSource.getRepository(Product).remove(existingProduct);

    res.status(204).send();
};
