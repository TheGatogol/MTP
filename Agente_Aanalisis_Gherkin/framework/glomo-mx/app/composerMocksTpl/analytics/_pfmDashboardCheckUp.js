const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {getAnalyticFeatureFlag, getAdvancedFootprintWithLevel2} = require('./common/_utils');
const digitalData = ({error = ''} = {}) => ({
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.checkUp.financialHealth,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_ERRORPAGE]: error || ''
});
const _getAdvancedFootprintWithLevel2 = ({level2 = '', error = ''} = {}) => getAnalyticFeatureFlag('pfmDashboard.checkup', getAdvancedFootprintWithLevel2(level2, digitalData({error})));
module.exports = _getAdvancedFootprintWithLevel2;