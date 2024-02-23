const inventorySchema = {
    type: 'object',
    required: ['id', 'quantity', 'type'],
    properties: {
        id: { type: 'integer', description: 'ID do inventário' },
        quantity: { type: 'integer', description: 'Quantidade em estoque' },
        type: { type: 'string', description: 'Tipo de inventário' },
    }
};

export default inventorySchema;
