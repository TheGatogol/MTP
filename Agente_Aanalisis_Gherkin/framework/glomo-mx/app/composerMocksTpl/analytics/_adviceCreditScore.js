module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAdvancedFootprintWithLevel2, addFeatureFlag } = require('./common/_utils');

  const analyticsAdviceCreditScoreFeatureFlag = {
    key: 'glomo.analytics.dashboard.creditScoreAdvice',
    defaultValue: true
  };

  const errorAnalyticsAdviceCreditScoreFeatureFlag = {
    key: 'glomo.analytics.dashboard.creditScoreAdvice.error',
    defaultValue: true
  };

  const commonData = {
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.USER_USERSTATE]: literals.commons.logado,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.creditScore.creditSituation
  };

  const termsAndConditions = getAdvancedFootprintWithLevel2(literals.commons.termsAndConditions, commonData);
  const dashboardAdvice = getAdvancedFootprintWithLevel2(literals.sections.dashboard, {
    [constants.USER_SEGMENT_PROFILE]: { bind: 'profile' },
    ...commonData
  });
  const informationAboutScore = getAdvancedFootprintWithLevel2(literals.sections.creditScore.informationAboutScore, commonData);
  const relevantHistory = getAdvancedFootprintWithLevel2(literals.sections.creditScore.relevantHistory, commonData);
  const challengeDetail = getAdvancedFootprintWithLevel2(literals.sections.creditScore.challengeDetail, {
    ...commonData,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'challengeName' }
  });
  const challengesList = getAdvancedFootprintWithLevel2(literals.sections.creditScore.challengesList, commonData);
  const errorInformationNotAvailable = getAdvancedFootprintWithLevel2(literals.errors.informationNotAvailable, {
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.informationNotAvailable,
    ...commonData
  });

  [
    termsAndConditions,
    dashboardAdvice,
    informationAboutScore,
    relevantHistory,
    challengeDetail,
    challengesList
  ].forEach(item => addFeatureFlag(item, analyticsAdviceCreditScoreFeatureFlag));

  addFeatureFlag(errorInformationNotAvailable, errorAnalyticsAdviceCreditScoreFeatureFlag);

  return {
    termsAndConditions,
    dashboardAdvice,
    informationAboutScore,
    relevantHistory,
    challengeDetail,
    challengesList,
    errorInformationNotAvailable
  };
};