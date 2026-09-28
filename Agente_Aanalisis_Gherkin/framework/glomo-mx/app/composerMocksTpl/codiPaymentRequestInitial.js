'use strict';

module.exports = (CONFIG) => {
  const { useNames, headerHeight, createPrefixFromPageName, SPINNER: getSpinner } = require('./common/helpers/_utils');
  const pageName = 'codiPaymentRequestInitial';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const localStorageApp = require('./common/_local-storage');
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
    hash: 'codi-payment-request-initial',
    currentPage: {
      url: '/codi-payment-request-initial'
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
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [operativePrefix + '_PAYMENT_REQUEST_INIT_PAGE']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      getSpinner(CONFIG),
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
              __bridge_page_codiPaymentRequestInitial: {
                bind: 'init'
              }
            },
            out: {
              codiPaymentRequestInitial_get_enrollment: {
                bind: 'init-page'
              },
              [operativePrefix + '_payment_request_reset_page']: {
                bind: 'reset'
              },
              [operativePrefix + '_PAYMENT_REQUEST_INIT_PAGE']: {
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
        tag: 'bbva-header-main',
        familyPath: '@bbva-web-components/bbva-header-main',
        render: 'litElement',
        properties: {
          text: 'codi-p2p-mobile-transfer-request-header',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            out: {
              [getChannelName('show_main_page')]: {
                bind: 'click',
                backStep: true
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
              'codi_payment_request_main_CODI_PAYMENT_REQUEST_SET_ITEMS_CARRUSEL': {
                bind: 'items'
              }
            },
            out: {
              [getChannelName('swipe_item_selected')]: {
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
          text: 'codi-refactor-payment-request-initial-button-text',
          variant: 'primary',
          className: 'u-display--table u-margin--center',
          cellsConnections: {
            out: {
              [getChannelName('set_local_storage_first_request_flag')]: {
                bind: 'click'
              }
            },
            in: {
              [getChannelName('set_button_text')]: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-codi-mobile-request',
        familyPath: '@glomo-web-components/bbva-manager-codi',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('swipe_item_selected')]: {
                bind: 'getPositionSwipe'
              },
              [getChannelName('set_local_storage_first_request_flag')]: {
                bind: 'setLocalstorageFirstRequestFlag'
              }
            },
            out: {
              [getChannelName('set_button_text')]: {
                bind: 'set-button-text'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-codi'
              },
              [getChannelName('open_request_page')]: {
                bind: 'navigate-to-request-page',
                backStep: true
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
              codiPaymentRequestInitial_get_enrollment: {
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
              connection_status_codiPaymentRequestInitial_online: {
                bind: 'getSendLogLostInternet'
              },
              connection_status_codiPaymentRequestInitial_offline: {
                bind: 'saveLostInternetConnection'
              },
              codiPaymentRequestInitial_post_unified_log_event_success: {
                bind: 'responseUnifiedLogSuccess'
              },
              codiPaymentRequestInitial_post_unified_log_event_error: {
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
              codiPaymentRequestInitial_unified_log_event_api_version: {
                bind: 'bbva-manager-codi-unified-log-send-version-post'
              },
              codiPaymentRequestInitial_unified_log_event_post: {
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
              codiPaymentRequestInitial_unified_log_event_api_version: {
                bind: 'apiVersionUnifedLogEvent'
              },
              codiPaymentRequestInitial_unified_log_event_post: {
                bind: 'unifiedLogEventPost'
              }
            },
            out: {
              codiPaymentRequestInitial_post_unified_log_event_success: {
                bind: 'post-unified-log-event-success'
              },
              codiPaymentRequestInitial_post_unified_log_event_error: {
                bind: 'post-unified-log-event-error'
              }
            }
          }
        }
      }
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, ['payment_first_request_completed', 'enrollment_codi_key', 'lost_internet_log', 'unified_log_timeout_session_key'], CONFIG);
  return base;
};
