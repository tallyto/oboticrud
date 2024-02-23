import { FastifyReply, FastifyRequest } from "fastify";
import { Brand } from "../../entity/Brand";
import { AppDataSource } from "../../data-source";

export const getBrand = async (req: FastifyRequest, res: FastifyReply): Promise<Brand> => {
    const { id } = req.params as any;

    const brand = await AppDataSource.getRepository(Brand).findOne({ where: { id } });

    if (!brand) {
        return res.status(404).send({ message: "Brand not found" });
    }

    return res.status(200).send(brand);
};

export const saveBrand = async (req: FastifyRequest, res: FastifyReply): Promise<Brand> => {
    const { name, slugName } = req.body as any;

    // Verifique se a marca já existe no banco de dados
    const existingBrand = await AppDataSource.getRepository(Brand).findOne({ where: { slugName } });

    if (existingBrand) {
        return res.status(400).send({ message: "Brand already exists" });
    }

    // Salve a nova marca no banco de dados
    const newBrand = await AppDataSource.getRepository(Brand).save({
        name,
        slugName,
    });

    return res.status(200).send(newBrand);
};

export const updateBrand = async (req: FastifyRequest, res: FastifyReply): Promise<Brand> => {
    const { id } = req.params as any;
    const { name, slugName } = req.body as any;

    // Verifique se a marca existe no banco de dados
    const existingBrand = await AppDataSource.getRepository(Brand).findOne({ where: { id } });

    if (!existingBrand) {
        return res.status(404).send({ message: "Brand not found" });
    }

    // Atualize os campos da marca
    existingBrand.name = name;
    existingBrand.slugName = slugName;

    // Salve a marca atualizada no banco de dados
    const updatedBrand = await AppDataSource.getRepository(Brand).save(existingBrand);

    return res.status(200).send(updatedBrand);
};

export const deleteBrand = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    const { id } = req.params as any;

    // Verifique se a marca existe no banco de dados
    const existingBrand = await AppDataSource.getRepository(Brand).findOne({ where: { id } });

    if (!existingBrand) {
        return res.status(404).send({ message: "Brand not found" });
    }

    // Remova a marca do banco de dados
    await AppDataSource.getRepository(Brand).remove(existingBrand);

    res.status(204).send();
};
