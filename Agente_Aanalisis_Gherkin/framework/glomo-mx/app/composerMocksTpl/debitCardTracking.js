'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'debitCardTracking';
  const PAGE_NAME_CHANNEL = 'debit_card_tracking';
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_debitCardTracking')();
  const ANALYTICS_CLEAN_CARD = require('./analytics/_cleanCardOperations')(CONFIG);

  const TEMPLATE = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      headerFixed: true,
      hasFooter: false
    }
  };

  const LIFE_CICLE = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_debitCardTracking: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME + '_INIT_PAGE']: {
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

  const NAVIGATION_HANDLER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigation-to-back',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_back_button_pressed']: {
            bind: 'goBack'
          },
          [PAGE_NAME_CHANNEL + '_error_send_exit']: {
            bind: 'goBack'
          },
          [PAGE_NAME_CHANNEL + '_error_modal_tracking_call_bbva_line']: {
            bind: 'goBack'
          },
          [PAGE_NAME_CHANNEL + '_error_modal_exit_tracking_call_bbva_line']: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_navigation_to_back_page']: {
            bind: 'navigation-to-back',
            backStep: true
          }
        }
      }
    }
  };

  const HEADER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--dark login-gender-header',
      search: false,
      back: true,
      leftIcon: 'coronita:return-12',
      titleName: 'cells-operations-card-location',
      leftIconAction: 'debit-card-tracking-close',
      cellsConnections: {
        out: {
          [PAGE_NAME + '_back_button_pressed']: {
            bind: 'debit-card-tracking-close'
          }
        }
      }
    }
  };

  const SKELETON_TRACKING = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-skeleton-loading-page',
    properties: {
      className: 'white-background',
      circleStep: true,
      visible: true,
      delay: 1500,
      repeat: 4,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_hidden_skeleton']: {
            bind: 'hidden'
          }
        },
        out: {
        }
      }
    }
  };

  const GLOBAL_APIS_CARDS_BGADPMOCK = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_card_id_related_contracts']: {
            bind: 'cardId'
          },
          [PAGE_NAME + '_get_card_related_contracts']: {
            bind: 'getCardRelatedContracts'
          },
          [PAGE_NAME + '_get_card_tracking_deliveries']: {
            bind: 'getCardDeliveries'
          }
        },
        out: {
          [PAGE_NAME + '_get_related_contracts_success']: {
            bind: 'get-card-related-contracts-response'
          },
          [PAGE_NAME + '_get_related_contracts_error']: {
            bind: 'error-on-get-card-related-contracts'
          },
          [PAGE_NAME + '_get_tracking_deliveries_success']: {
            bind: 'success-on-get-card-deliveries'
          },
          [PAGE_NAME + '_get_tracking_deliveries_error']: {
            bind: 'error-on-get-card-deliveries'
          }
        }
      }
    }
  };

  const GLOBAL_APIS_CUSTOMERS_BGADPMOCK = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      customerAddressesApiVersion: CONFIG.globalServices.versions.customers,
      native: !!CONFIG.native,
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          [PAGE_NAME + '_set_unmasked_address_id']: {
            bind: 'getCustomerAddresses'
          }
        },
        out: {
          [PAGE_NAME + '_set_customer_addresses']: {
            bind: 'set-customer-addresses'
          },
          [PAGE_NAME + '_on_error_customer_addresses']: {
            bind: 'error-on-get-customer-addresses'
          }
        }
      }
    }
  };

  const MANAGER_TRACKING = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-card-tracking',
    familyPath: '@glomo-web-components/bbva-manager-card-tracking',
    render: 'litElement',
    properties: {
      cellsConnections: {
        params: {
          globalUser: 'global_user'
        },
        in: {
          [PAGE_NAME + '_INIT_PAGE']: {
            bind: 'initialData'
          },
          [PAGE_NAME + '_get_related_contracts_success']: {
            bind: 'onResponseRelatedContracs'
          },
          [PAGE_NAME + '_get_related_contracts_error']: {
            bind: 'errorTrackingInfoNotAvailable'
          },
          [PAGE_NAME + '_get_tracking_deliveries_success']: {
            bind: 'onResponseCardDeliveries'
          },
          [PAGE_NAME + '_set_customer_addresses']: {
            bind: 'onResponseCustomerAddresses'
          },
          [PAGE_NAME + '_on_error_customer_addresses']: {
            bind: 'errorAddressResponse'
          },
          [PAGE_NAME + '_get_tracking_deliveries_error']: {
            bind: 'errorTrackingInfoNotAvailable'
          },
          [PAGE_NAME_CHANNEL + '_display_page_based_status']: {
            bind: 'selectShippingDetailPageView'
          },
          card_Detail_associated_account_number: {
            bind: 'accountNumber'
          },
          card_Detail_virtual_card_id: {
            bind: 'virtualCardId'
          },
          navigation_to_tdd_confirm_reception_with_qr_code: {
            bind: 'reset'
          },
          [PAGE_NAME_CHANNEL + '_navigation_to_back_page']: {
            bind: 'reset'
          },
          [PAGE_NAME_CHANNEL + '_error_send_retry']: {
            bind: 'initialData'
          },
          [PAGE_NAME_CHANNEL + '_error_modal_tracking_link_call_bbva_line']: {
            bind: 'openDialer'
          },
          [PAGE_NAME_CHANNEL + '_error_modal_tracking_call_bbva_line']: {
            bind: 'openDialer'
          },
          [PAGE_NAME + '_delivery_confirmation_tdd']: {
            bind: 'cardPreActivationProperties'
          }
        },
        out: {
          [PAGE_NAME + '_set_card_id_related_contracts']: {
            bind: 'bbva-manager-card-tracking-set-card-id-related-contracts'
          },
          [PAGE_NAME + '_get_card_related_contracts']: {
            bind: 'bbva-manager-card-tracking-get-related-contracts'
          },
          [PAGE_NAME + '_get_card_tracking_deliveries']: {
            bind: 'bbva-manager-card-tracking-get-deliveries'
          },
          [PAGE_NAME + '_set_text_and_number_account_associate']: {
            bind: 'bbva-manager-card-tracking-set-associate-number-account'
          },
          [PAGE_NAME + '_set_card_tracking_steps']: {
            bind: 'bbva-manager-card-tracking-set-steps'
          },
          [PAGE_NAME + '_set_message-entry-point']: {
            bind: 'bbva-manager-card-tracking-set-message-entry-point-confirmation'
          },
          [PAGE_NAME + '_hidden_skeleton']: {
            bind: 'bbva-manager-card-tracking-show-skeleton'
          },
          [PAGE_NAME + '_hidden_tracking']: {
            bind: 'bbva-manager-card-tracking-show-tracking'
          },
          [PAGE_NAME_CHANNEL + '_send_card_tracking_info_received']: {
            bind: 'bbva-manager-card-tracking-set-info-received'
          },
          [PAGE_NAME + '_set_unmasked_address_id']: {
            bind: 'bbva-manager-card-tracking-send-unmasked-address'
          },
          [PAGE_NAME_CHANNEL + '_send_address_object']: {
            bind: 'bbva-manager-card-tracking-send-address'
          },
          [PAGE_NAME_CHANNEL + '_set_address_ui']: {
            bind: 'bbva-manager-card-tracking-detail-show-address-ui'
          },
          [PAGE_NAME_CHANNEL + '_set_adress_branch']: {
            bind: 'bbva-manager-card-tracking-detail-show-address-branch-ui'
          },
          [PAGE_NAME_CHANNEL + '_set_link_name_button_address']: {
            bind: 'bbva-manager-card-tracking-detail-set-link-name-text'
          },
          [PAGE_NAME_CHANNEL + '_error_send']: {
            bind: 'bbva-manager-card-tracking-error-detail-send',
            analytics: ANALYTICS.DELIVERED_ERROR_FOOTPRINT
          },
          [PAGE_NAME_CHANNEL + '_tracking_error_info_not_available']: {
            bind: 'bbva-manager-card-tracking-error-info-not-available'
          },
          [PAGE_NAME_CHANNEL + '_status_info_received']: {
            bind: 'bbva-manager-card-tracking-status-info-received'
          },
          [PAGE_NAME_CHANNEL + '_send_card_tracking_page_detail']: {
            bind: 'bbva-manager-card-tracking-send-page-shipping-detail',
            link: {
              page: 'debitCardTrackingDetail'
            }
          },
          [PAGE_NAME + '_help_open_dialer']: {
            bind: 'open-call-action'
          },
          navigation_to_tdd_confirm_reception_with_qr_code: {
            bind: 'pre-activate-card-qr',
            link: {
              page: 'cleanCardOperations',
              skipHistory: true,
              params: {
                cardId: 'cardId',
                operativeAction: 'operativeAction',
                continue: 'continue'
              }
            }
          }
        }
      }
    }
  };

  const TRACKING_TEXT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-top--1-5 text-margin-0',
      size: 'S',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_text_and_number_account_associate']: {
            bind: 'text'
          }
        },
        out: {
        }
      }
    }
  };

  const TRACKING_LIST = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-progress-vertical-step',
    familyPath: '@bbva-web-components/bbva-progress-vertical-step',
    render: 'litElement',
    properties: {
      className: 'steps-padding-bottom-0',
      hidden: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_card_tracking_steps']: {
            bind: 'steps'
          },
          [PAGE_NAME + '_hidden_tracking']: {
            bind: 'hidden'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_display_page_based_status']: {
            bind: 'progress-vertical-step-link-click'
          }
        }
      }
    }
  };

  const TRACKING_MESSAGE = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    properties: {
      className: 'u-margin--grid u-margin-bottom--1-5 header-font-l',
      type: 'info-dark',
      icon: 'coronita:info',
      hidden: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_message-entry-point']: {
            bind: 'setProperties'
          }
        },
        out: {
          [PAGE_NAME + '_delivery_confirmation_tdd']: { // entry point confirmación
            bind: 'link-clicked'
          }
        }
      }
    }
  };

  const ACTION_LAUNCHER = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_help_open_dialer']: {
            bind: 'openDialer'
          }
        },
        out: {}
      }
    }
  };

  const MANAGER_ANALYTICS = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-card-tracking',
    familyPath: '@glomo-web-components/bbva-manager-card-tracking',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_get_tracking_deliveries_success']: {
            bind: 'fireDinamicFootPrint'
          },
          [PAGE_NAME + '_get_tracking_deliveries_error']: {
            bind: 'fireFootPrintError'
          },
          [PAGE_NAME + '_delivery_confirmation_tdd']: {
            bind: 'confirmReceipOnclickStart'
          },
          [PAGE_NAME_CHANNEL + '_error_send']: {
            bind: 'fireFootModalDeliveredError'
          }
        },
        out: {
          [PAGE_NAME + '_analytic_footprint_manufacturing_process']: {
            bind: 'bbva-analytic-mct-status-request-received',
            analytics: ANALYTICS.getFootPrintAnalytics('generationProcessFootprint')
          },
          [PAGE_NAME + '_analytic_footprint_generation_process']: {
            bind: 'bbva-analytic-mct-status-generation-process',
            analytics: ANALYTICS.getFootPrintAnalytics('finishProcessFootprint')
          },
          [PAGE_NAME + '_analytic_footprint_distribution_process']: {
            bind: 'bbva-analytic-mct-status-distribution-process',
            analytics: ANALYTICS.getFootPrintAnalytics('distributionFootPrint')
          },
          [PAGE_NAME + '_analytic_footprint_delivered']: {
            bind: 'bbva-analytic-mct-status-delivered',
            analytics: ANALYTICS.getFootPrintAnalytics('deliveredFootPrint')
          },
          [PAGE_NAME + '_analytic_footprint_delivery_expired']: {
            bind: 'bbva-analytic-mct-status-delivery-expired',
            analytics: ANALYTICS.getErrorAnalytics('deliveredErrorFootPrint')
          },
          [PAGE_NAME + '_analytic_footprint_error_not_available']: {
            bind: 'bbva-analytic-mct-info-not-available',
            analytics: ANALYTICS.getErrorAnalytics('informationNotAvailableFootPrint')
          },
          [PAGE_NAME + '_analytic_confirm_receipt_onclick_start']: {
            bind: 'bbva-analytic-confirm-receipt-on-click-start',
            analytics: ANALYTICS_CLEAN_CARD.APP_ONCLICK_START_ENTRY_POINT_CONFIRM_RECEIP
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/debit-card-tracking',
      params: []
    },
    hash: PAGE_NAME,
    template: TEMPLATE,
    components: [
      NAVIGATION_HANDLER,
      LIFE_CICLE,
      HEADER,
      SKELETON_TRACKING,
      GLOBAL_APIS_CUSTOMERS_BGADPMOCK,
      MANAGER_TRACKING,
      GLOBAL_APIS_CARDS_BGADPMOCK,
      TRACKING_TEXT,
      TRACKING_LIST,
      TRACKING_MESSAGE,
      ACTION_LAUNCHER,
      MANAGER_ANALYTICS
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);

  signConnector('cells-dm-global-apis-cards-bgadpmock', PAGE_NAME, ['success-on-get-card-deliveries', 'error-on-get-card-deliveries']);

  return base;
};
