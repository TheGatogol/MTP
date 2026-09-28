'use strict';
module.exports = (config) => {
  const pageName = 'businessIntelligencePaymentsTransactionList';
  const { addOutStorageChannels } = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const { headerHeightMinimum } = require('./common/helpers/_utils.js');

  const {
    getCountry,
    getLocalCurrency,
    getPages,
    APP_SIDEBAR: appSidebar,
    createSpinner
  } = require('./common/helpers');

  const {
    nativeShell = false,
    nativeIos = false,
    native = false,
    lang,
    aemHost,
    localCurrency,
    globalServices: {
      requiredToken = 'tsec',
      host,
      versions: { businessIntelligencePayments: apiVersion }
    },
    businessIntelligencePayments: {
      onboardingKey,
      aemFaqPath,
      aemOnboardingPath,
      isOneColumnLayout,
      pageSize,
      pageSizeStores,
      processId,
      operationTypes,
      paymentChannel,
      showHelpFaqs,
      viewChargebacks
    }
  } = config;

  const pages = getPages(config)(pageName);
  const analytics = require('./analytics/_businessInteligencePayments.js')(
    config
  );

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');


  const base = {
    hash: 'bi-payments-transaction-list',
    currentPage: {
      url: '/bi-payments-transaction-list'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: nativeIos ? 'ios-top-padding' : '',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        edgeSwipeSensitivity: 50,
        headerFixed: true,
        headerHeight: headerHeightMinimum,
        iOSFixedHeader: nativeIos,
        rightDrawer: true,
        cellsConnections: {
          in: {
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            },
            business_intelligence_payments_transaction_list_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      }
    },
    components: [
      createSpinner(config),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_businessIntelligencePaymentsTransactionList: {
                bind: 'init'
              },
              modal_transitionend_scroll_into_view: {
                bind: 'scrollIntoView'
              }
            },
            out: {
              business_intelligence_payments_transaction_list_init_page: {
                bind: 'init-page'
              },
              business_intelligence_payments_transaction_list_reset_page: {
                bind: 'reset'
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

  if (nativeShell) {
    const dms = [];

    dms.push({
      zone: 'app__main',
      type: 'DM',
      familyPath: '@glomo-web-components/bbva-nativeconnector-action-launcher',
      tag: 'bbva-nativeconnector-action-launcher',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            business_intelligence_payments_transaction_list_request_native_action_launcher_dialer: {
              bind: 'openDialer'
            }
          },
          out: {
            business_intelligence_payments_transaction_list_response_native_action_launcher_dialer_success: {
              bind: 'success-open-dialer'
            },
            business_intelligence_payments_transaction_list_response_native_action_launcher_dialer_error: {
              bind: 'error-open-dialer'
            }
          }
        }
      }
    });

    dms.push({
      zone: 'app__main',
      type: 'DM',
      familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
      tag: 'bbva-nativeconnector-datepicker',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            business_intelligence_payments_transaction_list_request_native_datepicker: {
              bind: 'launchDatePicker'
            }
          },
          out: {
            business_intelligence_payments_transaction_list_response_native_datepicker_success: {
              bind: 'launch-date-picker-success'
            },
            business_intelligence_payments_transaction_list_response_native_datepicker_error: {
              bind: 'launch-date-picker-error'
            }
          }
        }
      }
    });

    dms.push({
      zone: 'app__main',
      type: 'DM',
      familyPath: '@glomo-web-components/bbva-nativeconnector-social-sharing',
      tag: 'bbva-nativeconnector-social-sharing',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            business_intelligence_payments_transaction_list_open_native_social_share: {
              bind: 'share'
            }
          }
        }
      }
    });
    base.components.push(...dms);
  } else {
    base.components.push(appSidebar(config));
  }

  const businessIntelligencePaymentsComponents = [
    {
      zone: 'app__main',
      tag: 'cells-share-generic-receipt',
      familyPath: 'cells-share-operative-receipt',
      tagSpherica: 'cells-share-generic-receipt-spherica',
      familyPathSpherica: 'cells-share-operative-receipt-spherica',
      type: 'UI',
      properties: {
        language: lang,
        country: getCountry(),
        result: {},
        cellsConnections: {
          in: {
            business_intelligence_payments_transaction_list_open_native_social_share: {
              bind: 'reset'
            },
            business_intelligence_payments_transaction_list_resolve_generate_image_share_operative_receipt_template: {
              bind: 'addDynamicTemplate'
            },
            business_intelligence_payments_transaction_list_resolve_generate_image_share_operative_receipt_style: {
              bind: 'sharedReceiptStyles'
            },
            business_intelligence_payments_transaction_list_request_generate_image_share_operative_receipt: {
              bind: 'captureReceipt'
            }
          },
          out: {
            business_intelligence_payments_transaction_list_resolve_generate_image_success: {
              bind: 'receipt-captured'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            global_alert_manager_open_with_settings: {
              bind: 'share-receipt-show-modal-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
      tag: 'bbva-analyticmanager-payments-business-inteligence-overview',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            business_intelligence_payments_transaction_list_show: {
              bind: 'managePageView'
            },
            business_intelligence_payments_transaction_list_act: {
              bind: 'manageLink'
            }
          },
          out: {
            business_intelligence_payments_transaction_list_analytics_pageView_generic: {
              bind: 'analytics-page-view-generic',
              analytics: analytics.pageView
            },
            business_intelligence_payments_transaction_list_analytics_internalLink_generic: {
              bind: 'analytics-internal-link',
              analytics: analytics.internalLink
            },
            business_intelligence_payments_transaction_list_analytics_externalLink_generic: {
              bind: 'analytics-external-link',
              analytics: analytics.externalLink
            }
          }
        }
      }
    },
    {
      zone: 'app__main_overlay',
      type: 'DM',
      familyPath: '@glomo-web-components/bbva-controller-business-intelligence-overview-mx',
      tag: 'bbva-controller-business-intelligence-overview-mx',
      render: 'litElement',
      properties: {
        onboardingKey,
        language: lang,
        localCurrency,
        cellsConnections: {
          in: {
            __bridge_cancelled_back_navigation: {
              bind: 'navigateBackFromNative'
            },
            business_intelligence_payments_transaction_list_onboarding_complete: {
              bind: 'updateOnboarding'
            },
            business_intelligence_payments_transaction_list_open_action_launcher_dialer: {
              bind: 'openActionLauncherDialer'
            },
            business_intelligence_payments_transaction_list_open_datepicker: {
              bind: 'openDatePicker'
            },
            business_intelligence_payments_transaction_list_response_native_datepicker_success: {
              bind: 'resolveDatePicker'
            },
            business_intelligence_payments_transaction_list_response_native_datepicker_error: {
              bind: 'rejectDatePicker'
            },
            business_intelligence_payments_transaction_list_operation_share: {
              bind: 'requestGenerateImageCellsShareOperativeReceipt'
            },
            business_intelligence_payments_transaction_list_resolve_generate_image_success: {
              bind: 'resolveImageAndOpenSocialShare'
            }
          },
          out: {
            global_set_in_storage: {
              bind: 'local-storage-onboarding-update'
            },
            business_intelligence_payments_transaction_list_navigate_go_back: {
              bind: 'navigate-go-back-from-native'
            },
            business_intelligence_payments_transaction_list_request_native_action_launcher_dialer: {
              bind: 'open-native-action-launcher-dialer'
            },
            business_intelligence_payments_transaction_list_request_native_datepicker: {
              bind: 'open-native-datepicker'
            },
            business_intelligence_payments_transaction_list_response_native_datepicker_resolve: {
              bind: 'resolve-datepicker'
            },
            business_intelligence_payments_transaction_list_resolve_generate_image_share_operative_receipt_template: {
              bind: 'resolve-generate-image-share-operative-receipt-template'
            },
            business_intelligence_payments_transaction_list_request_generate_image_share_operative_receipt: {
              bind: 'request-generate-image-share-operative-receipt'
            },
            business_intelligence_payments_transaction_list_resolve_generate_image_share_operative_receipt_style: {
              bind: 'resolve-generate-image-share-operative-receipt-styles'
            },
            business_intelligence_payments_transaction_list_open_native_social_share: {
              bind: 'open-native-social-share'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      familyPath: '@bbva-web-components-widgets/payments-business-inteligence-overview',
      tag: 'payments-business-inteligence-overview',
      render: 'litElement',
      properties: {
        aemHost,
        aemFaqPath,
        aemOnboardingPath,
        requiredToken,
        host,
        isOneColumnLayout,
        native: !!native,
        apiVersion,
        language: lang,
        localCurrency: getLocalCurrency(),
        pageSize,
        pageSizeStores,
        processId,
        operationTypes,
        paymentChannel,
        showHelpFaqs,
        viewChargebacks,
        cellsConnections: {
          params: {
            viewMode: 'viewMode'
          },
          in: {
            dashboard_resolve_pbio_onboaring_isOnboarding: {
              bind: 'isOnboarding'
            },
            dashboard_navigate_to_businessIntelligencePaymentsTransactionList: {
              bind: 'setProps'
            },
            business_intelligence_payments_transaction_list_response_native_datepicker_resolve: {
              bind: 'entryDatePicker'
            },
            business_intelligence_payments_transaction_list_navigate_go_back: {
              bind: 'navigateBack'
            }
          },
          out: {
            global_error_tsec_expired: {
              bind: 'payments-business-inteligence-overview-signal-invalid-tsec'
            },
            business_intelligence_payments_transaction_list_show: {
              bind: 'payments-business-inteligence-overview-show'
            },
            business_intelligence_payments_transaction_list_act: {
              bind: 'payments-business-inteligence-overview-act'
            },
            business_intelligence_payments_transaction_list_operation_share: {
              bind: 'payments-business-inteligence-overview-operation-share'
            },
            business_intelligence_payments_transaction_list_navigate_to_dashboard: {
              bind: 'payments-business-inteligence-overview-view-back',
              backStep: true
            },
            business_intelligence_payments_transaction_list_open_datepicker: {
              bind: 'payments-business-inteligence-overview-native-datepicker-open'
            },
            business_intelligence_payments_transaction_list_open_action_launcher_dialer: {
              bind: 'payments-business-inteligence-overview-call-dialer-open'
            },
            business_intelligence_payments_transaction_list_onboarding_complete: {
              bind: 'payments-business-inteligence-overview-onboarding-complete'
            },
            business_intelligence_payments_transaction_list_open_native_menu: {
              bind: 'payments-business-inteligence-overview-app-menu-click',
              'forward-to-native': true
            },
            modal_transitionend_scroll_into_view: {
              bind: 'help-modal-transitionend'
            }
          }
        }
      }
    }
  ];

  base.components.push(...businessIntelligencePaymentsComponents);

  addCommonErrors(base.components)();
  addOutStorageChannels(base.components, [ onboardingKey ], config);

  return sphericaPageUtils.spherize(base);
};
