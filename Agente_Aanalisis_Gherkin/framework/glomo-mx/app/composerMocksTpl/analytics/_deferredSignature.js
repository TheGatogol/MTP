module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const { getAppOnClickStartLevel2,
    getAppPageVisitLevel2,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel2,
    getAnalyticFeatureFlag} = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const featureFlag = 'deferredSignature';
  const LITERALS = require('./common/_literals');
  const DYNAMIC_DATA = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: {bind: 'level1'},
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: {bind: 'segmentGlobal'},
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {bind: 'globalApplication'},
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {bind: 'applicationName'}
  };
  const onClickStartPurchaseProducts = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {bind: 'globalApplication'},
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: {bind: 'segmentGlobal'},
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {bind: 'applicationName'}
  };
  const dynamicPurchaseProducts = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {bind: 'primaryCategory'},
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtype'},
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount'},
    [CONSTANTS.PRODUCT_CURRENCY]: {bind: 'currency'}
  };
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: LITERALS.commons.languageEs,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_SEGMENT_GLOBAL]: LITERALS.commons.patrimonialSegment
  };
  const COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.selfManagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };
  const FULL_DATA = {
    ...COMMON, ...COMMON_APPLICATION, ...DYNAMIC_DATA, ...dynamicPurchaseProducts
  };
  const APP_ONCLICK_START = getAppOnClickStartLevel2(LITERALS.commons.notifications,
    LITERALS.commons.detail,
    {[CONSTANTS.APPLICATION_STEP]: LITERALS.commons.notificationDetail, ...COMMON, ...COMMON_APPLICATION, ...onClickStartPurchaseProducts});
  const APP_PAGE_VISIT = getAppPageVisitLevel2(`1 ${LITERALS.commons.termsAndConditions}`, FULL_DATA);
  const APP_STARTED = getAppStartedWithLevel2(`1 ${LITERALS.commons.termsAndConditions}`,
    {...FULL_DATA, [CONSTANTS.APPLICATION_STEP]: {bind: 'step'}});
  const APP_STEP_2 = getAppStep('2', `2 ${LITERALS.commons.confirmation}`, {...FULL_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `2 ${LITERALS.commons.confirmation}`,
    [CONSTANTS.APPLICATION_STEP]: `2 ${LITERALS.commons.confirmation}`});
  const APP_STEP_3_OTP = getAppStep('3', {...FULL_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `3 ${LITERALS.commons.otp}`,
    [CONSTANTS.APPLICATION_STEP]: `3 ${LITERALS.commons.otp}`,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'}});
  const APP_COMPLETED = getAppCompletedRaw({...FULL_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.finalized,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'}});
  const ERROR = getAdvancedFootprintWithLevel2(LITERALS.errors.operationNotFinalized,
    {[CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.errors.operationNotFinalized,
      ...COMMON, ...DYNAMIC_DATA});
  [
    APP_ONCLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3_OTP,
    APP_COMPLETED
  ].forEach(item => setFeatureFlags(featureFlag, item));
  return {
    APP_ONCLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3_OTP,
    ERROR,
    APP_COMPLETED
  };
};