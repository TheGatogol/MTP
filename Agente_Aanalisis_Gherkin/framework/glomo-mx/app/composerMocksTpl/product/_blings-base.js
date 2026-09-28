'use strict';

module.exports = PRODUCT => CONFIG => {
  const { cellsConnectionStatus } = require('../common/_cross-components.js');
  const { capitalize, kebabCase, snakeCase } = require('../common/helpers/_utils.js');
  const pageName = `blings${capitalize(PRODUCT)}`;
  const pageSnakeCase = snakeCase(pageName);
  const productLowerCase = PRODUCT.toLowerCase();
  const pages = require('../common/_pages.js')(CONFIG)(pageName);
  const sphericaPageUtils = require('../common/helpers/_spherica')(CONFIG, pageName);

  const {
    globalServices: { requiredToken = 'tsec' },
    nativeIos = false,
    blingsPlayerConfig
  } = CONFIG;

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      iOSFixedHeader: nativeIos,
      className: 'dark-blue-bg',
      extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [`${pageSnakeCase}_recalculate_header`]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
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
          [`${pageSnakeCase}_recalculate_header`]: {
            bind: 'init-page'
          },
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const navigation = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'go-back-dashboard',
      cellsConnections: {
        in: {
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_exit_project_blings`]: {
            bind: 'goBack'
          }
        },
        out: {
          [`${pageSnakeCase}_go_back_dashboard`]: {
            bind: 'go-back-dashboard',
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };

  const headerMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    properties: {
      className: 'bg-core-blue',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_set_header`]: {
            bind: 'text'
          },
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_mortgage_generic_error_information`]: {
            bind: 'hidden'
          }
        },
        out: {
          [`${pageSnakeCase}_header_main_icon_right_primary_click`]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const featureSdkBlings = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-feature-sdk-videos-mortgage-blings',
    tag: 'bbva-feature-sdk-videos-mortgage-blings',
    render: 'litElement',
    properties: {
      operativeName: PRODUCT,
      blingsPlayerConfig,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_deep_link_unparsed_offers_retrieved: {
            bind: 'dataOffers'
          },
          global_login_success_indicators: {
            bind: 'customerData'
          },
          [`connection_status_${pageName}_online`]: {
            bind: 'internetConnectionRestored'
          },
          [`connection_status_${pageName}_offline`]: {
            bind: 'internetConnectionLost'
          },
          global_set_app_settings: {
            bind: 'getAppSettings'
          },
          global_storage_get_app_settings_success: {
            bind: 'getAppSettings'
          },
          [`${pageSnakeCase}_header_main_icon_right_primary_click`]: {
            bind: 'exitProjectBlings'
          },
          [`${pageSnakeCase}_hash_generated_successful`]: {
            bind: 'hashRecoveredFile'
          },
          [`${pageSnakeCase}_error_generating_hash`]: {
            bind: 'hashErrorRecovered'
          },
          glomo_send_selected_original_shortcut_data: {
            bind: 'initSdkVideo'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'originalOfferData'
          }
        },
        out: {
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_set_header`]: {
            bind: 'bbva-feature-sdk-videos-mortgage-blings-set-header'
          },
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_generate_hash_sdk_file`]: {
            bind: 'bbva-feature-sdk-videos-mortgage-blings-generate-hash-sdk-file'
          },
          [`${pageSnakeCase}_bbva_feature_sdk_blings_mortgage_success_video`]: {
            bind: `bbva-feature-sdk-videos-mortgage-blings-${productLowerCase}-success-video`
          },
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_mortgage_state_saved`]: {
            bind: `bbva-feature-sdk-videos-mortgage-blings-${productLowerCase}-state-saved`
          },
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_mortgage_generic_error_information`]: {
            bind: `bbva-feature-sdk-videos-mortgage-blings-${productLowerCase}-generic-error-information`
          },
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_exit_project_blings`]: {
            bind: 'bbva-feature-sdk-videos-mortgage-blings-exit-project-blings'
          }
        }
      }
    }
  };

  const codicelCrypto = {
    type: 'DM',
    tag: 'glomo-codicel-crypto-dm',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          [`${pageSnakeCase}_bbva_feature_sdk_videos_mortgage_blings_generate_hash_sdk_file`]: {
            bind: 'generateHashSha256'
          }
        },
        out: {
          [`${pageSnakeCase}_hash_generated_successful`]: {
            bind: 'hash-generated-sha-256'
          },
          [`${pageSnakeCase}_error_generating_hash`]: {
            bind: 'error-generate-hash-sha-256'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: `/${kebabCase(pageName)}`
    },
    pages,
    template,
    components: [
      cellsConnectionStatus(pageName),
      lifeCycle,
      navigation,
      headerMain,
      featureSdkBlings,
      codicelCrypto
    ]
  };
  return sphericaPageUtils.spherize(base);
};
