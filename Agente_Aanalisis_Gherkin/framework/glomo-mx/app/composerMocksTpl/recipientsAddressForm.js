'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'recipientsAddressForm';
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const ANALYTICS = require('./analytics/_recipients')();
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('recipients-address-form');
  const HOST = CONFIG.globalServices.host;

  const base = {
    hash: 'mx-address-form',
    currentPage: {
      url: '/recipients-address-form'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: `dark-blue-bg ${ isNativeIos ? 'ios-top-padding' : ''}`,
        fixOffsetScroll: 0,
        footerHeight: 100,
        headerFixed: true,
        headerHeight: utils.headerHeight,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_INIT_PAGE']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME ]: {
                bind: 'init'
              },
              [PAGE_NAME + '_NAVIGATION_TO_PREVIOUS_PAGE']: {
                bind: 'reset'
              }
            },
            out: {
              [PAGE_NAME + '_INIT_PAGE']: {
                bind: 'init-page'
              },
              [PAGE_NAME + '_RESET']: {
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
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-previous-page',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'goBack'
              }
            },
            out: {
              [PAGE_NAME + '_NAVIGATION_TO_PREVIOUS_PAGE']: {
                bind: 'navigation-to-previous-page',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-header-main',
        tag: 'bbva-header-main',
        render: 'litElement',
        properties: {
          variant: 'modal-three-level',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          text: 'profile-recipient-add-recipients',
          cellsConnections: {
            out: {
              [PAGE_NAME + '_EXIT_ADDRESS_PROCESS']: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-aggregation-profile-recipients-address',
        tag: 'bbva-aggregation-profile-recipients-address',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME + '_DATA_PLACES']: {
                bind: 'getDataAddress'
              },
              RECIPIENT_SET_ADDRESS_EDDIDED: {
                bind: 'setAddresData'
              },
              [PAGE_NAME + '_RESET']: {
                bind: 'reset'
              }
            },
            out: {
              [PAGE_NAME + '_DISPATCH_GET_PLACES']: {
                bind: 'get-places-recipients'
              },
              [PAGE_NAME + '_DISPATCH_NEW_ADDRESS_DATA']: {
                bind: 'aggregation-profile-recipients-new-address-data'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-profile-recipients',
        tag: 'bbva-manager-profile-recipients',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME + '_DISPATCH_GET_PLACES']: {
                bind: 'getPlacesRecipients'
              },
              [PAGE_NAME + '_LIST_PLACES_RESPONSE_SUCCESS']: {
                bind: 'geographicPlacesSuccess'
              },
              [PAGE_NAME + '_GEOGRAPHIC_PLACES_ERROR']: {
                bind: 'onGeographicPlacesError'
              },
              [PAGE_NAME + '_DISPATCH_NEW_ADDRESS_DATA']: {
                bind: 'handleNewAddressData'
              },
              [PAGE_NAME + '_EXIT_ADDRESS_PROCESS']: {
                bind: 'manageBackNavigation'
              },
              global_recipients_modal_exit: {
                bind: 'manageBackNavigation'
              }
            },
            out: {
              [PAGE_NAME + '_REQUEST_LIST_PLACES']: {
                bind: 'get-places-from-zip-code'
              },
              [PAGE_NAME + '_DATA_PLACES']: {
                bind: 'recipients-data-address'
              },
              global_generic_error: {
                bind: 'fullmodal-error',
                analytics: ANALYTICS.OPERATION_NOT_AVAILABLE
              },
              RECIPIENT_SET_NEW_ADDRESS_DATA: {
                bind: 'manager-profile-recipients-set-new-address-data',
                link: {
                  page: 'recipientsForm'
                }
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-exit-modal'
              },
              [PAGE_NAME + '_EXIT_PROCESS']: {
                bind: 'accept-modal-exit-process'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-geographicplaces',
        properties: {
          host: HOST,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_REQUEST_LIST_PLACES']: {
                bind: 'getListPlaces'
              }
            },
            out: {
              [PAGE_NAME + '_LIST_PLACES_RESPONSE_SUCCESS']: {
                bind: 'set-list-places'
              },
              [PAGE_NAME + '_GEOGRAPHIC_PLACES_ERROR']: {
                bind: 'error-on-get-list-places'
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'recipient-address-form-error',
      acceptRetry: { bind: 'getPlacesRecipients', component: 'bbva-manager-profile-recipients' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-manager-profile-recipients' },
      finishRetry: { bind: 'goBack', component: 'glomo-navigation-handler'}
    }
  ]);
  return base;
};
