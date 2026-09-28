
const constants = require('./common/_constants');
const literals = require('./common/_literals');

const {
  addFeatureFlag,
  getOnClickStart,
  getAppPageVisitLevel2,
  getAppStartedWithoutLevel,
  getAppStep,
  getAppCompletedLevel2,
  getAdvancedFootprint,
  getInteractionLink,
  getDownloadLinkWithLevel2,
  getExternalLink,
  getInternalLink
} = require('./common/_utils');
const analyticsFeatureFlag = {
  analyticsFeatureFlagFunnel: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.funnel',
    'defaultValue': true
  },
  analyticsFeatureFlagHuella: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.huella',
    'defaultValue': true
  },
  analyticsFeatureFlagInteractionLink: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.interactionLink',
    'defaultValue': true
  },
  analyticsFeatureFlagExternalLink: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.externalLink',
    'defaultValue': true
  },
  analyticsFeatureFlagInternalLink: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.internalLink',
    'defaultValue': true
  },
  analyticsFeatureFlagDownloadLink: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.downloadLink',
    'defaultValue': true
  },
  analyticsFeatureFlagError: {
    'key': 'glomo.analytics.contractProductSection.fundOriginationOcFund.error',
    'defaultValue': true
  }
};

module.exports = () => {
  const pageInfo = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };

  const errorPages = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const application = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.investmentFunds,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.investmentService
  };

  const products = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.investmentFunds
  };

  const advancedFootPrint = {
    ...pageInfo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.frequentQuestions
  };

  const investmentLink = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage
  };

  const commonsStart = {
    ...pageInfo,
    ...application,
    ...products
  };

  const commonFunnel = {
    ...commonsStart,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds
  };

  const APP_ON_CLICK_START = getOnClickStart(literals.commons.investInFund, literals.commons.information, {
    ...pageInfo,
    ...application,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.APPLICATION_STEP]: literals.commons.investInFund
  });

  const appPageVisit = getAppPageVisitLevel2(`1 ${literals.commons.investInFund}`, {
    ...pageInfo,
    ...application,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.APPLICATION_STATE]: literals.commons.init
  });

  const appStarted = getAppStartedWithoutLevel({
    ...commonsStart,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: `1 ${literals.commons.investInFund}`,
    [constants.APPLICATION_STEP]: literals.commons.investmentConfirm
  });

  const setAppStep = (step, level2, data) => getAppStep(step, {
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: `${step} ${level2}`,
    [constants.APPLICATION_STEP]: `${step} ${level2}`,
    ...data
  });

  const appStepTermsAndConditions = setAppStep('2', literals.commons.termsAndConditions);

  const appStepSummary = setAppStep('3', literals.commons.summaryInvest);

  const appStepOtpModal = setAppStep('4', literals.commons.otp, {
    [constants.USER_STATE]: literals.commons.loggedIn,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'key' }
  });

  const appCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.approve, {
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'key' },
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
  });

  const modalErrors = getAdvancedFootprint({
    ...errorPages,
    ...advancedFootPrint,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'errorType' },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorType' }
  });

  const modalErrorInformation = getAdvancedFootprint({
    ...errorPages,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'errorType' },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorType' }
  });

  const FAQs = getAdvancedFootprint({
    ...advancedFootPrint
  });

  const selectAccount = getAdvancedFootprint({
    ...advancedFootPrint,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.associateAccount
  });

  const FAQsItem = getAdvancedFootprint({
    ...advancedFootPrint,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'questionTitle' }
  });

  const interactionLink = getInteractionLink(literals.commons.selectAll, {
    ...pageInfo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds,
    [constants.PAGE_PAGEINFO_LEVEL2]: `2 ${literals.commons.termsAndConditions}`
  });

  const downloadLink = getDownloadLinkWithLevel2({bind: 'documentName'}, `2 ${literals.commons.termsAndConditions}`, {
    ...pageInfo,
    [constants.APPLICATION_INTERACTION_LEVEL]: {bind: 'documentName'},
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.investmentFunds
  });

  const shareReceipt = getExternalLink({
    ...pageInfo,
    ...investmentLink,
    [constants.PAGE_PAGEACTIVITY_LINK_URL]: literals.commons.shareReceipt
  });

  const seeDocument = getInternalLink(`${literals.commons.document}s`, {
    ...pageInfo,
    ...investmentLink
  });

  const viewInvestment = getInternalLink(literals.commons.investments, {
    ...pageInfo,
    ...investmentLink
  });

  [
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStepTermsAndConditions,
    appStepSummary,
    appStepOtpModal,
    appCompleted
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagFunnel));

  [
    interactionLink
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagInteractionLink));

  [
    downloadLink
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagDownloadLink));

  [
    shareReceipt
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagExternalLink));

  [
    seeDocument,
    viewInvestment
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagInternalLink));

  [
    modalErrors,
    modalErrorInformation
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagError));

  [
    FAQs,
    selectAccount,
    FAQsItem
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagHuella));


  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStepTermsAndConditions,
    appStepSummary,
    appStepOtpModal,
    appCompleted,
    modalErrors,
    modalErrorInformation,
    FAQs,
    selectAccount,
    FAQsItem,
    interactionLink,
    downloadLink,
    seeDocument,
    shareReceipt,
    viewInvestment
  };
};
