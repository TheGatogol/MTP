/* eslint-disable camelcase, new-cap */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utils = require('./common/_utils');
const _set_feature_flags = (analytic, featureFlag) => (utils.getAnalyticFeatureFlag(featureFlag, analytic));

module.exports = () => {
  const COMMONS = (type) => ({
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: type,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.patrimonial,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  });

  const HUELLA_PAGEVIEW = utils.getAdvancedFootprint(COMMONS('contrato'));
  const HUELLA_PAGEVIEW_MOREINFO = utils.getAdvancedFootprintWithLevel2('detalle', COMMONS('contrato'));
  const ERROR_PAGEVIEW = utils.getAdvancedFootprintError('error informacion contrato', COMMONS('error informacion contrato'));
  const ERROR_PAGEVIEW_MOREINFO = utils.getAdvancedFootprintError('error detalle contrato', COMMONS('error detalle contrato'));

  [
    HUELLA_PAGEVIEW,
    HUELLA_PAGEVIEW_MOREINFO
  ].forEach(item => _set_feature_flags(item, 'equityDetail'));

  [
    ERROR_PAGEVIEW,
    ERROR_PAGEVIEW_MOREINFO
  ].forEach(item => _set_feature_flags(item, 'equityDetail.error'));

  return {
    HUELLA_PAGEVIEW,
    HUELLA_PAGEVIEW_MOREINFO,
    ERROR_PAGEVIEW,
    ERROR_PAGEVIEW_MOREINFO
  };
};