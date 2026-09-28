module.exports = () => {

  const constants = require('./common/_constants');
  const { getAnalyticFeatureFlag, getAdvancedFootprint, getAnalyticFeatureFlagError } = require('./common/_utils');
  const { commons, sections, operative, errors } = require('./common/_literals');
  const featureFlag = 'mortgageTracking';
  const commonPage = {
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information,
    [constants.USER_SEGMENT_GLOBAL]: '003001',
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.glomo,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons
  };
  const commonLevels = (level4 = '') => {
    return {
      ...commonPage,
      [constants.PAGE_PAGEINFO_LEVEL1]: commons.loans,
      [constants.PAGE_PAGEINFO_LEVEL2]: operative.mortgage,
      [constants.PAGE_PAGEINFO_LEVEL3]: operative.mortgageTracking.requestTracking,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
  };
  const _setFeatureFlags = (analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const _setFeatureFlagErrors = (analytic) => (getAnalyticFeatureFlagError(featureFlag, analytic));
  const _getFootPrint = (data) => _setFeatureFlags(getAdvancedFootprint(data));
  const _getFootPrintError = (data) => _setFeatureFlagErrors(getAdvancedFootprint(data));

  const _getAdvancedFootprints = (param) => {
    const typeFootPrint = {
      trackingMortgage: _getFootPrint({ ...commonLevels(), [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }}),
      requestError: _getFootPrintError({ ...commonLevels(errors.requestError), [constants.PAGE_PAGEINFO_ERRORPAGE]: errors.requestError }),
      default: _getFootPrint(commonLevels(operative.mortgageTracking[param.text]))
    };
    return typeFootPrint[param.id] || typeFootPrint.default;
  };

  return {
    _getAdvancedFootprints
  };
};
