import { FastifyInstance } from "fastify";
import { verifyJwt } from "../middleware/AuthJWT";
import { getInventory, saveInventory, updateInventory, deleteInventory } from "../controller/InventoryController";

export const InventoryRoutes = async (app: FastifyInstance) => {
    // Rotas protegidas por JWT
    app.get('/:id', { onRequest: [verifyJwt] }, getInventory);
    app.put('/:id', { onRequest: [verifyJwt] }, updateInventory);
    app.delete('/:id', { onRequest: [verifyJwt] }, deleteInventory);
    
    // Rotas públicas
    app.post("/", saveInventory);
};
