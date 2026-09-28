const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getOnClickStart,
  addFeatureFlag,
  getPageVisitWithLevel3,
  getStaticAppStarted,
  getAppStep,
  getAdvancedFootprint,
  getAdvancedFootprintWithLevel3,
  getInternalLinkWithPageActivityLevel3,
  getAppCompleted
} = require('./common/_utils');
module.exports = () => {
  const featureFlagFunnel = {
    'key': 'glomo.analytics.ocAccountYoung',
    'defaultValue': true
  };
  const featureFlagFootprint = {
    'key': 'glomo.analytics.ocAccountYoung.footprint',
    'defaultValue': true
  };
  const featureFlagInteraction = {
    'key': 'glomo.analytics.ocAccountYoung.interaction',
    'defaultValue': true
  };
  const featureFlagError = {
    'key': 'glomo.analytics.ocAccountYoung.errors',
    'defaultValue': true
  };
  const analyticsConfig = {
    steps: {
      'offer-modal': 'app-page-visit',
      'minorInfoStep': 'app-step-minor-info',
      'additionalInfoStep': 'additional-info-app-page-view',
      'birthCertificateStep': 'app-step-birth-certificate',
      'addressStep': 'app-step-address',
      'digitalServicesStep': 'app-step-digital-services',
      'termsConditionsStep': 'app-step-terms-conditions',
      'summary-view': 'app-step-confirmation',
      'otp-opening-child-account-modal': 'app-step-otp-opening-child-account',
      'otp-customer-addresses-modal': 'customer-addresses-app-page-view'
    },
    items: {
      OPEN_TERMS_BROWSER: literals.commons.consultTermsAndConditions,
      DEPOSIT_LIMIT: literals.commons.consultLimitDetail,
      OPEN_GAT_BROWSER: literals.commons.consultAnnualProfit,
      NOTICE_PRIVACY: literals.commons.consultNoticePrivacy,
      CONTINUE_OFFER: literals.commons.continue
    }
  };
  const TERMS_CONDITIONS_STEP = '6';
  const CONFIRMATION_STEP = '7';
  const OTP_OPENING_CHILD_ACCOUNT = '8';
  const commons = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.linkCard,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.hiringAccount,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const applicationCommons = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.ocAccountYoung,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.hiringAccountYoung,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };
  const productsCommons = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.linkCardAccount
  };
  const onClickStartData = {
    ...applicationCommons,
    ...productsCommons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.list,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.investments,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  };
  const APP_ON_CLICK_START = getOnClickStart(
    literals.commons.opportunities,
    literals.commons.information,
    onClickStartData
  );
  addFeatureFlag(APP_ON_CLICK_START, featureFlagFunnel);
  const appPageVisit = getPageVisitWithLevel3(
    literals.commons.first_detail,
    commons,
    applicationCommons,
    productsCommons,
    {
      [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
    }
  );
  addFeatureFlag(appPageVisit, featureFlagFunnel);
  const appStarted = getStaticAppStarted(
    { bind: 'detail' },
    literals.commons.first_detail,
    commons,
    applicationCommons,
    productsCommons
  );
  addFeatureFlag(appStarted, featureFlagFunnel);
  const appStep = (numberStep, level3) => {
    let obj = {
      ...commons,
      ...applicationCommons,
      ...productsCommons,
      [constants.APPLICATION_STEP]: `${numberStep} ${level3}`,
      [constants.PAGE_PAGEINFO_LEVEL3]: `${numberStep} ${level3}`
    };
    if (numberStep === TERMS_CONDITIONS_STEP || numberStep === CONFIRMATION_STEP) {
      obj = {
        ...obj,
        [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' }
      };
    } else if (numberStep === OTP_OPENING_CHILD_ACCOUNT) {
      obj = {
        ...obj,
        [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
      };
    }
    const analyticsAppStep = getAppStep(numberStep, obj);
    addFeatureFlag(analyticsAppStep, featureFlagFunnel);
    return analyticsAppStep;
  };
  const appCompleted = getAppCompleted(
    literals.commons.successfulPage,
    literals.commons.contracted,
    commons,
    applicationCommons,
    productsCommons,
    {
      [constants.PRODUCT_STATE]: literals.commons.contracted,
      [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
      [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
    }
  );
  addFeatureFlag(appCompleted, featureFlagFunnel);
  const advancedFootprint = (level2 = '', level3 = '', level4 = '', customFields = '') => {
    let obj = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL2]: level2,
      [constants.PAGE_PAGEINFO_LEVEL3]: level3,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    if (customFields !== '') {
      obj = {
        ...obj,
        [constants.APPLICATION_CUSTOM_FIELDS]: customFields
      };
    }
    const analyticsAdvanceFootprint = getAdvancedFootprint(obj);
    addFeatureFlag(analyticsAdvanceFootprint, featureFlagFootprint);
    return analyticsAdvanceFootprint;
  };
  const advancedFootprintError = (errorPage) => {
    let obj = {
      ...commons,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
    };
    const analyticsAdvanceFootprintError = getAdvancedFootprintWithLevel3(errorPage, obj);
    addFeatureFlag(analyticsAdvanceFootprintError, featureFlagError);
    return analyticsAdvanceFootprintError;
  };
  const internalLink = (level3, level4, action) => {
    let obj = {
      ...commons,
      [constants.PAGE_PAGEINFO_LEVEL4]: level4
    };
    const analyticsInternalLink =  getInternalLinkWithPageActivityLevel3(action, level3, obj);
    addFeatureFlag(analyticsInternalLink, featureFlagInteraction);
    return analyticsInternalLink;
  };
  return {
    analyticsConfig,
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStep,
    advancedFootprint,
    advancedFootprintError,
    internalLink,
    appCompleted
  };
};
