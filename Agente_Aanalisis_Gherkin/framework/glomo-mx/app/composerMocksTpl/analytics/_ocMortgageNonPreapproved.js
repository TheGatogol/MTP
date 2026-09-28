module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getPageVisit,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedLevel2,
    getAdvancedFootprintErrorLevel2,
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError,
    getAdvancedFootprintWithLevel1
  } = require('./common/_utils');
  const featureFlag = literals.featureFlag.ocMortgageNonPreapproved;
  const featureFlagErrorFinancialHealth = `${literals.featureFlag.ocMortgageNonPreapproved}.financialHealth`;
  const featureFlagErrorOpNotAvailable = `${literals.featureFlag.ocMortgageNonPreapproved}.opNotAvailable`;
  const commonErrorsData = {
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private
  };
  const common = {
    ...commonErrorsData,
    [constants.APPLICATION_APPLICATION_NAME]: `${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.simulator,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.ocMortgageNoNPreapproved.customerMortgageLoanSimulator,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: `${literals.commons.credit} ${literals.commons.mortgage}`,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans
  };

  const commonDynamicData = {
    ...common,
    [constants.APPLICATION_PROCESS]: {bind: 'process'},
    [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'},
    [constants.APPLICATION_AMOUNT]: {bind: 'amount'},
    [constants.APPLICATION_CURRENCY]: {bind: 'currency'},
    [constants.APPLICATION_INTEREST_RATE]: {bind: 'interestRate'},
    [constants.APPLICATION_PAYMENT_AMOUNT]: {bind: 'paymentAmount'},
    [constants.APPLICATION_SERVICE_CHARGE]: {bind: 'serviceCharge'},
    [constants.APPLICATION_TERM]: {bind: 'term'},
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {bind: 'numberOfPayments'}
  };

  const _onClickStart = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.APPLICATION_STEP]: `${literals.commons.interested} ${literals.commons.opportunities}`
  };
  const appOnClickStart = () => {
    const appOnClickStartAnalytic = getOnClickStart(`${literals.commons.interested} ${literals.commons.opportunities}`, literals.commons.information, _onClickStart);
    getAnalyticFeatureFlag(featureFlag, appOnClickStartAnalytic);
    return appOnClickStartAnalytic;
  };
  const _appPageVisit = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: `${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`,
    [constants.APPLICATION_STATE]: literals.commons.init
  };
  const appPageVisit = (step, description) => {
    const obj = {
      ..._appPageVisit,
      [constants.APPLICATION_STEP]: `${step} ${description}`
    };
    const appPageVisitAnalytic = getPageVisit(`${step} ${description}`, obj);
    getAnalyticFeatureFlag(featureFlag, appPageVisitAnalytic);
    return appPageVisitAnalytic;
  };
  const _appStarted = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: `${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`,
    [constants.APPLICATION_STEP]: literals.commons.continue
  };
  const appStarted = (step, description) => {
    const appStartedAnalytic = getAppStartedWithLevel2(`${step} ${description}`, _appStarted);
    getAnalyticFeatureFlag(featureFlag, appStartedAnalytic);
    return appStartedAnalytic;
  };

  const commonStep = (step, description, customFields = '') => {
    let obj = {};
    if (step === '2') {
      obj = {
        ...common,
        [constants.PAGE_PAGEINFO_LEVEL1]: `${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`,
        [constants.PAGE_PAGEINFO_LEVEL2]: `${step} ${description}`,
        [constants.APPLICATION_STEP]: `${step} ${description}`
      };
    } else {
      obj = {
        ...commonDynamicData,
        [constants.PAGE_PAGEINFO_LEVEL1]: `${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`,
        [constants.PAGE_PAGEINFO_LEVEL2]: `${step} ${description}`,
        [constants.APPLICATION_STEP]: `${step} ${description}`,
        [constants.USER_JOB_TYPE]: { bind: 'jobType' },
        [constants.APPLICATION_PAYMENT_TYPE]: literals.commons.monthly
      };
    }
    if (customFields !== '') {
      obj = {
        ...obj,
        [constants.APPLICATION_CUSTOM_FIELDS]: customFields
      };
    }
    const commonStepAnalytic = getAppStep(step, obj);
    getAnalyticFeatureFlag(featureFlag, commonStepAnalytic);
    return commonStepAnalytic;
  };

  const appViewOpNotAvailable = {
    ...commonErrorsData,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.errorOperationNotAvailable
  };

  const appViewFinancialHealth = {
    ...commonErrorsData,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.ocMortgageNoNPreapproved.clientNotEligibleDueToFinancialHealth
  };

  const appViewErrorOpNotAvailable = () => {
    const appViewErrorOpNotAvailableAnalytic = getAdvancedFootprintErrorLevel2(`${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`, literals.errors.errorOperationNotAvailable, appViewOpNotAvailable);
    getAnalyticFeatureFlagError(featureFlagErrorOpNotAvailable, appViewErrorOpNotAvailableAnalytic);
    return appViewErrorOpNotAvailableAnalytic;
  };

  const appViewErrorFinancialHealth = () => {
    const appViewFinancialHealthAnalytic =  getAdvancedFootprintWithLevel1(`${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`, appViewFinancialHealth);
    getAnalyticFeatureFlagError(featureFlagErrorFinancialHealth, appViewFinancialHealthAnalytic);
    return appViewFinancialHealthAnalytic;
  };

  const _appCompleted = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: `${literals.commons.simulator} ${literals.commons.mortgage} ${literals.commons.clients}`,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.USER_JOB_TYPE]: { bind: 'jobType' }
  };

  const appSimulationCompleted = (customFields) => {
    const obj = {
      ..._appCompleted,
      ...commonDynamicData,
      [constants.APPLICATION_PAYMENT_TYPE]: literals.commons.monthly,
      [constants.APPLICATION_CUSTOM_FIELDS]: customFields
    };
    const appSimulationCompletedAnalytic = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, obj);
    getAnalyticFeatureFlag(featureFlag, appSimulationCompletedAnalytic);
    return appSimulationCompletedAnalytic;
  };

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    commonStep,
    appViewErrorFinancialHealth,
    appViewErrorOpNotAvailable,
    appSimulationCompleted
  };
};

