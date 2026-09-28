const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAppStep,
  getAdvancedFootprintError,
  getPageVisitRaw,
  getAppStartedWithLevel2,
  getAdvancedFootprintWithLevel2,
  getInternalLinkWithLevel2,
  getAppCompletedRaw
} = require('./common/_utils');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const _common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'p2p request',
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.requestQr,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.createQr
  };
  const _commonFoot = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.createQr
  };
  const _getAppStepCommon = (stepNumber, level2, additionalProps) => getAppStep(stepNumber, {
    ..._common, [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_STEP]: level2, ...additionalProps
  });
  const getAdvancedFootprintErrorCommon = (level2, featureFlag) => {
    return setFeatureFlags(featureFlag, getAdvancedFootprintError(level2, { ..._commonFoot, [constants.PAGE_PAGEINFO_LEVEL2]: level2 }));
  };
  const appPageVisit = getPageVisitRaw({
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL2]: '1 ' + literals.commons.depositAccount, [constants.APPLICATION_STEP]: '1 ' + literals.commons.depositAccount
  });
  const appStarted = getAppStartedWithLevel2('1 ' + literals.commons.depositAccount, { ..._common, [constants.APPLICATION_STEP]: 'seleccion cuenta' });
  const _stepConfiguration = (param) => {
    const settings = {
      [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' }, [constants.APPLICATION_CURRENCY]: literals.currencies.MXN
    };
    const steps = {
      ['quantityAmount']: _getAppStepCommon('2', '2 ' + literals.commons.quantityAmount),
      ['concept']: _getAppStepCommon('3', '3 ' + literals.commons.concept, settings),
      ['confirmation']: _getAppStepCommon('4', '4 ' + literals.commons.confirmation, settings)
    };
    return setFeatureFlags('codi.qrrequest.feature', steps[param]);
  };
  const appCompleted = getAppCompletedRaw({
    ..._common,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.createQr,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.APPLICATION_TYPOLOGY]: 'qr con importe y con concepto',
    [constants.PRODUCT_STATE]: literals.commons.ended,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'reference' },
    [constants.APPLICATION_CURRENCY]: literals.currencies.MXN
  });
  const footInfo = getAdvancedFootprintWithLevel2(literals.commons.qrInformation, _commonFoot);
  const footCreateQr = getInternalLinkWithLevel2(literals.commons.createQr, literals.commons.qrInformation, _commonFoot);
  const errorUnverifiedAccount = getAdvancedFootprintErrorCommon(literals.commons.unverifiedAccount, 'codi.qrrequest.error.account');
  const errorLoad = getAdvancedFootprintErrorCommon(literals.errors.conexion, 'codi.qrrequest.error.conection');
  [
    appPageVisit,
    appStarted,
    _stepConfiguration,
    appCompleted,
    footInfo,
    footCreateQr,
    errorLoad
  ].forEach(item => setFeatureFlags('codi.qrrequest.feature', item));
  return {
    appPageVisit,
    appStarted,
    _stepConfiguration,
    appCompleted,
    footInfo,
    footCreateQr,
    errorUnverifiedAccount,
    errorLoad
  };
};
