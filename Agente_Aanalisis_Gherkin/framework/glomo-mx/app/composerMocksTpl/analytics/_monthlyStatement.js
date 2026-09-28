module.exports = (PRODUCT) => {
  const CONSTANTS = require('./common/_constants');
  const utils = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'estado de cuenta',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const dynamicLevel1 = text => utils.getAnalyticFeatureFlag(`${PRODUCT}.monthlyStatement`, utils.getAdvancedFootprintWithLevel1(text, COMMON));

  return {
    dynamicLevel1
  };
};