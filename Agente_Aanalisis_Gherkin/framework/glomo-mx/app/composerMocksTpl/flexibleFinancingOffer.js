'use strict';
module.exports = config => {
  const pageName = 'flexibleFinancingOffer';
  const {
    getLanguage,
    getDate
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        promotionsV1
      }
    },
    aemHost,
    native = false,
    nativeIos = false
  } = config;

  const pages = require('./common/_pages')(config)(pageName);
  const flexibleFinancingAnalytics = require('./analytics/_flexibleFinancingOffer')(config);

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'dark-blue-bg'
    }
  };

  const modularOfferingMsi = {
    zone: 'app__main',
    type: 'UI',
    tag: 'card-transaction-servicing-flexible-financing-offer-mx',
    familyPath: '@glomo-web-components/card-transaction-servicing-flexible-financing-offer-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      showHelpFaqs: true,
      language: getLanguage(),
      aemHost,
      aemHelpFaqsPath: 'content/caas/mexico/glomo/flexible-financing-offer/faqs.model.json',
      shareReceipt: true,
      promotionsApplyPromotionApiVersion: promotionsV1,
      promotionsConsultApiVersion: promotionsV1,
      maxAllowedRetries: 3,
      promotionsId: {
        msi: 'MSI',
        skip: 'SKIP',
        combo: 'COMBO',
        mixed: 'MIXED'
      },
      cellsConnections: {
        in: {
          flexible_financing_offer_feature_flag: {
            bind: 'initialize'
          },
          flexible_financing_offer_notification_data: {
            bind: 'notificationData'
          }
        },
        out: {
          flexible_financing_offer_initialized_feature: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-initialize'
          },
          flexible_financing_offer_page_data: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-data-step-page-send'
          },
          flexible_financing_offer_visit: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-visit'
          },
          flexible_financing_offer_started: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-to-start'
          },
          flexible_financing_offer_success_page: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-page-success'
          },
          flexible_financing_offer_page_view: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-view'
          },
          flexible_financing_offer_page_error_view: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-error-view'
          },
          flexible_financing_offer_share_click: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-button-share-click'
          },
          flexible_financing_offer_go_to_back: {
            bind: 'card-transaction-servicing-flexible-financing-offer-mx-navigation-go-back',
            backStep: true
          }
        }
      }
    }
  };

  const analyticManagerFlexibleFinancingOffer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-analyticmanager-flexible-financing-offer',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-transaction-servicing',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          flexible_financing_offer_initialized_feature: {
            bind: 'fireAppOnClickStart'
          },
          flexible_financing_offer_page_data: {
            bind: 'dataPage'
          },
          flexible_financing_offer_visit: {
            bind: 'firePageVisit'
          },
          flexible_financing_offer_started: {
            bind: 'fireAppStarted'
          },
          flexible_financing_offer_success_page: {
            bind: 'fireAppCompleted'
          },
          flexible_financing_offer_page_view: {
            bind: 'firePageView'
          },
          flexible_financing_offer_page_error_view: {
            bind: 'firePageViewError'
          }
        },
        out: {
          flexible_financing_offer_fire_analytics_app_on_click_start: {
            bind: 'analytics-app-on-click-start',
            analytics: flexibleFinancingAnalytics.appOnClickStart
          },
          flexible_financing_offer_fire_analytics_app_page_visit: {
            bind: 'analytics-app-page-visit',
            analytics: flexibleFinancingAnalytics.appPageVisit('1')
          },
          flexible_financing_offer_fire_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: flexibleFinancingAnalytics.appStarted
          },
          flexible_financing_offer_fire_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: flexibleFinancingAnalytics.appCompleted
          },
          flexible_financing_offer_fire_analytics_page_view: {
            bind: 'analytics-app-page-view',
            analytics: flexibleFinancingAnalytics.pageView
          },
          flexible_financing_offer_fire_analytics_page_view_error: {
            bind: 'analytics-app-page-view-error',
            analytics: flexibleFinancingAnalytics.pageViewError
          }
        }
      }
    }
  };

  const controllerFlexibleFinancingOffer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-controller-flexible-financing-offer-mx',
    familyPath: '@glomo-web-components/bbva-controller-flexible-financing-offer-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'modularOfferingFlags'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'handleFeatureFlag'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'handleFeatureFlag'
          },
          flexible_financing_offer_share_click: {
            bind: 'init'
          }
        },
        out: {
          flexible_financing_offer_generate_receipt: {
            bind: 'card-transaction-servicing-flexible-financing-generate-receipt-share'
          },
          flexible_financing_offer_result_path: {
            bind: 'card-transaction-servicing-flexible-financing-result-path-share'
          },
          flexible_financing_offer_operative: {
            bind: 'card-transaction-servicing-flexible-financing-operative-share'
          },
          flexible_financing_offer_feature_flag: {
            bind: 'card-transaction-servicing-flexible-financing-feature-flag-send'
          },
          flexible_financing_offer_notification_data: {
            bind: 'card-transaction-servicing-flexible-financing-notification-data-send'
          }
        },
        params: {
          'pushNotificationParams': 'pushNotificationParams'
        }
      }
    }
  };

  const receiptManager = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: getLanguage(),
      dateFormat: getDate(),
      headerImage: './images/spherica/bbva_blue.svg',
      sharedReceiptStyles: {
        fieldTitle: {
          'display': 'inline-block',
          'vertical-align': 'top',
          'width': '50%',
          'text-align': 'left',
          'margin': '0',
          'word-wrap': 'break-word',
          'box-sizing': 'border-box',
          'padding-right': '8px'
        },
        fieldValue: {
          'display': 'inline-block',
          'vertical-align': 'top',
          'width': '50%',
          'text-align': 'right',
          'word-wrap': 'break-word',
          'box-sizing': 'border-box',
          'padding-left': '8px'
        },
        receiptTitle: {
          'font-size': 'var(--cells-text-size-24, 24px)'
        },
        sectionHeaderTitle: {
          'font-size': 'var(--cells-text-size-15, 15px)'
        }
      },
      cellsConnections: {
        in: {
          flexible_financing_offer_generate_receipt: {
            bind: 'addDynamicTemplate'
          },
          flexible_financing_offer_result_path: {
            bind: 'result'
          },
          flexible_financing_offer_operative: {
            bind: 'captureReceipt'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const base = {
    hash: `${pageName}`,
    currentPage: {
      url: '/flexible-financing-offer'
    },
    pages,
    template,
    components: [
      modularOfferingMsi,
      analyticManagerFlexibleFinancingOffer,
      controllerFlexibleFinancingOffer,
      receiptManager
    ]
  };

  return base;
};
