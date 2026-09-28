const CONSTANTS = require('./common/_constants');
const utils = require('./common/_utils');
const LITERALS = require('./common/_literals');

const ANALYTICS_FEATURE_FLAG = {
  key: 'glomo.analytics.configurationOperationalLimits',
  defaultValue: true
};

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'configuracion',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'limites de operacion',
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};

const dynamicLevel3 = text => utils.getAdvancedFootprintWithLevel3(text, COMMON);

[ dynamicLevel3 ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

module.exports = {
  dynamicLevel3
};
