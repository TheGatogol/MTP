module.exports = () => {
  const constants = require('./common/_constants');
  const { getAdvancedFootprint,
    getAdvancedFootprintWithLevel3,
    getError,
    getAnalyticFeatureFlag } = require('./common/_utils');
  const featureFlag = 'invest';
  const featureFlagError = 'investError';
  const { commons: { private: nonPublic, information, persons, contractDetail, contract, detail, infoNotAvailable },
    sections: { bbvaInvest, glomo }, types: { error }, reward: { errorFavoriteCategories }
  } = require('./common/_literals');
  const dynamicData = {
    [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' }
  };
  const commonApplication = {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} ${contract}`,
    [constants.PAGE_PAGEINFO_LEVEL2]: `${detail}`,
    [constants.PAGE_PAGEINFO_AREA]: nonPublic,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo
  };
  const pageViewDetailAnalytics = getAnalyticFeatureFlag(
    featureFlag,
    getAdvancedFootprint({ ...dynamicData, ...commonApplication })
  );
  return {
    pageViewOpportunities: getAnalyticFeatureFlag(featureFlag, getAdvancedFootprint({ ...commonApplication, [constants.USER_SEGMENT_PROFILE]: 'con estrategia de portafolio' })),
    pageViewWithoutFunds: getAnalyticFeatureFlag(featureFlag, getAdvancedFootprint({ ...commonApplication, [constants.USER_SEGMENT_PROFILE]: 'sin estrategia de portafolio' })),
    pageViewContractDetail: getAnalyticFeatureFlag(featureFlag, getAdvancedFootprintWithLevel3(contractDetail, { ...commonApplication })),
    pageViewFundDetail: pageViewDetailAnalytics,
    pageViewTermsModal: pageViewDetailAnalytics,
    errorUnavailableOperation: getAnalyticFeatureFlag(featureFlagError, getError(errorFavoriteCategories, { ...commonApplication })),
    errorUnavailableInformation: getAnalyticFeatureFlag(featureFlagError, getError(`${error} ${infoNotAvailable}`, { ...commonApplication }))
  };
};
