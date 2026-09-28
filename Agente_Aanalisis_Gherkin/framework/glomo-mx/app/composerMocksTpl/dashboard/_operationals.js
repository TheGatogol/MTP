const appSettingsData = {
  dashboard: {
    data: {
      dashboardOperatives: [
        {
          id: 'TRANSFER',
          rank: 1,
          isFavorite: true,
          isCreditCardOperative: true,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'OPPORTUNITIES',
          rank: 2,
          isFavorite: true,
          isCreditCardOperative: false,
          isAccountOperative: false,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'FREQUENT_OPERATIONS',
          rank: 10,
          isFavorite: true,
          isCreditCardOperative: false,
          isAccountOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'MOBILE_TRANSFER',
          rank: 3,
          isFavorite: true,
          isCreditCardOperative: false,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'CREDIT_CARD_DEBT_PAYMENT',
          rank: 4,
          isFavorite: false,
          isCreditCardOperative: true,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'SERVICE_PAYMENT',
          rank: 5,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'MOBILE_TOP_UP',
          rank: 6,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'ACCOUNT_STATUS',
          rank: 7,
          isFavorite: false,
          isCreditCardOperative: true,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: false,
          visibility: false
        },
        {
          id: 'INTERNATIONAL_TRANSFERS',
          rank: 8,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'QR_PAYMENT',
          rank: 9,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          isMerchantOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'CASH_ZONE',
          rank: 10,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: false,
          isMerchantOperative: true,
          enable: true,
          visibility: true
        }
      ]
    }
  }
};

const appSettingsDataMinior = {
  dashboard: {
    data: {
      dashboardOperativesMinior: [
        {
          id: 'REQUEST_MONEY',
          rank: 1,
          isFavorite: true,
          isCreditCardOperative: false,
          isAccountOperative: false,
          enable: true,
          visibility: true
        },
        {
          id: 'TRANSFER',
          rank: 2,
          isFavorite: true,
          isCreditCardOperative: false,
          isAccountOperative: true,
          enable: true,
          visibility: true
        },
        {
          id: 'MOBILE_TRANSFER',
          rank: 3,
          isFavorite: true,
          isCreditCardOperative: false,
          isAccountOperative: true,
          enable: true,
          visibility: true
        },
        {
          id: 'CREDIT_CARD_DEBT_PAYMENT',
          rank: 4,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          enable: false,
          visibility: false
        },
        {
          id: 'SERVICE_PAYMENT',
          rank: 5,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          enable: false,
          visibility: false
        },
        {
          id: 'MOBILE_TOP_UP',
          rank: 6,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          enable: true,
          visibility: true
        },
        {
          id: 'INTERNATIONAL_TRANSFERS',
          rank: 8,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: true,
          enable: false,
          visibility: false
        },
        {
          id: 'QR_PAYMENT',
          rank: 9,
          isFavorite: false,
          isCreditCardOperative: false,
          isAccountOperative: false,
          enable: false,
          visibility: false
        }
      ]
    }
  }
};

const dashboardOperationsList = [
  {
    id: 'transfer',
    type: 'operation',
    icon: 'coronita:transfer',
    label: 'dashboard-operative-transfer',
    eventName: 'navigate-dashboard-to-transfer',
    eventDetail: {
      continue: 'dashboard'
    }
  },
  {
    id: 'opportunities',
    type: 'operation',
    icon: 'coronita:expand',
    label: 'dashboard-operative-opportunities-fix',
    eventName: 'navigate-dashboard-to-opportunities',
    eventDetail: {}
  },
  {
    id: 'cardLessWithdraw',
    type: 'operation',
    icon: 'coronita:mobilecashdollar',
    label: 'dashboard-operative-mobile-transfer',
    eventName: 'navigate-dashboard-to-cardless-withdraw',
    eventDetail: {}
  },
  {
    id: 'operationsMore',
    type: 'operation',
    icon: 'coronita:more',
    label: 'dashboard-operative-view-more',
    eventName: 'navigate-dashboard-to-operationals',
    eventDetail: {}
  }
];

