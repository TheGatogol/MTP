'use strict';

module.exports = (CONFIG) => {
  const pages = require('./common/_pages');
  const {
    createPrefixFromPageName,
    createSpinner,
    getAlternativeFormatDate,
    getCountry,
    getLanguage,
    getLocalCurrency,
    getShortFormatDate,
    headerHeight,
    useNames
  } = require('./common/helpers/_utils');
  const pageName = 'codiPaymentInformationSuccess';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const codiPaymentInformationSuccess = pages(CONFIG)(pageName);
  const analyticsPage = require('./analytics/_codiPaymentSend')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const isNativeiOS = CONFIG.nativeIos || false;
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
      iOSFixedHeader: isNativeiOS,
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
          codiPaymentInformationSuccess_get_enrollment: {
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
              page: 'dashboard'
            }
          },
          dashboard_refresh_financial_overview: {
            bind: 'navigation-to-dashboard'
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'codi-refactor-payment-request-button-send-money',
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
      formatDate: getAlternativeFormatDate(),
      language: getLanguage(),
      headerTitle: 'codi-refactor-payment-information-header-title',
      localCurrency: getLocalCurrency(),
      operative: pageName,
      operationsListLayout: 'review',
      maskedMessageVisibleChars: true,
      page: pageName,
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
          },
          [getChannelName('message_link_clicked')]: {
            bind: 'on-click-message'
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
          codi_send_payment_successful_receive: {
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
    tag: 'bbva-manager-codi-mobile-payment',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('receipt_captured')]: {
            bind: 'shareReceipt'
          },
          set_banxico_external_link: {
            bind: 'banxicoExternalLink'
          },
          [getChannelName('message_link_clicked')]: {
            bind: 'manageLinkExternalLogout'
          },
          TRANSFER_SUCCESS_LINK_EXTERNAL: {
            bind: 'setLogoutExternalLink'
          }
        },
        out: {
          global_action_launcher_share_image: {
            bind: 'request-mobile-share-receipt'
          },
          [getChannelName('analytic_amount_payment_send')]: {
            bind: 'analytic-amount-payment-send'
          },
          GLOBAL_CONFIRM_LOGOUT_MESSAGE: {
            bind: 'codi-logout-confirm'
          },
          global_action_launcher_uri: {
            bind: 'action-launcher-external-link'
          },
          [getChannelName('analytic_step_confirm_account_payment')]: {
            bind: 'analytic-step-confirm-account-payment',
            analytics: analyticsPage.stepConfiguration('confirm payment')
          },
          [getChannelName('analytic_step_otp_payment')]: {
            bind: 'analytic-step-otp-payment'
          }
        }
      }
    }
  };
  const managerAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('analytic_amount_payment_send')]: {
            bind: 'amountPaymentSend'
          }
        },
        out: {
          [getChannelName('analytic_step_confirm_account_payment')]: {
            bind: 'analytic-step-confirm-account-payment',
            analytics: analyticsPage.stepConfiguration('confirm payment')
          },
          [getChannelName('analytic_step_otp_payment')]: {
            bind: 'analytic-step-otp-payment'
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
          codiPaymentInformationSuccess_get_enrollment: {
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
          connection_status_codiPaymentInformationSuccess_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiPaymentInformationSuccess_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiPaymentInformationSuccess_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiPaymentInformationSuccess_post_unified_log_event_error: {
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
          codiPaymentInformationSuccess_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiPaymentInformationSuccess_unified_log_event_post: {
            bind: 'unified-log-event-post'
          },
          codiPaymentInformationSuccess_analytic_click_amount: {
            bind: 'analytic-click-amount',
            analytics: analyticsPage.stepFinish
          },
          codiPaymentInformationSuccess_analytic_step_confirm_account_payment: {
            bind: 'analytic-step-confirm-account-payment',
            analytics: analyticsPage.stepConfiguration('confirm payment')
          },
          codiPaymentInformationSuccess_analytic_step_otp_payment: {
            bind: 'analytic-step-otp-payment',
            analytics: analyticsPage.stepConfiguration('otp')
          }
        }
      }
    }
  };

  const dataProviderCodiBanxico = {
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
          codiPaymentInformationSuccess_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiPaymentInformationSuccess_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiPaymentInformationSuccess_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiPaymentInformationSuccess_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-payment-information-success',
    currentPage: {
      url: '/codi-payment-information-success'
    },
    pages: codiPaymentInformationSuccess,
    template,
    components: [
      handleLifeCycle,
      navigationHandler,
      header,
      successfulResponse,
      shareOperativeReceipt,
      managerCodi,
      managerAnalytic,
      createSpinner(CONFIG),
      cellsConnectionStatus(pageName),
      managerCodiLog,
      dataProviderCodiBanxico
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);

  return base;
};
