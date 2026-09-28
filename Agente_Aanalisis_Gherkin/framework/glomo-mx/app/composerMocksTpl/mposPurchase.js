'use strict';

module.exports = (CONFIG) => {
  const { getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const pageName = 'mposPurchase';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accounts,
        mposPriceStockV1,
        customerContactDetailsV1,
        customersAddresses,
        mposPurchase,
        servicePayments
      }
    },
    native = false,
    nativeIos = false,
    aemHost
  } = CONFIG;
  const {
    appPageVisit,
    appStarted,
    appStep,
    appCompleted,
    detailFootprint,
    errorStep
  } = require('./analytics/_mposPurchase')(CONFIG);
  const inputDataConfiguration = [
    {
      type: 'text',
      label: 'payments-payments-acceptance-mx-configurable-form-field-street',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-180-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-max-characters-exceded',
      namePropertieInput: 'street',
      optional: false,
      autoValidate: true,
      pattern: '^[!-πÀ-ÿ‘-•‰‹›⁄€™∂∏∑√∫≈≠≤≥◊ﬂ–∞…∆ﬁ—\\s]{0,180}$'
    },
    {
      type: 'number',
      label: 'payments-payments-acceptance-mx-configurable-form-field-external-number',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-10-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-max-characters-exceded',
      namePropertieInput: 'externalNumber',
      optional: false,
      autoValidate: true,
      pattern: '[0-9]{0,10}'
    },
    {
      type: 'number',
      label: 'payments-payments-acceptance-mx-configurable-form-field-internal-number',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-10-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-max-characters-exceded',
      namePropertieInput: 'internalNumber',
      optional: true,
      autoValidate: true,
      pattern: '[0-9]{0,10}'
    },
    {
      type: 'number',
      label: 'payments-payments-acceptance-mx-configurable-form-field-postal-code',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-5-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-5-min',
      namePropertieInput: 'postalCode',
      optional: false,
      autoValidate: true,
      pattern: '[0-9]{5}'
    },
    {
      type: 'text',
      label: 'payments-payments-acceptance-mx-configurable-form-field-neighborhood',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-50-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-max-characters-exceded',
      namePropertieInput: 'neighborhood',
      optional: false,
      autoValidate: true,
      pattern: '^[!-πÀ-ÿ‘-•‰‹›⁄€™∂∏∑√∫≈≠≤≥◊ﬂ–∞…∆ﬁ—\\s]{0,50}$'
    },
    {
      type: 'text',
      label: 'payments-payments-acceptance-mx-configurable-form-field-state',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-45-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-max-characters-exceded',
      namePropertieInput: 'state',
      optional: false,
      autoValidate: true,
      pattern: '^[!-πÀ-ÿ‘-•‰‹›⁄€™∂∏∑√∫≈≠≤≥◊ﬂ–∞…∆ﬁ—\\s]{0,45}$'
    },
    {
      type: 'text',
      label: 'payments-payments-acceptance-mx-configurable-form-field-municipality',
      infoMessage: 'payments-payments-acceptance-mx-configurable-form-field-100-max',
      errorMessage: 'payments-payments-acceptance-mx-configurable-form-field-max-characters-exceded',
      namePropertieInput: 'municipality',
      optional: false,
      autoValidate: true,
      pattern: '^[!-πÀ-ÿ‘-•‰‹›⁄€™∂∏∑√∫≈≠≤≥◊ﬂ–∞…∆ﬁ—\\s]{0,100}$'
    }
  ];

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: 0,
      animationType: 'verticalUp',
      iOSFixedHeader: nativeIos,
      className: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%'
    }
  };

  const bbvaFeatureMposPurchase = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-feature-mpos-purchase-mx',
    tag: 'bbva-feature-mpos-purchase-mx',
    render: 'litElement',
    properties: {
      accountsApiVersion: accounts,
      aemHost,
      aemPathCommission: 'content/caas/mexico/glomo/cashzone/commissions/comissions.model.json',
      countryId: '484',
      contentFragmentPath: 'content/caas/mexico/app/mpos/faqs/cobros.model.json',
      customerAddressesApiVersion: customersAddresses,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      descriptionPayment: 'Pago del lector',
      imageUrl: './images/oneClicks/cashZone/card-reader.png',
      imageSize: 'L',
      iOSFixedHeader: nativeIos,
      host,
      localCurrency: getLocalCurrency(),
      mposPriceStockApiVersion: mposPriceStockV1,
      mposPurchaseApiVersion: mposPurchase,
      requiredToken,
      native,
      orderAccounts: 'alias',
      servicePaymentsApiVersion: servicePayments,
      showHelpFaqs: true,
      cellsConnections: {
        params: {
          merchantId: 'merchantId'
        },
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackStep'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_user_id: {
            bind: 'customerId'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          cells_to_native_modal_closed: {
            bind: 'signModalClosed'
          },
          sign_modal_submit_confirmation: {
            bind: 'isSigned'
          },
          mpos_purchase_set_alternative_address: {
            bind: 'addressUpdated'
          },
          sign_modal_submit_sign: {
            bind: 'isSigned'
          }
        },
        out: {
          mpos_purchase_open_modal_address: {
            bind: 'bbva-feature-mpos-purchase-mx-alternative-address-open'
          },
          mpos_purchase_edit_modal_address: {
            bind: 'bbva-feature-mpos-purchase-mx-alternative-address-update'
          },
          mpos_purchase_delete_alternative_address: {
            bind: 'bbva-feature-mpos-purchase-mx-alternative-address-delete'
          },
          mpos_purchase_set_data_to_share: {
            bind: 'bbva-feature-mpos-purchase-mx-result-share'
          },
          mpos_purchase_operation_click_share: {
            bind: 'bbva-feature-mpos-purchase-mx-action-response-share'
          },
          mpos_purchase_go_back: {
            bind: 'navigation-go-back',
            backStep: true
          },
          mpos_purchase_close_modal_address: {
            bind: 'bbva-feature-mpos-purchase-mx-modal-address-close'
          },
          mpos_purchase_analytics_page_visit: {
            bind: 'bbva-feature-mpos-purchase-mx-onboarding-trace-visit-execute'
          },
          mpos_purchase_analytics_reset_app_started: {
            bind: 'bbva-feature-mpos-purchase-mx-reset'
          },
          mpos_purchase_analytics_app_started: {
            bind: 'bbva-feature-mpos-purchase-mx-onboarding-trace-event-execute'
          },
          mpos_purchase_analytics_app_step: {
            bind: 'bbva-feature-mpos-purchase-mx-trace-step-execute'
          },
          mpos_purchase_analytics_error: {
            bind: 'bbva-feature-mpos-purchase-mx-trace-error-execute'
          }
        }
      }
    }
  };

  const bbvaAggregationConfigurableFormFieldSet = {
    zone: 'app__overlay',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-configurable-form-field-set-spherica',
    tag: 'bbva-aggregation-configurable-form-field-set-spherica',
    render: 'litElement',
    properties: {
      inputDataConfiguration,
      cellsConnections: {
        in: {
          mpos_purchase_open_modal_address: {
            bind: 'openModalAddAddress'
          },
          mpos_purchase_edit_modal_address: {
            bind: 'openModalEditAddress'
          },
          mpos_purchase_close_modal_address: {
            bind: 'closeModal'
          },
          mpos_purchase_delete_alternative_address: {
            bind: 'reset'
          }
        },
        out: {
          mpos_purchase_set_alternative_address: {
            bind: 'bbva-aggregation-configurable-form-field-set-submit'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      language: getLanguage(),
      country: 'mx',
      cellsConnections: {
        in: {
          mpos_purchase_operation_click_share: {
            bind: 'captureReceipt'
          },
          mpos_purchase_set_data_to_share: {
            bind: 'result'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bbvaAnalyticmanagerMposPurchase = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-payments-mpos-purchase',
    familyPath: '@glomo-web-components/bbva-analyticmanager-payments',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          mpos_purchase_analytics_page_visit: {
            bind: 'fireAnalyticPageVisit'
          },
          mpos_purchase_analytics_reset_app_started: {
            bind: 'appStartedTriggered'
          },
          mpos_purchase_analytics_app_started: {
            bind: 'fireAnalyticStarted'
          },
          mpos_purchase_analytics_app_step: {
            bind: 'fireAnalyticStep'
          },
          mpos_purchase_analytics_error: {
            bind: 'fireAnalyticError'
          }
        },
        out: {
          bbva_analyticmanager_payments_mpos_purchase_page_visit: {
            bind: 'analytics-onboarding-step-action',
            analytics: appPageVisit
          },
          bbva_analyticmanager_payments_mpos_purchase_started_details: {
            bind: 'analytics-onboarding-details-action',
            analytics: appStarted('conocer mas detalles')
          },
          bbva_analyticmanager_payments_mpos_purchase_started_commissions: {
            bind: 'analytics-onboarding-commisions-action',
            analytics: appStarted('conocer otras comisiones')
          },
          bbva_analyticmanager_payments_mpos_purchase_continue_onboarding: {
            bind: 'analytics-onboarding-continue-action',
            analytics: appStarted('continuar')
          },
          bbva_analyticmanager_payments_mpos_purchase_exit_onboarding: {
            bind: 'analytics-onboarding-exit-action',
            analytics: appStarted('en otro momento')
          },
          bbva_analyticmanager_payments_mpos_purchase_address_step: {
            bind: 'analytics-address-step-action',
            analytics: appStep('2', 'direccion de envio')
          },
          bbva_analyticmanager_payments_mpos_purchase_accounts_step: {
            bind: 'analytics-accounts-step-action',
            analytics: appStep('3', 'datos de pago')
          },
          bbva_analyticmanager_payments_mpos_purchase_confirmation_step: {
            bind: 'analytics-confirmation-step-action',
            analytics: appStep('4', 'confirmacion')
          },
          bbva_analyticmanager_payments_mpos_purchase_signature_required: {
            bind: 'analytics-signature-required-action',
            analytics: appStep('5', 'otp')
          },
          bbva_analyticmanager_payments_mpos_purchase_completed_page: {
            bind: 'analytics-success-step-action',
            analytics: appCompleted
          },
          bbva_analyticmanager_payments_mpos_purchase_detail_footprint: {
            bind: 'analytics-details-modal-action',
            analytics: detailFootprint
          },
          bbva_analyticmanager_payments_mpos_purchase_error_not_available: {
            bind: 'analytics-not-available-action',
            analytics: errorStep('error sin lectores disponibles')
          },
          bbva_analyticmanager_payments_mpos_purchase_error_generic: {
            bind: 'analytics-generic-error-action',
            analytics: errorStep('error operacion no disponible')
          }
        }
      }
    }
  };

  const base = {
    hash: 'mpos-purchase',
    currentPage: {
      url: '/mpos-purchase'
    },
    pages,
    template,
    components: [
      bbvaFeatureMposPurchase,
      bbvaAggregationConfigurableFormFieldSet,
      shareReceipt,
      bbvaAnalyticmanagerMposPurchase
    ]
  };
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-mpos-purchase-mx');
  return base;
};
