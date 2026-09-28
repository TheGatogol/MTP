exports.portunus = {
    protocol: 'http',
    name: 'portunus',
    port: '9004',
    realUrl: 'https://portunus-hub-mx.work.global.platform.bbva.com',
    cors: {
        methods: ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
        headers: ['x-vbank-session', 'x-requested-with', 'content-type', 'Cache-Control', 'authorization', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin'],
    },
};
