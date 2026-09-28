const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utils = require('./common/_utils');

module.exports = () => {

  const FEATURE_FLAG = {
    CALL_ADVISOR_PERSONAL: {
      key: 'glomo.analytics.callMeBackAssistanceManager.callPersonalAdvisor',
      defaultValue: true
    },
    CALL_ADVISOR_HEADER: {
      key: 'glomo.analytics.callMeBackAssistanceManager.callPersonalHeader',
      defaultValue: true
    },
    OC_LOAN_OFFER: {
      key: 'glomo.analytics.ocloanOffer',
      defaultValue: true
    },
    OC_LOAN_SUSTAINABLE: {
      key: 'glomo.analytics.ocLoans.sustainable',
      defaultValue: true
    }
  };

  const BINDED_LITERALS = {
    PRODUCT_NAME_PPI: 'prestamo personal inmediato',
    PRODUCT_NAME_NOM: 'prestamo nomina',
    TYPOLOGY_PREAPPROVED: 'preaprobado',
    TYPOLOGY_PREFORMALIZED: 'preformalizado',
    APPLICATION_STEP_REQUEST_AMOUNT: 'importe a solicitar',
    APPLICATION_STEP_REVIRE_PROMOTION: 'codigo promocion',
    APPLICATION_STEP_SLIDER: 'slider',
    APPLICATION_STEP_ANNUAL_RATE: 'info tasa interes',
    APPLICATION_STEP_COMMISSION: 'info comision',
    APPLICATION_STEP_INSURANCE: 'info seguro de vida',
    APPLICATION_STEP_INSURANCE_AND_UNEMPLOYMENT: 'info seguro de vida y desempleo',
    APPLICATION_STEP_I_WANT: 'lo quiero',
    APPLICATION_STEP_ADVISOR_CALL: 'llamada asesor',
    APPLICATION_STEP_CONVENTIONAL_LOAN_USE: 'uso comercial',
    APPLICATION_STEP_SUSTAINABLE_LOAN_USE: 'uso sostenible',
    APPLICATION_STEP_SUSTAINABLE_CATALOG: 'explora los productos',
    APPLICATION_STEP_SUSTAINABLE_LOAN_SIMULATOR: 'simular uso sostenible',
    CUSTOM_FIELDS_CONVENTIONAL_LOAN_USE: 'uso prestamo:convencional',
    CUSTOM_FIELDS_SUSTAINABLE_LOAN_USE: 'uso prestamo:sostenible',
    IMPROVEDCOMISSION: 'mejora comision',
    IMPROVEDOFFER: 'mejora tasa interes',
    PRODUCT_PAYMENT_TYPE_MONTHLY: 'mensual',
    PRODUCT_PAYMENT_TYPE_BI_WEEKLY: 'quincenal',
    USER_SEGMENT_PROFILE_MISSING_INFO: 'falta informacion',
    USER_SEGMENT_PROFILE_UNAVAILABLE_SERVICE: 'servicio no disponible',
    USER_SEGMENT_PROFILE_CANNOT_ASSIST: 'por el momento no podemos atenderle',
    USER_SEGMENT_PROFILE_OFFER_NO_LONGER_VALID: 'la oferta ya no esta vigente',
    USER_SEGMENT_PROFILE_BUREAU_REJECTION: 'rechazo buro',
    USER_SEGMENT_PROFILE_SCORING_REJECTION: 'rechazo scoring',
    USER_SEGMENT_PROFILE_PAYROLL_LOSE_IT_REJECTION: 'rechazo perdio nomina',
    WITH_PROMOTIONAL_CODE: 'revire'
  };

  const PAGE_VIEW_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'DIY E2E Sales'
  };

  const COMMON = {
    ...PAGE_VIEW_COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'preapproved loan',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'prestamo personal one click',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'contratacion',
    [CONSTANTS.APPLICATION_FULLFILMENT]: 'online/offline',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'prestamos',
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };

  const PAGE_COMMON = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'applicationTypology'
    }
  };
  const PRODUCT_DETAIL = {
    [CONSTANTS.APPLICATION_AMOUNT]: {
      bind: 'productAmount'
    },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'productPaymentAmount'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'productNumberOfPayments'
    },
    [CONSTANTS.APPLICATION_PAYMENT_TYPE]: {
      bind: 'productPaymentType'
    },
    [CONSTANTS.APPLICATION_CURRENCY]: {
      bind: 'productCurrency'
    },
    [CONSTANTS.APPLICATION_INTEREST_RATE]: {
      bind: 'productInterestRate'
    },
    [CONSTANTS.APPLICATION_TERM]: {
      bind: 'productTerm'
    },
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };

  const APP_COMPLETED_COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'pagina exitosa',
    [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };

  const ADVANCED_MARK_TERMS_AND_CONDITIONS = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'terminos y condiciones'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const ADVANCED_MARK_OTP_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'operacion no realizada',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error carga recibo'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const MARK_ANNUAL_RATE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'tasas de interes fijo'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const MARK_CAT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'costo anual total'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const MARK_COMMISSION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'comision apertura'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'linea flexible',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.APPLICATION_STEP]: 'me interesa linea flexible',
      [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
        bind: 'internalCampaignAttributes'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: 'IntCmpClick',
      [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
        bind: 'siteActionName'
      }
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.APPLICATION_STEP]: '1 detalle',
      [CONSTANTS.QUALIFIED_VISITS]: 'true',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      }
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.APPLICATION_STEP]: {
        bind: 'applicationStep'
      },
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      }
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '2 terminos y condiciones',
      [CONSTANTS.APPLICATION_STEP]: '2 terminos y condiciones',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      },
      [CONSTANTS.APPLICATION_OFFER]: {
        bind: 'improvedOffer'
      }
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_STEP_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '3 confirmacion',
      [CONSTANTS.APPLICATION_STEP]: '3 confirmacion',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      },
      [CONSTANTS.APPLICATION_OFFER]: {
        bind: 'improvedOffer'
      }
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_STEP_4 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep4,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '4 otp',
      [CONSTANTS.APPLICATION_STEP]: '4 otp',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      },
      [CONSTANTS.APPLICATION_OFFER]: 'mejora tasa interes'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_COMPLETED_HIRED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      ...APP_COMPLETED_COMMONS,
      [CONSTANTS.APPLICATION_STATE]: 'contratado',
      [CONSTANTS.PRODUCT_STATE]: 'contratado',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      },
      [CONSTANTS.APPLICATION_OFFER]: 'mejora tasa interes',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_COMPLETED_REJECTED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      ...APP_COMPLETED_COMMONS,
      [CONSTANTS.USER_SEGMENT_PROFILE]: {
        bind: 'userSegmentProfile'
      },
      [CONSTANTS.APPLICATION_STATE]: 'rechazado',
      [CONSTANTS.PRODUCT_STATE]: 'rechazado',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      },
      [CONSTANTS.APPLICATION_OFFER]: 'mejora tasa interes',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const APP_COMPLETED_IN_REVIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_COMMON,
      ...PRODUCT_DETAIL,
      ...APP_COMPLETED_COMMONS,
      [CONSTANTS.APPLICATION_STATE]: 'en revision',
      [CONSTANTS.PRODUCT_STATE]: 'en revision',
      [CONSTANTS.APPLICATION_PROGRAM_TYPE_HIRED]: {
        bind: 'process'
      },
      [CONSTANTS.APPLICATION_OFFER]: 'mejora tasa interes',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
    },
    featureFlag: FEATURE_FLAG.OC_LOAN_OFFER
  };

  const INTERNAL_LINK_ASSISTANCE_MANAGER = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'quiero llamar a un asesor personal'
    },
    featureFlag: FEATURE_FLAG.CALL_ADVISOR_PERSONAL
  };

  const INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PAGE_VIEW_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 detalle',
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'llamar a un asesor desde header'
    },
    featureFlag: FEATURE_FLAG.CALL_ADVISOR_HEADER
  };

  const LEVELS_PROMOTION = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'promocion unica'
  };
  const MARK_REVIRE_PROMOTION = utils.getAdvancedFootprint(LEVELS_PROMOTION, PAGE_VIEW_COMMON);
  utils.addFeatureFlag(MARK_REVIRE_PROMOTION, FEATURE_FLAG.OC_LOAN_OFFER);

  const SUSTAINABLE_LOAN_CATALOG = utils.getAdvancedFootprint({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'explorador productos sostenibles'
  }, PAGE_VIEW_COMMON);
  utils.addFeatureFlag(SUSTAINABLE_LOAN_CATALOG, FEATURE_FLAG.OC_LOAN_SUSTAINABLE);


  const SUSTAINABLE_LOAN_SIMULATOR = utils.getAdvancedFootprint({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'prestamo personal one click',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'simulador tasas sostenibles'
  }, PAGE_VIEW_COMMON);
  utils.addFeatureFlag(SUSTAINABLE_LOAN_SIMULATOR, FEATURE_FLAG.OC_LOAN_SUSTAINABLE);


  return {
    BINDED_LITERALS,
    ADVANCED_MARK_TERMS_AND_CONDITIONS,
    ADVANCED_MARK_OTP_ERROR,
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3,
    APP_STEP_4,
    APP_COMPLETED_HIRED,
    APP_COMPLETED_REJECTED,
    APP_COMPLETED_IN_REVIEW,
    MARK_ANNUAL_RATE,
    MARK_CAT,
    MARK_COMMISSION,
    MARK_REVIRE_PROMOTION,
    INTERNAL_LINK_ASSISTANCE_MANAGER,
    INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER,
    SUSTAINABLE_LOAN_CATALOG,
    SUSTAINABLE_LOAN_SIMULATOR
  };
};
