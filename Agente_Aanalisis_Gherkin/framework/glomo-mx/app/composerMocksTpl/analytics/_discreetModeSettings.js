module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utilsAnalytics = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.discreetModeSettings',
    'defaultValue': true
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.discreetMode.discreet_mode,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.empty,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_DEVICE_MOBILE]: LITERALS.commons.yes
  };

  const PAGE_VIEW = utilsAnalytics.getAdvancedFootprintWithLevel2(
    LITERALS.commons.detail,
    ANALYTICS_FEATURE_FLAG,
    COMMON
  );

  return {
    PAGE_VIEW
  };
};
