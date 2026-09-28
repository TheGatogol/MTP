/* eslint-disable no-use-before-define */
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');
const COMMONS = {
  [CONSTANTS. PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};
const _getExternalLink = (link) => UTILS.getExternalLinkWithLink(link, COMMON_LEVEL1);
const _getAdvancedFootprintWithLevel2 = (level2, data) => UTILS.getAdvancedFootprintWithLevel2(level2, data);
const COMMON_LEVEL1 = {
  ...COMMONS,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.levels.level1.help
};
const HUELLA_PAGE_VIEW_HELP = UTILS.getAdvancedFootprint({
  ...COMMON_LEVEL1
});
const EXTERNAL_LINK_CALL_BBVA = _getExternalLink(LITERALS.sections.assistance.callBbva);
const EXTERNAL_LINK_CALL_BBVA_PAT = _getExternalLink(LITERALS.sections.assistance.callBbvaPat);
const EXTERNAL_LINK_CALL_REJECTED_CARD = _getExternalLink(LITERALS.sections.assistance.callTarjetRejected);
const EXTERNAL_LINK_CALL_PERSONAL_ASSISTANCE = _getExternalLink(LITERALS.sections.assistance.callAssistantManager);
const HUELLA_PAGE_VIEW_BBVA_OUT_HOURS = _getAdvancedFootprintWithLevel2(
  LITERALS.sections.assistance.callBbvaOutOfTime,
  {...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.personalAssistant}
);
const HUELLA_PAGE_VIEW_OUT_HOURS = _getAdvancedFootprintWithLevel2(
  LITERALS.sections.assistance.outOfTime,
  {...COMMON_LEVEL1}
);
const HUELLA_PAGE_VIEW_ASSISTANCE_MANAGER_OUT_HOURS = _getAdvancedFootprintWithLevel2(
  LITERALS.sections.assistance.callBbvaOutOfTimeLine,
  {...COMMON_LEVEL1}
);
const INTERNAL_LINK_BLUE_CARD = UTILS.getInternalLink('hablar con blue', COMMON_LEVEL1);
const EXTERNAL_LINK_MODAL_CALL_BBVA = UTILS.getExternalLink({
  [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: LITERALS.sections.assistance.callBbvaLink,
  ...COMMON_LEVEL1,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.sections.assistance.callBbvaOutOfTimeLine
});
const ANALYTIC_HUELLA_FEATURE_FLAG = {
  key: 'glomo.analytics.assistance.section.huellas',
  defaultValue: true
};
const ANALYTIC_CLICK_FEATURE_FLAG = {
  key: 'glomo.analytics.assistance.section.clicks',
  defaultValue: true
};
const ANALYTIC_BLUE_CLICK_FEATURE_FLAG = {
  key: 'glomo.analytics.assistance.section.blue.click',
  defaultValue: true
};
[
  HUELLA_PAGE_VIEW_HELP,
  HUELLA_PAGE_VIEW_OUT_HOURS,
  HUELLA_PAGE_VIEW_BBVA_OUT_HOURS,
  HUELLA_PAGE_VIEW_ASSISTANCE_MANAGER_OUT_HOURS
].forEach(element => UTILS.addFeatureFlag(element, ANALYTIC_HUELLA_FEATURE_FLAG));
[
  EXTERNAL_LINK_CALL_BBVA,
  EXTERNAL_LINK_CALL_REJECTED_CARD,
  EXTERNAL_LINK_CALL_PERSONAL_ASSISTANCE,
  EXTERNAL_LINK_MODAL_CALL_BBVA,
  EXTERNAL_LINK_CALL_BBVA_PAT
].forEach(element => UTILS.addFeatureFlag(element, ANALYTIC_CLICK_FEATURE_FLAG));
UTILS.addFeatureFlag(INTERNAL_LINK_BLUE_CARD, ANALYTIC_BLUE_CLICK_FEATURE_FLAG);
module.exports = {
  HUELLA_PAGE_VIEW_HELP,
  HUELLA_PAGE_VIEW_BBVA_OUT_HOURS,
  HUELLA_PAGE_VIEW_OUT_HOURS,
  HUELLA_PAGE_VIEW_ASSISTANCE_MANAGER_OUT_HOURS,
  INTERNAL_LINK_BLUE_CARD,
  EXTERNAL_LINK_CALL_BBVA,
  EXTERNAL_LINK_CALL_BBVA_PAT,
  EXTERNAL_LINK_CALL_REJECTED_CARD,
  EXTERNAL_LINK_CALL_PERSONAL_ASSISTANCE,
  EXTERNAL_LINK_MODAL_CALL_BBVA
};
