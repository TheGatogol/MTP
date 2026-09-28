module.exports = (CONFIG) => {

  const CONSTANTS = require('./common/_constants');
  const {
    addFeatureFlag,
    getOCAccess,
    getAppOnClickStartLevel,
    getAppOnClickStartLevel2,
    getPageVisitWithLevel3,
    getAppStarted,
    getAppStepWithLevel3,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel3,
    getAdvancedFootprintWithLevel4
  } = require('./common/_utils');
  const LITERALS = require('./common/_literals');
  const _setFeatureFlags = (analytic, featureFlag) => (addFeatureFlag(analytic, featureFlag));

  const bindLiterals = {
    PROJECT_NAME_GLOMO: LITERALS.sections.glomo,
    PROJECT_NAME_GLOMO_ALWAYSON: LITERALS.sections.glomoAlwaysOn
  };

  const ANALYTICS_FEATURE_FLAG_TRANSFERS = {
    'key': 'glomo.analytics.transfer',
    'defaultValue': true
  };

  const COMMON_CONTEXTUAL_SALES = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.actions.online,
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: CONFIG.businessUnit,
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: CONFIG.siteAppName,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const DYNAMIC_COMMON_CONTEXTUAL_SALES = {
    [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'location'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
      bind: 'collectiveCode'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: {
      bind: 'campaignName'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: {
      bind: 'product'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
      bind: 'productCode'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: {
      bind: 'quantity'
    }
  };

  const commonPageInfo = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.sections.transfers,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private
  };

  const commonApplication = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.operative.transfers,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.sections.transfers,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.onlineOffline
  };

  const commonData = {
    ...commonPageInfo,
    ...commonApplication
  };

  const commonFootprint = {
    ...commonPageInfo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
  };

  const dynamicCommonData = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: { bind: 'pagePageInfoLevel1' },
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: { bind: 'pagePageInfoSegment' },
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: { bind: 'productPrimaryCategory' }
  };

  const dynamicStepData = {
    ...dynamicCommonData,
    [CONSTANTS.APPLICATION_AMOUNT]: {  bind: 'amount' },
    [CONSTANTS.APPLICATION_CURRENCY]: { bind: 'currency' },
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'applicationOperationNumber' },
    [CONSTANTS.APPLICATION_PROCESS]: { bind: 'applicationProcess' },
    [CONSTANTS.APPLICATION_STATE]: { bind: 'applicationState' },
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'applicationTypology' },
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: { bind: 'productProductSubtype' },
    [CONSTANTS.PRODUCT_STATE]: { bind: 'productState' }
  };

  const dynamicNavigationData = {
    [CONSTANTS.USER_SEGMENT_PROFILE]: { bind: 'userSegmentProfile' },
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const APP_ON_CLICK_START = getAppOnClickStartLevel({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'pagePageInfoLevel2' },
    [CONSTANTS.APPLICATION_STEP]: { bind: 'applicationStep' },
    ...commonData,
    ...dynamicCommonData
  });

  const appPageVisit = getPageVisitWithLevel3('1 ' + LITERALS.commons.destinityAccount, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'pagePageInfoLevel1' },
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.trueValue,
    ...commonData,
    ...dynamicCommonData,
    ...dynamicNavigationData
  });

  const appStarted = getAppStarted('1 ' + LITERALS.commons.destinityAccount, {
    ...commonData,
    ...dynamicCommonData,
    ...dynamicNavigationData,
    [CONSTANTS.APPLICATION_STEP]: { bind: 'applicationStep' }
  });

  const appStep2 = getAppStepWithLevel3(2, '2 ' + LITERALS.commons.quantityAmount, {
    ...commonData,
    ...dynamicStepData,
    ...dynamicNavigationData
  });

  const appStep3 = getAppStepWithLevel3(3, LITERALS.commons.third_confirmaton, {
    ...commonData,
    ...dynamicStepData,
    ...dynamicNavigationData
  });

  const appCompleted = getAppCompletedRaw({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.token,
    ...commonData,
    ...dynamicStepData,
    ...dynamicNavigationData
  });

  const APP_COMPLETED_CONTEXTUAL_SALES = getAppCompletedRaw({
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: LITERALS.commons.intCmpFormat,
    ...appCompleted[CONSTANTS.DATALAYER_NAME],
    ...DYNAMIC_COMMON_CONTEXTUAL_SALES
  });

  const appCompletedRejectAricFraud = getAppCompletedRaw({
    ...appCompleted[CONSTANTS.DATALAYER_NAME],
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.commons.signToken,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.rejected,
    [CONSTANTS.USER_SEGMENT_PROFILE]: LITERALS.commons.rejectedDuePossibleFraud,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.rejected
  });

  const getAdvanceFootprint = (level3, isCustomField = '') => {
    let analitycs = getAdvancedFootprintWithLevel3(level3, {
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: isCustomField !== '' ? LITERALS.commons.token : '',
      ...commonFootprint
    });

    addFeatureFlag(analitycs, ANALYTICS_FEATURE_FLAG_TRANSFERS);
    return analitycs;
  };

  const COMMON_BINDINGS = {
    'page.pageInfo.level2': {
      bind: 'pageName'
    },
    'application.step': {
      bind: 'step'
    },
    'application.typology': {
      bind: 'typology'
    },
    'application.state': {
      bind: 'state'
    },
    'application.operationNumber': {
      bind: 'operationNumber'
    },
    'products.attributes.0.primaryCategory': {
      bind: 'primaryCategory'
    },
    'products.attributes.0.amount': {
      bind: 'amount'
    },
    'products.attributes.0.currency': {
      bind: 'currency'
    },
    'products.attributes.0.state': {
      bind: 'state'
    }
  };

  const APP_ONCLICK_START_TDC_CONTEXTUAL_SALES = getOCAccess('me interesa ventas contextuales', 'online', {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.sections.transfers,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.oneClickCreditCard,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: LITERALS.commons.intCmpFormat,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    ...COMMON_CONTEXTUAL_SALES,
    ...DYNAMIC_COMMON_CONTEXTUAL_SALES
  });

  const APP_ONCLICK_START_TDC_CONTEXTUAL_SALES_FROM_MODAL = getOCAccess('me interesa ventas contextuales', 'online', {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.sections.transfers,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.commons.cardOffer,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.oneClickCreditCard,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    ...COMMON_CONTEXTUAL_SALES
  });

  const HUELLA_PAGE_VIEW_CONTEXTUAL_SALES = getAdvancedFootprintWithLevel4('transferencias', 'oferta tarjetas', {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    ...COMMON_CONTEXTUAL_SALES
  });

  const boostInternationalTransfers = getAppOnClickStartLevel2(LITERALS.commons.account, LITERALS.commons.detail, {
    [CONSTANTS.APPLICATION_TYPOLOGY]: LITERALS.commons.ownAccounts,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.online,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.internationalTransfers,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.operative.transferInternational,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.goToInternationalTransfers,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  });

  _setFeatureFlags(boostInternationalTransfers, {
    'key': 'glomo.analytics.fxTransfersOpinator',
    'defaultValue': true
  });

  [
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStep2,
    appStep3,
    appCompleted,
    appCompletedRejectAricFraud,
    APP_COMPLETED_CONTEXTUAL_SALES,
    HUELLA_PAGE_VIEW_CONTEXTUAL_SALES,
    COMMON_BINDINGS,
    APP_ONCLICK_START_TDC_CONTEXTUAL_SALES,
    APP_ONCLICK_START_TDC_CONTEXTUAL_SALES_FROM_MODAL
  ].forEach(item => addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_TRANSFERS));
  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStep2,
    appStep3,
    appCompleted,
    APP_COMPLETED_CONTEXTUAL_SALES,
    appCompletedRejectAricFraud,
    HUELLA_PAGE_VIEW_CONTEXTUAL_SALES,
    APP_ONCLICK_START_TDC_CONTEXTUAL_SALES,
    APP_ONCLICK_START_TDC_CONTEXTUAL_SALES_FROM_MODAL,
    bindLiterals,
    ANALYTICS_FEATURE_FLAG_TRANSFERS,
    boostInternationalTransfers,
    getAdvanceFootprint
  };

};
