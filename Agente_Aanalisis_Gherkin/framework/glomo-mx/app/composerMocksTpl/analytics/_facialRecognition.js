module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');
  const ANALYTICS_FEATURE_FLAG_ERROR = {
    key: 'glomo.analytics.facialRecognition.error',
    defaultValue: true
  };
  const analyticsFeatureFlagValidationErrorIne = {
    key: 'glomo.analytics.facialRecognition.validationErrorINE',
    defaultValue: true
  };
  const analyticsFeatureFlagServiceErrorIne = {
    key: 'glomo.analytics.facialRecognition.serviceErrorINE',
    defaultValue: true
  };
  const ANALYTICS_FEATURE_FLAG_FLOW = {
    key: 'glomo.analytics.facialRecognition.flow',
    defaultValue: true
  };
  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const APLICATION_COMMONS = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.faceIdEnrollment,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.sections.faceIdEnrollment,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.autogestion
  };
  const DIYNAMIC_BINDS_STEP = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'step'
    }
  };
  const DIYNAMIC_BINDS_TYPOLOGY = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };
  const _LEVELS = (level2) => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.faceIdEnrollment,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
  });
  const processAnalyticsErrorFeatureFlag = (literal, advancedFootprint) => {
    if (literal === LITERALS.commons.steps.validationErrorINE) {
      UTILS.addFeatureFlag(advancedFootprint, analyticsFeatureFlagValidationErrorIne);
    } else if (literal === LITERALS.commons.steps.serviceErrorINE) {
      UTILS.addFeatureFlag(advancedFootprint, analyticsFeatureFlagServiceErrorIne);
    } else {
      UTILS.addFeatureFlag(advancedFootprint, ANALYTICS_FEATURE_FLAG_ERROR);
    }
  };
  const APP_PAGE_VISIT = UTILS.getPageVisit('', {
    ..._LEVELS('1 ' + LITERALS.commons.steps.authorization),
    ...COMMONS,
    ...APLICATION_COMMONS,
    [CONSTANTS.APPLICATION_STEP]: '1 ' + LITERALS.commons.steps.authorization,
    ...DIYNAMIC_BINDS_TYPOLOGY
  });
  const APP_PAGE_STARTED = UTILS.getAppStartedWithLevel2('1 ' + LITERALS.commons.steps.authorization, {
    ...COMMONS,
    ...APLICATION_COMMONS,
    ...DIYNAMIC_BINDS_STEP,
    ...DIYNAMIC_BINDS_TYPOLOGY,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.faceIdEnrollment
  });
  const APP_COMPLETED = UTILS.getAppCompleted('', LITERALS.commons.finalized, {
    ..._LEVELS(LITERALS.commons.successfulPage),
    ...COMMONS,
    ...APLICATION_COMMONS,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    ...DIYNAMIC_BINDS_TYPOLOGY
  });
  [APP_PAGE_VISIT, APP_PAGE_STARTED, APP_COMPLETED].forEach((item) => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_FLOW));
  const processGetAppStep = (step, stepName) => {
    const appStep = UTILS.getAppStep(step, {
      ..._LEVELS(step + ' ' + stepName),
      ...COMMONS,
      ...APLICATION_COMMONS,
      [CONSTANTS.APPLICATION_STEP]: step + ' ' + stepName,
      ...DIYNAMIC_BINDS_TYPOLOGY
    });
    UTILS.addFeatureFlag(appStep, ANALYTICS_FEATURE_FLAG_FLOW);
    return appStep;
  };
  const processGetAdvancedFootprint = (level, isError) => {
    let advancedFootprint;
    if (isError) {
      advancedFootprint = UTILS.getAdvancedFootprintError(level, {
        ..._LEVELS(level),
        ...COMMONS
      });
      processAnalyticsErrorFeatureFlag(level, advancedFootprint);
    } else {
      advancedFootprint = UTILS.getAdvancedFootprint({
        ..._LEVELS(level),
        ...COMMONS
      });
      UTILS.addFeatureFlag(advancedFootprint, ANALYTICS_FEATURE_FLAG_FLOW);
    }
    return advancedFootprint;
  };
  return {
    APP_PAGE_VISIT,
    APP_PAGE_STARTED,
    APP_COMPLETED,
    processGetAdvancedFootprint,
    processGetAppStep
  };
};
