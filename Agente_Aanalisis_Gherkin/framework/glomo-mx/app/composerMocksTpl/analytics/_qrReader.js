module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getAdvancedFootprint } = require('./common/_utils');
  const analyticsInformation = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const analyticsLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'tarjeta escaneada',
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_LEVEL3]: {
      bind: 'level3'
    }
  };
  const advancedFootprint = getAdvancedFootprint(analyticsInformation, analyticsLevels);
  const pageView = getAnalyticFeatureFlag('cardWithoutData', advancedFootprint);
  return {
    pageView
  };
};
