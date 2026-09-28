module.exports = () => {
  const constants = require('./common/_constants');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprint
  } = require('./common/_utils');
  const literals = require('./common/_literals');
  const _getAnalyticFeatureFlag = (featureFlag, analytic) =>
    getAnalyticFeatureFlag(featureFlag, analytic);
  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.idValidation,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };
  const getSigningVideoselfieFootprint = (
    typeFlag,
    level2,
    level3 = '',
    errorPage = ''
  ) => {
    const footprintBase = {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage,
      [constants.USER_SEGMENT_PROFILE]: { bind: 'segmentProfile' },
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFieldsFootprint'
      }
    };
    const typeFootPrint = {
      footprint: _getAnalyticFeatureFlag(
        'signingVideoselfieMx.footprint',
        getAdvancedFootprint(footprintBase)
      ),
      errorOperation: _getAnalyticFeatureFlag(
        'signingVideoselfieMx.error.operation',
        getAdvancedFootprint(footprintBase)
      ),
      errorBranch: _getAnalyticFeatureFlag(
        'signingVideoselfieMx.error.branch',
        getAdvancedFootprint(footprintBase)
      )
    };
    return typeFootPrint[typeFlag];
  };
  return {
    getSigningVideoselfieFootprint
  };
};