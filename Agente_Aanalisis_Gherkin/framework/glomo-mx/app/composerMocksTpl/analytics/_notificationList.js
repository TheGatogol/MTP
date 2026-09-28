/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const _set_feature_flags = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));

module.exports = () => {
  const ANALYTICS_FEATURE_FLAG = 'notificationList';

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'notificaciones',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,

    // EXCEPTION: over GLOMO-MX repository you can override 'projectname' automatic field.
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const _getAdvancedFootprintNotifications = (analytics, level2, level3) => {
    const _footprints = {
      withLevel2: _set_feature_flags(ANALYTICS_FEATURE_FLAG, UTILS.getAdvancedFootprintWithLevel2(level2, COMMON)),
      withLevel3: _set_feature_flags(ANALYTICS_FEATURE_FLAG, UTILS.getAdvancedFootprintWithLevel3(level3, COMMON, {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
      })),
      default: _set_feature_flags(ANALYTICS_FEATURE_FLAG, UTILS.getAdvancedFootprint(COMMON))
    };
    return _footprints[analytics];
  };

  return {
    _getAdvancedFootprintNotifications
  };
};
