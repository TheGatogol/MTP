/* eslint-disable max-statements */
module.exports = (CONFIG) => {
  const LITERALS = require('./common/_literals');
  const CONSTANTS = require('./common/_constants');
  const {getProduct, getOnClickStart, getPageVisitWithLevel3,
    getStaticAppStarted, getAppStepWithLevel3, getAppCompleted, getInternalLink,
    getAnalyticFeatureFlagError, getAnalyticFeatureFlag, getError} = require('./common/_utils');

  const _PRODUCT_CONFIG = getProduct('tarjetas', 'tarjetas credito');

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.USER_USERSTATE]: 'logado'
  };

  const _COMMON_FUNNEL = {
    ..._COMMON,
    ..._PRODUCT_CONFIG,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'activar tdc qr',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'card activation qr',
    [CONSTANTS.APPLICATION_STEP]: 'activar tarjeta'
  };

  const _COMMON_PAGE_LEVEL_CARD_ACTIVATION = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'activar tdc qr'
  };

  const _COMMON_PAGE_LEVEL_VIEW_NIP = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'solicitar nip qr'
  };

  const DYNAMIC_STEP_DATA = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'step'
    }
  };

  const DYNAMIC_DATA_ORIGIN = {
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };

  const _PRODUCT_CONFIG_DEBIT = getProduct('tarjetas', 'tarjetas debito');

  const _COMMON_OPERAIONS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: LITERALS.commons.version_1,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const ENTRY_POINT = {
    ..._COMMON_OPERAIONS,
    ..._PRODUCT_CONFIG_DEBIT,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.physicalDebitCardReception,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative
  };

  const _COMMON_RECEIPT_CONFIRMATION = {
    ..._COMMON_OPERAIONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.physicalDebitCardReception
  };

  const _COMMON_FUNNEL_RECEIPT_CONFIRMATION = {
    ..._COMMON_RECEIPT_CONFIRMATION,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.physicalDebitCardReception,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.debitCard
  };

  const ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG = {
    'key': 'glomo.analytics.aquaCardActivation',
    'defaultValue': true
  };

  const ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG_ERROR = {
    'key': 'glomo.analytics.aquaCardActivation.error',
    'defaultValue': true
  };

  const ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG_QR_READ_ERROR = {
    'key': 'glomo.analytics.aquaCardActivation.qrReadError',
    'defaultValue': true
  };

  const ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG = {
    'key': 'glomo.analytics.aquaCardPinRequest',
    'defaultValue': true
  };

  const ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG_ERROR = {
    'key': 'glomo.analytics.aquaCardPinRequest.error',
    'defaultValue': true
  };

  const ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG_QR_READ_ERROR = {
    'key': 'glomo.analytics.aquaCardPinRequest.qrReadError',
    'defaultValue': true
  };


  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      [CONSTANTS.APPLICATION_STEP]: '1 activar tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 activar tarjeta'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const APP_STARTED_DYNAMIC = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      ...DYNAMIC_STEP_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 activar tarjeta'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const APP_STEP_OPEN_QR_SCANNER = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      [CONSTANTS.APPLICATION_STEP]: '2 escaneo',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 escaneo'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const APP_STEP_OTP = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      [CONSTANTS.APPLICATION_STEP]: '3 otp',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '3 otp'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      ...DYNAMIC_DATA_ORIGIN,
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const HUELLA_PAGE_VIEW_FAQS = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'tarjetas con qr',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'faqs'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG
  };

  const ERROR_QR_READING_CARD_ACTIVATION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error lectura qr',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error lectura qr'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG_QR_READ_ERROR
  };

  const ERROR_CARD_ACTIVATION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_FUNNEL,
      ..._COMMON_PAGE_LEVEL_CARD_ACTIVATION,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error activacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error activacion'
    },
    featureFlag: ANALYTICS_AQUA_CARD_ACTIVATION_FEATURE_FLAG_ERROR
  };

  const HUELLA_PAGE_VIEW_NIP = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON,
      ..._COMMON_PAGE_LEVEL_VIEW_NIP,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 solicitar'
    },
    featureFlag: ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG
  };

  const HUELLA_PAGE_SUCCESSFUL_VIEW_NIP = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON,
      ..._COMMON_PAGE_LEVEL_VIEW_NIP,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa'
    },
    featureFlag: ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG
  };

  const ERROR_QR_READING_VIEW_NIP = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON,
      ..._COMMON_PAGE_LEVEL_VIEW_NIP,
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error lectura qr',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error lectura qr'
    },
    featureFlag: ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG_QR_READ_ERROR
  };

  const ERROR_PIN_DISPLAY = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON,
      ..._COMMON_PAGE_LEVEL_VIEW_NIP,
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error visualizar nip',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error visualizar nip'
    },
    featureFlag: ANALYTICS_AQUA_PIN_REQUEST_FEATURE_FLAG_ERROR
  };

  const APP_ONCLICK_START_ENTRY_POINT_CONSULT_AND_CONFIRM = {
    ...getOnClickStart('detalle', 'informacion', ENTRY_POINT, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'tarjeta de debito fisica'
    })
  };

  const APP_ONCLICK_START_ENTRY_POINT_CONFIRM_RECEIP =  {
    ...getOnClickStart('rastreo tarjeta de debito', 'informacion', ENTRY_POINT, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'tarjeta de debito fisica'
    })
  };

  const APP_PAGE_VISIT_CONFIRM_RECEPTION = {
    ...getPageVisitWithLevel3('1 tarjeta recibida', _COMMON_FUNNEL_RECEIPT_CONFIRMATION)
  };

  const APP_STARTED_DYNAMIC_CONFIRM_RECEPTION = {
    ...getStaticAppStarted('escanear', '1 tarjeta recibida', _COMMON_FUNNEL_RECEIPT_CONFIRMATION)
  };

  const APP_STEP_OPEN_QR_SCANNER_CONFIRM_RECEPTION = {
    ...getAppStepWithLevel3('2', '2 escaneo', _COMMON_FUNNEL_RECEIPT_CONFIRMATION)
  };

  const APP_STEP_OTP_CONFIRM_RECEPTION = {
    ...getAppStepWithLevel3('3', '3 otp', _COMMON_FUNNEL_RECEIPT_CONFIRMATION, {
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
    })
  };

  const APP_COMPLETED_CONFIRM_RECEPTION = {
    ...getAppCompleted('pagina exitosa', 'finalizado', _COMMON_FUNNEL_RECEIPT_CONFIRMATION, {
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
    })
  };

  const APP_COMPLETED_RECEPTION_ATM_BRANCH_LOCATOR = {
    ...getInternalLink('ver sucursales y cajeros', _COMMON_RECEIPT_CONFIRMATION, {
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage
    })
  };


  const getErrorAnalitycs = (params) => {
    const typeError = {
      errorsQrReading: getAnalyticFeatureFlagError('debitCardConfirmReception.qrReadingError', getError('error lectura qr', _COMMON_RECEIPT_CONFIRMATION, {
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
      })),
      errorCardConfirm: getAnalyticFeatureFlagError('debitCardConfirmReception.hadProblemError', getError('error tuvimos un problema', _COMMON_RECEIPT_CONFIRMATION, {
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
      })),
      errorConnections: getAnalyticFeatureFlagError('debitCardConfirmReception.serviceError', getError('error de servicio', _COMMON_RECEIPT_CONFIRMATION, {
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
      }))
    };
    return typeError[params];
  };

  [
    APP_ONCLICK_START_ENTRY_POINT_CONSULT_AND_CONFIRM,
    APP_ONCLICK_START_ENTRY_POINT_CONFIRM_RECEIP,
    APP_PAGE_VISIT_CONFIRM_RECEPTION,
    APP_STARTED_DYNAMIC_CONFIRM_RECEPTION,
    APP_STEP_OPEN_QR_SCANNER_CONFIRM_RECEPTION,
    APP_STEP_OTP_CONFIRM_RECEPTION,
    APP_COMPLETED_CONFIRM_RECEPTION,
    APP_COMPLETED_RECEPTION_ATM_BRANCH_LOCATOR
  ].forEach(analytics => getAnalyticFeatureFlag('debitCardConfirmReception', analytics));

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_PAGE_VISIT_CONFIRM_RECEPTION,
    APP_STARTED_DYNAMIC,
    APP_STARTED_DYNAMIC_CONFIRM_RECEPTION,
    APP_STEP_OTP,
    APP_STEP_OTP_CONFIRM_RECEPTION,
    APP_STEP_OPEN_QR_SCANNER,
    APP_STEP_OPEN_QR_SCANNER_CONFIRM_RECEPTION,
    APP_COMPLETED,
    APP_COMPLETED_CONFIRM_RECEPTION,
    APP_COMPLETED_RECEPTION_ATM_BRANCH_LOCATOR,
    HUELLA_PAGE_VIEW_FAQS,
    ERROR_QR_READING_CARD_ACTIVATION,
    ERROR_CARD_ACTIVATION,
    HUELLA_PAGE_VIEW_NIP,
    HUELLA_PAGE_SUCCESSFUL_VIEW_NIP,
    ERROR_QR_READING_VIEW_NIP,
    ERROR_PIN_DISPLAY,
    APP_ONCLICK_START_ENTRY_POINT_CONSULT_AND_CONFIRM,
    APP_ONCLICK_START_ENTRY_POINT_CONFIRM_RECEIP,
    getErrorAnalitycs
  };
};
