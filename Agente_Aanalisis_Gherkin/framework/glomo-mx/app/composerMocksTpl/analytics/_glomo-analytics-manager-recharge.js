module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag,
    getOnClickStart,
    getPageVisit,
    getDynamicAppStarted,
    getAppStep,
    getAppCompleted } = require('./common/_utils');
  const featureFlagMobile = 'tagCardList';
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.tag.tagReload,
    [constants.APPLICATION_APPLICATION_NAME]: literals.tag.recharge
  };
  const commonApplication = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_TYPOLOGY]: { bind: 'provider' }
  };
  const dynamicAmount = {
    [constants.APPLICATION_CURRENCY]: literals.tag.badge,
    [constants.APPLICATION_AMOUNT]: { bind: 'detail' }
  };
  const operatelevel = (level1, level2) => {
    return {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
  };
  const commonsTagRecharge = (level1, level2) => ({
    ...commons,
    ...commonApplication,
    ...operatelevel(level1, level2)
  });
  const commonsTagRechargeDynamic = (level1, level2) => ({
    ...commonsTagRecharge(level1, level2),
    ...dynamicAmount
  });
  const setFeatureFlag = (analytic, featureFlag = featureFlagMobile) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const onClickStartRecharge = (level1, applicationStep, pageIntent) => {
    const obj = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL1]: level1
    };
    return setFeatureFlag(getOnClickStart(applicationStep, pageIntent, obj));
  };
  const pageViewVisit = (level1, level2, applicationStep) => {
    const obj = {
      ...commonsTagRecharge(level1, level2),
      [constants.APPLICATION_STEP]: applicationStep
    };
    return setFeatureFlag(getPageVisit('', obj));
  };
  const appStarted = (level1, level2) => {
    return setFeatureFlag(getDynamicAppStarted('', commonsTagRecharge(level1, level2)));
  };
  const appStep = (numberStep, level1, level2, applicationStep) => {
    const obj = {
      ...commonsTagRechargeDynamic(level1, level2),
      [constants.APPLICATION_STEP]: applicationStep
    };
    return setFeatureFlag(getAppStep(numberStep, obj));
  };
  const appCompleted = (level1, level2, applicationStep,  applicationState) => {
    const obj = {
      ...commonsTagRechargeDynamic(level1, level2),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.PRODUCT_STATE]: applicationState
    };
    return setFeatureFlag(getAppCompleted('', applicationState, obj));
  };
  return {
    pageViewVisit,
    onClickStartRecharge,
    appStarted,
    appStep,
    appCompleted
  };
};