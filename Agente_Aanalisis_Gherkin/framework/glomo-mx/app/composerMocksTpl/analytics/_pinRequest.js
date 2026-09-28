module.exports = () => {
  const analyticsConstants = require('./common/_constants');
  const { getAdvancedFootprint, getExternalLink, getAnalyticFeatureFlag } = require('./common/_utils');
  const analyticsLiterals = require('./common/_literals');
  const featureFlagPinRequest = 'pinRequest';
  const featureFlagPinRequestErrors = 'pinRequestErrors';
  const commonsAnalytics = {
    [analyticsConstants.PAGE_PAGEINFO_LEVEL1]: analyticsLiterals.commons.cards,
    [analyticsConstants.PAGE_PAGEINFO_LEVEL2]: analyticsLiterals.commons.nipView,
    [analyticsConstants.PAGE_PAGEINFO_AREA]: analyticsLiterals.commons.private,
    [analyticsConstants.PAGE_PAGEINFO_PAGEINTENT]: analyticsLiterals.commons.information,
    [analyticsConstants.PAGE_PAGEINFO_PAGESEGMENT]: analyticsLiterals.commons.persons,
    [analyticsConstants.PAGE_PAGEINFO_PROJECTNAME]: analyticsLiterals.sections.glomo
  };
  const _setFeatureFlag = (analytic, featureFlag = featureFlagPinRequest) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const _getFootprint = (data, featureFlag) => _setFeatureFlag(getAdvancedFootprint(commonsAnalytics, data), featureFlag);
  const _getExternalLink = (data, featureFlag) => _setFeatureFlag(getExternalLink(commonsAnalytics, data), featureFlag);
  const _getAdvancedFootprints = (param) => {
    const typeFootPrint = {
      cardData: _getFootprint({
        [analyticsConstants.PAGE_PAGEINFO_LEVEL3]: '1 datos tarjeta'
      }),
      otp: _getFootprint({
        [analyticsConstants.PAGE_PAGEINFO_LEVEL3]: '2 ' + analyticsLiterals.commons.otp
      }),
      successPage: _getFootprint({
        [analyticsConstants.PAGE_PAGEINFO_LEVEL3]: analyticsLiterals.commons.successfulPage
      }),
      errorService: _getFootprint({
        [analyticsConstants.PAGE_PAGEINFO_LEVEL3]: analyticsLiterals.errors.service,
        [analyticsConstants.PAGE_PAGEINFO_ERRORPAGE]: analyticsLiterals.errors.service
      }, featureFlagPinRequestErrors)
    };
    return typeFootPrint[param];
  };
  const _getAdvancedExternalLinks = (param) => {
    const typeLink = {
      showAgain: _getExternalLink({
        [analyticsConstants.PAGE_PAGEINFO_LEVEL3]: analyticsLiterals.commons.successfulPage,
        [analyticsConstants.PAGE_PAGEACTIVITY_LINK_NAME]: 'ver de nuevo el nip'
      })
    };
    return typeLink[param];
  };
  return {
    _getAdvancedFootprints,
    _getAdvancedExternalLinks
  };
};
