const userLoginSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: { type: 'string', format: 'email', description: 'Endereço de e-mail' },
        password: { type: 'string', description: 'Senha do usuário' }
    }
}

export default userLoginSchema;
