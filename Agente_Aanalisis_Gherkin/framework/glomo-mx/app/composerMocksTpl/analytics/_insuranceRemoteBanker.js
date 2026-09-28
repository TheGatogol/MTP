const constants = require('./common/_constants');
const { commons, errors, sections } = require('./common/_literals');
const {
  getOnClickStart,
  getAppPageVisitLevel2,
  getAppStartedWithLevel2,
  getAppStep,
  getAppCompletedRaw,
  getError,
  getSiteError,
  getAnalyticFeatureFlag
} = require('./common/_utils');

module.exports = (pageName = '') => {
  const commonPageErrors = {
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_CHANNEL]: commons.online,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
    [constants.PAGE_PAGEINFO_BUSINESSUNIT]: commons.bbvaMexico,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'typeInsurance' }
  };

  const commonPage = {
    ...commonPageErrors,
    [constants.APPLICATION_APPLICATION_NAME]: { bind: 'lastMileSeguro' },
    [constants.APPLICATION_APPLICATION_TYPE]: commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: commons.insurances,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtype' }
  };

  const commonProductsSteps = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: { bind: 'paymentType' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
  };

  const commonSteps = {
    ...commonPage,
    ...commonProductsSteps,
    [constants.APPLICATION_OFFER]: { bind: 'offer' },
    ...(pageName === 'carInsurance' ? { [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' } } : {})
  };

  const _commonErrors = (levelAndErrorPage, featureFlag) => (getAnalyticFeatureFlag(featureFlag, getError('', commonPageErrors, {
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: levelAndErrorPage,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: levelAndErrorPage
  })));

  const _commonSteps = (step, levelAndStep, customFields = '', featureFlag) => (getAnalyticFeatureFlag(featureFlag, getAppStep(step, commonSteps, {
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: levelAndStep,
    [constants.APPLICATION_STEP]: levelAndStep,
    [constants.APPLICATION_CUSTOM_FIELDS]: customFields
  })));

  const appOnClickStat = featureFlag => getAnalyticFeatureFlag(featureFlag, getOnClickStart(
    commons.aplicationStep,
    commons.information,
    commonPage,
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: commons.notifications,
      [constants.PAGE_PAGEINFO_LEVEL2]: commons.detail,
      [constants.APPLICATION_STEP]: commons.notificationDetail,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information
    }
  ));

  const appPageVisit = featureFlag =>  getAnalyticFeatureFlag(featureFlag, getAppPageVisitLevel2(
    commons.first_detail,
    commonPage,
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
      [constants.PAGE_PAGEINFO_LEVEL2]: commons.first_detail,
      [constants.APPLICATION_STEP]: commons.first_detail,
      [constants.QUALIFIED_VISITS]: 'true'
    }
  ));

  const appStarted = featureFlag =>  getAnalyticFeatureFlag(featureFlag, getAppStartedWithLevel2(
    commons.first_detail,
    commonPage,
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
      [constants.APPLICATION_STEP]: { bind: 'appStep' }
    }
  ));

  const _getAppStep = (param, featureFlag) => {
    const typeStep = {
      appStep2: _commonSteps(2, '2 ' + commons.wayToPay, '', featureFlag),
      appStep3: _commonSteps(3, '3 ' + commons.termsAndConditions, '', featureFlag),
      appStep4: _commonSteps(4, commons.fourthConfirmation, '', featureFlag),
      appStep5: _commonSteps(5, commons.fifthOtp, commons.signToken, featureFlag)
    };
    return typeStep[param];
  };

  const appCompleted = featureFlag => getAnalyticFeatureFlag(featureFlag, getAppCompletedRaw(commonSteps, {
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.successfulPage,
    [constants.APPLICATION_CUSTOM_FIELDS]: commons.signToken,
    [constants.APPLICATION_STATE]: commons.contracted,
    [constants.APPLICATION_STEP]: commons.successfulPage,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.PRODUCT_STATE]: commons.contracted
  }));

  const _getErrors = (param, featureFlag) => {
    const typeError = {
      errorExpiredQuote: _commonErrors(errors.expiredQuote, featureFlag),
      errorInsuranceContracted: _commonErrors(errors.contractedInsurance, featureFlag)
    };
    return typeError[param];
  };

  const errorService = featureFlag => getAnalyticFeatureFlag(featureFlag, getError('', commonPageErrors, {
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: errors.service,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: errors.service
  }));

  const errorLink = featureFlag => getAnalyticFeatureFlag(featureFlag, getSiteError(errors.insufficientFunds, commonPageErrors, {
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: '2 ' + commons.wayToPay
  }));

  return {
    appOnClickStat,
    appPageVisit,
    appStarted,
    _getAppStep,
    appCompleted,
    _getErrors,
    errorLink,
    errorService
  };
};
