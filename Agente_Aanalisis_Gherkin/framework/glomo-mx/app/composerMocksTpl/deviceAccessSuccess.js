'use strict';
module.exports = CONFIG => {
  const {SPINNER, getLanguage, headerHeight, getAlternativeFormatDate} = require('./common/helpers/_utils');
  const pageName = 'deviceAccessSuccess';
  const pages = require('./common/_pages')(CONFIG)('device-access-success');
  const isNativeIos = CONFIG.nativeIos || false;
  const isNative = CONFIG.native || false;
  const analytics = require('./analytics/_deviceAccess.js')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const base = {
    hash: 'device-access-success',
    currentPage: {
      url: '/device-access-success'
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
              BACK_DEVICE_ACCESS: {
                bind: 'click-right-button',
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
          backAction: 'header-right-button',
          cellsConnections: {
            in: {
              DEVICE_ACTIVATION_BACK_FLOW_RESET: {
                bind: 'goBack'
              }
            },
            out: {
              DEVICE_ACCESS_SUCCESS_CLOSE: {
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
              __bridge_page_deviceAccessSuccess: {
                bind: 'init'
              }
            },
            out: {
              DEVICE_USER_INIT_PAGE: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              init_device_access_delete_fido: {
                'bind': 'init-page-first-time',
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
        properties: {
          formatDate: getAlternativeFormatDate(),
          withoutHead: true,
          cellsConnections: {
            in: {
              DEVICE_ACCESS_SUCCESS_PAGE: {
                bind: 'result'
              }},
            out: {
              DEVICE_ACCESS_SUCCESS: {
                bind: 'cells-successful-response-click-primary',
                'forward-to-native': true
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
              DEVICE_ACCESS_DATA: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_DATA_FLAGS: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_KEY_SUCCESS: {
                bind: 'keySuccess'
              },
              DEVICE_ACCESS_SUCCESS: {
                bind: 'successAction'
              },
              DEVICE_ACCESS_SUCCESS_CLOSE: {
                bind: 'reset'
              },
              DEVICE_USER_INIT_PAGE: {
                bind: 'deleteToken'
              },
              BACK_DEVICE_ACCESS: {
                bind: 'reset'
              }
            },
            out: {
              DEVICE_ACCESS_EXIT: {
                bind: 'device-access-exit-flow'
              },
              DEVICE_ACCESS_CALL_FLOW: {
                bind: 'device-access-call-flow',
                link: {
                  page: 'deviceAccessCall',
                  skipHistory: true
                }
              },
              device_access_logout_user: {
                bind: 'go-back-login'
              },
              device_access_remove_softtoken: {
                bind: 'device-access-remove-softtoken'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              global_retry_error: {
                bind: 'device-access-error-retry'
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
              DEVICE_ACCESS_CALL_FLOW: {
                bind: 'footprintSuccessfulFacePrintClick'
              },
              DEVICE_USER_INIT_PAGE: {
                bind: 'footprintSuccessActivation'
              },
              DEVICE_ACCESS_TYPE_FLOW: {
                bind: 'typeFlow'
              }
            },
            out: {
              DEVICE_ACCESS_ANALYTICS_FOOTPRINT_SUCCESSFUL_FACE_PRINT_CLICK: {
                bind: 'device-access-analytic-footprint-successful-face-print-click',
                analytics: analytics.footPrintAdditionalVerification
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_SUCCESS_ACTIVATION: {
                bind: 'device-access-analytic-footprint-user-success-activation',
                analytics: analytics.appCompleted
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
