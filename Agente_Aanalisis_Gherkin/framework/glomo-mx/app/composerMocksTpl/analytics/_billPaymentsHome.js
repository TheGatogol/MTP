module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprintWithLevel2 } = require('./common/_utils');
  const pageCommonFootprint = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };
  const appPageVisitPaymentsHome = level2 => {
    const analytics = {
      ...pageCommonFootprint,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.payServiceOrTax,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    };
    return getAnalyticFeatureFlag('billPaymentsHome', getAdvancedFootprintWithLevel2(level2, analytics));
  };
  return {
    appPageVisitPaymentsHome
  };
};
