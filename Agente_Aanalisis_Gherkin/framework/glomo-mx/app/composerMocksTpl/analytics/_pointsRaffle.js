module.exports = (CONFIG) => {

  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID
  };

  const COMMON_PAGES = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'sorteo puntos',
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'points raffle',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa'
  };

  const COMMON_CARD_ORIGIN = {
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito'
  };

  const FULL_DATA = { ...COMMONS, ...COMMON_PAGES };

  const DYNAMIC_DATA_ORIGIN = {
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
      bind: 'productNameOrigin'
    }
  };

  const DYNAMIC_APPLICATION_STEP = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'applicationStep'
    }
  };

  const DYNAMIC_DATA_TYPOLOGY = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const DYNAMIC_DATA_OFFER = {
    [CONSTANTS.APPLICATION_OFFER]: {
      bind: 'offer'
    }
  };

  const DYNAMIC_DATA_OPERATION_NUMBER = {
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };

  const DYNAMIC_DATA_FAQS_QUESTION = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: {
      bind: 'faqQuestion'
    }
  };

  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.reward.pointsRaffle',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_ERRORS = {
    'key': 'glomo.analytics.reward.pointsRaffle.errors',
    'defaultValue': true
  };

  // Sorteo de Puntos APP PAGE VISIT
  const RAFFLE_POINTS_APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARD_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 detalle',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '1 detalle'
    }
  };

  // Sorteo de Puntos APP STARTED
  const RAFFLE_POINTS_APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARD_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_APPLICATION_STEP,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 detalle',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online'
    }
  };

  // Sorteo de Puntos APP STEP TWO
  const RAFFLE_POINTS_APP_STEP_TWO = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARD_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 obtener participaciones',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '2 obtener participaciones'
    }
  };

  // Sorteo de Puntos APP STEP THREE
  const RAFFLE_POINTS_APP_STEP_THREE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARD_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_DATA_TYPOLOGY,
      ...DYNAMIC_DATA_OFFER,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '3 terminos y condiciones',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '3 terminos y condiciones'
    }
  };

  // Sorteo de Puntos APP STEP FOUR
  const RAFFLE_POINTS_APP_STEP_FOUR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep4,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARD_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_DATA_TYPOLOGY,
      ...DYNAMIC_DATA_OFFER,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '4 confirmar',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '4 confirmar'
    }
  };


  // Abrir EVENTO - Acceso a terminos y condiciones
  const TERMS_AND_CONDITIONS_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '3 terminos y condiciones',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'terminos y condiciones',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards',
      [CONSTANTS.USER_DEVICE_MOBILE]: 'si',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    }
  };

  // Abrir EVENTO - Acceso a bases sorteo
  const RAFFLE_CONDITIONS_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'premios y bases',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards',
      [CONSTANTS.USER_DEVICE_MOBILE]: 'si',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    }
  };

  // Abrir EVENTO - Acceso a faqs
  const FAQS_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'faqs',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards',
      [CONSTANTS.USER_DEVICE_MOBILE]: 'si',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    }
  };

  // Sorteo de Puntos faqs question
  const FAQS_QUESTION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMONS,
      ...DYNAMIC_DATA_FAQS_QUESTION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'faqs',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards',
      [CONSTANTS.USER_DEVICE_MOBILE]: 'si',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    }
  };

  // Sorteo de Puntos APP Completed
  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    digitalData: {
      ...FULL_DATA,
      ...COMMON_CARD_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_DATA_OPERATION_NUMBER,
      ...DYNAMIC_DATA_TYPOLOGY,
      ...DYNAMIC_DATA_OFFER,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    }
  };

  // Sorteo de Puntos points raffle error final
  const POINTS_RAFFLE_ERROR_FINAL_SHOWED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'sorteo puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '4 confirmar',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error operacion no realizada',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error operacion no realizada',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  // Add feature toggle to events
  [
    RAFFLE_POINTS_APP_PAGE_VISIT,
    RAFFLE_POINTS_APP_STARTED,
    TERMS_AND_CONDITIONS_PAGE_VIEW,
    RAFFLE_POINTS_APP_STEP_TWO,
    RAFFLE_POINTS_APP_STEP_THREE,
    RAFFLE_POINTS_APP_STEP_FOUR,
    RAFFLE_CONDITIONS_PAGE_VIEW,
    FAQS_PAGE_VIEW,
    FAQS_QUESTION,
    APP_COMPLETED
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

  // Add feature toggle to error events
  [ POINTS_RAFFLE_ERROR_FINAL_SHOWED ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_ERRORS));

  return {
    RAFFLE_POINTS_APP_PAGE_VISIT,
    RAFFLE_POINTS_APP_STARTED,
    TERMS_AND_CONDITIONS_PAGE_VIEW,
    RAFFLE_POINTS_APP_STEP_TWO,
    RAFFLE_POINTS_APP_STEP_THREE,
    RAFFLE_POINTS_APP_STEP_FOUR,
    RAFFLE_CONDITIONS_PAGE_VIEW,
    FAQS_PAGE_VIEW,
    FAQS_QUESTION,
    APP_COMPLETED,
    POINTS_RAFFLE_ERROR_FINAL_SHOWED
  };
};