const dashboardOperationsListMinior = [
  {
    id: 'requestMoney',
    type: 'operation',
    icon: 'coronita:dollar',
    eventName: 'navigate-dashboard-to-request-money',
    label: 'dashboard-operative-request-money',
    eventDetail: {}
  },
  {
    id: 'transfer',
    type: 'operation',
    icon: 'coronita:transfer',
    label: 'dashboard-operative-transfer',
    eventName: 'navigate-dashboard-to-transfer',
    eventDetail: {
      continue: 'dashboard'
    }
  },
  {
    id: 'cardLessWithdraw',
    type: 'operation',
    icon: 'coronita:mobilecashdollar',
    label: 'dashboard-operative-mobile-transfer',
    eventName: 'navigate-dashboard-to-cardless-withdraw',
    eventDetail: {}
  },
  {
    id: 'operationsMore',
    type: 'operation',
    icon: 'coronita:more',
    label: 'dashboard-operative-view-more',
    eventName: 'navigate-dashboard-to-operationals',
    eventDetail: {}
  }
];

const operationalsIcons = {
  requestMoney: 'coronita:dollar',
  transfer: 'coronita:transfer',
  transferDimo: 'coronita:transfer',
  opportunities: 'coronita:expand',
  mobileTransfer: 'coronita:mobilecashdollar',
  creditCardDebtPayment: 'coronita:creditcard',
  servicePayment: 'coronita:billspayments',
  mobileTopUp: 'coronita:tablet',
  accountStatus: 'coronita:document',
  internationalTransfers: 'coronita:transfer',
  qrPayment: 'coronita:qr',
  frequentOperations: 'coronita:historical-transfer',
  cashZone: 'coronita:receive-money-dollar'
};

const operationalsIconsSpherica = {
  requestMoney: 'coronita:dollar',
  transfer: 'coronita:transfer',
  transferDimo: 'coronita:transfer',
  opportunities: 'coronita:add',
  mobileTransfer: 'coronita:mobilecashdollar',
  creditCardDebtPayment: 'coronita:card',
  servicePayment: 'coronita:reporting',
  mobileTopUp: 'coronita:mobile',
  accountStatus: 'coronita:document',
  internationalTransfers: 'coronita:transfer',
  qrPayment: 'coronita:qr',
  frequentOperations: 'coronita:frequency',
  cashZone: 'coronita:receive-money-dollar'
};

const operationalsPage = {
  requestMoney: 'requestMoney',
  transfer: 'transfers',
  internationalTransfers: 'internationalTransfersPanel',
  opportunities: 'contractProductSection',
  mobileTransfer: 'cardlessWithdrawal',
  creditCardDebtPayment: 'accountCreditCardPayment',
  servicePayment: 'billPaymentsDashboard',
  mobileTopUp: 'topUp',
  qrPayment: 'comingSoon',
  frequentOperations: 'frequentOperationsList',
  cashZone: 'cashZonePaymentsMposCalc'
};

const conditionsForOperational = {
  accounts: {
    hasAccounts: true,
    hasInternationalTransfers: true
  },
  cards: {
    hasCards: true,
    hasOperableCards: true,
    transfer: {
      hasCreditCards: true
    }
  },
  creditCardDebtPayment: {
    hasCreditCards: true
  }
};

const createDictionaryEntry = (internalId, flags) => {
  return { internalId, flag: flags };
};

