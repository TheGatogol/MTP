const path = require('path');

const alias = {
    'glomo-modules': '../../node_modules',
    '@testing': './node_modules',
};

const nodeE2EImportAlias = process.env['NODE_E2E_IMPORT_ALIASES'];
if (nodeE2EImportAlias != null && nodeE2EImportAlias !== '') {
    for (const importAlias of nodeE2EImportAlias.split('|')) {
        const [name, value] = importAlias.split('=');
        alias[name] = value;
    }
}

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: '18.18.2'
                }
            }
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', {
            legacy: true,
        }],
        '@babel/plugin-transform-private-methods',
        [
            'module-resolver',
            {
                root: [path.resolve('./')],
                alias,
            },
        ],
    ],

    sourceMaps: 'both',
};
