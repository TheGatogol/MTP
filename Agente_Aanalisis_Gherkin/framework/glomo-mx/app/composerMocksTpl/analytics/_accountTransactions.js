module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');
  const transactionsListFF = {
    key: 'glomo.analytics.transactionsList',
    defaultValue: true
  };
  const transactionDetailFF = {
    key: 'glomo.analytics.transactionDetail',
    defaultValue: true
  };
  const transactionDetailSipare = {
    key: 'glomo.analytics.productDetail.sipare',
    defaultValue: true
  };
  const COMMON = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const _getAdvancedFootprint = (...data) => utils.getAdvancedFootprint(COMMON, ...data);
  const COMMON_DETAIL = {
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.transactions,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.transactionDetail
  };
  const DETAIL_SPARE = {
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.successfulResend
  };
  const transactionsListFootprint = _getAdvancedFootprint({
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.transactions
  });
  const transactionsListEmptyFootprint = _getAdvancedFootprint({
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.transactionsEmpty
  });
  const errorTransactionsListLinkAction = utils.getLinkError(
    literals.errors.transactions,
    COMMON
  );
  const errorTransactionsListLinkActionSipare = utils.getAdvancedFootprintError(
    literals.errors.noInformation,
    {...COMMON, ...{
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.transactions,
      [constants.PAGE_PAGEINFO_LEVEL4]: literals.errors.noInformation
    }}
  );
  const transactionDetailFootprint = _getAdvancedFootprint(COMMON_DETAIL);
  const transactionsListFootprintSipare = _getAdvancedFootprint({...COMMON_DETAIL, ...DETAIL_SPARE});
  const shareInternalLink = utils.getInternalLink(
    literals.commons.share,
    COMMON,
    COMMON_DETAIL
  );
  const shareInternalLinkSipare = utils.getInternalLink(
    literals.commons.resendReceipt,
    COMMON,
    COMMON_DETAIL
  );
  [errorTransactionsListLinkAction,
    transactionsListEmptyFootprint,
    transactionsListFootprint].forEach(analytic => utils.addFeatureFlag(analytic, transactionsListFF));
  [shareInternalLink, transactionDetailFootprint].forEach(analytic => utils.addFeatureFlag(analytic, transactionDetailFF));
  [shareInternalLinkSipare, transactionsListFootprintSipare, errorTransactionsListLinkActionSipare].forEach(analytic => utils.addFeatureFlag(analytic, transactionDetailSipare));
  return {
    transactionDetailFootprint,
    shareInternalLink,
    transactionsListFootprint,
    transactionsListEmptyFootprint,
    errorTransactionsListLinkAction,
    shareInternalLinkSipare,
    transactionsListFootprintSipare,
    errorTransactionsListLinkActionSipare
  };
};