const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAdvancedFootprint,
  getInternalLink
} = require('./common/_utils');

module.exports = (operativeName) => {
  const footprintFlagName = `${operativeName}.stopLoss`;
  const customTaggingFlagName = `${operativeName}.stopLoss.links`;

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.dontLeave
  };

  const stopLoss = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: {
      bind: 'level1'
    },
    [constants.PAGE_PAGEINFO_LEVEL2]: {
      bind: 'level2'
    },
    [constants.PAGE_PAGEINFO_PAGEINTENT]: {
      bind: 'pageIntent'
    },
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'userSegmentProfile'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customField'
    }
  };

  const pageView = () => {
    return getAnalyticFeatureFlag(footprintFlagName,
      getAdvancedFootprint(stopLoss)
    );
  };

  const internalLink = () => {
    return getAnalyticFeatureFlag(customTaggingFlagName,
      getInternalLink({bind: 'linkName'}, stopLoss)
    );
  };

  return {
    pageView,
    internalLink
  };
};
