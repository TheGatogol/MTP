
const { getCampaignAnalytics } = require('../common/helpers/_utils');

const configDataProperties = {
  majorCurrency: 'MXN',
  availableBalance: 'CURRENT_BALANCE',
  hiddenFirstLevelProductIds: ['DY', 'DX', 'XB', 'DW', 'AE', 'CA', 'DS', 'DZ', 'YC'],
  hideDashboardRewards: true,
  hideSeeAllLink: true,
  putUserSettingsExternal: true,
  applicationId: 'glomo-mx',
  frequentActionsCustomModalContent: {},
  hiddenProductsFeatureOff: true,
  frequentActionsHideDescriptionIfEmpty: true,
  showNotificationToastExternal: true,
  isUseInternalToast: true
};

const configAccountsProduct = {
  hideLinkAnalysis: false,
  hideMovements: true,
  hideStatusMessage: true,
  accountProductIdsHiddenMovements: [ 'ME' ],
  accountProductIdsHiddenLinkAnalysis: [ 'ME' ],
  majorCurrency: 'MXN',
  availableBalanceAccount: 'CURRENT_BALANCE',
  hideAccumulated: true,
  levelUpAccounts: true,
  hideLinkAnalysisDashboard: false
};

const configCardsProduct = {
  availableBalanceCard: 'AVAILABLE_BALANCE',
  disposedAmount: 'CURRENT_BALANCE',
  hideMovements: true,
  cardImageType: 'FRONT_CARD',
  disposedSpecificAmount: 'CURRENT_BALANCE',
  hideLinkAnalysis: false,
  hideStatusMessage: true,
  hideMessage: true,
  cardOffId: [ 'OPERATIVE' ],
  blockedCardId: ['BLOCKED', 'INOPERATIVE'],
  blockedCardName: ['TJ. ROBADA', 'PDT.ESTAMP', 'PDT.REMES', 'TJ. PERDIDA'],
  pendingActivationId: ['INOPERATIVE', 'PENDING_DELIVERY', 'PENDING_EMBOSSING'],
  expiredCardName: [ 'VENCIDA' ],
  nonExpiredCardName: [],
  overdrawnCardId: [ 'BLOCKED' ],
  overdrawnCardName: ['SOBREGIRO', 'PAG.VENCIDOS'],
  showStatusOverdrawn: true
};

const configLoansProduct = {
  disposedAmount: 'DISPOSED_BALANCE',
  pendingBalance: 'CURRENT_CAPITAL_BALANCE',
  hideLinkAnalysis: true,
  hideDebtLink: true
};

const configInsuranceProduct = {
  showInsuranceSpaces: true,
  premium: 'PRIMATOTALANUAL',
  hidePolicy: true,
  showProductDescription: true
};

const configInsurancesProduct = {
  showInsuranceSpaces: false,
  showProductDescription: true,
  hidePolicy: true
};

const configInvestmentProduct = {
  hideLinkInvestment: 'true',
  productFI: 'SI',
  pgProduct: 'IN',
  bInvestSubproductType: 'INVE',
  bTrader: 'BR',
  productPg: 'IN',
  productPt: 'PT',
  totals: false,
  investGraph: false,
  productLp: 'LP',
  hideMessage: true,
  showInvestmentFundAmount: true,
  amountCurrentBalance: 'CURRENT_BALANCE',
  patrimonialLink: true
};

const configBusinessProduct = {
  hideBusiness: false,
  isFetchStores: true,
  paginationKey: '0',
  pageSizeStores: '10',
  mposKey: 'mercurioMPOS'
};

const externalOpportunitiesData = [
  {
    'id': 'PGEXP'
  },
  {
    'id': 'PGINC'
  },
  {
    'id': 'PGINV'
  },
  {
    'id': 'PGNET'
  },
  {
    'id': 'PGDEB'
  },
  {
    'id': 'PGSAV'
  }
];

const toggles = {
  showMoreActions: true,
  editionMode: true
};

const messagesApiData = {
  campaignAnalytics: getCampaignAnalytics()
};

const configAccountsProductStandIn = {
  hideLinkAnalysis: true,
  hideLastMovementsLink: true,
  hideLinkAnalysisDashboard: true
};

const configCardsProductStandIn = {
  hideLinkAnalysis: true,
  hideLastMovementsLink: true
};

const togglesStandIn = {
  editionMode: false
};

const createOperativeStructure = (internalId, url) => {
  return {
    internalId,
    isActive: true,
    image: {
      url,
      imageType: {
        id: 'ICON'
      }
    }
  };
};

const createMainCardStructure = () => ({
  id: 'home_maincard',
  userExpertise: 'STANDARD',
  collections: [
    {
      id: '20',
      name: 'app-info-structure-home-main-card-gl-title',
      'modelCollection': 'maincard',
      isActive: true,
      isEditable: false,
      elements: []
    }
  ]});

const createFrequentActionsStructure = () => ({
  id: 'home_frequent_actions',
  userExpertise: 'ADVANCED',
  collections: [
    {
      id: '16',
      typeCollection: 'SIMPLE',
      modelCollection: 'frequent_actions',
      name: 'app-info-structure-home-frequent-actions-gl-title',
      isActive: true,
      isEditable: false,
      elements: []
    }
  ]});

