module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError,
    getAppOnClickStartLevel2,
    getPageVisitRaw,
    getAppStartedWithoutLevel,
    getAppCompletedRaw,
    getInternalLink,
    getAdvancedFootprintError
  } = require('./common/_utils');
  const flagName = 'pointsRedeemPurchasesByCampaigns';
  const flagFootprint = 'pointsRedeemPurchasesByCampaignsFootprint';
  const flagNameError = 'pointsRedeemPurchasesByCampaignsError';
  const pageCommonFootprint = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.reward,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const pageCommon = {
    ...pageCommonFootprint,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.useMyPointsPromotion,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.loyaltyPointsRedeem,
    [constants.APPLICATION_OFFER]: literals.commons.doublePoints
  };
  const pageCommonLevel = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.reward.pointsAndPromotions,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.bbvaPoints,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.useMyPointsPromotion
  };
  const commonsDinamicsData = {
    [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'},
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: '',
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: ''
  };

  const appOnclickNotificationCenter = (level1, level2) => {
    const analytics = {
      ...pageCommon,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.APPLICATION_STEP]: level2
    };
    return getAnalyticFeatureFlag(flagName, getAppOnClickStartLevel2(level1, level2, analytics));
  };
  const appPageVisitPointsRedeemPurchases = (level4, state) => {
    const analytics = {
      ...pageCommon,
      ...commonsDinamicsData,
      ...pageCommonLevel,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4,
      [constants.APPLICATION_STEP]: level4,
      [constants.APPLICATION_STATE]: state,
      [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'}
    };
    return getAnalyticFeatureFlag(flagName, getPageVisitRaw(analytics));
  };
  const appStartedPointsRedeemPurchases = () => {
    const analytics = {
      ...pageCommon,
      ...commonsDinamicsData,
      ...pageCommonLevel,
      [constants.PAGE_PAGEINFO_LEVEL4]: '1 ' + literals.commons.summary,
      [constants.APPLICATION_STEP]: {bind: 'appStartedStep'},
      [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'}
    };
    return getAnalyticFeatureFlag(flagName, getAppStartedWithoutLevel(analytics));
  };
  const appCompletedPointsRedeemPurchases = (state) => {
    const analytics = {
      ...pageCommon,
      ...commonsDinamicsData,
      ...pageCommonLevel,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.APPLICATION_STATE]: state,
      [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'},
      [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'},
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {bind: 'amount'},
      [constants.PRODUCT_CURRENCY]: {bind: 'currency'},
      [constants.PRODUCT_QUANTITY]: {bind: 'quantity'},
      [constants.APPLICATION_PAYMENT_AMOUNT]: {bind: 'paymentAmount'}
    };
    return getAnalyticFeatureFlag(flagName, getAppCompletedRaw(analytics));
  };
  const appInternalLinkPointsRedeemPurchases = linkName => {
    const analytics = {
      ...pageCommonFootprint,
      ...pageCommonLevel,
      [constants.PAGE_PAGEINFO_LEVEL4]: '1 ' + literals.commons.summary
    };
    return getAnalyticFeatureFlag(flagFootprint, getInternalLink(linkName, analytics));
  };
  const appErrorPayments = errorName => {
    const analytics = {
      ...pageCommonFootprint,
      ...pageCommonLevel,
      [constants.PAGE_PAGEINFO_LEVEL4]: errorName
    };
    return getAnalyticFeatureFlagError(flagNameError, getAdvancedFootprintError(errorName, analytics));
  };

  return {
    appOnclickNotificationCenter,
    appPageVisitPointsRedeemPurchases,
    appStartedPointsRedeemPurchases,
    appCompletedPointsRedeemPurchases,
    appInternalLinkPointsRedeemPurchases,
    appErrorPayments
  };
};
