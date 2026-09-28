'use strict';
module.exports = (config) => {
  const { useNames, createPrefixFromPageName, getShortFormatDate, getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const pageName = 'advancePayments';
  const operativePrefix = createPrefixFromPageName(pageName);
  const pages = require('./common/_pages')(config)(pageName);
  const {
    globalServices: { host, requiredToken = 'tsec',  versions: { accounts } },
    native = false,
    nativeIos: isNativeIos = false
  } = config;
  const _localStorage = require('./common/_local-storage');
  const analyticsAdvancePayments = require('./analytics/_advancePayments')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-dark-core-blue',
      headerHeight: 0,
      iOSFixedHeader: isNativeIos,
      className: `${isNativeIos ? 'ios-top-padding' : ''}`
    }
  };
  const lifeCycleComponent = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      requiredToken,
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          modal_transitionend_scroll_into_view: {
            bind: 'scrollIntoView'
          }
        },
        out: {
          advance_payments_init_page: {
            bind: 'init-page'
          }
        }
      }
    }
  };
  const advancePayments = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components-widgets/card-transaction-servicing-finance-transaction-advanced-payments',
    tag: 'card-transaction-servicing-finance-transaction-advanced-payments',
    familyPathSpherica: '@glomo-web-components/card-transaction-servicing-finance-transaction-advanced-payments-mx',
    tagSpherica: 'card-transaction-servicing-finance-transaction-advanced-payments-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      isNativeIos,
      pageName,
      accountsApiVersion: accounts,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      availableBalance: 'AVAILABLE_BALANCE',
      disposedBalance: 'DISPOSED_BALANCE',
      overdueAmount: 'OVERDUE_AMOUNT',
      installmentMonthlyAmount: 'INSTALLMENT_MONTHLY_AMOUNT',
      installmentsDetail: 'INSTALLMENTS_DETAIL',
      lastInstallmentAmount: 'LAST_INSTALLMENT_AMOUNT',
      overdueBalance: 'OVERDUE_BALANCE',
      overduePaymentFee: 'OVERDUE_PAYMENT_FEE',
      overduePaymentWithoutFee: 'OVERDUE_BALANCE_WITHOUT_FEE',
      paymentsDetail: 'PAYMENTS_DETAIL',
      totalInstallmentMonthlyAmount: 'TOTAL_INSTALLMENT_MONTHLY_AMOUNT',
      monthlyInstallmentAmount: 'MONTHLY_INSTALLMENT_AMOUNT',
      paymentAmount: 'PAYMENT_AMOUNT',
      pendingAmount: 'PENDING_TO_PAY',
      chargeAccount: 'CHARGE_ACCOUNT',
      paymentAmountId: 'PAYMENT_AMOUNT',
      cellsConnections: {
        in: {
          advance_payments_init_page: {
            bind: 'initWidget'
          },
          global_storage_get_advance_payment_error: {
            bind: 'getLocalStorageErrorResponse'
          },
          global_storage_get_advance_payment_success: {
            bind: 'getLocalStorageSuccessResponse'
          },
          dashboard_customer_email: {
            bind: 'getUserEmail'
          },
          payment_dashboard_anticipate_payment: {
            bind: 'setOperativeData'
          },
          payment_dashboard_financing_line_response: {
            bind: 'dataFinancialDashboard'
          },
          payment_dashboard_monthly_payment: {
            bind: 'setOperativeData'
          },
          payment_dashboard_overdue_payment: {
            bind: 'setOperativeData'
          },
          finance_debit_line_cancel_navigate_advance_payments: {
            bind: 'setOperativeData'
          },
          finance_debit_line_cancel_navigate_overdue_payment: {
            bind: 'setOperativeData'
          },
          finance_transaction_multipurchase_debit_post_hiring_anticipate_payments_navigate: {
            bind: 'setOperativeData'
          },
          sign_modal_cancelled: {
            bind: 'showMultiStep'
          },
          cells_to_native_modal_closed: {
            bind: 'showMultiStep'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-get-native-local-storage'
          },
          global_set_in_storage: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-set-native-local-storage'
          },
          advance_payments_close_operative: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-operative-exit',
            backStep: true
          },
          advance_payments_RECEIPT_INFO: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-share-receipt-data'
          },
          advance_payments_SHARE_RECEIPT_CAPTURE: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-share-receipt'
          },
          advance_payments_advance_payments_show_onboarding_modal: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-onboarding-modal-show',
            analytics: analyticsAdvancePayments.pageViewFootprintOnboarding('informacion anticipar pago')
          },
          advance_payments_advance_payments_load_step_select_payment_type: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-select-payment-type-step-load',
            analytics: analyticsAdvancePayments.appVisitAdvance('1 tipo de pago')
          },
          advance_payments_advance_payments_select_advance_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-select-advance-payment',
            analytics: analyticsAdvancePayments.appStartedAdvance('anticipar pago')
          },
          advance_payments_advance_payments_select_settle_total_debt: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-select-settle-total-debt',
            analytics: analyticsAdvancePayments.appStartedAdvance('liquidar diferimientos')
          },
          advance_payments_advance_payments_load_step_select_microloan: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-payment-type-option-selected'
          },
          advance_payments_advance_payments_load_step_select_payment_amount: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-amount-and-currency-selected'
          },
          advance_payments_advance_payments_load_step_select_origin_account: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-account-select'
          },
          advance_payments_advance_payments_load_step_confirm_advance_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-confirm-advance-payment'
          },
          advance_payments_advance_payments_load_step_advance_otp: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-otp-advance-payment'
          },
          advance_payments_advance_payments_app_completed_advance: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-success-advance-payment-modal-show'
          },
          advance_payments_advance_payments_show_monthly_payment_error_modal: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-error-modal-show',
            analytics: analyticsAdvancePayments.pageViewError('pago realizado previamente')
          },
          advance_payments_advance_payments_load_step_monthly_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-payment-step-load',
            analytics: analyticsAdvancePayments.appVisitMonthly('1 detalle de pago')
          },
          advance_payments_advance_payments_continue_monthly_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-payment-step-continue',
            analytics: analyticsAdvancePayments.appStartedMonthly('continuar')
          },
          advance_payments_advance_payments_load_step_select_origin_account_monthly: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-amount-payment'
          },
          advance_payments_advance_payments_load_step_confirm_monthly_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-confirm-monthly-payment'
          },
          advance_payments_advance_payments_load_step_monthly_otp: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-otp-monthly-payment'
          },
          advance_payments_advance_payments_app_completed_monthly: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-success-monthly-payment-modal-show'
          },
          advance_payments_advance_payments_show_overdue_payment_fee_modal: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-import-payment-overdue-fee-modal-open',
            analytics: analyticsAdvancePayments.pageViewFootprintOverdue('penalizacion pago tardio')
          },
          advance_payments_advance_payments_load_step_overdue_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-step-load',
            analytics: analyticsAdvancePayments.appVisitOverdue('1 monto a pagar')
          },
          advance_payments_advance_payments_started_overdue_payment_modal: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-modal-first-click',
            analytics: analyticsAdvancePayments.appStartedOverdue('penalizacion por pago tardio')
          },
          advance_payments_advance_payments_started_overdue_payment_input: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-input-click',
            analytics: analyticsAdvancePayments.appStartedOverdue('ingresar monto a pagar')
          },
          advance_payments_advance_payments_load_step_select_origin_account_overdue: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-amount'
          },
          advance_payments_advance_payments_load_step_confirm_overdue_payment: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-confirm-overdue-payment'
          },
          advance_payments_advance_payments_load_step_overdue_otp: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-otp-overdue-payment'
          },
          advance_payments_advance_payments_app_completed_overdue: {
            bind: 'card-transaction-servicing-finance-transaction-advanced-payments-success-overdue-payment-modal-show'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: isNativeIos,
      newCellsConnections: {
        add: {
          in: {
            sign_modal_close_reset: {
              bind: 'showMultistep'
            },
            sign_modal_open: {
              bind: 'hideMultistep'
            }
          },
          out: {
            modal_transitionend_scroll_into_view: {
              bind: 'help-modal-transitionend'
            },
            global_get_from_storage: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-native-local-storage-get'
            },
            global_set_in_storage: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-native-local-storage-set'
            },
            payment_dashboard_init_page: {
              bind: 'navigation-go-back',
              backStep: true
            },
            advance_payments_advance_payments_load_step_select_payment_type: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-step-2-show',
              analytics: analyticsAdvancePayments.appVisitAdvance('1 tipo de pago')
            },
            advance_payments_advance_payments_load_step_monthly_payment: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-step-show',
              analytics: analyticsAdvancePayments.appVisitMonthly('1 detalle de pago')
            },
            advance_payments_advance_payments_load_step_overdue_payment: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-step-show',
              analytics: analyticsAdvancePayments.appVisitOverdue('1 monto a pagar')
            },
            advance_payments_advance_payments_select_advance_payment: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-advance-payment-select',
              analytics: analyticsAdvancePayments.appStartedAdvance('anticipar pago')
            },
            advance_payments_advance_payments_select_settle_total_debt: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-total-debt-settle-select',
              analytics: analyticsAdvancePayments.appStartedAdvance('liquidar diferimientos')
            },
            advance_payments_advance_payments_started_overdue_payment_modal: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-fee-modal-open',
              analytics: analyticsAdvancePayments.appStartedOverdue('penalizacion por pago tardio')
            },
            advance_payments_advance_payments_load_step_select_microloan: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-step-3-show'
            },
            advance_payments_advance_payments_load_step_select_payment_amount: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-step-4-show'
            },
            advance_payments_advance_payments_load_step_select_origin_account: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-step-5-show'
            },
            advance_payments_advance_payments_load_step_confirm_advance_payment: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-advance-payment-confirm'
            },
            advance_payments_advance_payments_load_step_confirm_overdue_payment: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-confirm'
            },
            advance_payments_advance_payments_load_step_confirm_monthly_payment: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-payment-confirm'
            },
            advance_payments_advance_payments_load_step_advance_otp: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-advance-payment-otp-show'
            },
            advance_payments_advance_payments_load_step_overdue_otp: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-otp-show'
            },
            advance_payments_advance_payments_load_step_monthly_otp: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-payment-otp-show'
            },
            advance_payments_advance_payments_show_overdue_payment_fee_modal: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-fee-modal-open',
              analytics: analyticsAdvancePayments.pageViewFootprintOverdue('penalizacion pago tardio')
            },
            advance_payments_advance_payments_load_step_select_origin_account_overdue: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-overdue-payment-step-5-show'
            },
            advance_payments_advance_payments_load_step_select_origin_account_monthly: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-monthly-payment-step-5-show'
            },
            advance_payments_receipt_share: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-receipt-share'
            },
            advance_payments_receipt_result_share: {
              bind: 'card-transaction-servicing-finance-transaction-advanced-payments-receipt-result-share'
            }
          }
        },
        remove: {
          in: [
            'advance_payments_init_page'
          ]
        }
      }
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase-analytics',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          advance_payments_advance_payments_load_step_select_microloan: {
            bind: 'advancePaymentFireAppSelectMicroloanStep'
          },
          advance_payments_advance_payments_load_step_select_payment_amount: {
            bind: 'advancePaymentFireAppSelectAmountStep'
          },
          advance_payments_advance_payments_load_step_select_origin_account: {
            bind: 'advancePaymentFireAppSelectOriginAccountStep'
          },
          advance_payments_advance_payments_load_step_confirm_advance_payment: {
            bind: 'advancePaymentFireAppConfirmationStep'
          },
          advance_payments_advance_payments_load_step_advance_otp: {
            bind: 'advancePaymentFireAppOtpStep'
          },
          advance_payments_advance_payments_app_completed_advance: {
            bind: 'advancePaymentAppCompleted'
          },
          advance_payments_advance_payments_load_step_select_origin_account_monthly: {
            bind: 'monthlyPaymentFireAppSelectOriginAccountStep'
          },
          advance_payments_advance_payments_load_step_confirm_monthly_payment: {
            bind: 'monthlyPaymentFireAppConfirmationStep'
          },
          advance_payments_advance_payments_load_step_monthly_otp: {
            bind: 'monthlyPaymentFireAppOtpStep'
          },
          advance_payments_advance_payments_app_completed_monthly: {
            bind: 'monthlyPaymentAppCompleted'
          },
          advance_payments_advance_payments_load_step_select_origin_account_overdue: {
            bind: 'overduePaymentFireAppSelectOriginAccountStep'
          },
          advance_payments_advance_payments_load_step_confirm_overdue_payment: {
            bind: 'overduePaymentFireAppConfirmationStep'
          },
          advance_payments_advance_payments_load_step_overdue_otp: {
            bind: 'overduePaymentFireAppOtpStep'
          },
          advance_payments_advance_payments_app_completed_overdue: {
            bind: 'overduePaymentAppCompleted'
          }
        },
        out: {
          advance_payments_advance_payments_analytics_select_microloan_step: {
            bind: 'advance-analytics-select-microloan-step',
            analytics: analyticsAdvancePayments.appStepAdvance('2', 'seleccion diferimiento')
          },
          advance_payments_advance_payments_analytics_select_payment_amount_step: {
            bind: 'advance-analytics-select-amount-step',
            analytics: analyticsAdvancePayments.appStepAdvance('3', 'mensualidades')
          },
          advance_payments_advance_payments_analytics_select_origin_account_step: {
            bind: 'advance-analytics-select-origin-account-step',
            analytics: analyticsAdvancePayments.appStepAdvance('4', 'seleccion cuenta')
          },
          advance_payments_advance_payments_analytics_confirmation_step: {
            bind: 'advance-analytics-confirmation-step',
            analytics: analyticsAdvancePayments.appStepAdvance('5', 'confirmacion')
          },
          advance_payments_advance_payments_analytics_otp: {
            bind: 'advance-analytics-otp-step',
            analytics: analyticsAdvancePayments.appStepAdvance('6', 'otp')
          },
          advance_payments_advance_payments_analytics_app_completed_advance: {
            bind: 'advance-payment-analytics-app-completed',
            analytics: analyticsAdvancePayments.appCompletedAdvance('pagina exitosa')
          },
          advance_payments_monthly_payments_analytics_select_origin_account_step: {
            bind: 'monthly-analytics-select-origin-account-step',
            analytics: analyticsAdvancePayments.appStepMonthly('2', 'seleccionar cuenta')
          },
          advance_payments_monthly_payments_analytics_confirmation_step: {
            bind: 'monthly-analytics-confirmation-step',
            analytics: analyticsAdvancePayments.appStepMonthly('3', 'confirmacion')
          },
          advance_payments_monthly_payments_analytics_otp: {
            bind: 'monthly-analytics-otp-step',
            analytics: analyticsAdvancePayments.appStepMonthly('4', 'otp')
          },
          advance_payments_monthly_payments_analytics_app_completed: {
            bind: 'monthly-payment-analytics-app-completed',
            analytics: analyticsAdvancePayments.appCompletedMonthly('pagina exitosa')
          },
          advance_payments_overdue_payments_analytics_select_origin_account_step: {
            bind: 'overdue-analytics-select-origin-account-step',
            analytics: analyticsAdvancePayments.appStepOverdue('2', 'seleccionar cuenta')
          },
          advance_payments_overdue_payments_analytics_confirmation_step: {
            bind: 'overdue-analytics-confirmation-step',
            analytics: analyticsAdvancePayments.appStepOverdue('3', 'confirmacion')
          },
          advance_payments_overdue_payments_analytics_otp: {
            bind: 'overdue-analytics-otp-step',
            analytics: analyticsAdvancePayments.appStepOverdue('4', 'otp')
          },
          advance_payments_overdue_payments_analytics_app_completed: {
            bind: 'overdue-payment-analytics-app-completed',
            analytics: analyticsAdvancePayments.appCompletedOverdue('pagina exitosa')
          }
        }
      }
    }
  };
  const receiptManager = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      dateFormat: getShortFormatDate(),
      cellsConnections: {
        in: {
          advance_payments_SHARE_RECEIPT_CAPTURE: {
            bind: 'captureReceipt'
          },
          advance_payments_RECEIPT_INFO: {
            bind: 'result'
          },
          advance_payments_right_primary_click: {
            bind: 'reset'
          },
          mobile_manage_operation: {
            bind: 'reset'
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
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            advance_payments_receipt_share: {
              bind: 'captureReceipt'
            },
            advance_payments_receipt_result_share: {
              bind: 'result'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'advance-payments',
    currentPage: {
      url: '/advance-payments'
    },
    pages,
    template,
    components: [
      lifeCycleComponent,
      advancePayments,
      receiptManager,
      analyticsManager
    ]
  };
  _localStorage.addOutStorageChannels(base.components, [ 'advance_payment' ], config);
  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('card-transaction-servicing-finance-transaction-advanced-payments');
  return sphericaPageUtils.spherize(base);
};
