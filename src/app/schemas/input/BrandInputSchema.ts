const brandInputSchema =
{
    type: 'object',
    required: ['name', 'slugName'],
    properties: {
        name: { type: 'string', description: 'Nome da marca' },
        slugName: { type: 'string', description: 'Slug da marca' }
    }
}

export default brandInputSchema;
