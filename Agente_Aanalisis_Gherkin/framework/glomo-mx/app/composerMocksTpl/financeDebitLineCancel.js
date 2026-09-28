'use strict';
module.exports = config => {
  const pageName = 'financeDebitLineCancel';
  const pages = require('./common/_pages')(config)(pageName);
  const { headerHeightMinimum, getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { customersV1: customersApiVersion } },
    native = false,
    nativeIos: isNativeIos = false
  } = config;
  const analyticsCancel = require('./analytics/_financeDebitLineCancel')(config);
  const analyticsAdvancePayments = require('./analytics/_advancePayments')(config);
  const literals = require('./analytics/common/_literals');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      cellsConnections: {
        in: {
          finance_debit_line_cancel_modal_scroll_into_view: {
            bind: 'scrollIntoView'
          }
        }
      }
    }
  };

  const loanAndMortgage = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components-widgets/loan-and-mortgage-origination-finance-line-cancellation',
    tag: 'loan-and-mortgage-origination-finance-line-cancellation',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      host,
      native,
      requiredToken,
      pageName,
      iOSFixedHeader: isNativeIos,
      disableCallBbva: true,
      customersApiVersion,
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          sign_modal_cancelled: {
            bind: 'showMultistep'
          },
          sign_modal_close_reset: {
            bind: 'showMultistep'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          },
          sign_modal_open: {
            bind: 'hideMultistep'
          }
        },
        out: {
          finance_debit_line_cancel_modal_scroll_into_view: {
            bind: 'help-modal-transitionend'
          },
          finance_debit_line_cancel_navigation_go_back: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-go-to-back',
            backStep: true
          },
          finance_debit_line_cancel_review_share_receipt_operative: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-share-receipt-operative'
          },
          finance_debit_line_cancel_review_share_receipt_result: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-share-receipt-result'
          },
          finance_debit_line_cancel_onboarding_modal_button_click: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-onboarding-modal-button-click',
            analytics: analyticsCancel.appStartedContinue
          },
          finance_debit_line_cancel_onboarding_modal_link_click: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-onboarding-modal-link-click',
            analytics: analyticsCancel.appStartedKeep
          },
          finance_debit_line_cancel_onboarding_modal_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-onboarding-modal-visible',
            analytics: analyticsCancel.pageVisit
          },
          finance_debit_line_cancel_reason_step_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-reasons-step-visible',
            analytics: analyticsCancel.appStep('2', 'motivo cancelacion')
          },
          finance_debit_line_cancel_cancellation_detail_step_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-detail-step-visible'
          },
          finance_debit_line_cancel_summary_step_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-summary-visible'
          },
          finance_debit_line_cancel_receipt_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-receipt-visible'
          },
          finance_debit_line_cancel_overdue_balances_modal_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-overdue-modal-visible',
            analytics: analyticsCancel.pageViewOverdueBalances
          },
          finance_debit_line_cancel_disposed_balances_modal_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-outstanding-modal-visible',
            analytics: analyticsCancel.pageViewOverdueBalances
          },
          finance_debit_line_cancel_maximum_error_modal_visible: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-maximum-error-modal-visible',
            analytics: analyticsCancel.pageViewOperationError
          },
          finance_debit_line_cancel_navigate_advance_payments: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-navigate-financing-dashboard',
            analytics: analyticsAdvancePayments.appOnClickStartAdvanceFromCancel(literals.flexibleFinancing.overdueBalances),
            link: {
              page: 'advancePayments',
              skipHistory: true
            }
          },
          finance_debit_line_cancel_navigate_overdue_payment: {
            bind: 'loan-and-mortgage-origination-finance-line-cancellation-navigate-overdue-payments',
            analytics: analyticsAdvancePayments.appOnClickStartOverdueFromCancel(literals.flexibleFinancing.overdueBalances),
            link: {
              page: 'advancePayments',
              skipHistory: true
            }
          }
        },
        params: {
          financingLineId: 'financingLineId',
          customerId: 'global_user_id'
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            finance_debit_line_cancel_navigation_go_back: {
              bind: 'navigation-go-back',
              backStep: true
            },
            finance_debit_line_cancel_review_share_receipt_operative: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-share-receipt-operative-share'
            },
            finance_debit_line_cancel_review_share_receipt_result: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-receipt-result-share'
            },
            finance_debit_line_cancel_onboarding_modal_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-onboarding-modal-show',
              analytics: analyticsCancel.pageVisit
            },
            finance_debit_line_cancel_reason_step_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-reasons-step-show',
              analytics: analyticsCancel.appStep('2', 'motivo cancelacion')
            },
            finance_debit_line_cancel_cancellation_detail_step_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-detail-step-show'
            },
            finance_debit_line_cancel_summary_step_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-summary-show'
            },
            finance_debit_line_cancel_receipt_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-receipt-show'
            },
            finance_debit_line_cancel_overdue_balances_modal_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-overdue-modal-show',
              analytics: analyticsCancel.pageViewOverdueBalances
            },
            finance_debit_line_cancel_disposed_balances_modal_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-outstanding-modal-show',
              analytics: analyticsCancel.pageViewOverdueBalances
            },
            finance_debit_line_cancel_maximum_error_modal_visible: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-maximum-error-modal-show',
              analytics: analyticsCancel.pageViewOperationError
            },
            finance_debit_line_cancel_navigate_advance_payments: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-financing-dashboard-navigation-external',
              analytics: analyticsAdvancePayments.appOnClickStartAdvanceFromCancel(literals.flexibleFinancing.overdueBalances),
              link: {
                page: 'advancePayments',
                skipHistory: true
              }
            },
            finance_debit_line_cancel_navigate_overdue_payment: {
              bind: 'loan-and-mortgage-origination-finance-line-cancellation-overdue-payments-navigation-external',
              analytics: analyticsAdvancePayments.appOnClickStartOverdueFromCancel(literals.flexibleFinancing.overdueBalances),
              link: {
                page: 'advancePayments',
                skipHistory: true
              }
            }
          }
        }
      }
    }
  };
  const analytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-finance-debit-line-cancel-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
    render: 'litElement',
    properties: {
      config: {
        steps: {
          3: 'app-step-3',
          4: 'app-step-4',
          5: 'app-step-5'
        }
      },
      cellsConnections: {
        in: {
          finance_debit_line_cancel_cancellation_detail_step_visible: {
            bind: 'fireAppStep3'
          },
          finance_debit_line_cancel_summary_step_visible: {
            bind: 'fireAppStep4'
          },
          widget_signature_handle_required: {
            bind: 'fireAppStep5'
          },
          finance_debit_line_cancel_receipt_visible: {
            bind: 'fireDataCompleted'
          },
          sign_modal_cancelled: {
            bind: 'fireAppStep4'
          }
        },
        out: {
          finance_debit_line_cancel_analytics_app_step_account_selection: {
            bind: 'analytics-app-step-3',
            analytics: analyticsCancel.appStep('3', 'seleccion cuenta')
          },
          finance_debit_line_cancel_analytics_app_step_confirmation: {
            bind: 'analytics-app-step-4',
            analytics: analyticsCancel.appStep('4', 'confirmacion')
          },
          finance_debit_line_cancel_analytics_app_step_otp: {
            bind: 'analytics-app-step-5',
            analytics: analyticsCancel.appStep('5', 'otp')
          },
          finance_debit_line_cancel_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analyticsCancel.appStepCompleted
          }
        }
      }
    }
  };
  const paymentReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      cellsConnections: {
        in: {
          finance_debit_line_cancel_review_share_receipt_operative: {
            bind: 'captureReceipt'
          },
          finance_debit_line_cancel_review_share_receipt_result: {
            bind: 'result'
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
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'finance-debit-line-cancel',
    currentPage: {
      url: '/finance-debit-line-cancel'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-core-blue-bg',
        headerHeight: headerHeightMinimum,
        className: `${isNativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      lifeCycle,
      loanAndMortgage,
      paymentReceipt,
      analytics
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('loan-and-mortgage-origination-finance-line-cancellation');
  return sphericaPageUtils.spherize(base);
};
