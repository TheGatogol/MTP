/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utils = require('./common/_utils');

module.exports = (config, product) => {
  const ANALYTICS_FEATURE_FLAG = {
    'key': `glomo.analytics.productDetail.${product}`,
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_LINK = {
    'key': `glomo.analytics.productDetail.${product}.links`,
    'defaultValue': true
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const advanced_footprint = (level1, level2, level3, level4) => {
    let obj = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      [CONSTANTS.APPLICATION_FULLFILMENT]: '',
      [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
    };

    if (level3) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL3] = level3;
    }

    if (level4) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL4] = level4;
    }

    let analytics = utils.getAdvancedFootprint(obj);
    utils.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const advanced_link = (linkName, level1, level2, level3, level4) => {
    let obj = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: level1,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      [CONSTANTS.APPLICATION_FULLFILMENT]: '',
      [CONSTANTS.PAGE_PAGEACTIVITY_LOGINTYPE]: ''
    };

    if (level3) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL3] = level3;
    }

    if (level4) {
      obj[CONSTANTS.PAGE_PAGEINFO_LEVEL4] = level4;
    }

    let analytics = utils.getInternalLink(linkName, obj);
    utils.addFeatureFlag(analytics, ANALYTICS_FEATURE_LINK);
    return analytics;
  };


  return  {
    advanced_footprint,
    advanced_link
  };
};