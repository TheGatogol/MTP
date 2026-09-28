'use strict';
module.exports = CONFIG => {
  const { createPrefixFromPageName, useNames, SPINNER: getSpinner } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const analytics = require('./analytics/_cardActivation');
  const pageName = 'card_activation';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const prefixPage = createPrefixFromPageName(
    pageName
  );
  const [ getChannelName ] = useNames(prefixPage);
  const constants = require('./common/helpers/_constants');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'cardActivation');
  const extraHeaderClass = sphericaPageUtils.isSpherica() ? '' : 'dark-blue-bg';
  const qrPlugin = constants.qrPluginConfigs;
  const base = {
    hash: 'card-activation',
    currentPage: {
      url: '/card-activation'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: extraHeaderClass,
        className: isNativeIos ? 'ios-top-padding' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true
      }
    },
    components: [ getSpinner(CONFIG) ]
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
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
  const bbvaFeatureCardActivation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-card-activation-mx',
    tagSpherica: 'bbva-feature-card-activation-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-card-activation-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-card-activation-mx-spherica',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cardApiVersion: CONFIG.globalServices.versions.cardsV1,
      cellsConnections: {
        in: {
          [pageName + '_qr_code_scanner_plugin_response_success']: {
            bind: 'qrCodeScannerSuccess'
          },
          [pageName + '_qr_code_scanner_plugin_response_error']: {
            bind: 'qrCodeSacannerError'
          },
          [pageName + '_encrypted_cvv']: {
            bind: 'getEncryptData'
          },
          global_get_card_orange_data_success: {
            bind: 'successCardDetail'
          }
        },
        out: {
          [pageName + '_go_back']: {
            bind: 'bbva-card-activation-go-back',
            backStep: true
          },
          [pageName + '_open_branches_and_atms_plugin']: {
            bind: 'bbva-open-map-for-branches-and-atms'
          },
          [pageName + '_open_qr_code_scanner_plugin']: {
            bind: 'bbva-open-scanner-for-qr-code'
          },
          [pageName + '_encrypt_cvv_request']: {
            bind: 'bbva-input-cvv-encrypted-request'
          },
          [pageName + '_send_analytics_data']: {
            bind: 'bbva-send-analytics-data_cvv'
          },
          [pageName + '_success_card_activation']: {
            bind: 'bbva-success-card-activation_cvv'
          },
          [pageName + '_error_card_activation']: {
            bind: 'bbva-error-card-activation_cvv'
          },
          [pageName + 'QR_FAQ_INFORMATION']: {
            bind: 'bbva-faqs'
          },
          [pageName + '_open_map_for_branches_and_atms_plugin']: {
            bind: 'bbva-open-map-for-branches-and-atms',
            link: {
              page: 'atmLocator'
            }
          },
          [pageName + 'send_signature_analitic']: {
            bind: 'signature-required-first-step-dm'
          },
          global_open_control_veil: {
            bind: 'bbva-spinner-open'
          },
          global_close_control_veil: {
            bind: 'bbva-spinner-close'
          }
        },
        params: {
          cardId: 'productId'
        }
      }
    }
  };
  const bbvaManagerQrScanner = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-qr-scanner',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      qrPlugin,
      selectedPluginConfig: CONFIG.nativeIos ? 'ios' : 'android',
      cellsConnections: {
        in: {
          [pageName + '_open_qr_code_scanner_plugin']: {
            bind: 'managePluginParams'
          }
        },
        out: {
          [pageName + '_qr_code_plugin_params']: {
            bind: 'glomo-qr-plugin-params'
          }
        }
      }
    }
  };
  const bbvaNativeconnectorQrCode = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_qr_code_plugin_params']: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          [pageName + '_qr_code_scanner_plugin_response_success']: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [pageName + '_qr_code_scanner_plugin_response_error']: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };
  const bbvaNativeconnectorLibmcrypt = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-libmcrypt',
    familyPath: '@glomo-web-components/bbva-nativeconnector-libmcrypt',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_init_page']: {
            bind: 'generatekpub'
          },
          [pageName + '_encrypt_cvv_request']: {
            bind: 'encrypt'
          }
        },
        out: {
          [pageName + '_encrypted_cvv']: {
            bind: 'value-encrypted'
          }
        }
      }
    }
  };
  const managerAnalytics = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-technical-core',
    familyPath: '@glomo-web-components/bbva-analyticmanager-technical-core',
    render: 'litElement',
    type: 'DM',
    properties: {
      pageName,
      config: {
        steps: {
          sign: 'otp'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('_init_page')]: {
            bind: 'firePageVisit'
          },
          [getChannelName('_send_analytics_data')]: {
            bind: 'fireAppStarted'
          },
          [getChannelName('_qr_code_plugin_params')]: {
            bind: 'fireAppStarted'
          },
          [getChannelName('send_signature_analitic')]: {
            bind: 'manageAnalyticsSign'
          },
          [getChannelName('_success_card_activation_cvv')]: {
            bind: 'fireAppCompleted'
          },
          [getChannelName('_error_card_activation_cvv')]: {
            bind: 'firePageView'
          },
          [getChannelName('_qr_code_scanner_plugin_response_error')]: {
            bind: 'firePageView'
          },
          [getChannelName('_QR_FAQ_INFORMATION')]: {
            bind: 'fireAppStarted'
          }
        },
        out: {
          [getChannelName('page_visit_cvv')]: {
            bind: 'analytics-page-visit',
            analytics: analytics.cardActivationVisitCvv
          },
          [getChannelName('page_visit_qr')]: {
            bind: 'analytics-page-visit',
            analytics: analytics.cardActivationVisitQr
          },
          [getChannelName('app_started_cvv')]: {
            bind: 'analytics-app-started',
            analytics: analytics.cardActivationStartedCvv
          },
          [getChannelName('app_started_qr')]: {
            bind: 'analytics-app-started',
            analytics: analytics.cardActivationStartedQr
          },
          [getChannelName('app_step_otp_cvv')]: {
            bind: 'analytics-otp',
            analytics: analytics.cardStepOtpCvv
          },
          [getChannelName('app_step_otp_qr')]: {
            bind: 'analytics-otp',
            analytics: analytics.cardStepOtpQr
          },
          [getChannelName('app_completed_cvv')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.cardActivationCompletedCvv
          },
          [getChannelName('app_completed_qr')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.cardActivationCompletedQr
          },
          [getChannelName('app_completed_error_cvv')]: {
            bind: 'analytics-error-activation',
            analytics: analytics.errorCardCvv
          },
          [getChannelName('app_completed_error_qr')]: {
            bind: 'analytics-error-activation',
            analytics: analytics.errorCardQr
          },
          [getChannelName('fingerprint_page')]: {
            bind: 'analytics-page-visit',
            analytics: analytics.fingerprintPageViewFaqs
          },
          [getChannelName('error_qr_reading')]: {
            bind: 'analytics-error-activation',
            analytics: analytics.errorQrReadung
          }
        }
      }
    }
  };
  base.components.push(
    cellsHandleLifeCycle,
    bbvaFeatureCardActivation,
    bbvaManagerQrScanner,
    bbvaNativeconnectorQrCode,
    bbvaNativeconnectorLibmcrypt,
    managerAnalytics
  );
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-card-activation-mx');
  addCommonErrors(base.components);
  return sphericaPageUtils.spherize(base);
};
