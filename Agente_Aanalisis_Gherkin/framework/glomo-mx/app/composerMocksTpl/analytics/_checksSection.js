/* eslint-disable camelcase, no-unused-vars */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utilsAnalytics = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
};

module.exports = (product) => {

  const checks_section_footprint = (featureFlag, level1, level2, level3) => {
    const ANALYTICS_FEATURE_FLAG = {
      'key': `glomo.analytics.${featureFlag}`,
      'defaultValue': true
    };

    let obj = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      ...COMMONS
    };
    if (level3) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL3] = level3;
    }
    let analytic = utilsAnalytics.getAdvancedFootprint(obj);
    utilsAnalytics.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG);
    return analytic;
  };

  return {
    checks_section_footprint
  };
};