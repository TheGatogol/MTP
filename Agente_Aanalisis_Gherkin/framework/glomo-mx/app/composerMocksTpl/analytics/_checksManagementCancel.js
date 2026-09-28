module.exports = (product) => {

  const ANALYTICS_FEATURE_FLAG = {
    'key': `glomo.analytics.${product}`,
    'defaultValue': true
  };

  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.checks,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'cancelar cheque'
  };

  const cancel = (level)=>{
    let obj = {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
    };
    let analytic = UTILS.getAdvancedFootprint(obj);
    UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG);
    return analytic;
  };

  return {
    cancel,
    ANALYTICS_FEATURE_FLAG
  };
};
