/* eslint-disable camelcase */
module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utilsAnalytics = require('./common/_utils');

  const analyticsFlags = {
    mainFeature: 'cancelInsurance',
    cancellationReason: {
      payment: 'cancelInsurance.payment',
      info: 'cancelInsurance.info',
      offer: 'cancelInsurance.offer',
      service: 'cancelInsurance.service',
      other: 'cancelInsurance.other',
      keep: 'cancelInsurance.keep'
    },
    errors: {
      alreadyCanceled: 'cancelInsurance.alreadyCanceled',
      cancelFailed: 'cancelInsurance.cancelFailed',
      operationFailed: 'cancelInsurance.operationFailed'
    }
  };

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.cancelInsurance,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.cancellationInsurance,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.insurances,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.USER_DEVICE_ROOT]: LITERALS.commons.noRoot
  };

  const PAGE_PRODUCTS = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: LITERALS.empty,
    [CONSTANTS.PRODUCT_ATTRIBUTES_0_CONTRACTID]: LITERALS.empty,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.empty,
    [CONSTANTS.PRODUCT_PRODUCT_0_GROUP]: LITERALS.empty,
    [CONSTANTS.APPLICATION_INTEREST_RATE]: LITERALS.empty,
    [CONSTANTS.APPLICATION_INTEREST_TAE]: LITERALS.empty,
    [CONSTANTS.APPLICATION_INTEREST_TIN]: LITERALS.empty,
    [CONSTANTS.PRODUCT_PRODUCT_NUMBER_OF_HOLDERS]: LITERALS.empty,
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: LITERALS.empty,
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: LITERALS.empty,
    [CONSTANTS.APPLICATION_PAYMENT_DATE]: LITERALS.empty,
    [CONSTANTS.APPLICATION_PAYMENT_TYPE]: LITERALS.empty,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.empty,
    [CONSTANTS.PRODUCT_ATTRIBUTES_0_PRODUCTCODE]: LITERALS.empty,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.empty,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.empty,
    [CONSTANTS.PRODUCT_QUANTITY]: LITERALS.empty,
    [CONSTANTS.APPLICATION_SERVICE_CHARGE]: LITERALS.empty,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.empty,
    [CONSTANTS.APPLICATION_TERM]: LITERALS.empty
  };

  const PAGE_DYNAMICS_DATA = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'prodAttributesName' },
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'typology' }
  };

  let appOnClickStart = utilsAnalytics.getOnClickStart(LITERALS.commons.cancellationInsurance, LITERALS.commons.information, {
    ...PAGE_PRODUCTS,
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.insurances,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.cancellationInsurance
  });

  let appPageVisit = utilsAnalytics.getPageVisitWithLevel3(LITERALS.commons.oneCancellationReason, {
    ...PAGE_PRODUCTS,
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cancellationInsurance,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.oneCancellationReason,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.empty
  });

  const appStarted = (flag) => {
    const analyticStarted = utilsAnalytics.getDynamicAppStarted(LITERALS.commons.oneCancellationReason, {
      ...PAGE_PRODUCTS,
      ...PAGE_COMMON,
      [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'prodAttributesName' },
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cancellationInsurance,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.oneCancellationReason,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.empty
    });
    return utilsAnalytics.getAnalyticFeatureFlag(analyticsFlags.cancellationReason[flag], analyticStarted);
  };

  const appCustomStep = (numberStep, appStepText) =>  {
    const appStep = `${numberStep} ${appStepText}`;
    const analyticStep = utilsAnalytics.getAppStep(numberStep, {
      ...PAGE_PRODUCTS,
      ...PAGE_COMMON,
      ...PAGE_DYNAMICS_DATA,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cancellationInsurance,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: appStep,
      [CONSTANTS.APPLICATION_STEP]: appStep,
      ...((numberStep === 5) && {[CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.signToken})
    });

    return utilsAnalytics.getAnalyticFeatureFlag(analyticsFlags.mainFeature, analyticStep);
  };

  const appError = (flag, errorPageBind) => {
    const analyticError = utilsAnalytics.getAdvancedFootprintError({ bind: 'errorName' }, {
      ...PAGE_COMMON,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.empty,
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.empty,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cancellationInsurance,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: errorPageBind },
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: { bind: errorPageBind }
    });
    return utilsAnalytics.getAnalyticFeatureFlagError(analyticsFlags.errors[flag], analyticError);
  };

  let appCompleted = utilsAnalytics.getAppCompletedRaw({
    ...PAGE_PRODUCTS,
    ...PAGE_COMMON,
    ...PAGE_DYNAMICS_DATA,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cancellationInsurance,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.ended,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.ended,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.signToken,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
  });

  appOnClickStart = utilsAnalytics.getAnalyticFeatureFlag(analyticsFlags.mainFeature, appOnClickStart);
  appPageVisit = utilsAnalytics.getAnalyticFeatureFlag(analyticsFlags.mainFeature, appPageVisit);
  appCompleted = utilsAnalytics.getAnalyticFeatureFlag(analyticsFlags.mainFeature, appCompleted);

  return {
    appOnClickStart,
    appPageVisit,
    appCustomStep,
    appError,
    appStarted,
    appCompleted
  };
};
