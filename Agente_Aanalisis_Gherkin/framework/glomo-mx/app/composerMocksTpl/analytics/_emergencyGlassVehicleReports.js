const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getAnalyticFeatureFlag, getAnalyticFeatureFlagError, getAdvancedFootprintWithLevel4, getAdvancedExternalLinkWithLevel4, getAdvancedFootprint } = require('./common/_utils');
const featureFlagGlass = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
const featureFlagsSosError = (featureFlagsSos, analytic) => (getAnalyticFeatureFlagError(featureFlagsSos, analytic));
module.exports = () => {
  const pageCommon = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.emergency,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.vehicle
  };
  const pageViewModalError = {
    ...pageCommon,
    [constants.PAGE_PAGEINFO_LEVEL3]: {bind: 'level3'},
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'},
    [constants.PAGE_PAGEINFO_ERRORPAGE]: {bind: 'errorPage'}
  };
  const _getAdvancedFootprint = (advanced) => {
    const typeAdvanced = {
      getAdvancedFootprintWithLevel4: featureFlagGlass('emergencyReports.vehicle.glass', getAdvancedFootprintWithLevel4({bind: 'level3'}, {bind: 'level4'}, pageCommon)),
      customFieldsFootprintWithLevel4: featureFlagGlass('emergencyReports.vehicle.glass', getAdvancedFootprintWithLevel4({bind: 'level3'}, {bind: 'level4'}, {...pageCommon, [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'userSelection' }})),
      callForHelpErrorLevel4: featureFlagsSosError('emergencyReports.vehicle.glass.callForHelp', getAdvancedFootprint(pageViewModalError)),
      alReadyRequestedErrorLevel4: featureFlagsSosError('emergencyReports.vehicle.glass.alReadyRequested', getAdvancedFootprint(pageViewModalError)),
      linkReportsGlass: featureFlagGlass('emergencyReports.vehicle.glass.link', getAdvancedExternalLinkWithLevel4(
        'dano de cristales', {bind: 'level4'},
        {
          ...pageCommon,
          [constants.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorPage' },
          [constants.PAGE_PAGEACTIVITY_LINK_URL]: { bind: 'dynamicLink' }
        }
      ))
    };
    return typeAdvanced[advanced];
  };
  return {
    _getAdvancedFootprint
  };
};
