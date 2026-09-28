module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAppOnClickStartLevel3,
    getAnalyticFeatureFlag,
    getAppPageVisitLevel2,
    getAppStartedWithoutLevel,
    getAdvancedFootprint,
    getAdvancedFootprintErrorLevel2,
    getAppCompletedRaw
  } = require('./common/_utils');

  const generalCommons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const flagName = 'modularOffering.flexibleFinancingOffer';
  const applicationCommons = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancingOffer.application.purchaseDeferralPromotion,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancingOffer.application.flexibleFinancingOffer
  };
  const productsCommons = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards
  };
  const commons = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'promotionIndicator' },
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.flexibleFinancingOffer.application.purchaseDeferralPromotion
  };

  const onClickStartData = {
    ...generalCommons,
    ...applicationCommons,
    [constants.APPLICATION_STEP]: literals.flexibleFinancingOffer.application.step.deferPurchase,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };
  const pageVisitData = {
    ...generalCommons,
    ...applicationCommons,
    ...productsCommons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.flexibleFinancingOffer.application.purchaseDeferralPromotion,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'promotionIndicator' }
  };
  const appStartedData = {
    ...generalCommons,
    ...applicationCommons,
    ...productsCommons,
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: `1 ${literals.commons.confirmation}`,
    [constants.APPLICATION_STEP]: { bind: 'stepAction' }
  };
  const appCompletedData = {
    ...generalCommons,
    ...applicationCommons,
    ...productsCommons,
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
  };
  const pageViewData = {
    ...generalCommons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'promotionIndicator' },
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.flexibleFinancingOffer.application.purchaseDeferralPromotion,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' }
  };
  const pageViewErrorData = {
    ...generalCommons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'promotionIndicator' }
  };

  const appOnClickStart = getAnalyticFeatureFlag(
    flagName,
    getAppOnClickStartLevel3(
      literals.commons.notifications,
      literals.commons.promotion,
      literals.commons.detail,
      onClickStartData
    )
  );

  const appPageVisit = (numberStep) => getAnalyticFeatureFlag(
    flagName,
    getAppPageVisitLevel2(
      `${numberStep} ${literals.commons.confirmation}`,
      pageVisitData
    )
  );

  const appStarted  = getAnalyticFeatureFlag(
    flagName,
    getAppStartedWithoutLevel(
      appStartedData
    )
  );

  const appCompleted  = getAnalyticFeatureFlag(
    flagName,
    getAppCompletedRaw(
      appCompletedData
    )
  );

  const pageView  = getAnalyticFeatureFlag(
    flagName,
    getAdvancedFootprint(
      pageViewData
    )
  );

  const pageViewError  = getAnalyticFeatureFlag(
    flagName,
    getAdvancedFootprintErrorLevel2(
      literals.flexibleFinancingOffer.application.purchaseDeferralPromotion,
      literals.errors.errorOperationNotAvailable,
      pageViewErrorData
    )
  );

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appCompleted,
    pageView,
    pageViewError
  };
};
