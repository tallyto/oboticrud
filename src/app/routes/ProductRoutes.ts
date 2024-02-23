import { FastifyInstance } from "fastify";
import { verifyJwt } from "../middleware/AuthJWT";
import {
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controller/ProductController";

export const ProductRoutes = async (app: FastifyInstance) => {
    // Rotas protegidas por JWT
    app.get('/:sku', { onRequest: [verifyJwt] }, getProduct);
    app.put('/:sku', { onRequest: [verifyJwt] }, updateProduct);
    app.delete('/:sku', { onRequest: [verifyJwt] }, deleteProduct);

    // Rotas públicas
    app.post("/", saveProduct);
};
