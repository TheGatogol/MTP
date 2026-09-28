module.exports = () => {
  const commonConstants = require('./common/_constants');
  const {
    getOnClickStart,
    getPageVisit,
    getAppStarted,
    getAppCompletedRaw,
    getAppStep,
    addFeatureFlag
  } =  require('./common/_utils');
  const commonLiterals = require('./common/_literals');
  const _common = (level1, level2) => ({
    [commonConstants.PAGE_PAGEINFO_LEVEL1]: level1,
    [commonConstants.PAGE_PAGEINFO_LEVEL2]: level2,
    [commonConstants.PAGE_PAGEINFO_AREA]: commonLiterals.commons.private,
    [commonConstants.PAGE_PAGEINFO_PAGESEGMENT]: commonLiterals.commons.persons,
    [commonConstants.PAGE_PAGEINFO_PROJECTNAME]: commonLiterals.sections.glomo,
    [commonConstants.APPLICATION_APPLICATION_TYPE]: commonLiterals.commons.autogestion,
    [commonConstants.APPLICATION_GLOBAL_APPLICATION]: commonLiterals.commons.fido,
    [commonConstants.APPLICATION_FULLFILMENT]: commonLiterals.actions.online,
    [commonConstants.APPLICATION_APPLICATION_NAME]: commonLiterals.commons.fido,
    [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.information,
    [commonConstants.APPLICATION_TYPOLOGY]: commonLiterals.commons.touchId
  });
  const appOnClickStart = getOnClickStart('', commonLiterals.commons.information, {
    ..._common(commonLiterals.commons.securityAndPrivacy, commonLiterals.commons.accessAndSignatures),
    [commonConstants.APPLICATION_STEP]: 'activar switch huella digital'
  });
  const viewAnAccessMethodAndSignatures = getPageVisit('1 ' + commonLiterals.commons.methodAccess, {
    ..._common(commonLiterals.commons.fido, '1 ' + commonLiterals.commons.methodAccess),
    [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.transaction,
    [commonConstants.APPLICATION_STEP]: '1 ' + commonLiterals.commons.methodAccess
  });
  const _getAppStep = (aplicationStep) => {
    return getAppStarted('',
      {
        ..._common(
          commonLiterals.commons.fido,
          '1 ' + commonLiterals.commons.methodAccess
        ),
        [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.transaction,
        [commonConstants.APPLICATION_STEP]: aplicationStep
      }
    );
  };
  const viewTwoEnterBiometrics = getAppStep('2', {
    ..._common('2 ' + commonLiterals.commons.fido, commonLiterals.commons.fidoBiometric),
    [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.transaction,
    [commonConstants.APPLICATION_STEP]: '2 ' + commonLiterals.commons.fidoBiometric
  });
  const viewThreeOtp = getAppStep('3', {
    ..._common('3 ' + commonLiterals.commons.fido, commonLiterals.commons.otp),
    [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.transaction,
    [commonConstants.APPLICATION_STEP]: '3 ' + commonLiterals.commons.otp,
    [commonConstants.APPLICATION_CUSTOM_FIELDS]: commonLiterals.commons.signToken
  });
  const viewSuccessfulPage = getAppCompletedRaw({
    ..._common(commonLiterals.commons.fido, commonLiterals.commons.successfulPage),
    [commonConstants.PAGE_PAGEINFO_PAGEINTENT]: commonLiterals.commons.transaction,
    [commonConstants.APPLICATION_STEP]: commonLiterals.commons.successfulPage,
    [commonConstants.APPLICATION_STATE]: commonLiterals.commons.ended,
    [commonConstants.APPLICATION_CUSTOM_FIELDS]: commonLiterals.commons.signToken
  });
  const analyticsFeatureFlagFido = {
    key: 'glomo.analytics.fido',
    defaultValue: true
  };
  [
    appOnClickStart,
    viewAnAccessMethodAndSignatures,
    _getAppStep,
    viewTwoEnterBiometrics,
    viewThreeOtp,
    viewSuccessfulPage
  ].forEach(item => addFeatureFlag(item, analyticsFeatureFlagFido));
  return {
    appOnClickStart,
    viewAnAccessMethodAndSignatures,
    _getAppStep,
    viewTwoEnterBiometrics,
    viewThreeOtp,
    viewSuccessfulPage
  };
};
