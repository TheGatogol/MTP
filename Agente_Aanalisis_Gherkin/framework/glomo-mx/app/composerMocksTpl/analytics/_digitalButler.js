module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprint,
    getInteractionLink,
    getInternalLink,
    getExternalLinkWithLink,
    getAdvancedFootprintError,
    getDownloadLinkWithLevel2,
    getSiteError
  } = require('./common/_utils');

  const generalCommon = {
    [constants.USER_USERSTATE]: literals.commons.loggedIn,
    [constants.USER_SEGMENT_GLOBAL]: '003001',
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.digitalButler,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    },
    [constants.PAGE_PAGEACTIVITY_SEARCH_ONSITESEARCHTERM]: {
      bind: 'siteSearchTerm'
    }
  };

  const bindIntentLevels = {
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' },
    [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' }
  };

  const getAdvancedPages = (param) => {
    const dataPage = {
      ...generalCommon,
      ...bindIntentLevels
    };
    const typePage = {
      appPageView: getAnalyticFeatureFlag('digitalbutler.conversation', {
        ...getAdvancedFootprint({
          ...dataPage
        })
      }),
      appPageViewTerms: getAnalyticFeatureFlag('digitalbutler.termsAndConditions', {
        ...getAdvancedFootprint({
          ...dataPage
        })
      }),
      appPageViewTermsOtp: getAnalyticFeatureFlag('digitalbutler.termsAndConditions.otp', {
        ...getAdvancedFootprint({
          ...dataPage
        })
      })
    };
    return typePage[param];
  };

  const getAdvancedLinks = (param) => {
    const typeLink = {
      interactionFeedback: getAnalyticFeatureFlag('digitalbutler.feedback', {
        ...getInteractionLink({bind: 'interactionLevel'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      externalLinkShare: getAnalyticFeatureFlag('digitalbutler.share', {
        ...getExternalLinkWithLink({bind: 'linkUrl'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      internalLinkProduct: getAnalyticFeatureFlag('digitalbutler.internalLinkProduct', {
        ...getInternalLink({bind: 'pageLink'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      interactionTermsContinueButton: getAnalyticFeatureFlag('glomo.analytics.digitalbutler.termsAndConditions.continueButton', {
        ...getInteractionLink({bind: 'interactionLevel'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      interactionTermsCloseModal: getAnalyticFeatureFlag('glomo.analytics.digitalbutler.termsAndConditions.closeModal', {
        ...getInteractionLink({bind: 'interactionLevel'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      downloadLinkTerms: getAnalyticFeatureFlag('glomo.analytics.digitalbutler.termsAndConditions.downloadLink', {
        ...getDownloadLinkWithLevel2({bind: 'pageLink'}, '', {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      interactionSuggestion: getAnalyticFeatureFlag('digitalbutler.suggestion', {
        ...getInteractionLink({bind: 'interactionLevel'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      interactionChips: getAnalyticFeatureFlag('digitalbutler.chips', {
        ...getInteractionLink({bind: 'interactionLevel'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      internalLink: getAnalyticFeatureFlag('digitalbutler.navigations', {
        ...getInternalLink({bind: 'pageLink'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      externalLink: getAnalyticFeatureFlag('digitalbutler.externalLink', {
        ...getExternalLinkWithLink({bind: 'pageLink'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      interactionViewInfo: getAnalyticFeatureFlag('digitalbutler.viewInfo', {
        ...getInteractionLink({bind: 'interactionLevel'}, {
          ...generalCommon,
          ...bindIntentLevels
        })
      })
    };
    return typeLink[param];
  };

  const getErrors = (param) => {
    const typeError = {
      siteError: getAnalyticFeatureFlag('digitalbutler.errorMessage', {
        ...getSiteError(literals.commons.infoNotAvailable, {
          ...generalCommon,
          ...bindIntentLevels
        })
      }),
      errorPage: getAnalyticFeatureFlag('digitalbutler.errorModal', {
        ...getAdvancedFootprintError(literals.errors.informationNotAvailable, {
          ...generalCommon,
          [constants.PAGE_PAGEINFO_LEVEL2]: literals.errors.informationNotAvailable
        })
      })
    };
    return typeError[param];
  };

  return {
    getAdvancedLinks,
    getAdvancedPages,
    getErrors
  };
};
