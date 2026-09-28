/* eslint-disable new-cap */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const spinner = utils.SPINNER(CONFIG);
  const pageName = 'facialRecognitionFacePicture';
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const analytics = require('./analytics/_facialRecognition')(CONFIG);
  const literals = require('./analytics/common/_literals');
  if (isSpherica) {
    spinner.tag = 'cells-spinner-veil-spherica';
  }
  spinner.properties.cellsConnections.in = { ...spinner.properties.cellsConnections.in, close_control_veil_on_put_request_success: { bind: 'hide' } };
  spinner.properties.messages = [ 'glomo-facial-face-picture-spinner-content-description' ];
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
          __bridge_page_facialRecognitionFacePicture: {
            bind: 'init'
          }
        },
        out: {
          facial__face_picture_reset_page: {
            bind: 'reset'
          },
          facial_face_picture_init_page: {
            bind: 'init-page'
          },
          close_control_veil: {
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
      className: 'header--dark header',
      rightIcon: 'coronita:close',
      titleName: 'glomo-facial-face-picture-header-title',
      cellsConnections: {
        out: {
          navigation_facial_face_picture_to_page: {
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
      titleName: 'glomo-facial-face-picture-header-title-spherica',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const bbvaBannerImage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-banner-image',
    tagSpherica: 'bbva-banner-image-spherica',
    familyPath: '@bbva-web-components/bbva-banner-image',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    attributes: {
      size: 'L'
    },
    properties: {
      cellsConnections: {
        in: {
          SEND_FACIAL_IMAGE: {
            bind: 'imageSrc'
          }
        }
      }
    },
    propertiesSpherica: {
      size: 'L',
      className: 'u-margin--grid u-min-width--2'
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
      microillustration: '',
      heading: 'glomo-facial-face-picture-text-description-title',
      text: 'glomo-facial-face-picture-text-description-subtitle'
    }
  };
  const bbvaPanelButtonFixed = {
    zone: isSpherica ? 'app__footer' : 'app__overlay',
    type: 'UI',
    tag: 'bbva-panel-button-fixed',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-panel-button-fixed',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'no-gradient',
      show: true,
      sticky: false,
      buttonText: 'glomo-facial-face-picture-confirm-button',
      footerLink: 'glomo-facial-face-picture-footer-button',
      cellsConnections: {
        out: {
          open_control_veil: {
            bind: 'panel-button-fixed-item-click'
          },
          facial_recognition_start_morpho: {
            bind: 'panel-button-fixed-item-click'
          },
          facial_recognition_back_registration_facial: {
            bind: 'panel-button-fixed-footer-link-click',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      size: 'M',
      text: 'glomo-facial-face-picture-confirm-button',
      fullwidth: true,
      variant: 'primary',
      className: `u-max-width--2 u-margin--grid${isNativeIos ? ' u-margin-bottom--1-5 u-margin-top--0-5 u-padding-top--0 u-padding-bottom--0' : ' u-padding-left--1-5 u-padding-right--1-5'}`,
      cellsConnections: {
        out: {
          open_control_veil: {
            bind: 'click'
          },
          facial_recognition_start_morpho: {
            bind: 'click'
          }
        }
      }
    }
  };
  const bbvaFooterLinkSpherica = {
    zone: 'app__footer',
    type: 'UI',
    tagSpherica: 'bbva-button-default-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    propertiesSpherica: {
      size: 'M',
      text: 'glomo-facial-face-picture-secondary-button',
      fullwidth: true,
      variant: 'link',
      className: `u-max-width--2 u-margin--grid${isNativeIos ? ' u-margin-bottom--1-5 u-margin-top--0-5 u-padding-top--0 u-padding-bottom--0' : ' u-padding-left--1-5 u-padding-right--1-5'}`,
      cellsConnections: {
        out: {
          facial_recognition_back_registration_facial: {
            bind: 'click',
            backStep: true
          }
        }
      }
    }
  };
  const bbvaDataproviderBiometrics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-biometrics',
    familyPath: '@glomo-web-components/bbva-dataprovider-biometrics',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      localApiVersion: CONFIG.globalServices.versions.morpho,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: pageName,
      cellsConnections: {
        in: {
          facial_recognition_morpho_version: {
            bind: 'version'
          },
          facial_recognition_star_morpho_post: {
            bind: 'registerFacialImage'
          },
          facial_recognition_star_morpho_put: {
            bind: 'updateFacialImage'
          }
        },
        out: {
          facial_registration_api_error: {
            bind: 'api-dm-error'
          },
          facial_registration_api_post_response_error: {
            bind: 'facial-recognition-face-post-request-error'
          },
          facial_registration_api_put_response_error: {
            bind: 'facial-recognition-face-put-request-error'
          },
          close_control_veil: {
            bind: 'facial-recognition-face-post-request-success'
          },
          facial_registration_success_post: {
            bind: 'facial-recognition-face-post-request-success'
          },
          close_control_veil_on_put_request_success: {
            bind: 'facial-recognition-face-put-request-success'
          },
          facial_registration_success_put: {
            bind: 'facial-recognition-face-put-request-success'
          }
        }
      }
    }
  };
  const bbvaManagerDeviceActivationFacialBiometricsValidation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-device-activation-facial-biometrics-validation',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-manager-device-activation-facial-biometrics-validation',
    properties: {
      phoneNumberBbvaLine: CONFIG.phoneNumberBbvaLine,
      cellsConnections: {
        in: {
          global_login_success_indicators: {
            bind: 'facialCustomerIndicators'
          },
          facial_registration_api_post_response_error: {
            bind: 'validationErrorCounterFacialRecognition'
          },
          facial_registration_api_put_response_error: {
            bind: 'validationErrorCounterFacialRecognition'
          },
          facial_registration_api_error: {
            bind: 'validationErrorCounterFacialRecognition'
          },
          facial_recognition_fail_capturing_evt: {
            bind: 'backLogin'
          },
          facial_registration_success: {
            bind: 'logSuccess'
          },
          SEND_FACIAL_URL_IMAGE: {
            bind: 'morphoRecoverImage'
          },
          facial_recognition_start_morpho: {
            bind: 'fireMorphoRecoverImage'
          },
          global_login_success: {
            bind: 'customerData'
          },
          native_user_id: {
            bind: 'customerIdPhone'
          },
          facial_recognition_request_financial_overview: {
            bind: 'isNecesaryRequestNewFinancialOverview'
          },
          facial_registration_success_post: {
            bind: 'successMorpho'
          },
          facial_registration_success_put: {
            bind: 'successMorpho'
          },
          facial_recognition_request_call_bbva_line: {
            bind: 'callBBVALine'
          },
          facial_validation_cancel_error_modal: {
            bind: 'handlerCloseErrorModal'
          },
          facial_recognition_cancel_error_modal_max_attempts: {
            bind: 'handlerCloseErrorModal'
          },
          facial_recognition_biometrics_code: {
            bind: 'setBiometricCode'
          },
          facial_recognition_biometrics_code_success: {
            bind: 'setBiometricCode'
          },
          facial_ine_cancel_error_modal: {
            bind: 'handlerCloseErrorModal'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'show-modals-facial-recognition-face-picture'
          },
          facial_recognition_star_morpho_post: {
            bind: 'send-data-register'
          },
          facial_recognition_star_morpho_put: {
            bind: 'send-data-update'
          },
          facial_recognition_fail_capturing_evt: {
            bind: 'facial-recognition-back-loggin',
            link: {
              page: 'nativeLogin'
            }
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
          facial_recognition_send_data: {
            bind: 'send-data-customer'
          },
          facial_recognition_customers_indicators: {
            bind: 'set-customers'
          },
          dashboard_refresh_financial_overview: {
            bind: 'request-new-financial-overview'
          },
          facial_recognition_success_morpho_result: {
            bind: 'success-morpho-tex-configuration',
            link: {
              page: 'facialRecognitionSuccessRegistration'
            }
          },
          global_action_launcher_dialer: {
            bind: 'open-call-action'
          },
          facial_reset_error_analytics: {
            bind: 'facial-recognition-verification-error'
          },
          facial_error_analytics: {
            bind: 'facial-recognition-verification-error'
          },
          close_control_veil: {
            bind: 'facial-recognition-verification-error'
          },
          facial_recognition_biometrics_code_success: {
            bind: 'send-code-biometrics-success'
          },
          facial_communication_ine_analytics: {
            bind: 'facial-recognition-communication-error-ine'
          },
          facial_open_atm_branch_locator: {
            bind: 'search-branch-office-action',
            link: {
              page: 'atmLocator',
              skipHistory: true
            }
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
  const BbvaAnalyticmanagerSensitiveFlows = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-sensitive-flows',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sensitive-flows',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          facial_reset_error_analytics: {
            bind: 'resetAnalytics'
          },
          facial_recognition_send_data: {
            bind: 'appStepFour'
          },
          facial_error_analytics: {
            bind: 'footPrintNotificationError'
          },
          facial_communication_ine_analytics: {
            bind: 'footPrintCommunicationIne'
          }
        },
        out: {
          facial_recognition_send_data_app_step_four: {
            bind: 'facial-recognition-analytics-step-four',
            analytics: analytics.processGetAppStep('4', literals.commons.steps.confirmPhoto)
          },
          facial_recognition_analytic_footprint_notification_error: {
            bind: 'facial-recognition-analytic-footprint-notification-error',
            analytics: analytics.processGetAdvancedFootprint(literals.commons.errorFaceIdRegistration, true)
          },
          facial_recognition_analytic_footprint_ine_error: {
            bind: 'facial-recognition-analytic-footprint-ine-error',
            analytics: analytics.processGetAdvancedFootprint(literals.commons.steps.validationErrorINE, true)
          },
          facial_recognition_analytic_footprint_communication_error: {
            bind: 'facial-recognition-analytic-footprint-communication-error',
            analytics: analytics.processGetAdvancedFootprint(literals.commons.steps.serviceErrorINE, true)
          }
        }
      }
    }
  };
  const base = {
    hash: 'facial-recognition-face-picture',
    currentPage: {
      url: '/facial-recognition-face-picture'
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
        iOSFixedHeader: true,
        extraHeaderClass: 'bg-light-grey',
        headerFixed: true,
        fixOffsetScroll: 0,
        footerHeight: 100,
        hasFooter: true
      }
    },
    components: [
      spinner,
      bbvaManagerDeviceActivationFacialBiometricsValidation,
      bbvaDataproviderBiometrics,
      BbvaAnalyticmanagerSensitiveFlows,
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      bbvaBannerImage,
      bbvaPanelInfo,
      bbvaPanelButtonFixed
    ]
  };
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica, bbvaFooterLinkSpherica);
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-biometrics', pageName, [
    'facial-recognition-face-post-request-success',
    'facial-recognition-face-post-request-error',
    'facial-recognition-face-put-request-success',
    'facial-recognition-face-put-request-error',
    'api-dm-error'
  ]);
  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
