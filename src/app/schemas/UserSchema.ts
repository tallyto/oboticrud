const userSchema = {
    type: 'object',
    required: ['id', 'username', 'email', 'password'],
    properties: {
        id: { type: 'integer', description: 'ID do usuário' },
        username: { type: 'string', description: 'Nome de usuário' },
        email: { type: 'string', format: 'email', description: 'Endereço de e-mail' },
        password: { type: 'string', description: 'Senha do usuário' }
    }
}

export default userSchema;
