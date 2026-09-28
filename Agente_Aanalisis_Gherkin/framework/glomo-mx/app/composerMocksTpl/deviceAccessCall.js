'use strict';
module.exports = CONFIG => {
  const {SPINNER, getLanguage, headerHeight} = require('./common/helpers/_utils');
  const pageName = 'deviceAccessCall';
  const pages = require('./common/_pages')(CONFIG)('device-access-call');
  const isNativeIos = CONFIG.nativeIos || false;
  const native = CONFIG.native || false;
  const analytics = require('./analytics/_deviceAccess.js')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const configButtons = {
    buttons: {
      primary: {
        text: 'device-access-call-call-up',
        action: 'exit'
      }
    }
  };
  const base = {
    hash: 'device-access-call',
    currentPage: {
      url: '/device-access-call'
    },
    pages,
    language: getLanguage(),
    template: {
      tag: 'cells-template-coronita',
      properties: {
        headerHeight,
        extraHeaderClass: 'bbva-core-blue',
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding bbva-core-blue' : 'bbva-core-blue',
        cellsConnections: {
          in: {
            DEVICE_USER_INIT_PAGE: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER(CONFIG), // eslint-disable-line new-cap
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'device-access—page-header-text',
          cellsConnections: {
            out: {
              BACK_DEVICE_ACCESS_CALL: {
                bind: 'click-right-button'
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
          backAction: 'header-right-button',
          cellsConnections: {
            in: {
              DIGITAL_ACTIVATION_BACK_FLOW_RESET: {
                bind: 'goBack'
              }
            },
            out: {
              DEVICE_ACCESS_CALL_CLOSE: {
                bind: 'header-right-button'
              }
            }
          }
        }
      },
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
              __bridge_page_deviceAccessCall: {
                bind: 'init'
              }
            },
            out: {
              DEVICE_USER_INIT_PAGE: {
                bind: 'init-page'
              },
              close_control_veil: {
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
        tag: 'cells-card-advice',
        properties: {
          className: 'image-m no-wrapper',
          text: 'device-access-call-subtitle',
          isBackgroundLight: true,
          listItemClass: 'cells-card-advice-list-item-card-information',
          list: ['device-access-call-template-list-first-value', 'device-access-call-template-list-second-value'],
          cellsConnections: {
            in: {
              DEVICE_ACCESS_DATA_CALL_PAGE: {
                bind: 'setProperties'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        properties: {
          className: 'default-horizontal-margin funds-investment-last-spacing',
          type: 'info-dark',
          icon: 'coronita:info',
          message: 'device-access-call-message'
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            out: {
              DEVICE_ACCESS_CALL_ACCEPT: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              init_device_access_delete_fido: {
                bind: 'cells-confirm-buttons-click-primary',
                'forward-to-native': true
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
          native,
          typeDevice: isNativeIos,
          cellsConnections: {
            in: {
              device_access_save_customer_data: {
                bind: 'saveCustomerData'
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
              DEVICE_ACCESS_INIT_DATA: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_CALL_ACTIVATION: {
                bind: 'hideSpinner'
              },
              DEVICE_ACCESS_INIT_DEVICE_INFO: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_DATA: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_DATA_FLAGS: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_CALL_FLOW: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_CALL_ACCEPT: {
                bind: 'callUp'
              },
              device_access_call_up_success: {
                bind: 'onCallUpSuccess'
              },
              device_access_call_up_error: {
                bind: 'onCallUpError'
              },
              DEVICE_ACCESS_CALL_CLOSE: {
                bind: 'reset'
              },
              global_glomo_alert_timer_expire: {
                bind: 'reset'
              },
              BACK_DEVICE_ACCESS_CALL: {
                bind: 'reset'
              },
              device_access_user_with_card_accept: {
                bind: 'goBackLogin'
              },
              device_access_user_with_card_cancel: {
                bind: 'goBackLogin'
              }
            },
            out: {
              device_access_call_up: {
                bind: 'create-call'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-alert-manager'
              },
              device_access_analytics_call_in_process: {
                bind: 'analytics-footprint-call-in-process'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_retry_error: {
                bind: 'device-access-error-retry'
              },
              global_alert_modal_close: {
                bind: 'go-back-login'
              },
              device_access_logout_user: {
                bind: 'go-back-login'
              },
              device_access_save_customer_data: {
                bind: 'save-customer-data'
              }
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
              device_access_analytics_call_in_process: {
                bind: 'footprintCallInProcess'
              },
              DEVICE_ACCESS_CALL_ACCEPT: {
                bind: 'appInternalLinkGetCall'
              },
              DEVICE_ACCESS_TYPE_FLOW: {
                bind: 'typeFlow'
              }
            },
            out: {
              DEVICE_ACCESS_ANALYTICS_APP_PAGE_VISIT: {
                bind: 'device-access-analytic-app-page-visit'
              },
              DEVICE_ACCESS_ANALYTICS_INTERNAL_LINK: {
                bind: 'device-access-analytic-internal-link-get-call',
                analytics: analytics.internalLinkClickCall('deviceAccess.callRequest')
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
          native,
          cellsConnections: {
            in: {
              device_access_call_up: {
                bind: 'postCallUp'
              }
            },
            out: {
              device_access_call_up_success: {
                bind: 'post-digital-activation-call-up-success'
              },
              device_access_call_up_error: {
                bind: 'error-on-post-digital-activation-call-up'
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
          native,
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
      }
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'DEVICE-ACCESS-ITERRUPTED-CONNECTION-ERROR',
      cancelRetry: { bind: 'reset', component: 'bbva-controller-device-activation-facial-biometrics-enrollment' },
      acceptCallForHelp: { bind: 'reset', component: 'bbva-controller-device-activation-facial-biometrics-enrollment' }
    }
  ]);
  return base;
};
