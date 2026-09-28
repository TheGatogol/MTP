module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getInternalLink, getAdvancedFootprintWithLevel3, getAdvancedFootprintWithLevel4, getAdvancedFootprintError } = require('./common/_utils');
  const _getAnalyticFeatureFlag = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const flagSuccess = 'cardlessWithdrawalCommerce';
  const flagError = 'cardlessWithdrawalCommerce.error';
  const generalCommon = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.withdrawalWithoutCard
  };
  const operativeLevel = (pageIntent) => {
    return { [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent };
  };
  const internalLinkCommerce = _getAnalyticFeatureFlag(flagSuccess, getInternalLink(literals.commons.generateQrForCommerce, generalCommon, {[constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage }, operativeLevel(literals.commons.transaction)));
  const internalLinkQr = _getAnalyticFeatureFlag(flagSuccess, getInternalLink(literals.commons.readCodeQr, generalCommon, {[constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage }, operativeLevel(literals.commons.transaction)));
  const appPageViewGenerate = _getAnalyticFeatureFlag(flagSuccess, getAdvancedFootprintWithLevel4(literals.commons.detail, literals.commons.qrForCommerce, generalCommon, operativeLevel(literals.commons.transaction)));
  const getAdvancedFootPrintLevel3 = (level3) => _getAnalyticFeatureFlag(flagSuccess, getAdvancedFootprintWithLevel3(level3, generalCommon, operativeLevel(literals.commons.information)));
  const errorPageView = (error) => _getAnalyticFeatureFlag(flagError, getAdvancedFootprintError(error, generalCommon, {[constants.PAGE_PAGEINFO_LEVEL3]: error}, operativeLevel(literals.commons.information)));
  return {
    internalLinkCommerce,
    internalLinkQr,
    appPageViewGenerate,
    getAdvancedFootPrintLevel3,
    errorPageView
  };
};