const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getOnClickStart, getPageVisitRaw, addFeatureFlag, getAppStartedWithoutLevel, getAppStep, getAppCompletedRaw, getAdvancedFootprintError, getAdvancedFootprint } = require('./common/_utils');
module.exports = () => {
  const analyticsPostHiringFeatureFlag = {
    'key': 'glomo.analytics.financeTransactionMultipurchaseDebitPostHiring',
    'defaultValue': true
  };
  const analyticsErrorFeatureFlag = {
    'key': 'glomo.analytics.financeTransactionMultipurchaseDebit.error"',
    'defaultValue': true
  };
  const commonsBasics = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments
  };
  const commons = {
    ...commonsBasics,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.deferredPurchases,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commonsProduct = {
    ...commonsBasics,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard
  };
  const commonsApplication = {
    ...commonsProduct,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.purchaseFinancingDeferral,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.deferredPurchases,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const dynamicData = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'totalAmount' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'installmentAmount' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'monthsToDeffer' },
    [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: { bind: 'interestRate' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
  };
  const allCommons = {
    ...commons,
    ...commonsApplication
  };
  const appOnClickStart = (appStepParam) => {
    const onStartData = {
      ...commonsApplication,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.deferredPurchases,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.detail,
      [constants.APPLICATION_STEP]: literals.commons.defer
    };
    const appOnClickAnalytics = getOnClickStart(appStepParam, literals.commons.information, onStartData);
    addFeatureFlag(appOnClickAnalytics, analyticsPostHiringFeatureFlag);
    return appOnClickAnalytics;
  };
  const appVisit = () => {
    const visitData = {
      ...allCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.flexibleFinancing.purchaseSelection}`,
      [constants.APPLICATION_STEP]: `1 ${literals.flexibleFinancing.purchaseSelection}`,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
    };
    const appVisitAnalytics = getPageVisitRaw(visitData);
    addFeatureFlag(appVisitAnalytics, analyticsPostHiringFeatureFlag);
    return appVisitAnalytics;
  };
  const appStarted = () => {
    const startedData = {
      ...allCommons,
      [constants.PAGE_PAGEINFO_LEVEL4]: `1 ${literals.flexibleFinancing.purchaseSelection}`,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
      [constants.APPLICATION_STEP]: { bind: 'applicationStep' }
    };
    const appStartedAnalytics = getAppStartedWithoutLevel(startedData);
    addFeatureFlag(appStartedAnalytics, analyticsPostHiringFeatureFlag);
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
    const appStepAnalytics = getAppStep(numberStep, stepData);
    addFeatureFlag(appStepAnalytics, analyticsPostHiringFeatureFlag);
    return appStepAnalytics;
  };
  const appCompleted = (appStepParam) => {
    const completeData = {
      ...allCommons,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_LEVEL4]: appStepParam,
      [constants.APPLICATION_STEP]: appStepParam,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields'},
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationDeferFolio'}
    };
    const appCompletedAnalytics = getAppCompletedRaw(completeData);
    addFeatureFlag(appCompletedAnalytics, analyticsPostHiringFeatureFlag);
    return appCompletedAnalytics;
  };
  const  pageViewInfo = (level4) => {
    const viewInfoData = {
      ...commonsBasics,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.financingPurchases,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    const pageViewInfoAnalytics = getAdvancedFootprint(viewInfoData);
    addFeatureFlag(pageViewInfoAnalytics, analyticsPostHiringFeatureFlag);
    return pageViewInfoAnalytics;
  };
  const  pageViewError = (level4) => {
    const errorData = {
      ...commonsBasics,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.financingPurchases,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    const pageViewErrorAnalytics = getAdvancedFootprintError(level4, errorData);
    addFeatureFlag(pageViewErrorAnalytics, analyticsErrorFeatureFlag);
    return pageViewErrorAnalytics;
  };
  return {
    appOnClickStart,
    appVisit,
    appStarted,
    appStep,
    appCompleted,
    pageViewInfo,
    pageViewError
  };
};
