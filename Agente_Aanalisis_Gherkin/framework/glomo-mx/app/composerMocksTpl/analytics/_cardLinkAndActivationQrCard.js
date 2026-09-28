const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAppOnClickStartLevel2,
  getPageVisitWithLevel3,
  getAppStarted,
  getAppCompleted,
  getAdvancedFootprint,
  getInternalLinkWithLevel3,
  getAdvancedFootprintWithLevel3,
  addFeatureFlag
} = require('./common/_utils');
const analyticsFeatureFlag = {
  'key': 'glomo.analytics.payrollCardActivate',
  'defaultValue': true
};
const analyticsFeatureFlagErrors = {
  'key': 'glomo.analytics.payrollCardActivate.errors',
  'defaultValue': true
};
const analyticsFeatureFlagMoreInformation = {
  'key': 'glomo.analytics.payrollCardActivate.moreInformation',
  'defaultValue': true
};
const commons = {
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
};
const commonsFunnel = {
  ...commons,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.payrollActivate,
  [constants.APPLICATION_APPLICATION_NAME]: literals.commons.cardActivateQr,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
};
const commonFlowLevels = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.cardActivateQr
};
const appOnClickStart = getAppOnClickStartLevel2(
  literals.commons.account,
  literals.commons.detail,
  {
    ...commonsFunnel,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount,
    [constants.APPLICATION_STEP]: literals.commons.activateCard
  }
);
const appPageVisit = getPageVisitWithLevel3(
  `1 ${literals.commons.activateCard}`,
  {
    ...commonsFunnel,
    ...commonFlowLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount,
    [constants.APPLICATION_STEP]: `1 ${literals.commons.activateCard}`,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount
  }
);
const appStarted = (step) => getAppStarted(
  `1 ${literals.commons.activateCard}`,
  {
    ...commonsFunnel,
    ...commonFlowLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount,
    [constants.APPLICATION_STEP]: step
  }
);
const appCompleted = getAppCompleted(
  literals.commons.successfulPage,
  literals.commons.finalized,
  {
    ...commonsFunnel,
    ...commonFlowLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount,
    [constants.PRODUCT_STATE]: literals.commons.finalized
  }
);
const pageViewMoreInformation = getAdvancedFootprint({
  ...commons,
  ...commonFlowLevels,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.sections.assistantManager.moreInfo
});
const internalLinkFaqs = getInternalLinkWithLevel3(
  literals.commons.faqs,
  {
    ...commons,
    ...commonFlowLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEACTIVITY_LINK_NAME]: {
      bind: 'questionTitle'
    }
  });
const errorPageView = getAdvancedFootprintWithLevel3(literals.errors.activationNotCarriedOut,
  {
    ...commons,
    ...commonFlowLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.activationNotCarriedOut
  });
addFeatureFlag(errorPageView, analyticsFeatureFlagErrors);
[
  appOnClickStart,
  appPageVisit,
  appStarted,
  appCompleted
].forEach(item => addFeatureFlag(item, analyticsFeatureFlag));
[
  pageViewMoreInformation,
  internalLinkFaqs
].forEach(item => addFeatureFlag(item, analyticsFeatureFlagMoreInformation));

module.exports = {
  appOnClickStart,
  appPageVisit,
  appStarted,
  appCompleted,
  pageViewMoreInformation,
  internalLinkFaqs,
  errorPageView
};
