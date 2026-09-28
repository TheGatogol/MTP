module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getOnClickStart,
    getPageVisit,
    getDynamicAppStarted,
    getStaticAppStarted,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprint,
    getSiteError,
    getAdvancedFootprintError
  } = require('./common/_utils');
  const pageInfoCommons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commons = {
    ...pageInfoCommons,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.operative.carLoan,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan
  };
  const operatelevel = (level1, level2, level3) => {
    return {
      [constants.PAGE_PAGEINFO_LEVEL1]: level1,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3
    };
  };
  const analyticsFeatureFlagOcCarLoan = {
    'key': 'glomo.analytics.ocCarLoan',
    'defaultValue': true
  };
  const analyticsFeatureFlagsError = {
    accountError: {
      'key': 'glomo.analytics.ocCarLoanAccountError.errors',
      'defaultValue': true
    },
    serviceError: {
      'key': 'glomo.analytics.ocCarLoanServiceError.errors',
      'defaultValue': true
    }
  };
  const _setFeatureFlag = (analytic, featureFlag = analyticsFeatureFlagOcCarLoan) => (addFeatureFlag(analytic, featureFlag));
  const _getDynamicCommonsAndSteps = (level1, level2, level3, applicationName) => {
    return {
      ...commons,
      ...operatelevel(level1, level2, level3),
      [constants.APPLICATION_APPLICATION_NAME]: applicationName
    };
  };
  const appOnClickStart = getOnClickStart(literals.commons.opportunities, literals.commons.information, {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'campaignLocation'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: {
      bind: 'campaignFormat'
    },
    [constants.INTERNAL_CAMPAIGN_NAME]: {
      bind: 'campaignName'
    },
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.loans,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.operative.carLoan,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.signatureVehicleLoan
  });
  const siteErrorAccounts = getSiteError(literals.errors.noAvaibleAccounts, {
    ...pageInfoCommons,
    ...operatelevel(literals.commons.loans, literals.commons.signatureVehicleLoan, literals.commons.accountSelection_two)
  });
  const appPageVisit = (applicationName, applicationStep, level1, level2, level3, textlevel) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName),
      [constants.APPLICATION_STEP]: applicationStep
    };
    const analyticsAppPageVisit = getPageVisit(applicationStep, textlevel, analyticData);
    _setFeatureFlag(analyticsAppPageVisit);
    return analyticsAppPageVisit;
  };
  const appStarted = (applicationName, level1, level2, level3, textlevel) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName)
    };
    const analyticsAppStarted = getDynamicAppStarted(textlevel, analyticData);
    _setFeatureFlag(analyticsAppStarted);
    return analyticsAppStarted;
  };
  const appStartedRequestDetail = (applicationName, level1, level2, level3, textlevel, step) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName)
    };
    const analyticsAppStartedRequestDetail = getStaticAppStarted(step, textlevel, analyticData);
    _setFeatureFlag(analyticsAppStartedRequestDetail);
    return analyticsAppStartedRequestDetail;
  };
  const appStep = (numberStep, level1, level2, level3, applicationStep, applicationName, typology) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_TYPOLOGY]: typology
    };
    const analyticsAppStep = getAppStep(numberStep, analyticData);
    _setFeatureFlag(analyticsAppStep);
    return analyticsAppStep;
  };
  const appStepCurrency = (numberStep, level1, level2, level3, applicationStep, applicationName, typology) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_TYPOLOGY]: typology,
      [constants.PRODUCT_AMOUNT]: {
        bind: 'amountSelected'
      },
      [constants.PRODUCT_CURRENCY]: {
        bind: 'currencySelected'
      }
    };
    const analyticsAppStepCurrency = getAppStep(numberStep, analyticData);
    _setFeatureFlag(analyticsAppStepCurrency);
    return analyticsAppStepCurrency;
  };
  const appStepToken = (numberStep, level1, level2, level3, applicationStep, applicationName, typology) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName),
      [constants.APPLICATION_STEP]: applicationStep,
      [constants.APPLICATION_TYPOLOGY]: typology,
      [constants.APPLICATION_AMOUNT]: {
        bind: 'amountSelected'
      },
      [constants.APPLICATION_CURRENCY]: {
        bind: 'currencySelected'
      },
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    };
    const analyticsAppStepToken = getAppStep(numberStep, analyticData);
    _setFeatureFlag(analyticsAppStepToken);
    return analyticsAppStepToken;
  };
  const appCompleted = (applicationName, level1, level2, level3, application) => {
    const analyticData = {
      ..._getDynamicCommonsAndSteps(level1, level2, level3, applicationName),
      [constants.APPLICATION_STATE]: {
        bind: 'state'
      },
      [constants.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      },
      [constants.APPLICATION_STEP]: application,
      [constants.APPLICATION_OPERATION_NUMBER]: {
        bind: 'folioOperation'
      },
      [constants.APPLICATION_TYPOLOGY]: literals.commons.initialManagement,
      [constants.PRODUCT_AMOUNT]: {
        bind: 'amountSelected'
      },
      [constants.PRODUCT_CURRENCY]: {
        bind: 'currencySelected'
      },
      [constants.PRODUCT_STATE]: {
        bind: 'state'
      }
    };
    const analyticsAppCompleted = getAppCompletedRaw(analyticData);
    _setFeatureFlag(analyticsAppCompleted);
    return analyticsAppCompleted;
  };
  const getPageView = (type, level1, level2, level3) => {
    const analyticType = {
      TRACKING: {
        [constants.PAGE_PAGEINFO_LEVEL1]: level1,
        [constants.INTERNAL_CAMPAIGN_LOCATION]: {
          bind: 'campaignLocation'
        },
        [constants.INTERNAL_CAMPAIGN_FORMAT]: {
          bind: 'campaignFormat'
        },
        [constants.INTERNAL_CAMPAIGN_NAME]: {
          bind: 'campaignName'
        },
        [constants.INTERNAL_CAMPAIGN_PRODUCT]: {
          bind: 'campaignProduct'
        }
      },
      DETAILS: {
        ...operatelevel(level1, level2, level3)
      },
      MODALS: {
        ...operatelevel(level1, level2, level3),
        [constants.PAGE_PAGEINFO_LEVEL4]: {
          bind: 'analyticsModal'
        }
      },
      STATUS: {
        [constants.PAGE_PAGEINFO_LEVEL1]: level1,
        [constants.PAGE_PAGEINFO_LEVEL2]: level2,
        [constants.PAGE_PAGEINFO_LEVEL3]: {
          bind: 'analyticsTxt'
        }
      }
    };
    const analyticData = {
      ...pageInfoCommons,
      ...analyticType[type]
    };
    const analyticsPageView = getAdvancedFootprint(analyticData);
    _setFeatureFlag(analyticsPageView);
    return analyticsPageView;
  };
  const serviceError = (level1, level2, level3) => {
    const analyticData = {
      ...pageInfoCommons,
      ...operatelevel(level1, level2, level3)
    };
    const analyticsServiceError = getAdvancedFootprintError(literals.commons.serviceError, analyticData);
    _setFeatureFlag(analyticsServiceError, analyticsFeatureFlagsError.serviceError);
    return analyticsServiceError;
  };
  _setFeatureFlag(appOnClickStart);
  _setFeatureFlag(siteErrorAccounts, analyticsFeatureFlagsError.accountError);
  return {
    appOnClickStart,
    siteErrorAccounts,
    appPageVisit,
    appStarted,
    appStartedRequestDetail,
    appStep,
    appStepCurrency,
    appStepToken,
    appCompleted,
    getPageView,
    serviceError
  };
};