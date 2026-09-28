const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError,
  getInternalLink,
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprint
} = require('./common/_utils');
const featureFlags = {
  flag: 'thirdPartyWallet.verification',
  event: 'thirdPartyWallet.verification.event'
};
const tpwvBaseGenerator = (config) => {
  const walletType = config.nativeIos || false ? literals.thirdPartyWallet.applePay : literals.thirdPartyWallet.googlePay;
  return (cardType) => ({
    [constants.APPLICATION_FULLFILMENT]: literals.empty,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    ...(!cardType
      ? {
        [constants.PAGE_PAGEINFO_LEVEL2]: walletType
      }
      : {
        [constants.PAGE_PAGEINFO_LEVEL2]: cardType,
        [constants.PAGE_PAGEINFO_LEVEL3]: walletType
      }
    )
  });
};
const _setFeatureFlags = (analytic, flagType = 'flag') => (getAnalyticFeatureFlag(featureFlags[flagType], analytic));
const _setErrorFeatureFlags = (analytic) => (getAnalyticFeatureFlagError(featureFlags.flag, analytic));

module.exports = (CONFIG) => {
  const tpwvBase = tpwvBaseGenerator(CONFIG);
  const _footprintLevel3 = (lvl3) => _setFeatureFlags(getAdvancedFootprintWithLevel3(lvl3, tpwvBase()));
  const _getAdvancedFootprint = (cardType) => _setFeatureFlags(getAdvancedFootprint({
    ...tpwvBase(cardType),
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.thirdPartyWallet.cardListVerify,
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.thirdPartyWallet.success
  }));
  const _getAdvancedFootprintError = () => _setErrorFeatureFlags(getAdvancedFootprint({
    ...tpwvBase(),
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.thirdPartyWallet.notAvailableCard,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.thirdPartyWallet.notAvailableCard
  }));
  const _getInternalLink = (linkName) => _setFeatureFlags(getInternalLink(linkName, {
    ...tpwvBase(),
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.thirdPartyWallet.cardListVerify
  }), 'event');
  const pageViews = {
    cardList: _footprintLevel3(literals.thirdPartyWallet.cardListVerify),
    creditVerificationSuccess: _getAdvancedFootprint(literals.commons.credit),
    debitVerificationSuccess: _getAdvancedFootprint(literals.commons.debit),
    notAvailableCard: _getAdvancedFootprintError()
  };
  const internalLinks = {
    credit: _getInternalLink(literals.thirdPartyWallet.cardVerifyCredit),
    debit: _getInternalLink(literals.thirdPartyWallet.cardVerifyDebit)
  };
  return {
    pageViews,
    internalLinks
  };
};
