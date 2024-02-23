const inventoryInputSchema = {
    type: 'object',
    required: [ 'quantity', 'type'],
    properties: {
        quantity: { type: 'integer', description: 'Quantidade em estoque' },
        type: { type: 'string', description: 'Tipo de inventário' },
    }
};

export default inventoryInputSchema;
