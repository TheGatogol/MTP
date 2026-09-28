'use strict';

// eslint-disable-next-line complexity
module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const COUNTRY = utils.getCountry();
  const LOGO = utils.getLogo();
  const HEADER_IMG_SRC = utils.getImageLogin();
  const HEADER_IMG_SRC_CACHED_USER = utils.getImageLoginCachedUser(COUNTRY);
  // eslint-disable-next-line new-cap
  const APP_SIDEBAR = utils.APP_SIDEBAR(CONFIG);
  const CROSS_COMPONENTS = require('./common/_cross-components');
  const _localStorage = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const ONE_FIELD_LOGIN = false;
  const SHOW_USER_LOGIN_NAME = utils.getLoginShowUserLoginName(COUNTRY);
  const ALLOW_REGISTRATION = utils.getLoginAllowRegistration(COUNTRY);
  const SHORT_USER_NAME = utils.getLoginShortUserName(COUNTRY);
  const LOGIN_VIEW_CLASS_NAME = utils.getLoginViewClassName(COUNTRY);
  const sidebarOptions = utils.getMenuSidebarSections(CONFIG, COUNTRY);

  let LOGIN_MESSAGES;

  const base = {
    hash: COUNTRY + '-login-' + CONFIG.environment,
    currentPage: {
      url: '/login',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        floatingHeader: true,
        disableEdgeSwipe: false,
        edgeSwipeSensitivity: 50,
        rightDrawer: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            login_header_hidden: {
              bind: 'headerHidden'
            },
            login_menu_action: {
              bind: 'toggleMenu'
            }
          },
          out: {
            login_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },
    components: [
      CROSS_COMPONENTS.timeoutHandler(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'login',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          private: false,
          cellsConnections: {
            in: {
              __bridge_page_login: {
                bind: 'init'
              }
            },
            out: {
              login_init: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          bankNameAsTitle: true,
          className: 'header--on-dark login-header',
          logoSrc: LOGO.src,
          logoWidth: LOGO.width,
          rightIcon: 'coronita:menu',
          rightIconColor: 'white',
          rightIconAction: 'toggle-menu',
          hideLeftActions: true,
          leftIcon: 'coronita:return-12',
          leftIconAction: 'request-back-navigation',
          cellsConnections: {
            in: {
              login_step_1_visible: {
                bind: 'hideLeftActions'
              }
            },
            out: {
              login_menu_action: {
                bind: 'toggle-menu'
              },
              login_back_navigation: {
                bind: 'request-back-navigation'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'success',
          autoHide: true,
          fullHeight: true,
          className: 'overButton',
          time: 3000,
          message: 'glomo-key-recovery-success-modal-message',
          cellsConnections: {
            in: {
              global_key_recovery_create_success_reset_password: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      APP_SIDEBAR,
      {
        zone: 'app__main',
        tag: 'cells-login-view',
        type: 'UI',
        properties: {
          animated: true,
          clearIdIcon: 'coronita:close',
          endIcon: 'coronita:lock',
          headerImage: HEADER_IMG_SRC,
          headerImageCachedUser: HEADER_IMG_SRC_CACHED_USER,
          iconsSize: 24,
          startIcon: 'coronita:unlock',
          togglePwdIcon: 'coronita:visualize',
          togglePwdIconToggled: 'coronita:hide',
          delayNavigation: '4000',
          spinnerMessages: LOGIN_MESSAGES,
          loadingDelay: '4000',
          loadingProcess: true,
          autofocus: false,
          disableResetOnChangeUser: true,
          backspacePwdFullDelete: true,
          isIOS: true,
          lite: false,
          steps: true,
          oneField: ONE_FIELD_LOGIN,
          recoverPassword: true,
          showUserLoginName: SHOW_USER_LOGIN_NAME,
          showRegistrationInfo: true,
          allowRegistration: ALLOW_REGISTRATION,
          registrationStep: 1,
          className: LOGIN_VIEW_CLASS_NAME,
          messages: ['cells-molecule-spinner-loading-credentials', 'cells-molecule-spinner-loading-credentials', 'cells-molecule-spinner-loading-connection'],
          ...utils.getGreetingConfiguration(),
          shortUserName: SHORT_USER_NAME,
          goToFirstStepOnError: true,
          waitForCachedUserInitialized: true,
          showSecondaryId: CONFIG.login.showSecondaryId,
          cellsConnections: {
            in: {
              user_cached: {
                bind: 'user'
              },
              user_no_cached: {
                bind: 'setCachedUserInitialized'
              },
              login_granting_ticket_success: {
                bind: 'loadingProcessNextStep'
              },
              global_login_success: {
                bind: 'loadingSuccess'
              },
              login_error: {
                bind: 'loginError'
              },
              login_error_max_retries: {
                bind: 'loginError'
              },
              login_reset_user: {
                bind: 'reset'
              },
              global_logout_success: {
                bind: 'logoutSuccess'
              },
              global_data_error_max_retries_accept: {
                bind: 'reset'
              },
              global_login_error_blocked_user_change_user: {
                bind: 'reset'
              },
              customers_error: {
                bind: 'loginError'
              },
              login_back_navigation: {
                bind: 'goBack'
              },
              login_error_duplicated_id: {
                bind: 'hideLoading'
              }
            },
            out: {
              login: {
                bind: 'login'
              },
              register_device: {
                bind: 'register-device'
              },
              login_change_user: {
                bind: 'request-change-user'
              },
              login_step_1_visible: {
                bind: 'login-step-1-visible'
              },
              login_step_2_visible: {
                bind: 'login-step-2-visible'
              },
              navigation_login_to_dashboard: {
                bind: 'navigate-from-login',
                link: {
                  page: 'dashboard'
                }
              },
              navigation_login_to_digital_activation: {
                bind: 'request-register',
                link: {
                  page: 'digitalActivation'
                }
              },
              navigation_login_to_digital_activation_init_analitycs: {
                bind: 'register-user'
              },
              login_forgot_password: {
                bind: 'request-password-recover',
                link: {
                  page: 'keyRecovery'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-public-app-settings',
        properties: {
          host: CONFIG.settingsHost,
          native: !!CONFIG.native,
          namespace: CONFIG.namespace,
          endpoint: CONFIG.endpoints.publicSettings,
          sidebarPages: sidebarOptions,
          cellsConnections: {
            in: {
              login_init: {
                bind: 'getAppSettings'
              },
              global_storage_get_isMonoEnterpriseDebitCardClient_success: {
                bind: 'sidebarConfigurationTDDE'
              },
              global_storage_get_isMonoEnterpriseDebitCardClient_error: {
                bind: 'sidebarConfigurationTDDE'
              }
            },
            out: {
              global_set_app_settings: {
                bind: 'app-settings-request-success'
              },
              global_set_app_settings_error: {
                bind: 'app-settings-request-error'
              },
              tdde_sidebar_configuration: {
                bind: 'available-sections'
              },
              global_get_from_storage: {
                bind: 'get-flag-tdde-from-local-storage'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'CC',
        tag: 'glomo-feature-flag-dm',
        properties: {
          host: CONFIG.settingsHost,
          namespace: CONFIG.namespace,
          endpoint: CONFIG.endpoints.flags,
          cellsConnections: {
            in: {},
            out: {
              global_feature_flag_collection: {
                bind: 'request-feature-flag-collection-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'CC',
        tag: 'glomo-feature-flag-manager',
        properties: {
          cellsConnections: {
            in: {
              global_feature_flag_collection: {
                bind: 'featureFlagCollection'
              }
            },
            out: {
              global_feature_flag_collection_updated: {
                bind: 'feature-flag-collection-updated'
              },
              global_feature_flag_available_operations: {
                bind: 'new-product-detail-operations'
              },
              global_feature_flag_feedback_config: {
                bind: 'new-feedback-config'
              },
              global_feature_stand_in_status: {
                bind: 'feature-flag-stand-in-status'
              },
              global_feature_stand_in_status_transactions: {
                bind: 'feature-flag-stand-in-status-movements'
              },
              global_feature_flag_profile_sections: {
                bind: 'new-profile-sections'
              },
              global_feature_card_transactions_status: {
                bind: 'feature-flag-card-transactions-status'
              },
              global_feature_flag_stand_in_movements_adittional_cards: {
                bind: 'feature-flag-stand-in-movements-adittional-cards'
              },
              global_feature_account_transactions_status: {
                bind: 'feature-flag-account-transactions-status'
              },
              global_feature_pending_account_transactions_status: {
                bind: 'feature-flag-pending-account-transactions-status'
              },
              global_feature_flag_inapp_crm: {
                bind: 'feature-flag-inapp-crm'
              },
              global_feature_flag_futura_collections: {
                bind: 'new-futura-collections'
              },
              global_feature_flag_fido: {
                bind: 'feature-flag-fido-security-journeys'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-dataprovider-customer-logins',
        familyPath: '@glomo-web-components/bbva-dataprovider-customer-logins',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          version: CONFIG.globalServices.versions.loginCustomerLogin,
          cellsConnections: {
            in: {
              customer_logins_request: {
                bind: 'getCustomerLogins'
              },
              customer_global_services_headers: {
                bind: 'headers'
              }
            },
            out: {
              success_on_get_customer_logins: {
                bind: 'get-customer-logins-success'
              },
              error_on_get_customer_logins: {
                bind: 'api-dm-response-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-dataprovider-customer-logins',
        familyPath: '@glomo-web-components/bbva-dataprovider-customer-logins',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native,
          version: CONFIG.globalServices.versions.getIndicators,
          cellsConnections: {
            in: {
              customer_indicators_request: {
                bind: 'getCustomerIndicators'
              },
              customer_global_services_headers: {
                bind: 'headers'
              },
              success_on_get_customer_indicators: {
                bind: 'getLastResponseHeadersLogins'
              }
            },
            out: {
              success_on_get_customer_indicators: {
                bind: 'get-customer-indicators-success'
              },
              error_on_get_customer_indicators: {
                bind: 'api-dm-response-error'
              },
              headers_customer_logins: {
                bind: 'get-last-response-headers-logins'
              }
            }
          }
        }
      }
    ]
  };

  CROSS_COMPONENTS.common(CONFIG, 'login').filter(e => ![ 'disconnected-banner' ].includes(e.id)).map(component => base.components.push(component));
  _localStorage.addOutStorageChannels(base.components, CONFIG.localStorageKeys, CONFIG);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-manager-widgets-error-handler', 'widgetErrorHandler', [ 'close-otp-modal' ]);

  return base;
};
