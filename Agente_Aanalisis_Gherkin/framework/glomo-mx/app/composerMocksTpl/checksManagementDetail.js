/* eslint-disable new-cap, no-dupe-keys */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('checksManagementDetail');
  const isNativeIos = CONFIG.nativeIos || false;
  const CROSS_COMPONENTS = require('./common/_cross-components');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const ANALYTICS_CHECKS_MANAGEMENT_LIST = require('./analytics/_checksManagementList')('checksManagementDetail');
  const ANALYTICS_CHECKS_MANAGEMENT_CANCEL = require('./analytics/_checksManagementCancel')('checksManagementDetail');

  const LANGUAGE = utils.getLanguage(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const FORMAT_DATE = utils.getShortFormatDate();
  const FORMAT_HOUR = 'HH:mm [h]';

  const base = {
    hash: 'checks-management-detail',
    currentPage: {
      url: '/checks-management/detail',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        preventScrollWithOverlay: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding dark-blue-bg' : 'dark-blue-bg',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            checks_deposits_detail_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: {}
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        tag: 'cells-molecule-header',
        type: 'UI',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-checks-management-detail-header-title',
          cellsConnections: {
            in: {},
            out: {
              checks_deposits_detail_to_continue: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksManagementDetail',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              '__bridge_page_checksManagementDetail': {
                bind: 'init'
              }
            },
            out: {
              checks_deposits_detail_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_MANAGEMENT_LIST.managementList('detalle'),
                featureFlag: ANALYTICS_CHECKS_MANAGEMENT_LIST.ANALYTICS_FEATURE_FLAG
              },
              checks_deposits_detail_reset_page: {
                bind: 'reset'
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
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-transaction-detail',
        properties: {
          localCurrency: utils.getLocalCurrency(CONFIG),
          operationsListLayout: 'review',
          showStatus: true,
          shareTransaction: true,
          infoBox: true,
          customDetail: true,
          textBoxType: 'info-dark-blue',
          cellsConnections: {
            in: {
              check_set_main_detail: {
                bind: 'mainTransaction'
              },
              check_set_detail: {
                bind: 'transaction'
              },
              checks_deposits_detail_reset_page: {
                bind: 'reset'
              }
            },
            out: {
              check_detail_alert_modal: {
                bind: 'navigation-to-coming-soon'
              },
              check_detail_navigation_to_page: {
                bind: 'navigation-to-page',
                link: {
                  page: 'checksManagement'
                }
              },
              check_detail_create_image_share: {
                bind: 'share-transaction-receipt-capture'
              }
            },
            params: {
              checkId: 'checkId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        type: 'UI',
        properties: {
          language: LANGUAGE,
          localCurrency: LOCAL_CURRENCY,
          maxLineWidth: 40,
          cellsConnections: {
            in: {
              check_detail_set_result_share: {
                bind: 'result'
              },
              check_detail_create_image_share: {
                bind: 'captureReceipt'
              },
              global_share_receipt_error_accept: {
                bind: 'retryOperation'
              },
              checks_deposits_detail_init_page: {
                bind: 'reset'
              }
            },
            out: {
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              checks_deposits_detail_captured: {
                bind: 'receipt-captured'
              },
              global_alert_manager_open_with_settings: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-check-management-manager-detail',
        familyPath: 'glomo-check-management-manager',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          language: LANGUAGE,
          locale: utils.getLocalCurrency(CONFIG),
          localCurrency: utils.getLocalCurrency(CONFIG),
          formatDate: FORMAT_DATE,
          formatHour: FORMAT_HOUR,
          cellsConnections: {
            in: {
              checks_deposits_detail_reset_page: {
                bind: 'reset'
              },
              checks_deposits_detail_captured: {
                bind: 'shareDetail'
              },
              account_get_operations_product: {
                bind: 'setAccountInfo'
              },
              navigation_product_detail_to_checks_section: {
                bind: 'setAccountInfo'
              },
              checks_deposits_handle_share_detail_error: {
                bind: 'handleShareDetailError'
              },
              global_checks_section_navigate_to_checks_management: {
                bind: 'setProducts'
              },
              check_detail_alert_modal: {
                bind: 'goOpenAlertModal'
              }
            },
            out: {
              check_set_detail: {
                bind: 'glomo-check-detail-parsed'
              },
              check_set_main_detail: {
                bind: 'glomo-check-detail-main-parsed'
              },
              check_detail_set_result_share: {
                bind: 'glomo-check-detail-parsed-share'
              },
              checks_deposits_detail_open_share_image: {
                bind: 'checks-deposits-share-detail'
              },
              global_retry_error: {
                bind: 'glomo-check-detail-get-retry-error'
              },
              global_generic_error: {
                bind: 'checks-deposits-detail-share-error'
              },
              checks_deposits_detail_go_back: {
                bind: 'checks-deposits-detail-go-back',
                backStep: true
              },
              global_open_modal_checks_management: {
                bind: 'checks-deposits-open-modal',
                analytics: ANALYTICS_CHECKS_MANAGEMENT_CANCEL.cancel('confirmacion', 'Glomo'),
                featureFlag: ANALYTICS_CHECKS_MANAGEMENT_CANCEL.ANALYTICS_FEATURE_FLAG
              },
              check_detail_open_body_cancel: {
                bind: 'checks-deposits-cancel-check'
              }
            },
            params: {
              checkId: 'checkId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-action-launcher',
        properties: {
          cellsConnections: {
            in: {
              checks_deposits_detail_open_share_image: {
                bind: 'shareImage'
              }
            },
            out: {
              checks_deposits_handle_share_detail_error: {
                bind: 'error-share-image'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-checks-management-dm',
        type: 'DM',
        properties: {
          hideCustomerContactMessage: true,
          customerContact: true,
          host: CONFIG.globalServices.host,
          native: CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          customersApiVersion: CONFIG.globalServices.versions.customers,
          language: LANGUAGE,
          paymentDateFormat: 'DD MMMM YYYY',
          accountLength: 4,
          cancelCheck: true,
          cellsConnections: {
            in: {
              global_checks_section_navigate_to_checks_management: {
                bind: 'setProducts'
              },
              dashboard_customer_email: {
                bind: 'customerContact'
              },
              checks_management_open_info_modal: {
                bind: 'openChecksManagementInfoModal'
              },
              checks_management_leave_the_page: {
                bind: 'reset'
              },
              checks_management_reset_steps: {
                bind: 'reset'
              },
              checks_management_simulation_ready: {
                bind: 'confirmChecksManagementAuthorize'
              },
              global_open_modal_exit_checks_management: {
                bind: 'postCheckbooksManageNonConsecutiveChecks'
              },
              global_checks_management_set_check_data: {
                bind: 'parseCheckData'
              },
              checks_management_edit_check: {
                bind: 'sendData'
              },
              checks_management_delete_check: {
                bind: 'confirmDeleteCheck'
              },
              global_glomo_alert_manager_modal_delete_check_management_accept: {
                bind: 'deleteCheck'
              },
              global_cache_channel: {
                bind: 'getCustomerInfo'
              },
              global_app_settings_channel: {
                bind: 'setAppSettingsParams'
              },
              check_detail_open_body_cancel: {
                bind: 'bodyCancelCheck'
              }
            },
            out: {
              global_checks_management_open_info_modal: {
                bind: 'open-info-modal'
              },
              global_checks_management_reset_process: {
                bind: 'checks-management-reset-process'
              },
              checks_management_set_selected_account: {
                bind: 'glomo-checks-management-set-selected-account'
              },
              checks_management_set_selected_account_id: {
                bind: 'glomo-checks-management-set-selected-account-id'
              },
              checks_management_set_products: {
                bind: 'glomo-checks-management-set-products'
              },
              checks_management_set_check_data: {
                bind: 'glomo-checks-management-set-checks-data'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              checks_management_simulation: {
                bind: 'checks-management-authorize-confirm-operation'
              },
              global_checks_management_response: {
                bind: 'checks-management-cancel-go-to-review',
                link: {
                  page: 'checksManagementCancelReview'
                }
              },
              global_checks_management_go_to_edit_check: {
                bind: 'checks-management-send-check-data',
                link: {
                  page: 'checksManagementAddCheck'
                }
              },
              checks_management_delete_check_confirmed: {
                bind: 'checks-management-delete-check-confirmed'
              },
              checks_management_reset_steps: {
                bind: 'checks-management-go-to-review'
              },
              checks_management_set_icon_message_text: {
                bind: 'checks-management-set-icon-message-text'
              },
              global_checks_management_set_account_currency_code: {
                bind: 'glomo-checks-management-set-account-currency'
              },
              global_checks_management_set_account_local_currency: {
                bind: 'glomo-checks-management-set-account-currency'
              },
              global_checks_management_set_edit_mode: {
                bind: 'checks-management-set-edit-mode'
              },
              global_retry_error: {
                bind: 'retry-error-manage-non-consecutive-checks'
              }
            }
          }
        }
      }
    ]
  };


  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-checks-management-dm', 'checksManagement', ['checks-management-cancel-go-to-review', 'error-on-post-checkbooks-manage-non-consecutive-checks', 'close-sign-modal']);

  addRetryErrors(base)([
    {
      id: 'checks-deposits-detail-error',
      acceptRetry: { bind: 'getCheckDetail', component: 'glomo-check-management-manager-detail' },
      acceptRetry: { bind: 'postCheckbooksManageNonConsecutiveChecks', component: 'glomo-checks-management-dm' },
      cancelRetry: { bind: 'leaveThePage', component: 'glomo-opx-checks-management' },
      finishRetry: { bind: 'leaveThePage', component: 'glomo-opx-checks-management' },
      successEvent: { bind: 'glomo-check-detail-parsed', component: 'glomo-check-management-manager-detail'},
      cancelRetry: { bind: 'goBackToListSearching', component: 'glomo-check-management-manager-detail' },
      finishRetry: { bind: 'goBackToListSearching', component: 'glomo-check-management-manager-detail' }
    }
  ]);

  //Add common errors
  addCommonErrors(base.components)();
  const connectionsOut = utils.connectionsOut(base);

  connectionsOut('cells-sign-operation-dm-mx').checks_management_sign_close_modal_analytics = {
    bind: 'signature-cancel-checksManagement'
  };

  connectionsOut('cells-sign-operation-dm-mx').checks_management_sign_open_modal = {
    bind: 'signature-required',
    analytics: ANALYTICS_CHECKS_MANAGEMENT_CANCEL.cancel('otp', 'Glomo'),
    featureFlag: ANALYTICS_CHECKS_MANAGEMENT_CANCEL.ANALYTICS_FEATURE_FLAG
  };

  return base;
};