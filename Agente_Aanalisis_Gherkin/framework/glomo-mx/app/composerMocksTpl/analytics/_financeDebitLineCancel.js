module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getPageVisit,
    getStaticAppStarted,
    getAppStep,
    getAppCompleted,
    getAdvancedFootprint,
    getAdvancedFootprintError,
    addFeatureFlag
  } = require('./common/_utils');
  const analyticsFeatureFlag = {
    'key': 'glomo.analytics.financeDebitLineCancel',
    'defaultValue': true
  };
  const analyticsFeatureFlagError = {
    'key': 'glomo.analytics.financeDebitLineCancel.error',
    'defaultValue': true
  };
  const common = {
    [constants.PAGE_PAGEACTIVITY_LOGINTYPE]: '',
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.debit,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.flexibleFinancing.deferredPurchases,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.flexibleFinancing.lineCancel,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.flexibleFinancing.globalApplicationLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.flexibleFinancing.appNameDebitCancel,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.debitCard
  };
  const commonAdvancedFootprint = {
    ...common,
    [constants.APPLICATION_STEP]: '',
    [constants.APPLICATION_GLOBAL_APPLICATION]: '',
    [constants.APPLICATION_APPLICATION_NAME]: '',
    [constants.APPLICATION_APPLICATION_TYPE]: '',
    [constants.APPLICATION_FULLFILMENT]: '',
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: '',
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: '',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };
  const clickStartFromOperatives = getOnClickStart(literals.flexibleFinancing.lineCancel, literals.commons.information, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.operative,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  });
  const clickStartFromDetail = getOnClickStart(literals.flexibleFinancing.lineCancel, literals.commons.information, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  });
  const pageVisit = getPageVisit(`1 ${literals.commons.oneBenefits}`, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: `1 ${literals.commons.oneBenefits}`
  });
  const appStartedContinue = getStaticAppStarted(literals.commons.continue, literals.flexibleFinancing.deferredPurchases, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: `1 ${literals.commons.oneBenefits}`
  });
  const appStartedKeep = getStaticAppStarted(literals.flexibleFinancing.keepLine, literals.flexibleFinancing.deferredPurchases, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: `1 ${literals.commons.oneBenefits}`
  });
  const appStep = (numberStep, step) => {
    let obj = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL5]: `${numberStep} ${step}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${step}`
    };
    if (numberStep === '2') {
      obj = {
        ...obj
      };
    } else {
      obj = {
        ...obj,
        [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'reason'}
      };
    }
    const data = getAppStep(numberStep, obj);
    addFeatureFlag(data, analyticsFeatureFlag);
    return data;
  };
  const appStepCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.finalized,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'reason'
    },
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  });
  const pageViewOverdueBalances = getAdvancedFootprint({
    ...commonAdvancedFootprint,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.flexibleFinancing.overdueBalances
  });
  const pageViewOperationError = getAdvancedFootprintError(literals.errors.operationError, {
    ...commonAdvancedFootprint,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.errors.operationError,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.operationError
  });

  addFeatureFlag(pageViewOperationError, analyticsFeatureFlagError);

  const actions = [
    clickStartFromDetail,
    clickStartFromOperatives,
    pageVisit,
    appStartedContinue,
    appStartedKeep,
    appStepCompleted,
    pageViewOverdueBalances,
    pageViewOperationError
  ];

  actions.forEach((action) => addFeatureFlag(action, analyticsFeatureFlag));

  return {
    clickStartFromDetail,
    clickStartFromOperatives,
    pageVisit,
    appStartedContinue,
    appStartedKeep,
    appStep,
    appStepCompleted,
    pageViewOverdueBalances,
    pageViewOperationError,
    analyticsFeatureFlag,
    analyticsFeatureFlagError
  };
};