module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const _ANALYTICS_FEATURE_FLAG = {
    GLOBAL: {
      'key': 'glomo.analytics.profile.curpPage',
      'defaultValue': true
    },
    ERROR_NON_EXISTENT_CURP: {
      'key': 'glomo.analytics.profile.curpPage.errors.nonExistent',
      'defaultValue': true
    },
    ERROR_INVALID_CURP: {
      'key': 'glomo.analytics.profile.curpPage.errors.invalidCurp',
      'defaultValue': true
    }
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const _COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.curpvalidation,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.addcurp,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };

  const _COMMON_LEVEL = (level2 = '') => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.addcurp,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
  });


  const _COMMON_ON_CLICK_START_DATA = {
    ..._COMMON,
    ..._COMMON_APPLICATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.myprofile,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const _COMMON_ON_CLICK_START = (stepText) => UTILS.getOnClickStart(stepText, LITERALS.commons.information, _COMMON_ON_CLICK_START_DATA);

  const appOnClickStartChangeInstruction = {
    ..._COMMON_ON_CLICK_START(LITERALS.commons.myprofile),
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const APP_PAGE_VISIT = {
    type: 'view',
    action: 'App Page Visit',
    digitalData: {
      ..._COMMON,
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('1 ingresa tu clave'),
      [CONSTANTS.APPLICATION_STEP]: '1 ingresa tu clave'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const _GENERIC_APP_STARTED = (step = '') => ({
    type: 'link',
    action: 'App Started',
    digitalData: {
      ..._COMMON,
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('1 ingresa tu clave'),
      [CONSTANTS.APPLICATION_STEP]: step
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  });

  const APP_STARTED_TOOLTIP = _GENERIC_APP_STARTED('info curp');
  const APP_STARTED_CURP = _GENERIC_APP_STARTED('curp');
  const APP_STARTED_PRIVACY_NOTICE = _GENERIC_APP_STARTED('aviso de privacidad');
  const APP_STARTED_CONTINUE = _GENERIC_APP_STARTED('continuar');


  const APP_STEP_2 = {
    type: 'view',
    action: 'App Step 2',
    digitalData: {
      ..._COMMON,
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('2 actualizacion de datos'),
      [CONSTANTS.APPLICATION_STEP]: '2 actualizacion de datos'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const APP_STEP_3 = {
    type: 'view',
    action: 'App Step 3',
    digitalData: {
      ..._COMMON,
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('3 confirmacion'),
      [CONSTANTS.APPLICATION_STEP]: '3 confirmacion'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const APP_STEP_4 = {
    type: 'view',
    action: 'App Step 4',
    digitalData: {
      ..._COMMON,
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('4 otp'),
      [CONSTANTS.APPLICATION_STEP]: '4 otp'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const APP_COMPLETED = {
    type: 'view',
    action: 'App Completed',
    digitalData: {
      ..._COMMON,
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('pagina exitosa'),
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const FOOTPRINT_CONFIRM = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('confirmar curp')
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const FOOTPRINT_USER_MX = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('confirmar curp usuario mexicano')
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const FOOTPRINT_USER_FOREIGN = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('confirmar curp usuario extranjero')
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.GLOBAL
  };

  const FOOTPRINT_ERROR_NON_EXISTENT_CURP = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('error curp inexistente'),
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error curp inexistente'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.ERROR_NON_EXISTENT_CURP
  };

  const FOOTPRINT_ERROR_INVALID_CURP = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ..._COMMON,
      ..._COMMON_LEVEL('error curp invalida'),
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error curp invalida'
    },
    featureFlag: _ANALYTICS_FEATURE_FLAG.ERROR_INVALID_CURP
  };

  return {
    appOnClickStartChangeInstruction,
    app: {
      pageVisit: APP_PAGE_VISIT,
      started: {
        tooltip: APP_STARTED_TOOLTIP,
        curp: APP_STARTED_CURP,
        privacyNotice: APP_STARTED_PRIVACY_NOTICE,
        continue: APP_STARTED_CONTINUE
      },
      step2: APP_STEP_2,
      step3: APP_STEP_3,
      step4: APP_STEP_4,
      completed: APP_COMPLETED

    },
    footprints: {
      confirm: FOOTPRINT_CONFIRM,
      userMx: FOOTPRINT_USER_MX,
      userForeign: FOOTPRINT_USER_FOREIGN,
      dontCurp: FOOTPRINT_ERROR_NON_EXISTENT_CURP,
      invalidCurp: FOOTPRINT_ERROR_INVALID_CURP
    }
  };
};
