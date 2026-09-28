'use strict';
module.exports = CONFIG => {
  const {
    useNames,
    createPrefixFromPageName,
    getCountry,
    getLanguage,
    getLocalCurrency,
    APP_SIDEBAR: appSidebar,
    getShortFormatDate,
    get
  } = require('./common/helpers/_utils');
  const pageName = 'codiTransactionHistory';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const localStorageApp = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = CONFIG;
  const analyticsPage = require('./analytics/_codiPaymentSend')(CONFIG);
  const base = {
    hash: 'codi-transaction-history',
    currentPage: {
      url: '/codi-transaction-history'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: isNativeIos,
        mode: 'seamed',
        cellsConnections: {
          out: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          private: true,
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
              }
            },
            out: {
              [getChannelName('init_page_init_page')]: {
                bind: 'init-page'
              },
              codiTransactionHistory_GET_ENROLLMENT_DATA: {
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
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-feature-qr-payments-p2p-codi-payment-mx',
        familyPath: '@glomo-web-components/bbva-feature-qr-payments-p2p-codi-payment-mx',
        render: 'litElement',
        properties: {
          isNativeIos: isNativeIos,
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native || false,
          pageName,
          useCryptoJS: true,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackButton'
              },
              [getChannelName('init_page_init_page')]: {
                bind: 'initPage'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlagCollection'
              },
              global_codi_transaction_history_codi_qr_payments_internal_transfer_success: {
                bind: 'movementReturnRequestSuccess'
              },
              global_codi_transaction_history_codi_qr_payments_internal_transfer_error: {
                bind: 'movementReturnRequestError'
              },
              global_codi_transaction_history_codi_qr_payments_interbank_transfer_success: {
                bind: 'movementReturnRequestSuccess'
              },
              global_codi_transaction_history_codi_qr_payments_interbank_transfer_error: {
                bind: 'movementReturnRequestError'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              global_login_success: {
                bind: 'setCustomerData'
              },
              global_storage_get_codi_payments_information_success: {
                bind: 'setDataPaymentInformation'
              },
              global_storage_get_enrollment_codi_key_success: {
                bind: 'setDataCodiEnrollment'
              },
              global_storage_get_enrollment_codi_key_error: {
                bind: 'setDataCodiEnrollment'
              },
              global_storage_get_codi_historical_notification_success: {
                bind: 'setDataCodiHistoricalNotification'
              },
              global_storage_get_codi_list_movements_success: {
                bind: 'setListmovements'
              },
              dashboard_accounts: {
                bind: 'setFirstAccountId'
              },
              [getChannelName('get_account_success')]: {
                bind: 'setAccountClabe'
              },
              [getChannelName('get_account_error')]: {
                bind: 'setAccountClabe'
              },
              [getChannelName('receipt_captured')]: {
                bind: 'shareReceipt'
              },
              TRANSFER_SUCCESS_LINK_EXTERNAL: {
                bind: 'setLogoutExternalLink'
              }
            },
            out: {
              [getChannelName('BACK_STEP')]: {
                bind: 'back-step-out-flow',
                backStep: true
              },
              global_open_native_menu: {
                bind: 'open-side-menu'
              },
              global_transaction_history_codi_qr_payments_internal_transfer: {
                bind: 'dispatch-internal-transfer-request'
              },
              global_codi_transaction_history_codi_qr_payments_interbank_transfer: {
                bind: 'dispatch-interbank-transfer-request'
              },
              global_get_from_storage: {
                bind: 'get-local-storage-codi'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-codi'
              },
              global_confirm_logout_message: {
                bind: 'codi-logout-confirm'
              },
              global_action_launcher_uri: {
                bind: 'action-launcher-external-link'
              },
              [getChannelName('set_account_id')]: {
                bind: 'set-account-id'
              },
              [getChannelName('set_share_content_receipt')]: {
                bind: 'set-share-receipt'
              },
              [getChannelName('share_receipt')]: {
                bind: 'click-share-receipt'
              },
              global_action_launcher_share_image: {
                bind: 'codi-qr-share-receipt-history'
              },
              [getChannelName('reset_receipt_history')]: {
                bind: 'reset-receipt'
              },
              [getChannelName('get_clabe_account')]: {
                bind: 'request-get-account'
              },
              codi_transaction_history_send_payment_swipe: {
                bind: 'list-swipe-action-click'
              },
              [getChannelName('send_payment')]: {
                bind: 'show-modal-payment',
                link: {
                  page: 'codiPaymentInformation'
                }
              },
              [getChannelName('dashboard-return')]: {
                bind: 'dashboard-return',
                link: {
                  page: 'dashboard'
                }
              },
              [getChannelName('show_modal_rejected')]: {
                bind: 'show-modal-rejected',
                link: {
                  page: 'codiPaymentRejected'
                }
              },
              codi_payment_postponed_set_postponed_text: {
                bind: 'send-codi-payment-postponed-text'
              },
              [getChannelName('show_modal_postponed')]: {
                bind: 'show-modal-postponed',
                link: {
                  page: 'codiPaymentPostponed'
                }
              },
              [getChannelName('navigate_to_register_page')]: {
                bind: 'navigate-to-register-page',
                link: {
                  page: 'codiBeginRegister'
                }
              },
              codiTransactionHistory_send_response_charge_message_to_log: {
                bind: 'send-response-charge-message-to-log'
              },
              codi_qr_request_error_retry_exit: {
                bind: 'exit-error-retry',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-accounts',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          cellsConnections: {
            in: {
              [getChannelName('set_account_id')]: {
                bind: 'accountId'
              },
              [getChannelName('get_clabe_account')]: {
                bind: 'getAccount'
              }
            },
            out: {
              [getChannelName('get_account_success')]: {
                bind: 'get-on-get-account'
              },
              [getChannelName('get_account_error')]: {
                bind: 'error-on-get-account'
              }
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
          country: getCountry(),
          language: getLanguage(),
          dateFormat: getShortFormatDate(),
          localCurrency: getLocalCurrency(),
          sharedReceiptStyles: {
            receiptTitle: {
              'color': '#004481',
              'font-weight': 'bold'
            }
          },
          cellsConnections: {
            in: {
              [getChannelName('reset_receipt_history')]: {
                bind: 'reset'
              },
              [getChannelName('share_receipt')]: {
                bind: 'captureReceipt'
              },
              [getChannelName('set_share_content_receipt')]: {
                bind: 'result'
              }
            },
            out: {
              [getChannelName('receipt_captured')]: {
                bind: 'receipt-captured'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytic-manager-codi',
        familyPath: '@glomo-web-components/bbva-manager-codi',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              codi_transaction_history_send_payment_swipe: {
                bind: 'analyticsStartSwipe'
              },
              codi_transaction_history_send_payment: {
                bind: 'analyticsStartDetail'
              },
              codi_transaction_history_show_modal_rejected: {
                bind: 'analyticsApplicationRejected'
              },
              codi_transaction_history_show_modal_postponed: {
                bind: 'analyticsPostponedTheShipment'
              }
            },
            out: {
              codi_transaction_history_analytic_payment_send_start_swipe: {
                bind: 'analytic-payment-send-start-swipe',
                analytics: analyticsPage.appOnClickStartCodiPaymentSend
              },
              codi_transaction_history_analytic_payment_send_start_detail: {
                bind: 'analytic-payment-send-start-detail',
                analytics: analyticsPage.appOnClickStartCodiPaymentSendDetail
              },
              codi_transaction_history_analytic_payment_send_footprint_application_rejected: {
                bind: 'analytic-payment-send-footprint-application-rejected',
                analytics: analyticsPage.footprintApplicationRejected
              },
              codi_transaction_history_analytic_payment_send_footprint_postponed_the_shipment: {
                bind: 'analytic-payment-send-footprint-postponed-the-shipment',
                analytics: analyticsPage.footprintPostponedTheShipment
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-codi-unified-log',
        familyPath: '@glomo-web-components/bbva-manager-codi',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              native_user_id: {
                bind: 'numberPhone'
              },
              global_login_success: {
                bind: 'setCustomerData'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              codiTransactionHistory_GET_ENROLLMENT_DATA: {
                bind: 'getEnrollmentData'
              },
              global_storage_get_enrollment_codi_key_success: {
                bind: 'setEnrollmentData'
              },
              global_storage_get_enrollment_codi_key_error: {
                bind: 'setEnrollmentData'
              },
              global_app_change_to_background_state: {
                bind: 'backgroundEnterLog'
              },
              global_app_change_to_foreground_state: {
                bind: 'foregrounEnterLog'
              },
              global_storage_get_lost_internet_log_success: {
                bind: 'saveGetConnectionLog'
              },
              global_storage_get_lost_internet_log_error: {
                bind: 'saveGetConnectionLog'
              },
              global_storage_get_unified_log_timeout_session_key_success: {
                bind: 'setTimeoutSessionVerified'
              },
              global_storage_get_unified_log_timeout_session_key_error: {
                bind: 'setTimeoutSessionVerified'
              },
              codi_session_timeout_expired: {
                bind: 'saveInLocalstorageTimeout'
              },
              connection_status_codiTransactionHistory_online: {
                bind: 'getSendLogLostInternet'
              },
              connection_status_codiTransactionHistory_offline: {
                bind: 'saveLostInternetConnection'
              },
              codiTransactionHistory_section_enter_unified_log: {
                bind: 'codiSectionEnterLog'
              },
              codiTransactionHistory_send_response_charge_message_to_log: {
                bind: 'webServiceInformLog'
              },
              codiTransactionHistory_post_unified_log_event_success: {
                bind: 'responseUnifiedLogSuccess'
              },
              codiTransactionHistory_post_unified_log_event_error: {
                bind: 'responseUnifiedLogError'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'get-local-storage-codi'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-codi'
              },
              codiTransactionHistory_unified_log_event_api_version: {
                bind: 'bbva-manager-codi-unified-log-send-version-post'
              },
              codiTransactionHistory_unified_log_event_post: {
                bind: 'unified-log-event-post'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-dataprovider-banxico',
        familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          apiVersion: banxicoApi,
          cellsConnections: {
            in: {
              codiTransactionHistory_unified_log_event_api_version: {
                bind: 'apiVersionUnifedLogEvent'
              },
              codiTransactionHistory_unified_log_event_post: {
                bind: 'unifiedLogEventPost'
              }
            },
            out: {
              codiTransactionHistory_post_unified_log_event_success: {
                bind: 'post-unified-log-event-success'
              },
              codiTransactionHistory_post_unified_log_event_error: {
                bind: 'post-unified-log-event-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-banxico',
        properties: {
          otpId: pageName,
          host: CONFIG.globalServices.host,
          native: CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              global_transaction_history_codi_qr_payments_internal_transfer: {
                bind: 'postInternalTransfers'
              },
              global_codi_transaction_history_codi_qr_payments_interbank_transfer: {
                bind: 'postInterbankTransfers'
              }
            },
            out: {
              global_codi_transaction_history_codi_qr_payments_internal_transfer_success: {
                bind: 'success-on-post-banxico-internal-transfer'
              },
              global_codi_transaction_history_codi_qr_payments_internal_transfer_error: {
                bind: 'error-on-post-banxico-internal-transfer'
              },
              global_codi_transaction_history_codi_qr_payments_interbank_transfer_success: {
                bind: 'success-on-post-banxico-interbank-transfer'
              },
              global_codi_transaction_history_codi_qr_payments_interbank_transfer_error: {
                bind: 'error-on-post-banxico-interbank-transfer'
              }
            }
          }
        }
      }
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-banxico', pageName, ['success-on-post-banxico-internal-transfer', 'error-on-post-banxico-internal-transfer', 'success-on-post-banxico-interbank-transfer', 'error-on-post-banxico-interbank-transfer']);
  if (CONFIG.nativeShell) {
    const getComponent = get(base);
    getComponent('bbva-feature-qr-payments-p2p-codi-payment-mx').properties.cellsConnections.out.global_open_native_menu = {
      'forward-to-native': true
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }
  localStorageApp.addOutStorageChannels(base.components, [
    'banxico_push_status',
    'codi_list_movements',
    'codi_historical_notification',
    'enrollment_codi_key',
    'codi_payments_information',
    'lost_internet_log',
    'unified_log_timeout_session_key'
  ], CONFIG);

  return base;
};
