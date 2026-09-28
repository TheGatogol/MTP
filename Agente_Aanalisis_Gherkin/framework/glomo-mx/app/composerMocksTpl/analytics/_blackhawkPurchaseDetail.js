module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG = {
    key: 'glomo.analytics.blackHawkPurchase',
    defaultValue: true
  };
  const PAGE_CONFIG = {
    steps: {
      2: 'app-step-2',
      3: 'app-step-3',
      4: 'app-step-4'
    }
  };
  const COMMON_FUNNEL = {
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.giftCards,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.hiring,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.online,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.giftCardsPurchase,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.giftCard
  };
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const COMMON_VIEW = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.giftCards,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
  };
  const APP_VIEW = UTILS.getAdvancedFootprintWithLevel2(
    LITERALS.commons.customizeAmount, {
      ...COMMON,
      ...COMMON_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
    }
  );
  const DYNAMIC_COMMON = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    [CONSTANTS.PRODUCT_CURRENCY]: {
      bind: 'currency'
    }
  };
  const STEPS = {
    STEP_2: LITERALS.commons.accountSelection_two,
    STEP_3: `3 ${LITERALS.commons.termsAndConditions}`,
    STEP_4: LITERALS.commons.fourthConfirmation,
    STEP_5: LITERALS.commons.fifthOtp
  };
  const PAGE_VISIT = UTILS.getPageVisit(
    LITERALS.commons.first_detail, {
      ...COMMON_VIEW,
      ...COMMON,
      ...COMMON_FUNNEL
    }
  );
  const APP_STARTED = {
    type: 'link',
    action: 'App Started',
    digitalData: {
      ...COMMON,
      ...COMMON_VIEW,
      ...COMMON_FUNNEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.first_detail,
      [CONSTANTS.APPLICATION_STEP]: {
        bind: 'stepName'
      }
    }
  };
  const appStep = (numberStep, step) => {
    let obj = {
      ...COMMON,
      ...COMMON_FUNNEL,
      ...COMMON_VIEW,
      ...DYNAMIC_COMMON
    };
    let analytics = {
      type: LITERALS.types.view,
      action: `${LITERALS.actions.genericStep} ${numberStep}`,
      [CONSTANTS.DATALAYER_NAME]: {
        ...obj,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${step}`,
        [CONSTANTS.APPLICATION_STEP]: `${step}`
      }
    };
    return analytics;
  };
  const APP_COMPLETED = {
    type: 'view',
    action: 'App Completed',
    digitalData: {
      ...COMMON,
      ...COMMON_FUNNEL,
      ...COMMON_VIEW,
      ...DYNAMIC_COMMON,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.contracted,
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
      [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.contracted
    }
  };
  [
    PAGE_CONFIG,
    STEPS,
    PAGE_VISIT,
    APP_VIEW,
    APP_STARTED,
    appStep,
    APP_COMPLETED
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG));
  return {
    PAGE_CONFIG,
    STEPS,
    PAGE_VISIT,
    APP_VIEW,
    APP_STARTED,
    appStep,
    APP_COMPLETED
  };
};
