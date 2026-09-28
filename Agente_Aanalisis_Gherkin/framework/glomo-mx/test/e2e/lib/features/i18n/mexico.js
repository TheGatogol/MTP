module.exports = {
    locale: 'es_mx',
    thousandsMark: ',',
    decimalMark: '.',
    decimals: 2,
    numberOfLastDigits: 5,
    localCurrency: 'MXN',
    currencies: {
        MXN: {
            symbol: '$',
            friendlyName: 'Pesos',
            symbolPosition: 'left',
            signPosition: 'right'
        },
        CLP: {
            symbol: 'Ch$',
            friendlyName: 'Pesos (CLP)',
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
        }
    },
    account: {
        'default': {
            name: 'Cuenta BBVA',
            titlePrefix: 'Cuenta'
        }
    }
};
