const constants = require('./common/_constants');
const literals = require('./common/_literals');

const {
  getAnalyticFeatureFlag,
  getAppPageVisitLevel2,
  getAppStartedWithoutLevel,
  getAppStep,
  getAppCompletedLevel2,
  getAdvancedFootprint,
  getInteractionLink,
  getExternalLink,
  getInternalLink,
  getOCAccess,
  getAnalyticFeatureFlagError
} = require('./common/_utils');

const pageName = 'fundsHiringOrigination';

module.exports = () => {

  const pageInfo = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.applicationName.investmentFundsFlow,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };

  const application = {
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.investmentFundsFlow,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.fundsEn,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  };

  const applicationAOC = {
    [constants.APPLICATION_STEP]: literals.commons.interestedOportunities,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
    [constants.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [constants.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [constants.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    }
  };

  const advancedFootPrint = {
    ...pageInfo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };

  const commonsStart = {
    ...pageInfo,
    ...application,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.investmentFunds
  };

  const persistData = {
    [constants.APPLICATION_OFFER]: { bind: 'aplicationOffer' },
    [constants.APPLICATION_TYPOLOGY]: { bind: 'aplicationTypology' },
    [constants.APPLICATION_PROGRAM_TYPE_HIRED]: { bind: 'aplicationProgramHired' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.APPLICATION_AMOUNT]: { bind: 'amount' },
    [constants.APPLICATION_CURRENCY]: { bind: 'currency' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };

  const appStepData = {
    ...commonsStart,
    ...persistData,
    [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'stepName' },
    [constants.PAGE_PAGEINFO_LEVEL4]: { bind: 'stepNumber' }
  };

  const APP_ON_CLICK_START = getAnalyticFeatureFlag(pageName, getOCAccess(literals.commons.interested, literals.commons.online, {
    ...pageInfo,
    ...applicationAOC,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.investmentFunds,
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    },
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    }
  }));

  const appPageVisitOnboarding = () => {
    const analyticData = getAdvancedFootprint({
      ...pageInfo,
      [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'slide' }

    });
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const appPageVisit = () => {
    const analyticData = getAppPageVisitLevel2(
      { bind: 'step' }, {
        ...commonsStart,
        [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue,
        [constants.USER_SEGMENT_PROFILE]: {
          bind: 'segmentProfile'
        }
      }
    );
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const appStarted = () => {
    const analyticData = getAppStartedWithoutLevel({
      ...commonsStart,
      [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
      [constants.APPLICATION_STEP]: { bind: 'appStep' },
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'segmentProfile'
      }
    });
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const setAppStep = (stepNumber) => {
    const analyticData = getAppStep(
      stepNumber, {
        ...appStepData,
        [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
        [constants.APPLICATION_STEP]: { bind: 'step' },
        [constants.USER_SEGMENT_PROFILE]: {
          bind: 'segmentProfile'
        },
        [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'modalName' }
      }
    );
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const appStepConfigs = {
    listFund: () => setAppStep('2'),
    selectedFund: () => setAppStep('3'),
    amountFund: () => setAppStep('4'),
    nameFund: () => setAppStep('5'),
    termsAndConditions: () => setAppStep('6'),
    confirmation: () => setAppStep('7'),
    otp: () => setAppStep('8')
  };

  const modalsVisit = () => {
    const analyticData = getAdvancedFootprint({
      ...pageInfo,
      [constants.APPLICATION_APPLICATION_NAME]: literals.commons.empty,
      [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
      [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'modalName' },
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'segmentProfile'
      }
    });
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const getAppStepCompleted = () => {
    const state = { bind: 'state' };
    const analyticData = getAppCompletedLevel2(literals.commons.successfulPage, state,
      {
        ...appStepData,
        [constants.USER_SEGMENT_PROFILE]: {
          bind: 'segmentProfile'
        }
      }
    );
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const interactionLink = () => {
    const analyticData = getInteractionLink(
      { bind: 'interactionLink' }, {
        ...pageInfo,
        [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
        [constants.USER_SEGMENT_PROFILE]: {
          bind: 'segmentProfile'
        }
      }
    );
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const internalLink = () => {
    const analyticData = getInternalLink(
      { bind: 'internalLink' }, {
        ...pageInfo,
        [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
        [constants.USER_SEGMENT_PROFILE]: {
          bind: 'segmentProfile'
        }
      }
    );
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const externalLink = () => {
    const analyticData = getExternalLink({
      ...pageInfo,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
      [constants.PAGE_PAGEACTIVITY_LINK_URL]: { bind: 'linkUrl' },
      [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'segmentProfile'
      }
    });
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const modalErrors = () => {
    const analyticData = getAdvancedFootprint({
      ...advancedFootPrint,
      [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'errorMessage' },
      [constants.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorMessage' }
    });
    return getAnalyticFeatureFlagError(pageName, analyticData);
  };

  const blockingCase = () => {
    const analyticData = getAdvancedFootprint({
      ...pageInfo,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.blocking,
      [constants.PAGE_PAGEINFO_LEVEL3]: {bind: 'level3'}
    });
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  const internalLinkBlockingCase = () => {
    const analyticData = getInternalLink({ bind: 'linkName' }, {
      ...pageInfo,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.blocking,
      [constants.PAGE_PAGEINFO_LEVEL3]: {bind: 'level3'}
    });
    return getAnalyticFeatureFlag(pageName, analyticData);
  };

  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appPageVisitOnboarding,
    appStarted,
    getAppStepListFund: appStepConfigs.listFund,
    getAppStepSelectedFund: appStepConfigs.selectedFund,
    getAppStepAmountFund: appStepConfigs.amountFund,
    getAppStepNameFund: appStepConfigs.nameFund,
    getTermsAndConditionsStep: appStepConfigs.termsAndConditions,
    getOtpStep: appStepConfigs.otp,
    getAppStepConfirmation: appStepConfigs.confirmation,
    modalErrors,
    interactionLink,
    externalLink,
    modalsVisit,
    getAppStepCompleted,
    internalLink,
    blockingCase,
    internalLinkBlockingCase
  };
};
