/* eslint-disable new-cap */
module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const PAGE_CONFIG = {
    items: {
      tooltip: 'info historial credito',
      authorization: 'ver autorizacion',
      check: 'check he leido'
    },
    buttons: {
      continue: 'aceptar'
    },
    steps: {
      sign: 'post-terms'
    }
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'autorizacion credito buro',
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.PAGEINSTANCES_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: 'app',
    [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: 'BBVA Mexico',
    [CONSTANTS.PAGE_PAGEINFO_SITEAPPNAME]: 'App BBVA Mexico',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: 'logado',
    [CONSTANTS.USER_SEGMENT_GLOBAL]: '003001'
  };

  const COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'credit bureau authorization',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'autorizacion credito buro',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_TYPOLOGY]: 'proceso cliente'
  };

  const APP_ON_CLICK_START = {
    type: 'link',
    action: 'App On Click Start',
    digitalData: {
      ...COMMON,
      ...COMMON_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.APPLICATION_STEP]: 'me interesa oportunidades',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'oportunidades'
    }
  };

  const APP_PAGE_VISIT = {
    type: 'view',
    action: 'App Page Visit',
    digitalData: {
      ...COMMON,
      ...COMMON_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 solicitud',
      [CONSTANTS.APPLICATION_STEP]: '1 solicitud'
    }
  };

  const COMMON_APP_STARTED = (elementClicked = '') => ({
    type: 'link',
    action: 'App Started',
    digitalData: {
      ...COMMON,
      ...COMMON_APPLICATION,
      [CONSTANTS.APPLICATION_STEP]: elementClicked,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 solicitud'
    }
  });

  const APP_STARTED_TOOLTIP = COMMON_APP_STARTED('info historial credito');
  const APP_STARTED_AUTHORIZATION = COMMON_APP_STARTED('ver autorizacion');
  const APP_STARTED_CHECK = COMMON_APP_STARTED('check he leido');
  const APP_STARTED_ACCEPT = COMMON_APP_STARTED('aceptar');


  const APP_STEP_2 = {
    type: 'view',
    action: 'App Step 2',
    digitalData: {
      ...COMMON,
      ...COMMON_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '2 otp',
      [CONSTANTS.APPLICATION_STEP]: '2 otp'
    }
  };

  const HUELLA_AVANZADA_TOOLTIP = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'historial de credito'
    }
  };

  const HUELLA_AVANZADA_AUTHORIZATION = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'ver autorizacion'
    }
  };

  const HUELLA_AVANZADA_ERROR = {
    type: 'view',
    action: 'Page View',
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'error otp',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error otp'
    }
  };

  const APP_COMPLETED = {
    type: 'view',
    action: 'App Completed',
    digitalData: {
      ...COMMON,
      ...COMMON_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: ''
    }
  };

  return {
    PAGE_CONFIG,
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED_TOOLTIP,
    APP_STARTED_AUTHORIZATION,
    APP_STARTED_CHECK,
    APP_STARTED_ACCEPT,
    APP_STEP_2,
    HUELLA_AVANZADA_TOOLTIP,
    HUELLA_AVANZADA_AUTHORIZATION,
    HUELLA_AVANZADA_ERROR,
    APP_COMPLETED
  };
};
