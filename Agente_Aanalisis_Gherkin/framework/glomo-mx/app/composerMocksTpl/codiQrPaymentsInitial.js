'use strict';

module.exports = (CONFIG) => {
  const localStorageApp = require('./common/_local-storage');
  const {
    createPrefixFromPageName,
    createSpinner,
    headerHeight,
    useNames
  } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'codiQrPaymentsInitial';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analyticsPage = require('./analytics/_codiQrPayments')(CONFIG);
  const codiEnrollment = 'enrollment_codi_key';
  const codiLostInternetLogKey = 'lost_internet_log';
  const unifiedLogTimeOutSessionKey = 'unified_log_timeout_session_key';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const codiBanxicoPushLog = 'banxico_push_unified_log_event';
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = CONFIG;
  const base = {
    hash: 'codi-qr-payments-initial',
    currentPage: {
      url: '/codi-qr-payments-initial'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: 'dark-blue-bg',
        headerFixed: true,
        headerHeight,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      cellsConnectionStatus(pageName),
      createSpinner(CONFIG),
      cellsConnectionStatus(pageName),
      {
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
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('INIT_PAGE')]: {
                bind: 'init-page'
              },
              about_reset_page: {
                bind: 'reset'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              codiQrPaymentsInitial_get_enrollment: {
                bind: 'init-page'
              },
              codiQrPaymentsInitial_get_push_data: {
                bind: 'init-page'
              }
            }
          }
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
              [getChannelName('INIT_PAGE')]: {
                bind: 'validateInitialPage'
              },
              set_localstorage_flag: {
                bind: 'setLocalstorageFlag'
              },
              ['global_storage_get_first_time_qr_payments_completed_success']: {
                bind: 'verifyFirstTime'
              },
              ['global_storage_get_first_time_qr_payments_completed_error']: {
                bind: 'verifyFirstTime'
              },
              ['global_storage_get_enrollment_codi_key_success']: {
                bind: 'queryLocalstorageData'
              },
              ['global_storage_get_enrollment_codi_key_error']: {
                bind: 'queryLocalstorageData'
              },
              ['connection_status_' + pageName + '_offline']: {
                bind: 'networkDisconnected'
              },
              connection_status_codiQrPaymentsInitial_online: {
                bind: 'networkReconnected'
              },
              qr_payments_steps_no_connection_accept: {
                bind: 'serviceDefaultApp'
              },
              qr_payments_steps_no_connection_cancel: {
                bind: 'serviceDefaultAppCancel'
              },
              [getChannelName('set_name_item_selected')]: {
                bind: 'nameSelect'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'get-local-storage-codi'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-codi'
              },
              global_set_enrollment_data: {
                bind: 'send-enrollment-data'
              },
              [getChannelName('qr_payments_disconnected')]: {
                bind: 'codi-offline-step-page',
                analytics: analyticsPage.errorConnection
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-alert-modal'
              },
              [getChannelName('global_qr_payments_navigate_to')]: {
                bind: 'navigate-to-qr-codi-page',
                link: {
                  page: 'qrScanner',
                  skipHistory: true
                }
              },
              [getChannelName('set_items_carrusel')]: {
                bind: 'set-items-carrusel'
              },
              [getChannelName('set_main_button_name')]: {
                bind: 'second-name'
              },
              [getChannelName('set_second_button_name')]: {
                bind: 'main-name'
              },
              codi_qr_payments_initial_connected_successful: {
                bind: 'connected-successful',
                analytics: analyticsPage.errorConnection
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'bbva-header-main',
        familyPath: '@bbva-web-components/bbva-header-main',
        render: 'litElement',
        properties: {
          text: 'codi-payment-qr-operations-with',
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
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-carousel-swipe',
        familyPath: '@bbva-web-components/bbva-carousel-swipe',
        render: 'litElement',
        properties: {
          variant: 'full-width',
          cellsConnections: {
            in: {
              [getChannelName('set_items_carrusel')]: {
                bind: 'items'
              }
            },
            out: {
              [getChannelName('set_name_item_selected')]: {
                bind: 'carousel-swipe-item-select'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          text: 'codi-payment-qr-operations-with',
          variant: 'primary',
          className: 'u-display--table u-margin--center u-margin-bottom--1',
          cellsConnections: {
            in: {
              [getChannelName('set_main_button_name')]: {
                bind: 'text'
              },
              [getChannelName('set_second_button_name')]: {
                bind: 'text'
              },
              out: {
                set_localstorage_flag: {
                  bind: 'click'
                },
                [getChannelName('codi_redirect_qr_success_page')]: {
                  bind: 'click',
                  link: {
                    page: 'codiQrPaymentsReaderSuccess',
                    skipHistory: true
                  },
                  analytics: analyticsPage.appPageVisit
                }
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
              codiQrPaymentsInitial_get_enrollment: {
                bind: 'getEnrollmentData'
              },
              codiQrPaymentsInitial_get_push_data: {
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
              connection_status_codiQrPaymentsInitial_online: {
                bind: 'getSendLogLostInternet'
              },
              connection_status_codiQrPaymentsInitial_offline: {
                bind: 'saveLostInternetConnection'
              },
              codiQrPaymentsInitial_post_unified_log_event_success: {
                bind: 'responseUnifiedLogSuccess'
              },
              codiQrPaymentsInitial_post_unified_log_event_error: {
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
              codiQrPaymentsInitial_unified_log_event_api_version: {
                bind: 'bbva-manager-codi-unified-log-send-version-post'
              },
              codiQrPaymentsInitial_unified_log_event_post: {
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
              codiQrPaymentsInitial_unified_log_event_api_version: {
                bind: 'apiVersionUnifedLogEvent'
              },
              codiQrPaymentsInitial_unified_log_event_post: {
                bind: 'unifiedLogEventPost'
              }
            },
            out: {
              codiQrPaymentsInitial_post_unified_log_event_success: {
                bind: 'post-unified-log-event-success'
              },
              codiQrPaymentsInitial_post_unified_log_event_error: {
                bind: 'post-unified-log-event-error'
              }
            }
          }
        }
      }
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['first_time_qr_payments_completed', codiEnrollment, codiBanxicoPushLog, codiLostInternetLogKey, unifiedLogTimeOutSessionKey], CONFIG);
  return base;
};
