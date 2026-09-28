module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const internalAttributes = [
    {
      location: LITERALS.commons.intCmpLocation,
      campaignFormat: LITERALS.commons.intCmpCampaignFormat,
      collectiveCode: LITERALS.empty,
      campaignName: LITERALS.operative.lifeInsuranceOperative,
      product: LITERALS.operative.lifeInsuranceProduct,
      productCode: LITERALS.empty,
      quantity: LITERALS.empty
    }
  ];

  const PAGE_INFO = {
    [CONSTANTS.PAGE_PAGEINFO_SYSENV]: 'app',
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID
  };

  const PAGE_COMMON = {
    ...PAGE_INFO,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]:
      LITERALS.globalApplication.lifeInsuranceProductName,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]:
      LITERALS.operative.lifeInsuranceProduct,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: { bind: 'programTypeHired' },
    [CONSTANTS.PRODUCTS_ATTRIBUTES]: { bind: 'prodAttributes' },
    [CONSTANTS.APPLICATION_TYPOLOGY]: { bind: 'tipology' },
    [CONSTANTS.APPLICATION_OFFER]: { bind: 'ofer' },
    [CONSTANTS.APPLICATION_STATE]: { bind: 'state' },
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
  };

  let APP_ONCLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: internalAttributes,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: { bind: 'openFrom' },
      [CONSTANTS.APPLICATION_STEP]: { bind: 'appStep' },
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: { bind: 'prodAttributes' },
      [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
      [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]:
        'centro:zona one click::personaliza seguro vida:seguro vida dinamico::'
    }
  };

  let APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.APPLICATION_STEP]: '1 detalle',
      [CONSTANTS.QUALIFIED_VISITS]: 'true'
    }
  };

  let APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]:
        LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.APPLICATION_STEP]: { bind: 'appStep' }
    }
  };

  let APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:2 cuestionario',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '2 cuestionario',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '2 cuestionario'
    }
  };

  let APP_STEP_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:3 monto',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '3 monto',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '3 monto'
    }
  };

  let APP_STEP_4 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep4,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:4 coberturas adicionales',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '4 coberturas adicionales',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '4 coberturas adicionales'
    }
  };

  let APP_STEP_5 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep5,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:5 seguro personalizado',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '5 seguro personalizado',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '5 seguro personalizado'
    }
  };

  let APP_STEP_6 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep6,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:6 beneficiarios',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '6 beneficiarios',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '6 beneficiarios'
    }
  };

  let APP_STEP_7 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep7,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:7 forma de pago',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '7 forma de pago',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '7 forma de pago'
    }
  };

  let APP_STEP_8 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep8,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:8 terminos y condiciones',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '8 terminos y condiciones',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '8 terminos y condiciones'
    }
  };

  let APP_STEP_9 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep9,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:9 confirmacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '9 confirmacion',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '9 confirmacion'
    }
  };

  let APP_STEP_10 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep10,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:10 otp',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '10 otp',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: '10 otp'
    }
  };

  let APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:pagina exitosa',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
      [CONSTANTS.APPLICATION_STATE]: { bind: 'stateApp' },
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: { bind: 'prodAttributes' },
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
    }
  };

  let APP_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.empty,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.lifeInsuranceProduct,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.serviceError,
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.commons.serviceError,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:seguro vida dinamico:error servicio',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: { bind: 'prodAttributes' }
    }
  };

  let APP_HUELLA_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_INFO,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.empty,
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.empty,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.empty,
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.empty,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.global_position,
      [CONSTANTS.PAGE_PAGEINFO_PAGENAME]:
        'app:privada:personas:posicion global',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: { bind: 'prodAttributes' },
      [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: internalAttributes
    }
  };

  APP_ONCLICK_START = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance',
    APP_ONCLICK_START
  );
  APP_PAGE_VISIT = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance',
    APP_PAGE_VISIT
  );
  APP_STARTED = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance',
    APP_STARTED
  );
  APP_STEP_2 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_2);
  APP_STEP_3 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_3);
  APP_STEP_4 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_4);
  APP_STEP_5 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_5);
  APP_STEP_6 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_6);
  APP_STEP_7 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_7);
  APP_STEP_8 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_8);
  APP_STEP_9 = UTILS.getAnalyticFeatureFlag('dynamicLifeInsurance', APP_STEP_9);
  APP_STEP_10 = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance',
    APP_STEP_10
  );
  APP_COMPLETED = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance',
    APP_COMPLETED
  );
  APP_HUELLA_VIEW = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance',
    APP_HUELLA_VIEW
  );
  APP_ERROR = UTILS.getAnalyticFeatureFlag(
    'dynamicLifeInsurance.errors',
    APP_ERROR
  );

  return {
    APP_ONCLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3,
    APP_STEP_4,
    APP_STEP_5,
    APP_STEP_6,
    APP_STEP_7,
    APP_STEP_8,
    APP_STEP_9,
    APP_STEP_10,
    APP_COMPLETED,
    APP_ERROR,
    APP_HUELLA_VIEW
  };
};
