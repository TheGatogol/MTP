module.exports = (config) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getProduct, getOnClickStart, getPageVisit, getAdvancedFootprint,
    getAppStep, getAppCompletedRaw, getAppStarted, getAnalyticFeatureFlag } = require('./common/_utils');
  const featureFlagPayrollLink = (featureFlag, analytics) => (getAnalyticFeatureFlag(featureFlag, analytics));
  const commonFunnel = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.payrollAccountLinking,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.payrollLink,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const common = {
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: literals.commons.empty,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commons = { ...commonFunnel, ...common };
  const productConfig = getProduct(literals.commons.account);
  const dynamicCommonProperties = {
    [constants.PRODUCT_PRODUCT_NAME]: {
      bind: 'name'
    }
  };
  const appOnClick = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.receivePayroll,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };
  const appOnClickStart = featureFlagPayrollLink('payrollLink', getOnClickStart(literals.commons.fromPayroll, literals.commons.information, appOnClick));
  const pageVisit = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.payrollLink,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
  };
  const appPageVisit = featureFlagPayrollLink('payrollLink', getPageVisit('1 ' + literals.commons.oneBenefits, pageVisit));
  const started = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.payrollLink,
    [constants.PAGE_PAGEINFO_LEVEL2]: '1 ' + literals.commons.oneBenefits,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.APPLICATION_STEP]: literals.commons.understood
  };
  const appPageStarted = featureFlagPayrollLink('payrollLink', getAppStarted('', started));
  const payrollLinkFootprint = (intent, level1, level2, errorPage) => {
    const obj = {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      ...common,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: intent
    };
    if (level2) {
      obj[constants.PAGE_PAGEINFO_LEVEL2] = level2;
    }
    if (errorPage) {
      obj[constants.PAGE_PAGEINFO_ERRORPAGE] = errorPage;
    }
    return featureFlagPayrollLink(errorPage ? 'payrollLink.error' : 'payrollLink', getAdvancedFootprint(obj));
  };
  const _getCurrentStep = (step, stepInfo) => {
    const objStep = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.payrollLink,
      [constants.PAGE_PAGEINFO_LEVEL2]: stepInfo,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...productConfig,
      ...dynamicCommonProperties,
      [constants.APPLICATION_STEP]: stepInfo
    };
    return featureFlagPayrollLink('payrollLink', getAppStep(step, objStep));
  };
  const completed = {
    ...commons,
    ...productConfig,
    ...dynamicCommonProperties,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.payrollLink,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended
  };
  const appCompleted = featureFlagPayrollLink('payrollLink', getAppCompletedRaw(completed));
  return {
    payrollLinkFootprint,
    appOnClickStart,
    appPageVisit,
    appPageStarted,
    _getCurrentStep,
    appCompleted
  };
};