module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAdvancedFootprint, getAnalyticFeatureFlag, getExternalLinkWithLink, getAdvancedFootprintError } = require('./common/_utils');
  const qrDepositFlag = 'account.qrDeposit';
  const qrDepositFlagError = 'account.qrDeposit.error';
  const qrDepositFlagShare = 'account.qrDeposit.share';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.accountData,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.qrDepositSelfService,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const pageViewQrDeposit = getAnalyticFeatureFlag(qrDepositFlag, getAdvancedFootprint(common));
  const externalLink = getAnalyticFeatureFlag(qrDepositFlagShare, getExternalLinkWithLink(literals.commons.shareQrSelfService, { ...common }));
  const errorPageViewQrDeposit = getAnalyticFeatureFlag(qrDepositFlagError, getAdvancedFootprintError(literals.errors.errorOperationNotAvailable, { ...common, [constants.PAGE_PAGEINFO_LEVEL5]: literals.errors.errorOperationNotAvailable}));

  return {
    errorPageViewQrDeposit,
    externalLink,
    pageViewQrDeposit
  };
};