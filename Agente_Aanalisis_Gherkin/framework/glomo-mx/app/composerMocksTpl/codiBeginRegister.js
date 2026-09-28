'use strict';

module.exports = CONFIG => {
  const localStorageApp = require('./common/_local-storage');
  const pageName = 'codiBeginRegister';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const { useNames, createPrefixFromPageName, SPINNER: getSpinner } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const analytics = require('./analytics/_codiOnboarding')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const spinner = getSpinner(CONFIG);
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  let base = {
    hash: 'codi-begin-register',
    currentPage: {
      url: '/codi-begin-register'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        drawerWidth: '100%',
        fixOffsetScroll: 0,
        preventScrollWithOverlay: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'DM',
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
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('_init_page')]: {
                bind: 'init-page'
              },
              codiBeginRegister_GET_ENROLLMENT_DATA: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      }
    ]
  };
  const managerCodiOnboarding = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-onboarding',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('_init_page')]: {
            bind: 'validateUser'
          },
          global_storage_get_codi_enrollment_attemps_success: {
            bind: 'getEnrollmentAttempsFromStorage'
          },
          global_storage_get_codi_enrollment_attemps_error: {
            bind: 'getEnrollmentAttempsFromStorage'
          },
          global_device_info_get_true_time_success: {
            bind: 'getCurrentDate'
          },
          codi_qr_scanner_redirect_enrollment_to_expenses_group: {
            bind: 'redirectToExpenses'
          },
          user_is_logged: {
            bind: 'isLogged'
          },
          global_storage_get_registration_completed_codi_success: {
            bind: 'verifyEnrollmentCodi'
          },
          global_storage_get_registration_completed_codi_error: {
            bind: 'verifyEnrollmentCodi'
          },
          global_storage_get_banxico_push_status_success: {
            bind: 'setBanxicoPushStatus'
          },
          global_storage_get_banxico_push_status_error: {
            bind: 'setBanxicoPushStatus'
          },
          global_set_app_settings: {
            bind: 'setAmountLimitRequest'
          },
          codi_refactor_back_to_dashboard: {
            bind: 'exitFlow',
            previousState: false
          },
          navigate_to_main: {
            bind: 'exitFlow'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'exitFlow'
          },
          blue_navigate_codi_to_blue: {
            bind: 'comeFromBlue'
          }
        },
        out: {
          codi_begin_register_exit_operative: {
            bind: 'back-step-out-flow',
            backStep: true
          },
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_device_info_get_true_time: {
            bind: 'get-date-time'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          open_otp_codi: {
            bind: 'set-modal-config'
          },
          [getChannelName('open_modal_codi_not_available')]: {
            bind: 'open-codi-modal-not-available',
            link: {
              page: 'aboutPage'
            }
          },
          user_not_logged: {
            bind: 'return-to-login-page',
            backStep: true,
            'foward-to-native': true
          },
          codi_navigate_to_qr: {
            bind: 'navigate-to-qr-codi-page',
            link: {
              page: 'codiQrScanner',
              skipHistory: true
            }
          },
          codi_close_modal: {
            bind: 'navigate-close-modal-codi',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'codi-validate-accounts'
          },
          [getChannelName('analytic_onboarding_user_state_area')]: {
            bind: 'analytic-onboarding-state-area-response'
          },
          [getChannelName('text_amount_limit')]: {
            bind: 'text-amount-limit'
          },
          [getChannelName('exit_to_page')]: {
            bind: 'exit-to-page'
          },
          codi_begin_register_account_pending_validate: {
            bind: 'codi-account-pending-validate'
          }
        }
      }
    }
  };
  const managerAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('analytic_onboarding_user_state_area')]: {
            bind: 'setUserStateArea'
          },
          codi_begin_register_account_pending_validate: {
            bind: 'accountPendingValidate'
          }
        },
        out: {
          [getChannelName('analytic_user_state_area_onboarding')]: {
            bind: 'analytic-user-state-area-onboarding',
            analytics: analytics.fingerPrintPageView
          },
          codi_begin_register_analytic_account_pending_validate: {
            bind: 'analytic-account-pending-validate',
            analytics: analytics.footprintValidatingYourRegistration
          }
        }
      }
    }
  };
  const headerPage = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-enrollment-page-header',
      text: 'codi-refactor-enrollment-page-header',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          navigate_to_main: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'bbva-header-main-spherica',
      type: 'modal',
      override: {
        id: 'codi-refactor-enrollment-page-header',
        text: 'codi-refactor-enrollment-page-header',
        cellsConnections: {
          out: {
            codi_begin_register_close_header: {
              bind: 'header-main-close-icon-click'
            }
          }
        }
      }
    })
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-previous-page',
      cellsConnections: {
        in: {
          codi_begin_register_close_header: {
            bind: 'goBack'
          },
          [getChannelName('exit_to_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          codi_begin_register_back_page: {
            bind: 'navigate-previous-page',
            backStep: true
          },
          codi_refactor_back_forward_dashboard: {
            bind: 'navigation-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          codi_begin_register_exit_to_expenses: {
            bind: 'navigation-to-expenses-group',
            link: {
              page: 'expensesGroup',
              cleanUntil: 'expensesGroup'
            }
          },
          codi_begin_register_exit_to_digital_butler: {
            bind: 'navigation-to-digital-butler',
            link: {
              page: 'digitalButler',
              cleanUntil: 'digitalButler'
            }
          }
        }
      }
    }
  };
  const panelInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-begin-register-page-info',
      microillustration: 'sendmoneyappdollardark',
      heading: 'codi-refactor-begin-register-page-info-heading',
      text: 'codi-refactor-begin-register-page-info'
    },
    propertiesSpherica: {
      microillustration: 'sendMoneyApp',
      variant: 'primary-alt',
      className: 'u-margin--grid u-margin-bottom--1 u-margin-top--1'
    }
  };
  const headerCategoryMain = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-begin-register-page-characteristic',
      className: 'u-text-color--600',
      text: 'codi-refactor-begin-register-page-category-1'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listBulletCharacteristicMain = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      text: 'codi-refactor-begin-register-page-characteristic-1'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listBulletCharacteristicSecondary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      cellsConnections: {
        in: {
          [getChannelName('text_amount_limit')]: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const headerCategorySecondary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    tagSpherica: 'bbva-header-category-spherica',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'codi-refactor-begin-register-page-benefit',
      className: 'u-margin-top--1-5 u-text-color--600',
      text: 'codi-refactor-begin-register-page-category-2'
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listBulletBenefitMain = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      text: 'codi-refactor-begin-register-page-benefit-1'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const listBulletBenefitSecondary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      icon: 'coronita:bullet1',
      text: 'codi-refactor-begin-register-page-benefit-2'
    },
    propertiesSpherica: {
      icon: 'spherica:bullet',
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };
  const notificationMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    tagSpherica: 'bbva-notification-message-spherica',
    familyPath: '@bbva-web-components/bbva-notification-message',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      icon: 'coronita:info',
      className: 'u-margin--grid u-margin-top--1-5 u-margin-bottom--1-5',
      message: 'codi-refactor-begin-register-page-message'
    },
    propertiesSpherica: {
      messageTitle: 'codi-refactor-begin-register-page-message',
      bookTitle: true,
      message: '',
      icon: 'spherica:info'
    }
  };
  const buttonDefault = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'primary',
      id: 'codi-refactor-begin-register-page-button-default',
      text: 'codi-refactor-begin-register-page-button-default',
      className: 'u-display--table u-margin--center',
      cellsConnections: {
        out: {
          codi_open_enrollments_refactor_page: {
            bind: 'click',
            link: {
              page: 'codiEnrollment',
              skipHistory: true
            }
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--grid u-margin-bottom--0-5 u-height--56 u-max-width--2'
    }
  };
  const buttonDefaultSecondary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      variant: 'link',
      id: 'codi-refactor-begin-register-page-button-default-2',
      text: 'codi-refactor-begin-register-page-button-default-2',
      className: 'u-display--table u-margin--center u-margin-top--1 u-margin-bottom--1',
      cellsConnections: {
        out: {
          navigate_to_main: {
            bind: 'click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullwidth: true,
      className: 'u-margin--grid u-margin-bottom--0-5 u-height--56 u-max-width--2'
    }
  };

  const managerCodiLog = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-unified-log',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          native_user_id: {
            bind: 'numberPhone'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          codiBeginRegister_GET_ENROLLMENT_DATA: {
            bind: 'getEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          global_storage_get_unified_log_timeout_session_key_success: {
            bind: 'setTimeoutSessionVerified'
          },
          global_storage_get_unified_log_timeout_session_key_error: {
            bind: 'setTimeoutSessionVerified'
          },
          codi_session_timeout_expired: {
            bind: 'saveInLocalstorageTimeout'
          },
          connection_status_codiBeginRegister_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiBeginRegister_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiBeginRegister_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiBeginRegister_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          navigate_to_main: {
            bind: 'codiSectionLeaveLog'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiBeginRegister_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiBeginRegister_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderCodiBanxico = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiBeginRegister_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiBeginRegister_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiBeginRegister_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiBeginRegister_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };


  base.components.push(
    managerCodiOnboarding,
    managerAnalytic,
    headerPage,
    navigationHandler,
    panelInfo,
    headerCategoryMain,
    listBulletCharacteristicMain,
    listBulletCharacteristicSecondary,
    headerCategorySecondary,
    listBulletBenefitMain,
    listBulletBenefitSecondary,
    notificationMessage,
    buttonDefault,
    buttonDefaultSecondary,
    cellsConnectionStatus(pageName),
    managerCodiLog,
    dataProviderCodiBanxico
  );
  localStorageApp.addOutStorageChannels(base.components, [
    'registration_completed_codi',
    'banxico_push_status',
    'enrollment_codi_key',
    'lost_internet_log',
    'unified_log_timeout_session_key',
    'codi_enrollment_attemps'
  ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
