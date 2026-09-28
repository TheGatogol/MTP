const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAnalyticFeatureFlag, getAdvancedFootprintWithLevel2, getAdvancedFootprintWithLevel3, getInternalLinkWithLevel2, getAdvancedFootprintError, getAdvancedFootprint} = require('./common/_utils');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
module.exports = () => {
  const analyticsFeatureFlags = 'loanSustainableRateJustification.sustainableRateJustification';
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const getAdvancedFootprintSustainableRateJustification = (analytics, level2, getInternalLink, level3) => {
    const _footprints = {
      withLevel2: setFeatureFlags(analyticsFeatureFlags, getAdvancedFootprintWithLevel2(level2, common)),
      withLevel3: setFeatureFlags(analyticsFeatureFlags, getAdvancedFootprintWithLevel3(level3, common, {
        [constants.PAGE_PAGEINFO_LEVEL2]: level2
      })),
      getInternalLink: setFeatureFlags(analyticsFeatureFlags, getInternalLinkWithLevel2(getInternalLink, level2, common, {
        [constants.PAGE_PAGEINFO_LEVEL3]: level3
      })),
      getAdvancedFootprintError: setFeatureFlags(analyticsFeatureFlags, getAdvancedFootprintError(level3, common, {
        [constants.PAGE_PAGEINFO_LEVEL2]: level2,
        [constants.PAGE_PAGEINFO_LEVEL3]: level3
      })),
      default: setFeatureFlags(analyticsFeatureFlags, getAdvancedFootprint(common))
    };
    return _footprints[analytics];
  };
  return {
    getAdvancedFootprintSustainableRateJustification
  };
};
