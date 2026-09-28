'use strict';
module.exports = CONFIG => {
  const { SPINNER: spinner } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('pinRequest');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'pinRequest');
  const isSpherica = sphericaPageUtils.isSpherica();
  const pageNameChannel = 'pin-request';
  const isNativeIos = CONFIG.nativeIos || false;
  const analyticsPinRequest = require('./analytics/_pinRequest')();
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'pinRequest',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_pinRequest: {
            bind: 'init'
          }
        },
        out: {
          [pageNameChannel + '_reset_page']: {
            bind: 'reset'
          },
          [pageNameChannel + '_init_page']: {
            bind: 'init-page',
            analytics: analyticsPinRequest._getAdvancedFootprints('cardData')
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const bbvaFeaturePinView = {
    zone: 'app__main',
    type: 'UI',
    tag: isSpherica ? 'bbva-feature-pin-view-mx-spherica' : 'bbva-feature-pin-view-mx',
    familyPath: isSpherica ? '@glomo-web-components/bbva-feature-pin-view-mx-spherica' : '@glomo-web-components/bbva-feature-pin-view-mx',
    render: 'litElement',
    properties: {
      warningIcon: 'coronita:warning',
      iconClose: 'coronita:close',
      iconHelp: 'coronita:help',
      iconInfo: 'coronita:info',
      host: CONFIG.globalServices.host,
      versioncards: CONFIG.globalServices.versions.cardsV1,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isNativeIos,
      environment: CONFIG.environment,
      cellsConnections: {
        in: {
          pin_request_pub_key_generated: {
            bind: 'generatedPubKeysSuccess'
          },
          pin_request_error_pub_key: {
            bind: 'errorGetPubKey'
          },
          pin_request_decrypted_success: {
            bind: 'generateCvvDecryptSuccess'
          },
          pin_request_decrypted_error: {
            bind: 'generateCvvDecryptError'
          },
          pin_request_encrypted_success: {
            bind: 'generateCvvEncryptSuccess'
          },
          pin_request_error_encrypted: {
            bind: 'errorEncryptedCvv'
          },
          [pageNameChannel + '_reset_page']: {
            bind: 'reset'
          }
        },
        out: {
          pin_request_generate_public_key: {
            bind: 'generate-pub-keys'
          },
          pin_request_decrypt: {
            bind: 'generate-cvv-decrypt'
          },
          pin_request_encrypt: {
            bind: 'generate-cvv-encrypt'
          },
          [pageNameChannel + '_NAVIGATION_DASHBOARD']: {
            bind: 'goto-dashboard',
            backStep: true
          },
          [pageNameChannel + '_analytics_initial_event']: {
            bind: 'analytics-fire-pin-request'
          }
        },
        params: {
          cardId: 'productId',
          cardNumber: 'cardNumber',
          cardKindPayment: 'cardKindPayment',
          cardExpirationDate: 'cardExpirationDate',
          cardHolderName: 'cardHolderName',
          cardText: 'cardVariant',
          cardProductId: 'cardProductId',
          cardHolderType: 'cardHolderType'
        }
      }
    }
  };
  const nativeconnectorCipher = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-cipher',
    type: 'DM',
    properties: {
      isNative: CONFIG.native || false,
      cellsConnections: {
        in: {
          pin_request_generate_public_key: {
            bind: 'generateKeyPair'
          },
          pin_request_decrypt: {
            bind: 'pinCipherDecrypt'
          },
          pin_request_encrypt: {
            bind: 'pinCipherEncryptFromConfig'
          }
        },
        out: {
          pin_request_pub_key_generated: {
            bind: 'pin-cipher-public-key-modulus-success'
          },
          pin_request_error_pub_key: {
            bind: 'pin-cipher-public-key-modulus-error'
          },
          pin_request_decrypted_success: {
            bind: 'pin-cipher-decrypt-success'
          },
          pin_request_decrypted_error: {
            bind: 'pin-cipher-decrypt-error'
          },
          pin_request_encrypted_success: {
            bind: 'pin-cipher-encrypt-from-config-success'
          },
          pin_request_error_encrypted: {
            bind: 'pin-cipher-encrypt-from-config-error'
          }
        }
      }
    }
  };
  const analyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-technical-core',
    familyPath: '@glomo-web-components/bbva-analyticmanager-technical-core',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [pageNameChannel + '_analytics_initial_event']: {
            bind: 'firePageView'
          }
        },
        out: {
          [pageNameChannel + '_REQUEST_OTP']: {
            bind: 'analytics-page-view-pin-request-otp',
            analytics: analyticsPinRequest._getAdvancedFootprints('otp')
          },
          [pageNameChannel + '_SUCCESS_PAGE']: {
            bind: 'analytics-page-view-pin-request-success-page',
            analytics: analyticsPinRequest._getAdvancedFootprints('successPage')
          },
          [pageNameChannel + '_SHOW_AGAIN']: {
            bind: 'analytics-page-view-pin-request-show-again',
            analytics: analyticsPinRequest._getAdvancedExternalLinks('showAgain')
          },
          [pageNameChannel + '_ERROR_SERVICE']: {
            bind: 'analytics-page-view-pin-request-error_service',
            analytics: analyticsPinRequest._getAdvancedFootprints('errorService')
          }
        }
      }
    }
  };
  const base = {
    hash: 'pin-request',
    currentPage: {
      url: '/pin-request/:productId'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        className: 'bg-light-grey',
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      spinner(CONFIG),
      cellsHandleLifeCycle,
      bbvaFeaturePinView,
      nativeconnectorCipher,
      analyticManager
    ]
  };
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector(isSpherica ? 'bbva-feature-pin-view-mx-spherica' : 'bbva-feature-pin-view-mx');

  return sphericaPageUtils.spherize(base);
};
