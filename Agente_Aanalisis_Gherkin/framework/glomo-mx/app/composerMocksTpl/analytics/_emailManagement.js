module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG = {
    GLOBAL: {
      key: 'glomo.analytics.profile.email',
      defaultValue: true
    },
    ERRORS: {
      key: 'glomo.analytics.profile.email.errors.communication',
      defaultValue: true
    }
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: CONFIG.sysEnv,
    [CONSTANTS.PAGE_PAGEINFO_SERVER]: 'window.location.hostname',
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: CONFIG.businessUnit,
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: CONFIG.siteAppName,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'administracion de correo'
  };

  const _MAIL_OPERATION = {
    ..._COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {bind: 'level2'},
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const _VALIDATION = {
    ... _COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'validar correo'
  };

  const _VALIDATE_MAIL = {
    ... _VALIDATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 validacion',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };

  const _SECURITY_CODE = {
    ... _VALIDATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 codigo de seguridad',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };

  const _SUCCESSFUL_VALIDATION = {
    ... _VALIDATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  };

  const _SAVE_DATA_ERROR = {
    ... _COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {bind: 'level2'},
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error guardado de datos',
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error guardado de datos',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const _CODE_ERROR = {
    ... _VALIDATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'codigo incorrecto',
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'codigo incorrecto',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const _ABANDON_ALERT = {
    ... _VALIDATION,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'alertamiento abandono',
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'alertamiento abandono',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const PAGE_VIEW_1_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._MAIL_OPERATION
    }
  };

  const PAGE_VIEW_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._VALIDATE_MAIL
    }
  };

  const PAGE_VIEW_4 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._SECURITY_CODE
    }
  };

  const PAGE_VIEW_5 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._SUCCESSFUL_VALIDATION
    }
  };

  const PAGE_VIEW_6 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._SAVE_DATA_ERROR
    }
  };

  const PAGE_VIEW_7 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._CODE_ERROR
    }
  };

  const PAGE_VIEW_8 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._ABANDON_ALERT
    }
  };

  const GLOBAL_FLAGS = [
    PAGE_VIEW_1_2,
    PAGE_VIEW_3,
    PAGE_VIEW_4,
    PAGE_VIEW_5
  ];

  const ERROR_FLAGS = [
    PAGE_VIEW_6,
    PAGE_VIEW_7,
    PAGE_VIEW_8
  ];

  GLOBAL_FLAGS.forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG.GLOBAL));
  ERROR_FLAGS.forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG.ERRORS));

  return {
    PAGE_VIEW_1_2,
    PAGE_VIEW_3,
    PAGE_VIEW_4,
    PAGE_VIEW_5,
    PAGE_VIEW_6,
    PAGE_VIEW_7,
    PAGE_VIEW_8
  };

};
