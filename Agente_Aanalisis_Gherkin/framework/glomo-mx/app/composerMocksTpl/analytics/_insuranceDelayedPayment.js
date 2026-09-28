const { PAGE_PAGEINFO_AREA, PAGE_PAGEINFO_PAGESEGMENT, PAGE_PAGEINFO_LEVEL1, PAGE_PAGEINFO_LEVEL2, PAGE_PAGEINFO_LEVEL3, PAGE_PAGEINFO_PAGEINTENT, APPLICATION_APPLICATION_NAME,
  APPLICATION_APPLICATION_TYPE, APPLICATION_FULLFILMENT, APPLICATION_GLOBAL_APPLICATION, PAGE_PAGEINFO_PROJECTNAME,
  APPLICATION_TYPOLOGY, APPLICATION_PROCESS, APPLICATION_CUSTOM_FIELDS, PAGE_PAGEINFO_ERRORPAGE } = require('./common/_constants');
const { commons: { private: nonPublic, insurances, persons, insurancesPayment, transaction, online, securePaymentDelay,
  operative, continue: goOn, wayToPay, signToken, finalized, information },
globalApplication: { insuranceDelayedPayment }, sections: {glomo} } = require('./common/_literals');
const { getOnClickStart, getPageVisitWithLevel3, getStaticAppStarted, getAppStepWithLevel3, getAppCompleted,
  getInternalLinkWithLevel2, getAdvancedFootprintWithLevel2, getAnalyticFeatureFlag, getAdvancedFootprintWithLevel3, getAdvancedFootprint
} = require('./common/_utils');
const analyticsFunnelFlag = 'insuranceDeleyedPayment';
const _setFeatureFlag = (error, ...data) => getAnalyticFeatureFlag(error ? `${analyticsFunnelFlag}.${error}` : analyticsFunnelFlag, ...data);

