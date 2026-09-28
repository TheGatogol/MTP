'use strict';
const pages = require('./common/_pages');
const { bbvaQrPluginConfigs } = require('./common/helpers/_constants');
const { useNames, createPrefixFromPageName, createSpinner, headerHeight } = require('./common/helpers/_utils');
const pageName = 'codiQrScanner';
const operativePrefix = createPrefixFromPageName(pageName);
const [ getChannelName ] = useNames(operativePrefix);

module.exports = (config) => {
  const codiQrScannerPage = pages(config)(pageName);
  const analyticsPage = require('./analytics/_codiQrPayments')(config);
  const analyticsCodiOnboarding = require('./analytics/_codiOnboarding')(config);
  const localStorageApp = require('./common/_local-storage');
  const isNativeiOS = config.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const cellsSpinnerVeil = createSpinner(config);
  cellsSpinnerVeil.tagSpherica = 'cells-spinner-veil-spherica';
  cellsSpinnerVeil.propertiesSpherica = {
    className: 'solid-spinner',
    open: true,
    newCellsConnections: {
      add: {
        in: {
          __bridge_app: {
            bind: 'show'
          },
          navigation_to_codi: {
            bind: 'openVeil'
          },
          native_click_event: {
            bind: 'openVeil'
          },
          codi_qr_scanner_glomo_qr_plugin_params: {
            bind: 'show'
          },
          navigation_codi_transaction_history: {
            bind: 'show'
          },
          navigation_payment_request: {
            bind: 'show'
          },
          navigation_payment_steps: {
            bind: 'show'
          },
          glomo_navigate_to_private_qr_scanner: {
            bind: 'show'
          },
          codi_qr_scanner_open_onboarding_codi_slider: {
            bind: 'hide'
          },
          codi_qr_scanner_qr_scanner_plugin_response_success: {
            bind: 'hide'
          },
          codi_qr_scanner_qr_scanner_plugin_response_error: {
            bind: 'hide'
          },
          close_control_veil: {
            bind: 'hide'
          }
        }
      }
    }
  };
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = config;
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const onboardingSlides = [
    {
      item: {
        title: 'codi-qr-first-payment-onboarding-slide1-title',
        desc: 'codi-qr-first-payment-onboarding-slide1-description',
        descClasses: 'pfm-subtle-description',
        img: './images/codi/digital-payment-device.svg'
      }
    },
    {
      item: {
        title: 'codi-qr-first-payment-onboarding-slide2-title',
        desc: 'codi-qr-first-payment-onboarding-slide2-description',
        descClasses: 'pfm-subtle-description',
        img: './images/cardlessWithdrawal/Quick-Cash-QR.svg'
      }
    }
  ];

  const sphericaSlides = [{
    id: 'first-carousel-slide',
    slideTitle: 'codi-payment-qr-carousel-first-slide-title-spherica',
    slideTitleTag: 'h3',
    description: 'codi-payment-qr-carousel-first-slide-description-spherica',
    microillustration: 'digitalPaymentDeviceOk',
    showInfoIcon: '',
    infoIcon: '',
    bgImg: ''
  },
  {
    id: 'second-carousel-slide',
    slideTitle: 'codi-payment-qr-carousel-second-slide-title-spherica',
    slideTitleTag: 'h3',
    description: 'codi-payment-qr-carousel-second-slide-description-spherica',
    microillustration: 'qrMobile',
    showInfoIcon: '',
    infoIcon: '',
    bgImg: ''
  }];

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          codi_qr_exit_to_dashboard: {
            bind: 'alert-CODI-REFACTOR-NOT-AVAILABLE-MODAL-accept',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      className: `dark-blue-bg ${config.nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      headerFixed: true,
      headerHeight,
      iOSFixedHeader: isNativeiOS
    },
    propertiesSpherica: {
      className: '',
      headerHeight: 0
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_codiQrScanner: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          initialize_onboarding_slides: {
            bind: 'init-page'
          },
          initialize_app_lifecycle_observer: {
            bind: 'init-page',
            'forward-to-native': true
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      text: 'codi-payment-qr-modal-invalid-qr-header-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        out: {
          [getChannelName('back_request')]: {
            bind: 'header-main-icon-right-secondary-click'
          },
          codiQrScanner_back_request_action_to_log: {
            bind: 'header-main-icon-right-secondary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'modal-initial',
      ambient: 'secondary',
      iconRightPrimary: '',
      accessibilityTextIconRightPrimary: '',
      rightButtons: [
        {
          id: 'btn-close',
          name: 'Close',
          icon: 'spherica:close',
          accessibilityText: 'bbva-help-modal-close-button',
          label: 'bbva-help-modal-close-button',
          defaultEventIconName: 'header-main-icon-right-secondary-click'
        }
      ]
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-previous-page',
      cellsConnections: {
        in: {
          [getChannelName('back_request_action')]: {
            bind: 'goBack'
          },
          [getChannelName('exit_to_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('back_page')]: {
            bind: 'navigate-previous-page',
            backStep: true,
            skipHistory: true
          },
          codiQrScanner_back_request_action_to_log: {
            bind: 'header-main-icon-right-secondary-click'
          },
          codi_qr_exit_to_dashboard: {
            bind: 'navigation-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          },
          codi_qr_exit_to_expenses: {
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
  const onboarding = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-modal-slider',
    properties: {
      buttonLabel: 'glomo-qr-scanner-opetative-codi',
      title: 'glomo-qr-scanner-opetative-codi-title',
      alignTop: true,
      hasSecondaryButton: true,
      secondaryButtonLabel: 'codi-qr-payments-p2p-request-bbva-button-text-slider-modal',
      className: 'header--core',
      sliderValues: onboardingSlides,
      cellsConnections: {
        in: {
          codi_qr_scanner_open_onboarding: {
            bind: 'openModal'
          }
        },
        out: {
          codi_qr_scanner_close_onboarding: {
            bind: 'cells-bottom-modal-closed'
          }
        }
      }
    }
  };
  const carouselSwipeSpherica = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-carousel-swipe-spherica',
    familyPath: '@glomo-web-components/bbva-carousel-swipe-spherica',
    render: 'litElement',
    properties: {
      slideDelay: 5,
      isVisible: false,
      slides: sphericaSlides,
      playButtonLabel: 'codi-payment-qr-carousel-pause-spherica',
      closeButtonLabel: 'codi-payment-qr-carousel-close-spherica',
      helpButtonLabel: 'codi-payment-qr-carousel-help-spherica',
      backButtonLabel: 'codi-payment-qr-carousel-back-spherica',
      nextButtonLabel: 'codi-payment-qr-carousel-next-spherica',
      secondaryButtonText: 'codi-payment-qr-carousel-secondary-btn-text-spherica',
      cellsConnections: {
        in: {
          codi_qr_scanner_open_onboarding: {
            bind: 'openSlider'
          }
        },
        out: {
          codi_qr_scanner_close_onboarding: {
            bind: 'onboarding-carousel-continue-button-click'
          }
        }
      }
    }
  };
  const bbvaManager = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-manager-codi-qr-payments',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          initialize_onboarding_slides: {
            bind: 'getOnboardingSlides'
          },
          codi_begin_register_exit_to_expenses: {
            bind: 'redirectToDashboard'
          },
          redirection_success_to_expenses: {
            bind: 'redirectToDashboard'
          },
          go_to_request_payment_codi_from_expenses_group: {
            bind: 'redirectToExpenses'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          [getChannelName('init_page')]: {
            bind: 'initQrScanner'
          },
          connection_status_codiQrScanner_offline: {
            bind: 'networkDisconnected'
          },
          connection_status_codiQrScanner_online: {
            bind: 'networkReconnected'
          },
          codi_qr_scanner_close_onboarding: {
            bind: 'setOnboardingVisited'
          },
          [getChannelName('open_settings_cancel')]: {
            bind: 'goPageBack'
          },
          glomo_navigate_to_private_qr_scanner: {
            bind: 'successQrPayment'
          },
          [getChannelName('qr_scanner_plugin_response_error')]: {
            bind: 'openModalPermissionCamera'
          },
          qr_reset_back: {
            bind: 'reset'
          },
          codi_qr_payments_reader_success_BACK_STEP: {
            bind: 'reset'
          },
          global_qr_from_gallery: {
            bind: 'closeVeilAction'
          },
          global_error_qr_from_gallery: {
            bind: 'closeVeilAction'
          },
          qr_scanner_back: {
            bind: 'reset'
          },
          navigation_payment_steps: {
            bind: 'reset'
          },
          codi_qr_request_steps_BACK_STEP: {
            bind: 'changeReset'
          },
          [getChannelName('go_to_request_steps')]: {
            bind: 'goToRequestSteps'
          },
          [getChannelName('back_request')]: {
            bind: 'exitFlow'
          },
          qr_scanner_back_exit: {
            bind: 'exitFlow'
          },
          qr_scanner_close_button_header: {
            bind: 'exitFlow'
          },
          [getChannelName('leave_operative')]: {
            bind: 'exitFlow'
          },
          [getChannelName('post_banxico_authorization_request_success')]: {
            bind: 'handleValidationAccountRequestSuccess'
          },
          [getChannelName('post_banxico_authorization_request_error')]: {
            bind: 'handleValidationAccountRequestSuccess'
          },
          blue_navigate_codi_to_blue: {
            bind: 'comeFromBlue'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          codi_qr_scanner_open_settings_accept: {
            'bind': 'openSetting'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          [getChannelName('open_onboarding')]: {
            bind: 'open-onboarding-codi-qr'
          },
          [getChannelName('qr_scanner_init')]: {
            bind: 'open-qr-scanner'
          },
          qr_payments_disconnected: {
            bind: 'codi-offline-step-page'
          },
          [getChannelName('navigate_enrollment_codi')]: {
            bind: 'navigate-to-enrollment-codi',
            link: {
              page: 'codiBeginRegister',
              skipHistory: true
            }
          },
          [getChannelName('redirect_enrollment_to_expenses_group')]: {
            bind: 'redirect-enrollment-to-expenses-group'
          },
          [getChannelName('redirection_steps_to_expenses_group')]: {
            bind: 'redirect-to-expenses-group'
          },
          navigation_payment_steps: {
            bind: 'go-to-request-steps',
            link: {
              page: 'codiQrRequestSteps'
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-modal'
          },
          [getChannelName('leave_operative')]: {
            bind: 'back-step-out-flow'
          },
          set_qr_scanner_reset: {
            bind: 'set-response-qr-scanner'
          },
          [getChannelName('back-to-dashboard')]: {
            bind: 'out-to-dashboard'
          },
          [getChannelName('exit_to_page')]: {
            bind: 'exit-to-page'
          },
          request_codi_account_validation_status: {
            bind: 'requestCodiValidationStatus'
          },
          codi_qr_scanner_connected_successful: {
            bind: 'connected-successful',
            analytics: analyticsPage.errorConnection
          },
          codi_qr_scanner_init_qr_scanner_configuration: {
            bind: 'init-qr-scanner-configuration'
          },
          codi_qr_scanner_codi_account_pending_validate: {
            bind: 'codi-account-pending-validate'
          },
          codi_qr_scanner_open_onboarding_codi_slider: {
            bind: 'open-onboarding-codi-qr'
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
              bind: 'open-alert-modal'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const bbvaQrPlugin = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('glomo_qr_plugin_params')]: {
            bind: 'openCameraCodeReader'
          },
          glomo_qr_plugin_fromimage_params: {
            bind: 'fromImage'
          }
        },
        out: {
          [getChannelName('qr_scanner_plugin_response_success')]: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [getChannelName('qr_scanner_plugin_response_error')]: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };
  const nativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_settings_accept')]: {
            bind: 'openSetting'
          }
        }
      }
    }
  };
  const bbvaManagerQrScanner = {
    zone: 'app__main',
    type: 'CC',
    tag: 'bbva-manager-qr-scanner-mx',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      qrPluginConfigs: bbvaQrPluginConfigs.codi,
      cellsConnections: {
        in: {
          [getChannelName('qr_scanner_init')]: {
            bind: 'managePluginParams'
          },
          [getChannelName('qr_scanner_plugin_response_success')]: {
            bind: 'getDataQrCodi'
          },
          qr_scanner_set_plugin_config: {
            bind: 'setQrPluginConfig'
          },
          set_qr_scanner_reset: {
            bind: 'getDataQrCodi'
          },
          qr_scanner_action_buttons: {
            bind: 'managerActions'
          }
        },
        out: {
          close_control_veil: {
            bind: 'close-control-veil'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          [getChannelName('glomo_qr_plugin_params')]: {
            bind: 'glomo-qr-plugin-params'
          },
          qr_scanner_back_reset: {
            bind: 'glomo-qr-scanner-back'
          },
          qr_scanner_back_exit: {
            bind: 'glomo-qr-scanner-back'
          },
          qr_scanner_close_button_header: {
            bind: 'close-button-header'
          },
          glomo_navigate_to_private_qr_scanner: {
            bind: 'navigate-to-private-qr-scanner',
            link: {
              page: 'codiQrPaymentsReaderSuccess',
              skipHistory: true,
              cleanUntil: 'codiQrScanner'
            }
          },
          glomo_navigate_to_public_qr_scanner: {
            bind: 'navigate-to-public-qr-scanner',
            nativeLink: {
              page: 'nativeLogin',
              params: {
                pageAfterLogin: 'pageAfterLogin',
                paramsAfterLogin: 'paramsAfterLogin'
              },
              cleanUntil: 'loading'
            }
          },
          navigation_payment_request: {
            bind: 'operation-payment-request-click',
            link: {
              page: 'codiPaymentRequestMain'
            }
          },
          [getChannelName('go_to_request_steps')]: {
            bind: 'operation-payment-steps-click'
          },
          navigation_codi_transaction_history: {
            bind: 'operation-movements-click',
            link: {
              page: 'codiTransactionHistory'
            },
            navigate_to_codi_register: {
              bind: 'navigate-to-codi-begin-register',
              link: {
                page: 'codiBeginRegister',
                skipHistory: true
              }
            }
          }
        }
      }
    }
  };

  const analyticManagerCodi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_to_codi: {
            bind: 'navigationToCodi'
          },
          navigation_product_detail_to_codi: {
            bind: 'navigationToCodiProductDetail'
          },
          navigation_account_section_to_qr_payment: {
            bind: 'navigationToCodiProductDetail'
          },
          go_to_request_payment_codi_from_expenses_group: {
            bind: 'navigationExpensesGroupPaymentsRequest'
          },
          codi_qr_scanner_init_qr_scanner_configuration: {
            bind: 'initQrScannerOnboarding'
          },
          global_native_landing_shortcut_link_analytics: {
            bind: 'shortcutPublicConfig'
          },
          global_native_menu_item_clicked_analytics: {
            bind: 'sidebarPublicConfig'
          },
          codi_qr_scanner_codi_account_pending_validate: {
            bind: 'codiAccountPendingValidate'
          }
        },
        out: {
          codi_qr_scanner_app_on_click_start: {
            bind: 'analytic-onboarding-on-click-start',
            analytics: analyticsCodiOnboarding.appOnClickStartCodiOnboarding
          },
          codi_qr_scanner_analytic_codi_account_pending_validate: {
            bind: 'analytic-account-pending-validate',
            analytics: analyticsCodiOnboarding.footprintValidatingYourRegistration
          }
        }
      }
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
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          __bridge_page_codiQrScanner: {
            bind: 'enrollmentQrScannerInit'
          },
          global_storage_get_banxico_push_unified_log_event_success: {
            bind: 'pushReceptionLog'
          },
          global_storage_get_banxico_push_unified_log_event_error: {
            bind: 'pushReceptionLog'
          },
          global_storage_get_loginData_success: {
            bind: 'setClientIdFromLocalStorage'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
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
          codiQrScanner_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiQrScanner_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          qr_scanner_close_button_header: {
            bind: 'onClickButtonHeader'
          },
          connection_status_codiQrScanner_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiQrScanner_offline: {
            bind: 'saveLostInternetConnection'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiQrScanner_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiQrScanner_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderBanxico = {
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiQrScanner_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiQrScanner_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiQrScanner_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiQrScanner_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };

  const banxicoAPI = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      host: config.globalServices.host,
      native: config.native || false,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          request_codi_account_validation_status: {
            bind: 'postAuthorizationRequest'
          }
        },
        out: {
          [getChannelName('post_banxico_authorization_request_success')]: {
            bind: 'success-on-post-banxico-authorization-request'
          },
          [getChannelName('post_banxico_authorization_request_error')]: {
            bind: 'error-on-post-banxico-authorization-request'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-qr-scanner',
    currentPage: {
      url: '/codi-qr-scanner'
    },
    pages: codiQrScannerPage,
    template,
    components: [
      lifeCycle,
      header,
      navigationHandler,
      bbvaManager,
      bbvaQrPlugin,
      nativeSettings,
      cellsSpinnerVeil,
      bbvaManagerQrScanner,
      managerCodiLog,
      dataProviderBanxico,
      banxicoAPI,
      analyticManagerCodi,
      cellsConnectionStatus(pageName)
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [
    'all_codi_accounts_validated',
    'qr_payments_codi_onboarding',
    'registration_completed_codi',
    'enrollment_codi_key',
    'codi_email_user',
    'unified_log_timeout_session_key',
    'lost_internet_log',
    'banxico_push_unified_log_event',
    'codi_pending_accounts',
    'banxico_push_status'
  ], config);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
    base.components.push(carouselSwipeSpherica);
  } else {
    base.components.push(onboarding);
  }

  return sphericaPageUtils.spherize(base);
};
