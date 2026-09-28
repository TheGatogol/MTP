module.exports = () => {
  const constants = require('./common/_constants');
  const {
    getAnalyticFeatureFlag,
    getAppStarted,
    getPageVisitWithLevel3,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel3,
    getInternalLinkWithLevel3 } = require('./common/_utils');
  const { commons, sections, applicationName, currencies, operative, globalApplication: { frequentOperation } } = require('./common/_literals');

  const featureFlag = 'frequent.operations';
  const _setFeatureFlag = (analytic) => getAnalyticFeatureFlag(featureFlag, analytic);

  const commonFootprint = {
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons
  };

  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: frequentOperation,
    [constants.APPLICATION_APPLICATION_NAME]: applicationName.performFrequentOperation,
    [constants.APPLICATION_APPLICATION_TYPE]: commons.operative,
    [constants.APPLICATION_FULLFILMENT]: commons.online
  };

  const appOnClickStartData = {
    ...commonApplication,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };

  const commonAppOnClickStartData = {
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    ...commonFootprint,
    ...appOnClickStartData,
    [constants.APPLICATION_TYPOLOGY]: { bind: 'journey' },
    [constants.APPLICATION_APPLICATION_NAME]: applicationName.performFrequentOperation,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: commons.savingAccounts
  };

  const pageDynamicsData = {
    ...commonAppOnClickStartData,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' }
  };

  const appPageVisit = _setFeatureFlag(getPageVisitWithLevel3('1 ' + commons.confirmation, {
    ...pageDynamicsData,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'frequentOperation' },
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + commons.confirmation,
    [constants.APPLICATION_STEP]: '1 ' + commons.confirmation
  }));

  const appStarted = _setFeatureFlag(getAppStarted('1 ' + commons.confirmation, {
    ...pageDynamicsData,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.APPLICATION_STEP]: { bind: 'applicationStep' },
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'frequentOperation' },
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + commons.confirmation
  }));

  const appInternalLink = _setFeatureFlag(getInternalLinkWithLevel3('1 ' + commons.confirmation, {
    ...commonFootprint,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'frequentOperation' },
    [constants.PAGE_PAGEACTIVITY_LINK_NAME]: { bind: 'applicationStep' }
  }));

  const appPageViewOtp = _setFeatureFlag(getAdvancedFootprintWithLevel3(commons.otp, {
    ...commonFootprint,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: operative.frequentOperations,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'frequentOperation' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.PRODUCTS_ATTRIBUTES]: [],
    [constants.APPLICATION_APPLICATION]: []
  }));

  const appCompleted = _setFeatureFlag(getAppCompletedRaw({
    ...pageDynamicsData,
    [constants.APPLICATION_CURRENCY]: currencies.MXN,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'frequentOperation' },
    [constants.PAGE_PAGEINFO_LEVEL3]: commons.successfulPage,
    [constants.APPLICATION_STEP]: commons.successfulPage,
    [constants.APPLICATION_STATE]: commons.ended,
    [constants.PRODUCT_STATE]: commons.ended,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
  }));

  return {
    appPageVisit,
    appStarted,
    appInternalLink,
    appPageViewOtp,
    appCompleted
  };
};
