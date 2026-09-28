'use strict';
module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    createSpinner,
    getLanguage,
    getLocalCurrency,
    getCountry,
    getAlternativeFormatDate,
    getShortFormatDate,
    headerHeight
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages');
  const pageName = 'codiPaymentRequestSuccess';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const paymentRequestPage = pages(CONFIG)(pageName);
  const localStorageApp = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = CONFIG;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
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
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const handleLifeCycle = {
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
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          __bridge_page_codiPaymentRequestSuccess: {
            bind: 'init'
          },
          __bridge_app: {
            bind: 'navigation'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          codiPaymentRequestSuccess_get_enrollment: {
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
      backAction: 'navigation-to-dashboard',
      cellsConnections: {
        in: {
          [getChannelName('exit_codi_request_mobile')]: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('CLOSE_PAGE')]: {
            bind: 'navigation-to-dashboard',
            skipHistory: true,
            link: {
              page: 'codiQrScanner'
            }
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      text: 'codi-p2p-mobile-transfer-request-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [getChannelName('show_main_page')]: {
            bind: 'click',
            link: {
              page: 'codiQrScanner'
            }
          }
        }
      }
    }
  };
  const successfulResponse = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    type: 'UI',
    properties: {
      withoutHead: true,
      formatDate: getAlternativeFormatDate(),
      language: getLanguage(),
      headerTitle: 'codi-p2p-mobile-transfer-request-header',
      localCurrency: getLocalCurrency(),
      operative: 'paymentRequestMainPage',
      operationsListLayout: 'review',
      maskedMessageVisibleChars: true,
      page: 'codiPaymentRequestSuccess',
      cellsConnections: {
        in: {
          codi_payment_successful_review: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('share_receipt')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('exit_codi_request_mobile')]: {
            bind: 'go-to-next'
          },
          [getChannelName('request_success')]: {
            bind: 'go-to-next'
          }
        }
      }
    }
  };
  const shareOperativeReceipt = {
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
          [getChannelName('init_page')]: {
            bind: 'reset'
          },
          [getChannelName('share_receipt')]: {
            bind: 'captureReceipt'
          },
          'codi_payment_request_main_codi_payment_successful_receive': {
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
  };
  const managerCodi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-mobile-request',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('receipt_captured')]: {
            bind: 'shareReceipt'
          }
        },
        out: {
          global_action_launcher_share_image: {
            bind: 'request-mobile-share-receipt'
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
          codiPaymentRequestSuccess_get_enrollment: {
            bind: 'getEnrollmentData'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
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
          global_storage_get_unified_log_timeout_session_key_success: {
            bind: 'setTimeoutSessionVerified'
          },
          global_storage_get_unified_log_timeout_session_key_error: {
            bind: 'setTimeoutSessionVerified'
          },
          codi_session_timeout_expired: {
            bind: 'saveInLocalstorageTimeout'
          },
          connection_status_codiPaymentRequestSuccess_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiPaymentRequestSuccess_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiPaymentRequestSuccess_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiPaymentRequestSuccess_post_unified_log_event_error: {
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
          codiPaymentRequestSuccess_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiPaymentRequestSuccess_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderBanxico = {
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiPaymentRequestSuccess_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiPaymentRequestSuccess_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiPaymentRequestSuccess_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiPaymentRequestSuccess_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-payment-request-success',
    currentPage: {
      url: '/codi-payment-request-success'
    },
    pages: paymentRequestPage,
    template,
    components: [
      handleLifeCycle,
      navigationHandler,
      header,
      successfulResponse,
      shareOperativeReceipt,
      cellsConnectionStatus(pageName),
      managerCodi,
      createSpinner(CONFIG),
      managerCodiLog,
      dataProviderBanxico
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);

  return base;
};
