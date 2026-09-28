module.exports = CONFIG => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAdvancedFootprint,
    getAdvancedFootprintData,
    getInternalLink
  } = require('./common/_utils');
  const defaultLevel3 = 'seguimiento solicitud';
  const featuresFlags = {
    principal: 'loanAndMortgageInformation',
    error: 'loanAndMortgageInformation.errorPage',
    customTag: 'loanAndMortgageInformation.customTag'
  };
  const commonAnalytics = {
    [constants.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };

  const commons = (level3 = defaultLevel3) => ({
    ...commonAnalytics,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.mortgage,
    [constants.PAGE_PAGEINFO_LEVEL3]: level3
  });

  const appPageViewLoanAndMortgageInformation = (level3) => {
    const analytics = {
      ...commons(level3),
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    };
    return getAnalyticFeatureFlag(featuresFlags.principal, getAdvancedFootprint(analytics));
  };

  const appPageViewLevel4 = (level4, level3) => {
    const analytics = {
      ...commons(level3),
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    return getAnalyticFeatureFlag(featuresFlags.principal, getAdvancedFootprint(analytics));
  };

  const appPageViewLevel5 = (level4, level5, level3) => {
    const analytics = {
      ...commons(level3),
      [constants.PAGE_PAGEINFO_LEVEL4]: level4,
      [constants.PAGE_PAGEINFO_LEVEL5]: level5
    };
    return getAnalyticFeatureFlag(featuresFlags.principal, getAdvancedFootprint(analytics));
  };

  const appErrorPage = (level4, errorPage = '', level3) => {
    const analytics = {
      ...commons(level3),
      [constants.PAGE_PAGEINFO_LEVEL4]: level4,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
    };
    return getAnalyticFeatureFlag(featuresFlags.error, getAdvancedFootprint(analytics));
  };

  const appInteractionLink = (interactionLink = '', level3) => {
    const analytics = {
      ...commons(level3),
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      },
      [constants.APPLICATION_INTERACTION_LEVEL]: interactionLink
    };
    return getAnalyticFeatureFlag(featuresFlags.customTag, getAdvancedFootprintData('link', 'interactionLink', analytics));
  };

  const customLevel4 = (id = '') => {
    const option = {
      rs: 'revision de la solicitud',
      ec: 'evaluacion de credito',
      ei: 'evaluacion del inmueble',
      fd: 'firma y desembolso'
    } [id] || '';

    return option;
  };

  const appInteractionLinkLevel4 = (level4, interactionLink = '', level3) => {
    const analytics = {
      ...commons(level3),
      [constants.PAGE_PAGEINFO_LEVEL4]: customLevel4(level4),
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      },
      [constants.APPLICATION_INTERACTION_LEVEL]: interactionLink
    };
    return getAnalyticFeatureFlag(featuresFlags.customTag, getAdvancedFootprintData('link', 'interactionLink', analytics));
  };

  const APP_ON_CLICK_START = getAnalyticFeatureFlag(
    featuresFlags.customTag,
    getInternalLink('consultar solicitud credito hipotecario oportunidades', {
      ...commonAnalytics,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities
    })
  );

  const appNboClick = getAnalyticFeatureFlag(
    featuresFlags.customTag,
    getInternalLink(
      'consultar solicitud credito hipotecario oportunidades nbo',
      {
        ...commonAnalytics,
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities
      }
    )
  );

  return {
    APP_ON_CLICK_START,
    appNboClick,
    appPageViewLoanAndMortgageInformation,
    appPageViewLevel4,
    appPageViewLevel5,
    appErrorPage,
    appInteractionLink,
    appInteractionLinkLevel4
  };
};