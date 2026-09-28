const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.settings,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.operative.configureProducts
};

module.exports = () => {
  const PAGE_VIEW_CONFIGURE_PRODUCTS = UTILS.getAnalyticFeatureFlag('configureProducts', UTILS.getAdvancedFootprint(COMMONS));

  return {
    PAGE_VIEW_CONFIGURE_PRODUCTS
  };
};