const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getPageVisitWithLevel3,
  getAppStarted,
  getError,
  getAdvancedFootprintWithLevel3,
  getAppStepWithLevel3,
  getAppCompleted,
  getInternalLinkWithLevel3
} = require('./common/_utils');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const _analyticsFeatureFlagFootError = 'codi.paymentsrequest.footError';
  const _commonFunnel = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.requestMoney
  };
  const _commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.sendMoney,
    [constants.APPLICATION_APPLICATION_NAME]: literals.operative.requestMoney,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.applicationName.selfManagement
  };
  const _commonPrincipal = {
    ..._commonFunnel,
    ..._commonApplication,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const appPageVisit = getPageVisitWithLevel3('1 ' + literals.commons.depositAccount, {
    ..._commonPrincipal,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  });
  const commonAppStarted = {
    ..._commonPrincipal,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: '',
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  };
  const appStarted = getAppStarted('1 ' + literals.commons.depositAccount, {
    ...commonAppStarted,
    [constants.APPLICATION_STEP]: { bind: 'accountRequest' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account
  });
  [
    appPageVisit,
    appStarted
  ].forEach((analytic) => setFeatureFlags('codi.paymentsrequest', analytic));
  const createAppStep = (level, description, additionalAttributes = {}) => getAppStepWithLevel3(level, description, {
    ...commonAppStarted,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtypeRequest' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'accountRequest' },
    ...additionalAttributes
  });
  const _stepConfiguration = (param) => {
    const settings = {
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amountRequest' },
      [constants.PRODUCT_CURRENCY]: literals.currencies.MXN
    };
    const steps = {
      ['contact']: createAppStep('2', '2 ' + literals.commons.contact),
      ['amount']: createAppStep('3', '3 ' + literals.commons.amount),
      ['concept']: createAppStep('4', '4 ' + literals.commons.concept, settings),
      ['confirmation']: createAppStep('5', literals.commons.fifthConfirmation, settings)
    };
    return setFeatureFlags('codi.paymentsrequest.processCompleted', steps[param]);
  };
  const appCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, {
    ...commonAppStarted,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumberRequest' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtypeRequest' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'accountRequest' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amountRequest' },
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
    [constants.PRODUCT_STATE]: literals.commons.ended
  });
  [
    appCompleted,
    _stepConfiguration
  ].forEach((analytic) => setFeatureFlags('codi.paymentsrequest.processCompleted', analytic));
  const huellaPageView = getAdvancedFootprintWithLevel3(literals.commons.inviteContact, {
    ..._commonFunnel
  });
  setFeatureFlags('codi.paymentsrequest.footInvite', huellaPageView);
  const internalLink = getInternalLinkWithLevel3(literals.commons.inviteContact, {
    ..._commonFunnel
  });
  setFeatureFlags('codi.paymentsrequest.footLinkInvite', internalLink);
  const notAvailableCodiPageView = getAdvancedFootprintWithLevel3(literals.codiOperative.isNotAvailableCodi, {
    ..._commonFunnel
  });
  setFeatureFlags(_analyticsFeatureFlagFootError, notAvailableCodiPageView);
  const error = getError(literals.errors.conexion, {
    ..._commonFunnel
  });
  setFeatureFlags(_analyticsFeatureFlagFootError, error);
  return {
    appPageVisit,
    appStarted,
    _stepConfiguration,
    appCompleted,
    huellaPageView,
    internalLink,
    notAvailableCodiPageView,
    error
  };
};