const homeNBA = [
  createDictionaryEntry('sales.0TDC', [ 'glomo.contractProductSection.ocCreditCardHolder' ]),
  createDictionaryEntry('sales.0557', [ 'glomo.contractProductSection.ocPayrollPortability' ]),
  createDictionaryEntry('sales.0758', [ 'glomo.offers.dynamicLifeInsuranceMxn' ]),
  createDictionaryEntry('sales.0759', [ 'glomo.offers.dynamicLifeInsuranceUsd' ]),
  createDictionaryEntry('sales.4035', [ 'glomo.offers.travelInsurance' ]),
  createDictionaryEntry('sales.0821', [ 'glomo.offers.cardsOnDemand' ]),
  createDictionaryEntry('sales.0822', [ 'glomo.offers.cardsOnDemand.AuthorizationMultiproduct' ]),
  createDictionaryEntry('sales.0576', [ 'glomo.offers.cardTransactionServicingScheduledDonations' ]),
  createDictionaryEntry('sales.0850', [ 'glomo.offers.cardsBankingMediaBA' ]),
  createDictionaryEntry('sales.0851', [ 'glomo.offers.cardsBankingMediaWS' ]),
  createDictionaryEntry('sales.0852', [ 'glomo.offers.cardsBankingMediaSA' ]),
  createDictionaryEntry('sales.0853', [ 'glomo.offers.cardsBankingMediaAA' ]),
  createDictionaryEntry('sales.0854', [ 'glomo.offers.cardsBankingMediaBB' ]),
  createDictionaryEntry('sales.0835', [ 'glomo.contractProductSection.ocPayrollPortabilityN2' ]),
  createDictionaryEntry('sales.0837', [ 'glomo.offers.profileRecipients' ])
];

const homeMainCard = [
  createDictionaryEntry('ACCOUNT', ['glomo.dashboard.financialOverviewV1', 'glomo.dashboard.glomoMinior']),
  createDictionaryEntry('INVESTMENT_FUND', [ 'glomo.dashboard.investments' ]),
  createDictionaryEntry('DEPOSIT', [ 'glomo.dashboard.investments' ]),
  createDictionaryEntry('INSURANCE', [ 'glomo.insurance.listInsurances' ])
];

const homeSmartServicing = [
  createDictionaryEntry('transfers', [ 'glomo.account.transfers' ]),
  createDictionaryEntry('creditCardPayment', [ 'glomo.account.creditCardPayment' ]),
  createDictionaryEntry('billPaymentSS', [ 'glomo.dashboard.billPaymentSmartServicing' ])
];

const homeFrequentActions = [
  createDictionaryEntry('internationalTransfers', [ 'glomo.account.internationalTransfers' ]),
  createDictionaryEntry('cardlessWithdrawal', [ 'glomo.account.cardlessWithdrawal' ]),
  createDictionaryEntry('cardCreditCardPayment', [ 'glomo.account.creditCardPayment' ]),
  createDictionaryEntry('transfers', [ 'glomo.account.transfers' ]),
  createDictionaryEntry('billPayments', [ 'glomo.account.billPayment' ]),
  createDictionaryEntry('rechargeTag', [ 'glomo.operations.ServicePaymentTag' ]),
  createDictionaryEntry('blackhawkPurchase', [ 'glomo.operations.blackHawkPurchase' ]),
  createDictionaryEntry('mobileTopUp', [ 'glomo.account.refillsAndPackages' ]),
  createDictionaryEntry('codicelPeerToPeerSend', [ 'glomo.account.dimoTransfer' ]),
  createDictionaryEntry('requestMoney', [ 'glomo.account.requestMoney' ])
];

const homeFinancialHealth = [
  createDictionaryEntry('FUPGFH', [ 'glomo.dashboard.pfm.access' ])
];

const homeNBO = [
  createDictionaryEntry('sales.0557', [ 'glomo.offers.dynamicLifeInsuranceMxn' ]),
  createDictionaryEntry('sales.0759', [ 'glomo.offers.dynamicLifeInsuranceUsd' ]),
  createDictionaryEntry('sales.4025', [ 'glomo.offers.ocMetasegura' ]),
  createDictionaryEntry('sales.AUTO', [ 'glomo.contractProductSection.ocCarLoan' ]),
  createDictionaryEntry('sales.ANOM', [ 'glomo.financingDebit.dashboardAdvancePayment' ]),
  createDictionaryEntry('sales.4035', [ 'glomo.offers.travelInsurance' ]),
  createDictionaryEntry('sales.0733', [ 'glomo.offers.creditCardFixedPlanPPF' ]),
  createDictionaryEntry('sales.0732', [ 'glomo.offers.creditCardLoanRestructuring' ]),
  createDictionaryEntry('sales.0769', [ 'glomo.offers.creditCardFixedPlanAPF' ]),
  createDictionaryEntry('sales.0821', [ 'glomo.offers.cardsOnDemand' ]),
  createDictionaryEntry('sales.0576', [ 'glomo.offers.cardTransactionServicingScheduledDonations' ]),
  createDictionaryEntry('sales.0835', [ 'glomo.contractProductSection.ocPayrollPortabilityN2' ]),
  createDictionaryEntry('sales.0822', [ 'glomo.offers.cardsOnDemand.AuthorizationMultiproduct' ]),
  createDictionaryEntry('sales.0856', [ 'glomo.dashboard.mortgageCreditTracking' ])
];

