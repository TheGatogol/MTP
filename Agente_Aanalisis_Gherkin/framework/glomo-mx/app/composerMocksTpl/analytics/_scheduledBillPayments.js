module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getAppPageVisitLevel2,
    getAppCompletedLevel2,
    getAnalyticFeatureFlag,
    getAppStartedWithLevel2,
    getAppStepLevel2AppOffer,
    getAppOnClickStartLevel3,
    getInternalLinkWithLevel2,
    getAnalyticFeatureFlagError,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintErrorLevel2 } = require('./common/_utils');
  const flagName = 'scheduledBillPayments';
  const flagFootprint = 'scheduledBillPaymentsFootprint';
  const flagNameError = 'scheduledBillPaymentsError';
  const pageCommonFootprint = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const pageCommon = {
    ...pageCommonFootprint,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.scheduleServicePayment,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.scheduledBillPayments
  };
  const commonsDinamicsData = {
    [constants.APPLICATION_TYPOLOGY]: {bind: 'nameService'},
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {bind: 'primaryCategory'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: {bind: 'productSubType'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {bind: 'productName'},
    [constants.PRODUCT_CURRENCY]: {bind: 'currency'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'amount'}
  };
  const appOnclickStartSuccesPage = (level1, level2, level3) => {
    const analytics = {
      ...pageCommon
    };
    return getAnalyticFeatureFlag(flagName, getAppOnClickStartLevel3(level1, level2, level3, analytics));
  };
  const appOnclickStartScheduledBillPayments = (level1, level2, level3, textStep, pageIntent) => {
    const analytics = {
      ...pageCommon,
      ...pageCommonFootprint,
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    };
    return getAnalyticFeatureFlag(flagName, getOnClickStart(textStep, pageIntent, analytics));
  };
  const appPageVisitSchueduledBillPayments = level2 => {
    const analytics = {
      ...pageCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment,
      [constants.APPLICATION_TYPOLOGY]: {bind: 'nameService'}
    };
    return getAnalyticFeatureFlag(flagName, getAppPageVisitLevel2(level2, analytics));
  };
  const appStartedScheduledBillPayments = level2 => {
    const analytics = {
      ...pageCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment,
      [constants.APPLICATION_TYPOLOGY]: {bind: 'nameService'},
      [constants.APPLICATION_STEP]: {bind: 'appStartedStep'}
    };
    return getAnalyticFeatureFlag(flagName, getAppStartedWithLevel2(level2, analytics));
  };
  const appStepServiceDetailScheduledBillPayments = (numberStep, level2) => {
    const analytics = {
      ...pageCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment,
      [constants.APPLICATION_TYPOLOGY]: {bind: 'nameService'}
    };
    return getAnalyticFeatureFlag(flagName, getAppStepLevel2AppOffer(numberStep, level2, '', analytics));
  };
  const appStepScheduledBillPayments = (numberStep, level2) => {
    const analytics = {
      ...pageCommon,
      ...commonsDinamicsData,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment
    };
    return getAnalyticFeatureFlag(flagName, getAppStepLevel2AppOffer(numberStep, level2, '', analytics));
  };
  const appStepScheduledBillPaymentsOTP = (numberStep, level2) => {
    const analytics = {
      ...pageCommon,
      ...commonsDinamicsData,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
      [constants.APPLICATION_PROCESS]: {bind: 'applicationProcess'}
    };
    return getAnalyticFeatureFlag(flagName, getAppStepLevel2AppOffer(numberStep, level2, '', analytics));
  };
  const appCompletedScheduledBillPayments = (level2, state) => {
    const analytics = {
      ...pageCommon,
      ...commonsDinamicsData,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
      [constants.PRODUCT_STATE]: state,
      [constants.APPLICATION_PROCESS]: {bind: 'applicationProcess'},
      [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'}
    };
    return getAnalyticFeatureFlag(flagName, getAppCompletedLevel2(level2, state, analytics));
  };
  const appPageViewShceuledBillPayments = level2 => {
    const analytics = {
      ...pageCommonFootprint,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment
    };
    return getAnalyticFeatureFlag(flagFootprint, getAdvancedFootprintWithLevel2(level2, analytics));
  };
  const appInternalLinkScheduledBillPaymentsService = level2 => {
    const analytics = {
      ...pageCommonFootprint,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.scheduleServicePayment
    };
    return getAnalyticFeatureFlag(flagFootprint, getInternalLinkWithLevel2({bind: 'textLinkName'}, level2, analytics));
  };
  const appErrorPayments = errorName => {
    const analytics = {
      ...pageCommonFootprint
    };
    return getAnalyticFeatureFlagError(flagNameError, getAdvancedFootprintErrorLevel2(literals.commons.scheduleServicePayment, errorName, analytics));
  };
  return {
    appOnclickStartSuccesPage,
    appOnclickStartScheduledBillPayments,
    appStartedScheduledBillPayments,
    appInternalLinkScheduledBillPaymentsService,
    appPageVisitSchueduledBillPayments,
    appCompletedScheduledBillPayments,
    appPageViewShceuledBillPayments,
    appStepScheduledBillPaymentsOTP,
    appStepServiceDetailScheduledBillPayments,
    appStepScheduledBillPayments,
    appErrorPayments
  };
};
