module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.getAccount,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const advancedFootprintFlag = (flagName) => {
    return UTILS.getAnalyticFeatureFlag(flagName, UTILS.getAdvancedFootprint(COMMON));
  };
  return {
    advancedFootprintFlag
  };
};