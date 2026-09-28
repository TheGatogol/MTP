const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getOnClickStart,
  getPageVisitRaw,
  getAppStep,
  getAppCompleted,
  getStaticAppStarted,
  getAnalyticFeatureFlag
} = require('./common/_utils');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
const commons = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diyPayments
};
const analyticsFeatureFlag = 'cards.paymentPromise';
const commonPromise = (level2, level3, step, productAttribute = false, amountAttribute = false, typology = false) => {
  const _commonPromise = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_STEP]: step,
    [constants.APPLICATION_APPLICATION_NAME]: 'compromiso pago tarjeta',
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'payment commitment credit card',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  if (level3) {
    _commonPromise[constants.PAGE_PAGEINFO_LEVEL3] = level3;
    _commonPromise[constants.PAGE_PAGEINFO_PAGEINTENT] = literals.commons.transaction;
  }
  if (productAttribute) {
    _commonPromise[constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY] = literals.commons.cards;
    _commonPromise[constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE] = literals.commons.creditCards;
    _commonPromise[constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME] = { bind: 'productName' };
  }
  if (amountAttribute) {
    _commonPromise[constants.APPLICATION_AMOUNT] = { bind: 'amount' };
    _commonPromise[constants.APPLICATION_CURRENCY] = literals.currencies.MXN;
  }
  if (typology) {
    _commonPromise[constants.APPLICATION_TYPOLOGY] = { bind: 'typology' };
  }
  return _commonPromise;
};
module.exports = (product) => {
  const creditCardPaymentPromiseStart = (level2, step) => {
    const obj = {
      ...commonPromise(level2, '', step)
    };
    const analytic = getOnClickStart(step, 'informacion', obj);
    setFeatureFlags(analyticsFeatureFlag, analytic);
    return analytic;
  };
  const creditCardPaymentPromisePageVisit = (level2, level3) => {
    const obj = {
      ...commonPromise(level2, level3, level3, true)
    };
    const analytic = getPageVisitRaw(obj);
    setFeatureFlags(analyticsFeatureFlag, analytic);
    return analytic;
  };
  const creditCardPaymentPromiseStarted = (level2, level3, step) => {
    const obj = {
      ...commonPromise(level2, level3, step, true)
    };
    const analytic = getStaticAppStarted(step, level3, obj);
    setFeatureFlags(analyticsFeatureFlag, analytic);
    return analytic;
  };
  const creditCardPaymentPromiseStep = (level2, level3, numberStep, amountAttribute = false, typology = false) => {
    const analytic = getAppStep(numberStep, {
      ...commonPromise(level2, level3, level3, true, amountAttribute, typology)
    });
    setFeatureFlags(analyticsFeatureFlag, analytic);
    return analytic;
  };
  const creditCardPaymentPromiseAppCompleted = (level2, level3) => {
    const obj = {
      [constants.PRODUCT_STATE]: literals.commons.ended,
      ...commonPromise(level2, level3, level3, true, true, true)
    };
    const analytic = getAppCompleted(level3, literals.commons.ended, obj);
    setFeatureFlags(analyticsFeatureFlag, analytic);
    return analytic;
  };
  return {
    creditCardPaymentPromiseStart,
    creditCardPaymentPromisePageVisit,
    creditCardPaymentPromiseStarted,
    creditCardPaymentPromiseStep,
    creditCardPaymentPromiseAppCompleted
  };
};

