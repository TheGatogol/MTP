module.exports = () => {
  const {getAnalyticFeatureFlag, getOnClickStart, getPageVisit, getAppStep, getAppCompletedLevel2, getAdvancedFootprint, getAppOnClickStartLevel3, getAppStartedWithLevel2} = require('./common/_utils');
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const _getAnalyticFeatureFlag = (featureFlag, analytic)=>(getAnalyticFeatureFlag(featureFlag, analytic));

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const funnelCommon = {
    ...common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.financialHabits,
    [constants.APPLICATION_APPLICATION_NAME]: literals.sections.habitosFinancieros,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.applicationName.selfManagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.onlineOffline,
    [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile'},
    [constants.APPLICATION_CUSTOM_FIELDS]: {bind: 'customFields'},
    [constants.APPLICATION_TYPOLOGY]: {bind: 'typology'}
  };

  const productConfiguration = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {bind: 'primaryCategory'},
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {bind: 'productName'}
  };

  const pageConfiguration = {
    ...funnelCommon,
    ...productConfiguration
  };

  const _levels = (level2) => ({
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.habitosFinancieros,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2
  });

  const getAppOnClickStartProfile = getOnClickStart(literals.commons.profile, literals.commons.information, {
    ...funnelCommon,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.profile,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: literals.commons.profile
  });

  const getAppOnClickStartUpdateInformation = getAppOnClickStartLevel3('cuenta', literals.commons.updateInformation, {
    bind: 'level3'
  }, {
    ...pageConfiguration,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: literals.commons.updateInformation
  });

  const getAppOnClickStartModifyQuestionnaire = getAppOnClickStartLevel3('cuenta', 'modificar cuestionario', {
    bind: 'level3'
  }, {
    ...pageConfiguration,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: 'modificar cuestionario'
  });

  const getAppPageVisit = getPageVisit(`1 ${literals.commons.previousInformation}`, {
    ..._levels(`1 ${literals.commons.previousInformation}`),
    ...pageConfiguration
  });

  const getAppStarted = getAppStartedWithLevel2(literals.commons.continue, {
    ..._levels(`1 ${literals.commons.previousInformation}`),
    ...pageConfiguration,
    [constants.APPLICATION_STEP]: literals.commons.continue
  });

  const createAppStep = (stepNumber, stepName, additionalData = {}) => {
    return getAppStep(stepNumber, {
      ..._levels(`${stepNumber} ${stepName}`),
      ...pageConfiguration,
      [constants.APPLICATION_STEP]: `${stepNumber} ${stepName}`,
      ...additionalData
    });
  };

  const getAppStepSummary = createAppStep('2', 'cuestionario');

  const getAppStepConfirmation = createAppStep('3', literals.commons.confirmation);

  const getAppStepOtp = createAppStep('4', literals.commons.otp, {
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });

  const appCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, {
    ..._levels(literals.commons.successfulPage),
    ...pageConfiguration,
    [constants.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'},
    [constants.APPLICATION_STEP]: `4 ${literals.commons.successfulPage}`
  });

  const getFootprint = () => {
    const analyticObjectGoBranch = {
      ...common,
      ..._levels('acude a una sucursal')
    };
    return _getAnalyticFeatureFlag('glomo.analytics.profile.kycValidationRefactor.footprint', getAdvancedFootprint(analyticObjectGoBranch));
  };

  const getError = () => {
    const analyticObjectError = {
      ...common,
      ..._levels(literals.errors.noInformation),
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.noInformation
    };
    return _getAnalyticFeatureFlag('glomo.analytics.profile.kycValidationRefactor.error', getAdvancedFootprint(analyticObjectError));
  };

  [
    getAppOnClickStartProfile,
    getAppOnClickStartUpdateInformation,
    getAppOnClickStartModifyQuestionnaire,
    getAppPageVisit,
    getAppStarted,
    getAppStepSummary,
    getAppStepConfirmation,
    getAppStepOtp,
    appCompleted
  ].forEach(analytic=>_getAnalyticFeatureFlag('glomo.analytics.profile.kycValidationRefactor', analytic));

  return {
    getAppOnClickStartProfile,
    getAppOnClickStartUpdateInformation,
    getAppOnClickStartModifyQuestionnaire,
    getAppPageVisit,
    getAppStarted,
    getAppStepSummary,
    getAppStepConfirmation,
    getAppStepOtp,
    appCompleted,
    getFootprint,
    getError
  };
};
