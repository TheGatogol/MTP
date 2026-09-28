module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAppStep,
    getPageVisit,
    getAppStartedWithLevel2,
    getAppCompletedLevel2,
    getAnalyticFeatureFlag,
    getAdvancedFootprint,
    addFeatureFlag
  } = require('./common/_utils');
  const featureFunnelFlag = {
    'key': 'glomo.analytics.transversalMonoproduct',
    'defaultValue': true
  };
  const commonPage = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.basicRegistration,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.digitalActivation,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.enrollmentDigital,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.clientActivation,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const setAppStep = (stepNumber, level2) => {
    const obj = {
      ...commonPage,
      ...commonApplication,
      [constants.PAGE_PAGEINFO_LEVEL2]: `${stepNumber} ${level2}`,
      [constants.APPLICATION_STEP]: `${stepNumber} ${level2}`,
      [constants.USER_USERSTATE]: literals.commons.noLogado,
      [constants.APPLICATION_CUSTOM_FIELDS]: stepNumber >= 4 ? 'firma:sms' : ''
    };
    return getAppStep(stepNumber, obj);
  };
  const setStep = (param) => {
    const typeStep = {
      appStepTwo: setAppStep(2, 'domicilio'),
      appStepThree: setAppStep(3, 'datos de contacto'),
      appStepFour: setAppStep(4, 'otp'),
      appStepFive: setAppStep(5, 'contrato unico digital'),
      appStepSix: setAppStep(6, 'contrasena'),
      appStepSeven: setAppStep(7, 'confirmacion')
    };
    return typeStep[param];
  };
  const appPageVisit = getPageVisit('1 datos personales', {
    ...commonPage,
    ...commonApplication,
    [constants.USER_USERSTATE]: literals.commons.noLogado
  });
  const appStarted = getAppStartedWithLevel2('1 datos personales', {
    ...commonPage,
    ...commonApplication,
    [constants.USER_USERSTATE]: literals.commons.noLogado,
    [constants.APPLICATION_STEP]: { bind: 'detail' }
  });
  const appCompleted = getAppCompletedLevel2('pagina exitosa', 'finalizado', {
    ...commonPage,
    ...commonApplication,
    [constants.USER_USERSTATE]: literals.commons.noLogado,
    [constants.APPLICATION_CUSTOM_FIELDS]: 'firma:sms'
  });
  const advancedFootprintFlag = (flagName, level2) => {
    const obj = {
      ...commonPage,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.USER_USERSTATE]: literals.commons.noLogado
    };
    return getAnalyticFeatureFlag(flagName, getAdvancedFootprint(obj));
  };
  [
    appPageVisit,
    appStarted,
    setStep,
    appCompleted
  ].forEach(item => addFeatureFlag(item, featureFunnelFlag));
  return {
    appPageVisit,
    appStarted,
    setStep,
    appCompleted,
    advancedFootprintFlag
  };
};
