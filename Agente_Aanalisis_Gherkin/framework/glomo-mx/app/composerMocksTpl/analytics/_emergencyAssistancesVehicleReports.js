const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const featureFlagsAssists = (featureFlag, analytic) => UTILS.getAnalyticFeatureFlag(featureFlag, analytic);

module.exports = () => {
  const FLAG_ASSISTS = 'emergencyReports.vehicle.assistances';

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.vehicle,
    [CONSTANTS.USER_PROFILE_ID]: { bind: 'userProfileId' }
  };

  const EMERGENCY_ASSISTANCES_REPORTS_SUCCESS_COMMON = {
    ...PAGE_COMMON,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };

  const GET_EXTERNAL_LINK_FOOTPRINT = featureFlagsAssists(FLAG_ASSISTS, UTILS.getAdvancedExternalLinkWithLevel4({bind: 'level3'}, { bind: 'level4' }, {
    ...EMERGENCY_ASSISTANCES_REPORTS_SUCCESS_COMMON,
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: { bind: 'linkUrl' }
  }));

  const _getAdvancedFootprint = (typeAnalytic)  => {
    const typeAdvanced = {
      getAdvancedFootprintAssistsLevel3: featureFlagsAssists(FLAG_ASSISTS, UTILS.getAdvancedFootprintWithLevel3({bind: 'level3'}, PAGE_COMMON)),
      getAdvancedFootprintAssistsLevel4: featureFlagsAssists(FLAG_ASSISTS, UTILS.getAdvancedFootprintWithLevel4({bind: 'level3'}, { bind: 'level4' }, EMERGENCY_ASSISTANCES_REPORTS_SUCCESS_COMMON))
    };
    return typeAdvanced[typeAnalytic];
  };

  return {
    GET_EXTERNAL_LINK_FOOTPRINT,
    _getAdvancedFootprint
  };
};
