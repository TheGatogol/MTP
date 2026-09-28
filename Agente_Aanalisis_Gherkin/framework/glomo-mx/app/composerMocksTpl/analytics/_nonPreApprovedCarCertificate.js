module.exports = (config) => {
  const constants = require('./common/_constants');
  const { getPageVisitRaw, getAnalyticFeatureFlag, getDynamicAppStarted, getAppStepWithLevel3, getAppCompleted, getInteractionLink, getError } = require('./common/_utils');
  const literals = require('./common/_literals');
  const commonPages = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGEINSTANCES_ID]: literals.actions.online,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.offline,
    [constants.PAGE_INSTANCE_ID]: config.pageInstanceID
  };
  const commonLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.engagementCarLoan,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commonApplication = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.engagementCarLoan,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement
  };
  const commonProducts = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.operative.carLoan
  };
  const commonDynamic = {
    [constants.PAGE_PAGEINFO_PAGENAME]: {
      bind: 'pageName'
    }
  };
  const commonAmountsDynamic = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'productAmount'
    },
    [constants.PRODUCT_CURRENCY]: {
      bind: 'productCurrency'
    },
    [constants.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [constants.PRODUCT_PRODUCT_RATE]: {
      bind: 'interestRate'
    },
    [constants.APPLICATION_SERVICE_CHARGE]: {
      bind: 'serviceCharge'
    },
    [constants.PRODUCT_PRODUCT_1_AMOUNT]: {
      bind: 'loanLife'
    }
  };
  const commonSuccessDynamic = {
    [constants.APPLICATION_STATE]: {
      bind: 'aplicationState'
    },
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    },
    [constants.PRODUCT_STATE]: {
      bind: 'productState'
    },
    [constants.PRODUCT_PRODUCT_1_RATE_STATE]: {
      bind: 'productRateState'
    }
  };
  const commonDynamicApplication = {
    [constants.APPLICATION_PROCESS]: {
      bind: 'aProcess'
    },
    [constants.APPLICATION_EARNINGS]: {
      bind: 'paymentAmount'
    },
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };
  const commonApplicationProductCategory = {
    [constants.APPLICATION_PAYMENT_TYPE]: literals.commons.monthly,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY_DESTINATION]: literals.commons.insurances,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: literals.commons.lifeInsurance
  };
  const commonPageLevelUser = {
    ...commonPages,
    ...commonLevels
  };
  const commonApplicationProduct = {
    ...commonApplication,
    ...commonProducts
  };
  const commonFunctions = {
    ...commonPageLevelUser,
    ...commonDynamic,
    ...commonApplicationProduct,
    [constants.USER_SEGMENT_PROFILE]: literals.preApprovedLoan.nonPreApproved
  };
  const commonPageAplication = {
    ...commonPageLevelUser,
    ...commonApplicationProduct
  };
  const commonDynamicSuccess = {
    ...commonSuccessDynamic,
    ...commonDynamicApplication
  };
  const _getPageVisitRaw = pg => {
    const pageVisitData = getPageVisitRaw(
      {
        ...commonFunctions,
        [constants.QUALIFIED_VISITS]: literals.commons.trueValue,
        [constants.PAGE_PAGEINFO_LEVEL3]: '1 cotizacion',
        [constants.APPLICATION_STEP]: '1 cotizacion'
      }
    );
    return getAnalyticFeatureFlag(pg, pageVisitData);
  };
  const _getDynamicAppStarted = step => {
    const appStartedData = getDynamicAppStarted(
      '1 cotizacion',
      {
        ...commonFunctions
      }
    );
    return getAnalyticFeatureFlag(step, appStartedData);
  };
  const getCommonAnalyticsData = ()=> {
    return {
      ...commonFunctions,
      ...commonAmountsDynamic,
      ...commonDynamicApplication,
      ...commonApplicationProductCategory
    };
  };
  const getCommonAnalyticsDataRejected = (profile)=>{
    return {
      ...commonAmountsDynamic,
      ...commonDynamicSuccess,
      ...commonApplicationProductCategory,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
      ...commonPageAplication,
      [constants.USER_SEGMENT_PROFILE]: literals.commons[profile]
    };
  };
  const getCommonAnalyticsInteractionLink = ()=>{
    return  {
      ...commonPageLevelUser,
      [constants.PAGE_PAGEINFO_LEVEL3]: '1 cotizacion'
    };
  };
  const getCommonAnalyticsDataError = ()=>{
    return {
      ...commonPageLevelUser
    };
  };
  const _getAppStepWithLevel3 = (pageName, stepNumber, step)=>{
    const analyticsData = getAppStepWithLevel3(stepNumber, step, getCommonAnalyticsData());
    if (step === '5 otp') {
      analyticsData.digitalData = {
        ...analyticsData.digitalData,
        [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
      };
    }
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  const _getAppCompleted = (pageName, profile = null)=>{
    if (profile) {
      const analyticsData = getAppCompleted('pagina exitosa', 'rechazado', getCommonAnalyticsDataRejected(profile));
      return getAnalyticFeatureFlag(pageName, analyticsData);
    }
    const successData = getAppCompleted('pagina exitosa', 'aprobado',
      {
        ...commonAmountsDynamic,
        ...commonDynamicSuccess,
        ...commonFunctions,
        [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
        ...commonApplicationProductCategory,
        [constants.APPLICATION_STATE]: {
          bind: 'aplicationState'
        }
      }
    );
    return getAnalyticFeatureFlag(pageName, successData);
  };
  const _getInteractionLink = (pageName, link)=>{
    const analyticsData = getInteractionLink(link,  {...getCommonAnalyticsInteractionLink(), [constants.APPLICATION_FULLFILMENT]: literals.empty});
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  const _getError = (pageName, typeError)=>{
    const analyticsData = getError(typeError, {...getCommonAnalyticsDataError(), [constants.APPLICATION_FULLFILMENT]: ''});
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  return {
    _getAppStepWithLevel3,
    _getAppCompleted,
    _getInteractionLink,
    _getError,
    _getPageVisitRaw,
    _getDynamicAppStarted
  };
};
