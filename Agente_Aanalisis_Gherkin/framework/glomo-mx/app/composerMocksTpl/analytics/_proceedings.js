const { getAdvancedFootprint, getAnalyticFeatureFlag, getInternalLink } = require('./common/_utils');
const constants = require('./common/_constants');
const literals = require('./common/_literals');
module.exports = () => {

  const common = {
    [constants.PAGE_PAGEINFO_LEVEL1]: 'cuenta',
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.updateInformation,
    [constants.PAGE_PAGEINFO_LEVEL3]: {
      bind: 'level3'
    },
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_SEGMENT_PROFILE]: {bind: 'segmentProfile'}
  };
  const level4 = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    }
  };
  const pageView = getAdvancedFootprint({
    ...common,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFieldsProceedings'
    }
  });

  const internalLink = getAnalyticFeatureFlag({
    bind: 'flagName'
  }, getInternalLink({
    bind: 'linkName'
  }, {
    ...common,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFieldsProceedings'
    }
  }));

  const appPageConfirm = getAdvancedFootprint({
    ...level4,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFieldsProceedings'
    }
  });

  const appValidationProcess = getAdvancedFootprint({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.highRiskClient.financialRelations,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFieldsProceedings'
    }
  });

  const appPageOtp = getAdvancedFootprint({
    ...level4,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFieldsFootprint'
    }
  });

  const appPageError = getAnalyticFeatureFlag('account.upgradeCustomer.error', getAdvancedFootprint({
    ...level4,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFieldsProceedings'
    },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: {
      bind: 'errorPage'
    }
  }));
  [
    pageView,
    appPageConfirm,
    appPageOtp
  ].forEach(analytic => getAnalyticFeatureFlag('Proceedings', analytic));
  return {
    pageView,
    internalLink,
    appPageConfirm,
    appValidationProcess,
    appPageOtp,
    appPageError
  };
};
