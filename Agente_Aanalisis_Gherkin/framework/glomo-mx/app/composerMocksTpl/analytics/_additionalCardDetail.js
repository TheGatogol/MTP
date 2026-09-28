const constants = require('./common/_constants');
const {
  getAdvancedFootprintError,
  getAdvancedFootprintWithLevel3,
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError,
  getInternalLink,
  getInternalLinkWithPageActivityLevel3,
  getSiteError
} = require('./common/_utils');
const {
  commons: {
    infoNotAvailable,
    detail,
    turnOnCard,
    turnOffCard,
    hideCVV,
    watchCVV,
    cards,
    information,
    private: privateSection,
    persons
  },
  empty,
  sections: { glomo }
} = require('./common/_literals');

module.exports = () => {

  const withApplicationFullfilmentEmpty = {
    [constants.PAGE_PAGEINFO_LEVEL1]: cards,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'tarjeta adicional',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo,
    [constants.PAGE_PAGEINFO_AREA]: privateSection,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.APPLICATION_FULLFILMENT]: empty
  };

  const withApplicationFullfilmentEmptyError = {
    ...withApplicationFullfilmentEmpty,
    [constants.PAGE_PAGEINFO_LEVEL3]: 'error cvv'
  };

  const analyticsAdditionalCardDetail = (level3) => {
    return {
      [constants.PAGE_PAGEINFO_LEVEL3]: level3,
      ...withApplicationFullfilmentEmpty
    };
  };

  const getPageViewCardDetalle = (action) => {
    return {
      ...getAdvancedFootprintWithLevel3(action, withApplicationFullfilmentEmpty)
    };
  };

  const getInternalLinkCard = (action) => {
    return {
      ...getInternalLink(action, analyticsAdditionalCardDetail(action))
    };
  };

  const getAdvancedFootprintErrorCVV = getAnalyticFeatureFlagError(
    'additionalCard',
    getAdvancedFootprintError('error cvv', withApplicationFullfilmentEmptyError)
  );

  const watchCVVinternalLink = getAnalyticFeatureFlag(
    'additionalCard',
    getInternalLinkWithPageActivityLevel3(watchCVV, detail, withApplicationFullfilmentEmpty)
  );

  const hideCvvInternalLink = getAnalyticFeatureFlag(
    'additionalCard',
    getInternalLinkWithPageActivityLevel3(hideCVV, turnOnCard, withApplicationFullfilmentEmpty)
  );

  const errorLoadCardAdditional = getAnalyticFeatureFlagError(
    'additionalCard',
    getSiteError(infoNotAvailable, analyticsAdditionalCardDetail(detail))
  );

  const pageViewCardAdditional = getAnalyticFeatureFlag(
    'additionalCard',
    getAdvancedFootprintWithLevel3(detail, withApplicationFullfilmentEmpty)
  );

  const getInternalLinkPage = (actionType) => {
    const typeInternalLink = {
      off: getAnalyticFeatureFlag('additionalCard', getInternalLinkCard(turnOffCard)),
      on: getAnalyticFeatureFlag('additionalCard', getInternalLinkCard(turnOnCard))
    };
    return typeInternalLink[actionType];
  };

  const getPageViewCardDetallePage = (actionType) => {
    const typePageView = {
      off: getAnalyticFeatureFlag('additionalCard', getPageViewCardDetalle(turnOffCard)),
      on: getAnalyticFeatureFlag('additionalCard', getPageViewCardDetalle(turnOnCard))
    };
    return typePageView[actionType];
  };

  return {
    getAdvancedFootprintErrorCVV,
    pageViewCardAdditional,
    errorLoadCardAdditional,
    getPageViewCardDetallePage,
    getInternalLinkPage,
    watchCVVinternalLink,
    hideCvvInternalLink
  };
};
