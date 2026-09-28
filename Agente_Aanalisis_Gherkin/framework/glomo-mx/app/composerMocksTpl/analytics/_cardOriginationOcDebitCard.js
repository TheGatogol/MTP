const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAppOnClickStartLevel2,
  getPageVisitWithLevel3,
  getStaticAppStarted,
  getAppStep,
  getAppCompleted,
  getAdvancedFootprintWithLevel4,
  getAdvancedFootprintWithLevel3,
  addFeatureFlag
} = require('./common/_utils');

module.exports = () => {
  const analyticsConfig = {
    steps: {
      'step-address': 'app-step-address',
      'step-date-select': 'app-step-date-information',
      'confirmation': 'app-step-confirmation'
    },
    items: {
      'acceptButton': literals.commons.onset
    }
  };
  const analyticsFeatureFlag = {
    'key': 'glomo.analytics.cardOriginationOcDebitCard',
    'defaultValue': true
  };
  const analyticsFeatureFlagErrors = {
    'key': 'glomo.analytics.cardOriginationOcDebitCard.errors',
    'defaultValue': true
  };
  const scheduleDeliveryStep = '3';
  const confirmationStep = '4';
  const commons = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_CHANNEL]: literals.commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: literals.commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonsFunnel = {
    ...commons,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.accountCardDelivery,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.requestPhysicalCard,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrollAccount
  };
  const commonsLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.requestPhysicalCard
  };
  const payrollAppOnClick = getAppOnClickStartLevel2(
    literals.commons.account,
    literals.commons.detail,
    {
      ...commonsFunnel,
      [constants.APPLICATION_STEP]: literals.commons.interested,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const payrollPageVisit = getPageVisitWithLevel3(
    `1 ${literals.commons.oneBenefits}`,
    {
      ...commonsLevels,
      ...commonsFunnel,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
    }
  );
  const payrollPageStarted = getStaticAppStarted(
    { bind: 'detail' },
    `1 ${literals.commons.oneBenefits}`,
    commonsLevels,
    commonsFunnel,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    }
  );
  const payrollAppStep = (numberStep, level3) => {
    let obj = {
      ...commonsFunnel,
      ...commonsLevels,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.PAGE_PAGEINFO_LEVEL3]: `${numberStep} ${level3}`,
      [constants.APPLICATION_STEP]: `${numberStep} ${level3}`
    };
    if (numberStep === scheduleDeliveryStep || numberStep === confirmationStep) {
      obj = {
        ...obj,
        [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
        [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
      };
    }
    const analyticsAppStep = getAppStep(numberStep, obj);
    addFeatureFlag(analyticsAppStep, analyticsFeatureFlag);
    return analyticsAppStep;
  };
  const payrollAppCompleted = getAppCompleted(
    literals.commons.successfulPage,
    literals.commons.ended,
    {
      ...commonsLevels,
      ...commonsFunnel,
      [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
      [constants.PRODUCT_CURRENCY]: { bind: 'currency' },
      [constants.PRODUCT_STATE]: literals.commons.ended,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    }
  );
  const payrollViewDetail = getAdvancedFootprintWithLevel4(
    `2 ${literals.commons.shippingAddress}`,
    literals.commons.cardDelivery,
    {
      ...commonsLevels,
      ...commons,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    }
  );
  const payrollViewOtp = getAdvancedFootprintWithLevel3(
    literals.commons.otp,
    {
      ...commonsLevels,
      ...commons,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    }
  );
  const payrollViewServiceError = getAdvancedFootprintWithLevel3(
    literals.commons.serviceError,
    {
      ...commonsLevels,
      ...commons,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.commons.serviceError,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
    }
  );
  addFeatureFlag(payrollViewServiceError, analyticsFeatureFlagErrors);
  [
    payrollAppOnClick,
    payrollPageVisit,
    payrollPageStarted,
    payrollAppCompleted,
    payrollViewDetail,
    payrollViewOtp
  ].forEach(item => addFeatureFlag(item, analyticsFeatureFlag));
  return {
    analyticsConfig,
    payrollAppOnClick,
    payrollPageVisit,
    payrollPageStarted,
    payrollAppStep,
    payrollAppCompleted,
    payrollViewDetail,
    payrollViewOtp,
    payrollViewServiceError
  };
};
