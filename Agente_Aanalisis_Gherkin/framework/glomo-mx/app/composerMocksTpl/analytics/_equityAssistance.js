module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {getAnalyticFeatureFlag, getAdvancedFootprint, getExternalLinkWithLink, addFeatureFlag } = require('./common/_utils');
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.contactBanker,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.patrimonial,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_MOBILE]: literals.commons.yes,
    [constants.USER_SEGMENT_GLOBAL]: literals.commons.patrimonialSegment
  };
  const _getExternalLink = (link) => getExternalLinkWithLink(link, common);
  const externalLinkCallEquity = _getExternalLink(literals.sections.assistance.callBbvaPatOutline);
  const analyticClickFeatureFlag = {
    key: 'glomo.analytics.equity.assistance.clicks',
    defaultValue: true
  };
  [
    externalLinkCallEquity
  ].forEach(element => addFeatureFlag(element, analyticClickFeatureFlag));
  const _getAdvancedFootPrint = (...data) => getAnalyticFeatureFlag('equityAssistance', getAdvancedFootprint(common, ...data));
  const _getAdvancedFootprintData = (typeAnalytic) => {
    const typeFootPrint = {
      getAdvancedFootprintContactBanker: _getAdvancedFootPrint(),
      getAdvancedFootprintBankerOutSchedules: _getAdvancedFootPrint({[constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.outOfSchedule}),
      getAdvancedFootprintCallPhone: _getAdvancedFootPrint({[constants.PAGE_PAGEACTIVITY_LINK_URL]: literals.commons.callThePhone}),
      getAdvancedFootprintCallOffice: _getAdvancedFootPrint({[constants.PAGE_PAGEACTIVITY_LINK_URL]: literals.commons.callTheOffice})
    };
    return typeFootPrint[typeAnalytic];
  };
  return {
    _getAdvancedFootprintData,
    externalLinkCallEquity
  };
};
