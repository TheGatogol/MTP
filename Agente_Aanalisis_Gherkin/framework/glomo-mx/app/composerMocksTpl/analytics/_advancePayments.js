const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getOnClickStart,
  getPageVisitRaw,
  addFeatureFlag,
  getAppStartedWithoutLevel,
  getAppStep,
  getAppCompletedRaw,
  getAdvancedFootprint,
  getAdvancedFootprintError
} = require('./common/_utils');
module.exports = () => {
  const analyticsAdvancePaymentFeatureFlag = {
    'key': 'glomo.analytics.advancePaymentsAdvancePayment.advanceFootprint"',
    'defaultValue': true
  };
  const analyticsMonthlyPaymentFeatureFlag = {
    'key': 'glomo.analytics.advancePaymentsMonthlyPayment.advanceFootprint"',
    'defaultValue': true
  };
  const analyticsErrorMonthlyPaymentFeatureFlag = {
    'key': 'glomo.analytics.advancePaymentsMonthlyPayment.advanceFootprint"',
    'defaultValue': true
  };
  const analyticsOverduePaymentFeatureFlag = {
    'key': 'glomo.analytics.advancePaymentsOverduePayment.advanceFootprint"',
    'defaultValue': true
  };
  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.deferredPurchases,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const commonAdvancedFootprint = {
    ...commons,
    [constants.APPLICATION_APPLICATION_NAME]: '',
    [constants.APPLICATION_APPLICATION_TYPE]: '',
    [constants.APPLICATION_FULLFILMENT]: '',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const advancePayment = {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.advancePayment,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationAdvancePayments,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameAdvance
  };
  const monthlyPayment = {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.monthlyPayment,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationMonthlyPayments,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameMonthly
  };
  const overduePayment = {
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.overduePayment,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationOverduePayments,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameOverdue
  };
  const commonsProduct = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard
  };
  const dynamicData = {
    ...commons,
    ...commonsProduct,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
  };
  const appOnClickStartAdvance = (click) => {
    const appOnClickStartData = {
      ...commons,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${click}`,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationAdvancePayments,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameAdvance
    };
    const appOnClickStartAdvanceAnalytic = getOnClickStart(literals.flexibleFinancing.advancePayment, literals.commons.information, appOnClickStartData);
    addFeatureFlag(appOnClickStartAdvanceAnalytic, analyticsAdvancePaymentFeatureFlag);
    return appOnClickStartAdvanceAnalytic;
  };
  const appOnClickStartAdvanceFromCancel = (appStep) => {
    const appOnClickStartDataCancel = {
      ...commons,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.lineCancel,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${appStep}`,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationAdvancePayments,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameAdvance
    };
    const onClickStartAdvanceFromCancelAnalytic = getOnClickStart(literals.flexibleFinancing.advancePayment, literals.commons.information, appOnClickStartDataCancel);
    addFeatureFlag(onClickStartAdvanceFromCancelAnalytic, analyticsAdvancePaymentFeatureFlag);
    return onClickStartAdvanceFromCancelAnalytic;
  };
  const appOnClickStartFromMultipurchase = (appStep) => {
    const appOnClickStartMultipurchase = {
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.financingPurchases,
      [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
      [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
      [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${appStep}`,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationAdvancePayments,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameAdvance
    };
    const onClickStartFromMultipurchaseAnalytic = getOnClickStart(literals.flexibleFinancing.advancePayment, literals.commons.information, appOnClickStartMultipurchase);
    addFeatureFlag(onClickStartFromMultipurchaseAnalytic, analyticsAdvancePaymentFeatureFlag);
    return onClickStartFromMultipurchaseAnalytic;
  };
  const appVisitAdvance = (step) => {
    const appVisitDataAdvance = {
      ...commons,
      ...advancePayment,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${'1 ' + literals.commons.paymentType}`,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: `${step}`
    };
    const appVisitAdvanceAnalytic = getPageVisitRaw(appVisitDataAdvance);
    addFeatureFlag(appVisitAdvanceAnalytic, analyticsAdvancePaymentFeatureFlag);
    return appVisitAdvanceAnalytic;
  };
  const appOnClickStartMonthly = (click) => {
    const appOnClickStartData = {
      ...commons,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${click}`,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationMonthlyPayments,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameMonthly
    };
    const onClickStartMonthlyAnalytic = getOnClickStart(literals.flexibleFinancing.monthlyPayment, literals.commons.information, appOnClickStartData);
    addFeatureFlag(onClickStartMonthlyAnalytic, analyticsMonthlyPaymentFeatureFlag);
    return onClickStartMonthlyAnalytic;
  };
  const appVisitMonthly = (step) => {
    const appVisitDataMonthly = {
      ...commons,
      ...monthlyPayment,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${'1 ' + literals.tag.secondPaymentDetail}`,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: `${step}`
    };
    const appVisitMonthlyAnalytic = getPageVisitRaw(appVisitDataMonthly);
    addFeatureFlag(appVisitMonthlyAnalytic, analyticsMonthlyPaymentFeatureFlag);
    return appVisitMonthlyAnalytic;
  };
  const appOnClickStartOverdue = (click) => {
    const appOnClickStartDataOverdue = {
      ...commons,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL4]: `${click}`,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationOverduePayments,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameOverdue
    };
    const onClickStartOverdueAnalytic = getOnClickStart(literals.flexibleFinancing.overduePayment, literals.commons.information, appOnClickStartDataOverdue);
    addFeatureFlag(onClickStartOverdueAnalytic, analyticsOverduePaymentFeatureFlag);
    return onClickStartOverdueAnalytic;
  };
  const appOnClickStartOverdueFromCancel = (appStep) => {
    const appOnClickStartData = {
      ...commons,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.lineCancel,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${appStep}`,
      [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationOverduePayments,
      [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.globalApplicationNameOverdue
    };
    const onClickStartOverdueFromCancelAnalytic = getOnClickStart(literals.flexibleFinancing.overduePayment, literals.commons.information, appOnClickStartData);
    addFeatureFlag(onClickStartOverdueFromCancelAnalytic, analyticsOverduePaymentFeatureFlag);
    return onClickStartOverdueFromCancelAnalytic;
  };
  const appVisitOverdue = (step) => {
    const appVisitDataOverdue = {
      ...commons,
      ...overduePayment,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${'1 ' + literals.flexibleFinancing.pageInfoPaymentAmount}`,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: `${step}`
    };
    const appVisitOverdueAnalytic = getPageVisitRaw(appVisitDataOverdue);
    addFeatureFlag(appVisitOverdueAnalytic, analyticsOverduePaymentFeatureFlag);
    return appVisitOverdueAnalytic;
  };
  const appStartedAdvance = (selected) => {
    const appStartedDataAdvance = {
      ...commons,
      ...advancePayment,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${'1 ' + literals.commons.paymentType}`,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: `${selected}`
    };
    const appStartedAdvanceAnalytic = getAppStartedWithoutLevel(appStartedDataAdvance);
    addFeatureFlag(appStartedAdvanceAnalytic, analyticsAdvancePaymentFeatureFlag);
    return appStartedAdvanceAnalytic;
  };
  const appStartedMonthly = (click) => {
    const appStartedDataMonthly = {
      ...commons,
      ...monthlyPayment,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${'1 ' + literals.tag.secondPaymentDetail}`,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: `${click}`
    };
    const appStartedMonthlyAnalytic = getAppStartedWithoutLevel(appStartedDataMonthly);
    addFeatureFlag(appStartedMonthlyAnalytic, analyticsMonthlyPaymentFeatureFlag);
    return appStartedMonthlyAnalytic;
  };
  const appStartedOverdue = (click) => {
    const appStartedDataOverdue = {
      ...commons,
      ...overduePayment,
      ...commonsProduct,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${'1 ' + literals.flexibleFinancing.pageInfoPaymentAmount}`,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: `${click}`
    };
    const appStartedOverdueAnalytic = getAppStartedWithoutLevel(appStartedDataOverdue);
    addFeatureFlag(appStartedOverdueAnalytic, analyticsOverduePaymentFeatureFlag);
    return appStartedOverdueAnalytic;
  };
  const appStepAdvance = (numberStep, step) => {
    const appStepDataAdvance = {
      ...advancePayment,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${numberStep} ${step}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${step}`,
      [constants.APPLICATION_TYPOLOGY]: literals.flexibleFinancing.advancePayment,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields'}
    };
    if (numberStep === '2') {
      const stepData = {
        ...commons,
        ...commonsProduct
      };
      Object.assign(appStepDataAdvance, stepData);
    } else {
      const stepData = {
        ...dynamicData
      };
      Object.assign(appStepDataAdvance, stepData);
    }
    const stepAdvanceAnalytic = getAppStep(numberStep, appStepDataAdvance);
    addFeatureFlag(stepAdvanceAnalytic, analyticsAdvancePaymentFeatureFlag);
    return stepAdvanceAnalytic;
  };
  const appStepMonthly = (numberStep, step) => {
    const appStepDataMonthly = {
      ...monthlyPayment,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${numberStep} ${step}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${step}`
    };
    const stepMonthlyAnalytic = getAppStep(numberStep, appStepDataMonthly);
    addFeatureFlag(stepMonthlyAnalytic, analyticsMonthlyPaymentFeatureFlag);
    return stepMonthlyAnalytic;
  };
  const appStepOverdue = (numberStep, step) => {
    const appStepDataOverdue = {
      ...overduePayment,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${numberStep} ${step}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${step}`
    };
    const stepOverdueAnalytic = getAppStep(numberStep, appStepDataOverdue);
    addFeatureFlag(stepOverdueAnalytic, analyticsOverduePaymentFeatureFlag);
    return stepOverdueAnalytic;
  };
  const appCompletedAdvance = (appStep) => {
    const appCompletedDataAdvance = {
      ...advancePayment,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_LEVEL5]: appStep,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_STEP]: appStep,
      [constants.APPLICATION_TYPOLOGY]: literals.flexibleFinancing.advancePayment,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields'},
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationPaymentFolio'}
    };
    const completedAdvanceAnalytic = getAppCompletedRaw(appCompletedDataAdvance);
    addFeatureFlag(completedAdvanceAnalytic, analyticsAdvancePaymentFeatureFlag);
    return completedAdvanceAnalytic;
  };
  const appCompletedMonthly = (appStep) => {
    const appCompletedDataMonthly = {
      ...monthlyPayment,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_LEVEL5]: appStep,
      [constants.APPLICATION_STEP]: appStep,
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationPaymentFolio'},
      [constants.PRODUCT_STATE]: literals.commons.finalized
    };
    const completedMonthlyAnalytic = getAppCompletedRaw(appCompletedDataMonthly);
    addFeatureFlag(completedMonthlyAnalytic, analyticsMonthlyPaymentFeatureFlag);
    return completedMonthlyAnalytic;
  };
  const appCompletedOverdue = (appStep) => {
    const appCompletedDataOverdue = {
      ...overduePayment,
      ...dynamicData,
      [constants.PAGE_PAGEINFO_LEVEL5]: appStep,
      [constants.APPLICATION_STEP]: appStep,
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationPaymentFolio'}
    };
    const completedOverdueAnalytic = getAppCompletedRaw(appCompletedDataOverdue);
    addFeatureFlag(completedOverdueAnalytic, analyticsOverduePaymentFeatureFlag);
    return completedOverdueAnalytic;
  };
  const pageViewFootprintOverdue = (level5) => {
    const pageViewDataOverdue = {
      ...commonAdvancedFootprint,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.overduePayment,
      [constants.PAGE_PAGEINFO_LEVEL5]: level5
    };
    const footprintOverdueAnalytic = getAdvancedFootprint(pageViewDataOverdue);
    addFeatureFlag(footprintOverdueAnalytic, analyticsOverduePaymentFeatureFlag);
    return footprintOverdueAnalytic;
  };
  const pageViewFootprintOnboarding = (level5) => {
    const pageViewDataOnboarding = {
      ...commonAdvancedFootprint,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.advancePayment,
      [constants.PAGE_PAGEINFO_LEVEL5]: level5
    };
    const footprintOnboardingAnalytic = getAdvancedFootprint(pageViewDataOnboarding);
    addFeatureFlag(footprintOnboardingAnalytic, analyticsAdvancePaymentFeatureFlag);
    return footprintOnboardingAnalytic;
  };
  const  pageViewError = (error) => {
    const pageViewDataError = {
      ...commonAdvancedFootprint,
      [constants.PAGE_PAGEINFO_LEVEL4]: error
    };
    const viewErrorAnalytic = getAdvancedFootprintError(error, pageViewDataError);
    addFeatureFlag(viewErrorAnalytic, analyticsErrorMonthlyPaymentFeatureFlag);
    return viewErrorAnalytic;
  };
  return {
    appOnClickStartAdvance,
    appOnClickStartAdvanceFromCancel,
    appOnClickStartFromMultipurchase,
    appVisitAdvance,
    appOnClickStartMonthly,
    appVisitMonthly,
    appOnClickStartOverdue,
    appOnClickStartOverdueFromCancel,
    appVisitOverdue,
    appStartedAdvance,
    appStartedMonthly,
    appStartedOverdue,
    appStepAdvance,
    appStepMonthly,
    appStepOverdue,
    appCompletedAdvance,
    appCompletedMonthly,
    appCompletedOverdue,
    pageViewFootprintOverdue,
    pageViewFootprintOnboarding,
    pageViewError
  };
};
