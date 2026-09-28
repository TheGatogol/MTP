module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getPageVisitRaw, getAnalyticFeatureFlag, getAppStarted,
    getAppStepWithLevel3, getAppCompleted, getInteractionLink,
    getError, getDownloadLinkWithLevel2, getAnalyticFeatureFlagError,
    getOCAccess, getAdvancedFootprintWithLevel4
  } = require('./common/_utils');
  const featureFlag = 'ocCarLoanOrigination';
  const commonPages = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
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
    },
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'segmentProfile'
    }
  };
  const commonSuccessDynamic = {
    [constants.APPLICATION_STATE]: {
      bind: 'productState'
    },
    [constants.PRODUCT_STATE]: {
      bind: 'productState'
    },
    [constants.PRODUCT_PRODUCT_1_RATE_STATE]: {
      bind: 'productState'
    },
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationFolio'
    }
  };
  const commonDynamicApplication = {
    [constants.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    },
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  };
  const commonApplicationProductCategory = {
    [constants.APPLICATION_PAYMENT_TYPE]: literals.commons.monthly,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY_DESTINATION]: literals.commons.insurances,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: literals.commons.lifeInsurance,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'suggestedAmount' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: { bind: 'suggestedCurrency' },
    [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: { bind: 'interestRate' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: { bind: 'paymentType' },
    [constants.APPLICATION_SERVICE_CHARGE]: { bind: 'serviceCharge' },
    [constants.PRODUCT_PRODUCT_1_AMOUNT]: { bind: 'additionalProductAmount' },
    [constants.PRODUCT_PRODUCT_1_CURRENCY]: { bind: 'additionalProductCurrency' }
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
    ...commonApplicationProduct
  };
  const commonDynamicSuccess = {
    ...commonSuccessDynamic,
    ...commonDynamicApplication
  };
  const _getPageVisitRaw = pageName => {
    const pageVisitData = getPageVisitRaw(
      {
        ...commonFunctions,
        [constants.QUALIFIED_VISITS]: literals.commons.trueValue,
        [constants.PAGE_PAGEINFO_LEVEL3]: `1 ${literals.commons.oneBenefits}`,
        [constants.APPLICATION_STEP]: `1 ${literals.commons.oneBenefits}`
      }
    );
    return getAnalyticFeatureFlag(pageName, pageVisitData);
  };
  const _getDynamicAppStarted = (pageName) => {
    const appStartedData = getAppStarted(
      `1 ${literals.commons.oneBenefits}`,
      {
        ...commonFunctions,
        [constants.APPLICATION_STEP]: literals.loanAndMortgageOriginationOcCarLoan.startSimulation
      }
    );
    return getAnalyticFeatureFlag(pageName, appStartedData);
  };
  const getCommonAnalyticsData = ()=> {
    return {
      ...commonFunctions,
      ...commonDynamicApplication
    };
  };
  const getCommonAnalyticsDataWithLifeLoan = ()=> {
    return {
      ...commonFunctions,
      ...commonDynamicApplication,
      ...commonApplicationProductCategory
    };
  };
  const getCommonAnalyticsInteractionLink = ()=>{
    return  {
      ...commonPageLevelUser,
      [constants.PAGE_PAGEINFO_LEVEL3]: { bind: 'step' },
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'segmentProfile'
      }
    };
  };
  const getCommonAnalyticsDataError = ()=>{
    return {
      ...commonPages,
      [constants.APPLICATION_FULLFILMENT]: literals.empty,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.engagementCarLoan,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    };
  };
  const _getAppStepWithLevel3 = (pageName, stepNumber) => {
    const step = { bind: 'step' };
    const analyticsData = stepNumber === 2
      ? getAppStepWithLevel3(stepNumber, step, getCommonAnalyticsData())
      : getAppStepWithLevel3(stepNumber, step, getCommonAnalyticsDataWithLifeLoan());
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  const _getAppCompleted = (pageName) => {
    const state = { bind: 'productState' };
    const analyticsData = getAppCompleted('pagina exitosa', state,
      {
        ...commonDynamicSuccess,
        ...commonFunctions,
        ...commonApplicationProductCategory
      }
    );
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  const _getInteractionLink = (pageName) => {
    const link = { bind: 'link' };
    const analyticsData = getInteractionLink(link,  {...getCommonAnalyticsInteractionLink(), [constants.APPLICATION_FULLFILMENT]: literals.empty});
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  const _getError = (pageName) => {
    const analyticsData = getError({bind: 'errorType'}, {
      ...getCommonAnalyticsDataError(),
      [constants.USER_SEGMENT_PROFILE]: {
        bind: 'segmentProfile'
      }
    });
    return getAnalyticFeatureFlagError(pageName, analyticsData);
  };
  const _getDownloadLink = (pageName) => {
    const downloadLink = getDownloadLinkWithLevel2(
      { bind: 'pageActivity' },
      '',
      {
        ...getCommonAnalyticsInteractionLink(),
        [constants.APPLICATION_FULLFILMENT]: literals.empty
      }
    );
    return getAnalyticFeatureFlag(pageName, downloadLink);
  };
  const _getAdvancedFootprint = (pageName) => {
    const level3 = { bind: 'step' };
    const level4 = { bind: 'level4' };
    const analyticsData = getAdvancedFootprintWithLevel4(level3, level4, {
      ...getCommonAnalyticsInteractionLink(),
      [constants.APPLICATION_FULLFILMENT]: literals.empty,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    });
    return getAnalyticFeatureFlag(pageName, analyticsData);
  };
  const ocAccessOpportunitiesOcCarLoanOriginationData = {
    ...commonPages,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.engagementCarLoan,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.operative.carLoan,
    [constants.USER_SEGMENT_PROFILE]: literals.preApprovedLoan.preApproved,
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'productSection'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.card,
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.loans,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'actionName'
    },
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
  const APP_ON_CLICK_START = getAnalyticFeatureFlag(featureFlag, getOCAccess(literals.commons.interested, literals.commons.online, ocAccessOpportunitiesOcCarLoanOriginationData));
  return {
    APP_ON_CLICK_START,
    _getAppStepWithLevel3,
    _getAppCompleted,
    _getInteractionLink,
    _getError,
    _getPageVisitRaw,
    _getDynamicAppStarted,
    _getDownloadLink,
    _getAdvancedFootprint
  };
};
