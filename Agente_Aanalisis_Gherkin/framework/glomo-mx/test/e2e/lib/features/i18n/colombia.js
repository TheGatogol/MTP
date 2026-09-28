module.exports = {
    locale: 'es_cl',
    thousandsMark: ',',
    decimalMark: '.',
    decimals: 2,
    numberOfLastDigits: 4,
    localCurrency: 'CLP',
    currencies: {
        CLP: {
            symbol: '$',
            friendlyName: 'Pesos',
            symbolPosition: 'left',
            signPosition: 'right'
        },
        MXN: {
            symbol: 'Mx$',
            friendlyName: 'Pesos (MXN)',
            symbolPosition: 'left',
            signPosition: 'right'
        },
        USD: {
            symbol: 'US$',
            friendlyName: 'Dólares',
            symbolPosition: 'left',
            signPosition: 'right'
        },
        EUR: {
            symbol: '€',
            friendlyName: 'Euros',
            symbolPosition: 'right',
            signPosition: 'right'
        },
        CLF: {
            symbol: 'UF',
            friendlyName: 'Unidad Fomento',
            symbolPosition: 'left',
            signPosition: 'right'
        },
        account: {
            'default': {
                name: 'Cuenta BBVA',
                titlePrefix: 'Cuenta'
            }
        }
    }
};
