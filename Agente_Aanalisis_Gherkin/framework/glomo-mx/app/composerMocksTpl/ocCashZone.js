'use strict';

module.exports = (CONFIG) => {
  const ocCashZonePage = require('./common/_pages')(CONFIG)('oc-cash-zone');
  const pageName = 'ocCashZone';
  const paymentsDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  const {
    createPrefixFromPageName,
    getCountry,
    getCurrencyCode,
    getLanguage,
    getLocalCurrency,
    glomoOpenDocument,
    SPINNERSPHERICA: createSpinnerSpherica
  } = require('./common/helpers/_utils');
  const {addOutStorageChannels} = require('./common/_local-storage.js');
  const {
    globalServices: {
      host,
      versions,
      requiredToken = 'tsec' },
    native = false,
    nativeIos = false,
    nativeShell,
    aemHost
  } = CONFIG;
  const {
    accounts,
    addProducts,
    clientOnboarding,
    customersAddresses,
    customerContactDetailsV1,
    documentFileV1,
    economicActivitiesV1,
    mposPriceStockV1,
    mposPurchase,
    servicePayments,
    termTypes
  } = versions;
  const analytics = require('./analytics/_ocCashZone.js')();
  const {
    applicationTypology,
    applicationProccess,
    analyticAppStepActions,
    analyticAppStartedActions,
    analyticFootprintActions,
    getAppPageVisit,
    getAppCompleted,
    getAppStarted,
    getAppSteps,
    getfootprint
  } = analytics;
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
  const retryErrorsId = 'oc-cash-zone-error';
  const cellsTemplateCoronita = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: 0,
      relativeMain: true,
      rightDrawer: true,
      areaSafeBigIOS: 0,
      className: nativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          oc_cash_zone_init_page: {
            bind: 'recalculateHeader'
          },
          open_app_menu: {
            bind: 'toggleMenu'
          }
        }
      }
    }
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          modal_transitionend_scroll_into_view: {
            bind: 'scrollIntoView'
          },
          oc_cash_zone_scroll_into_view: {
            bind: 'scrollIntoView'
          }
        },
        out: {
          oc_cash_zone_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const paymentsPaymentsAcceptanceMx = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/payments-payments-acceptance-mx',
    tag: 'payments-payments-acceptance-mx',
    render: 'litElement',
    properties: {
      accountsApiVersion: accounts,
      accountsOrderBy: 'alias',
      addProductsApiVersion: addProducts,
      aemHost,
      aemPathCommission: 'content/caas/mexico/glomo/cashzone/commissions/comissions.model.json',
      attachModalsToBody: nativeIos,
      clientOnboardingApiVersion: clientOnboarding,
      componentTypes: ['ADMINISTRATIVE_AREA_LEVEL_1', 'COUNTRY'],
      componentTypesUnmasked: ['POSTAL_CODE', 'ADMINISTRATIVE_AREA_LEVEL_1'],
      contentFragmentPath: 'content/caas/mexico/app/mpos/faqs/cobros.model.json',
      countryCode: getCountry(),
      countryId: '484',
      currencyCode: getCurrencyCode(),
      customerAddressesApiVersion: customersAddresses,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      deviceType: 'MPS',
      documentFileApiVersion: documentFileV1,
      economicActivitiesApiVersion: economicActivitiesV1,
      host,
      imagesUrl: {
        imageCelular: './images/spherica/ocCashZone/cell-phone-payment.png',
        imageLink: './images/spherica/ocCashZone/payment-link.png',
        imageLector: './images/spherica/ocCashZone/card-reader.png',
        imageCelularIos: './images/spherica/ocCashZone/tap-to-pay-payment.png',
        imageTapToPay: './images/spherica/ocCashZone/tap-to-pay.png'
      },
      iOSFixedHeader: nativeIos,
      isNativeIos: nativeIos,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      mposPriceStockApiVersion: mposPriceStockV1,
      mposPurchaseApiVersion: mposPurchase,
      native,
      notFoundMcc: '0000',
      paymentDayIds: paymentsDays,
      paymentDayNames: paymentsDays,
      paymentDescription: 'Pago del lector',
      requiredToken,
      servicePaymentsApiVersion: servicePayments,
      showHelpFaqs: true,
      termTypesApiVersion: termTypes,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          },
          global_sign_token_standby_timer_succes: {
            bind: 'handleCancelSignActions'
          },
          global_sign_token_standby_otp_cancel: {
            bind: 'handleCancelSignActions'
          },
          oc_cash_zone_set_customer_id: {
            bind: 'customerId'
          },
          oc_cash_zone_set_term_type_id: {
            bind: 'termTypeIds'
          },
          oc_cash_zone_set_document_id: {
            bind: 'documentId'
          },
          oc_cash_zone_set_document_type: {
            bind: 'documentType'
          },
          oc_cash_zone_set_services_id: {
            bind: 'servicesId'
          },
          oc_cash_zone_set_product_type: {
            bind: 'productType'
          },
          oc_cash_zone_set_document_id_top: {
            bind: 'documentIdTop'
          },
          oc_cash_zone_set_document_type_top: {
            bind: 'documentTypeTop'
          },
          oc_cash_zone_set_term_type_id_top: {
            bind: 'termTypeTop'
          },
          oc_cash_zone_set_hidden: {
            bind: 'hidden'
          },
          oc_cash_zone_set_invalid_client: {
            bind: 'invalidClient'
          },
          oc_cash_zone_set_other_address: {
            bind: 'setOtherAddress'
          },
          oc_cash_zone_close_other_address: {
            bind: 'closeOtherAddressView'
          }
        },
        out: {
          dashboard_offers_refresh: {
            bind: 'payments-payments-acceptance-mx-thank-you-external-navigate'
          },
          oc_cash_zone_contact_advisor: {
            bind: 'payments-payments-acceptance-mx-advisor-contact-click'
          },
          oc_cash_zone_tsec_invalid: {
            bind: 'payments-payments-acceptance-mx-tsec-invalid-handle'
          },
          oc_cash_zone_navigate_to_mpos: {
            bind: 'payments-payments-acceptance-mx-thank-you-external-navigate',
            link: {
              page: 'cashZonePaymentsMposDash'
            }
          },
          oc_cash_zone_navigate_to_mpos_upgrade_top: {
            bind: 'payments-payments-acceptance-mx-top-thank-you-external-navigate',
            link: {
              page: 'cashZonePaymentsMposDash',
              cleanUntil: pageName
            }
          },
          oc_cash_zone_navigate_to_mpos_upgrade_top_show_terms: {
            bind: 'payments-payments-acceptance-mx-top-thank-you-show-terms-external-navigate',
            link: {
              page: 'cashZonePaymentsMposDash',
              cleanUntil: pageName
            }
          },
          oc_cash_zone_open_terms_and_conditions_document: {
            bind: 'payments-payments-acceptance-mx-terms-and-conditions-file-open'
          },
          oc_cash_zone_navigation_external: {
            bind: 'payments-payments-acceptance-mx-back-step-external-navigate',
            backStep: true
          },
          oc_cash_zone_error_send: {
            bind: 'payments-payments-acceptance-mx-error-send'
          },
          oc_cash_zone_get_data_generate_image: {
            bind: 'payments-payments-acceptance-mx-receipt-share'
          },
          oc_cash_zone_analytics_show: {
            bind: 'payments-payments-acceptance-mx-show'
          },
          oc_cash_zone_analytics_action: {
            bind: 'payments-payments-acceptance-mx-action-click'
          },
          oc_cash_zone_other_address_open: {
            bind: 'payments-payments-acceptance-mx-other-address-open'
          },
          oc_cash_zone_other_address_edit: {
            bind: 'payments-payments-acceptance-mx-other-address-edit'
          },
          oc_cash_zone_other_address_delete: {
            bind: 'payments-payments-acceptance-mx-other-address-delete'
          },
          oc_cash_zone_other_address_close: {
            bind: 'payments-payments-acceptance-mx-other-address-close'
          },
          oc_cash_zone_add_products_complete: {
            bind: 'payments-payments-acceptance-mx-add-products-complete'
          },
          oc_cash_zone_save_local_storage: {
            bind: 'payments-payments-acceptance-mx-client-onboarding-complete'
          },
          modal_transitionend_scroll_into_view: {
            bind: 'help-modal-transitionend'
          },
          oc_cash_zone_scroll_into_view: {
            bind: 'payments-payments-acceptance-mx-offer-shown'
          }
        }
      }
    }
  };
  const bbvaControllerOcCashZone = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-controller-oc-cash-zone-mx',
    tag: 'bbva-controller-oc-cash-zone-mx',
    render: 'litElement',
    properties: {
      isIosNative: nativeIos,
      localStorageKey: 'mercurioMPOS',
      native,
      pageName,
      retryErrorsId,
      cellsConnections: {
        params: {
          upgradeTop: 'upgradeTop'
        },
        in: {
          cashZonePaymentsMpos_go_to_page_oc_cash_zone_upgrade_top: {
            bind: 'handleUpgradeTopNavigation'
          },
          oc_cash_zone_init_page: {
            bind: 'handleUpgradeTopStatus',
            previousState: false
          },
          global_feature_flag_collection_updated: {
            bind: 'handleFeatureFlagCollectionUpdated'
          },
          global_storage_oc_cash_zone_get_mercurioMPOS_success: {
            bind: 'resetStorageTtl',
            previousState: false
          },
          global_nativeconnector_openpay_check_top_capabilities_success: {
            bind: 'sdkCheckTopCapabilitiesSuccess',
            previousState: false
          },
          global_nativeconnector_openpay_check_top_capabilities_error: {
            bind: 'sdkCheckTopCapabilitiesError',
            previousState: false
          },
          global_login_success: {
            bind: 'getCustomerId'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          global_set_app_settings: {
            bind: 'getAppSettings'
          },
          widget_signature_handle_required_first_step: {
            bind: 'hideFeature'
          },
          widget_signature_close_modal_success: {
            bind: 'showFeature'
          },
          widget_signature_close_modal_error: {
            bind: 'showFeature'
          },
          widget_signature_handle_invalid: {
            bind: 'showFeature'
          },
          widget_signature_handle_canceled: {
            bind: 'showFeature'
          },
          sign_modal_cancelled: {
            bind: 'showFeature'
          },
          oc_cash_zone_error_send: {
            bind: 'handleRetryError'
          },
          oc_cash_zone_contact_advisor: {
            bind: 'handleContactAdvisor'
          },
          oc_cash_zone_get_data_generate_image: {
            bind: 'getDataToGenerateImage'
          },
          oc_cash_zone_get_image_success: {
            bind: 'resolveImageAndOpenSocialShare'
          },
          oc_cash_zone_open_terms_and_conditions_document: {
            bind: 'openTermsAndConditionsDocument'
          },
          oc_cash_zone_add_products_complete: {
            bind: 'getMercurioMposFromStorage'
          },
          oc_cash_zone_save_local_storage: {
            bind: 'saveLocalStorage'
          },
          oc_cash_zone_tsec_invalid: {
            bind: 'handleNavigateToLogin'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-local-storage'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_nativeconnector_openpay_check_top_capabilities: {
            bind: 'check-top-capabilities'
          },
          global_action_launcher_dialer: {
            bind: 'contact-advisor'
          },
          global_open_document_base64: {
            bind: 'open-terms-and-conditions-document'
          },
          global_open_control_veil: {
            bind: 'show-spinner'
          },
          global_close_control_veil: {
            bind: 'hide-spinner'
          },
          oc_cash_zone_set_customer_id: {
            bind: 'set-customer-id'
          },
          oc_cash_zone_set_product_type: {
            bind: 'set-product-type'
          },
          oc_cash_zone_set_term_type_id: {
            bind: 'set-term-type-id'
          },
          oc_cash_zone_set_document_id: {
            bind: 'set-document-id'
          },
          oc_cash_zone_set_document_type: {
            bind: 'set-document-type'
          },
          oc_cash_zone_set_services_id: {
            bind: 'set-services-id'
          },
          oc_cash_zone_set_document_id_top: {
            bind: 'set-document-id-top'
          },
          oc_cash_zone_set_document_type_top: {
            bind: 'set-document-type-top'
          },
          oc_cash_zone_set_term_type_id_top: {
            bind: 'set-term-type-id-top'
          },
          oc_cash_zone_set_hidden: {
            bind: 'set-hidden'
          },
          oc_cash_zone_set_invalid_client: {
            bind: 'invalid-client'
          },
          oc_cash_zone_get_image_set_result: {
            bind: 'get-image-set-result'
          },
          oc_cash_zone_get_image_capture_receipt: {
            bind: 'get-image-capture-receipt'
          },
          oc_cash_zone_open_native_social_share: {
            bind: 'open-native-social-share'
          },
          oc_cash_zone_navigate_to_login: {
            bind: 'navigate-to-login',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin'
              },
              cleanUntil: pageName
            }
          },
          oc_cash_zone_get_image_set_shared_receipt_styles: {
            bind: 'get-image-set-shared-receipt-styles'
          }
        }
      }
    }
  };
  const bbvaAnalyticmanagerOcCashZone = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-oc-cash-zone',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
    properties: {
      cellsConnections: {
        in: {
          oc_cash_zone_analytics_show: {
            bind: 'handleAnalyticsShow'
          },
          oc_cash_zone_analytics_action: {
            bind: 'handleAnalyticsAction'
          },
          widget_signature_handle_required_first_step: {
            bind: 'fireAppStepOtp'
          }
        },
        out: {
          oc_cash_zone_analytics_mpos_top_page_offer_show: {
            bind: 'analytics-mpos-top-page-offer-show',
            analytics: getAppPageVisit(applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_page_offer_show: {
            bind: 'analytics-mpos-page-offer-show',
            analytics: getAppPageVisit(applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_page_offer_show: {
            bind: 'analytics-mpos-top-without-stock-page-offer-show',
            analytics: getAppPageVisit(applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_page_offer_click_payment_methods_details_link_action: {
            bind: 'analytics-mpos-top-page-offer-click-payment-methods-details-link-action',
            analytics: getAppStarted(analyticAppStartedActions.KNOW_MORE_DETAILS, applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_page_offer_click_payment_methods_details_link_action: {
            bind: 'analytics-mpos-page-offer-click-payment-methods-details-link-action',
            analytics: getAppStarted(analyticAppStartedActions.KNOW_MORE_DETAILS, applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_page_offer_click_payment_methods_details_link_action: {
            bind: 'analytics-mpos-top-without-stock-page-offer-click-payment-methods-details-link-action',
            analytics: getAppStarted(analyticAppStartedActions.KNOW_MORE_DETAILS, applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_page_offer_click_commissions_details_link_action: {
            bind: 'analytics-mpos-top-page-offer-click-commissions-details-link-action',
            analytics: getAppStarted(analyticAppStartedActions.KNOW_OTHER_COMMISSIONS, applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_page_offer_click_commissions_details_link_action: {
            bind: 'analytics-mpos-page-offer-click-commissions-details-link-action',
            analytics: getAppStarted(analyticAppStartedActions.KNOW_OTHER_COMMISSIONS, applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_page_offer_click_commissions_details_link_action: {
            bind: 'analytics-mpos-top-without-stock-page-offer-click-commissions-details-link-action',
            analytics: getAppStarted(analyticAppStartedActions.KNOW_OTHER_COMMISSIONS, applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_page_offer_click_start_order_button_action: {
            bind: 'analytics-mpos-top-page-offer-click-start-order-button-action',
            analytics: getAppStarted(analyticAppStartedActions.CONTINUE, applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_page_offer_click_start_order_button_action: {
            bind: 'analytics-mpos-page-offer-click-start-order-button-action',
            analytics: getAppStarted(analyticAppStartedActions.CONTINUE, applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_page_offer_click_start_order_button_action: {
            bind: 'analytics-mpos-top-without-stock-page-offer-click-start-order-button-action',
            analytics: getAppStarted(analyticAppStartedActions.CONTINUE, applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_page_offer_click_ask_for_advice_link_action: {
            bind: 'analytics-mpos-top-page-offer-click-ask-for-advice-link-action',
            analytics: getAppStarted(analyticAppStartedActions.ASK_FOR_ADVICE, applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_page_offer_click_ask_for_advice_link_action: {
            bind: 'analytics-mpos-page-offer-click-ask-for-advice-link-action',
            analytics: getAppStarted(analyticAppStartedActions.ASK_FOR_ADVICE, applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_page_offer_click_ask_for_advice_link_action: {
            bind: 'analytics-mpos-top-without-stock-page-offer-click-ask-for-advice-link-action',
            analytics: getAppStarted(analyticAppStartedActions.ASK_FOR_ADVICE, applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_step_order_info_show: {
            bind: 'analytics-mpos-top-step-order-info-show',
            analytics: getAppSteps(analyticAppStepActions.ORDER_INFO_SHOW, applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_step_order_info_show: {
            bind: 'analytics-mpos-step-order-info-show',
            analytics: getAppSteps(analyticAppStepActions.ORDER_INFO_SHOW, applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_step_order_info_show: {
            bind: 'analytics-mpos-top-without-stock-step-order-info-show',
            analytics: getAppSteps(analyticAppStepActions.ORDER_INFO_SHOW, applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_step_income_account_show: {
            bind: 'analytics-mpos-top-step-income-account-show',
            analytics: getAppSteps(analyticAppStepActions.INCOME_ACCOUNT_SHOW, applicationTypology.MPOS_TOP)
          },
          oc_cash_zone_analytics_mpos_step_income_account_show: {
            bind: 'analytics-mpos-step-income-account-show',
            analytics: getAppSteps(analyticAppStepActions.INCOME_ACCOUNT_SHOW, applicationTypology.MPOS)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_step_income_account_show: {
            bind: 'analytics-mpos-top-without-stock-step-income-account-show',
            analytics: getAppSteps(analyticAppStepActions.INCOME_ACCOUNT_SHOW, applicationTypology.MPOS_WITHOUT_STOCK)
          },
          oc_cash_zone_analytics_mpos_top_with_card_reader_step_terms_and_conditions_show: {
            bind: 'analytics-mpos-top-with-card-reader-step-terms-and-conditions-show',
            analytics: getAppSteps(analyticAppStepActions.TERMS_AND_CONDITIONS_SHOW, applicationTypology.MPOS_TOP, applicationProccess.WITH_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_without_card_reader_step_terms_and_conditions_show: {
            bind: 'analytics-mpos-top-without-card-reader-step-terms-and-conditions-show',
            analytics: getAppSteps(analyticAppStepActions.TERMS_AND_CONDITIONS_SHOW, applicationTypology.MPOS_TOP, applicationProccess.WITHOUT_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_step_terms_and_conditions_show: {
            bind: 'analytics-mpos-step-terms-and-conditions-show',
            analytics: getAppSteps(analyticAppStepActions.TERMS_AND_CONDITIONS_SHOW, applicationTypology.MPOS, applicationProccess.WITH_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_step_terms_and_conditions_show: {
            bind: 'analytics-mpos-top-without-stock-step-terms-and-conditions-show',
            analytics: getAppSteps(analyticAppStepActions.TERMS_AND_CONDITIONS_SHOW, applicationTypology.MPOS_WITHOUT_STOCK, applicationProccess.WITHOUT_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_with_card_reader_step_summary_show: {
            bind: 'analytics-mpos-top-with-card-reader-step-summary-show',
            analytics: getAppSteps(analyticAppStepActions.COMPLETE_SUMMARY_SHOW, applicationTypology.MPOS_TOP, applicationProccess.WITH_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_without_card_reader_step_summary_show: {
            bind: 'analytics-mpos-top-without-card-reader-step-summary-show',
            analytics: getAppSteps(analyticAppStepActions.COMPLETE_SUMMARY_SHOW, applicationTypology.MPOS_TOP, applicationProccess.WITHOUT_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_step_summary_show: {
            bind: 'analytics-mpos-top-without-stock-step-summary-show',
            analytics: getAppSteps(analyticAppStepActions.COMPLETE_SUMMARY_SHOW, applicationTypology.MPOS, applicationProccess.WITH_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_step_summary_show: {
            bind: 'analytics-mpos-step-summary-show',
            analytics: getAppSteps(analyticAppStepActions.COMPLETE_SUMMARY_SHOW, applicationTypology.MPOS_WITHOUT_STOCK, applicationProccess.WITHOUT_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_with_card_reader_page_thank_you_show: {
            bind: 'analytics-mpos-top-with-card-reader-page-thank-you-show',
            analytics: getAppCompleted(applicationTypology.MPOS_TOP, applicationProccess.WITH_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_without_card_reader_page_thank_you_show: {
            bind: 'analytics-mpos-top-without-card-reader-page-thank-you-show',
            analytics: getAppCompleted(applicationTypology.MPOS_TOP, applicationProccess.WITHOUT_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_page_thank_you_show: {
            bind: 'analytics-mpos-page-thank-you-show',
            analytics: getAppCompleted(applicationTypology.MPOS, applicationProccess.WITH_CARD_READER)
          },
          oc_cash_zone_analytics_mpos_top_without_stock_page_thank_you_show: {
            bind: 'analytics-mpos-top-without-stock-page-thank-you-show',
            analytics: getAppCompleted(applicationTypology.MPOS_WITHOUT_STOCK, applicationProccess.WITHOUT_CARD_READER)
          },
          oc_cash_zone_analytics_modal_payment_methods_details_show: {
            bind: 'analytics-modal-payment-methods-details-show',
            analytics: getfootprint(analyticFootprintActions.PAYMENT_METHODS_DETAILS_SHOW)
          },
          oc_cash_zone_analytics_modal_commissions_details_show: {
            bind: 'analytics-modal-commissions-details-show',
            analytics: getfootprint(analyticFootprintActions.COMMISSIONS_DETAILS_SHOW)
          },
          oc_cash_zone_analytics_modal_privacy_notice_show: {
            bind: 'analytics-modal-privacy-notice-show',
            analytics: getfootprint(analyticFootprintActions.PRIVACY_NOTICE_SHOW)
          },
          oc_cash_zone_analytics_modal_delivery_details_show: {
            bind: 'analytics-modal-delivery-details-show',
            analytics: getfootprint(analyticFootprintActions.DELIVERY_DETAILS_SHOW)
          },
          oc_cash_zone_analytics_alert_mpos_price_stock_show: {
            bind: 'analytics-alert-mpos-price-stock-show',
            analytics: getfootprint(analyticFootprintActions.ALERT_MPOS_PRICE_STOCK_SHOW)
          },
          oc_cash_zone_analytics_alert_mpos_price_insufficient_stock_show: {
            bind: 'analytics-alert-mpos-price-insufficient-stock-show',
            analytics: getfootprint(analyticFootprintActions.ALERT_MPOS_PRICE_INSUFFICIENT_STOCK)
          },
          oc_cash_zone_analytics_step_card_reader_show: {
            bind: 'analytics-step-card-reader-show',
            analytics: getfootprint(analyticFootprintActions.CARD_READER_SHOW)
          },
          oc_cash_zone_analytics_step_delivery_address_show: {
            bind: 'analytics-step-delivery-address-show',
            analytics: getfootprint(analyticFootprintActions.DELIVERY_ADDRESS_SHOW)
          },
          oc_cash_zone_analytics_step_payment_account_show: {
            bind: 'analytics-step-payment-account-show',
            analytics: getfootprint(analyticFootprintActions.PAYMENT_ACCOUNT_SHOW)
          },
          oc_cash_zone_analytics_service_payments_otp: {
            bind: 'analytics-service-payments-otp',
            analytics: getfootprint(analyticFootprintActions.SERVICE_PAYMENTS_OTP_SHOW)
          },
          oc_cash_zone_analytics_top_page_offer_show: {
            bind: 'analytics-top-page-offer-show',
            analytics: getfootprint(analyticFootprintActions.OFFER_TOP_SHOW)
          },
          oc_cash_zone_analytics_top_page_thank_you_show: {
            bind: 'analytics-top-page-thank-you-show',
            analytics: getfootprint(analyticFootprintActions.THANK_YOU_TOP_SHOW)
          }
        }
      }
    }
  };
  const bbvaAggregationConfigurableFormFieldSet = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-configurable-form-field-set-spherica',
    tag: 'bbva-aggregation-configurable-form-field-set-spherica',
    render: 'litElement',
    properties: {
      inputDataConfiguration,
      cellsConnections: {
        in: {
          oc_cash_zone_other_address_open: {
            bind: 'openModalAddAddress'
          },
          oc_cash_zone_other_address_edit: {
            bind: 'openModalEditAddress'
          },
          oc_cash_zone_other_address_delete: {
            bind: 'reset'
          },
          oc_cash_zone_other_address_close: {
            bind: 'closeModal'
          }
        },
        out: {
          oc_cash_zone_set_other_address: {
            bind: 'bbva-aggregation-configurable-form-field-set-submit'
          },
          oc_cash_zone_close_other_address: {
            bind: 'bbva-aggregation-configurable-form-field-set-close'
          }
        }
      }
    }
  };
  const cellsShareOperativeReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          oc_cash_zone_open_native_social_share: {
            bind: 'reset'
          },
          oc_cash_zone_get_image_set_result: {
            bind: 'result'
          },
          oc_cash_zone_get_image_capture_receipt: {
            bind: 'captureReceipt'
          },
          oc_cash_zone_get_image_set_shared_receipt_styles: {
            bind: 'sharedReceiptStyles'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'share-receipt-show-modal-error'
          },
          oc_cash_zone_get_image_success: {
            bind: 'receipt-captured'
          }
        }
      }
    }
  };
  const cellsMobileSocialsharing = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-mobile-socialsharing',
    properties: {
      cellsConnections: {
        in: {
          oc_cash_zone_open_native_social_share: {
            bind: 'share'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-digital-sales',
    currentPage: {
      url: '/oc-cash-zone'
    },
    pages: ocCashZonePage,
    template: cellsTemplateCoronita,
    components: [
      cellsHandleLifeCycle,
      paymentsPaymentsAcceptanceMx,
      bbvaControllerOcCashZone,
      bbvaAnalyticmanagerOcCashZone,
      bbvaAggregationConfigurableFormFieldSet,
      cellsShareOperativeReceipt,
      createSpinnerSpherica(CONFIG)
    ]
  };

  if (nativeShell) {
    base.components.push(cellsMobileSocialsharing);
    base.components.push(glomoOpenDocument(CONFIG));
  }
  addOutStorageChannels(base.components, [ 'mercurioMPOS' ], CONFIG, createPrefixFromPageName(pageName));
  const errorAndSignWidgetConnector =
    require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('payments-payments-acceptance-mx', {
    retryAfterErrorFunction: 'handleRequestActions',
    cancelAfterErrorFunction: 'handleCancelSignActions'
  });
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  addRetryErrors(base)([
    {
      id: retryErrorsId,
      acceptRetry: { bind: 'handleRequestActions', component: 'payments-payments-acceptance-mx' },
      cancelRetry: { bind: 'handleCancelErrorActions', component: 'payments-payments-acceptance-mx' },
      acceptCallForHelp: { bind: 'handleContactAdvisor', component: 'bbva-controller-oc-cash-zone-mx' }
    }
  ]);
  return base;
};
