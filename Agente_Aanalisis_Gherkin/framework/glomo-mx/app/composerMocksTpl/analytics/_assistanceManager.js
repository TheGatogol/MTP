const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');
const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};
const COMMON_ASESOR_PERSONAL_LEVEL1 = LITERALS.commons.personalAssistant;
const _getCommonsWhitLevel1 = (level1) => ({
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
  ...COMMONS
});
const HUELLA_PAGE_VIEW_ASESOR_PERSONAL = UTILS.getAnalyticFeatureFlag('assistance.manager.huellas', UTILS.getAdvancedFootprint(
  _getCommonsWhitLevel1(COMMON_ASESOR_PERSONAL_LEVEL1)
));
const _getAdvancedFootprintWithLevel2 = (type, level2, data) => {
  if (type === LITERALS.actions.mark) {
    return UTILS.getAnalyticFeatureFlag(
      'assistance.manager.huellas',
      UTILS.getAdvancedFootprintWithLevel2(level2, _getCommonsWhitLevel1(data))
    );
  } else {
    return UTILS.getAnalyticFeatureFlag(
      'assistance.manager.clicks',
      UTILS.getExternalLinkWithLink(level2, _getCommonsWhitLevel1(data))
    );
  }
};
const LEVEL2 = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]:
  LITERALS.sections.assistance.callBbvaOutOfTimeLine
};
const EXTERNAL_LINK_CALL_LINE_BBVA = UTILS.getAnalyticFeatureFlag('assistance.manager.clicks', UTILS.getExternalLinkWithLink(
  LITERALS.sections.assistance.callBbvaLink,
  LEVEL2,
  _getCommonsWhitLevel1(COMMON_ASESOR_PERSONAL_LEVEL1)
));
module.exports = {
  HUELLA_PAGE_VIEW_ASESOR_PERSONAL,
  EXTERNAL_LINK_CALL_LINE_BBVA,
  _getAdvancedFootprintWithLevel2
};
