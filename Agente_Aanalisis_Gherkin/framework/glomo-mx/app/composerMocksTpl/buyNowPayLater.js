'use strict';

module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('buyNowPayLater');
  const {
    globalServices: { host, requiredToken = 'tsec' }, native = false, nativeIos = false
  } = CONFIG;
  const analytics = require('./analytics/_buyNowPayLater.js')(CONFIG);
  const { headerHeightMinimum } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'buyNowPayLater');
  const isSpherica = sphericaPageUtils.isSpherica();
  const sphericaTag = isSpherica ? '-spherica' : '';

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      extraHeaderClass: 'dark-blue-bg',
      className: native ? 'ios-top-padding' : '',
      iOSFixedHeader: true,
      headerHeight: headerHeightMinimum
    },
    propertiesSpherica: {
      className: nativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: nativeIos
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: CONFIG.lang,
      country: 'mx',
      cellsConnections: {
        in: {
          __bridge_page_buyNowPayLater: {
            bind: 'reset'
          },
          buy_now_pay_later_receipt_template: {
            bind: 'addDynamicTemplate'
          },
          buy_now_pay_later_receipt_data: {
            bind: 'result'
          },
          buy_now_pay_later_receipt_click: {
            bind: 'captureReceipt'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const bnpl = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-buy-now-pay-later-mx',
    tagSpherica: 'bbva-feature-buy-now-pay-later-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-buy-now-pay-later-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-buy-now-pay-later-mx-spherica',
    render: 'litElement',
    properties: {
      native,
      host,
      requiredToken,
      requiredOTP: true,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'pushNotificationClientFlags'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initServices'
          },
          device_accesses_device_id: {
            bind: 'getDevicedId'
          },
          global_open_document_url_success: {
            bind: 'succesGetPdf'
          },
          global_open_document_url_error: {
            bind: 'closeDocument'
          },
          global_login_success: {
            bind: 'logginSuccess'
          },
          mobile_manage_operation: {
            bind: 'shareReceiptImage'
          },
          cells_to_native_modal_closed: {
            bind: 'clearLoader'
          }
        },
        out: {
          go_to_dashboard_clients: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-go-to-dashboard`,
            link: {
              page: 'dashboard'
            }
          },
          back_to_dashboard_jouney: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-close-journey`,
            link: {
              page: 'dashboard'
            }
          },
          back_to_dashboard_success: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-hiring-success`,
            link: {
              page: 'dashboard'
            }
          },
          global_open_document_url: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-show-pdf-b64`
          },
          buy_now_pay_later_receipt_template: {
            bind: 'receipt-template'
          },
          buy_now_pay_later_receipt_data: {
            bind: 'receipt-data'
          },
          buy_now_pay_later_receipt_click: {
            bind: 'receipt-click'
          },
          global_action_launcher_share_image: {
            bind: 'share-receipt-open-launcher'
          },
          back_to_dashboard: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-back-dashboard-page`,
            link: {
              page: 'dashboard'
            }
          },
          bnpl_offer_show: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-load-offer-page`
          },
          continue_to_multistep: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-fill-select-month`
          },
          bnpl_load_data: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-multistep-loaded`
          },
          bnpl_click_multistep: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-select-plazo-pdf`
          },
          bnpl_click_privacy: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-privacy-notice-modal`
          },
          bnpl_click_checks: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-checkBox-value`
          },
          bnpl_multistep: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-last-page-multistep`
          },
          bnpl_black_list: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-modal-black-list`
          },
          bnpl_not_enough_amount: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-modal-not-enough-amount`
          },
          bnpl_go_otp: {
            bind: 'signature-required'
          },
          continue_to_success: {
            bind: `bbva-feature-buy-now-pay-later-mx${sphericaTag}-data-success-page`
          }
        },
        params: {
          'pushNotificationParams': 'pushNotificationParams'
        }
      }
    }
  };

  const analyticsDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-buy-now-pay-later',
    familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
    render: 'litElement',
    properties: {
      native,
      cellsConnections: {
        in: {
          bnpl_offer_show: {
            bind: 'loadOfferPage'
          },
          continue_to_multistep: {
            bind: 'fireClickStart'
          },
          bnpl_load_data: {
            bind: 'storeData'
          },
          bnpl_click_multistep: {
            bind: 'appStarted'
          },
          bnpl_click_privacy: {
            bind: 'appStarted'
          },
          bnpl_click_checks: {
            bind: 'appStarted'
          },
          bnpl_multistep: {
            bind: 'appStepConfirmation'
          },
          bnpl_black_list: {
            bind: 'footprintInstallmentError'
          },
          bnpl_not_enough_amount: {
            bind: 'footprintPayError'
          },
          widget_signature_handle_required_first_step: {
            bind: 'appStepOtp'
          },
          continue_to_success: {
            bind: 'appCompleted'
          }
        },
        out: {
          send_analytics_offer_show: {
            bind: 'load-view-offer',
            analytics: analytics.footprintSelectDeadline
          },
          send_analytics_click_start: {
            bind: 'click-start',
            analytics: analytics.clickStart
          },
          send_analytics_loan_page: {
            bind: 'on-loan-page',
            analytics: analytics.loanPage
          },
          send_analytics_app_started: {
            bind: 'terms-and-conditions',
            analytics: analytics.appStarted
          },
          send_analytics_app_step_summary_confirmation: {
            bind: 'app-step-confirmation',
            analytics: analytics.appStepConfirmation
          },
          show_otp_step: {
            bind: 'app-otp',
            analytics: analytics.appStepOtp
          },
          send_analytics_success: {
            bind: 'app-completed',
            analytics: analytics.appSuccessPage
          },
          send_analytics_installment_error: {
            bind: 'installment-error',
            analytics: analytics.footprintErrorGrantingDeadlines
          },
          send_analytics_pay_error: {
            bind: 'pay-error',
            analytics: analytics.footprintErrorPurchaseCanNotBePaid
          }
        }
      }
    }
  };

  const base = {
    hash: 'buy-now-pay-later',
    currentPage: {
      url: '/buy-now-pay-later',
      params: [
        'global_user', 'global_user_id'
      ]
    },
    pages,
    template,
    components: [
      bnpl,
      shareReceipt,
      analyticsDm
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-buy-now-pay-later-mx', {
    widgetId: 'buyNowPayLater',
    retryConfig: {
      title: 'bbva-feature-buy-now-pay-later-mx-operation-not-available',
      message: 'bbva-feature-buy-now-pay-later-mx-unable-operation',
      cancelBtLabel: 'bbva-feature-buy-now-pay-later-mx-close-cancel-button-label',
      acceptBtLabel: 'bbva-feature-buy-now-pay-later-mx-retry-accept-label',
      srcImage: 'images/errors/fo_error.svg',
      fullModal: true
    }
  });
  return sphericaPageUtils.spherize(base);
};
