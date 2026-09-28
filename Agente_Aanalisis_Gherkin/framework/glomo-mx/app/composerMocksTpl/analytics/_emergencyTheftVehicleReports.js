const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const featureFlagTheft = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));

module.exports = () => {
  const EMERGENCY_REPORT_THEFT_FLAG = 'emergencyReports.vehicle.theft';

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.vehicle
  };

  const DYNAMIC_LINK = {
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: {
      bind: 'dynamicLink'
    }
  };

  const LINK_REPORT_THEFT = featureFlagTheft(EMERGENCY_REPORT_THEFT_FLAG, UTILS.getAdvancedExternalLinkWithLevel4({bind: 'level3'}, {bind: 'level4'}, {
    ...PAGE_COMMON,
    ...DYNAMIC_LINK
  }));

  const _getAdvancedFootprint = (advanced) => {
    const typeAdvanced = {
      getAdvancedFootprintWithLevel3: featureFlagTheft(EMERGENCY_REPORT_THEFT_FLAG, UTILS.getAdvancedFootprintWithLevel3({bind: 'level3'}, PAGE_COMMON)),
      getAdvancedFootprintWithLevel4: featureFlagTheft(EMERGENCY_REPORT_THEFT_FLAG, UTILS.getAdvancedFootprintWithLevel4({bind: 'level3'}, {bind: 'level4'}, PAGE_COMMON))
    };
    return typeAdvanced[advanced];
  };

  return {
    LINK_REPORT_THEFT,
    _getAdvancedFootprint
  };
};