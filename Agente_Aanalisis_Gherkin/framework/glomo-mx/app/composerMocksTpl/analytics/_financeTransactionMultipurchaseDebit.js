const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getPageVisitRaw, addFeatureFlag, getAppStartedWithoutLevel, getAppStep, getAppCompletedRaw, getAdvancedFootprint, getAdvancedFootprintError, getOCAccess } = require('./common/_utils');
module.exports = () => {
  const analyticsHiringFeatureFlag = {
    'key': 'glomo.analytics.financeTransactionMultipurchaseDebit.advanceFootprint"',
    'defaultValue': true
  };
  const analyticsErrorFeatureFlag = {
    'key': 'glomo.analytics.financeTransactionMultipurchaseDebit.advanceFootprint"',
    'defaultValue': true
  };
  const commonsBasics = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments
  };
  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.financingPurchases,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commonsApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.purchaseFinancing,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.financingPurchases,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const commonsProducts = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard
  };
  const onClickStartData = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.purchaseFinancing,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.financingPurchases,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard,
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.card,
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.cards,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: { bind: 'productCode' },
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: { bind: 'internalCampaignCampaignQuantity'},
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName'}
  };
  const dynamicData = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'totalAmount' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'installmentAmount' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'monthsToDeffer' },
    [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: { bind: 'interestRate' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
  };
  const basicsAndCommons = {
    ...commonsBasics,
    ...commons
  };
  const allCommons = {
    ...basicsAndCommons,
    ...commonsApplication,
    ...commonsProducts
  };
  const appOnClickStart = getOCAccess(
    { bind: 'applicationStep' },
    literals.commons.online,
    onClickStartData
  );
  addFeatureFlag(appOnClickStart, analyticsHiringFeatureFlag);
  const appVisit = () => {
    const visitData = {
      ...allCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.flexibleFinancing.purchaseSelection}`,
      [constants.APPLICATION_STEP]: `1 ${literals.flexibleFinancing.purchaseSelection}`
    };
    const appVisitAnalytic = getPageVisitRaw(visitData);
    addFeatureFlag(appVisitAnalytic, analyticsHiringFeatureFlag);
    return appVisitAnalytic;
  };
  const appStarted = (appStepParam) => {
    const startData = {
      ...allCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.flexibleFinancing.purchaseSelection}`,
      [constants.APPLICATION_STEP]: appStepParam
    };
    const appStartedAnalytics = getAppStartedWithoutLevel(startData);
    addFeatureFlag(appStartedAnalytics, analyticsHiringFeatureFlag);
    return appStartedAnalytics;
  };
  const appStep = (numberStep, step) => {
    let stepData = {
      ...allCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${numberStep} ${step}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${step}`,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields'}
    };
    if (numberStep === '2') {
      stepData = {
        ...stepData
      };
    } else {
      stepData = {
        ...stepData,
        ...dynamicData
      };
    }
    const appStepAnalytic = getAppStep(numberStep, stepData);
    addFeatureFlag(appStepAnalytic, analyticsHiringFeatureFlag);
    return appStepAnalytic;
  };
  const appStepSuccess = (numberStep, step) => {
    const successData = {
      ...allCommons,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${numberStep} ${step}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${step}`,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
    };
    const appStepSuccessAnalytic = getAppStep(numberStep, successData);
    addFeatureFlag(appStepSuccessAnalytic, analyticsHiringFeatureFlag);
    return appStepSuccessAnalytic;
  };
  const appCompleted = (appStepParam) => {
    const completedData = {
      ...allCommons,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_LEVEL4]: appStepParam,
      [constants.APPLICATION_STEP]: appStepParam,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields'},
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationDeferFolio'}
    };
    const appCompletedAnalytic = getAppCompletedRaw(completedData);
    addFeatureFlag(appCompletedAnalytic, analyticsHiringFeatureFlag);
    return appCompletedAnalytic;
  };
  const pageViewInfo = (level4) => {
    const viewInfoData = {
      ...basicsAndCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    const pageViewInfoAnalytic = getAdvancedFootprint(viewInfoData);
    addFeatureFlag(pageViewInfoAnalytic, analyticsHiringFeatureFlag);
    return pageViewInfoAnalytic;
  };
  const pageViewError = (level4) => {
    const viewErrorData = {
      ...basicsAndCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    const pageViewErrorAnalytic = getAdvancedFootprintError(level4, viewErrorData);
    addFeatureFlag(pageViewErrorAnalytic, analyticsErrorFeatureFlag);
    return pageViewErrorAnalytic;
  };
  return {
    appOnClickStart,
    appVisit,
    appStarted,
    appStep,
    appStepSuccess,
    appCompleted,
    pageViewInfo,
    pageViewError
  };
};
