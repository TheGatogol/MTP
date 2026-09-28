/* eslint-disable new-cap */
'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const spinner = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const moreInfoPageName = 'facialRecognitionMoreInfo';
  const pageName = 'facialRecognitionSuccessRegistration';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_facialRecognition')(CONFIG);
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: moreInfoPageName,
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
          navigation_facial_back_step: {
            bind: 'click-right-button',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      leftIcon: '',
      titleName: 'glomo-facial-face-picture-header-title-alert-spherica',
      rightIcon: 'coronita:close',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };
  const cellsSuccessfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      headerTitle: 'glomo-facial-face-picture-header-title-alert',
      page: 'crad-generate-virtual-review',
      hideDivider: true,
      withoutHead: true,
      hideDate: true,
      result: {
        mainIcon: {
          src: './images/success.svg',
          info: 'Operation Success'
        },
        mainTitle: {
          key: 'glomo-facial-face-picture-title-description-alert',
          class: 'spacing-bottom bold'
        },
        additionalInfo: [
          {
            value: 'glomo-facial-face-picture-text-description-alert',
            class: ''
          }
        ],
        buttons: {
          primary: {
            text: 'glomo-facial-face-picture-button-alert',
            action: 'go-to-next'
          },
          secondary: {
            hidden: true
          }
        }
      },
      cellsConnections: {
        in: {
          facial_recognition_success_morpho_result: {
            bind: 'result'
          }
        },
        out: {
          global_landing_page_manager_next_flow: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      withSuccessHead: true,
      withoutHead: false,
      disableButtons: true,
      result: {
        mainIcon: {
          src: './images/success.svg',
          info: 'Operation Success'
        },
        mainTitle: {
          key: 'glomo-facial-face-picture-title-description-alert-spherica',
          description: 'glomo-facial-face-picture-text-description-alert',
          class: 'spacing-bottom bold'
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
          global_login_success: {
            bind: 'customerData'
          }
        },
        out: {
          facial_recognition_send_data: {
            bind: 'send-data-customer'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
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
            bind: 'appStepComplete'
          }
        },
        out: {
          facial_recognition_send_data_app_step_complete: {
            bind: 'facial-recognition-analytics-step-complete',
            analytics: analytics.APP_COMPLETED
          }
        }
      }
    }
  };
  const base = {
    hash: 'facial-recognitions-success-registration',
    currentPage: {
      url: '/facial-recognition-success-registration'
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
        fixOffsetScroll: 0,
        footerHeight: 100
      }
    },
    components: [
      spinner,
      bbvaManagerDeviceActivationFacialBiometricsValidation,
      bbvaAnalyticManagerSensitiveFlows,
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      cellsSuccessfulResponse
    ]
  };
  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
