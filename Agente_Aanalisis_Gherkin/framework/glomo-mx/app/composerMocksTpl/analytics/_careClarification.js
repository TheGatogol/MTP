module.exports = (CONFIG) => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const featureFlagClarifications = 'clarificationsManagementCare';
  const { addFeatureFlag, getAppCompletedRaw, getPageVisitRaw, getAdvancedFootprintError, getAppStep, getAnalyticFeatureFlag, getAdvancedFootprint,
    getOnClickStart, getAppStarted } = require('./common/_utils');
  const generalCommon = {
    [constants.PAGE_PAGEINFO_LEVEL1]: {
      bind: 'level1'
    },
    [constants.PAGE_PAGEINFO_LEVEL2]: {
      bind: 'level2'
    },
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };
  const level3 = {[constants.PAGE_PAGEINFO_LEVEL3]: 'aclaracion recibo unimovimiento'};
  const level2 = {[constants.PAGE_PAGEINFO_LEVEL2]: {bind: 'level2'} };
  const stepStart = { bind: 'stepStart' };
  const productCommon = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'clarification management',
    [constants.APPLICATION_APPLICATION_NAME]: 'aclaracion recibo unimovimiento',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [constants.APPLICATION_CURRENCY]: {
      bind: 'currency'
    },
    [constants.PRODUCT_PRIMARY_CATEGORY]: {
      bind: 'primaryCategory'
    },
    [constants.PRODUCT_PRODUCT_SUBTYPE]: {
      bind: 'productSubType'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    ...generalCommon
  };
  const dynamicBinds = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'clarificationType'
    }
  };
  const dynamicBindsTwo = {
    [constants.APPLICATION_PROCESS]: {
      bind: 'typeAtention'
    },
    ...level3
  };
  const dataOnClickStart = {
    ...productCommon,
    [constants.PAGE_PAGEINFO_LEVEL3]: {
      bind: 'level3'
    },
    [constants.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    }
  };
  const appOnClickStart = getOnClickStart(stepStart, literals.commons.information, dataOnClickStart);
  const dataAppPageVisit = {
    ...productCommon,
    ...level3,
    ...level2,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'},
    [constants.APPLICATION_STEP]: '1 motivo de reporte'
  };
  const appPageVisit = getPageVisitRaw(dataAppPageVisit);
  const dataAppStarted = {
    ...productCommon,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'},
    [constants.APPLICATION_STEP]: {
      bind: 'step'
    }
  };
  const dataAppStep2 = {
    ...productCommon,
    ...dynamicBindsTwo,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'},
    [constants.APPLICATION_STEP]: '2 tipo de atencion'
  };
  const dataGeneralAnalytic = {
    ...productCommon,
    ...dynamicBinds,
    ...dynamicBindsTwo
  };
  const dataAppStep3 = {
    ... dataGeneralAnalytic,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.commons.third_confirmaton,
    [constants.APPLICATION_STEP]: literals.commons.third_confirmaton
  };
  const dataPageViewProvisional = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'}
  };
  const dataAppCompletedLine = {
    ...dataGeneralAnalytic,
    [constants.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    },
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: {bind: 'status'},
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };
  const dataAppCompletedSuccess = {
    ...dataGeneralAnalytic,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'},
    [constants.PAGE_PAGEINFO_LEVEL5]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: 'aprobado',
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };
  const dataAppCall = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.sections.assistance.callBbva
  };
  const dataBlockRecurrentPayment = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'}
  };
  const dataBlockDirectDebit = {
    ...generalCommon,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'aclaracion recibo unimovimiento',
    [constants.PAGE_PAGEINFO_LEVEL3]: 'bloqueo domiciliacion'
  };
  const dataErrorClarificationInit = {
    ...generalCommon,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'aclaracion recibo unimovimiento',
    [constants.PAGE_PAGEINFO_LEVEL3]: 'error iniciar aclaracion',
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error iniciar aclaracion de movimientos'
  };
  const dataAppOtp = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    }
  };
  const dataBlockCard = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'}
  };
  const dataAgainstLine = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'}
  };
  const dataTransitModal = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: 'movimiento en transito'
  };
  const dataErrorChange = {
    ...generalCommon,
    ...level3,
    [constants.PAGE_PAGEINFO_LEVEL4]: {bind: 'level4'}
  };
  const analyticsFeatureFlagClarificationsManagementCare = {
    key: 'glomo.analytics.clarificationsManagementCare',
    defaultValue: true
  };
  const _getAppSteps = (param) => {
    const typeStep = {
      appStarted: getAnalyticFeatureFlag(featureFlagClarifications, getAppStarted('aclaracion recibo unimovimiento', dataAppStarted)),
      appStep2AttentionType: getAnalyticFeatureFlag(featureFlagClarifications, getAppStep(2, dataAppStep2)),
      appStep3ReportingReason: getAnalyticFeatureFlag(featureFlagClarifications, getAppStep(3, dataAppStep3)),
      appViewCompletedLine: getAnalyticFeatureFlag(featureFlagClarifications, getAppCompletedRaw(dataAppCompletedLine)),
      appViewCompletedSuccess: getAnalyticFeatureFlag(featureFlagClarifications, getAppCompletedRaw(dataAppCompletedSuccess))
    };
    return typeStep[param];
  };
  const _getAppPageView = (param) => {
    const typeStep = {
      appCall: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataAppCall)),
      appBlockRecurrentPayment: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataBlockRecurrentPayment)),
      appBlockDirectDebit: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataBlockDirectDebit)),
      appErrorClarificationInit: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataErrorClarificationInit)),
      appProvisional: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataPageViewProvisional)),
      appBlockCard: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataBlockCard)),
      appAgainstLine: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataAgainstLine)),
      appTransitModal: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataTransitModal)),
      appErrorCharge: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprintError('error carga de recibo', dataErrorChange)),
      appOtp: getAnalyticFeatureFlag(featureFlagClarifications, getAdvancedFootprint(dataAppOtp))
    };
    return typeStep[param];
  };
  [
    appOnClickStart,
    appPageVisit
  ].forEach(item => addFeatureFlag(item, analyticsFeatureFlagClarificationsManagementCare));
  return {
    appOnClickStart,
    appPageVisit,
    _getAppPageView,
    _getAppSteps
  };
};