const homeSVPIndex = [
  createDictionaryEntry('internationalTransfers', [ 'glomo.account.internationalTransfers' ]),
  createDictionaryEntry('cardlessWithdrawal', [ 'glomo.account.cardlessWithdrawal' ]),
  createDictionaryEntry('cardCreditCardPayment', [ 'glomo.account.creditCardPayment' ]),
  createDictionaryEntry('transfers', [ 'glomo.account.transfers' ]),
  createDictionaryEntry('billPayments', [ 'glomo.account.billPayment' ]),
  createDictionaryEntry('rechargeTag', [ 'glomo.operations.ServicePaymentTag' ]),
  createDictionaryEntry('blackhawkPurchase', [ 'glomo.operations.blackHawkPurchase' ]),
  createDictionaryEntry('mobileTopUp', [ 'glomo.account.refillsAndPackages' ]),
  createDictionaryEntry('codicelPeerToPeerSend', [ 'glomo.account.dimoTransfer' ]),
  createDictionaryEntry('codicelAgreeAndRemoveConsent', [ 'glomo.account.dimoConsent' ]),
  createDictionaryEntry('reward', [ 'glomo.dashboard.rewards' ])
];

const homeExperiences = [
  createDictionaryEntry('reward', [ 'glomo.dashboard.rewards' ]),
  createDictionaryEntry('goals', [ 'glomo.dashboard.pfm.carouselAem' ]),
  createDictionaryEntry('expensesGroup', [ 'glomo.dashboard.experiences.expensesGroup' ]),
  createDictionaryEntry('financialEducation', [ 'glomo.dashboard.experiences.financialEducation' ]),
  createDictionaryEntry('creditScore', [ 'glomo.dashboard.bc.score' ])
];

const dictionaryFilterFutura = {
  home_nba: homeNBA,
  home_maincard: homeMainCard,
  home_smart_servicing: homeSmartServicing,
  home_frequent_actions: homeFrequentActions,
  home_financial_health: homeFinancialHealth,
  home_nbo: homeNBO,
  home_svp_index: homeSVPIndex,
  home_experiences: homeExperiences
};

