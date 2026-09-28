/* eslint-disable no-undef */
module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getAdvancedFootprintError,
    getAppCompletedRaw,
    getAppStep,
    getOnClickStart,
    getPageVisitRaw,
    getAppStarted
  } = require('./common/_utils');
  const analyticsFeatureFlag = {
    key: 'glomo.analytics.monthlyStatementEnquiryFund',
    defaultValue: true
  };
  const analyticsFlagError = {
    key: 'glomo.analytics.monthlyStatementEnquiryFund.error',
    defaultValue: true
  };

  const common = {
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: '',
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.patrimonial,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.APPLICATION_GLOBAL_APPLICATION]:
      literals.globalApplication.accountStatementsFunds,
    [constants.APPLICATION_APPLICATION_NAME]:
      literals.applicationName.accountStatementsFunds,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.investmentsFunds
  };
  const commonPages = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investments,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.funds,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.accountStatement,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'hadStatements'}
  };
  const errorPage = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investments,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.funds,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.accountStatement,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.errors.operationError,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.patrimonial,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy
  };
  const clickOperators = getOnClickStart('detalle', 'information', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'contrato',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: 'detalle'
  });
  const pageVisit = getPageVisitRaw({
    ...commonPages,
    [constants.PAGE_PAGEINFO_LEVEL4]: '1 seleccion periodo',
    [constants.APPLICATION_STEP]: '1 seleccion periodo'
  });
  const appStarted = getAppStarted(literals.commons.accountStatement, {
    ...commonPages,
    [constants.PAGE_PAGEINFO_LEVEL4]: '1 seleccion periodo',
    [constants.APPLICATION_STEP]: {
      bind: 'step'
    }
  });
  const appStepOtp = getAppStep('2', {
    ...commonPages,
    [constants.APPLICATION_STEP]: '2 otp',
    [constants.PAGE_PAGEINFO_LEVEL4]: '2 otp',
    [constants.USER_SEGMENT_PROFILE]: 'con estados de cuenta',
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });
  const appCompleted = getAppCompletedRaw({
    ...commonPages,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });
  const operationError = getAdvancedFootprintError((error = literals.errors.operationError),
    {
      ...errorPage
    });
  [
    clickOperators,
    pageVisit,
    appStarted,
    appStepOtp,
    appCompleted,
    operationError
  ].forEach((item) => addFeatureFlag(item, analyticsFeatureFlag));
  addFeatureFlag(operationError, analyticsFlagError);
  return {
    clickOperators,
    pageVisit,
    appStarted,
    appStepOtp,
    appCompleted,
    operationError
  };
};