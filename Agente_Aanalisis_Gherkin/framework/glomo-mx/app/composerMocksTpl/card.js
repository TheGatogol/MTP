'use strict';

/* eslint-disable max-statements */
/*eslint max-statements: ["error", 120]*/
/*eslint complexity: ["error", 100]*/
module.exports = CONFIG => {
  const PAGE_NAME = 'card';
  const base = require('./product/_product-detail')(PAGE_NAME)(CONFIG);
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const ANALYTICS_REWARD = require('./analytics/_reward')({});
  const get = utils.get(base);
  const setProperty = utils.setProperty(base);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsParams = utils.connectionsParams(base);
  const COUNTRY = utils.getCountry();
  const LOCAL_CURRENCY = utils.getLocalCurrency();
  const LANGUAGE = utils.getLanguage();
  const isNativeIos = CONFIG.nativeIos || false;
  const CARD_ON_OFF_ENABLED = false;
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('card');

  const CARD = {
    lastTransactions: false
  };

  const corporateCardIds = ['B1', 'B2', 'B3', 'B4', 'M1', 'M2', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'];

  /*
  * cells-molecule-header
  */
  get('cells-molecule-header')
    .properties
    .canHaveSwitch = false;

  connectionsIn('cells-molecule-header')
    .card_product_detail_selectedCurrency_channel = {
      bind: 'currencySwitchIn'
    };

  connectionsOut('cells-molecule-header')
    .card_product_detail_currency_switch = {
      bind: 'currency-switch-out-changed'
    };

  /*
  * cells-product-summary-card
  */
  get('cells-product-summary-card')
    .properties
    .optionalItemsAlign = 'cells-key-values-list';

  get('cells-product-summary-card')
    .properties
    .hasAdditionalItems = false;

  get('cells-product-summary-card')
    .properties
    .hasCvv = false;

  get('cells-product-summary-card')
    .properties
    .defaultImages = {
      'front': './images/cards/cardFrontDefault.png',
      'back': './images/cards/cardBackDefault.png'
    };
  get('cells-product-summary-card')
    .properties
    .titleSwitch = 'cells-product-summary-card-title-switch';

  get('cells-product-summary-card')
    .properties
    .showOnOffSwitch = false;

  get('cells-product-summary-card')
    .properties
    .language = LANGUAGE;

  get('cells-product-summary-card')
    .properties
    .hideCalendarReminder = false;

  get('cells-product-summary-card')
    .properties
    .hidePrepaidOrDebitCardPaymentMethods = false;

  setProperty('cells-product-summary-card').maskedAmountNumberChars = VISIBLE_CHARS;

  connectionsParams('cells-product-summary-card').account = 'card';

  connectionsIn('cells-product-summary-card').card_product_detail_selectedCurrency_channel = {
    bind: 'selectedCurrency'
  };
  connectionsIn('cells-product-summary-card').global_discreet_mode_mask_amount_values = {
    bind: 'maskedAmount'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_clipboard_success = {
    bind: '_onTextCopiedSuccess'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_clipboard_error = {
    bind: '_onTextCopiedError'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_error_on_get_card = {
    bind: 'onCardError'
  };
  connectionsIn('cells-product-summary-card').sign_modal_close_reset = {
    bind: 'hideSpinner'
  };
  connectionsIn('cells-product-summary-card').signature_open_modal_generic_error = {
    bind: 'hideSpinner'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_show_cvv_channel = {
    bind: 'showCVV'
  };
  connectionsIn('cells-product-summary-card').global_card_product_detail_close_modal_tutorial_event = {
    bind: 'requestPermissionCalendar'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_set_data_event_added_calendar_reminder = {
    bind: 'setDataEventCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_add_event_success = {
    bind: 'openToastSuccessfulCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_add_event_error = {
    bind: 'openToastErrorCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_set_data_event_updated_calendar_reminder = {
    bind: 'setDataEventCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_modify_event_success = {
    bind: 'openToastSuccessfulCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_modify_event_error = {
    bind: 'openToastErrorCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_calendar_not_installed = {
    bind: 'openToastErrorCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_request_permission_success = {
    bind: 'handlerRequestPermissionCalendar'
  };
  connectionsIn('cells-product-summary-card').card_product_detail_request_permission_error = {
    bind: 'handlerRequestPermissionCalendar'
  };
  connectionsIn('cells-product-summary-card').global_storage_get_not_first_time_calendar_reminder_success = {
    bind: 'getLocalStorageResponseNotFirstTimeCalendarReminder'
  };
  connectionsIn('cells-product-summary-card').global_storage_get_cards_info_success = {
    bind: 'getLocalStorageResponseCardIdAndStorageSuffix'
  };
  connectionsOut('cells-product-summary-card').show_settings_dialog = {
    bind: 'permission-permanently-denied-calendar',
    'forward-to-native': true
  };


  connectionsOut('cells-product-summary-card').navigation_product_detail_to_more_info = {
    bind: 'cells-product-summary-more-info-navigation',
    link: {
      page: 'cardMoreInfo',
      params: {
        productId: 'productId'
      }
    }
  };

  connectionsOut('cells-product-summary-card').rewards_detail_link_pressed = {
    bind: 'additional-items-slotted-button-clicked-rewards'
  };

  connectionsOut('cells-product-summary-card').card_product_retry_get = {
    bind: 'cells-product-summary-reload-card'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_unmask_data = {
    bind: 'cells-product-summary-card-unmask-data'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_clipboard_channel = {
    bind: 'cells-product-summary-card-copy-card-number'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_summary_bottom_modal_message_success = {
    bind: 'cells-product-summary-card-copy-card-number-success'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_summary_bottom_modal_message_error = {
    bind: 'cells-product-summary-card-copy-card-number-error'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_summary_bottom_modal_message_error = {
    bind: 'cells-product-summary-card-unmask-data-error'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_get_cvv_channel = {
    bind: 'cells-product-summary-card-click-view-cvv'
  };
  connectionsOut('cells-product-summary-card').global_card_info_bottom_modal = {
    bind: 'config-modal-info-changed'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_info_bottom_modal = {
    bind: 'cells-product-summary-card-item-info'
  };
  connectionsOut('cells-product-summary-card').card_product_detail_patch_activations = {
    bind: 'cells-switch-item-changed'
  };
  connectionsOut('cells-product-summary-card').navigation_card_detail_to_activations = {
    bind: 'cells-product-summary-card-switch-secondary-label-click',
    link: {
      page: 'cardActivations',
      params: {
        productId: 'productId'
      }
    }
  };
  connectionsOut('cells-product-summary-card').navigation_card_detail_to_activations_from_link = {
    bind: 'cells-product-summary-card-link-clicked',
    link: {
      page: 'cardActivations',
      params: {
        productId: 'productId'
      }
    }
  };

  connectionsOut('cells-product-summary-card').card_product_detail_payment_data_help = {
    bind: 'cells-product-summary-card-payment-data-help'
  };

  connectionsOut('cells-product-summary-card').global_card_product_detail_open_modal_event = {
    bind: 'open-modal-event'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_open_modal_tutorial_event = {
    bind: 'open-modal-tutorial-event'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_update_event_calendar_reminder = {
    bind: 'update-event-calendar-reminder'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_add_event_calendar_reminder = {
    bind: 'add-event-calendar-reminder'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_open_toast_error_event = {
    bind: 'open-toast-error-event'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_open_toast_successful_event = {
    bind: 'open-toast-successful-event'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_request_permission_calendar = {
    bind: 'request-permission-calendar'
  };

  connectionsOut('cells-product-summary-card').card_product_detail_permission_permanently_denied_calendar = {
    bind: 'permission-permanently-denied-calendar'
  };

  connectionsOut('cells-product-summary-card').global_get_from_storage = {
    bind: 'get-native-local-storage'
  };

  connectionsOut('cells-product-summary-card').global_set_in_storage = {
    bind: 'set-native-local-storage'
  };

  if (CONFIG.nativeShell) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-mobile-calendar-dm',
        className: isNativeIos ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
        properties: {
          cellsConnections: {
            in: {
              card_product_detail_add_event_calendar_reminder: {
                bind: 'addEvent'
              },
              card_product_detail_update_event_calendar_reminder: {
                bind: 'modifyEvent'
              },
              card_product_detail_request_permission_calendar: {
                bind: 'requestPermission'
              }
            },
            out: {
              card_product_detail_add_event_success: {
                bind: 'add-event-success'
              },
              card_product_detail_set_data_event_added_calendar_reminder: {
                bind: 'add-event-success'
              },
              card_product_detail_add_event_error: {
                bind: 'add-event-error'
              },
              card_product_detail_modify_event_success: {
                bind: 'modify-event-success'
              },
              card_product_detail_set_data_event_updated_calendar_reminder: {
                bind: 'modify-event-success'
              },
              card_product_detail_modify_event_error: {
                bind: 'modify-event-error'
              },
              card_product_detail_request_permission_success: {
                bind: 'request-permission-success'
              },
              card_product_detail_request_permission_error: {
                bind: 'request-permission-error'
              },
              card_product_detail_calendar_not_installed: {
                bind: 'calendar-not-installed'
              }
            }
          }
        }
      }
    );
  }

  base.components.push(
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-card-summary-dm-' + COUNTRY,
      familyPath: 'glomo-card-summary-dm',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        locale: LOCAL_CURRENCY,
        cardsApiVersion: CONFIG.globalServices.versions.cards,
        apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
        short: true,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            global_glomo_card_activations_set_card_activations: {
              bind: '_onSetCardActivations'
            },
            global_glomo_card_activations_patch_card_activations: {
              bind: '_onSetCardActivations'
            },
            navigation_product_edit_alias_to_card: {
              bind: 'getProduct'
            },
            global_card_credit_card_payment_success: {
              bind: 'updateProduct'
            },
            global_product_payment_success: {
              bind: 'updateProduct'
            },
            card_product_retry_get: {
              bind: 'getProduct'
            },
            card_product_detail_get: {
              bind: 'getProduct'
            },
            card_product_detail_patch_activations_success: {
              bind: 'updateProduct'
            },
            card_activations_patch_activations_success: {
              bind: 'updateProduct'
            },
            back_to_dashboard: {
              bind: 'reset'
            },
            global_card_product_detail_reset_page: {
              bind: 'reset'
            },
            card_product_detail_sign_refresh: {
              bind: 'cancelSignature'
            },
            card_product_detail_patch_activations: {
              bind: 'patchCardActivations'
            },
            global_product_list_selected_product: {
              bind: 'setProduct'
            }, /*
            __bridge_cancelled_back_navigation: {
              bind: 'handleNativeBackButton'
            },*/
            global_opened_modal: {
              bind: 'openedModal'
            },
            card_product_detail_payment_data_help: {
              bind: 'showPaymentDataHelp'
            },
            card_product_detail_info_bottom_modal: {
              bind: 'showInfoBottomModal'
            },
            card_product_detail_get_cvv_channel: {
              bind: 'getDecryptPublicKey'
            },
            public_key_generated: {
              bind: 'getCardCvv'
            },
            set_decrypted_cvv: {
              bind: 'setParsedCvv'
            },
            rewards_detail_link_pressed: {
              bind: 'fireNavigateToProfitPointsDetailEvent'
            }
          },
          out: {
            request_card_activation: {
              bind: 'request-card-activation'
            },
            card_detail_response: {
              bind: 'card-changed'
            },
            global_card_product_selected: {
              bind: 'card-changed'
            },
            card_get_operations_product: {
              bind: 'card-response-success'
            },
            card_product_detail_selectedCurrency_channel: {
              bind: 'selected-currency-out-changed'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            card_product_detail_error_on_get_card: {
              bind: 'card-error-on-get-card'
            },
            card_set_operations_product_error: {
              bind: 'card-error-on-get-card'
            },
            global_generic_error: {
              bind: 'error-on-get-card'
            },
            card_product_detail_patch_activations_success: {
              bind: 'patch-activations-successful'
            },
            card_product_detail_error_patch_activations: {
              bind: 'error_on_patch_card_activations'
            },
            global_hanlder_native_back_button: {
              bind: 'navigate-native-back-button'
            },
            navigation_card_product_detail_back_request: {
              bind: 'navigate-to-previous-page'
            },
            global_card_payment_data_help: {
              bind: 'open-payment-data-help'
            },
            global_card_info_bottom_modal: {
              bind: 'open-info-bottom-modal'
            },
            card_product_detail_show_cvv_channel: {
              bind: 'card-cvv-info'
            },
            card_product_detail_card_cvv: {
              bind: 'parse-card-cvv'
            },
            generate_public_key: {
              bind: 'request-new-public-key'
            },
            sign_modal_open: {
              bind: 'signature-required'
            },
            sign_modal_close: {
              bind: 'parse-card-cvv'
            },
            global_generic_cvv_error: {
              bind: 'error-on-get-card-cvv'
            },
            global_card_is_crea_product_card_selected: {
              bind: 'card-is-crea-product-card'
            },
            global_card_is_card_overdraft: {
              bind: 'card-is-card-overdraft'
            },
            navigation_to_profit_points_detail: {
              bind: 'navigate-to-profit-points-detail',
              link: {
                page: 'reward'
              },
              analytics: ANALYTICS_REWARD.ACCESS_TO_POINTS_FROM_CARD_DETAIL_INTERNAL_LINK
            },
            global_card_raw_response_success: {
              bind: 'card-raw-response-success'
            }
          },
          params: {
            productId: 'productId',
            stateCards: 'stateCards',
            dashboardProductList: 'dashboard_cards'
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-clipboard-manager',
      properties: {
        cellsConnections: {
          in: {
            card_product_detail_clipboard_channel: {
              bind: 'text'
            }
          },
          out: {
            card_product_detail_clipboard_success: {
              bind: 'text-copied'
            },
            card_product_detail_clipboard_error: {
              bind: 'clipboard-error'
            }
          }
        }
      }
    },

    {
      zone: 'app__overlay',
      type: 'UI',
      tag: 'glomo-alert-manager',
      properties: {
        className: CONFIG.nativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            card_product_detail_open_modal_tutorial_event: {
              bind: 'openWithSettings'
            }
          },
          out: {
            global_card_product_detail_close_modal_tutorial_event: {
              bind: 'alert-cells-product-summary-card-modal-tutorial-calendar-reminder-first-time-code-accept'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        type: 'success',
        autoHide: true,
        cellsConnections: {
          in: {
            card_product_detail_open_toast_successful_event: {
              bind: 'open'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        type: 'error',
        autoHide: true,
        cellsConnections: {
          in: {
            card_product_detail_open_toast_error_event: {
              bind: 'open'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        autoHide: true,
        time: 3000,
        type: 'success',
        message: 'cells-molecule-card-cover-cvv-copy-number-success',
        messageDisabled: true,
        cellsConnections: {
          in: {
            card_product_detail_summary_bottom_modal_message_success: {
              bind: 'open'
            }
          },
          out: {}
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        autoHide: true,
        time: 3000,
        type: 'error',
        message: 'cells-molecule-card-cover-cvv-copy-number-error',
        messageDisabled: true,
        cellsConnections: {
          in: {
            card_product_detail_summary_bottom_modal_message_error: {
              bind: 'open'
            }
          },
          out: {}
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        type: 'success',
        autoHide: true,
        fullHeight: true,
        time: 3000,
        message: 'cells-card-detail-switch-off',
        messageDisabled: true,
        cellsConnections: {
          in: {
            card_product_detail_switch_off: {
              bind: 'open'
            }
          },
          out: {}
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        type: 'success',
        autoHide: true,
        fullHeight: true,
        time: 3000,
        message: 'cells-card-detail-switch-on',
        messageDisabled: true,
        cellsConnections: {
          in: {
            card_product_detail_switch_on: {
              bind: 'open'
            }
          },
          out: {}
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        type: 'success',
        autoHide: true,
        fullHeight: true,
        time: 3000,
        cellsConnections: {
          in: {
            card_activations_set_activations_success_message: {
              bind: 'open'
            }
          },
          out: {}
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'cells-bottom-modal-message',
      properties: {
        type: 'success',
        autoHide: true,
        fullHeight: true,
        time: 3000,
        message: 'cells-card-detail-switch-on',
        messageDisabled: true,
        cellsConnections: {
          in: {
            card_product_detail_switch_on: {
              bind: 'open'
            }
          },
          out: {}
        }
      }
    }
  );

  if (CARD_ON_OFF_ENABLED) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-switch-item',
        properties: {
          label: 'cells-switch-item-title',
          secondaryLabel: 'cells-switch-item-text',
          leftIcon: '',
          iconSize: '16',
          lightTheme: false,
          enabled: false,
          cellsConnections: {
            in: {
              card_product_detail_enable_switch: {
                bind: 'enabled'
              },
              card_product_detail_disable_switch_label: {
                bind: 'secondaryLabelDisabled'
              },
              global_card_product_detail_checked_switch_global: {
                bind: 'checked'
              }
            },
            out: {
              card_product_detail_global_switch_changed: {
                bind: 'cells-switch-item-changed'
              },
              card_activations_open_switch_info_modal: {
                bind: 'cells-switch-icon-click'
              },
              card_product_detail_secondary_label_click: {
                bind: 'cells-switch-secondary-label-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-card-activations-controller',
        properties: {
          label: 'cells-switch-item-title',
          secondaryLabel: 'cells-switch-item-text',
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          enabled: false,
          corporateCardIds: corporateCardIds,
          allowOnlyOnOffPatching: false,
          cellsConnections: {
            in: {
              global_card_product_selected: {
                bind: 'selectedCard'
              },
              request_card_activation: {
                bind: 'getCardActivations'
              },
              global_glomo_card_activations_set_card_activations: {
                bind: 'cardActivations'
              },
              card_product_detail_global_switch_changed: {
                bind: 'patchMainCardActivations'
              },
              card_product_detail_secondary_label_click: {
                bind: 'navigateToConfigByOperation'
              },
              card_activations_open_switch_info_modal: {
                bind: 'showHelpModal'
              },
              global_card_activation_first_access_config_by_operation_cancel: {
                bind: 'navigateToConfigByOperation'
              },
              global_card_activation_first_access_config_by_operation_accept: {
                bind: 'navigateToConfigByOperation'
              },
              global_card_activation_first_access_patch_main_status_true_cancel: {
                bind: 'firstAccessPatchMainStatusTrue'
              },
              global_card_activation_first_access_patch_main_status_false_cancel: {
                bind: 'firstAccessPatchMainStatusFalse'
              },
              global_card_activation_first_access_patch_main_status_true_accept: {
                bind: 'firstAccessPatchMainStatusTrue'
              },
              global_card_activation_first_access_patch_main_status_false_accept: {
                bind: 'firstAccessPatchMainStatusFalse'
              }
            },
            out: {
              card_product_detail_enable_switch: {
                bind: 'glomo-card-activations-enable-switch'
              },
              card_product_detail_disable_switch_label: {
                bind: 'glomo-card-activations-disable-switch-label'
              },
              global_glomo_card_activations_set_card_activations: {
                bind: 'glomo-card-activations-set-card-activation-success'
              },
              global_card_product_detail_checked_switch_global: {
                bind: 'glomo-card-activations-checked-switch-global'
              },
              card_product_detail_patch_activations_successful: {
                bind: 'patch-activations-successful'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              card_product_detail_switch_off: {
                bind: 'card-product-detail-switch-off'
              },
              card_product_detail_switch_on: {
                bind: 'card-product-detail-switch-on'
              },
              dashboard_pull_to_refresh_start: {
                bind: 'glomo-card-activations-refresh-dashboard'
              },
              global_glomo_card_activations_first_access: {
                bind: 'card-activations-first-access'
              },
              global_glomo_card_activations_open_modal_error: {
                bind: 'glomo-card-activations-service-error'
              },
              global_glomo_card_activations_patch_card_activations: {
                bind: 'glomo-card-activations-patch-activation-success'
              },
              global_generic_error: {
                bind: 'glomo-card-activations-patch-activation-error'
              },
              navigation_to_card_config_by_operation: {
                bind: 'navigate-to-card-config-by-operation',
                link: {
                  page: 'cardConfigByOperation',
                  params: {
                    productId: 'productId'
                  }
                }
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      }
    );
  }

  /*
  * cells-transactions-list
  */
  if (CARD.lastTransactions) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-transactions-list',
        properties: {
          hideRetryLoadTransactionsButton: false,
          productType: 'card',
          localCurrency: LOCAL_CURRENCY,
          billingPeriod: 'OPEN_PERIOD',
          pagination: 6,
          limit: 5,
          continue: 'card',
          title: 'cells-transactions-list-last-transactions',
          transactionGroupDateFormat: utils.getShortFormatDate(),
          transactionCurrentYearDateFormat: utils.getTransactionCurrentYearDateFormat(),
          skeletonItems: 4,
          imageEmptyList: './images/spaceman.svg',
          showFulfillmentStatus: true,
          maskedAmountNumberChars: VISIBLE_CHARS,
          cellsConnections: {
            in: {
              card_product_detail_transactions: {
                bind: 'transactions'
              },
              global_card_product_detail_reset_page: {
                bind: 'reset'
              },
              card_product_get_transactions_error: {
                bind: 'showMessageLoadError'
              },
              global_card_credit_card_payment_success: {
                bind: 'reset'
              },
              global_finance_transaction_execution_reset_transaction_list: {
                bind: 'reset'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'maskedAmount'
              }
            },
            out: {
              card_product_retry_get_transactions: {
                bind: 'retry-load-transactions'
              },
              navigation_product_detail_to_more_info: {
                bind: 'view-all-transactions',
                link: {
                  page: 'cardTransactions',
                  params: {
                    productType: 'productType',
                    productId: 'productId',
                    billingPeriod: 'billingPeriod'
                  }
                }
              },
              navigation_transactions_to_transaction_detail: {
                bind: 'transaction-tap',
                link: {
                  page: 'cardTransactionDetail',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId',
                    continue: 'continue'
                  }
                }
              },
              global_card_transaction_detail: {
                bind: 'transaction-detail'
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-transactions-dm-' + COUNTRY,
        familyPath: 'glomo-transactions-dm',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
          productType: 'card',
          addTransactionsType: false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          language: LANGUAGE,
          native: !!CONFIG.native,
          capitalizeTransactionTitle: false,
          cellsConnections: {
            in: {
              card_product_detail_get: {
                bind: 'getTransactions'
              },
              card_product_retry_get_transactions: {
                bind: 'getTransactions'
              },
              card_cached_transactions: {
                bind: 'fireCachedTransactions'
              },
              global_card_credit_card_payment_success: {
                bind: 'getTransactions'
              }
            },
            out: {
              card_product_detail_transactions: {
                bind: 'transactions-changed'
              },
              card_product_get_transactions_error: {
                bind: 'error-on-get-card-transactions'
              },
              global_card_product_get_transactions_error: {
                bind: 'error-on-get-card-transactions'
              },
              global_card_product_get_transactions_error_detail: {
                bind: 'error-on-get-card-transaction-detail'
              }

            },
            params: {
              productId: 'productId',
              billingPeriod: 'billingPeriod'
            }
          }
        }
      }
    );
  } else {
    base.components.push({
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-button-navigate-transactions',
      properties: {
        productGroup: 'card',
        cellsConnections: {
          in: {
            card_detail_response: {
              bind: 'product'
            },
            global_card_product_detail_reset_page: {
              bind: 'reset'
            }
          },
          out: {
            navigation_product_detail_to_transactions: {
              bind: 'urlToTransactions',
              link: {
                page: 'cardTransactions',
                params: {
                  productGroup: 'productType',
                  productId: 'productId'
                }
              }
            }
          },
          params: {
            productId: 'productId'
          }
        }
      }
    });
  }

  if (CONFIG.nativeShell) {
    base.components.push({
      zone: 'app__main',
      tag: 'cells-mobile-libmcrypt',
      type: 'UI',
      properties: {
        cellsConnections: {
          in: {
            generate_public_key: {
              bind: 'generatekpub'
            },
            card_product_detail_card_cvv: {
              bind: 'decrypt'
            }
          },
          out: {
            public_key_generated: {
              bind: 'public-key-generated'
            },
            set_decrypted_cvv: {
              bind: 'value-decrypted'
            },
            libmcrypt_error: {
              bind: 'error'
            }
          }
        }
      }
    });
  }

  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [
    'discreet_mode', 'not_first_time_calendar_reminder', 'cards_info'
  ], CONFIG);

  return base;
};
