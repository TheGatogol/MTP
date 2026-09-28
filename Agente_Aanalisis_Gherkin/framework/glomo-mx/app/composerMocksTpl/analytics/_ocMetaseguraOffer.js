
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const FEATURE_FLAG = 'ocMetasegura';

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
  };

  const _COMMON_META = {
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'meta segura',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    ..._COMMON
  };

  const _COMMON_OC = {
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    ..._COMMON
  };

  const _COMMON_PRODUCT_ATTRIBUTES = {
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.insurances,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: 'meta segura'
  };

  const _COMMON_APPLICATION_INFO = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.goalInsurance,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'meta segura digital',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'contratacion',
    ..._COMMON_PRODUCT_ATTRIBUTES
  };

  const _COMMON_STEP = {
    ..._COMMON_META,
    ..._COMMON_APPLICATION_INFO
  };

  const _ON_CLICK_START = {
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
    },
    ..._COMMON_OC,
    ..._COMMON_PRODUCT_ATTRIBUTES,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick
  };

  const BIND_DATA = {
    [CONSTANTS.PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [CONSTANTS.APPLICATION_PAYMENT_TYPE]: {
      bind: 'paymentType'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBER_OF_HOLDERS]: {
      bind: 'holders'
    },
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'typeToken'
    },
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    },
    [CONSTANTS.PRODUCTS_ATTRIBUTES]: {
      bind: 'attributes'
    },
    [CONSTANTS.PRODUCT_STATE]: {
      bind: 'state'
    }
  };

  const setLevel2Data = (level2) => ({
    ..._COMMON_STEP,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.APPLICATION_STEP]: level2,
    ...BIND_DATA
  });

  const setProfile = (profile) => ({
    ...setLevel2Data('pagina exitosa'),
    [CONSTANTS.USER_SEGMENT_PROFILE]: profile
  });

  const assignFeatureFlag = (analytic) => utils.getAnalyticFeatureFlag(FEATURE_FLAG, analytic);

  const OFFER_DETAIL = assignFeatureFlag(
    utils.getPageVisitWithLevel3('', setLevel2Data('1 caracteristicas'))
  );

  const APP_ON_CLICK_START = assignFeatureFlag(
    utils.getOnClickStart('desde oportunidades', LITERALS.commons.information, _ON_CLICK_START)
  );

  const getOfferStartedLink = (link) => assignFeatureFlag(
    utils.getStaticAppStarted(link, '', setLevel2Data('1 caracteristicas'))
  );

  const getOfferStepAnalytic = (step, level2) => assignFeatureFlag(
    utils.getAppStep(step, setLevel2Data(level2))
  );

  const getOfferAdvancedFootprintAnalytic = (level2) => assignFeatureFlag(
    utils.getAdvancedFootprintWithLevel2(level2, _COMMON_META)
  );

  const getOfferCompletedAnalytic = (state, profile = '') => assignFeatureFlag(
    utils.getAppCompleted('', state, setProfile(profile))
  );

  const getOfferAdvancedFootprintAnalyticError = (error) =>
    utils.getAnalyticFeatureFlagError(FEATURE_FLAG, utils.getAdvancedFootprintError(
      error, _COMMON_META,
      { [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: error }
    ));

  return {
    APP_ON_CLICK_START,
    OFFER_DETAIL,
    getOfferStepAnalytic,
    getOfferStartedLink,
    getOfferAdvancedFootprintAnalytic,
    getOfferAdvancedFootprintAnalyticError,
    getOfferCompletedAnalytic
  };
};
