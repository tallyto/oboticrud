const userWithoutPasswordSchema = {
    type: 'object',
    required: ['id', 'username', 'email', 'password'],
    properties: {
        id: { type: 'integer', description: 'ID do usuário' },
        username: { type: 'string', description: 'Nome de usuário' },
        email: { type: 'string', format: 'email', description: 'Endereço de e-mail' },
    }
}

export default userWithoutPasswordSchema;
