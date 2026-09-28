'use strict';
module.exports = CONFIG => {
  const {getPages, SPINNER} = require('./common/helpers');
  const _localStorage = require('./common/_local-storage');
  const pages = getPages(CONFIG)('deviceAccess');
  const pageName = 'deviceAccess';
  const pageAnalytics = require('./analytics/_deviceAccess.js')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const isNative = CONFIG.native || false;
  const literals = require('./analytics/common/_literals.js');
  const base = {
    hash: 'deviceAccess',
    currentPage: {
      url: '/device-access'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      SPINNER(CONFIG), // eslint-disable-line new-cap
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_deviceAccess: {
                bind: 'init'
              }
            },
            out: {
              open_control_veil: {
                bind: 'init-page'
              },
              device_access_consulting_data: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              global_device_info_get_platform: {
                bind: 'init-page'
              },
              global_device_info_get_model: {
                bind: 'init-page'
              },
              global_device_info_get_manufacturer: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-device-accesses-controller',
        tag: 'glomo-device-accesses-mx-controller',
        properties: {
          native: isNative,
          typeDevice: isNativeIos,
          cellsConnections: {
            in: {
              device_access_consulting_data: {
                bind: 'getDataReactivation'
              },
              global_device_get_device_platform_success: {
                bind: 'platformInfo'
              },
              global_device_get_device_model_success: {
                bind: 'modelInfo'
              },
              global_device_get_manufacturer_success: {
                bind: 'manufacturer'
              },
              global_storage_get_deviceId_success: {
                bind: 'deviceId'
              }
            },
            out: {
              device_access_validate_data: {
                bind: 'send-data-reactivation'
              },
              device_access_device_info: {
                bind: 'device-accesses-send-device-info'
              },
              global_get_from_storage: {
                bind: 'get-from-local-storage'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-controller-device-activation-facial-biometrics-enrollment',
        tag: 'bbva-controller-device-activation-facial-biometrics-enrollment',
        properties: {
          isNativeIos,
          cellsConnections: {
            in: {
              device_access_validate_data: {
                bind: 'validateData'
              },
              device_access_device_info: {
                bind: 'device'
              },
              device_access_registration_required_cancel: {
                bind: 'reset'
              },
              device_access_get_customer_channel_status_success: {
                bind: 'getChannelStatusDataResponse'
              },
              device_access_get_customer_channel_status_error: {
                bind: 'getChannelStatusDataResponseError'
              },
              global_feature_flag_collection_updated: {
                bind: 'settings'
              }
            },
            out: {
              DEVICE_ACCESS_PAGE: {
                bind: 'device-access-page',
                link: {
                  page: 'deviceAccessPage',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_DATA_CALL_PAGE: {
                bind: 'device-access-call',
                link: {
                  page: 'deviceAccessCall',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_INIT_DATA: {
                bind: 'device-access-init-data'
              },
              DEVICE_ACCESS_CALL_ACTIVATION: {
                bind: 'device-access-init-data'
              },
              DEVICE_ACCESS_INIT_DEVICE_INFO: {
                bind: 'device-access-init-data'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-alert-manager'
              },
              device_access_analytics_registration_required: {
                bind: 'analytics-registration-required'
              },
              device_access_logout_user: {
                bind: 'go-back-login'
              },
              device_access_get_customer_channel_status: {
                bind: 'get-customer-channel-status'
              },
              global_logout_sesion_expiration: {
                bind: 'logout-channel-status-error'
              },
              help_open_outside_phone_number: {
                bind: 'glomo-help-phone-button-clicked',
                link: {
                  page: 'help',
                  skipHistory: true
                }
              },
              global_remove_from_storage: {
                bind: 'device-access-remove-storage'
              }
            },
            params: {
              mobileNumber: 'number',
              statusCustomer: 'status',
              statusMessage: 'message'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-device-accesses-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-device-accesses-manager',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              device_access_analytics_registration_required: {
                bind: 'footprintMustRegisterAgain'
              },
              device_access_validate_data: {
                bind: 'dataReactivation'
              },
              global_device_info_get_platform: {
                bind: 'footprintDescription'
              }
            },
            out: {
              device_access_must_register_again_analytics_error: {
                bind: 'device-access-analytic-footprint-must-register-again',
                analytics: pageAnalytics.advancedFootprintFlag('reactivation.repeatRegistration', literals.commons.tokenMovil, 'error registrarse de nuevo', '', literals.types.error)
              },
              device_access_analytics_description: {
                bind: 'device-access-analytic-description',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.footprint', literals.sections.mobileTokenRecovery, literals.commons.description)
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-bgadp-user-dm',
        properties: {
          host: CONFIG.globalServices.hostGrantingTicket,
          consumerId: CONFIG.globalServices.consumerIdAnonymous,
          country: 'mx',
          native: isNative,
          grantingTicketApiVersion: CONFIG.globalServices.versions.grantingTicket,
          cellsConnections: {
            in: {
              device_access_logout_user: {
                bind: 'logout'
              }
            },
            out: {
              device_access_logout: {
                bind: 'logout-request-start'
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
              device_access_get_customer_channel_status: {
                bind: 'getCustomerChannelStatus'
              }
            },
            out: {
              device_access_get_customer_channel_status_success: {
                bind: 'get-customer-channel-status-success'
              },
              device_access_get_customer_channel_status_error: {
                bind: 'error-on-get-customer-channel-status'
              }
            }
          }
        }
      }
    ]
  };
  _localStorage.addOutStorageChannels(base.components, [ 'deviceId' ], CONFIG);
  return base;
};
