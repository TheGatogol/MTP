/* eslint-disable new-cap */
module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const _ANALYTICS_FEATURE_FLAGS = {
    GLOBAL: {
      'key': 'glomo.analytics.profile.identification',
      'defaultValue': true
    },
    ERROR_PERMISSION: {
      'key': 'glomo.analytics.profile.identification.errors.permision',
      'defaultValue': true
    },
    ERROR_COMMUNICATION: {
      'key': 'glomo.analytics.profile.identification.errors.communication',
      'defaultValue': true
    },
    ERROR_UNREADABLE_PICTURE: {
      'key': 'glomo.analytics.profile.identification.errors.ilegiblePicture',
      'defaultValue': true
    },
    ERROR_INVALID_DATA: {
      'key': 'glomo.analytics.profile.identification.errors.invalidData',
      'defaultValue': true
    }
  };
  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: 'online',
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: 'app',
    [CONSTANTS.USER_USERSTATE]: 'logado',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'

  };
  const _COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'id validation',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'actualizar identificacion',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
    [CONSTANTS.APPLICATION_FULLFILMENT]: 'online'
  };
  const _COMMON_LEVEL = (LEVEL2 = '') => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'actualizar identificacion',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LEVEL2

  });
  const _COMMON_ON_CLICK_START_DATA =  {
    ..._COMMON,
    ..._COMMON_APPLICATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'perfil',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
    [CONSTANTS.APPLICATION_STEP]: 'perfil'
  };
  const COMMON_DYNAMIC = {
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {'bind': 'customFields'},
    [CONSTANTS.APPLICATION_TYPOLOGY]: {'bind': 'typology'}
  };
  const USE_COMMON_GROUP =  {
    ..._COMMON,
    ..._COMMON_APPLICATION,
    ...COMMON_DYNAMIC
  };
  const _COMMON_ON_CLICK_START = (stepText) => UTILS.getOnClickStart(stepText, 'transaccion', _COMMON_ON_CLICK_START_DATA);
  const APP_ON_CLICK_START_CHANGE_INSTRUCTION_ID = {
    ..._COMMON_ON_CLICK_START('perfil'),
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_PAGE_VISIT = {
    action: 'App Page Visit',
    type: 'view',
    digitalData: {
      [CONSTANTS.QUALIFIED_VISITS]: false,
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('1 datos de identificacion'),
      [CONSTANTS.APPLICATION_STEP]: '1 datos de identificacion'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const GENERIC_APP_STARTED = (step = '') => ({
    action: 'App Started',
    type: 'link',
    digitalData: {
      ...USE_COMMON_GROUP,
      [CONSTANTS.APPLICATION_STEP]: step,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'actualizar identificacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 datos de identificacion'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  });
  const APP_STARTED_SCAN = GENERIC_APP_STARTED('escanear');
  const APP_STARTED_NOTICE_PRIVACY = GENERIC_APP_STARTED('aviso de privacidad');
  const APP_STARTED_CHECK_BUTTON = GENERIC_APP_STARTED('check datos personales');
  const APP_STARTED_TAKE_PHOTO = GENERIC_APP_STARTED('tomar foto');
  const APP_STEP_2 = {
    action: 'App Step 2',
    type: 'view',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('2 recomendaciones escaneo'),
      [CONSTANTS.APPLICATION_STEP]: '2 recomendaciones escaneo'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_STEP_3 = {
    action: 'App Step 3',
    type: 'view',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('3 captura cedula'),
      [CONSTANTS.APPLICATION_STEP]: '3 captura cedula'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_STEP_4 = {
    action: 'App Step 4',
    type: 'view',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('4 captura selfie'),
      [CONSTANTS.APPLICATION_STEP]: '4 captura selfie'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_STEP_5 = {
    action: 'App Step 5',
    type: 'view',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('5 datos del documento'),
      [CONSTANTS.APPLICATION_STEP]: '5 datos del documento'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_STEP_6 = {
    action: 'App Step 6',
    type: 'view',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('6 confirmacion'),
      [CONSTANTS.APPLICATION_STEP]: '6 confirmacion'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_STEP_7 = {
    action: 'App Step 7',
    type: 'view',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('7 otp'),
      [CONSTANTS.APPLICATION_STEP]: '7 otp'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const APP_COMPLETED = {
    type: 'view',
    action: 'App Completed',
    digitalData: {
      ...USE_COMMON_GROUP,
      ..._COMMON_LEVEL('pagina exitosa'),
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };

  // MODALES DE ERRORES
  const FOOTPRINT_COMPLETE = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('completa la actualizacion'),
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    },

    featureFlag: _ANALYTICS_FEATURE_FLAGS.GLOBAL
  };
  const FOOTPRINT_ERROR_PERMISSIONS = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('error permisos'),
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error permisos'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.ERROR_PERMISSION
  };
  const FOOTPRINT_ERROR_COMMUNICATION = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('error de comunicacion'),
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de comunicacion'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.ERROR_COMMUNICATION
  };
  const FOOTPRINT_ERROR_UNREADABLE_PICTURE = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('error foto ilegible'),
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error foto ilegible'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.ERROR_UNREADABLE_PICTURE
  };
  const FOOTPRINT_ERROR_INVALID_DATA = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('error datos invalidos'),
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error datos invalidos'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAGS.ERROR_INVALID_DATA
  };
  return {
    APP_ON_CLICK_START_CHANGE_INSTRUCTION_ID,
    FOOTPRINT_COMPLETE,
    app: {
      pageVisit: APP_PAGE_VISIT,
      started: {
        scan: APP_STARTED_SCAN,
        privacyNotice: APP_STARTED_NOTICE_PRIVACY,
        checkButton: APP_STARTED_CHECK_BUTTON,
        takePhoto: APP_STARTED_TAKE_PHOTO
      },
      step2: APP_STEP_2,
      step3: APP_STEP_3,
      step4: APP_STEP_4,
      step5: APP_STEP_5,
      step6: APP_STEP_6,
      step7: APP_STEP_7,
      completed: APP_COMPLETED
    },
    footprints: {
      permissions: FOOTPRINT_ERROR_PERMISSIONS,
      communication: FOOTPRINT_ERROR_COMMUNICATION,
      unredeablePicture: FOOTPRINT_ERROR_UNREADABLE_PICTURE,
      invalidData: FOOTPRINT_ERROR_INVALID_DATA
    }
  };
};
