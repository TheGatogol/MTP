/* eslint-disable new-cap */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const spinner = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('facialRecognition');
  const pageName = 'facialRecognition';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const analytics = require('./analytics/_facialRecognition')(CONFIG);
  const configFileItem = [
    {
      classList: 'list-file-margin',
      text: 'glomo-facial-recognition-icon-message',
      icon: 'coronita:document',
      id: 'link'
    }
  ];
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'facialRecognition',
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_facialRecognition: {
            bind: 'init'
          }
        },
        out: {
          facial_reset_page: {
            bind: 'reset'
          },
          facial_init_page: {
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
            bind: 'openWithSettings'
          },
          global_alert_manager_error_list_biometrics_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          facial_validation_cancel_error_modal: {
            bind: 'alert-facial-validation-error-cancel'
          },
          facial_recognition_accept_error_modal: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-accept'
          },
          facial_recognition_accept_error_modal_max_attempts: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-MAX-ATTEMPTS-accept'
          },
          facial_recognition_cancel_error_modal: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-cancel'
          },
          facial_recognition_cancel_error_modal_max_attempts: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-MAX-ATTEMPTS-cancel'
          },
          facial_ine_cancel_error_modal: {
            bind: 'alert-FACIAL-RECOGNITION-COMMUNICATION-INE-cancel'
          },
          facial_ine_error_modal_search_branch: {
            bind: 'alert-FACIAL-RECOGNITION-COMMUNICATION-INE-accept'
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
      rightIconAction: 'click-right-button-facial-recognition',
      titleName: 'glomo-facial-recognition-header-title',
      cellsConnections: {
        out: {
          facial_recognition_right_button: {
            bind: 'click-right-button-facial-recognition'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      titleName: 'glomo-facial-recognition-header-title-spherica',
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
      className: 'u-padding-bottom--1-5',
      disabledTabindex: true,
      hidePaddingBottom: true,
      imageAltText: 'glomo-facial-recognition-title',
      microillustration: 'security',
      heading: 'glomo-facial-recognition-title',
      text: 'glomo-facial-recognition-sutitle',
      linkText: 'glomo-facial-recognition-link',
      cellsConnections: {
        out: {
          facial_recognition_more_info: {
            bind: 'panel-info-link-click',
            link: {
              page: 'facialRecognitionMoreInfo'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      className: ''
    }
  };
  const bbvaLink = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-link',
    familyPath: '@bbva-web-components/bbva-link',
    render: 'litElement',
    properties: {
      text: 'glomo-facial-recognition-icon-message',
      className: 'u-margin--1',
      iconSize: '24',
      icon: 'coronita:document',
      cellsConnections: {
        out: {
          privacity_notice_modal: {
            bind: 'click'
          }
        }
      }
    }
  };
  const bbvaLinkSpherica = {
    zone: 'app__main',
    tag: 'cells-list-file-spherica',
    familyPath: 'cells-list-file-spherica',
    type: 'UI',
    properties: {
      list: configFileItem,
      variant: 'primary-alt',
      className: 'u-margin--grid u-margin-bottom--1-5',
      cellsConnections: {
        out: {
          privacity_notice_modal: {
            bind: 'cells-list-file-item-clicked'
          }
        }
      }
    }
  };
  const bbvaFormCheckbox = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-form-checkbox',
    tagSpherica: 'bbva-form-checkbox-spherica',
    familyPath: '@bbva-web-components/bbva-form-checkbox',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-top--1',
      descriptionText: 'bbva-form-checkbox-optional-label-spherica',
      accessibilityTextLegend: 'bbva-form-checkbox-optional-label-spherica',
      checked: false,
      hidden: false,
      cellsConnections: {
        in: {
          facial_reognition_reset_check_event: {
            bind: 'checked'
          },
          facial_recognition_hidden_check_box: {
            bind: 'hidden'
          }
        },
        out: {
          check_facial_recognizion_agre_start_registry_button: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      label: 'bbva-form-checkbox-optional-label-spherica',
      ambient: 'primary-alt'
    }
  };
  const bbvaPanleButtonFixed = {
    zone: isSpherica ? 'app__main' : 'app__overlay',
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
      buttonText: 'glomo-facial-recognition-confirm-button',
      buttonDisabled: true,
      cellsConnections: {
        in: {
          facial_recognizion_button_enabled: {
            bind: 'buttonDisabled'
          },
          facial_recognizion_button_disable: {
            bind: 'buttonDisabled'
          }
        },
        out: {
          navigation_facial_recognition_start_registy_page: {
            bind: 'panel-button-fixed-item-click',
            link: {
              page: 'facialRecognitionStartRegistry'
            }
          },
          facial_reognition_reset_check: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    },
    propertiesSpherica: {
      size: 'M',
      text: 'glomo-facial-recognition-confirm-button',
      fullwidth: true,
      variant: 'primary',
      disabled: true,
      unfixed: true,
      className: `u-max-width--2 u-margin--grid u-margin-top--2${isNativeIos ? ' u-margin-bottom--1-5 u-padding-top--0 u-padding-bottom--0' : ' u-margin-bottom--1 u-padding-left--1-5 u-padding-right--1-5'}`,
      cellsConnections: {
        in: {
          facial_recognizion_button_enabled: {
            bind: 'disabled'
          },
          facial_recognizion_button_disable: {
            bind: 'disabled'
          }
        },
        out: {
          navigation_facial_recognition_start_registy_page: {
            bind: 'click',
            link: {
              page: 'facialRecognitionStartRegistry'
            }
          },
          facial_reognition_reset_check: {
            bind: 'panel-button-fixed-item-click'
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
      cellsConnections: {
        in: {
          facial_recognition_biometrics_code: {
            bind: 'setBiometricCode'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          },
          check_facial_recognizion_agre_start_registry_button: {
            bind: 'changeButtonState'
          },
          privacity_notice_modal: {
            bind: 'privacyNotice'
          },
          facial_recognition_right_button: {
            bind: 'setFacialRecognitionButton'
          },
          global_login_success: {
            bind: 'customerData'
          },
          native_user_id: {
            bind: 'customerIdPhone'
          },
          facial_reognition_reset_check: {
            bind: 'resetCheck'
          },
          facial_recognition_more_info: {
            bind: 'sendFaqsFacialMoreInfo'
          },
          facial_recognition_biometrics_error: {
            bind: 'fireAlertErrorListBiometrics'
          },
          facial_recognition_biometrics_status_error: {
            bind: 'fireAlertErrorStatusBiometrics'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'setFacialRecognitionButton'
          },
          digital_activation_hidden_check_box: {
            bind: 'setHiddenCheck'
          }
        },
        out: {
          facial_recognizion_button_disable: {
            bind: 'checksbox-disable-continue-button'
          },
          facial_recognizion_button_enabled: {
            bind: 'checksbox-enabled-continue-button'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-modals-facial-recognition-face-picture'
          },
          global_alert_manager_error_list_biometrics: {
            bind: 'send-alert-error-list-biometrics'
          },
          navigation_facial_to_page: {
            bind: 'click-right-button',
            backStep: true
          },
          global_logout_sesion_expiration: {
            bind: 'logout-facial-success'
          },
          facial_recognition_send_data: {
            bind: 'send-data-customer'
          },
          facial_recognition_send_check_data: {
            bind: 'send-check-data'
          },
          facial_recognition_send_privacy_data: {
            bind: 'send-privacy-data'
          },
          facial_reognition_reset_check_event: {
            bind: 'reset-check-state'
          },
          facial_recognition_send_more_info_faqs: {
            bind: 'send-more-info-faqs'
          },
          global_landing_page_manager_next_flow: {
            bind: 'skip-facial-recognition-flow'
          },
          facial_recognition_hidden_check_box: {
            bind: 'hidden-check-box'
          },
          facial_recognition_morpho_version: {
            bind: 'facial-recognition-morpho-version'
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
            },
            global_alert_manager_error_list_biometrics_spherica: {
              bind: 'send-alert-error-list-biometrics'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings',
            'global_alert_manager_error_list_biometrics'
          ]
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
            bind: 'appPageVisit'
          },
          facial_recognition_send_check_data: {
            bind: 'appStarted'
          },
          facial_recognition_send_privacy_data: {
            bind: 'appStarted'
          },
          facial_recognition_more_info: {
            bind: 'appStarted'
          },
          facial_recognition_right_button: {
            bind: 'resetAnalytics'
          }
        },
        out: {
          facial_recognition_send_data_app_visit: {
            bind: 'facial-recognition-analytic-app-page-visit',
            analytics: analytics.APP_PAGE_VISIT
          },
          facial_recognition_send_data_app_started: {
            bind: 'facial-recognition-analytic-app-started',
            analytics: analytics.APP_PAGE_STARTED
          }
        }
      }
    }
  };
  const base = {
    hash: 'facial-recognition',
    currentPage: {
      url: '/facial-recognition'
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
            facial_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        headerFixed: true,
        hasFooter: false,
        disableEdgeSwipe: false,
        disableScrollLock: false
      }
    },
    components: [
      spinner,
      bbvaManagerDeviceActivationFacialBiometricsValidation,
      bbvaAnalyticManagerSensitiveFlows,
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      bbvaPanelInfo,
      bbvaLink,
      bbvaFormCheckbox,
      bbvaPanleButtonFixed
    ]
  };
  addCommonErrors(base.components)();
  const listadoComponentes = base.components.indexOf(bbvaLink);
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    base.components.splice(listadoComponentes, 1, bbvaLinkSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
