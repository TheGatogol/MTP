module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprintWithLevel2,
    getInternalLink,
    getInternalLinkWithLevel2,
    getAdvancedFootprintErrorLevel2
  } = require('./common/_utils');

  const commonData = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'como mejorar tu salud financiera'
  };

  const featureFlags = {
    general: 'pfmPettyExpenses',
    errorOperation: 'pfmPettyExpenses.errorPage.operationNoAvailable',
    errorInformation: 'pfmPettyExpenses.errorPage.informationNoAvailable',
    customTag: 'pfmPettyExpenses.customTag',
    recentPettyExpenses: 'pfmPettyExpenses.customTag.recentPettyExpenses'
  };

  const getFootprint = (level2 = '', errorLevel) => getAnalyticFeatureFlag(featureFlags.general, getAdvancedFootprintWithLevel2(
    level2,
    (errorLevel ? {[constants.PAGE_PAGEINFO_ERRORPAGE]: level2} : {}),
    commonData), true);

  const getFootprintErrorPageOperation = (level1 = '', level2) => getAnalyticFeatureFlag(featureFlags.errorOperation, getAdvancedFootprintErrorLevel2(
    level1,
    level2,
    commonData), true);

  const getFootprintErrorPageInformation = (level1 = '', level2) => getAnalyticFeatureFlag(featureFlags.errorInformation, getAdvancedFootprintErrorLevel2(
    level1,
    level2,
    commonData), true);

  const getCustomTag = (linkName, level2 = '') => getAnalyticFeatureFlag(featureFlags.customTag, getInternalLink(
    linkName || { bind: 'linkName' }, {
      ...commonData,
      ...(level2 ? { [constants.PAGE_PAGEINFO_LEVEL2]: level2 } : {})
    }), true);

  const getPfmCustomTagWithLevel2 = () => getAnalyticFeatureFlag(featureFlags.recentPettyExpenses, getInternalLinkWithLevel2(
    { bind: 'linkName' },
    { bind: 'level2' },
    { ...commonData }), true);

  return {
    getFootprint,
    getCustomTag,
    getPfmCustomTagWithLevel2,
    getFootprintErrorPageOperation,
    getFootprintErrorPageInformation
  };
};