const getfuturaHomeDefaultBase = {
  elementType: 'SPACE',
  userExpertise: 'STANDARD',
  id: 'home',
  collections: [
    {
      id: '18',
      name: 'Colección Home01',
      typeCollection: 'COMPOSITE',
      modelCollection: 'home',
      isActive: true,
      isEditable: false,
      elements: [
        createMainCardStructure(),
        createFrequentActionsStructure(),
        {
          id: 'home_nbo',
          userExpertise: 'STANDARD',
          collections: [
            {
              id: '21',
              typeCollection: 'EMPTY',
              modelCollection: 'nbo',
              name: 'app-info-structure-home-customized-offers-gl-title',
              isActive: true,
              isEditable: false,
              elements: []
            }
          ]
        },
        {
          id: 'home_experiences',
          userExpertise: 'STANDARD',
          collections: [ {
            id: '17',
            typeCollection: 'SIMPLE',
            modelCollection: 'experiences',
            isActive: true,
            name: 'app-info-structure-experiences-section-gl-header-title',
            elements: [
              {
                'elementType': 'ITEM',
                'internalId': 'expensesGroup',
                'name': 'glomo-dashboard-app-info-structure-experiences-expenses-group-name',
                'isActive': true,
                'title': 'glomo-dashboard-app-info-structure-experiences-expenses-group-name',
                'description': 'glomo-dashboard-app-info-structure-experiences-expenses-group-description',
                'longDescription': 'glomo-dashboard-app-info-structure-experiences-expenses-group-description',
                'link': {
                  'description': 'glomo-dashboard-app-info-structure-experiences-expenses-group-link-description',
                  'href': 'expensesGroup'
                },
                'image': {
                  'url': '',
                  'imageType': {
                    'id': 'IMAGE'
                  }
                }
              }
            ] } ]
        }
      ]
    }
  ]
};

const getFuturaCacheDefaultStandIn = {
  elementType: 'SPACE',
  userExpertise: 'STANDARD',
  id: 'home',
  collections: [
    {
      id: '18',
      name: 'Colección Home01',
      typeCollection: 'COMPOSITE',
      modelCollection: 'home',
      isActive: true,
      isEditable: false,
      elements: [
        createMainCardStructure(),
        createFrequentActionsStructure()
      ]
    }
  ]
};

const operativesHomeDefault = {
  home_futura: [
    createOperativeStructure('transfers', 'sphericaTransfer'),
    createOperativeStructure('cardlessWithdrawal', 'sphericaMobileCashDollar'),
    createOperativeStructure('cardCreditCardPayment', 'sphericaCard'),
    createOperativeStructure('billPayments', 'sphericaReporting'),
    createOperativeStructure('mobileTopUp', 'sphericaChargeMobile')
  ],
  home_monoproduct: [
    createOperativeStructure('atmLocator', 'sphericaBranch')
  ],
  home_always_on: [
    createOperativeStructure('transfers', 'sphericaTransfer')
  ],
  home_youngsters: [
    createOperativeStructure('requestMoney', 'sphericaDollar'),
    createOperativeStructure('transfers', 'sphericaTransfer'),
    createOperativeStructure('cardlessWithdrawal', 'sphericaMobileCashDollar')
  ]
};

const configurationClientTypeFutura = {
  home_futura: {
    flagAssitance: true,
    flagDiscreetMode: true
  },
  home_monoproduct: {
    flagHideEditionMainCard: true,
    flagAssitance: true,
    flagBlue: false,
    flagHideLastCard: true,
    flagDiscreetMode: true
  },
  home_monoproduct_non_account: {
    flagMainCard: false,
    flagDiscreetMode: false
  },
  home_youngsters: {
    flagHideEditionMainCard: true,
    flagDiscreetMode: true,
    flagHideLastCard: true
  }
};

const futuraDictionaryFlags = {
  flagHome: 'home',
  flagHomeFullFutura: 'home_futura',
  flagHomeFuturaStandIn: 'home_always_on',
  flagBlue: 'blue',
  flagMainCard: 'maincard',
  flagAssitance: 'assistance',
  flagDiscreetMode: 'discreet_mode',
  flagHomeMinior: 'home_youngsters',
  flagHomeMonoProduct: 'home_monoproduct',
  flagHideEditionMainCard: 'hide_edition_maincard',
  flagHideLastCard: 'hide_last_card',
  flagHomeMonoProductNoAccount: 'home_monoproduct_non_account'
};

const futuraTabConfigMonoProduct = [
  {
    title: 'app-info-structure-home-core-gl-head-tab-outstanding',
    optionTab: 'destacado'
  },
  {
    title: 'app-info-structure-home-core-gl-head-tab-products',
    optionTab: 'producto'
  }
];

const dictionaryFlagsStandInOperatives = {
  transfers: 'glomo.standin.transfers.alwaysOn'
};

module.exports = {
  configDataProperties,
  configAccountsProduct,
  configCardsProduct,
  configLoansProduct,
  configInsuranceProduct,
  configInsurancesProduct,
  configInvestmentProduct,
  configBusinessProduct,
  configAccountsProductStandIn,
  configCardsProductStandIn,
  togglesStandIn,
  externalOpportunitiesData,
  toggles,
  messagesApiData,
  getfuturaHomeDefaultBase,
  getFuturaCacheDefaultStandIn,
  operativesHomeDefault,
  futuraTabConfigMonoProduct,
  dictionaryFlagsStandInOperatives,
  configurationClientTypeFutura,
  futuraDictionaryFlags
};
