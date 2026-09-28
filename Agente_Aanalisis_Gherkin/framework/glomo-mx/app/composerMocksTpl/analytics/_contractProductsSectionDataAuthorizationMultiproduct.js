module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError,
    getAppStartedWithLevel2,
    getOCAccess,
    getAppPageVisitLevel2,
    getAdvancedFootprintWithLevel2,
    getAppStep,
    getAppCompletedRaw
  } = require('./common/_utils');
  const featureFlagConsultingMultiproduct = 'cardsOnDemand.AuthorizationMultiproduct';

  const commonFooTaghter = {
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commonInfoLevel = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.dataQuery,
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' }
  };

  const common = {
    ...commonFooTaghter,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.dataQuery,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.cardsOnDemand
  };

  const commonPages = {
    ...commonFooTaghter,
    ...commonInfoLevel
  };

  const commonStartedInfo = {
    ...common,
    ...commonInfoLevel
  };

  const pageVisitCommon = getAppPageVisitLevel2('1 autorizar consulta', {
    ...common,
    ...commonInfoLevel
  });

  const pageViewConditionsBuro = getAdvancedFootprintWithLevel2('consulta historial credito', {
    ...commonPages
  });

  const pageViewConditionsSocio = getAdvancedFootprintWithLevel2('consulta historial laboral', {
    ...commonPages
  });

  const pageViewPrivacy = getAdvancedFootprintWithLevel2('aviso privacidad', {
    ...commonPages
  });

  const startedConditionsBuro = getAppStartedWithLevel2('1 autorizar consulta', {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'consulta historial credito'
  });

  const startedConditionsSocio = getAppStartedWithLevel2('1 autorizar consulta', {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'consulta historial laboral'
  });

  const startedPrivacy = getAppStartedWithLevel2('1 autorizar consulta', {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'aviso privacidad'
  });

  const startedAutorizarCredit = getAppStartedWithLevel2('1 autorizar consulta', {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'autorizacion historial credito'
  });

  const startedAutorizarSocio = getAppStartedWithLevel2('1 autorizar consulta', {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'autorizacion historial laboral'
  });

  const buttonAuthorize = getAppStep('2', {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: `2 ${literals.commons.otp}`,
    [constants.PAGE_PAGEINFO_LEVEL2]: `2 ${literals.commons.otp}`,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'detail' }
  });

  const completed = getAppCompletedRaw({
    ...common,
    ...commonInfoLevel,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'detail' }
  });

  const errorCompleted = getAdvancedFootprintWithLevel2('error operacion no realizada', {
    ...commonFooTaghter,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error operacion no realizada',
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.dataQuery
  });

  const APP_ON_CLICK_START = getOCAccess(literals.commons.opportunities, literals.commons.online, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' },
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' },
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
    [constants.APPLICATION_APPLICATION_NAME]: { bind: 'name' },
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: 'vd-',
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: '0',
    [constants.INTERNAL_CAMPAIGN_FORMAT]: 'card',
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick
  });

  const erroPage = getAnalyticFeatureFlagError(featureFlagConsultingMultiproduct, errorCompleted);

  [
    APP_ON_CLICK_START,
    pageVisitCommon,
    startedConditionsBuro,
    startedConditionsSocio,
    startedPrivacy,
    startedAutorizarCredit,
    startedAutorizarSocio,
    completed,
    buttonAuthorize,
    pageViewConditionsBuro,
    pageViewConditionsSocio,
    pageViewPrivacy
  ].forEach(feature => getAnalyticFeatureFlag(featureFlagConsultingMultiproduct, feature));

  return {
    APP_ON_CLICK_START,
    pageVisitCommon,
    startedConditionsBuro,
    startedConditionsSocio,
    startedPrivacy,
    startedAutorizarCredit,
    startedAutorizarSocio,
    completed,
    erroPage,
    buttonAuthorize,
    pageViewConditionsBuro,
    pageViewConditionsSocio,
    pageViewPrivacy
  };
};