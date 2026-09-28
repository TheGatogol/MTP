module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getProduct,
    getAnalyticFeatureFlag,
    getAppStep,
    getAppCompleted,
    getOnClickStart,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintErrorLevel2,
    getAnalyticFeatureFlagError
  } = require('./common/_utils');
  const creditCardFeatureFlag = 'dynamicsAndRewards.creditCard';
  const featureFlagFootprint = 'dynamicsAndRewards.creditCard.footprint';
  const featureFlagErrors = 'dynamicsAndRewards.creditCard';
  const productData = getProduct(literals.commons.cards);
  const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));

  const mainCommons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'invitar a un amigo tdc',
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };
  const secondaryCommons = {
    ...mainCommons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.memberGetMemberTdc,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.inviteFriendTdc,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const createAppData = (extraProps = {}) => ({
    ...secondaryCommons,
    ...productData,
    ...extraProps
  });

  const appCompletedData = createAppData({
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.empty
  });

  const appOnClickStart = createAppData({
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage
  });

  const appStep = (stepNumber, step = '') => {
    return getAnalyticFeatureFlag(
      creditCardFeatureFlag,
      getAppStep(
        `${stepNumber}`,
        {
          ...secondaryCommons,
          ...productData,
          [constants.PAGE_PAGEINFO_LEVEL2]: step,
          [constants.APPLICATION_STEP]: step
        }
      )
    );
  };


  const appErrors = (level1, error) => {
    return getAnalyticFeatureFlagError(
      featureFlagErrors,
      getAdvancedFootprintErrorLevel2(
        level1,
        error,
        {
          ...mainCommons
        })
    );
  };

  const pageViewMap = getAdvancedFootprintWithLevel2(literals.commons.location, mainCommons);
  const appCompleted = setFeatureFlags(creditCardFeatureFlag, getAppCompleted(literals.commons.successfulPage, literals.commons.ended, appCompletedData));
  const onClickStart = (step) => setFeatureFlags(creditCardFeatureFlag, getOnClickStart(step, literals.commons.information, appOnClickStart));

  [
    pageViewMap
  ].forEach(item => setFeatureFlags(featureFlagFootprint, item));
  return {
    onClickStart,
    appStep,
    appErrors,
    appCompleted,
    pageViewMap
  };
};