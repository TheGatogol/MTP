module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');

  const flagMinimumPaymentClarifications = 'minimumPaymentClarifications';

  const {
    getAnalyticFeatureFlag,
    getInternalLink,
    getAdvancedFootprint
  } = require('./common/_utils');
  const setFeatureFlags = (featureFlag, analytic, value) => (getAnalyticFeatureFlag(featureFlag, analytic, value));

  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: CONFIG.businessUnit,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const commonLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit
  };

  const constansLevel = {
    ...commonLevels,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detailPaymentCard
  };

  const commonDynamicsLevels = {
    ...constansLevel,
    [constants.PAGE_PAGEINFO_LEVEL4]: { bind: 'dashboardSelected' }
  };

  const accessInternalLink = setFeatureFlags(
    flagMinimumPaymentClarifications,
    getInternalLink(
      literals.commons.detailPaymentLimit,
      {
        ...commons,
        ...commonLevels,
        [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail
      }
    )
  );

  const pageView = setFeatureFlags(
    flagMinimumPaymentClarifications,
    getAdvancedFootprint(
      {
        ...commons,
        ...constansLevel
      }
    )
  );
  return {
    accessInternalLink,
    pageView
  };
};
