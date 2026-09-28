module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getPageVisit,
    getStaticAppStarted,
    getAppStep,
    getAdvancedFootprint,
    getAdvancedFootprintError,
    getDownloadLinkWithLevel2,
    getAnalyticFeatureFlag,
    getAppCompletedRaw
  } = require('./common/_utils');
  const common = {
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: '',
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.deferredPurchases,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.accountStatement,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationAccountStatement,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.appNameAccountStatement,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard
  };
  const commonAdvanceFootprint = {
    ...common,
    [constants.APPLICATION_STEP]: '',
    [constants.APPLICATION_GLOBAL_APPLICATION]: '',
    [constants.APPLICATION_APPLICATION_NAME]: '',
    [constants.APPLICATION_APPLICATION_TYPE]: '',
    [constants.APPLICATION_FULLFILMENT]: '',
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: '',
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: ''
  };
  const clickStartFromDetails = getOnClickStart(literals.commons.seeAccountStatement, literals.commons.information, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  });
  const clickStartFromOperatives = getOnClickStart(literals.commons.seeAccountStatement, literals.commons.information, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.operative,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  });
  const pageVisit = getPageVisit(`1 ${literals.flexibleFinancing.consultationPeriod}`, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: `1 ${literals.flexibleFinancing.consultationPeriod}`
  });
  const appStarted = (information) => {
    const startedData = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL5]: `1 ${literals.flexibleFinancing.consultationPeriod}`
    };
    return getStaticAppStarted(information, literals.flexibleFinancing.deferredPurchases, startedData);
  };

  const appStep = getAppStep('2', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: `2 ${literals.commons.otp}`,
    [constants.APPLICATION_STEP]: `2 ${literals.commons.otp}`,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });

  const appCompleted = getAppCompletedRaw({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
    [constants.APPLICATION_OPERATION_NUMBER]: ''
  });
  const linkUrl = getDownloadLinkWithLevel2(literals.flexibleFinancing.linkUrl, '', {
    ...commonAdvanceFootprint,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.successfulPage
  });
  const emptyResults = getAdvancedFootprint({
    ...commonAdvanceFootprint,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.flexibleFinancing.noStatements
  });
  const operationError = getAdvancedFootprintError(literals.errors.operationError, {
    ...commonAdvanceFootprint,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.errors.operationError
  });
  [
    clickStartFromDetails,
    clickStartFromOperatives,
    pageVisit,
    appStarted,
    appStep,
    appCompleted,
    linkUrl,
    emptyResults
  ].forEach(item => getAnalyticFeatureFlag('monthlyStatementEnquiry', item));
  getAnalyticFeatureFlag('monthlyStatementEnquiry.error', operationError);
  return {
    clickStartFromDetails,
    clickStartFromOperatives,
    pageVisit,
    appStarted,
    appStep,
    appCompleted,
    linkUrl,
    emptyResults,
    operationError
  };
};
