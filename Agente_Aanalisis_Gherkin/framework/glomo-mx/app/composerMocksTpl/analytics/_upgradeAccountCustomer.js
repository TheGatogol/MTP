const { PAGE_PAGEACTIVITY_LINK_URL, PAGE_PAGEINFO_ERRORPAGE } = require('./common/_constants');
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');

module.exports = () => {

  const FEATURE_FLAG = {
    GLOBAL: {
      key: 'glomo.analytics.upgradeAccountCustomer',
      defaultValue: true
    },
    EXTERNAL_ADDRESSS_EXTERNAL_LINK_PRINT: {
      key: 'glomo.analytics.upgradeAccountCustomer.externalAddressExternalLinkPrint',
      defaultValue: true
    },
    ERROR_OPERATION_NOT_PERFORMED: {
      key: 'glomo.analytics.upgradeAccountCustomer.errorOperationNotPerformed',
      defaultValue: true
    },
    ERROR_VALIDATION: {
      key: 'glomo.analytics.upgradeAccountCustomer.errorValidation',
      defaultValue: true
    },
    ERROR_PAGE: {
      key: 'glomo.analytics.upgradeAccountCustomer.errorPage',
      defaultValue: true
    }
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'upgrade customer',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'actualizar expediente',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'autogestion',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'cuentas',
    [CONSTANTS.APPLICATION_FULLFILMENT]: 'online'
  };

  const PAGE_COMMON = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
  };

  const COMMON_APP_STARTED = (elementClicked = '') => ({
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:1 requisitos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 requisitos',
      [CONSTANTS.APPLICATION_STEP]: elementClicked
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  });

  const COMMON_EXIT_RECHAZO = (elementClicked = '') => ({
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:pagina exitosa',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'rechazado',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: 'cuentas',
      [CONSTANTS.PRODUCT_STATE]: 'rechazado',

      [CONSTANTS.USER_SEGMENT_PROFILE]: elementClicked
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  });

  return {
    'APP_ON_CLICK_START': {
      type: LITERALS.types.link,
      action: LITERALS.actions.appOnClickStart,
      [CONSTANTS.DATALAYER_NAME]: {
        ...COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:detalle',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
        [CONSTANTS.APPLICATION_STEP]: 'comenzar',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },

    //MVP SIGUIENTE
    'APP_ON_CLICK_START_SUBMENU': {
      type: LITERALS.types.link,
      action: LITERALS.actions.appOnClickStart,
      [CONSTANTS.DATALAYER_NAME]: {
        ...COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:detalle',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
        [CONSTANTS.APPLICATION_STEP]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_PAGE_VISIT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appPageVisit,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:1 requisitos',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 requisitos',
        [CONSTANTS.APPLICATION_STEP]: '1 requisitos',
        [CONSTANTS.QUALIFIED_VISITS]: 'true'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    // eslint-disable-next-line new-cap
    'APP_STARTED_CONTINUE': COMMON_APP_STARTED('continua'),
    // eslint-disable-next-line new-cap
    'APP_STARTED_PRIVACY_MODAL': COMMON_APP_STARTED('aviso de privacidad'),
    'APP_STEP_2': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep2,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:2 cuestionario',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 cuestionario',
        [CONSTANTS.APPLICATION_STEP]: '2 cuestionario'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_3': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep3,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:3 verifica identidad',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '3 verifica identidad',
        [CONSTANTS.APPLICATION_STEP]: '3 verifica identidad'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_4': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep4,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:4 consentimiento',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '4 consentimiento',
        [CONSTANTS.APPLICATION_STEP]: '4 consentimiento'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_5': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep5,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:5 captura cedula',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '5 captura cedula',
        [CONSTANTS.APPLICATION_STEP]: '5 captura cedula'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_6': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep6,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:6 captura selfie',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '6 captura selfie',
        [CONSTANTS.APPLICATION_STEP]: '6 captura selfie'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_7': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep7,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:7 datos personales',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '7 datos personales',
        [CONSTANTS.APPLICATION_STEP]: '7 datos personales'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_8': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep8,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:8 direccion actual',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '8 direccion actual',
        [CONSTANTS.APPLICATION_STEP]: '8 direccion actual'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_9': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep9,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:9 operaciones financieras',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '9 operaciones financieras',
        [CONSTANTS.APPLICATION_STEP]: '9 operaciones financieras'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_10': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep10,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:10 manejo de la cuenta',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '10 manejo de la cuenta',
        [CONSTANTS.APPLICATION_STEP]: '10 manejo de la cuenta'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_11': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep11,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:11 terminos y condiciones',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '11 terminos y condiciones',
        [CONSTANTS.APPLICATION_STEP]: '11 terminos y condiciones'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_12': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep12,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:12 confirmacion',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '12 confirmacion',
        [CONSTANTS.APPLICATION_STEP]: '12 confirmacion'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_STEP_13': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appStep13,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:13 otp',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '13 otp',
        [CONSTANTS.APPLICATION_STEP]: '13 otp',
        [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'APP_COMPLETED_UNDER_REVIEW': {
      type: LITERALS.types.view,
      action: LITERALS.actions.appCompleted,
      [CONSTANTS.DATALAYER_NAME]: {
        ...PAGE_COMMON,
        [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: 'app:privada:personas:cuentas:actualizar expediente:pagina exitosa',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
        [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
        [CONSTANTS.APPLICATION_STATE]: 'en revision',
        [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'cuentas',
        [CONSTANTS.PRODUCT_STATE]: 'en revision',
        [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    // eslint-disable-next-line new-cap
    'APP_COMPLETED_RECHAZO_PPE': COMMON_EXIT_RECHAZO('usuario ppe'),
    // eslint-disable-next-line new-cap
    'APP_COMPLETED_RECHAZO_MONEY_NOT_OWN': COMMON_EXIT_RECHAZO('dinero no propio'),
    // eslint-disable-next-line new-cap
    'APP_COMPLETED_RECHAZO_FREQUENT_INTERNATIONAL_TRANSFERS': COMMON_EXIT_RECHAZO('transferencias internacionales frecuentes'),
    // eslint-disable-next-line new-cap
    'APP_COMPLETED_RECHAZO_OBLIGATIONS_FISCAL_OUTSIDE_OF_MEXICO': COMMON_EXIT_RECHAZO('obligaciones fiscales fuera de mexico'),
    // eslint-disable-next-line new-cap
    'APP_COMPLETED_RECHAZO_COULD_NOT_VALIDATE_INDETIFY': COMMON_EXIT_RECHAZO('no se pudo validar identidad'),
    'PRIVACY_NOTICE_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'aviso de privacidad'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'PERSON_POLITICALLY_EXPOSED_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'persona politicamente expuesta'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },

    //SIGUIENTE MVP
    'VIDEO_CAPTURE_FRONT_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'video captura frontal'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },

    //SIGUIENTE MVP
    'VIDEO_CAPTURE_BACK_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'video captura reverso'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'ADDRESS_EDITION_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'edicion domicilio'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'EXTERNAL_ADDRESSS_EXTERNAL_LINK_PRINT': {
      type: LITERALS.types.link,
      action: LITERALS.actions.externalLink,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '8 direccion actual',
        [PAGE_PAGEACTIVITY_LINK_URL]: 'anadir comprobante'
      },
      featureFlag: FEATURE_FLAG.EXTERNAL_ADDRESSS_EXTERNAL_LINK_PRINT
    },
    'OPERATIONS_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'operaciones'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'RESTRICTIONS_PRINT': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
        [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'por que debo actualizar mi informacion'
      },
      featureFlag: FEATURE_FLAG.GLOBAL
    },
    'ERROR_OPERATION_NOT_PERFORMED': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error operacion no realizada',
        [PAGE_PAGEINFO_ERRORPAGE]: 'error operacion no realizada'
      },
      featureFlag: FEATURE_FLAG.ERROR_OPERATION_NOT_PERFORMED
    },
    'ERROR_VALIDATION': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error validacion',
        [PAGE_PAGEINFO_ERRORPAGE]: 'error validacion'
      },
      featureFlag: FEATURE_FLAG.ERROR_VALIDATION
    },
    'ERROR_PAGE': {
      type: LITERALS.types.view,
      action: LITERALS.actions.mark,
      [CONSTANTS.DATALAYER_NAME]: {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'cuentas',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'actualizar expediente',
        [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
        [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
        [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
        [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Open Market',
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error comunicacion interrumpida',
        [PAGE_PAGEINFO_ERRORPAGE]: 'error comunicacion interrumpida'
      },
      featureFlag: FEATURE_FLAG.ERROR_PAGE
    }
  };
};
