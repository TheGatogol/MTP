module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utilsAnalytics = require('./common/_utils');
  const flagName = 'reuseOperations';
  const _getAnalyticFeatureFlag = (analyticFeature) => {
    return utilsAnalytics.getAnalyticFeatureFlag(flagName, analyticFeature);
  };
  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'frequent operation',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.performFrequentTransfer,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN
  };
  const PAGE_DYNAMICS_DATA = {
    [CONSTANTS.APPLICATION_STEP]: { bind: 'aplicationStep' },
    [CONSTANTS.USER_SEGMENT_GLOBAL]: { bind: 'segmentGlobal' },
    [CONSTANTS.APPLICATION_FULLFILMENT]: { bind: 'fulfillmentModel' },
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [CONSTANTS.APPLICATION_PROCESS]: { bind: 'process' },
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: { bind: 'primaryCategory' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtype' },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' }
  };
  const pageInfoCommonLevels = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.transfers
  };
  const pageInfoPageintentCommon = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.operationReused
  };
  const stepText = LITERALS.commons.reuseOperationsApp.substring(0, 20);
  const APP_ONCLICK_START = _getAnalyticFeatureFlag(utilsAnalytics.getOnClickStart(stepText, LITERALS.commons.information, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.transactions,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.commons.detailMovements,
    [CONSTANTS.APPLICATION_STEP]: stepText
  }));
  const stepTextList = 'reutilizar operacion ultimas transferencias';
  const appOnClickStartList = _getAnalyticFeatureFlag(utilsAnalytics.getOnClickStart(stepTextList, LITERALS.commons.information, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoCommonLevels,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 ' + LITERALS.commons.destinityAccount
  }));
  const appOnClickStartListModal = _getAnalyticFeatureFlag(utilsAnalytics.getOnClickStart(stepTextList, LITERALS.commons.information, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoCommonLevels,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.lastTransfers
  }));
  const APP_PAGE_VISIT = _getAnalyticFeatureFlag(utilsAnalytics.getPageVisitWithLevel3('1 ' + LITERALS.commons.confirmation, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoPageintentCommon,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 ' + LITERALS.commons.confirmation,
    [CONSTANTS.APPLICATION_STEP]: '1 ' + LITERALS.commons.confirmation
  }));
  const appPageVisitList = _getAnalyticFeatureFlag(utilsAnalytics.getPageVisitWithLevel3('1 ' + LITERALS.commons.confirmation, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoPageintentCommon,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.transfers,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 ' + LITERALS.commons.confirmation,
    [CONSTANTS.APPLICATION_STEP]: '1 ' + LITERALS.commons.confirmation
  }));
  const APP_STARTED = _getAnalyticFeatureFlag(utilsAnalytics.getAppStarted('1 ' + LITERALS.commons.confirmation, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoPageintentCommon
  }));
  const APP_STEP_2 = _getAnalyticFeatureFlag(utilsAnalytics.getAppStepWithLevel3(2, '2 ' + LITERALS.commons.otp, {
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoPageintentCommon
  }));
  const APP_COMPLETED = _getAnalyticFeatureFlag(utilsAnalytics.getAppCompletedRaw({
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    ...pageInfoPageintentCommon,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.ended,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.ended,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: ''
  }));
  const _getAdvancedFootprint = (level2, level3) =>  {
    const analyticStep = utilsAnalytics.getAdvancedFootprintWithLevel3(level3, {
      ...PAGE_COMMON,
      ...pageInfoPageintentCommon,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: '',
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: '',
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: '',
      [CONSTANTS.APPLICATION_FULLFILMENT]: '',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      [CONSTANTS.APPLICATION_CURRENCY]: '',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.signToken
    });
    return utilsAnalytics.getAnalyticFeatureFlag(flagName, analyticStep);
  };
  return {
    APP_ONCLICK_START,
    appOnClickStartList,
    appOnClickStartListModal,
    APP_PAGE_VISIT,
    appPageVisitList,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED,
    _getAdvancedFootprint
  };
};
