const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAppOnClickStartLevel,
  getPageVisit,
  getAppStep,
  getAppStartedWithLevel2,
  getAppCompletedLevel2,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintErrorLevel2
} = require('./common/_utils');

module.exports = () => {
  const featureFlagNpaLoan = 'npaNewConsumerLoan';
  const featureFlagNpaLoanErrors = 'npaNewConsumerLoan.errors';

  const commons = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.npaConsumerLoan.consumerLoanNonPreApproved,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commonData = {
    ...commons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.nonPreApprovedConsumerLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.consumerLoanNonPreApproved,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan
  };

  const commonStep = (level2, data = {}) => ({
    ...data,
    ...commonData,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_STEP]: level2
  });

  const getOnClickStartNpa = (data = {}) => ({
    ...data,
    ...commons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.nonPreApprovedConsumerLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.consumerLoanNonPreApproved,
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.APPLICATION_STEP]: literals.commons.interestedOportunities,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.card,
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.loans,
    [constants.INTERNAL_CAMPAIGN_SITE_ACTION_NAME]: { bind: 'siteActionName' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: literals.empty,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan
  });

  const getAppCompletedNpaLoan = (customField, data = {}) => ({
    ...data,
    ...commonData,
    [constants.APPLICATION_DECLINED_REASON]: { bind: 'declined' },
    ...(customField ? { [constants.APPLICATION_CUSTOM_FIELDS]: customField } : {})
  });

  const appOnClickStart = getAnalyticFeatureFlag(featureFlagNpaLoan, getAppOnClickStartLevel(getOnClickStartNpa()));

  const funnelMap = {
    appPageVisit: () =>getPageVisit('1 ' + literals.commons.oneBenefits, {[constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue, ...commonData}),
    appStarted: () => getAppStartedWithLevel2('1 ' + literals.commons.oneBenefits, {[constants.APPLICATION_STEP]: literals.commons.continue, ...commonData}),
    appStep2: () => getAppStep('2', commonStep('2 ' + literals.npaConsumerLoan.selectAuthorization)),
    appStep3: () => getAppStep('3', commonStep('3 ' + literals.npaConsumerLoan.spiner, {[constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken})),
    appCompleted: () => getAppCompletedLevel2(literals.commons.successfulPage, { bind: 'state'}, getAppCompletedNpaLoan({ bind: 'customField' }))
  };

  const footPrintMap = {
    appPageVisit: () => getAdvancedFootprintWithLevel2('2 ' + literals.npaConsumerLoan.selectAuthorization, {[constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level'}, ...commons}),
    appPageVisitOtp: () => getAdvancedFootprintWithLevel2(literals.commons.otp, {[constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken, ...commons })
  };

  const errorMap = {
    operationError: () => getAdvancedFootprintErrorLevel2(literals.npaConsumerLoan.consumerLoanNonPreApproved, literals.errors.operationError, { ...commons, [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information })
  };

  const getNpaConsumerLoanFunnel = (param) => getAnalyticFeatureFlag(featureFlagNpaLoan, funnelMap[param]?.());
  const getNpaConsumerLoanFootprint = (param) => getAnalyticFeatureFlag(featureFlagNpaLoan, footPrintMap[param]?.());
  const getNpaConsumerLoanError = (param) => getAnalyticFeatureFlag(featureFlagNpaLoanErrors, errorMap[param]?.());

  return {
    APP_ON_CLICK_START: appOnClickStart,
    getNpaConsumerLoanFunnel,
    getNpaConsumerLoanFootprint,
    getNpaConsumerLoanError
  };
};