const offersFlagsData = {
  '0769': {flag: 'glomo.offers.creditCardFixedPlanAPF', lda: '0769'},
  '0733': {flag: 'glomo.offers.creditCardFixedPlanPPF', lda: '0733'},
  '0732': {flag: 'glomo.offers.creditCardLoanRestructuring', lda: '0732'},
  'L|0732': {flag: 'glomo.offers.loanRestructuring', lda: 'L|0732'},
  '0739': {flag: 'glomo.offers.carLoanFixedPlan', lda: '0739'},
  '0740': {flag: 'glomo.offers.loanFixedPlan', lda: '0740'},
  '0758': {flag: 'glomo.offers.dynamicLifeInsuranceMxn', lda: '0758'},
  '0759': {flag: 'glomo.offers.dynamicLifeInsuranceUsd', lda: '0759'},
  '4025': {flag: 'glomo.offers.ocMetasegura', lda: '4025'},
  '4035': {flag: 'glomo.offers.travelInsurance', lda: '4035'},
  'NILC': {flag: 'glomo.offers.nCreditLineIncrease', lda: 'NILC'},
  '0PYP': {flag: 'glomo.financingDebit.multiPurchase', lda: '0PYP'},
  '0TDC': {flag: 'glomo.contractProductSection.ocCreditCardHolder', lda: '0TDC'},
  '0296': {flag: 'glomo.contractProductSection.ocCreditCardHolder', lda: '0296'},
  '0SKY': {flag: 'glomo.contractProductSection.ocNonPreapprovedCreditCard', lda: '0SKY'},
  '0557': {flag: 'glomo.contractProductSection.ocPayrollPortability', lda: '0557'},
  '0ASC': {flag: 'glomo.contractProductSection.ocTopCreditCard', lda: '0ASC'},
  '0788': {flag: 'glomo.account.n2AccountsPrivateZone', lda: '0788'},
  '0823': {flag: 'glomo.offers.ocCashZone', lda: '0823'},
  '0779': {flag: 'glomo.offers.ocPaymentPlanLoanRestructuring', lda: '0779'},
  '0791': {flag: 'glomo.offers.zeroPartyData', lda: '0791'},
  '0790': {flag: 'glomo.offers.accountYoung', lda: '0790'},
  '0793': {flag: 'glomo.offers.investAdvisory', lda: '0793'},
  '0795': {flag: 'glomo.offers.creditCardMgmReferral', lda: '0795'},
  '0806': {flag: 'glomo.offers.ocMortgageNonPreapproved', lda: '0806'},
  '0813': {flag: 'glomo.contractProductSection.fundOriginationOcFund', lda: '0813'},
  '0814': {flag: 'glomo.contractProductSection.mortgageTrackingV2', lda: '0814'},
  '0856': {flag: 'glomo.dashboard.mortgageCreditTracking', lda: '0856'},
  '0798': {flag: 'glomo.offers.portabilityMgmReferral', lda: '0798'},
  '0821': {flag: 'glomo.offers.cardsOnDemand', lda: '0821'},
  '0576': {flag: 'glomo.offers.cardTransactionServicingScheduledDonations', lda: '0576'},
  '0819': {flag: 'glomo.offers.contractingGoalsMinor', lda: '0819'},
  '0847': {flag: 'glomo.contractProductSection.ocSecureLoan', lda: '0847'},
  '0859': {flag: 'glomo.contractProductSection.fundsHiringOrigination', lda: '0859'},
  '0839': {flag: 'glomo.offers.onboardingBbvaTrader', lda: '0839'},
  '0850': {flag: 'glomo.offers.cardsBankingMediaBA', lda: '0850'},
  '0851': {flag: 'glomo.offers.cardsBankingMediaWS', lda: '0851'},
  '0852': {flag: 'glomo.offers.cardsBankingMediaSA', lda: '0852'},
  '0853': {flag: 'glomo.offers.cardsBankingMediaAA', lda: '0853'},
  '0854': {flag: 'glomo.offers.cardsBankingMediaBB', lda: '0854'},
  '0835': {flag: 'glomo.contractProductSection.ocPayrollPortabilityN2', lda: '0835'},
  '0822': {flag: 'glomo.offers.cardsOnDemand.AuthorizationMultiproduct', lda: '0822'},
  '0837': {flag: 'glomo.offers.profileRecipients', lda: '0837'}
};

const conditionsForOperationalSpherica = {
  spherica: {
    isSpherica: true
  },
  accounts: {
    hasAccounts: true,
    hasInternationalTransfers: true
  },
  cards: {
    hasCards: true,
    hasOperableCards: true,
    transfer: {
      hasCreditCards: true
    }
  },
  creditCardDebtPayment: {
    hasCreditCards: true
  }
};

const linkFlags = [
  {
    flags: 'glomo.dashboard.globalFinancialPosition',
    link: 'patrimonialLink'
  }
];

module.exports = {
  dashboardOperationsList,
  dashboardOperationsListMinior,
  appSettingsData,
  appSettingsDataMinior,
  operationalsIcons,
  operationalsPage,
  conditionsForOperational,
  dictionaryFilterFutura,
  offersFlagsData,
  conditionsForOperationalSpherica,
  operationalsIconsSpherica,
  linkFlags
};
