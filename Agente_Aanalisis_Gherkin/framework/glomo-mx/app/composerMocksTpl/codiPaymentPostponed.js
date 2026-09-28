'use strict';

module.exports = (CONFIG) => {
  const localStorageApp = require('./common/_local-storage');
  const {
    createPrefixFromPageName,
    headerHeight,
    createSpinner,
    useNames
  } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'codiPaymentPostponed';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
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
          [getChannelName('PAYMENT_POSTPONED_PAGE')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: ''
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
          __bridge_page_codiPaymentPostponed: {
            bind: 'init'
          }
        },
        out: {
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          codiPaymentPostponed_get_enrollment: {
            bind: 'init-page'
          },
          codiPaymentPostponed_get_push_data: {
            bind: 'init-page'
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
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'primary-alt',
      iconRightPrimary: '',
      accessibilityTextIconRightPrimary: '',
      className: isNativeIos && 'u-padding-top--0',
      rightButtons: [
        {
          id: 'btn-close',
          name: 'Close',
          icon: 'spherica:close',
          accessibilityText: 'bbva-help-modal-close-button',
          label: 'bbva-help-modal-close-button',
          defaultEventIconName: 'click'
        }
      ]
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      heading: 'codi-refactor-payment-postponed-page-heading-panel-info',
      microillustration: 'pending',
      cellsConnections: {
        in: {
          codi_payment_postponed_set_postponed_text: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      heading: 'codi-refactor-payment-postponed-page-heading-panel-info-spherica',
      className: 'u-margin--1 u-margin-bottom--0',
      text: 'codi-refactor-payment-postponed-page-heading-panel-info-description-spherica',
      isIcon: true,
      headingLevelTitle: 'h3',
      variant: 'pending',
      microillustration: '',
      newCellsConnections: {
        remove: {
          in: [
            'codi_payment_postponed_set_postponed_text'
          ]
        }
      }
    }
  };
  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-bottom--0',
      cellsConnections: {
        in: {
          codi_payment_postponed_set_postponed_text: {
            bind: 'message'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      bookTitle: true,
      newCellsConnections: {
        add: {
          in: {
            codi_payment_postponed_set_postponed_text_spherica: {
              bind: 'messageTitle'
            }
          }
        },
        remove: {
          in: [
            'codi_payment_postponed_set_postponed_text'
          ]
        }
      }
    }
  };
  const buttonDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
      isRejected: false,
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
          [pageName + '_get_enrollment']: {
            bind: 'getEnrollmentAndMovementsData'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setDataCodiEnrollment'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setDataCodiEnrollment'
          },
          global_storage_get_codi_historical_notification_success: {
            bind: 'rawNotificationsData'
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
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          [getChannelName('set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'request-get-account'
          },
          codi_payment_postponed_set_postponed_text: {
            bind: 'send-codi-payment-postponed-text'
          },
          [getChannelName('codi_payment_postponed_notification')]: {
            bind: 'post-notification-postponed'
          },
          [getChannelName('analytic_postponed_payment')]: {
            bind: 'analityc-postponed-payment'
          },
          codiPaymentPostponed_send_payment_status_to_unified_log: {
            bind: 'send-payment-status-to-unified-log'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            codi_payment_postponed_set_postponed_text_spherica: {
              bind: 'send-codi-payment-postponed-text-spherica'
            }
          }
        },
        remove: {
          out: [
            'codi_payment_postponed_set_postponed_text'
          ]
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
          [getChannelName('codi_payment_postponed_notification')]: {
            bind: 'notificationPost'
          },
          codiPaymentPostponed_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiPaymentPostponed_unified_log_event_post: {
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
          codiPaymentPostponed_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiPaymentPostponed_post_unified_log_event_error: {
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
          codiPaymentPostponed_get_enrollment: {
            bind: 'getEnrollmentData'
          },
          codiPaymentPostponed_get_push_data: {
            bind: 'getFromLocalStoragePushLog'
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
          global_storage_get_banxico_push_unified_log_event_success: {
            bind: 'pushReceptionLog'
          },
          global_storage_get_banxico_push_unified_log_event_error: {
            bind: 'pushReceptionLog'
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
          connection_status_codiPaymentPostponed_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiPaymentPostponed_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiPaymentPostponed_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiPaymentPostponed_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          show_main_page: {
            bind: 'codiSectionLeaveLog'
          },
          codiPaymentPostponed_send_payment_status_to_unified_log: {
            bind: 'setPaymentStatus'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiPaymentPostponed_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiPaymentPostponed_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-payment-postponed',
    currentPage: {
      url: '/codi-payment-postponed'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      lifeCycle,
      headerMain,
      panelInfo,
      managerCodi,
      managerAccounts,
      cellsConnectionStatus(pageName),
      managerBanxico,
      managerCodiLog
    ]
  };
  if (isSpherica) {
    base.components.push(notificationMessage);
  } else {
    base.components.push(buttonDefault);
  }
  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'codi_historical_notification', 'banxico_push_unified_log_event', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);

  return sphericaPageUtils.spherize(base);
};
