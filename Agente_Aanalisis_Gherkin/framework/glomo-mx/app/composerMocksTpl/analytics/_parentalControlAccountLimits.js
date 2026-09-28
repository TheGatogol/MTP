module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getAdvancedFootprintWithLevel3 } = require('./common/_utils');
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.parentalControl,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.operationalLimits,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const _getAdvancedFootprintWithLevel3 = (param) => {
    return getAnalyticFeatureFlag('youngsters.operationalLimits', getAdvancedFootprintWithLevel3(param, { ...common }));
  };
  return {
    _getAdvancedFootprintWithLevel3
  };
};
