module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getOnClickStart,
    getPageVisitWithLevel3,
    getDynamicAppStarted,
    getAppStepWithLevel3,
    getAppCompleted,
    getAdvancedFootprint,
    addFeatureFlag
  } = require('./common/_utils');
  const analyticsFeatureFlagParkingCityRecharge = {
    'key': 'glomo.analytics.parkingMeters',
    'defaultValue': true
  };
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonFunnel = {
    [constants.APPLICATION_APPLICATION_NAME]: 'registro parquimetros',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'parking activation'
  };
  const operatelevel = (level1, level2) => {
    return {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
  };
  const objPageEnrollment = {
    ...commons,
    ...commonFunnel,
    ...operatelevel('parquimetros', literals.commons.register)
  };
  const objFootPrints = {
    ...commons,
    ...operatelevel('parquimetros', 'cuentas registradas')
  };
  const appOnClickStart = getOnClickStart(literals.commons.addOn, literals.commons.information, objFootPrints, commonFunnel);
  const pageVisit = getPageVisitWithLevel3(`1 ${literals.commons.detail}s`, objPageEnrollment);
  const appStarted = getDynamicAppStarted(`1 ${literals.commons.detail}s`, objPageEnrollment);
  const getStepWithLevel3 = (numberStep, appStep, addNumberInAppStep = true) => {
    return getAppStepWithLevel3(numberStep, `${addNumberInAppStep ? numberStep + ' ' : ''}${literals.commons[appStep]}`, objPageEnrollment);
  };
  const appCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, objPageEnrollment);
  const appPageView = getAdvancedFootprint(objFootPrints);
  [appOnClickStart,
    pageVisit,
    appStarted,
    getStepWithLevel3,
    appCompleted,
    appPageView
  ].forEach(item => addFeatureFlag(item, analyticsFeatureFlagParkingCityRecharge));
  return {
    appOnClickStart,
    pageVisit,
    appStarted,
    getStepWithLevel3,
    appCompleted,
    appPageView
  };
};