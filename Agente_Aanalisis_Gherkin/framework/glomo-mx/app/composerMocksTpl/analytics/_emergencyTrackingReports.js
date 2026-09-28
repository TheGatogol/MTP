/* eslint-disable no-use-before-define */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

module.exports = () => {
  const featureFlagsSos = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));
  const EMERGENCY_REPORTS_TRACKING_FLAG = 'emergencyReports.tracking';
  const CRASH = 'choque';

  // COMMONS
  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: LITERALS.commons.app,
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: LITERALS.commons.bbvaMexico,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency
  };

  const _footPrint = (tag) => UTILS.getAdvancedFootprintWithLevel4(CRASH, tag, {
    ...PAGE_COMMON,
    ...VEHICLE_LEVEL2
  });

  const CONFIG = {
    'reportDetected': {
      level4: LITERALS.commons.yourReportIsInProgress,
      actions: {
        call: LITERALS.commons.raiseANewReport
      }
    },
    'emergency-tracking-reports-mx-modal-tracking': {
      level4: LITERALS.commons.detail,
      actions: {
        call: LITERALS.commons.callTheExecutive
      }
    },
    'cancellationProcess': {
      level4: LITERALS.commons.cancellationReportInProcess,
      actions: {
        call: LITERALS.commons.callTheHotline
      }
    }
  };

  const ONCLICK_DYNAMIC_LINK = {
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: {
      bind: 'dynamicLink'
    }
  };

  const VEHICLE_LEVEL2 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.vehicle
  };

  const SHOCK_LEVEL3 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.crash
  };

  const DYNAMIC_LEVEL4 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    }
  };

  const getAdvancedFootprint = (tag) => {
    return featureFlagsSos(EMERGENCY_REPORTS_TRACKING_FLAG, _footPrint(tag));
  };

  const LINK_TRACKING_EXTERNAL = featureFlagsSos(EMERGENCY_REPORTS_TRACKING_FLAG, UTILS.getExternalLink({
    ...PAGE_COMMON,
    ...VEHICLE_LEVEL2,
    ...SHOCK_LEVEL3,
    ...DYNAMIC_LEVEL4,
    ...ONCLICK_DYNAMIC_LINK
  }));

  return {
    CONFIG,
    LINK_TRACKING_EXTERNAL,
    getAdvancedFootprint
  };
};
