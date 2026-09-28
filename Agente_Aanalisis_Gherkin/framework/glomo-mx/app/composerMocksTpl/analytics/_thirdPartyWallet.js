module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getAnalyticFeatureFlag, getAnalyticFeatureFlagError, getInternalLink, getAdvancedFootprint, getAdvancedFootprintError} = require('./common/_utils');
  const flagName = 'thirdPartyWallet.provisioning';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const levelCommon = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: {
      bind: 'level2'
    }
  };
  const levelCommonWallet = {
    ...levelCommon,
    [constants.PAGE_PAGEINFO_LEVEL3]: {
      bind: 'level3'
    }
  };
  const _setFeatureFlags = (analytic) => (getAnalyticFeatureFlag(flagName, analytic));
  const _setErrorFeatureFlags = (analytic) => (getAnalyticFeatureFlagError(flagName, analytic));
  const generateInternalLink = (levelCommonData, levelKey, levelValue, linkData) => {
    const dataWithLevel = {
      ...levelCommonData,
      [levelKey]: levelValue
    };
    const analytics = _setFeatureFlags(getInternalLink(linkData, dataWithLevel));
    return analytics;
  };
  const internalLink = generateInternalLink(levelCommon, constants.PAGE_PAGEINFO_LEVEL3, literals.commons.detail, {bind: 'interactionLink'});
  const internalLinkVerify = generateInternalLink(levelCommonWallet, constants.PAGE_PAGEINFO_LEVEL4, literals.thirdPartyWallet.device, literals.thirdPartyWallet.verifyCard);
  const internalLinkProvisioning = generateInternalLink(levelCommonWallet, constants.PAGE_PAGEINFO_LEVEL4, literals.thirdPartyWallet.device, {bind: 'interactionLink'});
  const footPrintSuccessVerify = _setFeatureFlags(getAdvancedFootprint({
    ...levelCommonWallet,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.thirdPartyWallet.verifiedCard
  }));
  const appOtpStep = _setFeatureFlags(getAdvancedFootprint({
    ...levelCommonWallet,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.otp
  }));
  const footPrintDevice = _setFeatureFlags(getAdvancedFootprint({
    ...levelCommonWallet,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.thirdPartyWallet.device
  }));
  const _footPrintError = (level4) => _setErrorFeatureFlags(getAdvancedFootprintError(level4, {
    ...levelCommonWallet,
    [constants.PAGE_PAGEINFO_LEVEL4]: level4
  }));
  const getFootPrintError = (param) => {
    const typeError = {
      errorCardOff: _footPrintError(
        literals.thirdPartyWallet.cardOff
      ),
      errorPendingCard: _footPrintError(
        literals.thirdPartyWallet.pendingCardActivate
      ),
      errorOperationNotDone: _footPrintError(
        literals.commons.operationNotDone
      )
    };
    return typeError[param];
  };
  return {
    internalLink,
    internalLinkVerify,
    internalLinkProvisioning,
    getFootPrintError,
    appOtpStep,
    footPrintSuccessVerify,
    footPrintDevice
  };
};