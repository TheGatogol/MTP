module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');
  const _ANALYTICS_FEATURE_FLAG = {
    GLOBAL: {
      'key': 'glomo.analytics.profile.updateAddressPage',
      'defaultValue': true
    },
    ERROR: {
      'key': 'glomo.analytics.profile.updateAddressPage.error',
      'defaultValue': true
    }
  };

  const _COMMON_BINDINGS = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {'bind': 'customFields'},
    [CONSTANTS.APPLICATION_PROCESS]: { bind: 'process'}
  };

  const _COMMON = (pageIntent = '') => ({
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: CONFIG.SYSENV,
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: CONFIG.businessUnit,
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: CONFIG.siteAppName,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.loggedIn,
    [CONSTANTS.USER_SEGMENT_PROFILE]: LITERALS.commons.userProactive
  });

  const _COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.managePostalAddress,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.actions.manageAddress,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.actions.updateAddress
  };

  const _COMMON_LEVEL = (level2 = '') => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.actions.manageAddress,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2
  });


  const _COMMON_ON_CLICK_START_DATA = {
    ..._COMMON(LITERALS.commons.information),
    ..._COMMON_LEVEL('requisitos'),
    ..._COMMON_APPLICATION
  };

  const _COMMON_ON_CLICK_START = (stepText) => UTILS.getOnClickStart(stepText, LITERALS.commons.transaction, _COMMON_ON_CLICK_START_DATA);

  const APP_ON_CLICK_START_CHANGE_INSTRUCTION = _COMMON_ON_CLICK_START('requisitos');

  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('1 direccion'),
      ..._COMMON_BINDINGS,
      [CONSTANTS.APPLICATION_STEP]: '1 direccion'
    }
  };

  const _GENERIC_APP_STARTED = (step = '') => ({
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('1 direccion'),
      ..._COMMON_BINDINGS,
      [CONSTANTS.APPLICATION_STEP]: step
    }
  });

  const APP_STARTED_STREET_NAME = _GENERIC_APP_STARTED('calle');
  const APP_STARTED_EXT_NUMBER = _GENERIC_APP_STARTED('numero exterior');
  const APP_STARTED_IN_NUMBER = _GENERIC_APP_STARTED('numero interior');
  const APP_STARTED_POSTAL_CODE = _GENERIC_APP_STARTED('codigo postal');
  const APP_STARTED_CONTINUE = _GENERIC_APP_STARTED('continuar');

  const APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_APPLICATION,
      ..._COMMON_LEVEL('2 comprobante'),
      ..._COMMON_BINDINGS,
      [CONSTANTS.APPLICATION_STEP]: '2 comprobante'
    }
  };

  const APP_STEP_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_APPLICATION,
      ..._COMMON_BINDINGS,
      ..._COMMON_LEVEL('3 confirmacion'),
      [CONSTANTS.APPLICATION_STEP]: '3 confirmacion',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: LITERALS.actions.updateAddress
    }
  };

  const APP_STEP_4 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep4,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_APPLICATION,
      ..._COMMON_BINDINGS,
      ..._COMMON_LEVEL('4 otp'),
      [CONSTANTS.APPLICATION_STEP]: '4 otp'
    }
  };

  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_APPLICATION,
      ..._COMMON_BINDINGS,
      ..._COMMON_LEVEL(LITERALS.commons.successfulPage),
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
      [CONSTANTS.APPLICATION_STATE]: 'en revision',
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
    }
  };

  const FOOTPRINT_REQUIREMENTS = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ..._COMMON(LITERALS.commons.information),
      ..._COMMON_LEVEL('requisitos'),
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {'bind': 'customFields'},
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.managePostalAddress,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.actions.manageAddress,
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
      [CONSTANTS.APPLICATION_STEP]: 'requisitos',
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
    }
  };

  const FOOTPRINT_PRIVACY_NOTICE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_LEVEL('aviso de privacidad')
    }
  };

  const FOOTPRINT_UPLOAD_FILE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_LEVEL('elegir o tomar fotografia')
    }
  };

  const FOOTPRINT_PDF = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_LEVEL('recomendaciones pdf')
    }
  };

  const FOOTPRINT_PHOTO = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ..._COMMON(LITERALS.commons.transaction),
      ..._COMMON_LEVEL('recomendaciones foto')
    }
  };

  return {
    APP_ON_CLICK_START_CHANGE_INSTRUCTION,
    APP_PAGE_VISIT,
    APP_STARTED: {
      STREET: APP_STARTED_STREET_NAME,
      EXT_NUMBER: APP_STARTED_EXT_NUMBER,
      IN_NUMBER: APP_STARTED_IN_NUMBER,
      CP: APP_STARTED_POSTAL_CODE,
      CONTINUE: APP_STARTED_CONTINUE
    },
    APP_STEP_2,
    APP_STEP_3,
    APP_STEP_4,
    APP_COMPLETED,
    FOOTPRINT_REQUIREMENTS,
    FOOTPRINT_PRIVACY_NOTICE,
    FOOTPRINT_UPLOAD_FILE,
    FOOTPRINT_PDF,
    FOOTPRINT_PHOTO
  };
};
