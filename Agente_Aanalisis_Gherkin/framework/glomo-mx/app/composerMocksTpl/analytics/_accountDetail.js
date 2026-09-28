module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');
  const _setFeatureFlags = (analytic, featureFlag) => (utils.addFeatureFlag(analytic, featureFlag));

  const operativesStandin = {
    transfer: {
      [constants.PAGE_PAGEINFO_PROJECTNAME]: {
        bind: 'pagePageInfoProjectName'
      }
    }
  };

  const bindLiterals = {
    PROJECT_NAME_GLOMO: literals.sections.glomo,
    PROJECT_NAME_GLOMO_ALWAYSON: literals.sections.glomoAlwaysOn
  };

  const operatives = {
    transfer: {
      globalApplication: literals.globalApplication.transfers,
      applicationName: literals.sections.transfers,
      primaryCategory: literals.commons.account,
      fulfillmentOnOff: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff,
      account_detail: literals.commons.account_detail
    },
    billPayment: {
      globalApplication: literals.globalApplication.billPayments,
      applicationName: literals.applicationName.billPayments,
      primaryCategory: literals.commons.account
    },
    cardlessWithdrawal: {
      globalApplication: literals.globalApplication.cardlessWithdrawal,
      applicationName: literals.applicationName.cardlessWithdrawal,
      primaryCategory: literals.commons.cards
    },
    accountCreditCardPayment: {
      globalApplication: literals.globalApplication.creditCardPayment,
      applicationName: literals.applicationName.creditCardPayment,
      primaryCategory: literals.commons.cards
    },
    refillsAndPackages: {
      globalApplication: literals.globalApplication.refillsAndPackages,
      applicationName: literals.applicationName.refillsAndPackages,
      primaryCategory: literals.commons.account
    },
    statements: {
      globalApplication: literals.globalApplication.accountStatements,
      applicationName: literals.applicationName.accountStatements,
      primaryCategory: literals.commons.account
    },
    changePayroll: {
      globalApplication: literals.globalApplication.payrollPortability,
      applicationName: literals.applicationName.payrollPortability,
      primaryCategory: literals.commons.account
    },
    codi: {
      globalApplication: literals.globalApplication.codi,
      applicationName: literals.applicationName.codi,
      primaryCategory: literals.commons.account
    },
    internationalTransfers: {
      globalApplication: literals.globalApplication.internationalTransfers,
      applicationName: literals.applicationName.internationalTransfers,
      primaryCategory: literals.commons.account,
      fulfillmentOnOff: literals.commons.online,
      account_detail: literals.commons.goToInternationalTransfers
    },
    checksSection: {
      globalApplication: literals.globalApplication.checksManagement,
      applicationName: literals.applicationName.checksManagement,
      primaryCategory: literals.commons.account
    },
    levelUp: {
      globalApplication: literals.globalApplication.levelUp,
      applicationName: literals.applicationName.levelUp,
      primaryCategory: literals.commons.account
    },
    editAlias: {
      globalApplication: literals.globalApplication.editAlias,
      applicationName: literals.applicationName.editAlias,
      primaryCategory: literals.commons.account
    },
    globalOperativeTransfers: {
      globalApplication: literals.operative.transfers,
      applicationName: literals.sections.transfers,
      primaryCategory: literals.commons.account,
      fulfillmentOnOff: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff,
      account_detail: literals.commons.startTransfer
    },
    sendMoney: {
      globalApplication: literals.globalApplication.sendMoney,
      applicationName: literals.commons.sendMoney,
      primaryCategory: literals.commons.account,
      account_detail: literals.commons.detailAccountSendMoney
    }
  };
  const COMMON = {
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const commonAlert = {
    [constants.USER_PROFILE_ID]: {
      bind: 'profileID'
    },
    [constants.USER_AGE]: {
      bind: 'userAge'
    },
    [constants.USER_GENDER]: {
      bind: 'userGender'
    }
  };

  const MORE_INFO = {
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail
  };
  const ERROR_ACCOUNT = {
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.errors.accounts
  };
  const PROACTIVITY_CAMPAIGNS = {
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'campaigns'
    }
  };
  const internationalTransfers = {
    [constants.APPLICATION_TYPOLOGY]: literals.commons.ownAccounts,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.USER_DEVICE_MOBILE]: literals.commons.yes
  };
  const internationalTransfersCvCurrency = {
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn + '/' + literals.commons.fulfillmentOff,
    [constants.USER_DEVICE_MOBILE]: literals.commons.yes
  };
  const operative = (op) => {
    return Object.assign(COMMON, {
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
      [constants.APPLICATION_GLOBAL_APPLICATION]: operatives[op].globalApplication,
      [constants.APPLICATION_APPLICATION_NAME]: operatives[op].applicationName,
      [constants.APPLICATION_STEP]: literals.commons.account_detail,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: operatives[op].primaryCategory,
      [constants.APPLICATION_FULLFILMENT]: operatives[op].fulfillmentOnOff,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: {
        bind: 'productSubType'
      },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
        bind: 'productName'
      }
    });
  };
  const transfer = [
    literals.account,
    literals.commons.information
  ];
  const boostInternationalTransfers = [
    literals.commons.goToInternationalTransfers,
    literals.commons.information,
    internationalTransfers
  ];
  const boostInternationalTransfersCVCurrency = [
    literals.commons.startTransfer,
    literals.commons.information,
    internationalTransfersCvCurrency
  ];
  const _getOnClickStart = (op, isAnInternationalTransfer = false) => {
    let params = transfer;
    if (isAnInternationalTransfer) {
      params = {
        internationalTransfers: boostInternationalTransfers,
        globalOperativeTransfers: boostInternationalTransfersCVCurrency
      } [op];
    }
    const _analytic = utils.getOnClickStart(...params, operative(op), {...operativesStandin?.[op]});
    utils.getAnalyticFeatureFlag(op, _analytic);
    return _analytic;
  };

  const appOnClickStartButtonMessage = () => {
    const buttonMessageAnalytic = utils.getOnClickStartLink('', literals.commons.information, {
      ...COMMON,
      ...commonAlert,
      [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.actions.updateNow
    });
    return utils.getAnalyticFeatureFlag('glomo.analytics.accounts.productDetailUpgradeCustomer', buttonMessageAnalytic, true);
  };

  const alertView = () => {
    const alertViewAnalytic = utils.getAdvancedFootprint({
      ...COMMON,
      ...commonAlert
    });
    return utils.getAnalyticFeatureFlag('glomo.analytics.accounts.productDetailUpgradeCustomerError', alertViewAnalytic, true);
  };

  const _getAdvancedFootPrint = (...data) => utils.getAdvancedFootprint(COMMON, ...data);
  const accountPageViewWithProactivityCampaigns = _getAdvancedFootPrint(PROACTIVITY_CAMPAIGNS, MORE_INFO);
  const accountPageViewWithoutProactivityCampaigns = _getAdvancedFootPrint();
  const accountErrorPageView = utils.getAdvancedFootprintError(
    literals.errors.accounts,
    COMMON,
    ERROR_ACCOUNT
  );
  const moreInfoPageView = _getAdvancedFootPrint(MORE_INFO);

  _setFeatureFlags(accountPageViewWithProactivityCampaigns, {
    'key': 'glomo.analytics.account',
    'defaultValue': true
  });
  _setFeatureFlags(accountErrorPageView, {
    'key': 'glomo.analytics.accountError',
    'defaultValue': true
  });
  _setFeatureFlags(accountPageViewWithoutProactivityCampaigns, {
    'key': 'glomo.analytics.account.withoutProactivityJourney',
    'defaultValue': false
  });
  _setFeatureFlags(moreInfoPageView, {
    'key': 'glomo.analytics.accountMoreInfo',
    'defaultValue': true
  });
  _setFeatureFlags(_getOnClickStart('internationalTransfers', true), {
    'key': 'glomo.analytics.currencyMxnOpinator',
    'defaultValue': true
  });
  _setFeatureFlags(_getOnClickStart('globalOperativeTransfers', true), {
    'key': 'glomo.analytics.currencyUsdOpinator',
    'defaultValue': true
  });
  return {
    accountPageViewWithProactivityCampaigns,
    accountPageViewWithoutProactivityCampaigns,
    accountErrorPageView,
    moreInfoPageView,
    bindLiterals,
    appOnClickStartButtonMessage,
    alertView,
    _getOnClickStart
  };
};
