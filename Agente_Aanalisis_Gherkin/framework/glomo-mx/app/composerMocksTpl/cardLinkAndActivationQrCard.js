'use strict';
module.exports = CONFIG => {
  const {
    native = false,
    nativeIos = false,
    globalServices: {
      host,
      requiredToken = 'tsec'
    } = {},
    cardsMultiOperationV1,
    aemHost
  } = CONFIG;
  const pageName = 'cardLinkAndActivationQrCard';
  const analytics = require('./analytics/_cardLinkAndActivationQrCard.js');
  const pages = require('./common/_pages.js')(CONFIG)(pageName);

  const settingsQr = {
    IOS: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        name: 'custom_qr_navigation_view',
        options: {
          title: '',
          backgroundColor: '#80072146',
          navBarBackgroundColor: '#00000000',
          navBarTintColor: '#FFFFFFFF',
          mainButtonActionTitle: '',
          mainButtonActionTitleColor: '#5BBEFF',
          closeImageName: 'ic_close_cross'
        }
      },
      overlayConfig: {
        backgroundColor: '#80072146',
        captureFrameColor: '#5BBEFF',
        borderWidth: '5',
        isFrameVisible: true,
        isImageVisible: true,
        onlyCorners: true
      }
    },
    ANDROID: {
      codeType: 'QR',
      cameraConfig: {
        flash: false,
        autoFocus: true
      },
      customViewConfig: {
        name: 'qr_custom_navigation_overlay',
        options: {
          title: '',
          buttonImage: 'ic_close_cross'
        }
      },
      overlayConfig: {
        borderWidth: 20,
        backgroundColor: '#072146',
        captureFrameColor: '#5BBEFF',
        isFrameVisible: true,
        isImageVisible: false,
        onlyCorners: true
      },
      navigationBarConfig: {
        title: '',
        backgroundColor: '#072146',
        tintColor: '#FFFFFF',
        leftImageName: 'ic_close_cross'
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bbva-core-blue',
      headerFixed: true,
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
      cellsConnections: {}
    }
  };

  const bbvaCardPayrollActivate = {
    zone: 'app__transactional',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-feature-card-link-and-activation-qr-card-mx',
    tag: 'bbva-feature-card-link-and-activation-qr-card-mx',
    render: 'litElement',
    properties: {
      maxRetries: 3,
      settingsQr,
      iOSFixedHeader: nativeIos,
      native,
      host,
      localMultiOperationDMApiVersion: cardsMultiOperationV1,
      requiredToken,
      aemHost,
      aemPath: 'content/caas/mexico/app/card-detail/payroll-card-activate/qr-card-tips.model.json',
      cellsConnections: {
        in: {
          __bridge_page_cardLinkAndActivationQrCard: {
            bind: 'init'
          },
          card_Detail_product_id: {
            bind: 'cardType'
          },
          dashboard_accounts_dashboard_manager: {
            bind: 'test'
          },
          card_Detail_simple_code_card: {
            bind: 'simpleCodeCard'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          card_Detail_simple_code: {
            bind: 'simpleCodeAccount'
          },
          card_Detail_process_id: {
            bind: 'setRequest'
          },
          card_link_and_activation_qr_card_qr_plugin_success: {
            bind: 'validateQR'
          },
          card_link_and_activation_qr_card_qr_plugin_error: {
            bind: 'onScanError'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigate'
          },
          native_back_button_clicked_close_modal: {
            bind: 'modalsEvents'
          }
        },
        out: {
          card_link_and_activation_qr_card_qr_plugin_params: {
            bind: 'bbva-feature-card-link-and-activation-qr-card-mx-qr-params-send'
          },
          card_link_and_activation_qr_card_open_settings: {
            bind: 'bbva-feature-card-link-and-activation-qr-card-mx-native-settings-open'
          },
          card_link_and_activation_qr_card_leave_page: {
            bind: 'bbva-feature-card-link-and-activation-qr-card-mx-feat-page-leave',
            backStep: true
          },
          card_link_and_activation_qr_card_analytics_initial_event: {
            bind: 'bbva-feature-card-link-and-activation-qr-card-mx-analytics-fingerprint-send'
          },
          card_link_and_activation_qr_card_analytics_internal_link_faqs: {
            bind: 'bbva-feature-card-link-and-activation-qr-card-mx-analytics-internal-link-send'
          }
        }
      }
    }
  };

  const managerAnalytics = {
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-configuration',
    tag: 'bbva-analyticmanager-card-configuration',
    render: 'litElement',
    type: 'DM',
    properties: {
      pageName,
      cellsConnections: {
        in: {
          card_link_and_activation_qr_card_analytics_initial_event: {
            bind: 'firePageView'
          },
          card_link_and_activation_qr_card_analytics_internal_link_faqs: {
            bind: 'fireInternalLink'
          }
        },
        out: {
          card_link_and_activation_qr_card_payroll_card_started: {
            bind: 'analytics-page-view-payroll-card-activate-init',
            analytics: analytics.appPageVisit
          },
          card_link_and_activation_qr_card_payroll_card_scan: {
            bind: 'analytics-page-view-payroll-card-activate-scan',
            analytics: analytics.appStarted('escanear')
          },
          card_link_and_activation_qr_card_payroll_card_information: {
            bind: 'analytics-page-view-payroll-card-activate-information-page-view',
            analytics: analytics.pageViewMoreInformation
          },
          card_link_and_activation_qr_card_payroll_card_information_started: {
            bind: 'analytics-page-view-payroll-card-activate-information-started',
            analytics: analytics.appStarted('mas informacion')
          },
          card_link_and_activation_qr_card_payroll_success: {
            bind: 'analytics-page-view-payroll-card-activate-success',
            analytics: analytics.appCompleted
          },
          card_link_and_activation_qr_card_payroll_analytics_internal_link: {
            bind: 'analytics-internal-link',
            analytics: analytics.internalLinkFaqs
          },
          card_link_and_activation_qr_card_payroll_card_activate_service_error: {
            bind: 'analytics-page-view-payroll-card-activate-service-error',
            analytics: analytics.errorPageView
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
          card_link_and_activation_qr_card_qr_plugin_params: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          card_link_and_activation_qr_card_qr_plugin_success: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          card_link_and_activation_qr_card_qr_plugin_error: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };

  const bbvaNativeconnectorSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          card_link_and_activation_qr_card_open_settings: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/card-link-and-activation-qr-card',
      params: []
    },
    pages,
    template,
    components: [
      bbvaCardPayrollActivate,
      managerAnalytics,
      bbvaNativeconnectorSettings,
      bbvaNativeconnectorQrCode
    ]
  };

  return base;
};
