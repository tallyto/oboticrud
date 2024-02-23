const brandSchema =
{
    type: 'object',
    required: ['id', 'name', 'slugName'],
    properties: {
        id: { type: 'integer', description: 'ID da marca' },
        name: { type: 'string', description: 'Nome da marca' },
        slugName: { type: 'string', description: 'Slug da marca' }
    }
}


export default brandSchema;
