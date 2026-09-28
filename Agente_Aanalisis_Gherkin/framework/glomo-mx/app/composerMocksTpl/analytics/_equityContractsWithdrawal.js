const LITERALS = require('./common/_literals');
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
module.exports = (CONFIG) => {

  const ANALYTICS_EQUITY_CONTRACTS_WITHDRAWAL_FEATURE_FLAG = {
    key: 'glomo.analytics.equityContractsWithdrawal',
    defaultValue: true
  };

  const ANALYTICS_EQUITY_CONTRACTS_WITHDRAWAL_FUND_NOT_AVAILABLE_FEATURE_FLAG = {
    key: 'glomo.analytics.equityContractsWithdrawal.fundNotAvailable',
    defaultValue: true
  };

  const ANALYTICS_EQUITY_CONTRACTS_WITHDRAWAL_CONTRACT_IS_BLOCKED_FEATURE_FLAG = {
    key: 'glomo.analytics.equityContractsWithdrawal.contractIsBlocked',
    defaultValue: true
  };


  const _DYNAMIC_DATA_TYPOLOGY = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const _DYNAMIC_DATA_PROCESS = {
    [CONSTANTS.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    }
  };

  const _DYNAMIC_DATA_AMOUNT = {
    [CONSTANTS.APPLICATION_AMOUNT]: {
      bind: 'amount'
    }
  };

  const _DYNAMIC_DATA_PRODUCT_NAME = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };

  const _DYNAMIC_DATA_APPLICATION_STEP = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'applicationStep'
    }
  };

  const _DYNAMIC_DATA_OFFER = {
    [CONSTANTS.APPLICATION_OFFER]: {
      bind: 'offer'
    }
  };

  const _COMMON_PRODUCT_CONFIG = {
    ..._DYNAMIC_DATA_PRODUCT_NAME,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.investments,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.investmentFunds
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.patrimonial,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.fundSale,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.fundsWithdrawal,
    [CONSTANTS.USER_SEGMENT_GLOBAL]: LITERALS.commons.patrimonialSegment,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado
  };

  const _COMMON_FUNNEL = {
    ..._COMMON,
    ..._COMMON_PRODUCT_CONFIG,
    ..._DYNAMIC_DATA_TYPOLOGY,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.empty
  };

  const _COMMON_PAGE_LEVEL_INVESTMENT = {
    ..._DYNAMIC_DATA_PROCESS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.fundSale
  };

  const APP_ON_CLICK_START_LIST = UTILS.getOnClickStart(LITERALS.commons.withdraw, LITERALS.commons.information, {
    ..._COMMON_FUNNEL,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.contract,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.empty,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.empty
  });

  const APP_ON_CLICK_START_DETAIL = UTILS.getOnClickStart(
    LITERALS.commons.withdraw,
    LITERALS.commons.information, {
      ..._COMMON_FUNNEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.funds,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail
    }
  );

  const APP_PAGE_VISIT = UTILS.getPageVisitWithLevel3(LITERALS.commons.oneTypeOfSale, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.trueValue
  });

  const APP_STARTED = UTILS.getAppStarted(LITERALS.commons.oneTypeOfSale, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    ..._DYNAMIC_DATA_APPLICATION_STEP,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  });

  const APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_INVESTMENT,
      ..._DYNAMIC_DATA_AMOUNT,
      ..._DYNAMIC_DATA_OFFER,
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.twoConfirm,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.twoConfirm,
      [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
    }
  };

  const APP_COMPLETED = UTILS.getAppCompleted(LITERALS.commons.successfulPage, LITERALS.commons.finalized, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    ..._DYNAMIC_DATA_OFFER,
    ..._DYNAMIC_DATA_AMOUNT,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.finalized,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.finalized,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN
  });

  const MARK_PAGE_VIEW_SIMULATION = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.simulation
  });

  const MARK_PAGE_VIEW_INPUT = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.fundSale,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.amount
  });

  const MARK_FUND_NOT_FOUND = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.fundNotAvailable,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.fundNotAvailable
  });

  const MARK_CONTRACT_IS_BLOCKED = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.blockedContract,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.blockedContract
  });

  UTILS.addFeatureFlag(MARK_FUND_NOT_FOUND, ANALYTICS_EQUITY_CONTRACTS_WITHDRAWAL_FUND_NOT_AVAILABLE_FEATURE_FLAG);
  UTILS.addFeatureFlag(MARK_CONTRACT_IS_BLOCKED, ANALYTICS_EQUITY_CONTRACTS_WITHDRAWAL_CONTRACT_IS_BLOCKED_FEATURE_FLAG);

  [
    APP_ON_CLICK_START_LIST,
    APP_ON_CLICK_START_DETAIL,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED,
    MARK_PAGE_VIEW_INPUT,
    MARK_PAGE_VIEW_SIMULATION
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_EQUITY_CONTRACTS_WITHDRAWAL_FEATURE_FLAG));

  return {
    APP_ON_CLICK_START_LIST,
    APP_ON_CLICK_START_DETAIL,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED,
    MARK_PAGE_VIEW_INPUT,
    MARK_PAGE_VIEW_SIMULATION,
    MARK_FUND_NOT_FOUND,
    MARK_CONTRACT_IS_BLOCKED
  };
};
