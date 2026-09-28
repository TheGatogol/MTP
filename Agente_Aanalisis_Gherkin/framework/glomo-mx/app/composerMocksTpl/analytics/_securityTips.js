module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utilAnalytics = require('./common/_utils');

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const DYNAMIC_DATA = {
    [CONSTANTS.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHENTERTERM]: { bind: 'data' },
    [CONSTANTS.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHRESULTS]: { bind: 'numberResult' },
    [CONSTANTS.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHTERM]: { bind: 'term' }
  };

  const PAGE_VIEW_SECURITY_TIPS = utilAnalytics.getAdvancedFootprint({
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.securityTips
  });

  const PAGE_VIEW_GLOSARY = utilAnalytics.getAdvancedFootprint({
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.securityTips,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.glosario
  });

  const PAGE_VIEW_SEARCH = utilAnalytics.getAdvancedFootprint({
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.securityTips,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.search,
    ...DYNAMIC_DATA
  });

  const PAGE_VIEW_IDENTIFY_FAKE_MAIL = utilAnalytics.getAdvancedFootprint({
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.securityTips,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.tip,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' }
  });

  return {
    PAGE_VIEW_SECURITY_TIPS,
    PAGE_VIEW_GLOSARY,
    PAGE_VIEW_SEARCH,
    PAGE_VIEW_IDENTIFY_FAKE_MAIL
  };
};
