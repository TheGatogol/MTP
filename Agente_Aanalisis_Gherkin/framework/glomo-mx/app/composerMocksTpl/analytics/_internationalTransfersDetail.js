/* eslint-disable camelcase */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const PAGE_VIEW = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'transferencias internacionales',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'historial',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const get_custom_page_view_with_feature_flag = () => UTILS.getAnalyticFeatureFlag(LITERALS.featureFlag.internationalTransfersDetail, UTILS.getAdvancedFootprintWithLevel4({ bind: 'level3' }, 'detalle', PAGE_VIEW));

  return {
    get_custom_page_view_with_feature_flag
  };
};