module.exports = () => {

  const common = {
    [PAGE_PAGEINFO_AREA]: nonPublic,
    [PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [PAGE_PAGEINFO_PROJECTNAME]: glomo
  };

  const commonLevels = {
    [PAGE_PAGEINFO_LEVEL1]: insurances,
    [PAGE_PAGEINFO_LEVEL2]: insurancesPayment
  };

  const commonFunnel = {
    [PAGE_PAGEINFO_PAGEINTENT]: transaction,
    [APPLICATION_APPLICATION_NAME]: securePaymentDelay,
    [APPLICATION_APPLICATION_TYPE]: operative,
    [APPLICATION_FULLFILMENT]: online,
    [APPLICATION_GLOBAL_APPLICATION]: insuranceDelayedPayment
  };

  const repeatCommonFunnel = {
    ...common,
    ...commonLevels,
    ...commonFunnel
  };

  const repeatCommonFootprint = {
    ...commonLevels,
    ...common
  };

  const typology = {
    [APPLICATION_TYPOLOGY]: {
      bind: 'type'
    }
  };
  const description = {
    [APPLICATION_PROCESS]: {
      bind: 'otype'
    }
  };

  const detailNotification = getAdvancedFootprintWithLevel2('detalle de notificacion', common, {
    [PAGE_PAGEINFO_LEVEL1]: insurances,
    [PAGE_PAGEINFO_PAGEINTENT]: transaction
  });

  const appOnClickStartFunnel = getOnClickStart(goOn, transaction, repeatCommonFunnel);

  const appPageVisitFunnel = getPageVisitWithLevel3(`1 ${wayToPay}`, repeatCommonFunnel);

  const appStartedFunnel = getStaticAppStarted({ bind: 'type' }, `1 ${wayToPay}`, repeatCommonFunnel);

  const appStep = (step, stepName) => {
    let attributes =     {
      ...repeatCommonFunnel
    };
    if (step === '3') {
      attributes = { ...attributes, ...typology };
    }
    if (step === '4') {
      attributes = { ...attributes, ...typology, [APPLICATION_CUSTOM_FIELDS]: signToken };
    }
    return getAppStepWithLevel3(step, stepName, attributes);
  };

  const appCompletedFunnel = getAppCompleted('pagina exitosa', finalized,
    {
      [APPLICATION_CUSTOM_FIELDS]: signToken,
      ...repeatCommonFunnel,
      ...typology,
      ...description
    }
  );

  const exitFootprint = getAdvancedFootprint({
    ...commonLevels,
    ...common,
    [PAGE_PAGEINFO_LEVEL3]: {
      bind: 'detail'
    },
    [PAGE_PAGEINFO_PAGEINTENT]: transaction
  });

  const detailNotificationLink = getInternalLinkWithLevel2('pago seguro', 'detalle de notificacion', common, {
    [PAGE_PAGEINFO_LEVEL1]: insurances,
    [PAGE_PAGEINFO_PAGEINTENT]: transaction
  });

  const dataAnalyticsFootprint = {
    footprintOpNoAvailable: {
      flag: 'notAvailableError',
      pageInfoLevel: 'error operacion no disponible',
      complementData: {
        [PAGE_PAGEINFO_ERRORPAGE]: 'error operacion no disponible',
        [PAGE_PAGEINFO_PAGEINTENT]: information,
        [PAGE_PAGEINFO_LEVEL1]: insurances,
        [PAGE_PAGEINFO_LEVEL2]: 'detalle de notificacion',
        ...common
      }
    },
    footprintCommunicationError: {
      flag: 'interrumptedCommunicationError',
      pageInfoLevel: 'error comunicacion interrumpida',
      complementData: {
        [PAGE_PAGEINFO_PAGEINTENT]: information,
        [PAGE_PAGEINFO_ERRORPAGE]: 'error comunicacion interrumpida',
        ...repeatCommonFootprint
      }
    },
    footprintExitProcessMethod: {
      pageInfoLevel: { bind: 'exitPart' },
      complementData: {
        [PAGE_PAGEINFO_PAGEINTENT]: transaction,
        ...repeatCommonFootprint
      }
    },
    footprintExpiredTime: {
      flag: 'paidPolicyError',
      pageInfoLevel: 'error pago fuera del limite',
      complementData: {
        [PAGE_PAGEINFO_ERRORPAGE]: 'error pago fuera del limite',
        [PAGE_PAGEINFO_PAGEINTENT]: information,
        ...repeatCommonFootprint
      }
    },
    footprintPaidPolicy: {
      flag: 'paymentOutsideError',
      pageInfoLevel: 'poliza pagada',
      complementData: {
        [PAGE_PAGEINFO_PAGEINTENT]: information,
        [PAGE_PAGEINFO_ERRORPAGE]: 'poliza pagada',
        ...repeatCommonFootprint
      }
    },
    footprintTermsConditions: {
      pageInfoLevel: 'terminos y condiciones',
      complementData: {
        [PAGE_PAGEINFO_PAGEINTENT]: information,
        ...repeatCommonFootprint
      }
    }
  };

  const genericFootprint = (footprint) => {
    const foundFootprint = dataAnalyticsFootprint[footprint];
    const analytics = getAdvancedFootprintWithLevel3(foundFootprint.pageInfoLevel, foundFootprint.complementData);
    _setFeatureFlag(foundFootprint.flag || '', analytics);
    return analytics;
  };

  [
    detailNotification,
    detailNotificationLink,
    appOnClickStartFunnel,
    appPageVisitFunnel,
    appStartedFunnel,
    appCompletedFunnel,
    exitFootprint
  ].forEach(analytic => getAnalyticFeatureFlag(analyticsFunnelFlag, analytic));

  return {
    detailNotification,
    detailNotificationLink,
    appOnClickStartFunnel,
    appPageVisitFunnel,
    appStartedFunnel,
    appCompletedFunnel,
    exitFootprint,
    genericFootprint,
    appStep
  };
};
