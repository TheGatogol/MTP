module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprintErrorLevel2,
    getAdvancedFootprintWithLevel2,
    getAdvancedFootprintWithLevels2And3,
    getExternalLinkWithLink,
    getInternalLinkWithLevel2
  } = require('./common/_utils');
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.geolocation,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const getAnalytic = (analyticFlag, param, level2, level3, textLinkName, link) => {
    const typeFootprint = {
      common: getAdvancedFootprintWithLevel2(level2, common),
      withLevel3: getAdvancedFootprintWithLevels2And3(level2, level3, common),
      error: getAdvancedFootprintErrorLevel2(literals.applicationName.geolocation, level2, common),
      internalLevel2: getInternalLinkWithLevel2(textLinkName, level2, common),
      externalLinkLevel2: {
        [constants.PAGE_PAGEINFO_LEVEL2]: level2,
        ...getExternalLinkWithLink(link, common)
      }
    };
    return getAnalyticFeatureFlag(analyticFlag, typeFootprint[param]);
  };
  return {
    getAnalytic
  };
};
