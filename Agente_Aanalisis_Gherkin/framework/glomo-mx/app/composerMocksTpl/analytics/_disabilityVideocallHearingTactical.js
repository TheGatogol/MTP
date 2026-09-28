/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utils = require('./common/_utils');
const _set_feature_flags = (featureFlag, analytic) => (utils.getAnalyticFeatureFlag(featureFlag, analytic));

module.exports = () => {
  const FEATURE_FLAG_SUCCESS = 'disabilityVideocallHearingTactical';
  const FEATURE_FLAG_ERROR = 'disabilityVideocallHearingTactical.error';

  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.levels.level1.help,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'videollamada lsm',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const HUELLA_PAGEVIEW_VIDEOCALL_LSM = _set_feature_flags(FEATURE_FLAG_SUCCESS, utils.getAdvancedFootprint(COMMONS));

  const get_advanced_foot_print_level3 = (level3) => _set_feature_flags(FEATURE_FLAG_SUCCESS, utils.getAdvancedFootprintWithLevel3(level3, COMMONS));

  const error_page_view = (error) => _set_feature_flags(FEATURE_FLAG_ERROR, utils.getError(error, COMMONS));

  return {
    HUELLA_PAGEVIEW_VIDEOCALL_LSM,
    get_advanced_foot_print_level3,
    error_page_view
  };
};