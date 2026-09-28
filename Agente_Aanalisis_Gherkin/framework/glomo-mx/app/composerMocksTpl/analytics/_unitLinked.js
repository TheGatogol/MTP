/* eslint-disable new-cap */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado,
  [CONSTANTS.USER_SEGMENT_GLOBAL]: '003001',
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
};
const COMMON_LEVELS = (levelThree = '') => {
  return {
    ...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.policies,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: levelThree
  };
};
const UNIT_LINKED_DETAIL = UTILS.getAdvancedFootprint({
  ...COMMON_LEVELS()
});
const UNIT_LINKED_MORE_INFO = UTILS.getAdvancedFootprint({
  ...COMMON_LEVELS('mas informacion')
});
const UNIT_LINKED_ERROR = UTILS.getAdvancedFootprint({
  ...COMMON_LEVELS(LITERALS.errors.showInfo),
  [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.errors.showInfo
});
const UNIT_LINKED_EDIT_ALIAS = UTILS.getAdvancedFootprint({
  ...COMMON_LEVELS(LITERALS.globalApplication.editAlias)
});
module.exports = () => {
  [
    UNIT_LINKED_DETAIL,
    UNIT_LINKED_MORE_INFO,
    UNIT_LINKED_ERROR
  ].forEach(item => UTILS.getAnalyticFeatureFlag('productDetail.unitLinked', item));

  return {
    UNIT_LINKED_DETAIL,
    UNIT_LINKED_MORE_INFO,
    UNIT_LINKED_ERROR,
    UNIT_LINKED_EDIT_ALIAS
  };
};