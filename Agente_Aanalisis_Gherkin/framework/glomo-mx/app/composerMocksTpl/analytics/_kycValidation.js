module.exports = () => {
  const constants = require('./common/_constants');
  const { getOnClickStart, getAppPageVisitLevel2, getStaticAppStarted,
    getAppStep, getAppCompletedLevel2, getAdvancedFootprint } = require('./common/_utils');
  const literals = require('./common/_literals');
  const analyticsFeatureFlag = {
    'key': 'glomo.analytics.profile.kycValidation',
    'defaultValue': true
  };
  const analyticsErrorFeatureFlag = {
    'key': 'glomo.analytics.profile.kycValidation.error',
    'defaultValue': true
  };
  const pageCommon = (pageIntent = literals.commons.transaction) => ({
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  });
  const applicationCommon = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.financialHabits,
    [constants.APPLICATION_APPLICATION_NAME]: literals.sections.habitosFinancieros,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' }
  };
  const _levels = (level2, errorPage) => ({
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.habitosFinancieros,
    [constants.PAGE_PAGEINFO_LEVEL2]: level2,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage || ''
  });
  const appOnClickStart = getOnClickStart('perfil', literals.commons.information, {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'perfil',
    ...pageCommon(literals.commons.information),
    ...applicationCommon
  });
  const appPageVisit = getAppPageVisitLevel2(`1 ${literals.commons.previousInformation}`, {
    ...pageCommon(),
    ..._levels(`1 ${literals.commons.previousInformation}`),
    ...applicationCommon
  });
  const appStarted = getStaticAppStarted(`${literals.commons.understood}`, '', {
    ...pageCommon(),
    ..._levels(`1 ${literals.commons.previousInformation}`),
    ...applicationCommon
  });
  const appStepSummary = getAppStep('2', {
    ...pageCommon(),
    ..._levels(`2 ${literals.commons.confirmation}`),
    ...applicationCommon,
    [constants.APPLICATION_STEP]: `2 ${literals.commons.confirmation}`
  });
  const appStepShowOtp = getAppStep('3', {
    ...pageCommon(),
    ..._levels(`3 ${literals.commons.otp}`),
    ...applicationCommon,
    [constants.APPLICATION_STEP]: `3 ${literals.commons.otp}`
  });
  const appCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, {
    ...pageCommon(),
    ..._levels(literals.commons.successfulPage),
    ...applicationCommon
  });
  const getCurrentFootPrint = (level2, errorPage = '') => {
    const obj = {
      ...pageCommon(),
      ..._levels(level2, errorPage)
    };
    return getAdvancedFootprint(obj);
  };
  const _getAdvancedFootprint = (stepParam) => {
    const typeFootprint = {
      viewStep1: getCurrentFootPrint(literals.commons.generalInformation),
      viewStep2: getCurrentFootPrint(literals.commons.personalInformation),
      viewStep3: getCurrentFootPrint(literals.commons.bankInformation),
      viewStep4: getCurrentFootPrint(literals.commons.bankOperations),
      viewStep5: getCurrentFootPrint(literals.commons.creditInformation),
      viewStep6: getCurrentFootPrint(literals.commons.useCredit),
      error: getCurrentFootPrint('error responde cuestionario en sucursal', literals.commons.information, 'error responde cuestionario en sucursal')
    };
    return typeFootprint[stepParam];
  };
  return {
    analyticsFeatureFlag,
    analyticsErrorFeatureFlag,
    appOnClickStart,
    appPageVisit,
    appStarted,
    _getAdvancedFootprint,
    appStepSummary,
    appStepShowOtp,
    appCompleted
  };
};