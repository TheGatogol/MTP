const constants = require('./common/_constants');
const literals = require('./common/_literals');
const utils = require('./common/_utils');
const featureFlags = {
  flag: 'mobile.payment',
  eventFlag: 'mobile.payment.event'
};
const common = {
  [constants.APPLICATION_FULLFILMENT]: literals.empty,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_VERSION]: literals.commons.version_1,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
};
const commonLvl1 = { ...common, [constants.PAGE_PAGEINFO_LEVEL1]: literals.mobilePayments.mobilePayment };
const commonInteractionLink = {
  ...commonLvl1,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.mobilePayments.cancelService
};
const _setFeatureFlags = (analytic, flagType = 'flag') => (utils.getAnalyticFeatureFlag(featureFlags[flagType], analytic));
const _setErrorFeatureFlags = (analytic) => (utils.getAnalyticFeatureFlagError(featureFlags.flag, analytic));
const _getInternalLink = (link, lvl1, lvl2, lvl3) => _setFeatureFlags(utils.getInternalLink(
  link,
  {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: lvl1,
    [constants.PAGE_PAGEINFO_LEVEL2]: lvl2,
    [constants.PAGE_PAGEINFO_LEVEL3]: lvl3
  }
), 'event');
const _internalLinkPressMobilePaymentPd = cardType => {
  return _getInternalLink(literals.mobilePayments.pdMobilePayment + ' ' + cardType, literals.commons.cards, cardType, literals.commons.detail);
};
const _interactionLink = (text) => _setFeatureFlags(utils.getInteractionLink(text, commonInteractionLink), 'event');
const _footprintLevel2 = (lvl2) => _setFeatureFlags(utils.getAdvancedFootprintWithLevel2(lvl2, commonLvl1));
const _footprintLevel2And3 = (lvl2, lvl3) => _setFeatureFlags(utils.getAdvancedFootprintWithLevels2And3(lvl2, lvl3, commonLvl1));
const _footprintErrorLevel2 = (lvl1, error) => _setErrorFeatureFlags(utils.getAdvancedFootprintErrorLevel2(lvl1, error, common));
module.exports = () => {
  const pageViews = {
    onboarding: _footprintLevel2(literals.mobilePayments.serviceInformation),
    onboardingActiveService: _footprintLevel2(literals.commons.activate),
    expiredKeys: _footprintLevel2(literals.mobilePayments.expiredKeys),
    unsubscribe: _footprintLevel2(literals.mobilePayments.cancelService),
    establishedConnection: _footprintLevel2(literals.mobilePayments.establishedConnection),
    activeService: _footprintLevel2And3(literals.commons.activate, literals.commons.successfulPage),
    addCard: _footprintLevel2And3(literals.mobilePayments.addCard, literals.commons.successfulPage),
    otp: _footprintLevel2And3(literals.commons.activate, literals.commons.otp),
    failedConnection: _footprintErrorLevel2(literals.mobilePayments.mobilePayment, literals.mobilePayments.establishedConnection),
    cardNotAllowed: _footprintErrorLevel2(literals.mobilePayments.mobilePayment, literals.mobilePayments.cardError),
    activityNotPerformed: _footprintErrorLevel2(literals.mobilePayments.mobilePayment, literals.mobilePayments.operationError)
  };
  const internalLinks = {
    settings: _getInternalLink(literals.mobilePayments.settingsMobilePayment, literals.sections.settings, '', ''),
    expiredKeys: _getInternalLink(literals.mobilePayments.confirmRenewal, literals.mobilePayments.mobilePayment, literals.mobilePayments.expiredKeys, ''),
    unsubscribe: _getInternalLink(literals.mobilePayments.deactivate, literals.mobilePayments.mobilePayment, literals.mobilePayments.cancelService, ''),
    credit: _internalLinkPressMobilePaymentPd(literals.commons.credit),
    debit: _internalLinkPressMobilePaymentPd(literals.commons.debit)
  };
  const interactionLinks = {
    securityOn: _interactionLink(literals.mobilePayments.askUnlockOk),
    securityOff: _interactionLink(literals.mobilePayments.askUnlockKo)
  };
  return {
    pageViews,
    internalLinks,
    interactionLinks
  };
};
