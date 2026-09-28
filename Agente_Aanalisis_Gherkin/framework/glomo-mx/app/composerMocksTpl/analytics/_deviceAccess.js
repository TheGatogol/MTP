module.exports = () => {
  const constantsFile = require('./common/_constants');
  const utilsFile = require('./common/_utils');
  const literalsFile = require('./common/_literals');
  const commonProperties = {
    [constantsFile.PAGE_PAGEINFO_PAGESEGMENT]: literalsFile.commons.general,
    [constantsFile.PAGE_PAGEINFO_PAGEINTENT]: literalsFile.commons.information,
    [constantsFile.PAGE_PAGEINFO_AREA]: literalsFile.commons.public,
    [constantsFile.PAGE_PAGEINFO_PROJECTNAME]: literalsFile.sections.glomo,
    [constantsFile.USER_USERSTATE]: literalsFile.commons.noLogado
  };
  const aplicationCommons = {
    [constantsFile.APPLICATION_GLOBAL_APPLICATION]: literalsFile.globalApplication.reactivateMobileServices,
    [constantsFile.APPLICATION_APPLICATION_NAME]: literalsFile.sections.mobileTokenRecovery,
    [constantsFile.APPLICATION_APPLICATION_TYPE]: literalsFile.commons.clientActivation,
    [constantsFile.APPLICATION_FULLFILMENT]: literalsFile.commons.online
  };
  const dynamicBindsUrl = {
    [constantsFile.PAGE_PAGEACTIVITY_LINK_NAME]: {
      bind: 'linkUrl'
    }
  };
  const _levels = (level2) => ({
    [constantsFile.PAGE_PAGEINFO_LEVEL1]: literalsFile.sections.mobileTokenRecovery,
    [constantsFile.PAGE_PAGEINFO_LEVEL2]: level2
  });
  const _footprintLevels = (level2) => ({
    [constantsFile.PAGE_PAGEINFO_LEVEL1]: literalsFile.sections.tokenMovil,
    [constantsFile.PAGE_PAGEINFO_LEVEL2]: level2
  });
  const appPageVisit = utilsFile.getPageVisit('', {
    ..._levels('1 ' + literalsFile.commons.faceIdRequest),
    ...commonProperties,
    ...aplicationCommons,
    [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constantsFile.APPLICATION_STEP]: '1 ' + literalsFile.commons.faceIdRequest,
    [constantsFile.APPLICATION_STATE]: literalsFile.commons.init
  });
  const appPageStarted = utilsFile.getAppStarted('', {
    ..._levels('1 ' + literalsFile.commons.faceIdRequest),
    ...commonProperties,
    ...aplicationCommons,
    [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constantsFile.APPLICATION_STEP]: literalsFile.commons.startVerification
  });
  const appStepTwoValidateData = utilsFile.getAppStep('2', {
    ..._levels('2 ' + literalsFile.commons.dataValidation),
    ...commonProperties,
    ...aplicationCommons,
    [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constantsFile.APPLICATION_STEP]: '2 ' + literalsFile.commons.dataValidation
  });
  const appCompleted = utilsFile.getAppCompletedLevel2(literalsFile.commons.successfulPage, literalsFile.commons.ended, {
    ...commonProperties,
    ...aplicationCommons,
    [constantsFile.PAGE_PAGEINFO_LEVEL1]: literalsFile.sections.mobileTokenRecovery,
    [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' }
  });
  const _setData = (value) => ({
    ..._levels(value === literalsFile.commons.biometric ? '2 ' + literalsFile.commons.faceIdRequest : '2 ' + literalsFile.commons.requestCallTwo),
    ...commonProperties,
    ...aplicationCommons,
    [constantsFile.APPLICATION_PROCESS]: { bind: 'process' },
    [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constantsFile.APPLICATION_STEP]: { bind: 'step' }
  });
  const _appStepTwo = (flow) => (utilsFile.getAppStep('2', _setData(flow)));
  const appStepTwoIvr = _appStepTwo(literalsFile.commons.ivr);
  const appSteppTwoBiometric = _appStepTwo(literalsFile.commons.biometric);
  const _advancedFootPrint = (footPrintName, hasTypology = false) => (hasTypology ?
    utilsFile.getAdvancedFootprint({
      ..._levels(footPrintName),
      ...commonProperties,
      [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' }
    }) :
    utilsFile.getAdvancedFootprint({..._levels(footPrintName), ...commonProperties}));
  const _advancedFootPrintError = (nameError, hasTypology = false) => {
    const baseData = { ..._footprintLevels(nameError), ...commonProperties };
    return utilsFile.getAdvancedFootprintError(nameError, hasTypology ? {
      ...baseData,
      [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' }
    } : baseData);
  };
  const footPrintAdditionalVerification = utilsFile.getInternalLink(literalsFile.commons.startAdditionalVerification, {
    ..._levels(literalsFile.commons.successFaceId),
    ...commonProperties
  });
  const qrLink = (dynamicBindsUrl[constantsFile.PAGE_PAGEACTIVITY_LINK_NAME] === literalsFile.commons.haveQr ? '' :
    utilsFile.getExternalLinkWithLink(literalsFile.commons.dontHaveQr, {
      ..._levels(literalsFile.commons.qr),
      ...commonProperties,
      ...dynamicBindsUrl
    }));
  const idWithoutCard = (utilsFile.getAdvancedFootprint({
    ..._levels('1 ' + literalsFile.commons.id),
    ...commonProperties,
    [constantsFile.PAGE_PAGEACTIVITY_LINK_NAME]: literalsFile.commons.idWithoutCardOrAccount}));
  const advancedFootprintFlag = (flagName, level1, level2, level3 = '', error = '') => {
    const obj = {
      ...commonProperties,
      [constantsFile.USER_PROSPECT_ID]: { bind: 'prospectID' },
      [constantsFile.PAGE_PAGEINFO_LEVEL1]: level1,
      [constantsFile.PAGE_PAGEINFO_LEVEL2]: level2,
      [constantsFile.PAGE_PAGEINFO_LEVEL3]: level3
    };
    return utilsFile.getAnalyticFeatureFlag(flagName, error === 'error' ? utilsFile.getAdvancedFootprintError(level3 ? level3 : level2, obj) : utilsFile.getAdvancedFootprint(obj));
  };
  const internalLinkClickCall = (flagName) => {
    const analyticData = {
      [constantsFile.PAGE_PAGEINFO_LEVEL1]: literalsFile.sections.mobileTokenRecovery,
      ...commonProperties,
      [constantsFile.USER_PROSPECT_ID]: { bind: 'prospectID' }
    };
    return utilsFile.getAnalyticFeatureFlag(flagName, utilsFile.getInternalLinkWithLevel2(literalsFile.commons.requestCall, literalsFile.commons.requestCallTwo, analyticData));
  };
  const appOnClickStart = (utilsFile.getAppOnClickStartLevel({
    [constantsFile.PAGE_PAGEINFO_LEVEL1]: literalsFile.commons.id,
    ...commonProperties,
    ...aplicationCommons,
    [constantsFile.APPLICATION_STEP]: { bind: 'step' },
    [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' }
  }));
  const internalLink = utilsFile.getInternalLinkWithLevel2(literalsFile.commons.requestCall, literalsFile.commons.requestCallTwo, {
    [constantsFile.PAGE_PAGEINFO_LEVEL1]: literalsFile.sections.mobileTokenRecovery,
    ...commonProperties
  });
  const advancedFootprintErrorFlag = (flagName, nameError, hasTypology = false) => {
    return utilsFile.getAnalyticFeatureFlag(flagName, hasTypology ?
      utilsFile.getAdvancedFootprintError(nameError, {
        ..._levels(nameError),
        ...commonProperties,
        [constantsFile.APPLICATION_TYPOLOGY]: { bind: 'typology' }
      }) :
      utilsFile.getAdvancedFootprintError(nameError, {..._levels(nameError), ...commonProperties}));
  };
  const analyticsDeviceAccessFlowFunnel = {
    key: 'glomo.analytics.deviceAccess.flowFunnel',
    defaultValue: true
  };
  const analyticsDeviceAccessFootPrintUnassociatedCardFeatureFlag = {
    key: 'glomo.analytics.deviceAccess.unassociatedCard',
    defaultValue: true
  };
  const analyticsDeviceAccessFootPrintBloquedFacialIdFeatureFlag = {
    key: 'glomo.analytics.deviceAccess.faceRecognitionBlocked',
    defaultValue: true
  };
  const analyticsDeviceAccessFootPrintInvalidCardFeatureFlag = {
    key: 'glomo.analytics.deviceAccess.invalidCard',
    defaultValue: true
  };
  const analyticsDeviceAccessFootPrintRepeatRegistrationFeatureFlag = {
    key: 'glomo.analytics.deviceAccess.repeatRegistration',
    defaultValue: true
  };
  const analyticsDeviceAccessFootPrintBlockedApp = {
    key: 'glomo.analytics.deviceAccess.blockedApp',
    defaultValue: true
  };
  const analyticsDeviceAccessSomethingIsWrong = {
    key: 'glomo.analytics.deviceAccess.somethingIsWrong',
    defaultValue: true
  };
  const analyticsDeviceAccessIncorrectIdentity = {
    key: 'glomo.analytics.deviceAccess.incorrectIdentity',
    defaultValue: true
  };
  const analyticsDeviceAccessIdentityFail = {
    key: 'glomo.analytics.deviceAccess.identityFail',
    defaultValue: true
  };
  const analyticsDeviceAccessWithCard = {
    key: 'glomo.analytics.deviceAccess.accessWithCard',
    defaultValue: true
  };
  const footPrintErrors = {
    footPrintErrorUnassociatedCard: {
      analytic: _advancedFootPrintError(literalsFile.errors.unassociatedCard),
      featureFlag: analyticsDeviceAccessFootPrintUnassociatedCardFeatureFlag
    },
    footPrintErrorBloquedFacialId: {
      analytic: _advancedFootPrintError(literalsFile.errors.bloquedFacialId),
      featureFlag: analyticsDeviceAccessFootPrintBloquedFacialIdFeatureFlag
    },
    footPrintErrorInvalidCard: {
      analytic: _advancedFootPrintError(literalsFile.errors.invalidCard),
      featureFlag: analyticsDeviceAccessFootPrintInvalidCardFeatureFlag
    },
    footPrintErrorRepeatRegistration: {
      analytic: _advancedFootPrintError(literalsFile.errors.repeatRegistration),
      featureFlag: analyticsDeviceAccessFootPrintRepeatRegistrationFeatureFlag
    },
    footPrintErrorBlockedApp: {
      analytic: _advancedFootPrintError(literalsFile.errors.blockedApp),
      featureFlag: analyticsDeviceAccessFootPrintBlockedApp
    },
    footPrintErrorSomethingIsWrong: {
      analytic: _advancedFootPrintError(literalsFile.errors.somethingIsWrong, true),
      featureFlag: analyticsDeviceAccessSomethingIsWrong
    },
    footPrintErrorIncorrectIdentity: {
      analytic: _advancedFootPrintError(literalsFile.errors.incorrectIdentity, true),
      featureFlag: analyticsDeviceAccessIncorrectIdentity
    },
    footPrintErrorIdentityFail: {
      analytic: _advancedFootPrintError(literalsFile.errors.identityFail),
      featureFlag: analyticsDeviceAccessIdentityFail
    },
    footprintErrorAccessWithCard: {
      analytic: _advancedFootPrintError(literalsFile.errors.accessWithCard),
      featureFlag: analyticsDeviceAccessWithCard
    }
  };
  [
    appPageVisit,
    appPageStarted,
    appStepTwoIvr,
    appSteppTwoBiometric,
    _advancedFootPrint,
    footPrintAdditionalVerification,
    qrLink,
    idWithoutCard,
    appOnClickStart,
    appStepTwoValidateData,
    appCompleted,
    internalLink
  ].forEach(item => utilsFile.addFeatureFlag(item, analyticsDeviceAccessFlowFunnel));
  Object.keys(footPrintErrors).forEach(error => {
    utilsFile.addFeatureFlag((footPrintErrors[error].analytic, footPrintErrors[error].featureFlag));
  });
  return {
    appPageVisit,
    appPageStarted,
    appStepTwoIvr,
    appSteppTwoBiometric,
    _advancedFootPrint,
    qrLink,
    idWithoutCard,
    footPrintAdditionalVerification,
    footPrintErrors,
    advancedFootprintFlag,
    advancedFootprintErrorFlag,
    appOnClickStart,
    appStepTwoValidateData,
    appCompleted,
    internalLinkClickCall
  };
};
