module.exports = (config) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getPageVisitRaw,
    getAppStep,
    getAppCompletedRaw,
    getAppStartedWithLevel2,
    getAppStartedWithoutLevel,
    getAnalyticFeatureFlag,
    getAdvancedFootprintError,
    getAnalyticFeatureFlagError
  } = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const setErrorFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlagError(featureFlag, analytic));
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };
  const analyticsFeatureFlag = 'loansPaymentPledge';
  const commonPromise = (level1) => {
    const _commonPaymentPledge = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_INSTANCE_ID]: config.pageInstanceID,
      [constants.APPLICATION_APPLICATION_NAME]: literals.commons.paymentPledge,
      [constants.APPLICATION_GLOBAL_APPLICATION]: 'payment commitment',
      [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans
    };
    return _commonPaymentPledge;
  };

  const commonPromiseLevel = (level2) => {
    const _commonPaymentPledgeLevel = {
      ...commonPromise(literals.commons.paymentPledge),
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    };
    return _commonPaymentPledgeLevel;
  };

  const commonError = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.paymentPledge,
    [constants.PAGE_INSTANCE_ID]: config.pageInstanceID
  };

  const loansPaymentPledgeOnClickStart = (step) => {
    return getOnClickStart(step, literals.commons.information, {
      ...commonPromise(literals.commons.payCredit)
    });
  };

  const loansPaymentPledgePageVisit = (level2) => {
    return getPageVisitRaw({
      ...commonPromiseLevel(level2),
      [constants.APPLICATION_STATE]: literals.commons.init,
      [constants.APPLICATION_STEP]: level2
    });
  };

  const loansPaymentPledgeStarted = (level2, step) => {
    return getAppStartedWithLevel2(level2, {
      ...commonPromise(literals.commons.paymentPledge),
      [constants.APPLICATION_STEP]: step,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    });
  };

  const loansPaymentPledgeStartedContinue = (level2, step) => {
    return getAppStartedWithoutLevel({
      ...commonPromiseLevel(level2),
      [constants.APPLICATION_STEP]: step
    });
  };

  const loansPaymentPledgeStep = (level2, numberStep) => {
    return getAppStep(numberStep, {
      ...commonPromiseLevel(level2),
      [constants.APPLICATION_STEP]: level2
    });
  };

  const loansPaymentPledgeAppCompleted = (level2) => {
    return getAppCompletedRaw({
      ...commonPromiseLevel(level2),
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.APPLICATION_STEP]: level2,
      [constants.PRODUCT_STATE]: literals.commons.ended,
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'loanType' },
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
      [constants.PRODUCT_CURRENCY]: { bind: 'currency' },
      [constants.APPLICATION_PAYMENT_DATE]: { bind: 'paymentDate' },
      [constants.PRODUCT_PRODUCT_NAME]: { bind: 'productName' }
    });
  };

  const loansPaymenErrorPageView = (level2) => {
    return getAdvancedFootprintError(level2, {
      ...commonError,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    });
  };

  [
    loansPaymentPledgeOnClickStart,
    loansPaymentPledgePageVisit,
    loansPaymentPledgeStarted,
    loansPaymentPledgeStartedContinue,
    loansPaymentPledgeStep,
    loansPaymentPledgeAppCompleted
  ].forEach(item => setFeatureFlags(analyticsFeatureFlag, item));

  setErrorFeatureFlags(analyticsFeatureFlag, loansPaymenErrorPageView);

  return {
    loansPaymentPledgeOnClickStart,
    loansPaymentPledgePageVisit,
    loansPaymentPledgeStarted,
    loansPaymentPledgeStartedContinue,
    loansPaymentPledgeStep,
    loansPaymentPledgeAppCompleted,
    loansPaymenErrorPageView
  };
};