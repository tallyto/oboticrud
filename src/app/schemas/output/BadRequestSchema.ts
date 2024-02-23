const badRequestSchema = {
    type: 'object',
    required: [],
    properties: {
        message: { type: 'string', description: 'Error description', },
    }
}

export default badRequestSchema;
