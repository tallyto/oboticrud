const userInputSchema = {
    type: 'object',
    required: ['username', 'email', 'password'],
    properties: {
        username: { type: 'string', description: 'Nome de usuário' },
        email: { type: 'string', format: 'email', description: 'Endereço de e-mail' },
        password: { type: 'string', description: 'Senha do usuário' }
    }
}

export default userInputSchema;
