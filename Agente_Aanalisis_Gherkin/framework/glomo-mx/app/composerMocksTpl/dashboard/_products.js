const checkUpgradableAccounts = true;
const dashboardProductsActive = {
  accounts: true,
  cards: true,
  equity: true,
  loans: true,
  deposits: false,
  funds: false,
  unitlinked: true,
  insurances: true,
  investments: true,
  btrader: true,
  financing: true
};

const productsConfig = {};
if (dashboardProductsActive.accounts) {
  productsConfig.accounts = {
    productTypes: [
      {
        id: 'ACCOUNT',
        groupByCurrency: true
      }
    ],
    cached: true,
    upgradeable: checkUpgradableAccounts
  };
}
if (dashboardProductsActive.cards) {
  productsConfig.cards = {
    productType: {
      id: 'CARD',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.equity) {
  productsConfig.equity = {
    productType: {
      id: 'PT',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.loans) {
  productsConfig.loans = {
    productType: {
      id: 'LOAN',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.financing) {
  productsConfig.financing = {
    productType: {
      id: 'FINANCING_LINE',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.investments) {
  productsConfig.investments = {
    productTypes: [
      {
        id: 'DEPOSIT',
        groupByCurrency: true
      },
      {
        id: 'INVE',
        groupByCurrency: true
      },
      {
        id: 'INVESTMENT_FUND',
        groupByCurrency: true,
        invalidFields: [ {
          path: 'subProductType.id',
          value: 'INVE'
        } ]
      }
    ],
    cached: false
  };
  productsConfig.deposits = {
    productType: {
      id: 'DEPOSIT',
      groupByCurrency: true
    },
    cached: true
  };
  productsConfig.funds = {
    productType: {
      id: 'INVESTMENT_FUND',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.deposits) {
  productsConfig.deposits = {
    productType: {
      id: 'DEPOSIT',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.funds) {
  productsConfig.funds = {
    productType: {
      id: 'INVESTMENT_FUND',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.unitlinked) {
  productsConfig.unitlinked = {
    productType: {
      id: 'LP',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.insurances) {
  productsConfig.insurances = {
    productType: {
      id: 'INSURANCE',
      groupByCurrency: true
    },
    cached: true
  };
}
if (dashboardProductsActive.btrader) {
  productsConfig.btrader = {
    productType: {
      id: 'BR',
      groupByCurrency: true
    },
    cached: true
  };
}

module.exports = {
  dashboardProductsActive,
  productsConfig,
  checkUpgradableAccounts
};
