const constants = require('./common/_constants');
const { commons, sections } = require('./common/_literals');
const { getAdvancedFootprint, addFeatureFlag} = require('./common/_utils');
const flagAnalytic = {};
const commonPage = {
  [constants.PAGE_PAGEINFO_AREA]: commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo
};
const pageViewInit = getAdvancedFootprint({
  ...commonPage,
  [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'originForm' },
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'formScreenType' },
  [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'identifierName' },
  [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'formVersion' }
});
[ pageViewInit ].forEach(analytics => addFeatureFlag(analytics, flagAnalytic));
module.exports = () => {
  return {
    pageViewInit
  };
};
