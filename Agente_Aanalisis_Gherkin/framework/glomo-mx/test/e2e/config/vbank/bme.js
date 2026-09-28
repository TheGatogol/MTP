exports.bme = {
    protocol: 'http',
    name: 'bme',
    port: '9003',
    realUrl: 'https://mxwtst.bmeinntech.es',
    cors: {
        methods: ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
        headers: ['x-vbank-session', 'x-requested-with', 'content-type', 'Cache-Control'],
    },
};
