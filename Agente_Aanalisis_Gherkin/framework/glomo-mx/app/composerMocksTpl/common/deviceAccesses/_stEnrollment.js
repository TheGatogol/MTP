'use strict';
/**
 * PAGES EXTENDED: [stEnrollment, stEnrollmentAllInOne]
 * CONTROLLER: glomo-device-accesses-ar-st-controller
 * Base page for the SOFT TOKEN flow pages. Has common channel logic and controller.
 */
module.exports = CONFIG => pageConfig => {
  const chPrefix = pageConfig.chPrefix || '';
  const utils = require('../helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNERMAIN = utils.SPINNERMAIN(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('../_pages')(CONFIG)('_stEnrollment');

  const buttonsConfig = {
    buttons: {
      primary: {
        text: 'device-accesses-soft-token-enrollment-label-activate-button',
        disabled: false
      }
    }
  };

  const base = {
    hash: pageConfig.pageUrl,
    currentPage: {
      url: `/${pageConfig.pageUrl}`,
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'horizontal',
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'bbva-core-blue',
        className: `${isNativeIos ? 'ios-top-padding' : ''} buttons-top`,
        cellsConnections: {
          in: {
            [chPrefix + '_init_page']: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      }
    },
    components: [
      SPINNERMAIN,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        connId: 'handleLifeCicle',
        properties: {
          pageName: pageConfig.pageName,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          cache: [],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + pageConfig.pageName]: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              [pageConfig.chPrefix + 'init_page']: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          titleName: 'device-accesses-soft-token-enrollment-title-header',
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-notification-message',
        properties: {
          infoTitleClass: 'main-title',
          infoTextClass: 'main-text',
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        connId: 'confirmButtons',
        properties: {
          config: buttonsConfig,
          className: 'no-shadow dark-medium-blue-background',
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-device-accesses-controller',
        tag: 'glomo-device-accesses-mx-st-controller',
        connId: 'controller',
        properties: {
          host: CONFIG.globalServices.host,
          securityApiVersion: CONFIG.globalServices.versions.security,
          documentApiVersion: CONFIG.globalServices.versions.document,
          requiredToken: CONFIG.globalServices.requiredToken,
          native: !!CONFIG.native,
          securityLocalApiVersion: CONFIG.globalServices.security.localVersion,
          authenticationType: CONFIG.globalServices.security.headers.authenticationType,
          consumerId: CONFIG.globalServices.consumerId,
          nameHeaderCustomerID: 'RCP-ID',
          cellsConnections: {
            in: {
              navigation_soft_token_enrollment_modal_info_cancel: {
                bind: 'resetEnrollment'
              },
              global_storage_get_device_accesses_success: {
                bind: 'getDeviceAccessesResponse'
              },
              global_storage_set_device_accesses_success: {
                bind: 'setDeviceAccessesResponse'
              },
              global_storage_get_device_accesses_error: {
                bind: 'getDeviceAccessesResponseError'
              },
              global_storage_set_device_accesses_error: {
                bind: 'setDeviceAccessesResponseError'
              },
              global_default_error: {
                bind: 'showModalError'
              },
              device_accesses_device_id: {
                bind: 'deviceId'
              },
              global_native_user_agent: {
                bind: 'userAgent'
              },
              global_user_id: {
                bind: 'customerId'
              },
              global_native_uuid: {
                bind: 'contactId'
              },
              global_login_success: {
                bind: 'loginDataSuccessLocalStore'
              },
              global_set_app_settings: {
                bind: 'appSettings'
              }
            },
            out: {
              global_device_accesses_open_modal_secondary_click: {
                bind: 'glomo-device-accesses-secondary-click-modal'
              },
              glomo_device_accesses_open_modal_secondary_click: {
                bind: 'glomo-device-accesses-secondary-click',
                backStep: true
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              glomo_device_accesses_service_error: {
                bind: 'glomo-device-accesses-service-error'
              },
              glomo_device_accesses_generic_error: {
                bind: 'glomo-device-accesses-generic-error'
              },
              global_soft_token_enrollment_success: {
                bind: 'soft-token-enrollment-success-open-toast'
              },
              device_accesses_softtoken_enrolled: {
                bind: 'device-accesses-softtoken-enrolled',
                'forward-to-native': true
              },
              notify_token_enrolled: {
                bind: 'st-enrollment-notify-token-enrolled',
                'forward-to-native': true
              },
              global_get_from_storage: {
                bind: 'get-native-local-storage'
              },
              global_set_in_storage: {
                bind: 'set-native-local-storage'
              }
            },
            params: {
              pageFrom: 'pageFrom'
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

  return base;
};
