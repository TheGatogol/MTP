/* eslint-disable new-cap */
'use strict';
var moment = require('moment');
module.exports = CONFIG => {
  const utils = require('./common/helpers');
  const PAGE_NAME = 'landingSettings';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = utils.getPages(CONFIG)('landingSettings');
  const base = {
    hash: 'mx-landing-settings',
    currentPage: {
      url: '/landing-settings'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: 0,
        iOSFixedHeader: isNativeIos,
        className: `${isNativeIos ? 'ios-top-padding' : ''}`,
        cellsConnections: {
          in: {
            about_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'landingSettings',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_landingSettings: {
                bind: 'init'
              }
            },
            out: {
              landing_settings_reset_page: {
                bind: 'reset'
              },
              landing_settings_update_init_page: {
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
        zone: 'app__main',
        tag: 'configuration-access-screen',
        type: 'UI',
        render: 'litElement',
        familyPath: '@bbva-web-components-widgets/configuration-access-screen',
        properties: {
          pageName: 'landingSettings',
          cellsConnections: {
            in: {
              __bridge_page_landingSettings: {
                bind: 'setActive'
              },
              configuration_access_screen_isVisibleModuleConfiguration: {
                bind: 'isVisibleModuleConfiguration'
              },
              configuration_access_screen_isBiometricActivate: {
                bind: 'isBiometricActivate'
              },
              configuration_access_screen_isActive: {
                bind: 'isActive'
              }
            },
            out: {
              landing_settings_header_left_button_clicked: {
                bind: 'configuration-access-screen-back-navigation'
              },
              activate_ecommerce_card: {
                bind: 'configuration-access-screen-activate-switch'
              },
              ecommerce_modal_landing_settings: {
                bind: 'show-modal-ecommerce'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-landing-settings',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-landing-settings',
        properties: {
          isNativeIos,
          cellsConnections: {
            in: {
              landing_settings_header_left_button_clicked: {
                bind: 'manageBackNavegation'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackNavegation'
              },
              landing_settings_reset_page: {
                bind: 'reset'
              },
              landing_settings_update_init_page: {
                bind: 'init'
              },
              global_storage_get_landingSettings_success: {
                bind: 'manageAfterGetLocalStorage'
              },
              global_storage_get_app_settings_success: {
                bind: 'manageAfterGetAppSettings'
              },
              global_storage_get_landingSettings_error: {
                bind: 'manageAfterGetLocalStorage'
              },
              global_storage_set_landingSettings_success: {
                bind: 'manageAfterSetLocalStorage'
              },
              activate_ecommerce_card: {
                bind: 'managerSetLocalStorage'
              },
              global_device_get_secure_success: {
                bind: 'managerAfterGetBiometricChecked'
              },
              global_device_info_error: {
                bind: 'managerAfterGetBiometricChecked'
              },
              get_biometric_type_success: {
                bind: 'managerAfterGetBiometricChecked'
              },
              get_biometric_type_error: {
                bind: 'managerAfterGetBiometricChecked'
              },
              ecommerce_modal_landing_settings: {
                bind: 'sendAnalyticsModalActivateModuleCvv'
              }
            },
            out: {
              landing_settings_go_back: {
                bind: 'go-back',
                backStep: true
              },
              landing_settings_navigate_to_page: {
                bind: 'navigate-to-page',
                link: {
                  page: {
                    bind: 'page'
                  }
                }
              },
              global_get_from_storage: {
                bind: 'get-from-local-storage'
              },
              global_set_in_storage: {
                bind: 'set-local-storage'
              },
              show_configuration_access: {
                bind: 'init-configuration-access'
              },
              configuration_access_screen_isVisibleModuleConfiguration: {
                bind: 'set-property-isVisibleModuleConfiguration-configuration-access-screen'
              },
              configuration_access_screen_isBiometricActivate: {
                bind: 'set-property-isBiometricActivate-configuration-access-screen'
              },
              configuration_access_screen_isActive: {
                bind: 'set-property-isActive-configuration-access-screen'
              },
              global_device_info_get_secure: {
                bind: 'glomo-get-device-secure-info'
              },
              complaints_check_enabled_ios: {
                bind: 'glomo-get-biometric-device'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              }
            },
            params: {
              continue: 'landingSettingsContinue'
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-dashboard',
          currentPage: 'about',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              about_back_request: {
                bind: 'goBack'
              },
              navigation_about_to_page: {
                bind: 'navigateToPage'
              },
              mobile_manage_operation_terms_conditions_result: {
                bind: 'enableNativeBackNavigation'
              },
              about_disable_native_back_navigation: {
                bind: 'disableNativeBackNavigation'
              }
            },
            out: {
              navigation_about_to_aboutInfo: {
                bind: 'navigation-to-aboutInfo',
                link: {
                  page: 'aboutInfo'
                }
              },
              navigation_about_to_previous_page: {
                bind: 'navigate-to-previous-page',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-about-info-dm',
        tag: 'glomo-about-info-dm-mx',
        properties: {
          appVersion: CONFIG.appVersion,
          native: CONFIG.native || false,
          compileVersion: moment().format('YYYYMMDD'),
          spinnerDuration: 0,
          isPublicTermsAndConditions: true,
          cellsConnections: {
            in: {
              about_get_terms_conditions: {
                bind: 'getTermsAndConditions'
              },
              mobile_manage_operation_terms_conditions_result: {
                bind: 'getTermsAndConditionsResult'
              },
              about_item_clicked: {
                bind: 'manageAbout'
              },
              about_reset_page: {
                bind: 'reset'
              }
            },
            out: {
              about_disable_native_back_navigation: {
                bind: 'glomo-about-get-terms-and-conditions-pdf'
              },
              complaints_about_open_document_by_name: {
                bind: 'glomo-about-get-terms-and-conditions-pdf'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_alert_manager_open_with_settings: {
                bind: 'PDF-GENERATION-ERROR-DEFAULT'
              },
              navigation_about_to_page: {
                bind: 'navigate-to-about'
              },
              global_application_feedback_link: {
                bind: 'feedback-link'
              },
              global_application_feedback_exit_url: {
                bind: 'feedback-exit-url'
              },
              global_application_navigate_to_feedback: {
                bind: 'navigate-to-feedback'
              },
              global_prepare_feedback: {
                bind: 'gm-test-pe-global-prepare-feedback'
              }
            },
            params: {
              isLogged: 'global_user_logged'
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'landingSettings' ], CONFIG);

  return base;
};
