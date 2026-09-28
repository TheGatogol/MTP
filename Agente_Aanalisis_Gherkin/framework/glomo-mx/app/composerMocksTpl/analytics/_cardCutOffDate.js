const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  addFeatureFlag,
  getOnClickStart,
  getPageVisitRaw,
  getAppStarted,
  getAppStep,
  getAppCompletedRaw,
  getAdvancedFootprintWithLevel4
} = require('./common/_utils');
const featureFlagStoresMap = (analytic, featureFlag) => addFeatureFlag(analytic, featureFlag);

const commons = {
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit,
  [constants.USER_DEVICE_MOBILE]: literals.commons.yes
};

const commonPages = {
  ...commons,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.APPLICATION_GLOBAL_APPLICATION]: 'cut off date card',
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
  [constants.APPLICATION_APPLICATION_NAME]: 'cambiar fecha de pago',
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
    bind: 'cardName'
  }
};

const commonPageView = {
  ...commonPages,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit,
  [constants.PAGE_PAGEINFO_LEVEL3]: 'cambiar fecha de pago'
};

const commonPageLink = {
  ...commonPages,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.credit,
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.detail
};

const commonPageFootprint = {
  ...commons,
  [constants.PAGE_PAGEINFO_LEVEL3]: 'cambiar fecha de pago',
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
};

module.exports = () => {
  const analyticsCutoffDateFeatureFlag = {
    'key': 'glomo.analytics.cutOffDate',
    'defaultValue': true
  };

  const appOnClickStart = getOnClickStart('', '', {
    ...commonPageLink,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.APPLICATION_STEP]: 'cambiar fecha de pago'
  });

  const appPageVisit = getPageVisitRaw({
    ...commonPageView,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL4]: '1 seleccionar fecha',
    [constants.APPLICATION_STEP]: '1 seleccionar fecha',
    [constants.APPLICATION_STATE]: literals.commons.init
  });

  const appStarted = getAppStarted('', {
    ...commonPageView,
    [constants.PAGE_PAGEINFO_LEVEL3]: 'cambiar fecha de pago',
    [constants.PAGE_PAGEINFO_LEVEL4]: '1 seleccionar fecha',
    [constants.APPLICATION_STEP]: 'seleccion fecha de pago'
  });

  const appStepEnterSign = getAppStep(2, {
    ...commonPageView,
    [constants.PAGE_PAGEINFO_LEVEL4]: '2 otp',
    [constants.APPLICATION_STEP]: '2 otp',
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });

  const appCompletedApproved = getAppCompletedRaw({
    ...commonPageView,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.ended,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
    [constants.PRODUCT_STATE]: literals.commons.ended
  });

  const appCompletedPending = getAppCompletedRaw({
    ...commonPageView,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.underReview,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
    [constants.PRODUCT_STATE]: literals.commons.underReview
  });

  const setFootprintLevel4 = (level4) => getAdvancedFootprintWithLevel4(
    '',
    level4,
    {...commonPageFootprint}
  );

  const _getAdvancedFootprints = (param) => {
    const typeFootPrint = {
      completeProfile: setFootprintLevel4('completa perfil'),
      pendingPayment: setFootprintLevel4('pago pendiente'),
      notPossibleToChangeDate: setFootprintLevel4('no es posible cambiar fecha'),
      changeWillBeImplementedSoon: setFootprintLevel4('cambio se aplicara pronto'),
      creditLineExceeded: setFootprintLevel4('linea de credito rebasada')
    };
    return typeFootPrint[param];
  };

  [
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepEnterSign,
    appCompletedApproved,
    appCompletedPending,
    _getAdvancedFootprints
  ].forEach(item => featureFlagStoresMap(item, analyticsCutoffDateFeatureFlag));

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepEnterSign,
    appCompletedApproved,
    appCompletedPending,
    _getAdvancedFootprints
  };
};
