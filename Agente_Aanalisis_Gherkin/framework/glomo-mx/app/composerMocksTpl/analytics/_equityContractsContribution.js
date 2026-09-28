const LITERALS = require('./common/_literals');
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
module.exports = (CONFIG) => {


  const ANALYTICS_EQUITY_CONTRACTS_CONTRIBUTION_FEATURE_FLAG = {
    key: 'glomo.analytics.equityContractsContribution',
    defaultValue: true
  };

  const ANALYTICS_EQUITY_CONTRACTS_CONTRIBUTION_FUND_NOT_AVAILABLE_FEATURE_FLAG = {
    key: 'glomo.analytics.equityContractsContribution.fundNotAvailable',
    defaultValue: true
  };

  const ANALYTICS_EQUITY_CONTRACTS_CONTRIBUTION_CONTRACT_IS_BLOCKED_FEATURE_FLAG = {
    key: 'glomo.analytics.equityContractsContribution.contractIsBlocked',
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

  const _COMMON_PRODUCT_CONFIG = {
    ..._DYNAMIC_DATA_PRODUCT_NAME,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.investments,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.investmentFunds
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.patrimonial,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.increaseFund,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.fundsContribution,
    [CONSTANTS.USER_SEGMENT_GLOBAL]: LITERALS.commons.patrimonialSegment,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
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
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.increaseFund
  };

  const APP_ON_CLICK_START_LIST = UTILS.getOnClickStart(
    LITERALS.commons.increase,
    LITERALS.commons.information, {
      ..._COMMON_FUNNEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.contract,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.empty,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.empty

    }
  );

  const APP_ON_CLICK_START_DETAIL = UTILS.getOnClickStart(
    LITERALS.commons.increase,
    LITERALS.commons.information, {
      ..._COMMON_FUNNEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.funds,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail
    }
  );

  const APP_PAGE_VISIT = UTILS.getPageVisitWithLevel3(LITERALS.commons.oneAmount, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.trueValue
  });

  const APP_STARTED = UTILS.getStaticAppStarted(LITERALS.commons.amount, LITERALS.commons.oneAmount, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  });

  const APP_STEP_2 = UTILS.getAppStep(LITERALS.actions.appStep2, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    ..._DYNAMIC_DATA_AMOUNT,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.twoConfirm,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.twoConfirm,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  });

  const APP_COMPLETED = UTILS.getAppCompleted(LITERALS.commons.successfulPage, LITERALS.commons.contracted, {
    ..._COMMON_FUNNEL,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    ..._DYNAMIC_DATA_AMOUNT,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.contracted,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.contracted,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN
  });

  const MARK_PAGE_EQUITY_CONTRACTS_DETAIL = UTILS.getAdvancedFootprint({
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.funds,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail
  });

  const MARK_PAGE_VIEW_SIMULATION = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.simulation
  });

  const MARK_FUND_NOT_FOUND = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.fundNotAvailable,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.fundNotAvailable
  });

  const MARK_CONTRACT_IS_BLOCKED = UTILS.getAdvancedFootprint({
    ..._COMMON,
    ..._COMMON_PAGE_LEVEL_INVESTMENT,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.blockedContract,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.blockedContract
  });

  UTILS.addFeatureFlag(MARK_FUND_NOT_FOUND, ANALYTICS_EQUITY_CONTRACTS_CONTRIBUTION_FUND_NOT_AVAILABLE_FEATURE_FLAG);
  UTILS.addFeatureFlag(MARK_CONTRACT_IS_BLOCKED, ANALYTICS_EQUITY_CONTRACTS_CONTRIBUTION_CONTRACT_IS_BLOCKED_FEATURE_FLAG);

  [
    APP_ON_CLICK_START_LIST,
    APP_ON_CLICK_START_DETAIL,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED,
    MARK_PAGE_EQUITY_CONTRACTS_DETAIL,
    MARK_PAGE_VIEW_SIMULATION
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_EQUITY_CONTRACTS_CONTRIBUTION_FEATURE_FLAG));

  return {
    APP_ON_CLICK_START_LIST,
    APP_ON_CLICK_START_DETAIL,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED,
    MARK_PAGE_EQUITY_CONTRACTS_DETAIL,
    MARK_PAGE_VIEW_SIMULATION,
    MARK_FUND_NOT_FOUND,
    MARK_CONTRACT_IS_BLOCKED
  };
};
