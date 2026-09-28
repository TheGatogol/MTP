/* eslint-disable complexity */
'use strict';

module.exports = CONFIG => {
  const {
    getLanguage,
    getLocalCurrency,
    detailDownloadParams,
    glomoOpenDocument,
    createSpinner
  } = require('./common/helpers/_utils');
  const isNative = CONFIG.native || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'increment';
  const spinnerSpherica = createSpinner(CONFIG);
  spinnerSpherica.tag = 'cells-spinner-veil-spherica';
  spinnerSpherica.properties = {
    ...spinnerSpherica.properties,
    className: 'solid-spinner'
  };
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { appPageVisit, bindedLiterals, appStarted, appCompleted } = require('./analytics/_increment')();

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_increment_card_limit_exit: {
            bind: 'alert-EXIT-INCREMENT-CARD-LIMIT-accept',
            backStep: true
          },
          global_increment_card_limit_init_data_error_accept: {
            bind: 'alert-INIT-DATA-ERROR-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_init_data_error_cancel: {
            bind: 'alert-INIT-DATA-ERROR-INCREMENT-CARD-LIMIT-cancel',
            backStep: true
          },
          global_increment_card_limit_base_pdf_error_retry_accept: {
            bind: 'alert-BASE-PDF-ERROR-RETRY-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_base_pdf_error_exit_accept: {
            bind: 'alert-BASE-PDF-ERROR-EXIT-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_base_pdf_error_exit_cancel: {
            bind: 'alert-BASE-PDF-ERROR-EXIT-INCREMENT-CARD-LIMIT-cancel'
          },
          global_increment_card_limit_customer_contact_error: {
            bind: 'alert-CUSTOMER-CONTACT-ERROR-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_put_error: {
            bind: 'alert-PUT-CARD-LIMIT-ERROR-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_put_error_cancel: {
            bind: 'alert-PUT-CARD-LIMIT-ERROR-INCREMENT-CARD-LIMIT-cancel'
          },
          global_increment_card_limit_put_error_closed: {
            bind: 'cells-bottom-modal-backdrop-removed'
          },
          global_increment_card_limit_customer_contact_failed_continue: {
            bind: 'alert-CUSTOMER-CONTACT-ERROR-INCREMENT-CARD-LIMIT-cancel'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: true,
      extraHeaderClass: ''
    }
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cache: [],
      private: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          app_error_access_token: {
            bind: 'access-token-error'
          },
          increment_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          global_retargeting_reset_step: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-close-operative',
      continue: 'dashboard',
      cellsConnections: {
        in: {
          global_increment_card_limit_exit: {
            bind: 'goBack'
          },
          global_increment_card_limit_init_data_error_cancel: {
            bind: 'goBack'
          },
          global_increment_card_limit_base_pdf_error_exit_accept: {
            bind: 'goBack'
          },
          global_increment_card_limit_base_pdf_error_exit_cancel: {
            bind: 'goBack'
          }
        },
        out: {
          increment_reset_screen: {
            bind: 'header-close-operative',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'header-close-operative'
          }
        }
      }
    }
  };
  const appHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header-spherica',
    properties: {
      variant: 'primary',
      rightIconText: 'cells-molecule-header-spherica-close',
      titleName: 'glomo-credit-card-limit-increase-title-spherica',
      className: 'header--light',
      rightIcon: 'coronita:close',
      hideLeftActions: true,
      style: '--cells-molecule-header-bg-color: var(--bbva-100, #f4f4f4)',
      cellsConnections: {
        in: {},
        out: {
          increment_close_operative_confirm: {
            bind: 'click-right-button'
          },
          global_retargeting_reset_step: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const limitIncrease = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-credit-card-limit-increase-spherica',
    properties: {
      cardImageSizes: {
        width: 168,
        height: 168
      },
      variant: 'secondary',
      withOutHintList: true,
      hideMoleculeMask: true,
      confirmButtonsClass: 'positive',
      config: CONFIG,
      localCurrency: getLocalCurrency(),
      confirmAction: 'increment-put-limit',
      hintList: [],
      showMaxAmount: true,
      textButton: 'cells-credit-line-increase-text-button',
      alternativeCurrentAmount: true,
      sendAllAmountsArray: true,
      cellsConnections: {
        in: {
          card_increment_load_data: {
            bind: 'getInitialData'
          },
          increment_set_financial_data: {
            bind: 'product'
          },
          set_increment_offer_operation_data: {
            bind: 'setProperties'
          },
          global_offers_changed: {
            bind: 'setProperties'
          },
          increment_navigation_increment_to_review: {
            bind: 'reset'
          },
          increment_reset_screen: {
            bind: 'reset'
          },
          increment_card_limit_customer_contact_error_response: {
            bind: 'reset'
          },
          global_increment_card_limit_init_data_error_cancel: {
            bind: 'reset'
          },
          increment_back_to_detail: {
            bind: 'reset'
          },
          set_additional_configuration: {
            bind: 'setProperties'
          }
        },
        out: {
          increment_put_limit_button_click: {
            bind: 'increment-put-limit'
          },
          increment_put_limit_data_error: {
            bind: 'put-increment-data-error'
          },
          global_retargeting_go_next_step: {
            bind: 'increment-put-limit'
          },
          increment_view_terms_conditions: {
            bind: 'increment-view-terms-conditions'
          }
        },
        params: {
          productId: 'productId'
        }
      }
    }
  };
  const limitIncreaseDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-credit-card-limit-increase-dm-mx',
    familyPath: 'glomo-credit-card-limit-increase-dm',
    properties: {
      isSpherica: true,
      sourceImage: './images/spherica/increment/increase-credit-card.svg',
      host: CONFIG.globalServices.host,
      cardsApiVersion: CONFIG.globalServices.versions.cards,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      isIosNative: isNativeIos,
      language: getLanguage(),
      setAdditionalData: true,
      showExitTitle: true,
      amountsArrayValid: true,
      preventOfferSimulation: true,
      detailDownloadParams,
      cellsConnections: {
        in: {
          increment_put_limit_card: {
            bind: 'navigateToReviewPage'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          increment_view_terms_conditions: {
            bind: 'viewTermsConditions'
          },
          increment_get_business_documents_success: {
            bind: 'succesContractPDF'
          },
          global_open_document_url_success: {
            bind: 'closeControlVeil'
          },
          global_open_document_url_error: {
            bind: 'errorBasePdf'
          },
          increment_get_business_documents_error: {
            bind: 'errorBasePdf'
          },
          global_card_product_selected: {
            bind: 'product'
          },
          global_offers_manager_retrieved: {
            bind: 'offers'
          },
          requested_card_offer: {
            bind: 'setOfferDetailData'
          },
          increment_set_customer_data: {
            bind: 'setCustomerContact'
          },
          global_dashboard_cards: {
            bind: 'productsList'
          },
          increment_close_operative_confirm: {
            bind: 'modalCloseOperativeConfirm'
          },
          increment_card_offer_error: {
            bind: 'modalInitDataError'
          },
          increment_card_error: {
            bind: 'modalInitDataError'
          },
          increment_put_limits_card_error: {
            bind: 'modalPutLimitsCardError'
          },
          increment_customer_contacts_error: {
            bind: 'modalInitDataError'
          },
          increment_put_limit_button_click: {
            bind: 'incrementPutClickedRecall'
          },
          global_increment_card_limit_customer_contact_error: {
            bind: '_goToProfile'
          },
          increment_put_limit_data_error: {
            bind: 'modalPutLimitsCardError'
          },
          global_increment_card_limit_customer_contact_failed_continue: {
            bind: 'retryOperationrequest'
          },
          global_increment_card_limit_put_error_cancel: {
            bind: 'clearLastCall'
          },
          global_increment_card_limit_init_data_error_accept: {
            bind: 'retryOperationrequest'
          },
          global_increment_card_limit_base_pdf_error_retry_accept: {
            bind: 'viewTermsConditions'
          },
          increment_customer_error_service: {
            bind: 'modalInitDataError'
          },
          global_increment_card_limit_put_error_closed: {
            bind: 'retryPutCardLimit'
          },
          increment_navigation_increment_to_review: {
            bind: 'reset'
          },
          increment_reset_screen: {
            bind: 'reset'
          },
          increment_card_limit_customer_contact_error_response: {
            bind: 'reset'
          },
          global_increment_card_limit_init_data_error_cancel: {
            bind: 'reset'
          },
          set_cards_apis: {
            bind: 'setCardsProducts'
          },
          global_product_found: {
            bind: 'setProductId'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'increment-confirm-modal'
          },
          increment_navigation_increment_to_review: {
            bind: 'navigate-to-review',
            link: {
              page: 'incrementReview',
              params: {
                productId: 'productId'
              },
              cleanUntil: 'cardDetail',
              skipHistory: true
            }
          },
          increment_get_offer_detail: {
            bind: 'get-offer-detail'
          },
          increment_set_business_properties: {
            bind: 'set-business-properties'
          },
          increment_request_pdf_contract: {
            bind: 'request-pdf-contract'
          },
          global_open_document_url: {
            bind: 'show-document-event'
          },
          increment_set_financial_data: {
            bind: 'set-financial-data'
          },
          increment_get_customer_contact: {
            bind: 'get-customer-contact'
          },
          increment_card_limit_customer_contact_error_response: {
            bind: 'go-to-profile',
            link: {
              page: 'profile'
            }
          },
          increment_put_limit_validated_resquest: {
            bind: 'increment-put-limit-validated'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          set_increment_offer_operation_data: {
            bind: 'set-increment-offer-operation-data'
          },
          global_oc_banner_hide: {
            bind: 'hide-oc-banner'
          },
          set_additional_configuration: {
            bind: 'set-additional-config'
          },
          increment_back_to_detail: {
            bind: 'increment-back-to-detail',
            backStep: true
          },
          financial_overview_refresh: {
            bind: 'dashboard-data-refresh'
          },
          global_card_detail_data_refresh: {
            bind: 'card-detail-data-refresh'
          },
          get_user_card_increment: {
            bind: 'get-product-list'
          },
          global_retargeting_contracted_product: {
            bind: 'navigate-to-review'
          }
        },
        params: {
          parseResponse: 'increment_result',
          user: 'global_user',
          isLogged: 'global_user_logged',
          offerId: 'offerId',
          productId: 'productId',
          customerId: 'global_user_id'
        }
      }
    }
  };
  const BbvaControllerIncrementMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-credit-card-line-increase-mx',
    familyPath: '@glomo-web-components/bbva-controller-credit-card-line-increase-mx',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: isNative,
      cardOfferApiVersion: CONFIG.globalServices.versions.cards,
      cardPutLimitApiVersion: CONFIG.globalServices.versions.cards,
      cardTypeOffer: 'NILC',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          bbva_feature_credit_card_line_increase_mx_increment_credit_card_data_send: {
            bind: 'offerCard'
          },
          increment_get_offer_detail: {
            bind: 'getOfferDetail'
          },
          increment_put_limit_validated_resquest: {
            bind: 'putCardLimit'
          }
        },
        out: {
          requested_card_offer: {
            bind: 'bbva-controller-credit-card-line-increase-mx-card-offer-set'
          },
          increment_put_limit_card: {
            bind: 'bbva-controller-credit-card-line-increase-mx-card-limit-put'
          },
          increment_put_limits_card_error: {
            bind: 'bbva-controller-credit-card-line-increase-mx-card-limit-error-put'
          },
          increment_card_offer_error: {
            bind: 'bbva-controller-credit-card-line-increase-mx-card-offer-error-set'
          },
          global_retargeting_form_submission: {
            bind: 'bbva-controller-credit-card-line-increase-mx-card-offer-set'
          },
          global_retargeting_go_next_step: {
            bind: 'bbva-controller-credit-card-line-increase-mx-card-limit-put'
          },
          increment_post_credit_line_request: {
            bind: 'bbva-controller-credit-card-line-increase-mx-credit-line-request-post'
          }
        },
        params: {
          offerId: 'offerId',
          cardId: 'productId'
        }
      }
    }
  };
  const customerDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          increment_get_customer_contact: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          increment_set_customer_data: {
            bind: 'set-customer-contacts'
          },
          increment_customer_contacts_error: {
            bind: 'contact-details-response-error'
          },
          increment_customer_error_service: {
            bind: 'error-on-get-customer-contacts'
          }
        },
        params: {
          offerId: 'offerId',
          cardId: 'productId',
          user: 'global_user'
        }
      }
    }
  };
  const globalApisCards =  {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      cardsApiVersion: CONFIG.globalServices.versions.cards,
      cellsConnections: {
        in: {
          get_user_card_increment: {
            bind: 'getCards'
          }
        },
        out: {
          set_cards_apis: {
            bind: 'set-cards'
          }
        }
      }
    }
  };
  const cardsAlternatives = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-local-cards-credit-line-increments-api-dm',
    familyPath: '@glomo-web-components/bbva-local-cards-api-dm',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: isNative,
      version: CONFIG.globalServices.versions.cardsV3,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      requiredOTP: true,
      cellsConnections: {
        in: {
          increment_post_credit_line_request: {
            bind: 'postCardsCreditLineIncrements'
          }
        },
        out: {
          increment_put_limit_card: {
            bind: 'cards-credit-line-increments-api-dm-create'
          },
          increment_put_limits_card_error: {
            bind: 'cards-credit-line-increments-api-dm-create-error'
          }
        }
      }
    }
  };
  const analytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-credit-card-limit-increase-manager',
    familyPath: 'glomo-credit-card-limit-increase-dm',
    properties: {
      bindedLiterals: bindedLiterals,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigationDetailFromBridge'
          },
          increment_reset_screen: {
            bind: 'reset'
          },
          increment_card_limit_customer_contact_error_response: {
            bind: 'reset'
          },
          global_increment_card_limit_init_data_error_cancel: {
            bind: 'reset'
          },
          increment_back_to_detail: {
            bind: 'reset'
          },
          increment_put_limit_button_click: {
            bind: 'fireAppStarted'
          },
          set_increment_offer_operation_data: {
            bind: 'onIncrementUiIsReady'
          },
          increment_put_limit_validated_resquest: {
            bind: 'syncAmountRequested'
          },
          increment_put_limit_card: {
            bind: 'onLimitIncreaseSuccess'
          }
        },
        out: {
          increment_analytics_app_page_visit: {
            bind: 'analytics-app-page-visit',
            analytics: appPageVisit
          },
          increment_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: appStarted
          },
          increment_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: appCompleted
          },
          increment_send_apps_flyer_event: {
            bind: 'send-apps-flyer-event'
          }
        }
      }
    }
  };
  const businessDocument = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      native: isNative,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          increment_set_business_properties: {
            bind: 'setProperties'
          },
          increment_request_pdf_contract: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          increment_get_business_documents_success: {
            bind: 'success-on-get-business-documents'
          },
          increment_get_business_documents_error: {
            bind: 'error-on-get-business-documents'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/card/:productId/increment'
    },
    pages,
    template: template,
    components: [
      spinnerSpherica,
      cellsHandleLifeCycle,
      navigationHandler,
      appHeader,
      limitIncrease,
      limitIncreaseDm,
      customerDm,
      globalApisCards,
      analytics,
      businessDocument,
      cardsAlternatives,
      BbvaControllerIncrementMx
    ]
  };

  if (isNative) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  base.components.push(glomoAlertManagerSpherica);

  addCommonErrors(base.components)();

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-local-cards-credit-line-increments-api-dm', pageName, ['cards-credit-line-increments-api-dm-create', 'cards-credit-line-increments-api-dm-create-error']);
  return base;
};
