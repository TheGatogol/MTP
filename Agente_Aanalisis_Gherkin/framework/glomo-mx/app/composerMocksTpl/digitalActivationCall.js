/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {

  const utils = require('./common/helpers/_utils');
  const spinner = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('digitalActivationCall');
  const PAGE_NAME = 'digitalActivationCall';
  const CHANNEL_NAME = 'digital_activation';
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const {useNames, toUnderscoreCase } = utils;
  const OPERATIVE_PREFIX = toUnderscoreCase(CHANNEL_NAME).toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_digitalActivationCall')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const descriptionServiceList = [
    'digital-activation-list-info-first-description',
    'digital-activation-list-info-second-description'
  ];

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      headerHeight: utils.headerHeight,
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: false,
      headerFixed: true,
      footerFixed: true,
      iOSFixedHeader: isNativeIos,
      footerHeight: 96,
      className: isNativeIos ? 'ios-top-padding bg-dark-core-blue' : 'bg-dark-core-blue',
      cellsConnections: {
        in: {
          [getChannelName('init_page_recalculate_header')]: {
            bind: 'recalculateHeader'
          }
        }
      }
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
          __bridge_page_digitalActivationCall_navigation: {
            bind: 'navigation'
          },
          __bridge_page_digitalActivationCall_init: {
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
            bind: 'swipe-menu-enabled'
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
      continue: 'mobile-services',
      cellsConnections: {
        in: {
          [getChannelName('close_page')]: {
            bind: 'goBack'
          },
          [getChannelName('call_back')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('back')]: {
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
          digital_activation_call_back_to_login: {
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
      host: CONFIG.globalServices.host,
      hostGrantingTicket: CONFIG.globalServices.hostGrantingTicket,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      consumerId: CONFIG.globalServices.consumerIdAnonymous,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          },
          digital_activation_send_persisting_activate_data: {
            bind: 'activateData'
          },
          digital_activation_send_persisting_call_up_data: {
            bind: 'callUpData'
          },
          digital_activation_send_user_type: {
            bind: 'userType'
          },
          digital_activation_alpha_global_services: {
            bind: 'alphaServicesFlag'
          },
          digital_activation_alpha_qr_global_services: {
            bind: 'isNotByDecipher'
          },
          digital_activation_call_back_to_login: {
            bind: 'exitErrorModalGeneric'
          },
          digital_activation_qr_persist_status: {
            bind: 'isQrFlow'
          },
          digital_activation_alpha_global_services_flow_satus: {
            bind: 'typeFlow'
          },
          [getChannelName('device_info_call')]: {
            bind: 'device'
          },
          digital_activation_pre_activate_error: {
            bind: 'preActivateError'
          },
          [getChannelName('call_up_start')]: {
            bind: 'callUp'
          },
          DIGITAL_ACTIVATION_OPEN_PAGE_SUCCESS: {
            bind: 'mobileModal'
          },
          DIGITAL_ACTIVATION_RETRY_CALL_UP_EXIT: {
            bind: 'exitCallUp'
          },
          DIGITAL_ACTIVATION_ERROR_EXIT_MODAL: {
            bind: 'exitCallUp'
          },
          KEY_RECOVERY_SEND_FLAG: {
            bind: 'registerUserData'
          },
          [getChannelName('call_qr_status')]: {
            bind: 'registerQR'
          },
          [getChannelName('back')]: {
            bind: 'reset'
          },
          global_storage_get_deviceId_success: {
            bind: 'deviceId'
          }
        },
        out: {
          global_set_call_timer_from_settings: {
            bind: 'send-call-timer-from-settings'
          },
          sign_modal_submit_sign: {
            bind: 'post-call-request'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-alert'
          },
          [getChannelName('mobile_services')]: {
            bind: 'digital-activation-show-modal-mobile'
          },
          global_alert_modal_close: {
            bind: 'digital-activation-close-modal-call'
          },
          global_retry_error: {
            bind: 'glomo-digital-activation-dm-post-call-up-error'
          },
          global_generic_error_dinamic: {
            bind: 'glomo-digital-activation-dm-call-up-error'
          },
          [getChannelName('back_flow_reset')]: {
            bind: 'reset-flow-navigation-back'
          },
          [getChannelName('qr_persist_call')]: {
            bind: 'persist-status-qr'
          },
          [getChannelName('qr_reader_reset')]: {
            bind: 'reset-qr-reader-activation'
          },
          analytics_digital_activation_request_call: {
            bind: 'digital-activation-trace-request-call'
          },
          analytics_digital_activation_call_verification: {
            bind: 'digital-activation-trace-call-verification'
          },
          analytics_digital_activation_success: {
            bind: 'digital-activation-trace-activation-success'
          },
          global_logout_sesion_expiration: {
            bind: 'glomo-digital-activation-dm-exit'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('mobile_services_page')]: {
            bind: 'digital-activation-navigate-to-page',
            link: {
              page: {
                bind: 'page'
              },
              skipHistory: true
            }
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
      profileTrue: 'digital-activation-additional-customer',
      profileFalse: 'digital-activation-no-additional-customer',
      cellsConnections: {
        in: {
          digital_activation_send_flag_call_flow: {
            bind: 'flagAnalyticsFlow'
          },
          digital_activation_send_user_type: {
            bind: 'profileUserType'
          },
          analytics_digital_activation_request_call: {
            bind: 'requestCall'
          },
          analytics_digital_activation_call_verification: {
            bind: 'callVerification'
          },
          analytics_digital_activation_success: {
            bind: 'activationSuccess'
          },
          digital_activation_mobile_services: {
            bind: 'completed'
          },
          [getChannelName('close_page')]: {
            bind: 'resetAnalytics'
          },
          [getChannelName('call_back')]: {
            bind: 'resetAnalytics'
          }
        },
        out: {
          digital_activation_analytics_trace_call_verification: {
            bind: 'digital-activation-analytic-request-call',
            analytics: ANALYTICS._getAdvancedFootprint('requestCall', 'inicio')
          },
          digital_activation_analalytics_call_verification: {
            bind: 'digital-activation-analytic-call-verification',
            analytics: ANALYTICS._getAdvancedFootprint('callVerification', 'verificacion llamada')
          },
          digital_activation_analytics_activation_success: {
            bind: 'digital-activation-analytic-success-activate',
            analytics: ANALYTICS._getAdvancedFootprint('activationSuccess', 'completar activacion')
          }
        }
      }
    }
  };

  const cellsCardAdvice = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-card-advice',
    tagSpherica: 'cells-card-advice-spherica',
    properties: {
      className: 'image-m',
      imageUrl: './images/call-activation.svg',
      titleText: 'digital-activation-page-content-header',
      text: 'digital-activation-page-content-title',
      list: descriptionServiceList,
      isBackgroundDark: true,
      listItemClass: 'cells-card-advice-list-item'
    },
    propertiesSpherica: {
      isBackgroundDark: false,
      imageUrl: '',
      hiddenImage: true,
      align: 'center',
      sizeTitle: '3XL',
      className: 'custom-layout'
    }
  };

  const cellsIconMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      className: 'default-horizontal-margin funds-investment-last-spacing',
      type: 'info-dark',
      icon: 'coronita:info',
      message: 'digital-activation-icon-message-description'
    }
  };

  const cellsConfirmButtons = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'cells-confirm-buttons',
    tagSpherica: 'cells-confirm-buttons-spherica',
    properties: {
      className: 'background--core-dark',
      hideDivider: true,
      config: {
        buttons: {
          primary: {
            class: 'primary',
            text: 'digital-activation-call-up'
          }
        }
      },
      cellsConnections: {
        out: {
          [getChannelName('call_up_start')]: {
            bind: 'cells-confirm-buttons-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      className: ''
    }
  };

  const base = {
    hash: 'mx-digitalActivationCall',
    currentPage: {
      url: '/digital-activation-call'
    },
    pages,
    template,
    components: [
      spinner,
      handleLifeCycle,
      navegationHandler,
      moleculeHeader,
      dmDigitalActivation,
      analyticsDmDigitalActivation,
      cellsCardAdvice,
      cellsIconMessage,
      cellsConfirmButtons
    ]
  };

  addRetryErrors(base)([
    {
      id: 'DIGITAL-ACTIVATION-CALL-UP-ERROR',
      acceptRetry: { bind: 'callUp', component: 'glomo-digital-activation-dm-mx' },
      cancelRetry: { bind: 'exitCallUp', component: 'glomo-digital-activation-dm-mx' },
      finishRetry: { bind: 'exitCallUp', component: 'glomo-digital-activation-dm-mx' }
    }
  ]);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-digital-activation-dm-mx', PAGE_NAME, ['success-on-post-activate', 'error-on-post-activate']);


  return sphericaPageUtils.spherize(base);
};
