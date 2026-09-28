/* eslint-disable no-use-before-define */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

module.exports = (CONFIG) => {
  const mortgageFF = {
    'key': 'glomo.analytics.mortgage',
    'defaultValue': true
  };
  const _setFeatureFlags = (analytic, featureFlag) => (UTILS.addFeatureFlag(analytic, featureFlag));
  const _getPageVisit = (text, ...data) => UTILS.getPageVisitWithLevel3(text, COMMONS, ...data);
  const _getStaticAppStarted = (text, textLevel, ...data) => UTILS.getStaticAppStarted(
    text,
    textLevel,
    COMMONS,
    ...data
  );
  const _getAppStep = (numberStep, ...data) => UTILS.getAppStep(
    numberStep,
    COMMONS,
    ...data,
    PRODUCTS_ATTRIBUTES
  );
  const _getAppCompleted = (text, state, ...data) => UTILS.getAppCompleted(
    text,
    state,
    COMMONS,
    ...data,
    PRODUCTS_ATTRIBUTES
  );
  const _generateStepIdentifier = (numberStep, idStep) => {
    return `${numberStep} ${idStep}`;
  };
  const _createAppStep = (step, customFields = null) => {
    const stepObject = {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: step,
      [CONSTANTS.APPLICATION_STEP]: step
    };

    if (customFields) {
      stepObject[CONSTANTS.APPLICATION_CUSTOM_FIELDS] = customFields;
    }

    return stepObject;
  };

  const firstStep = _generateStepIdentifier(1, LITERALS.commons.introduceData);
  const secondStep = _generateStepIdentifier(2, LITERALS.commons.termsAndConditions);
  const thirdStep = _generateStepIdentifier(3, LITERALS.commons.confirmation);
  const fourthStep = _generateStepIdentifier(4, LITERALS.commons.otp);

  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.mortgageLead,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.loans,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.oneClickMortgage,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.operative.mortgage,
    [CONSTANTS.PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.offline,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.oneClickMortgage
  };

  const appOnClickStartData = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.operative.mortgage,
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: LITERALS.commons.empty,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.offline,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    }
  };

  const APP_PAGE_VISIT = {
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.qualifiedVisitsTrue
  };

  const PRODUCTS_ATTRIBUTES = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [CONSTANTS.APPLICATION_PAYMENT_TYPE]: LITERALS.commons.monthly,
    [CONSTANTS.APPLICATION_INTEREST_RATE]: {
      bind: 'interestRate'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    }
  };

  const APP_COMPLETED = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.approved,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    },
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.approved,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.signToken,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.approved
  };

  const APP_STEP_TWO = _createAppStep(secondStep);
  const APP_STEP_THREE = _createAppStep(thirdStep);
  const APP_STEPS_FOUR = _createAppStep(fourthStep, LITERALS.commons.signToken);

  const APP_PAGE_VISIT_SIMULATOR_STEP = _getPageVisit(
    firstStep,
    APP_PAGE_VISIT
  );
  const APP_STARTED_SIMULATOR_STEP = _getStaticAppStarted({
    bind: 'interaction'
  },
  firstStep,
  COMMONS
  );
  const APP_STEP_TERMS_STEP = _getAppStep(2, APP_STEP_TWO);
  const APP_STEP_SUMMARY_STEP = _getAppStep(3, APP_STEP_THREE);
  const APP_STEP_OTP_STEP = _getAppStep(4, APP_STEPS_FOUR);
  const APP_COMPLETED_MORTGAGE_REVIEW = _getAppCompleted(
    LITERALS.commons.term,
    firstStep,
    APP_COMPLETED
  );

  [
    APP_PAGE_VISIT_SIMULATOR_STEP,
    APP_STARTED_SIMULATOR_STEP,
    APP_STEP_TERMS_STEP,
    APP_STEP_SUMMARY_STEP,
    APP_STEP_OTP_STEP,
    APP_COMPLETED_MORTGAGE_REVIEW
  ].forEach(analytic => _setFeatureFlags(analytic, mortgageFF));

  const APP_ON_CLICK_START = UTILS.getAnalyticFeatureFlag(mortgageFF,  UTILS.getOCAccess(LITERALS.commons.opportunities, LITERALS.commons.online, appOnClickStartData));

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT_SIMULATOR_STEP,
    APP_STARTED_SIMULATOR_STEP,
    APP_STEP_TERMS_STEP,
    APP_STEP_SUMMARY_STEP,
    APP_STEP_OTP_STEP,
    APP_COMPLETED_MORTGAGE_REVIEW
  };
};
