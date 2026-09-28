'use strict';

module.exports = config => {
  const {
    createPrefixFromPageName,
    createSpinner,
    getAlternativeFormatDate,
    getCountry,
    getLanguage,
    getLocalCurrency,
    getCurrencyCode,
    getShortFormatDate,
    headerHeight,
    useNames
  } = require('./common/helpers/_utils');
  const pageName = 'codiQrPaymentsReceipt';
  const localStorageApp = require('./common/_local-storage');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)('codiQrPaymentsReceipt');
  const analyticsPage = require('./analytics/_codiQrPayments')(config);
  const isNativeIos = config.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = config;
  const base = {
    hash: 'codi-qr-payments-receipt',
    currentPage: {
      url: '/codi-qr-payments-receipt'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        className: `dark-blue-bg ${config.nativeIos ? 'ios-top-padding' : ''}`,
        headerHeight,
        iOSFixedHeader: isNativeIos,
        mode: 'seamed'
      },
      propertiesSpherica: {
        className: `${isNativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: '',
        headerFixed: true
      }
    },
    components: [
      cellsConnectionStatus(pageName),
      createSpinner(config),
      cellsConnectionStatus(pageName),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          titleName: 'codi-payment-qr-payments-receipt-header-title',
          className: 'header--darker-green',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          cellsConnections: {
            out: {
              navigation_codi_qr_payment_to_dashboard: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          variant: 'primary',
          rightIcon: 'coronita:close',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
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
              [pageName + '_INIT_PAGE']: {
                bind: 'init-page'
              },
              codiQrPaymentsReceipt_get_enrollment: {
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
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        properties: {
          formatDate: getAlternativeFormatDate(),
          language: getLanguage(),
          cellsConnections: {
            in: {
              send_qr_payment_successful: {
                bind: 'result'
              }
            },
            out: {
              [getChannelName('message_link_clicked')]: {
                bind: 'on-click-message'
              },
              share_receipt: {
                bind: 'share-receipt-capture'
              },
              navigate_to_qr_payments_main: {
                bind: 'go-to-next',
                link: {
                  page: 'dashboard'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          localCurrency: getLocalCurrency(),
          currencyCode: getCurrencyCode(),
          disableButtons: true,
          operationListClass: 'centered-items',
          operationsVariant: 'primary-alt'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-dashboard',
          cellsConnections: {
            in: {
              navigation_codi_qr_payment_to_dashboard: {
                bind: 'goBack'
              }
            },
            out: {
              navigation_codi_qr_payment_receipt_close: {
                bind: 'navigation-to-dashboard',
                skipHistory: true,
                link: { page: 'dashboard' }
              },
              dashboard_refresh_financial_overview: {
                bind: 'navigation-to-dashboard'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
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
              init_page: {
                bind: 'reset'
              },
              share_receipt: {
                bind: 'captureReceipt'
              },
              qr_payment_successful_voucher: {
                bind: 'result'
              }
            },
            out: {
              receipt_captured: {
                bind: 'receipt-captured'
              }
            },
            params: {
              result: 'qrPayments'
            }
          }
        },
        propertiesSpherica: {
          country: 'mxGlobal'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-codi-qr-payments',
        familyPath: '@glomo-web-components/bbva-manager-codi',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              set_banxico_external_link: {
                bind: 'banxicoExternalLink'
              },
              receipt_captured: {
                bind: 'shareReceipt'
              },
              [getChannelName('message_link_clicked')]: {
                bind: 'manageLinkExternalLogout'
              },
              TRANSFER_SUCCESS_LINK_EXTERNAL: {
                bind: 'setLogoutExternalLink'
              },
              connection_status_codiQrPaymentsReceipt_offline: {
                bind: 'networkDisconnected'
              },
              connection_status_codiQrPaymentsReceipt_online: {
                bind: 'networkReconnected'
              }
            },
            out: {
              global_action_launcher_share_image: {
                bind: 'request-mobile-share-receipt'
              },
              GLOBAL_CONFIRM_LOGOUT_MESSAGE: {
                bind: 'codi-logout-confirm'
              },
              global_action_launcher_uri: {
                bind: 'action-launcher-external-link'
              },
              codi_qr_payments_receipt_connected_successful: {
                bind: 'connected-successful',
                analytics: analyticsPage.errorConnection
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
              codiQrPaymentsReceipt_get_enrollment: {
                bind: 'getEnrollmentData'
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
              connection_status_codiQrPaymentsReceipt_online: {
                bind: 'getSendLogLostInternet'
              },
              connection_status_codiQrPaymentsReceipt_offline: {
                bind: 'saveLostInternetConnection'
              },
              codiQrPaymentsReceipt_post_unified_log_event_success: {
                bind: 'responseUnifiedLogSuccess'
              },
              codiQrPaymentsReceipt_post_unified_log_event_error: {
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
              codiQrPaymentsReceipt_unified_log_event_api_version: {
                bind: 'bbva-manager-codi-unified-log-send-version-post'
              },
              codiQrPaymentsReceipt_unified_log_event_post: {
                bind: 'unified-log-event-post'
              }
            }
          }
        }
      },
      {
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
              codiQrPaymentsReceipt_unified_log_event_api_version: {
                bind: 'apiVersionUnifedLogEvent'
              },
              codiQrPaymentsReceipt_unified_log_event_post: {
                bind: 'unifiedLogEventPost'
              }
            },
            out: {
              codiQrPaymentsReceipt_post_unified_log_event_success: {
                bind: 'post-unified-log-event-success'
              },
              codiQrPaymentsReceipt_post_unified_log_event_error: {
                bind: 'post-unified-log-event-error'
              }
            }
          }
        }
      }
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, ['enrollment_codi_key', 'lost_internet_log', 'unified_log_timeout_session_key'], config);
  return sphericaPageUtils.spherize(base);
};
