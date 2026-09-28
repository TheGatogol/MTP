const featureFlags = {
  metaSegura: {
    analytics: 'metaSeguraProactiveAssistanceAnalytics',
    error: 'metaSeguraProactiveAssistanceAnalyticsError'
  },
  invest: {
    analytics: 'investAdvisoryPortfolioProactiveAssistanceAnalytics',
    error: 'investAdvisoryPortfolioProactiveAssistanceAnalyticsError'
  }
};

module.exports = (product) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const featureFlagProactiveAssistance = featureFlags[product]?.analytics;
  const featureFlagProactiveAssistanceError = featureFlags[product]?.error;

  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprint,
    getInternalLink,
    getAdvancedFootprintError
  } = require('./common/_utils');

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_USERSTATE]: literals.commons.logado,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    },
    [constants.PAGE_PAGEINFO_LANGUAGE]: {
      bind: 'language'
    },
    [constants.USER_SEGMENT_GLOBAL]: {
      bind: 'globalSegment'
    },
    [constants.USER_AGE]: {
      bind: 'userAge'
    },
    [constants.USER_GENDER]: {
      bind: 'userGender'
    }
  };

  const commonProactiveAssistance = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'asistencia proactiva'
  };

  const commonProactiveAssistanceModal = {
    ...commonProactiveAssistance,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'contactar a un asesor'
  };

  const proactiveAssistancePageView = (type) => {
    return getAnalyticFeatureFlag(
      featureFlagProactiveAssistance,
      getAdvancedFootprint(
        {
          ...common,
          ...(type === 'modal' ?  commonProactiveAssistanceModal : commonProactiveAssistance),
          [constants.USER_SEGMENT_PROFILE]: {
            bind: 'profile'
          }
        }
      )
    );
  };

  const proactiveAssistanceInternalLink = (type, link) => getAnalyticFeatureFlag(
    featureFlagProactiveAssistance,
    getInternalLink(
      type,
      {
        ...common,
        ...(link === 'modal' ?  commonProactiveAssistanceModal : commonProactiveAssistance),
        [constants.USER_SEGMENT_PROFILE]: {
          bind: 'profile'
        }
      }
    )
  );

  const proactiveAssistanceFootprintAnalyticError = (error) => getAnalyticFeatureFlag(
    featureFlagProactiveAssistanceError,
    getAdvancedFootprintError(
      error,
      common,
      commonProactiveAssistanceModal,
      {
        [constants.PAGE_PAGEINFO_LEVEL3]: error
      }
    ));

  return {
    proactiveAssistancePageView,
    proactiveAssistanceInternalLink,
    proactiveAssistanceFootprintAnalyticError
  };
};
