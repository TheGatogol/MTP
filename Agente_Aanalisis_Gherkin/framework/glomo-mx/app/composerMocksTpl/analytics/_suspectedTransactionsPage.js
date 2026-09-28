module.exports = () => {
  const constants = require('./common/_constants');
  const { commons, sections } = require('./common/_literals');
  const { getAnalyticFeatureFlag, getAdvancedFootprint, getAdvancedFootprintWithLevel2, getInternalLink } = require('./common/_utils');
  const featureFlag = 'suspectedTransaction';
  const commonPage = {
    [constants.PAGE_PAGEINFO_LANGUAGE]: commons.language,
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: commons.suspiciousPurchase,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: commons.bbvaMexico
  };

  const customFields = () => {
    return {
      ...commonPage,
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
    };
  };

  const _setFeatureFlags = (analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const _getFootPrint = (data) => _setFeatureFlags(getAdvancedFootprint(data));

  const _getAdvancedFootprints = () => {
    return _getFootPrint({ ...customFields() });
  };

  const _getAdvancedFootprintWithLevel2 = (params) => {
    return _setFeatureFlags(getAdvancedFootprintWithLevel2(commons[params.text], { ...customFields() }));
  };

  const _getInternalLink = (params) => {
    return _setFeatureFlags(getInternalLink(commons[params.option], { ...customFields() }));
  };

  return {
    _getAdvancedFootprints,
    _getAdvancedFootprintWithLevel2,
    _getInternalLink
  };
};