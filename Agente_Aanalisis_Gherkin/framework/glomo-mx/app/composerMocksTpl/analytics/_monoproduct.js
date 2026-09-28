module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.mobileTokenRegistration,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.idWithoutCard,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.noLogado
  };
  const advancedFootprintFlag = (flagName, level3, error = '') => {
    const obj = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3
    };
    return utils.getAnalyticFeatureFlag(flagName, error === 'error' ? utils.getAdvancedFootprintError(level3, obj) : utils.getAdvancedFootprint(obj));
  };
  return {
    advancedFootprintFlag
  };
};