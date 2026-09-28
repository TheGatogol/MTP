module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getProduct,
    getAnalyticFeatureFlag,
    getAppStep,
    getOnClickStart,
    getAppCompletedRaw
  } = require('./common/_utils');
  const productDataPortability = getProduct(literals.commons.account);
  const featureFlag = 'dynamicsAndRewards.payrollPortability';
  const setFeatureFlags = (flag, analytic) => (getAnalyticFeatureFlag(flag, analytic));

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'member get member portability',
    [constants.APPLICATION_APPLICATION_NAME]: 'invitar amigo portabilidad nomina',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };

  const appSecondStepData = {
    ...commons,
    ...productDataPortability,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo portabilidad',
    [constants.PAGE_PAGEINFO_LEVEL2]: '2 datos invitado',
    [constants.APPLICATION_STEP]: '2 datos invitado'
  };

  const appCompletedData = {
    ...commons,
    ...productDataPortability,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo portabilidad',
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended
  };

  const clickCommonPortability = {
    ...commons,
    ...productDataPortability,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo nomina',
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage
  };


  const getOnClickStartPortability = (step) => {
    return getAnalyticFeatureFlag(featureFlag, getOnClickStart(step, literals.commons.information, clickCommonPortability));
  };

  const appCompleted = getAppCompletedRaw(appCompletedData);
  const appSecondStep = getAppStep('2', appSecondStepData);

  [
    appSecondStep,
    appCompleted
  ].forEach(item => setFeatureFlags(featureFlag, item));

  return {
    getOnClickStartPortability,
    appSecondStep,
    appCompleted
  };
};