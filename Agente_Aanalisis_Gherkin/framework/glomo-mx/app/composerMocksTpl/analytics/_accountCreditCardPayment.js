/* eslint-disable no-use-before-define */
module.exports = CONFIG => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG = {
    key: 'glomo.analytics.accountCreditCardPayment',
    defaultValue: true
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.applicationName.creditCardPayment,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diyPayments,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.operative.creditCardPayments,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.creditCardPayment,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: LITERALS.commons.creditCards,
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };

  const STEP_DINAMIC = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'step'
    }
  };

  const DYNAMIC_DATA = {
    [CONSTANTS.APPLICATION_CURRENCY]: {
      bind: 'currency'
    },
    [CONSTANTS.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };

  const APPLICATION_TYPOLOGY = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: LITERALS.commons.ownCards
  };

  const PAGE_VIEW_CARDS =  {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.paytoCard
  };

  const PAGE_VIEW_ACCOUNTS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: `${LITERALS.commons.debtAccount} ${LITERALS.commons.pesos}`
  };

  const PAGE_VIEW_ACCOUNT_SELECT = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.accountSelection
  };

  const _getAdvancedFootprintData = (typeAnalytic)  => {
    const typeFootPrint = {
      getAdvancedFootprintPageViewCards: _getAdvancedFootPrint(PAGE_VIEW_CARDS),
      getAdvancedFootprintPageViewAccounts: _getAdvancedFootPrint(PAGE_VIEW_ACCOUNTS),
      getAdvancedFootprintPageAccountSelect: _getAdvancedFootPrint(PAGE_VIEW_ACCOUNT_SELECT)
    };
    return typeFootPrint[typeAnalytic];
  };

  const _getAdvancedFootPrint = (...data) => UTILS.getAdvancedFootprint(
    COMMON,
    ...data
  );

  const APP_PAGE_VISIT = UTILS.getPageVisit(
    `1 ${LITERALS.commons.quantityAmount}`,
    COMMON,
    APPLICATION_TYPOLOGY, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: `1 ${LITERALS.commons.quantityAmount}`,
      [CONSTANTS.APPLICATION_STEP]: `1 ${LITERALS.commons.quantityAmount}`
    }
  );

  const APP_STARTED = UTILS.getDynamicAppStarted(
    `1 ${LITERALS.commons.quantityAmount}`,
    COMMON,
    APPLICATION_TYPOLOGY,
    STEP_DINAMIC, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: `1 ${LITERALS.commons.quantityAmount}`
    }
  );

  const APP_STEP_2 = UTILS.getAppStepWithLevel3(
    2,
    `2 ${LITERALS.commons.confirmation}`,
    COMMON,
    APPLICATION_TYPOLOGY,
    DYNAMIC_DATA, {
      [CONSTANTS.APPLICATION_STEP]: `2 ${LITERALS.commons.confirmation}`,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: `2 ${LITERALS.commons.confirmation}`
    }
  );

  const APP_COMPLETED = UTILS.getAppCompleted(
    LITERALS.commons.successfulPage,
    LITERALS.commons.finalized,
    COMMON,
    APPLICATION_TYPOLOGY,
    DYNAMIC_DATA, {
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
      [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.finalized
    }
  );

  [
    _getAdvancedFootprintData,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG));

  return {
    _getAdvancedFootprintData,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED
  };
};