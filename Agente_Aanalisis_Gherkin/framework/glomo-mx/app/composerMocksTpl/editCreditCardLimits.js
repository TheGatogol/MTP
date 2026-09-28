'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('editCreditCardLimits');
  const PAGE_NAME = 'editCreditCardLimits';
  const PAGE_NAME_CHANNEL = 'edit_credit_card_limits';
  const PAGE_NAME_CHANNEL_ADDITIONAL = 'edit_credit_card_limits_additional';// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.properties.className = 'solid-spinner';
  SPINNER.properties.cellsConnections.in.additional_card_detail_navigation_to_card_balance_limit_update = {
    bind: 'open'
  };
  SPINNER.properties.cellsConnections.in.list_credit_card_limits_init_page = {
    bind: 'show'
  };
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const {disconnectedBanner, cellsConnectionStatus} = require('./common/_cross-components');
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_operationalLimits')({});
  const ADDITIONAL_ANALYTICS = require('./analytics/_additionalCardBalanceLimitsUpdate')({});


  const base = {
    hash: 'edit-credit-card-limits',
    currentPage: {
      url: '/edit-credit-card-limits/:productId',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
          },
          out: {
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_reset_page']: {
                bind: 'reset'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          continue: 'card',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_set-limit-title-molecule']: {
                bind: 'titleName'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_check_page_closure']: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'header-left-button',
          cellsConnections: {
            in: {
            },
            out: {
            },
            params: {
              productId: 'productId',
              continue: 'continue'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-limits-configuration',
        properties: {
          showMaxDisposedInsteadMaxLimit: true,
          showIconInRangeMessageSection: true,
          language: LANGUAGE,
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_send_data_to_cells_limits_configuration']: {
                bind: 'setProperties'
              },
              global_edit_card_limits_exit_navigate_to_back: {
                bind: 'clearInput'
              },
              [PAGE_NAME_CHANNEL + '_close_page']: {
                bind: 'clearInput'
              },
              ['card_Detail_set_flag_debit_limits']: {
                bind: 'isDebitCard'
              },
              [PAGE_NAME_CHANNEL + '_set_hide_info_message_value']: {
                bind: 'hideInfoMessage'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_check_page_closure']: {
                bind: 'cells-limits-configuration-cancel'
              },
              [PAGE_NAME_CHANNEL + '_open_title_help_button_modal']: {
                bind: 'cells-limits-configuration-type-heading-help'
              },
              [PAGE_NAME_CHANNEL + '_input_value_changed']: {
                bind: 'amount-input-changed'
              },
              [PAGE_NAME_CHANNEL + '_put_limits_request']: {
                bind: 'cells-limits-configuration-accept'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_put_limits_request']: {
                bind: 'cells-limits-configuration-accept'
              },
              [PAGE_NAME_CHANNEL + '_amount_input_focus']: {
                bind: 'amount-input-focus'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_amount_input_focus']: {
                bind: 'amount-input-focus'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-edit-credit-card-limits-manager',
        tag: 'glomo-edit-credit-card-limits-manager-mx',
        properties: {
          bulletsInModal: {
            TEXT_CREDIT_ATM_DAILY: 7,
            TEXT_DEBIT_ATM_DAILY: 7,
            TEXT_CREDIT_POS_DAILY: 6,
            TEXT_DEBIT_POS_DAILY: 5,
            TEXT_OPERATIVE_CREDIT_POS_DAILY: 4
          },
          className: '',
          language: LANGUAGE,
          localCurrency: LOCAL_CURRENCY,
          multipleLimitsById: {
            ATM_DAILY: 100,
            POS_DAILY: 50,
            GRANTED_CREDIT: 100
          },
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_check_page_closure']: {
                bind: 'checkPageClosure'
              },
              ['card_Detail_set_flag_debit_limits']: {
                bind: 'isDebitCard'
              },
              global_navigation_to_additional_card_detail: {
                bind: 'additionalCard'
              },
              global_get_additional_card_orange_data_success: {
                bind: 'card'
              },
              list_credit_card_limits_send_limits_list_to_edit: {
                bind: 'limitSelectedAction'
              },
              blue_list_credit_card_limits_send_limits_list_to_edit: {
                bind: 'limitSelectedAction'
              },
              global_edit_card_limits_exit_navigate_to_back: {
                bind: 'checkPageClosure'
              },
              [PAGE_NAME_CHANNEL + '_open_title_help_button_modal']: {
                bind: 'openTitleHelpModal'
              },
              [PAGE_NAME_CHANNEL + '_input_value_changed']: {
                bind: 'inputValue'
              },
              [PAGE_NAME_CHANNEL + '_put_limits_request']: {
                bind: 'putLimits'
              },
              [PAGE_NAME_CHANNEL + '_new_limit_update_success']: {
                bind: 'successUpdateLimits'
              },
              [PAGE_NAME_CHANNEL + '_new_limit_update_error']: {
                bind: 'onErrorUpdateLimits'
              },
              global_edit_credit_card_limits_error_modal_accept: {
                bind: 'putLimits'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_get_card_limits_response']: {
                bind: 'parseAdditionalCardLimits'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_error_on_get_card_limits']: {
                bind: 'errorAdditionalCardLimits'
              },
              additional_card_detail_navigation_to_card_balance_limit_update: {
                bind: 'additionalLimitAction'
              },
              global_edit_card_limits_common_end_close: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_end_accept: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_not_valid_field_close: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_not_valid_field_accept: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_get_limits_close: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_put_limits_close: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_get_limits_exit: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_put_limits_exit: {
                bind: 'manageGoBack'
              },
              global_edit_card_limits_common_get_limits_retry: {
                bind: 'getLimits'
              },
              global_edit_card_limits_common_put_limits_retry: {
                bind: 'putLimits'
              },
              global_opened_modal: {
                bind: 'closedModal'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'checkPageClosure'
              },
              [PAGE_NAME_CHANNEL + '_init_page']: {
                bind: 'sendFlagHideInfoMessage'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_close_page']: {
                bind: 'close-page',
                backStep: true
              },
              global_edit_card_limits_show_exit_confirm: {
                bind: 'show-exit-modal'
              },
              [PAGE_NAME_CHANNEL + '_send_data_to_cells_limits_configuration']: {
                bind: 'send-data-to-cells-limits-configuration'
              },
              [PAGE_NAME_CHANNEL + '_set-limit-title-molecule']: {
                bind: 'set-limit-title-molecule-header'
              },
              [PAGE_NAME_CHANNEL + '_send_parameters_to_service']: {
                bind: 'send-parameters-to-service'
              },
              [PAGE_NAME_CHANNEL + '_put_new_card_limit']: {
                bind: 'credit-card-limits-put-limits-service-request'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_put_new_card_limit']: {
                bind: 'additional-credit-card-limits-put-limits-service-request'
              },
              [PAGE_NAME_CHANNEL + '_reset_limits_list_prev_page_page_data']: {
                bind: 'reset-limits-list'
              },
              global_open_glomo_alert_manager_edit_title_modal: {
                bind: 'open-title-limits-edit-help-modal'
              },
              global_open_glomo_alert_manager_limits_update_success: {
                bind: 'open-limits-edit-success-modal'
              },
              global_open_glomo_alert_manager_additional_limits_update_success: {
                bind: 'open-limits-edit-additional-success-modal'
              },
              global_open_glomo_alert_manager_edit_credit_card_limits_error_modal: {
                bind: 'open-edit-credit-card-limits-error-modal'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_get_current_limits']: {
                bind: 'get-current-limits'
              },
              additional_card_detail_limits_set_product_id: {
                bind: 'set-additional-product-id'
              },
              additional_card_detail_get_card_detail_data: {
                bind: 'get-card-detail-data'
              },
              global_card_detail_data_refresh: {
                bind: 'detail-data-refresh'
              },
              global_card_detail_card_detail_data_reload: {
                bind: 'detail-data-refresh'
              },
              additional_card_detail_limits_card_details_data: {
                bind: 'set-additional-card-detail'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              CLOSE_MODAL: {
                bind: 'native-back-close-modal'
              },
              [PAGE_NAME_CHANNEL + '_set_hide_info_message_value']: {
                bind: 'send-value-to-cells-limits-configuration'
              },
              [PAGE_NAME_CHANNEL + '_card_id_from_credit_card']: {
                bind: 'set-credit-card-id'
              }
            },
            params: {
              productId: 'productId',
              limitSelected: 'limitSelected'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_send_parameters_to_service']: {
                bind: 'setProperties'
              },
              [PAGE_NAME_CHANNEL + '_put_new_card_limit']: {
                bind: 'putCardLimit'
              },
              [PAGE_NAME_CHANNEL + '_card_id_from_credit_card']: {
                bind: 'cardId'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_new_limit_update_success']: {
                bind: 'put-card-limits-response'
              },
              [PAGE_NAME_CHANNEL + '_new_limit_update_error']: {
                bind: 'error-on-put-card-limits'
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          native: CONFIG.native || false,
          headers: { 'Accept-Language': 'es' },
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_send_parameters_to_service']: {
                bind: 'setProperties'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_get_current_limits']: {
                bind: 'getCardLimits'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_put_new_card_limit']: {
                bind: 'putCardLimit'
              },
              [PAGE_NAME_CHANNEL + '_card_id_from_credit_card']: {
                bind: 'cardId'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_new_limit_update_success']: {
                bind: 'put-card-limits-response'
              },
              [PAGE_NAME_CHANNEL + '_new_limit_update_error']: {
                bind: 'error-on-put-card-limits'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_get_card_limits_response']: {
                bind: 'get-card-limits-response'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_error_on_get_card_limits']: {
                bind: 'error-on-get-card-limits'
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/glomo-analytics-operational-limits-configuration-manager',
        tag: 'glomo-analytics-operational-limits-configuration-manager-mx',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'getPageStatus'
              },
              global_get_card_orange_data_success: {
                bind: 'getProductInfo'
              },
              global_get_additional_card_orange_data_success: {
                bind: 'getProductInfo'
              },
              additional_card_detail_navigation_to_card_balance_limit_update: {
                bind: 'fireAppOnClickStartAdditional'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_get_card_limits_response']: {
                bind: 'fireAppPageVisit'
              },
              list_credit_card_limits_send_limits_list_to_edit: {
                bind: 'fireAppPageVisit'
              },
              [PAGE_NAME_CHANNEL + '_new_limit_update_success']: {
                bind: 'fireAppCompleted'
              },
              [PAGE_NAME_CHANNEL + '_new_limit_update_error']: {
                bind: 'firePageError'
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_error_on_get_card_limits']: {
                bind: 'fireUnavailableInfoError'
              },
              global_open_glomo_alert_manager_edit_title_modal: {
                bind: 'fireLimitsInfo'
              },
              [PAGE_NAME_CHANNEL + '_amount_input_focus']: {
                bind: 'fireInputFocus'
              },
              [PAGE_NAME_CHANNEL + '_put_limits_request']: {
                bind: 'fireAcceptButtonPressed'
              },
              [PAGE_NAME_CHANNEL + '_open_title_help_button_modal']: {
                bind: 'firePageViewInformationPurchaseLimits'
              },
              set_product_info: {
                bind: 'getProductInfo'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_analytics_fire_app_page_visit']: {
                bind: 'analytics-app-page-visit',
                analytics: ANALYTICS.APP_PAGE_VISIT,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_fire_app_started']: {
                bind: 'analytics-app-started',
                analytics: ANALYTICS.APP_STARTED,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_fire_app_completed']: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS.APP_COMPLETED,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_page_view']: {
                bind: 'analytics-page-view',
                analytics: ANALYTICS.PAGE_ERROR,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL + '_analytics_fire_page_view_information_purchase_limits']: {
                bind: 'analytics-page-view-information-purchase-limits',
                analytics: ANALYTICS._getAdvancedFootprint('informacion limite de compras'),
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_analytics_fire_app_on_click_start']: {
                bind: 'analytics-app-on-click-start-additional',
                analytics: ADDITIONAL_ANALYTICS.APP_ON_CLICK_START,
                featureFlag: ADDITIONAL_ANALYTICS.ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_analytics_fire_app_page_visit']: {
                bind: 'analytics-app-page-visit-additional',
                analytics: ADDITIONAL_ANALYTICS.APP_PAGE_VISIT,
                featureFlag: ADDITIONAL_ANALYTICS.ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_analytics_fire_app_started']: {
                bind: 'analytics-app-started-additional',
                analytics: ADDITIONAL_ANALYTICS.APP_STARTED,
                featureFlag: ADDITIONAL_ANALYTICS.ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_analytics_fire_app_completed']: {
                bind: 'analytics-app-completed-additional',
                analytics: ADDITIONAL_ANALYTICS.APP_COMPLETED,
                featureFlag: ADDITIONAL_ANALYTICS.ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_analytics_unavailable_info_error']: {
                bind: 'analytics-unavailable-info-error',
                analytics: ADDITIONAL_ANALYTICS.UNAVAILABLE_ERROR,
                featureFlag: ADDITIONAL_ANALYTICS.ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
              },
              [PAGE_NAME_CHANNEL_ADDITIONAL + '_not_performed_operation_error']: {
                bind: 'analytics-not-performed-operation-error',
                analytics: ADDITIONAL_ANALYTICS.NOT_PERFORMED_ERROR,
                featureFlag: ADDITIONAL_ANALYTICS.ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
              }
            }
          }
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector(
    'cells-dm-global-apis-cards-bgadpmock',
    'editCreditCardLimits',
    [
      'put-card-limits-response',
      'error-on-put-card-limits',
      'get-card-limits-response',
      'error-on-get-card-limits'
    ]
  );

  base.components.push(disconnectedBanner(PAGE_NAME), cellsConnectionStatus(PAGE_NAME));

  return base;
};
