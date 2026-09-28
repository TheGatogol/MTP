const constants = require('./common/_constants');
const literals = require('./common/_literals');

const featureFlagOnboardingFunnel = 'onboardingForeigners.funnel';
const featureFlagOnboardingFootprint = 'onboardingForeigners.footprint';
const featureFlagOnboardingError = 'onboardingForeigners.error';

const {
  getAppPageVisitLevel2,
  getAppStep,
  getAdvancedFootprintError,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevels2And3,
  getAppOnClickStartLevel2,
  getAppStartedWithLevel2,
  getAnalyticFeatureFlag,
  getAppCompletedLevel2
} = require('./common/_utils');

const commons = {
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.enrollmentBasic,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
  [constants.USER_USERSTATE]: literals.commons.noLogado,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
};

const commonsFunnel = {
  ...commons,
  [constants.APPLICATION_APPLICATION_NAME]: literals.commons.digitalAccountForeigners,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.highCustomers,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.onboardingAccountForeign,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.ocAccount.basicLibreton,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online
};

const stepsWithProspect = {
  ...commonsFunnel,
  [constants.USER_PROSPECT_ID]: { bind: 'prospectId' }
};

const dataCompleted = {
  [constants.APPLICATION_STEP]: literals.commons.successfulPage,
  [constants.APPLICATION_STATE]: literals.commons.contracted,
  [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
  [constants.PRODUCT_STATE]: literals.commons.contracted,
  ...stepsWithProspect
};

const appOnClickStart = () => {
  const onClickStartAnalytic = getAppOnClickStartLevel2(literals.commons.enrollmentBasic, 'nacionalidad', {
    ...commonsFunnel, [constants.APPLICATION_STEP]: 'extranjera'
  });
  return getAnalyticFeatureFlag(featureFlagOnboardingFunnel, onClickStartAnalytic);
};

const appPageVisit = () => {
  const pageVisitAnalytic = getAppPageVisitLevel2(`1 ${literals.commons.oneBenefits}`, commonsFunnel);
  return getAnalyticFeatureFlag(featureFlagOnboardingFunnel, pageVisitAnalytic);
};

const getappStarted = (step) => {
  const appStartedAnalityc = getAppStartedWithLevel2(`1 ${literals.commons.oneBenefits}`, {
    [constants.APPLICATION_STEP]: step,
    ...commonsFunnel
  });
  return getAnalyticFeatureFlag(featureFlagOnboardingFunnel, appStartedAnalityc);
};

const getAppStepOffer = (numberStep, appStep) => {
  const appStepAnalytic = getAppStep(numberStep, {
    ...commonsFunnel,
    [constants.APPLICATION_STEP]: appStep,
    [constants.PAGE_PAGEINFO_LEVEL2]: appStep
  });
  return getAnalyticFeatureFlag(featureFlagOnboardingFunnel, appStepAnalytic);
};

const getAppStepProspect = (numberStep, appStep) => {
  const appStepAnalytic = getAppStep(numberStep, {
    ...commonsFunnel,
    [constants.APPLICATION_STEP]: appStep,
    [constants.PAGE_PAGEINFO_LEVEL2]: appStep,
    [constants.USER_PROSPECT_ID]: { bind: 'prospectId' }
  });
  return getAnalyticFeatureFlag(featureFlagOnboardingFunnel, appStepAnalytic);
};

const getAdvancedFootprint  = (level2) => {
  const pageViewData = getAdvancedFootprintWithLevel2(level2, commons);
  return getAnalyticFeatureFlag(featureFlagOnboardingFootprint, pageViewData);
};

const getAdvancedFootprintLevel1 = (level1, projectName = literals.commons.openmarket, pageIntent = literals.commons.information) => {
  const customCommons = {
    ...commons,
    [constants.PAGE_PAGEINFO_LEVEL1]: level1,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: projectName,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent
  };
  const pageViewData = getAdvancedFootprintWithLevel2('', customCommons);
  return getAnalyticFeatureFlag(featureFlagOnboardingFootprint, pageViewData);
};

const getAdvancedFootprintLevel3  = (level2, level3) => {
  const pageViewData = getAdvancedFootprintWithLevels2And3(level2, level3, commons);
  return getAnalyticFeatureFlag(featureFlagOnboardingFootprint, pageViewData);
};

const appCompletedSuccess = () => {
  const appCompleteAnalytic = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.contracted, dataCompleted);
  return getAnalyticFeatureFlag(featureFlagOnboardingFunnel, appCompleteAnalytic);
};

const getFootprintError = (error) => {
  const errorAnalytic = getAdvancedFootprintError(error, {
    [constants.PAGE_PAGEINFO_LEVEL2]: error,
    ...commons
  });
  return getAnalyticFeatureFlag(featureFlagOnboardingError, errorAnalytic);
};

module.exports = () => {
  return {
    appOnClickStart,
    appPageVisit,
    appCompletedSuccess,
    getappStarted,
    getAppStepOffer,
    getAppStepProspect,
    getAdvancedFootprint,
    getAdvancedFootprintLevel1,
    getAdvancedFootprintLevel3,
    getFootprintError
  };
};
