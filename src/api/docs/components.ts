export default {
    components: {
        schemas: {
            Error: {
                type: 'object',
                properties: {
                    internal_code: {
                        type: 'number',
                    },
                },
            },
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'jwt-token',
            },
        },
    },
};
