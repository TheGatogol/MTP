/* eslint-disable new-cap */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'facialRecognitionStartRegistry';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const analytics = require('./analytics/_facialRecognition')(CONFIG);
  const literals = require('./analytics/common/_literals');
  const spinner = utils.SPINNER(CONFIG);
  if (isSpherica) {
    spinner.tag = 'cells-spinner-veil-spherica';
  }
  spinner.properties.messages = [ 'glomo-facial-spinner-content-description' ];
  const cellsHandleLifeCycle = {
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
          __bridge_page_facialRecognitionStartRegistry: {
            bind: 'init'
          }
        },
        out: {
          facial_registry_reset_page: {
            bind: 'reset'
          },
          facial_registry_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'show-modals-facial-recognition-face-picture'
          }
        },
        out: {
          facial_recognition_open_settings_zoom: {
            bind: 'alert-MODAL-CAMERA-FACIAL-PERMISSIONS-accept'
          },
          facial_recognition_camera_modalzoom_cancel: {
            bind: 'alert-MODAL-CAMERA-FACIAL-PERMISSIONS-cancel',
            backStep: true
          }
        }
      }
    }
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--white title--wrapped',
      rightIcon: 'coronita:close',
      titleName: 'glomo-facial-registry-header-title',
      cellsConnections: {
        in: {
          facial_recognition_set_header_properties: {
            bind: 'setProperties'
          },
          facial_recognition_recalculate_header: {
            bind: 'recalculateHeader'
          }
        },
        out: {
          navigation_facial_registry_to_page: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      titleName: 'glomo-facial-registry-header-title',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const bbvaPanelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      disabledTabindex: true,
      hidePaddingBottom: true,
      isNested: true,
      heading: 'glomo-facial-registry-text-description-title',
      microillustration: 'info',
      text: 'glomo-facial-registry-text-description-subtitle'
    }
  };
  const bbvaAggregationBulletList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-bullet-list',
    tagSpherica: 'bbva-aggregation-bullet-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-bullet-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-bullet-list-spherica',
    render: 'litElement',
    properties: {
      items: ['glomo-facial-registry-list-1', 'glomo-facial-registry-list-2', 'glomo-facial-registry-list-3'],
      className: 'u-margin-top--1-5',
      cellsConnections: {
        out: {
          privacity_notice_modal: {
            bind: 'active-change'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin-top--1-5 u-margin--grid'
    }
  };
  const bbvaNativeconnectorZoomAuthentication = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-zoom-authentication',
    familyPath: '@glomo-web-components/bbva-nativeconnector-zoom-authentication',
    render: 'litElement',
    properties: {
      pluginName: 'zoomAuthentication',
      cellsConnections: {
        in: {
          FACIAL_RECOGNITION_START_REGISTRY_VERIFICATION_PARAMS_ACCEPTED: {
            bind: 'registerUpdate'
          }
        },
        out: {
          facial_recognition_registry_native_zoom_authentication_success: {
            bind: 'register-zoom-authentication-success'
          },
          facial_recognition_registry_native_zoom_authentication_error: {
            bind: 'register-zoom-authentication-error'
          }
        }
      }
    }
  };
  const bbvaManagerDeviceActivationFacialBiometricsValidation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-device-activation-facial-biometrics-validation',
    familyPath: '@glomo-web-components/bbva-manager-device-activation-facial-biometrics-validation',
    render: 'litElement',
    properties: {
      phoneNumberBbvaLine: CONFIG.phoneNumberBbvaLine,
      userNameParams: { userName: '' },
      cellsConnections: {
        in: {
          facial_recognition_registry_native_zoom_authentication_success: {
            bind: 'zoomAuthenticationSuccess'
          },
          facial_recognition_registry_native_zoom_authentication_error: {
            bind: 'zoomAuthenticationError'
          },
          FACIAL_RECOGNITION_START_REGISTRY_VERIFICATION_ACCEPT: {
            bind: 'zoomAuthenticationParams'
          },
          FACIAL_RECOGNITION_START_REGISTRY_BASE64_DM: {
            bind: 'getImageFacial'
          },
          facial_recognition_request_call_bbva_line: {
            bind: 'callBBVALine'
          },
          facial_recognition_open_settings_zoom: {
            bind: 'openNativeSettings'
          },
          glomo_facial_recognition_scanner_manager_errors: {
            bind: 'openErrorModalDeniedAccess'
          },
          facial_recognition_cancel_error_modal: {
            bind: 'handlerCloseErrorModal'
          },
          facial_recognition_cancel_error_modal_max_attempts: {
            bind: 'handlerCloseErrorModal'
          },
          global_login_success: {
            bind: 'customerData'
          },
          native_user_id: {
            bind: 'customerIdPhone'
          },
          facial_recognition_biometrics_code: {
            bind: 'setBiometricCode'
          },
          facial_ine_error_modal_search_branch: {
            bind: 'logoutDashboardModal'
          }
        },
        out: {
          DEVICE_ACCESS_ZOOM_AUTHENTICATION_SUCCESS: {
            bind: 'zoom-authentication-success'
          },
          FACIAL_RECOGNITION_START_REGISTRY_VERIFICATION_PARAMS_ACCEPTED: {
            bind: 'zoom-authentication-params-username'
          },
          SEND_FACIAL_IMAGE: {
            bind: 'send-facial-image',
            link: {
              page: 'facialRecognitionFacePicture'
            }
          },
          SEND_FACIAL_URL_IMAGE: {
            bind: 'zoom-authentication-file-morpho-data'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-modals-facial-recognition-face-picture'
          },
          facial_recognition_open_native_settings: {
            bind: 'open-native-settings'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          facial_recognition_set_header_properties: {
            bind: 'facial-recognition-set-header-properties'
          },
          facial_recognition_recalculate_header: {
            bind: 'facial-recognition-recalculate-header'
          },
          facial_recognition_send_data: {
            bind: 'send-data-customer'
          },
          facial_recognition_reset_analytics: {
            bind: 'send-data-customer'
          },
          facial_recognition_send_data_param: {
            bind: 'send-data-customer'
          },
          facial_reset_error_analytics: {
            bind: 'facial-recognition-verification-error'
          },
          facial_error_analytics: {
            bind: 'facial-recognition-verification-error'
          },
          facial_zoom_analytics: {
            bind: 'zoom-authentication-init-data'
          },
          facial_camera_permission_analyitics: {
            bind: 'facial-recognicion-get-camera-permission'
          },
          facial_recognition_dashboard_success: {
            bind: 'dashboard-facial-success',
            link: {
              page: 'dashboard'
            }
          },
          global_logout_sesion_expiration: {
            bind: 'logout-facial-success'
          },
          global_action_launcher_dialer: {
            bind: 'open-call-action'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'show-modals-facial-recognition-face-picture'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };
  const glomoPhotoConverterManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-photo-converter-manager',
    properties: {
      isBase64: true,
      cellsConnections: {
        in: {
          DEVICE_ACCESS_ZOOM_AUTHENTICATION_SUCCESS: {
            bind: 'getImageFile'
          }
        },
        out: {
          FACIAL_RECOGNITION_START_REGISTRY_BASE64_DM: {
            bind: 'glomo-photo-converter-facial-recognition-base64-manager'
          }
        }
      }
    }
  };
  const bbvaPanleButtonFixed = {
    zone: isSpherica ? 'app__footer' : 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    tagSpherica: 'bbva-button-default-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'no-gradient',
      show: true,
      sticky: false,
      buttonText: 'glomo-facial-registry-confirm-button',
      cellsConnections: {
        out: {
          FACIAL_RECOGNITION_START_REGISTRY_VERIFICATION_ACCEPT: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      size: 'M',
      text: 'glomo-facial-registry-confirm-button',
      fullwidth: true,
      variant: 'primary',
      className: `u-max-width--2 u-margin--grid${isNativeIos ? ' u-margin-bottom--1-5 u-margin-top--0-5 u-padding-top--0 u-padding-bottom--0' : ' u-margin-bottom--1-5 u-padding-left--1-5 u-padding-right--1-5'}`,
      cellsConnections: {
        out: {
          FACIAL_RECOGNITION_START_REGISTRY_VERIFICATION_ACCEPT: {
            bind: 'click'
          }
        }
      }
    }
  };
  const cellsMobileNativesettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          facial_recognition_open_native_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };
  const bbvaAnalyticManagerSensitiveFlows = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-sensitive-flows',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sensitive-flows',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          facial_recognition_send_data: {
            bind: 'appStepTwo'
          },
          facial_recognition_reset_analytics: {
            bind: 'resetAnalytics'
          },
          facial_reset_error_analytics: {
            bind: 'resetAnalytics'
          },
          facial_zoom_analytics: {
            bind: 'appStepThree'
          },
          facial_error_analytics: {
            bind: 'footPrintNotificationError'
          },
          facial_camera_permission_analyitics: {
            bind: 'footPrintCameraPermission'
          }
        },
        out: {
          facial_recognition_send_data_app_step_two: {
            bind: 'facial-recognition-analytics-step-two',
            analytics: analytics.processGetAppStep('2', literals.commons.steps.beforeStarting)
          },
          facial_recognition_registry_native_zoom_authentication_success_step_three: {
            bind: 'facial-recognition-analytics-step-three',
            analytics: analytics.processGetAppStep('3', literals.commons.steps.takePhoto)
          },
          facial_recognition_analytic_footprint_camera_permission: {
            bind: 'facial-recognition-analytic-footprint-camera-permission',
            analytics: analytics.processGetAdvancedFootprint(literals.commons.cameraPermissions, false)
          },
          facial_recognition_analytic_footprint_notification_error: {
            bind: 'facial-recognition-analytic-footprint-notification-error',
            analytics: analytics.processGetAdvancedFootprint(literals.commons.errorFaceIdRegistration, true)
          }
        }
      }
    }
  };
  const base = {
    hash: 'facial-recognition-start-registry',
    currentPage: {
      url: '/facial-recognition-start-registry'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            about_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        headerFixed: true,
        fixOffsetScroll: 0,
        footerHeight: 100,
        hasFooter: true
      }
    },
    components: [
      spinner,
      bbvaManagerDeviceActivationFacialBiometricsValidation,
      bbvaAnalyticManagerSensitiveFlows,
      glomoPhotoConverterManager,
      bbvaNativeconnectorZoomAuthentication,
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      bbvaPanelInfo,
      bbvaAggregationBulletList,
      bbvaPanleButtonFixed,
      cellsMobileNativesettings
    ]
  };
  addCommonErrors(base.components)();
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
