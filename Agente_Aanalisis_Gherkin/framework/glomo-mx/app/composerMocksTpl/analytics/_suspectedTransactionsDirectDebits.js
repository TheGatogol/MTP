module.exports = () => {
  const constants = require('./common/_constants');
  const literales = require('./common/_literals');
  const {
    getAdvancedFootprintWithLevel4,
    getInternalLinkWithLevel3,
    getAnalyticFeatureFlag } = require('./common/_utils');
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literales.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literales.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literales.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literales.sections.glomo
  };
  const analyticFeatureFlag = {
    VIEW: 'suspectedTransaction.directDebits',
    LINK: 'suspectedTransaction.directDebitslink',
    ERROR: 'suspectedTransaction.directDebitsError'
  };
  const viewAnalytic = (level1, level2, level3, level4, errorPage = '') => {
    const flag = errorPage ? analyticFeatureFlag.VIEW : analyticFeatureFlag.ERROR;
    const analytics = {
      ...common,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage,
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
    return getAnalyticFeatureFlag(flag, getAdvancedFootprintWithLevel4(level3, level4, analytics));
  };
  const linkAnalytic = (level1, level2, level3, linkName) => {
    const analytics = {
      ...common,
      [constants.PAGE_PAGEACTIVITY_LINK_NAME]: linkName,
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2
    };
    return getAnalyticFeatureFlag(analyticFeatureFlag.LINK, getInternalLinkWithLevel3(level3, analytics));
  };
  return {
    viewAnalytic,
    linkAnalytic
  };
};
