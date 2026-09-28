module.exports = () => {
  const LITERALS = require('./common/_literals');
  const CONSTANTS = require('./common/_constants');
  const {getAdvancedFootprintWithLevel3, getError, getAnalyticFeatureFlag, getAnalyticFeatureFlagError} = require('./common/_utils');

  const FEATURE_FLAG = {
    STATUS_GENERATION_PROCESS: 'debitCardTracking.statusGenerationProcess',
    STATUS_FINISH_PROCESS: 'debitCardTracking.statusFinishProcess',
    STATUS_DISTRIBUTION: 'debitCardTracking.statusDistribution',
    STATUS_DELIVERED: 'debitCardTracking.statusDelivered',
    STATUS_DELIVERED_ERROR: 'debitCardTracking.statusDeliveredError',
    INFORMATION_NOT_AVAILABLE: 'debitCardTracking.informationNotAvailable'
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.debitCardTracking,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const getFootPrintAnalytics = (params) => {
    const typeFootPrint = {
      generationProcessFootprint: getAnalyticFeatureFlag(FEATURE_FLAG.STATUS_GENERATION_PROCESS, getAdvancedFootprintWithLevel3('en proceso de fabricacion', COMMON)),
      finishProcessFootprint: getAnalyticFeatureFlag(FEATURE_FLAG.STATUS_FINISH_PROCESS, getAdvancedFootprintWithLevel3('fabricacion finalizada', COMMON)),
      distributionFootPrint: getAnalyticFeatureFlag(FEATURE_FLAG.STATUS_DISTRIBUTION, getAdvancedFootprintWithLevel3('en camino', COMMON)),
      deliveredFootPrint: getAnalyticFeatureFlag(FEATURE_FLAG.STATUS_DELIVERED, getAdvancedFootprintWithLevel3('entregada', COMMON))
    };
    return typeFootPrint[params];
  };


  const getErrorAnalytics = (params) => {
    const typeError = {
      deliveredErrorFootPrint: getAnalyticFeatureFlagError(FEATURE_FLAG.STATUS_DELIVERED_ERROR, getError('error envio detenido', COMMON)),
      informationNotAvailableFootPrint: getAnalyticFeatureFlagError(FEATURE_FLAG.INFORMATION_NOT_AVAILABLE, getError('error informacion no disponible', COMMON))
    };
    return typeError[params];
  };

  return {
    getFootPrintAnalytics,
    getErrorAnalytics
  };

};