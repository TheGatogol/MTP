/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILANALYTICS = require('./common/_utils');

module.exports = (config, product) => {

  const ANALYTICS_FEATURE_FLAG = {
    'key': `glomo.analytics.productDetail.${product}`,
    'defaultValue': true
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const advanced_footprint = (level2) => {
    let obj = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
    };

    let analytics = UTILANALYTICS.getAdvancedFootprint(obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const internal_link = (textLinkName, level2) => {
    let obj = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
    };

    let analytics = UTILANALYTICS.getInternalLink(textLinkName, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const advanced_footprint_error = (errorName, level2) => {
    let obj = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
    };

    let analytics = UTILANALYTICS.getAdvancedFootprintError(errorName, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const INTERACTION_LINK_OFF_CARD = UTILANALYTICS.getInteractionLink('', {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.emergency,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'apagar o encender tarjeta',
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: { bind: 'turnCardOnAndOff' }
  });

  return {
    advanced_footprint,
    internal_link,
    advanced_footprint_error,
    INTERACTION_LINK_OFF_CARD
  };
};
