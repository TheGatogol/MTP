module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const CAMPAIGNS_ANALYTICS = {
    AUTHORIZATION: {
      'contract-products-section-authorization': {
        globalApplication: 'cards on demand',
        name: 'autorizacion de datos',
        type: 'autogestion',
        productName: {
          '0821': 'autorización'
        },
        hasOnClickStartAnalytic: true
      },
      'contract-products-section-authorization-multiproduct': {
        globalApplication: 'cards on demand',
        name: 'consulta de datos',
        type: 'autogestion',
        productName: {
          '0822': 'autorización'
        },
        hasOnClickStartAnalytic: true
      }
    },
    ACCOUNTS: {
      'debit-card-request': {
        globalApplication: 'credit card holder',
        name: 'tarjeta de debito fisica',
        type: 'contratacion',
        productName: {
          '0766': 'tarjetas'
        },
        isFunnel: true
      },
      'payroll-portability': {
        globalApplication: LITERALS.globalApplication.payrollPortability,
        name: LITERALS.applicationName.ocPayrollPortability,
        type: LITERALS.commons.engagement,
        productName: {
          '0557': 'cuenta nomina'
        },
        isFunnel: true,
        hasOnClickStartAnalytic: true,
        clickThrough: true
      },
      'payroll-portability-oc': {
        globalApplication: LITERALS.globalApplication.payrollPortability,
        name: LITERALS.applicationName.ocPayrollPortability,
        type: LITERALS.commons.engagement,
        productName: {
          '0835': 'cuentas'
        },
        hasOnClickStartAnalytic: true
      },
      'metas-saving-goals': {
        globalApplication: 'metas saving goals',
        name: 'metas',
        type: 'contratacion',
        productName: {
          '0785': 'cuentas'
        },
        hasClickThrough: true
      },
      'contracting-goals-minor': {
        globalApplication: 'contracting goals minor',
        name: 'metas para menores',
        type: 'contratacion',
        productName: {
          '0819': 'cuentas'
        },
        isFunnel: true,
        hasOnClickStartAnalytic: true
      },
      'oc-account-young': {
        globalApplication: LITERALS.globalApplication.ocAccountYoung,
        name: LITERALS.applicationName.hiringAccountYoung,
        type: LITERALS.commons.hiring,
        productName: {
          '0790': 'cuentas'
        },
        hasOnClickStartAnalytic: true
      },
      'oc-account': {
        productName: { '0788': 'cuentas' },
        globalApplication: 'account sing up',
        name: 'contratar cuenta',
        type: 'contratacion'
      }
    },
    CARDS: {
      'fund-origination-oc-fund': {
        globalApplication: ' fund origination oc fund',
        name: 'Oc fund',
        type: 'contratacion',
        productName: {
          '0813': 'fondos de inversion'
        },
        hasOnClickStartAnalytic: true
      },
      'onboarding-bbva-trader': {
        globalApplication: 'hire investment',
        name: 'contratar inversiones',
        type: 'contratacion',
        productName: {
          '0839': 'inversiones'
        },
        hasOnClickStartAnalytic: true
      },
      'credit-bureau': {
        globalApplication: 'credit bureau authorization',
        name: 'autorizacion credito buro',
        type: LITERALS.commons.operative,
        productName: {
          '0693': 'autorizacion credito buro'
        },
        hasOnClickStartAnalytic: true
      },
      'non-preapproved-credit-card': {
        globalApplication: LITERALS.sections.creditCardHolder,
        name: LITERALS.sections.creditCardHolder,
        type: LITERALS.commons.hiring,
        productName: {
          '0SKY': 'credit-card-holder'
        },
        hasOnClickStartAnalytic: true
      },
      'credit-card-holder': {
        globalApplication: LITERALS.sections.creditCardHolder,
        name: LITERALS.sections.creditCardHolder,
        type: LITERALS.commons.hiring,
        productName: {
          '0TDC': 'credit-card-holder'
        },
        hasOnClickStartAnalytic: true
      },
      'instant-cash': {
        globalApplication: 'instant cash one click',
        name: 'efectivo inmediato one click',
        type: 'contratacion',
        productName: {
          '0640': 'tarjetas credito'
        }
      },
      'top-credit-card': {
        globalApplication: LITERALS.globalApplication.cardUpgrade,
        name: LITERALS.commons.cardUpgrade,
        type: LITERALS.commons.engagement,
        productName: {
          '0ASC': 'tarjetas credito'
        },
        hasOnClickStartAnalytic: true
      },
      'invest-advisory-onboarding': {
        globalApplication: 'invest advisory onboarding',
        name: 'invest advisory onboarding',
        type: LITERALS.commons.engagement,
        productName: {
          '0793': 'inversiones'
        },
        clickThrough: true
      },
      'zero-party-data': {
        productName: {
          '0791': 'zero-party-data'
        },
        hasClickThrough: true
      }
    },
    DEPOSITS: {
      'deposit-hiring': {
        globalApplication: LITERALS.operative.deposits,
        name: LITERALS.commons.investmentsTerms,
        type: LITERALS.commons.hiring,
        productName: {
          '0PGR': 'inversiones',
          '0786': 'pagares'
        },
        hasOnClickStartAnalytic: true
      }
    },
    FUNDS: {
      'oc-fund': {
        globalApplication: 'oc found',
        name: 'found',
        type: 'contratacion',
        productName: {
          '0787': 'fondos de inversion'
        },
        hasOnClickStartAnalytic: true
      },
      'funds-hiring-origination': {
        globalApplication: 'funds',
        name: 'fondos flujo unificado',
        type: 'contratacion',
        productName: {
          '0859': 'fondos de inversion'
        },
        hasOnClickStartAnalytic: true
      }
    },
    INSURANCES: {
      'travel-insurance': {
        globalApplication: LITERALS.globalApplication.travelInsurance,
        name: LITERALS.commons.travelInsurance,
        type: LITERALS.commons.hiring,
        productName: {
          '4035': 'insurance'
        },
        hasOnClickStartAnalytic: true
      },
      'dynamic-life-insurance': {
        globalApplication: LITERALS.globalApplication.lifeInsuranceProductName,
        name: LITERALS.operative.lifeInsuranceProduct,
        type: LITERALS.commons.hiring,
        productName: {
          '0758': 'insurance',
          '0759': 'insurance'
        }
      },
      'oc-metasegura': {
        globalApplication: LITERALS.globalApplication.goalInsurance,
        name: 'meta segura digital',
        type: LITERALS.commons.engagement,
        productName: {
          '4025': 'seguros'
        },
        hasOnClickStartAnalytic: true
      }
    },
    LOANS: {
      'non-preapproved-consumer-loan': {
        globalApplication: 'non preapproved loan',
        name: 'prestamo no pre aprobado personal one click',
        type: 'contratacion',
        productName: {
          '00CB': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      },
      'consumer-loan': {
        globalApplication: 'preapproved loan',
        name: 'prestamo personal one click',
        type: 'contratacion',
        productName: {
          '0PPI': 'prestamo personal inmediato',
          '0060': 'prestamos',
          '0NOM': 'prestamo nomina',
          '0715': 'prestamos'
        },
        hasOnClickStartAnalytic: false
      },
      'mortgage-loan': {
        globalApplication: 'mortgage loan',
        name: 'credito hipotecario one click',
        type: 'contratacion',
        productName: {
          'HIPO': 'prestamo hipotecario',
          '0HIP': 'prestamo hipotecario'
        },
        hasOnClickStartAnalytic: true
      },
      'payroll-advance': {
        globalApplication: 'payroll advance',
        name: 'adelanto sueldo',
        type: 'contratacion',
        productName: {
          'ANOM': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      },
      'car-loan': {
        globalApplication: 'car loan',
        name: 'prestamo vehicular',
        type: 'contratacion',
        productName: {
          'AUTO': 'prestamo vehicular'
        },
        hasOnClickStartAnalytic: true
      },
      'oc-car-loan-origination': {
        globalApplication: 'car loan',
        name: 'contratacion credito auto',
        type: 'contratacion',
        productName: {
          'AUTO_UNIVERSAL': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      },
      'flexible-financing-debit': {
        globalApplication: 'purchase financing',
        name: 'financiamiento de compras',
        type: 'operativa',
        productName: {
          '0PYP': 'flexible-financing-debit'
        },
        hasOnClickStartAnalytic: true
      },
      'recolocation': {
        globalApplication: 'preapproved loan',
        name: 'recolocacion consumo one click',
        type: 'contratacion',
        productName: {
          '0REC': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      },
      'relocation-financial-health': {
        globalApplication: 'preapproved loan',
        name: 'recolocacion salud financiera',
        type: 'contratacion',
        productName: {
          'RESF': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      },
      'mortgage-main-tracking': {
        globalApplication: 'mortgage tracking',
        name: 'mortgage tracking one click',
        type: 'contratacion',
        productName: {
          '0814': 'prestamos'
        },
        hasOnClickStartAnalytic: false
      },
      'oc-secure-loan': {
        globalApplication: 'oc loan secure',
        name: 'prestamo personal con garantias',
        type: 'simulador',
        productName: {
          '0847': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      }
    },
    LOANANDMORTGAGE: {
      'loan-and-mortgage-information': {
        globalApplication: 'mortgage tracking',
        name: 'mortgage tracking one click',
        type: 'contratacion',
        productName: {
          '0856': 'prestamos'
        },
        hasOnClickStartAnalytic: true
      }
    },
    PAYMENTS: {
      'mpos-openpay': {
        globalApplication: 'onboarding mpos',
        name: 'contratar zona de cobro',
        type: 'contratacion',
        productName: {
          '0823': 'cuentas'
        },
        hasOnClickStartAnalytic: true
      }
    },
    OTHERS: {
      'limit-increase': {
        globalApplication: LITERALS.globalApplication.limitIncrease,
        name: LITERALS.commons.limitIncrease,
        type: LITERALS.commons.hiring,
        productName: {
          '0ILC': 'limit-increase',
          '0130': 'limit-increase'
        },
        hasOnClickStartAnalytic: true
      },
      'n-limit-increase': {
        globalApplication: LITERALS.globalApplication.limitIncrease,
        name: LITERALS.commons.limitIncrease,
        type: LITERALS.commons.hiring,
        productName: {
          'NILC': 'n-limit-increase'
        },
        hasOnClickStartAnalytic: true
      },
      'mix-credit-card-and-loan': {
        globalApplication: LITERALS.globalApplication.mixCreditCardAndLoan,
        name: LITERALS.commons.mixCreditCardAndLoan,
        type: LITERALS.hiring,
        productName: {
          'COMB': 'mix-credit-card-and-loan'
        },
        hasOnClickStartAnalytic: true
      },
      'servicing-scheduled-donations': {
        globalApplication: LITERALS.commons.donationPayment,
        name: LITERALS.commons.donations,
        type: LITERALS.commons.operative,
        productName: {
          '0576': '-juntos por la educacion'
        }
      },
      'oc-mortgage-non-preapproved': {
        globalApplication: 'oc mortgage non preapproved',
        name: 'simula un credito hipotecario',
        type: 'simulacion',
        productName: {
          '0806': 'simula un credito hipotecario'
        },
        hasOnClickStartAnalytic: true
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_TDC_RESTRUCTURE: {
      'product-solutions-payment-tdc-restructure': {
        globalApplication: 'restructure plan',
        name: 'plan de reestructura',
        type: 'operativa',
        productName: {
          '0732': 'product-solutions-payment-tdc-restructure'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_TDC_APF: {
      'product-solutions-payment-td-apf': {
        globalApplication: 'restructure plan',
        name: 'plan de reestructura',
        type: 'operativa',
        productName: {
          '0769': 'product-solutions-payment'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_TDC_PPF: {
      'product-solutions-payment-tdc-ppf': {
        globalApplication: 'restructure plan',
        name: 'plan de reestructura',
        type: 'operativa',
        productName: {
          '0733': 'product-solutions-payment-tdc-ppf'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_LOAN_AUTO: {
      'product-solutions-payment-car-loan-ppf': {
        globalApplication: 'decrease plan',
        name: 'plan de disminucion',
        type: 'operativa',
        productName: {
          '0739': 'product-solutions-payment-car-loan-ppf'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_LOAN_RESTRUCTURE: {
      'product-solutions-payment-loan-restructure': {
        globalApplication: 'restructure plan',
        name: 'reestructura consumo',
        type: 'operativa',
        productName: {
          'L|0732': 'product-solutions-payment-loan-restructure'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_LOAN: {
      'product-solutions-payment-consumer-loan-ppf': {
        globalApplication: 'decrease plan',
        name: 'plan de disminucion',
        type: 'operativa',
        productName: {
          '0740': 'product-solutions-payment-consumer-loan-ppf'
        }
      }
    },
    PRODUCTS_SOLUTIONS_PAYMENTS_CONSOLIDATION_LOAN: {
      'payments-consolidations-loans': {
        globalApplication: 'consolidation plan',
        name: 'plan de consolidacion',
        type: 'operativa',
        productName: {
          '0779': 'payments-consolidations-loans'
        }
      }
    }
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const ACCESS_APP_ON_CLICK_START = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: LITERALS.commons.language,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.donationPayment,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.donations,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.interested,
    [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: 'contract product section--superior-1-1',
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: LITERALS.commons.card,
    [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: LITERALS.commons.empty,
    [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: '-juntos por la educacion',
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: LITERALS.commons.account,
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT_CODE]: LITERALS.commons.empty,
    [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: LITERALS.commons.empty,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: 'contract product section--superior-1-1:card::-juntos por la educacion:cuentas::'
  };

  const CAMPAIGN_FORMAT = LITERALS.dashboard.campaign_format;
  const CAMPAIGN_FORMAT_CARD = LITERALS.dashboard.campaignSecondFormat;

  const COMMON_DASHBOARD = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.global_position
  };

  const COMMON_CONTRACT_PRODUCT_SECTION = {
    ...COMMON,
    ...UTILS.OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities
  };

  const OC_ACCESS_DASHBOARD_CLICK_DYNAMIC_DATA = {
    ...UTILS.OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    }
  };

  const OC_ACCESS_DASHBOARD_CLOSE_DYNAMIC_DATA = {
    ...UTILS.OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClose,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    }
  };

  const OC_ACCESS_DASHBOARD_ON_CLICK_START_DYNAMIC_DATA = {
    ...OC_ACCESS_DASHBOARD_CLICK_DYNAMIC_DATA,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    },
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const ocAccessOpportunitiesOcCarLoanNpaData = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.carLoan,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.engagementCarLoan,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.operative.carLoan,
    [CONSTANTS.USER_SEGMENT_PROFILE]: LITERALS.preApprovedLoan.nonPreApproved,
    [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'productSection'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: 'list',
    [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: LITERALS.commons.empty,
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: LITERALS.commons.loans,
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT_CODE]: LITERALS.commons.empty,
    [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: LITERALS.commons.empty,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'actionName'
    }
  };

  const ocAccessOpportunitiesOcCarLoanOriginationData = {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.carLoan,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.engagementCarLoan,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.loans,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.operative.carLoan,
    [CONSTANTS.USER_SEGMENT_PROFILE]: LITERALS.preApprovedLoan.nonPreApproved,
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'productSection'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: 'card',
    [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: LITERALS.commons.card,
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: 'prestamos',
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'actionName'
    },
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [CONSTANTS.USER_DEVICE_ROOT]: LITERALS.commons.noRoot
  };

  const DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITHOUT_OFFERS = UTILS.getAdvancedFootprint(COMMON_DASHBOARD);
  const DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITH_OFFERS = UTILS.getAdvancedFootprint(COMMON_DASHBOARD, UTILS.OC_ACCESS_DASHBOARD_DYNAMIC_DATA);
  const DASHBOARD_OC_ACCESS_CLICK_CLOSE = UTILS.getClickClose(COMMON_DASHBOARD, OC_ACCESS_DASHBOARD_CLOSE_DYNAMIC_DATA);
  const DASHBOARD_OC_ACCESS_CLICK_THROUGH = UTILS.getClickThrough(COMMON_DASHBOARD, OC_ACCESS_DASHBOARD_CLICK_DYNAMIC_DATA);
  const DASHBOARD_OC_ACCESS_APP_ON_CLICK_START = UTILS.getOCAccess(LITERALS.commons.global_position, 'online/offline', COMMON_DASHBOARD, OC_ACCESS_DASHBOARD_ON_CLICK_START_DYNAMIC_DATA);
  const opportunitiesCardScheduledTransactions = UTILS.getAnalyticFeatureFlag('cardTransactionServicingScheduledDonations', UTILS.getOCAccess(LITERALS.commons.interested, LITERALS.commons.online, ACCESS_APP_ON_CLICK_START));
  const opportunitiesOcCarLoanNpa = UTILS.getAnalyticFeatureFlag('nonPreApprovedCarCertificate', UTILS.getOCAccess(LITERALS.commons.opportunities, LITERALS.commons.offline, ocAccessOpportunitiesOcCarLoanNpaData));
  const opportunitiesOcCarLoanOrigination = UTILS.getAnalyticFeatureFlag('ocCarLoanOrigination', UTILS.getOCAccess(LITERALS.commons.interested, LITERALS.commons.online, ocAccessOpportunitiesOcCarLoanOriginationData));
  const CONTRACT_PRODUCT_SECTION_PAGE_VIEW = UTILS.getAdvancedFootprint(COMMON_CONTRACT_PRODUCT_SECTION);

  [
    DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITHOUT_OFFERS,
    DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITH_OFFERS
  ].forEach(item => UTILS.getAnalyticFeatureFlag('dashboard.ocAccess.pageView', item));

  UTILS.getAnalyticFeatureFlag('dashboard.ocAccess.clickThrough', DASHBOARD_OC_ACCESS_CLICK_THROUGH);
  UTILS.getAnalyticFeatureFlag('dashboard.ocAccess.clickClose', DASHBOARD_OC_ACCESS_CLICK_CLOSE);
  UTILS.getAnalyticFeatureFlag('dashboard.ocAccess.appOnClickStart', DASHBOARD_OC_ACCESS_APP_ON_CLICK_START);

  return {
    opportunitiesCardScheduledTransactions,
    CAMPAIGNS_ANALYTICS,
    CAMPAIGN_FORMAT,
    CAMPAIGN_FORMAT_CARD,
    DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITHOUT_OFFERS,
    DASHBOARD_OC_ACCESS_ADVANCED_FOOTPRINT_WITH_OFFERS,
    DASHBOARD_OC_ACCESS_CLICK_CLOSE,
    DASHBOARD_OC_ACCESS_CLICK_THROUGH,
    DASHBOARD_OC_ACCESS_APP_ON_CLICK_START,
    opportunitiesOcCarLoanNpa,
    opportunitiesOcCarLoanOrigination,
    CONTRACT_PRODUCT_SECTION_PAGE_VIEW
  };
};
