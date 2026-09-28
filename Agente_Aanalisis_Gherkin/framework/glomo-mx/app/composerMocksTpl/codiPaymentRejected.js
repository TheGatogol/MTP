'use strict';

module.exports = (CONFIG) => {
  const localStorageApp = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'codiPaymentRejected';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analyticsPage = require('./analytics/_codiPaymentSend')(CONFIG);
  const { createPrefixFromPageName, headerHeight, createSpinner, useNames} = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      headerHeight,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          PAYMENT_REJECTED_PAGE: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_codiPaymentRejected: {
            bind: 'init'
          }
        },
        out: {
          codiPaymentRejected_get_enrollment: {
            bind: 'init-page'
          },
          codiPaymentRejected_get_push_data: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          initialize_app_lifecycle_observer: {
            bind: 'init-page',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'codi-refactor-payment-request-header-send-money',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [getChannelName('show_main_page')]: {
            bind: 'click',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      text: 'codi-refactor-payment-rejected-page-text-panel-info',
      heading: 'codi-refactor-payment-rejected-page-heading-panel-info',
      microillustration: 'caution'
    }
  };
  const bbvaButton = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      text: 'codi-refactor-payment-go-out-button-text',
      variant: 'primary',
      className: 'u-display--table u-margin--center',
      cellsConnections: {
        out: {
          [getChannelName('show_main_page')]: {
            bind: 'click',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };
  const managerCodi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-mobile-payment',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      isRejected: true,
      cellsConnections: {
        in: {
          dashboard_accounts: {
            bind: 'setFirstAccountId'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          global_storage_get_banxico_push_status_success: {
            bind: 'setAccountsValidate'
          },
          [getChannelName('get_enrollment')]: {
            bind: 'getEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setDataCodiEnrollment'
          },
          [getChannelName('get_account_success')]: {
            bind: 'getAccountClabe'
          },
          [getChannelName('get_account_error')]: {
            bind: 'getAccountClabe'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'readNotice'
          },
          [getChannelName('post_notification_success')]: {
            bind: 'notificationResponse'
          },
          [getChannelName('post_notification_error')]: {
            bind: 'notificationResponse'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          [getChannelName('set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'request-get-account'
          },
          [getChannelName('codi_payment_rejected_notification')]: {
            bind: 'post-notification-rejected'
          },
          [getChannelName('analytic_rejected_payment')]: {
            bind: 'analityc-rejected-payment'
          },
          codiPaymentRejected_send_payment_status_to_unified_log: {
            bind: 'send-payment-status-to-unified-log'
          }
        }
      }
    }
  };
  const managerBanxico = {
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      apiVersion: CONFIG.globalServices.versions.banxicoApi,
      cellsConnections: {
        in: {
          [getChannelName('codi_payment_rejected_notification')]: {
            bind: 'notificationPost'
          },
          codiPaymentRejected_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiPaymentRejected_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          [getChannelName('post_notification_success')]: {
            bind: 'post-notification-success'
          },
          [getChannelName('post_notification_error')]: {
            bind: 'post-notification-error'
          },
          codiPaymentRejected_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiPaymentRejected_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };
  const managerAccounts = {
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
  };

  const managerCodiLog = {
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
          codiPaymentRejected_get_enrollment: {
            bind: 'getEnrollmentData'
          },
          codiPaymentRejected_get_push_data: {
            bind: 'getFromLocalStoragePushLog'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
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
          global_storage_get_banxico_push_unified_log_event_success: {
            bind: 'pushReceptionLog'
          },
          global_storage_get_banxico_push_unified_log_event_error: {
            bind: 'pushReceptionLog'
          },
          codiPaymentRejected_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiPaymentRejected_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          show_main_page: {
            bind: 'codiSectionLeaveLog'
          },
          codiPaymentRejected_send_payment_status_to_unified_log: {
            bind: 'setPaymentStatus'
          },
          connection_status_codiPaymentRejected_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiPaymentRejected_offline: {
            bind: 'saveLostInternetConnection'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiPaymentRejected_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiPaymentRejected_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-payment-rejected',
    currentPage: {
      url: '/codi-payment-rejected'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      lifeCycle,
      headerMain,
      panelInfo,
      bbvaButton,
      cellsConnectionStatus(pageName),
      managerCodi,
      managerBanxico,
      managerAccounts,
      managerCodiLog
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'banxico_push_unified_log_event', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);

  return base;
};
