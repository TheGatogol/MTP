/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const localStorage = require('./common/_local-storage');
  const CROSS_COMPONENTS = require('./common/_cross-components');
  const COUNTRY = utils.getCountry(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('loading');
  const glomoOpenDocument = utils.glomoOpenDocument(CONFIG);

  const base = {
    hash: COUNTRY + '-loading',
    currentPage: {
      url: '/loading',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        animationType: 'static'
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'loading',
          customInitEvents: {
            'loading-page-ready': true,
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_loading: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              loading_page_ready: {
                bind: 'loading-page-ready',
                'forward-to-native': true
              },
              loading_reset_page: {
                bind: 'reset'
              },
              loading_init_page: {
                bind: 'init-page'
              },
              global_first_page_loaded: {
                bind: 'init-page-first-time'
              },
              global_nativeconnector_device_info_get_nfc_status: {
                bind: 'init-page'
              },
              global_nativeconnector_device_info_is_google_play_services_available: {
                bind: 'init-page-first-time'
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
        type: 'CC',
        tag: 'glomo-feature-flag-manager',
        properties: {
          cellsConnections: {
            in: {
              global_login_success: {
                bind: 'requestFeatureFlagCollection'
              },
              global_native_featureflag: {
                bind: 'requestFeatureFlagCollection'
              },
              global_request_feature_flag: {
                bind: 'requestFeatureFlagCollection'
              },
              global_storage_get_feature_flag_success: {
                bind: 'featureFlagCollection'
              }
            },
            out: {
              global_feature_flag_collection_updated: {
                bind: 'feature-flag-collection-updated'
              },
              global_feature_flag_available_operations: {
                bind: 'new-product-detail-operations'
              },
              global_feature_flag_feedback_config: {
                bind: 'new-feedback-config'
              },
              global_get_from_storage: {
                bind: 'get-native-local-storage'
              },
              global_feature_stand_in_status: {
                bind: 'feature-flag-stand-in-status'
              },
              global_feature_stand_in_status_transactions: {
                bind: 'feature-flag-stand-in-status-movements'
              },
              global_feature_flag_profile_sections: {
                bind: 'new-profile-sections'
              },
              global_feature_card_transactions_status: {
                bind: 'feature-flag-card-transactions-status'
              },
              global_feature_flag_stand_in_movements_adittional_cards: {
                bind: 'feature-flag-stand-in-movements-adittional-cards'
              },
              global_feature_account_transactions_status: {
                bind: 'feature-flag-account-transactions-status'
              },
              global_feature_pending_account_transactions_status: {
                bind: 'feature-flag-pending-account-transactions-status'
              },
              global_feature_flag_inapp_crm: {
                bind: 'feature-flag-inapp-crm'
              },
              global_feature_flag_futura_collections: {
                bind: 'new-futura-collections'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'cells-dm-global-apis-customers',
        tag: 'cells-dm-global-apis-customers-mx',
        properties: {
          host: CONFIG.globalServices.host,
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          authenticationType: CONFIG.globalServices.customers.headers.authenticationType,
          native: CONFIG.native || false,
          cellsConnections: {
            in: {
              dashboard_get_list_biometrics: {
                bind: 'getListBiometrics'
              }
            },
            out: {
              dashboard_list_biometrics_success: {
                bind: 'get-list-biometrics-success'
              },
              dashboard_list_biometrics_error: {
                bind: 'get-list-biometrics-error'
              }
            }
          }
        }
      }
    ]
  };

  CROSS_COMPONENTS.common(CONFIG, 'loading').map(component => base.components.push(component));
  localStorage.addOutStorageChannels(base.components, CONFIG.localStorageKeys, CONFIG);
  base.components.push(glomoOpenDocument);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-manager-widgets-error-handler', 'widgetErrorHandler', [ 'close-otp-modal' ]);
  signConnector(glomoOpenDocument.tag, 'openDocument', ['open-document-open-by-url-success', 'open-document-open-by-url-error']);

  return base;
};
