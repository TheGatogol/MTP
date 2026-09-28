const constants = require('./common/_constants');
const literals = require('./common/_literals');

module.exports = () => {

  const analyticsFeatureFlag = {
    key: 'glomo.analytics.dashboard.payments.businessIntelligenceTl',
    defaultValue: true
  };

  const { addFeatureFlag, getExternalLink, getInternalLink, getAdvancedFootprint } = require('./common/_utils');

  const commonPageInfo = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.mercurio
  };

  const dynamicPageView = {
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' },
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
    [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' },
    [constants.PAGE_PAGEINFO_LEVEL4]: { bind: 'level4' }
  };

  const fullData = {
    ...commonPageInfo,
    ...dynamicPageView
  };

  const pageView = getAdvancedFootprint(fullData);

  const internalLink = getInternalLink('', {
    ...fullData,
    [constants.PAGE_PAGEACTIVITY_LINK_NAME]: { bind: 'linkName' }
  });

  const externalLink = getExternalLink('', {
    ...fullData,
    [constants.PAGE_PAGEACTIVITY_LINK_URL]: { bind: 'linkUrl' }
  });

  [pageView, internalLink, externalLink].forEach((item) => addFeatureFlag(item, analyticsFeatureFlag));

  return {
    pageView,
    internalLink,
    externalLink
  };
};
