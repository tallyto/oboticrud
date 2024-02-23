import { FastifyInstance } from "fastify";
import { verifyJwt } from "../middleware/AuthJWT";
import { getBrand, saveBrand, updateBrand, deleteBrand } from "../controller/BrandController";

export const BrandRoutes = async (app: FastifyInstance) => {
    // Rotas protegidas por JWT
    app.get('/:id', { onRequest: [verifyJwt] }, getBrand);
    app.put('/:id', { onRequest: [verifyJwt] }, updateBrand);
    app.delete('/:id', { onRequest: [verifyJwt] }, deleteBrand);
    
    // Rotas públicas
    app.post("/", saveBrand);
    
};
