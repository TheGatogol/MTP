module.exports = () => {
  const {
    commons: { account, cashZone, information, finalized, mercurio, online, operative, persons, private: nonPublic, signToken, successfulPage, transaction },
    globalApplication: { onboardingMpos },
    ocCashZone: { buyReader, characteristicsMposPurchase, mposDetail }
  } = require('./common/_literals');

  const {
    APPLICATION_AMOUNT, APPLICATION_APPLICATION_NAME, APPLICATION_APPLICATION_TYPE, APPLICATION_CURRENCY, APPLICATION_CUSTOM_FIELDS, APPLICATION_FULLFILMENT,
    APPLICATION_GLOBAL_APPLICATION, APPLICATION_OPERATION_NUMBER, APPLICATION_STEP, PAGE_PAGEINFO_AREA, PAGE_PAGEINFO_LEVEL1, PAGE_PAGEINFO_LEVEL2,
    PAGE_PAGEINFO_LEVEL3, PAGE_PAGEINFO_PAGEINTENT, PAGE_PAGEINFO_PAGESEGMENT, PAGE_PAGEINFO_PROJECTNAME, PRODUCT_PRODUCT_NAME, PRODUCT_PRIMARY_CATEGORY, PRODUCT_STATE
  } = require('./common/_constants');
  const { getAnalyticFeatureFlag, getAppCompleted, getAppStarted, getAppStep, getError, getPageVisitWithLevel3, getAdvancedFootprintWithLevel3 } = require('./common/_utils');
  const analyticsFeatureFlag = 'cashZonePaymentsMpos.mposPurchase';
  const generalCommon = {
    [PAGE_PAGEINFO_AREA]: nonPublic,
    [PAGE_PAGEINFO_LEVEL1]: cashZone,
    [PAGE_PAGEINFO_LEVEL2]: buyReader,
    [PAGE_PAGEINFO_PAGEINTENT]: transaction,
    [PAGE_PAGEINFO_PROJECTNAME]: mercurio
  };

  const applicationCommon = {
    [APPLICATION_APPLICATION_NAME]: buyReader,
    [APPLICATION_APPLICATION_TYPE]: operative,
    [APPLICATION_FULLFILMENT]: online,
    [APPLICATION_GLOBAL_APPLICATION]: onboardingMpos,
    [PAGE_PAGEINFO_PAGESEGMENT]: persons
  };

  const productConfirmation = {
    [APPLICATION_AMOUNT]: { bind: 'amount' },
    [APPLICATION_CURRENCY]: { bind: 'currency' },
    [PRODUCT_PRODUCT_NAME]: { bind: 'accountTitle' },
    [PRODUCT_PRIMARY_CATEGORY]: account
  };

  const footprintCommon = {
    [PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [PAGE_PAGEINFO_PAGEINTENT]: information
  };

  const getFlagAnalytic = (analytic) => getAnalyticFeatureFlag(analyticsFeatureFlag, analytic);
  const appStartedFunction = (step) => getFlagAnalytic(
    getAppStarted(
      '1 ' + characteristicsMposPurchase,
      {
        [APPLICATION_STEP]: step,
        ...generalCommon,
        ...applicationCommon
      }
    )
  );

  const appStepFunction = (stepNumber = '', stepDescription = '') => {
    const formattedStep = `${stepNumber} ${stepDescription}`;
    const stepData = {
      [APPLICATION_STEP]: formattedStep,
      [PAGE_PAGEINFO_LEVEL3]: formattedStep,
      ...generalCommon,
      ...applicationCommon,
      ...productConfirmation
    };
    if (stepDescription === 'otp') {
      stepData[APPLICATION_CUSTOM_FIELDS] = signToken;
    }
    return getFlagAnalytic(
      getAppStep(stepNumber, stepData)
    );
  };

  const errorFunction = (step) => {
    return getFlagAnalytic(getError(step, generalCommon, {...footprintCommon}));
  };

  const appPageVisit = getFlagAnalytic(getPageVisitWithLevel3('1 ' + characteristicsMposPurchase, generalCommon, {...applicationCommon}));
  const appStarted = appStartedFunction;
  const appStep = appStepFunction;
  const appCompleted = getFlagAnalytic(
    getAppCompleted(
      successfulPage,
      finalized,
      generalCommon, {
        [APPLICATION_CUSTOM_FIELDS]: signToken,
        [APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
        [PRODUCT_STATE]: finalized,
        ...productConfirmation,
        ...applicationCommon
      }
    )
  );
  const detailFootprint = getFlagAnalytic(getAdvancedFootprintWithLevel3(mposDetail, generalCommon, {...footprintCommon}));
  const errorStep = errorFunction;

  return {
    appPageVisit,
    appStarted,
    appStep,
    appCompleted,
    detailFootprint,
    errorStep
  };
};