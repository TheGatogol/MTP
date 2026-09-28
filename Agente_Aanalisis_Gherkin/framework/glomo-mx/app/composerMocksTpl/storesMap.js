/* eslint-disable no-shadow */
'use strict';
module.exports = CONFIG => {
  const PAGENAME = 'storesMap';
  const localStorage = require('./common/_local-storage');
  const utils = require('./common/helpers/_utils');
  const LANGUAGE = utils.getLanguage();
  const PHONE_NUMBER = CONFIG.phoneNumberContact;
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_storesMap')();
  const base = {
    hash: 'storesMap',
    currentPage: {
      url: '/stores-map'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGENAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGENAME]: {
                bind: 'init'
              }
            },
            out: {
              [PAGENAME + '_init_page']: {
                bind: 'init-page'
              },
              global_storage_check_mobile_services: {
                bind: 'init-page'
              },
              ['global_' + PAGENAME + '_reset_page']: {
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
        tag: 'promotions-stores-map',
        familyPath: '@bbva-web-components-widgets/promotions-stores-map',
        render: 'litElement',
        properties: {
          apiKey: CONFIG.mapsApiKey,
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          iOSFixedHeader: isNativeIos,
          promotionsApiVersion: CONFIG.globalServices.versions.promotionsV1,
          storesApiVersion: CONFIG.globalServices.versions.promotionsStoresV1,
          categoriesApiVersion: CONFIG.globalServices.versions.promotionsCategories,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          language: LANGUAGE,
          phoneNumber: PHONE_NUMBER,
          showHelp: false,
          mapSearchMode: 'CENTER',
          mapStoresSource: 'POINTS',
          promotionTypes: [ 'LOYALTY_POINTS' ],
          defaultGeoLocation: CONFIG.defaultGeoLocation,
          categoryImagesFromService: true,
          callCenterButtonHide: true,
          cellsConnections: {
            in: {
              [PAGENAME + '_init_page']: {
                bind: 'initMain'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackNavigation'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              promotions_stores_map_check_state_success: {
                bind: 'checkLocationPermissions'
              },
              promotions_stores_map_check_state_error: {
                bind: 'locationPermissionsError'
              },
              promotions_stores_map_request_success: {
                bind: 'locationPermissionsSuccess'
              },
              promotions_stores_map_request_error: {
                bind: 'locationPermissionsError'
              },
              promotions_stores_map_permissions_plugin_not_installed: {
                bind: 'locationDisabledError'
              },
              web_view_visibility: {
                bind: 'checkAppVisibility'
              },
              promotions_stores_map_position_available: {
                bind: 'setCurrentPosition'
              },
              promotions_stores_map_position_error: {
                bind: 'locationDisabledError'
              }
            },
            out: {
              promotions_stores_map_launcher_dialer: {
                bind: 'promotions-stores-map-call-to-bank'
              },
              promotions_stores_map_send_email: {
                bind: 'promotions-stores-map-send-email'
              },
              promotions_stores_map_send_open_link: {
                bind: 'promotions-stores-map-open-link'
              },
              global_action_launcher_maps: {
                bind: 'promotions-stores-map-show-route'
              },
              stores_map_go_to_p2p_dashboard: {
                bind: 'promotions-stores-map-go-to-back',
                backStep: true
              },
              promotions_stores_map_open_settings: {
                bind: 'promotions-stores-map-go-to-settings',
                'forward-to-native': true
              },
              promotions_stores_map_check_location_permissions: {
                bind: 'promotions-stores-map-check-location-permissions'
              },
              promotions_stores_map_request_location_permissions: {
                bind: 'promotions-stores-map-request-location-permission'
              },
              promotions_stores_map_request_permission: {
                bind: 'promotions-stores-map-request-location-permission'
              },
              promotions_stores_map_get_current_position: {
                bind: 'promotions-stores-map-get-current-position'
              },
              promotions_stores_map_stores_success: {
                bind: 'promotions-stores-map-success-stores',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintWhereToPay', 'storesMap')
              },
              promotions_stores_map_stores_list_visible: {
                bind: 'promotions-stores-map-visible-stores-list',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintWhereToPayList', 'storesMap')
              },
              promotions_stores_map_visible: {
                bind: 'promotions-stores-map-visible-map',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintWhereToPay', 'storesMap')
              },
              promotions_stores_map_store_detail_visible: {
                bind: 'promotions-stores-map-visible-store-detail',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintStoreDetail', 'storesMap')
              },
              promotions_stores_map_filter_modal_visible: {
                bind: 'promotions-stores-map-visible-categories',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintFindStore', 'storesMap')
              },
              promotions_stores_map_call_to_store: {
                bind: 'promotions-stores-map-call-to-store'
              },
              promotions_stores_map_promotion_list: {
                bind: 'promotions-stores-map-visible-promotion-list'
              },
              promotions_stores_map_stores_success_with_filter: {
                bind: 'promotions-stores-map-success-stores-with-filter',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintSearchResult', 'storesMap')
              },
              promotions_stores_map_stores_empty_with_filter_list: {
                bind: 'promotions-stores-map-empty-stores-with-filter-list',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintNoSearchResultList', 'storesMap')
              },
              promotions_stores_map_stores_empty_with_filter_map: {
                bind: 'promotions-stores-map-empty-stores-with-filter-map',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintNoSearchResultMap', 'storesMap')
              },
              promotions_stores_map_stores_empty_list: {
                bind: 'promotions-stores-map-empty-stores-list',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintNoSearchResultList', 'storesMap')
              },
              promotions_stores_map_stores_empty_map: {
                bind: 'promotions-stores-map-empty-stores-map',
                analytics: ANALYTICS._getAdvancedFootprint('fingerPrintNoSearchResultMap', 'storesMap')
              },
              promotions_stores_map_location_error: {
                bind: 'promotions-stores-map-location-error',
                analytics: ANALYTICS._getAdvancedFootprint('allowLocationError', 'allowLocationError')
              },
              promotions_stores_map_location_disabled_error: {
                bind: 'promotions-stores-map-location-disabled-error'
              },
              promotions_stores_map_promotions_error_call_to_bank_modal: {
                bind: 'promotions-stores-map-promotions-error'
              },
              promotions_stores_map_stores_error_call_to_bank_modal: {
                bind: 'promotions-stores-map-stores-error'
              },
              promotions_stores_map_stores_error_call_to_bank_modal_last: {
                bind: 'promotions-stores-map-reach-maximum-attempts-stores-error',
                analytics: ANALYTICS._getAdvancedFootprint('informationNotAvailableError', 'informationNotAvailableError')
              },
              promotions_stores_map_categories_error_call_to_bank_modal: {
                bind: 'promotions-stores-map-categories-error-error'
              },
              promotions_stores_map_categories_legend_error_call_to_bank_modal: {
                bind: 'promotions-stores-map-categories-error-map-legend-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-rewards-landing',
        familyPath: '@glomo-web-components/bbva-manager-rewards-landing',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              promotions_stores_map_send_email: {
                bind: 'openExternalUri'
              },
              promotions_stores_map_send_open_link: {
                bind: 'openExternalUri'
              }
            },
            out: {
              global_action_launcher_uri: {
                bind: 'bbva-manager-rewards-landing-open-external-uri'
              }
            }
          }
        }
      }
    ]
  };
  if (CONFIG.native) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-permissions-plugin',
        properties: {
          cellsConnections: {
            in: {
              promotions_stores_map_check_location_permissions: {
                bind: 'checkState'
              },
              promotions_stores_map_request_location_permissions: {
                bind: 'request'
              }
            },
            out: {
              promotions_stores_map_check_state_success: {
                bind: 'permissions-check-state-success'
              },
              promotions_stores_map_check_state_error: {
                bind: 'permissions-check-state-error'
              },
              promotions_stores_map_request_success: {
                bind: 'permissions-request-success'
              },
              promotions_stores_map_request_error: {
                bind: 'permissions-request-error'
              },
              promotions_stores_map_permissions_plugin_not_installed: {
                bind: 'error-permissions-plugin-not-installed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-geolocation',
        properties: {
          cellsConnections: {
            in: {
              promotions_stores_map_get_current_position: {
                bind: 'getCurrentPosition'
              }
            },
            out: {
              promotions_stores_map_position_available: {
                bind: 'current-position-available'
              },
              promotions_stores_map_position_error: {
                bind: 'error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-nativesettings',
        properties: {
          cellsConnections: {
            in: {
              promotions_stores_map_open_settings: {
                bind: 'openSetting'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-plugin-action-launcher',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              promotions_stores_map_launcher_dialer: {
                bind: 'getOpenDialer'
              }
            }
          }
        }
      }
    );
  }
  localStorage.addOutStorageChannels(base.components, [ 'mobile_services' ], CONFIG);
  return base;
};