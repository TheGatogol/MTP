'use strict';
module.exports = CONFIG => {
  const {SPINNER, getLanguage, headerHeight} = require('./common/helpers/_utils');
  const pageName = 'deviceAccessVerification';
  const pages = require('./common/_pages')(CONFIG)('device-access-verification');
  const isNativeIos = CONFIG.nativeIos || false;
  const isNative = CONFIG.native || false;
  const pageAnalytics = require('./analytics/_deviceAccess.js')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const literals = require('./analytics/common/_literals.js');
  const descriptionServiceList = [
    'device-access-verification-page-list-first-text',
    'device-access-verification-page-list-second-text',
    'device-access-verification-page-list-second-third-text'
  ];
  const configButtons = {
    buttons: {
      primary: {
        text: 'device-access-verification-page-button',
        action: 'exit'
      }
    }
  };
  const base = {
    hash: 'device-access-verification',
    currentPage: {
      url: '/device-access-verification'
    },
    pages,
    language: getLanguage(),
    template: {
      tag: 'cells-template-coronita',
      properties: {
        headerHeight,
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding bg-white' : 'bg-white',
        cellsConnections: {
          in: {
            DEVICE_ACCESS_INIT_PAGE: {
              bind: 'recalculateHeader'
            }
          }
        }
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
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_deviceAccessVerification: {
                bind: 'init'
              }
            },
            out: {
              DEVICE_ACCESS_VERIFICATION_INIT_PAGE: {
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
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'device-access—page-header-text',
          cellsConnections: {
            out: {
              BACK_DEVICE_ACCESS_VERIFICATION: {
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
              DIGITAL_ACTIVATION_CLOSE_PAGE: {
                bind: 'goBack'
              }
            },
            out: {
              digital_activation_back_forward: {
                bind: 'header-right-button',
                backStep: true
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
          imageUrl: './images/deviceAccesses/Biometric.svg',
          titleText: 'device-access-verification-page-title',
          text: 'device-access-verification-page-text',
          list: descriptionServiceList,
          listItemClass: 'cells-card-advice-list-item-card-information',
          isBackgroundLight: true
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
          message: 'device-access-verification-page-icon-message',
          hidden: true,
          cellsConnections: {
            in: {
              DEVICE_ACCESS_HIDDEN_ICON_MESSAGE: {
                bind: 'hidden'
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
          srcImgSuccess: './images/check_successful.svg',
          srcImgInfo: './images/Info.svg',
          srcImgError: './images/general_error.svg',
          cellsConnections: {
            in: {
              DEVICE_ACCESS_DATA_FLAGS: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_DATA: {
                bind: 'setProperties'
              },
              device_access_open_settings_zoom: {
                bind: 'openNativeSettings'
              },
              DEVICE_ACCESS_VERIFICATION_ACCEPT: {
                bind: 'zoomAuthentication'
              },
              device_activation_native_zoom_authentication_success: {
                bind: 'zoomAuthenticationSuccess'
              },
              device_activation_native_zoom_authentication_error: {
                bind: 'zoomAuthenticationError'
              },
              BACK_DEVICE_ACCESS_VERIFICATION: {
                bind: 'reset'
              },
              device_access_device_activation_success: {
                bind: 'deviceActivationSuccess'
              },
              device_access_device_activation_error: {
                bind: 'deviceActivationError'
              },
              device_access_user_with_card_accept: {
                bind: 'goBackLogin'
              },
              device_access_user_with_card_cancel: {
                bind: 'goBackLogin'
              },
              device_access_non_account_facil_blocked_accept: {
                bind: 'deviceActivationIvr'
              },
              device_access_non_account_facil_blocked_cancel: {
                bind: 'goBackLogin'
              }
            },
            out: {
              DEVICE_ACCESS_SUCCESS_PAGE: {
                bind: 'device-access-success',
                link: {
                  page: 'deviceAccessSuccess',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_CALL_PAGE: {
                bind: 'device-activation-call',
                link: {
                  page: 'deviceAccessCall',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_DATA_FLAGS: {
                bind: 'device-access-flags'
              },
              DEVICE_ACCESS_DATA: {
                bind: 'device-access-data'
              },
              DEVICE_ACCESS_TYPE_FLOW: {
                bind: 'device-access-type-flow'
              },
              device_access_open_native_settings_zoom: {
                bind: 'open-native-settings'
              },
              device_access_open_zoom: {
                bind: 'device-access-zoom-authentication'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-alert-manager'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              device_access_analytics_face_recognition_blocked: {
                bind: 'analytics-footprint-face-recognition-blocked'
              },
              device_access_device_activation: {
                bind: 'device-activation'
              },
              DEVICE_ACCESS_DATA_CALL_PAGE: {
                bind: 'device-activation-call-image'
              },
              DEVICE_ACCESS_KEY_SUCCESS: {
                bind: 'device-access-flow'
              },
              device_access_logout_user: {
                bind: 'go-back-login'
              },
              global_retry_error: {
                bind: 'device-access-error-retry'
              },
              device_access_analytic_validate_data: {
                bind: 'device-access-analytic-validate-data'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        type: 'UI',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            out: {
              DEVICE_ACCESS_VERIFICATION_ACCEPT: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        }
      },
      {
        zone: 'app_main',
        type: 'DM',
        tag: 'bbva-nativeconnector-zoom-authentication',
        familyPath: '@glomo-web-components/bbva-nativeconnector-zoom-authentication',
        render: 'litElement',
        properties: {
          pluginName: 'zoomAuthentication',
          cellsConnections: {
            in: {
              device_access_open_zoom: {
                bind: 'singAuthentication'
              }
            },
            out: {
              device_activation_native_zoom_authentication_success: {
                bind: 'sing-zoom-authentication-success'
              },
              device_activation_native_zoom_authentication_error: {
                bind: 'sing-zoom-authentication-error'
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
              DEVICE_ACCESS_SUCCESS_PAGE: {
                bind: 'footprintSuccessfulFacePrint'
              },
              device_access_analytics_face_recognition_blocked: {
                bind: 'footprintFaceRecognitionBlocked'
              },
              device_access_open_zoom: {
                bind: 'appStartedConfirmVerification'
              },
              device_access_analytic_validate_data: {
                bind: 'appStepTwoValidateData'
              },
              DEVICE_ACCESS_TYPE_FLOW: {
                bind: 'typeFlow'
              }
            },
            out: {
              DEVICE_ACCESS_ANALYTICS_FOOTPRINT_FACE_RECOGNITION_BLOCKED: {
                bind: 'device-access-analytic-footprint-face-recognition-blocked',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.faceRecognitionBlocked', literals.commons.tokenMovil, 'huella facial', 'error reconocimiento bloqueado', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTICS_FOOTPRINT_SUCCESSFUL_FACE_PRINT: {
                bind: 'device-access-analytic-footprint-successful-face-print'
              },
              DEVICE_ACCESS_ANALYTICS_APP_STARTED_START_VERIFICATION: {
                bind: 'device-access-analytic-app-started-start-verification',
                analytics: pageAnalytics.appPageStarted
              },
              DEVICE_ACCESS_ANALYTICS_STEP_TWO_VALIDATION_DATA: {
                bind: 'device-access-analytic-app-step-two-validate-data',
                analytics: pageAnalytics.appStepTwoValidateData
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
              device_access_open_native_settings_zoom: {
                bind: 'openSetting'
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
          native: isNative,
          cellsConnections: {
            in: {
              device_access_device_activation: {
                bind: 'postDeviceActivation'
              }
            },
            out: {
              device_access_device_activation_success: {
                bind: 'post-device-activation-success'
              },
              device_access_device_activation_error: {
                bind: 'post-device-activation-error'
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
      cancelRetry: { bind: 'reset', component: 'bbva-controller-device-activation-facial-biometrics-enrollment'},
      acceptCallForHelp: { bind: 'reset', component: 'bbva-controller-device-activation-facial-biometrics-enrollment'}
    }
  ]);
  return base;
};
