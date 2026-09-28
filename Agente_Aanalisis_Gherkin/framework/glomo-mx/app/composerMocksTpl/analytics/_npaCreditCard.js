const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getOnClickStart,
  getPageVisitWithLevel3,
  getStaticAppStarted,
  getAppStepWithLevel3,
  getAppCompleted,
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprintWithLevel4,
  getInternalLinkWithPageActivityLevel3,
  getError
} = require('./common/_utils');

module.exports = () => {
  const featureFlagNpa = 'ocNonPreapprovedCreditCard';
  const featureFlagNpaErrors = 'ocNonPreapprovedCreditCard.errors';

  const _setFeatureFlag = (analytic, featureFlag = featureFlagNpa) => (getAnalyticFeatureFlag(featureFlag, analytic));

  const commons = {
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.npaCreditCard.creditCardOneClickNonPreApproved,
    [constants.USER_SEGMENT_PROFILE]: literals.commons.nonPreApprovedProcess
  };

  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.npaCreditCard.nonPreApprovedCreditCardHolder,
    [constants.APPLICATION_APPLICATION_NAME]: literals.npaCreditCard.creditCardOneClickNonPreApproved,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online
  };

  const commonStep = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
    ...commons,
    ...commonApplication
  };

  const getOnClickStartNpa = (data = {}) => ({
    ...data,
    ...commonApplication,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_SEGMENT_PROFILE]: literals.commons.nonPreApprovedProcess,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.card,
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteAction' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.cards,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: literals.empty
  });

  const getAppCompletedNpa = (data = {}) => ({
    ...data,
    ...commonStep,
    [constants.PRODUCT_STATE]: {bind: 'state'},
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' }
  });

  const dynamicCustomFields = () => ({
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customField' },
    [constants.APPLICATION_OFFER]: { bind: 'benefit' }
  });

  const _getNpaCreditCardFunnel = (param) => {
    const typeFunnel = {
      appOnclickStart: getOnClickStart(literals.commons.interestedOportunities, literals.commons.information, getOnClickStartNpa(dynamicCustomFields())),
      appPageVisit: getPageVisitWithLevel3('1 ' + literals.commons.oneBenefits, {[constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue, ...commonStep}, dynamicCustomFields()),
      appStarted: getStaticAppStarted({bind: 'text'}, '1 ' + literals.commons.oneBenefits, commonStep, dynamicCustomFields()),
      appStep2: getAppStepWithLevel3('2', '2 ' + literals.commons.dataQuery, commonStep, dynamicCustomFields()),
      appStep3: getAppStepWithLevel3('3', '3 ' + literals.commons.otp, commonStep, dynamicCustomFields()),
      appCompleted: getAppCompleted(literals.commons.successfulPage, {bind: 'state'}, getAppCompletedNpa(dynamicCustomFields())),
      internalLink: getInternalLinkWithPageActivityLevel3(literals.commons.showInformation, literals.commons.successfulPage, {[constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction, ...commons})
    };
    return _setFeatureFlag(typeFunnel[param]);
  };

  const _getNpaCreditCardFootprint = (param) => {
    const typeFootprint = {
      appPageVisit: getAdvancedFootprintWithLevel3({ bind: 'level3'}, {[constants.PAGE_PAGEINFO_PAGEINTENT]: { bind: 'pageIntent' }, ...commons}),
      appPageVisitLoader: getAdvancedFootprintWithLevel4('3 ' + literals.commons.otp, literals.npaCreditCard.spinnerHistoryQuery, {[constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction, ...commons})
    };
    return _setFeatureFlag(typeFootprint[param]);
  };

  const _getNpaCreditCardError = (param) => {
    const typeFootprint = {
      operationError: getError({ bind: 'errorType'}, {[constants.PAGE_PAGEINFO_PAGEINTENT]: { bind: 'pageIntent' }, ...commons})
    };
    return _setFeatureFlag(typeFootprint[param], featureFlagNpaErrors);
  };

  return {
    _getNpaCreditCardFunnel,
    _getNpaCreditCardFootprint,
    _getNpaCreditCardError
  };
};
