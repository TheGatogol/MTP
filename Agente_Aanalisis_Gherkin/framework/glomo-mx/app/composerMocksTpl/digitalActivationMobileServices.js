(function() {
  'use strict';

  module.exports = CONFIG => {
    const utils = require('./common/helpers/_utils');
    const analytics = require('./analytics/_digitalActivationCall')(CONFIG);
    const PAGE_NAME = 'digitalActivationMobileServices';
    const CHANNEL_NAME = 'digital_activation';
    const isNativeIos = CONFIG.nativeIos || false;
    const { useNames, toUnderscoreCase } = utils;
    const OPERATIVE_PREFIX = toUnderscoreCase(CHANNEL_NAME).toLowerCase();
    const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
    const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
    const isSpherica = sphericaPageUtils.isSpherica();

    const template = {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: isNativeIos ? 'ios-top-padding bg-dark-core-blue' : 'bg-dark-core-blue',
        headerHeight: 60,
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: isNativeIos
      },
      propertiesSpherica: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'light-green-bg'
      }
    };

    const handleLifeCycle = {
      zone: 'app__main',
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
            __bridge_page_digitalActivationMobileServices_navigation: {
              bind: 'navigation'
            },
            __bridge_page_digitalActivationMobileServices_init: {
              bind: 'init'
            }
          },
          out: {
            [getChannelName('init_page')]: {
              bind: 'init-page'
            },
            [getChannelName('init_page_recalculate_header')]: {
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

    const navegationHandler = {
      zone: 'app__header',
      type: 'UI',
      tag: 'glomo-navigation-handler',
      properties: {
        backAction: 'header-right-button',
        cellsConnections: {
          in: {
            [getChannelName('close_page')]: {
              bind: 'goBack'
            },
            [getChannelName('back_step')]: {
              bind: 'goBack'
            },
            [getChannelName('close_mobile_back')]: {
              bind: 'goBack'
            }
          },
          out: {
            digital_activation_back: {
              bind: 'header-right-button',
              backStep: true
            }
          }
        }
      }
    };

    const moleculeHeader = {
      zone: 'app__header',
      type: 'UI',
      tag: 'cells-molecule-header',
      tagSpherica: 'cells-molecule-header-spherica',
      properties: {
        className: 'header--core',
        rightIcon: 'coronita:close',
        titleName: 'digital-activation-services-header-title',
        cellsConnections: {
          out: {
            [getChannelName('back_step')]: {
              bind: 'click-right-button'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-molecule-header-spherica',
        type: 'modal',
        override: {
          titleName: 'digital-activation-services-header-title-spherica'
        }
      })
    };

    const dmDigitalActivation = {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-digital-activation-dm-mx',
      familyPath: 'glomo-digital-activation-dm',
      properties: {
        native: CONFIG.native || false,
        softtokenSerial: 'MX_softtoken_serial',
        cellsConnections: {
          in: {
            [getChannelName('close_mobile_back')]: {
              bind: 'reset'
            },
            KEY_RECOVERY_SEND_FLAG: {
              bind: 'registerUserData'
            },
            [getChannelName('qr_persist_call')]: {
              bind: 'registerQR'
            }
          },
          out: {
            [getChannelName('close_page')]: {
              bind: 'go-back-dm'
            },
            [getChannelName('back_flow_reset_mobile')]: {
              bind: 'reset-flow-navigation-back'
            },
            [getChannelName('qr_reader_reset')]: {
              bind: 'reset-qr-reader-activation'
            },
            [getChannelName('enrollment_token_key')]: {
              bind: 'delete-softtoken-serial'
            }
          }
        }
      },
      propertiesSpherica: {
        isSpherica
      }
    };

    const analyticsDmDigitalActivation = {
      zone: 'app__main',
      tag: 'glomo-analytics-digital-activation-mx-manager',
      familyPath: '@glomo-web-components/glomo-analytics-digital-activation-manager',
      render: 'litElement',
      type: 'DM',
      properties: {
        isPreActivation: false,
        flagAnalyticsFlow: true,
        cellsConnections: {
          in: {
            digital_activation_close_mobile_back: {
              bind: 'activationSuccessLink'
            },
            digital_activation_send_user_type: {
              bind: 'profileUserType'
            }
          },
          out: {
            digital_activation_analytics_activation_success: {
              bind: 'digital-activation-analytic-link-success-activate',
              analytics: analytics.ACTIVATION_SUCCESS_LINK
            }
          }
        }
      }
    };

    const cellsSuccessfulResponse = {
      zone: 'app__main',
      tag: 'cells-successful-response',
      tagSpherica: 'cells-successful-response-spherica',
      properties: {
        className: 'digital-activation-success',
        formatDate: utils.getFormatDate(CONFIG),
        withoutHead: true,
        cellsConnections: {
          in: {
            [getChannelName('mobile_services')]: {
              bind: 'result'
            }
          },
          out: {
            [getChannelName('close_mobile_back')]: {
              bind: 'cells-successful-response-click-primary'
            }
          }
        }
      },
      propertiesSpherica: {
        className: 'centered-operation-list',
        extraButtonClass: 'size-m',
        formatDate: 'DD MMM YYYY, HH:mm [h]',
        withoutHead: false,
        withOutAmount: true
      }
    };

    const base = {
      template,
      components: [
        handleLifeCycle,
        navegationHandler,
        moleculeHeader,
        dmDigitalActivation,
        analyticsDmDigitalActivation,
        cellsSuccessfulResponse
      ]
    };

    return sphericaPageUtils.spherize(base);
  };
}());
