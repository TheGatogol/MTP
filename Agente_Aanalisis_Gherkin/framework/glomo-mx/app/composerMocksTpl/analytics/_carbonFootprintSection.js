module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getAdvancedFootprint,
    getAdvancedFootprintWithLevel3,
    getInternalLinkWithLevel2,
    getInteractionLinkWithLevel3,
    getInternalLinkWithPageActivityLevel3,
    getAdvancedFootprintWithLevel4,
    getAdvancedFootprintError,
    getAppOnClickStartLevel2AppType
  } = require('./common/_utils');

  const analyticsFeatureFlag = {
    key: 'glomo.analytics.carbonFootprint',
    defaultValue: true
  };

  const GENERAL_COMMON = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.sections.carbonFootprint,
    [constants.USER_USERSTATE]: literals.commons.loggedIn,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const PAGE_VIEW = getAdvancedFootprint({...GENERAL_COMMON,
    [constants.USER_SEGMENT_PROFILE]: {
      bind: {bind: 'detail'}
    }
  });

  const INTERNAL_LINK = getInternalLinkWithLevel2({bind: 'detail'}, literals.sections.carbonFootprint, GENERAL_COMMON);

  const PAGE_VIEW_DETAIL = getAdvancedFootprintWithLevel3(literals.commons.categoryDetail, {...GENERAL_COMMON,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  const PAGE_VIEW_GRAPHIC_DESCRIPTION = getAdvancedFootprintWithLevel4(literals.commons.categoryDetail, literals.sections.carbonFootprintSection.graphicDescription, {...GENERAL_COMMON,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  const PAGE_VIEW_CONSENT = getAdvancedFootprintWithLevel3(literals.sections.carbonFootprintSection.howWeCalculate, {...GENERAL_COMMON});

  const PAGE_VIEW_RECOMMENDATIONS = getAdvancedFootprintWithLevel3(literals.sections.carbonFootprintSection.recomendations, {...GENERAL_COMMON});

  const PAGE_VIEW_RECOMMENDATIONS_DETAIL = getAdvancedFootprintWithLevel4(literals.sections.carbonFootprintSection.recomendations, literals.commons.detail, {...GENERAL_COMMON});

  const PAGE_VIEW_MARK_MODIFY = getAdvancedFootprintWithLevel4(literals.sections.carbonFootprintSection.dataProcessing, {bind: 'detail'}, {...GENERAL_COMMON});

  const PAGE_VIEW_ERROR = getAdvancedFootprintError(literals.sections.carbonFootprintSection, literals.sections.carbonFootprintSection.errorLoadingInformation, {...GENERAL_COMMON,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.sections.carbonFootprint,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.sections.carbonFootprintSection.errorLoadingInformation

  });

  const analitycsFeatureFlagCarbonFootprintError = {
    'key': 'glomo.analytics.carbonFootprint.error',
    'defaultValue': true
  };

  addFeatureFlag(PAGE_VIEW_ERROR, analitycsFeatureFlagCarbonFootprintError);

  const INTERACTION_LINK = getInteractionLinkWithLevel3(literals.commons.categoryDetail, {...GENERAL_COMMON,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    },
    [constants.APPLICATION_INTERACTION_LEVEL]: {bind: 'subcategory'}
  });

  const INTERNAL_LINK_SIMULATE = getInternalLinkWithPageActivityLevel3(literals.sections.carbonFootprintSection.simulateSaving, literals.commons.categoryDetail, {...GENERAL_COMMON,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  const INTERNAL_LINK_ACTIONS = getInternalLinkWithPageActivityLevel3({bind: 'detail'}, literals.sections.carbonFootprintSection.recomendations, {...GENERAL_COMMON});

  const APP_ON_CLICK_START_BILLING_ACTIONS = getAppOnClickStartLevel2AppType(literals.commons.operative, {...GENERAL_COMMON,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.sections.carbonFootprintSection.alerts,
    [constants.APPLICATION_STEP]: literals.sections.carbonFootprintSection.sustainabilityAlertActionsPayReceipts,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.operative.billPayments,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.payService,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  });

  [
    PAGE_VIEW,
    INTERNAL_LINK,
    PAGE_VIEW_DETAIL,
    INTERACTION_LINK,
    INTERNAL_LINK_SIMULATE,
    INTERNAL_LINK_ACTIONS,
    PAGE_VIEW_GRAPHIC_DESCRIPTION,
    PAGE_VIEW_CONSENT,
    PAGE_VIEW_RECOMMENDATIONS,
    PAGE_VIEW_RECOMMENDATIONS_DETAIL,
    PAGE_VIEW_MARK_MODIFY,
    APP_ON_CLICK_START_BILLING_ACTIONS
  ].forEach((analytic) => addFeatureFlag(analytic, analyticsFeatureFlag));

  return {
    PAGE_VIEW,
    INTERNAL_LINK,
    PAGE_VIEW_DETAIL,
    INTERACTION_LINK,
    INTERNAL_LINK_SIMULATE,
    INTERNAL_LINK_ACTIONS,
    PAGE_VIEW_GRAPHIC_DESCRIPTION,
    PAGE_VIEW_CONSENT,
    PAGE_VIEW_RECOMMENDATIONS,
    PAGE_VIEW_RECOMMENDATIONS_DETAIL,
    PAGE_VIEW_MARK_MODIFY,
    PAGE_VIEW_ERROR,
    APP_ON_CLICK_START_BILLING_ACTIONS
  };
};
