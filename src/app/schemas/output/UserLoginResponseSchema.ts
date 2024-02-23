const userLoginResponseSchema = {
    type: 'object',
    required: [],
    properties: {
        id: { type: 'string', description: 'Id do usuário', },
        username: { type: 'string', description: 'Nome do usuário', },
        email: { type: 'string', description: 'Email do usuário', },
        token: { type: 'string', description: 'Token do usuário', }
    }
}

export default userLoginResponseSchema;
