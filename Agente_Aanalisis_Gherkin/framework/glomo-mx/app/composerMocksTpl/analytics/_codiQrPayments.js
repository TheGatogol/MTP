const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAppPageVisitLevel2,
  getAppStartedWithLevel2,
  getAdvancedFootprintErrorLevel2,
  getAppCompletedRaw,
  getAppStep,
  getAppOnClickStartLevel2
} = require('./common/_utils');
const _setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const _common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.payWithQr,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const _commonApplication = {
    ..._common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.operative.qrPayments,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.payWithQr,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const _getAppStepCommon = (stepNumber, level2, additionalProps) => getAppStep(stepNumber, {
    ..._commonApplication,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.APPLICATION_STEP]: level2, ...additionalProps
  });
  const appPageVisit = getAppPageVisitLevel2('1 ' + literals.commons.qrCodeValid, {
    ..._commonApplication
  });
  const appStarted = getAppStartedWithLevel2('1 ' + literals.commons.qrCodeValid, {
    ..._commonApplication,
    [constants.APPLICATION_STEP]: literals.commons.continue
  });
  const _appStepsConfiguration = (param) => {
    const settings = {
      [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
      [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
      [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
      [constants.PRODUCT_AMOUNT]: { bind: 'amountQr' }
    };
    if (param === 'otp') {
      Object.assign(settings, {
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'signature' },
        [constants.PRODUCT_AMOUNT]: { bind: 'amount' }
      });
    }
    const typeStepSelector = {
      ['selectAccountStep']: [2, '2 ' + literals.commons.selectAccount],
      ['confirmation']: [3, '3 ' + literals.commons.confirmation],
      ['otp']: [4, '4 otp']
    };
    const typeStep = typeStepSelector[param];
    return _setFeatureFlags('codi.qrpayments.feature', _getAppStepCommon(typeStep[0], typeStep[1], settings));
  };
  const errorQrInvalid = getAdvancedFootprintErrorLevel2(literals.commons.payWithQr, literals.errors.thisQIsNotValid, { ..._common });
  _setFeatureFlags('codi.qrpayments.error.qr', errorQrInvalid);
  const errorConnection = getAdvancedFootprintErrorLevel2(literals.commons.payWithQr, literals.errors.conexion, { ..._common });
  _setFeatureFlags('codi.qrpayments.error.conection', errorConnection);
  const errorUnrealizedOperation = _setFeatureFlags('codi.qrpayments.error.unrealizedOperation',
    getAdvancedFootprintErrorLevel2(
      literals.commons.payWithQr,
      literals.errors.operationError,
      { ..._common }
    )
  );
  const validateQr = _setFeatureFlags('codi.qrpayments.feature',
    getAppOnClickStartLevel2(
      literals.codiOperative.qrOperation,
      literals.codiOperative.scan,
      {
        ..._commonApplication,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
        [constants.USER_USERSTATE]: literals.commons.logado,
        [constants.APPLICATION_STEP]: literals.codiOperative.qrScan
      }));
  const appCompleted = getAppCompletedRaw({
    ..._commonApplication,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'signature' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.PRODUCT_STATE]: literals.commons.ended,
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  });
  [
    _appStepsConfiguration,
    appPageVisit,
    appStarted,
    appCompleted
  ].forEach(item => _setFeatureFlags('codi.qrpayments.feature', item));
  return {
    appPageVisit,
    appStarted,
    appCompleted,
    errorQrInvalid,
    errorConnection,
    errorUnrealizedOperation,
    _appStepsConfiguration,
    validateQr
  };
};
