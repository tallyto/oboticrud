import { FastifyRequest, FastifyReply } from "fastify";
import { Inventory } from "../../entity/Inventory";
import { AppDataSource } from "../../data-source";

export const getInventory = async (req: FastifyRequest, res: FastifyReply): Promise<Inventory> => {
    const { id } = req.params as any;

    const inventory = await AppDataSource.getRepository(Inventory).findOne({ where: { id } });

    if (!inventory) {
        return res.status(404).send({ message: "Inventory not found" });
    }

    return res.status(200).send(inventory);
};

export const saveInventory = async (req: FastifyRequest, res: FastifyReply): Promise<Inventory> => {
    const { quantity, type } = req.body as any;

    // Verifique se o inventário já existe no banco de dados
    const existingInventory = await AppDataSource.getRepository(Inventory).findOne({ where: { type } });

    if (existingInventory) {
        return res.status(400).send({ message: "Inventory already exists" });
    }

    // Salve o novo inventário no banco de dados
    const newInventory = await AppDataSource.getRepository(Inventory).save({
        quantity,
        type,
    });

    return res.status(200).send(newInventory);
};

export const updateInventory = async (req: FastifyRequest, res: FastifyReply): Promise<Inventory> => {
    const { id } = req.params as any;
    const { quantity, type } = req.body as any;

    // Verifique se o inventário existe no banco de dados
    const existingInventory = await AppDataSource.getRepository(Inventory).findOne({ where: { id } });

    console.log(existingInventory);
    if (!existingInventory) {
        return res.status(404).send({ message: "Inventory not found" });
    }

    // Atualize os campos do inventário
    existingInventory.quantity = quantity;
    existingInventory.type = type;

    // Salve o inventário atualizado no banco de dados
    const updatedInventory = await AppDataSource.getRepository(Inventory).save(existingInventory);

    return res.status(200).send(updatedInventory);
};

export const deleteInventory = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    const { id } = req.params as any;

    // Verifique se o inventário existe no banco de dados
    const existingInventory = await AppDataSource.getRepository(Inventory).findOne({ where: { id } });

    if (!existingInventory) {
        return res.status(404).send({ message: "Inventory not found" });
    }

    // Remova o inventário do banco de dados
    await AppDataSource.getRepository(Inventory).remove(existingInventory);

    res.status(204).send();
};
