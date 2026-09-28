
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.whatsNew,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};

const ANALYTICS_FEATURE_FLAG = {
  key: 'glomo.analytics.whatsNew',
  defaultValue: true
};

const dynamicDataAnalytics = {

  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
    bind: 'dynamicLevel2'
  },
  [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
    bind: 'dynamicLevel3'
  }
};

const huellaPageView = UTILS.getAdvancedFootprint({...COMMON, ...dynamicDataAnalytics});

[ huellaPageView ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

module.exports = {
  huellaPageView,
  ANALYTICS_FEATURE_FLAG
};