const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

module.exports = () => {
  const FEATURE_FLAG = 'emergencyReports.vehicle.crane';

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.vehicle
  };

  const _getAdvancedFootprint = (emergencyFootprint) => {
    const levels = {
      CRANE_LOCATION: LITERALS.commons.carLocation,
      CHANGE_LOCATION: `${LITERALS.commons.change} ${LITERALS.commons.carLocation}`,
      CRANE_RESUME: LITERALS.commons.summary,
      CRANE_SUCCESS: LITERALS.commons.successfulReport,
      CRANE_IN_PROGRESS: LITERALS.commons.reportInProgress
    };
    return UTILS.getAnalyticFeatureFlag(FEATURE_FLAG,
      UTILS.getAdvancedFootprintWithLevel4(LITERALS.commons.crane, levels[emergencyFootprint], PAGE_COMMON));
  };

  const _getDynamicAnalytics = (emergencyFootprint) => {
    const common = {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.crane
    };
    const footprints = {
      CLICK_OPERATIVE: UTILS.getExternalLinkWithLink({
        bind: 'linkUrl'
      }, { ...common, [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.commons.successfulReport }),
      IN_PROGRESS_CALL: UTILS.getExternalLink({
        ...common,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
          bind: 'level4'
        },
        [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: {
          bind: 'dynamicLink'
        }
      }),
      ERROR_COMUNICATION: UTILS.getError(LITERALS.commons.communicationError, {
        ...common,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.commons.communicationError
      })
    };
    return UTILS.getAnalyticFeatureFlag(FEATURE_FLAG, footprints[emergencyFootprint]);
  };

  return {
    _getAdvancedFootprint,
    _getDynamicAnalytics
  };
};
