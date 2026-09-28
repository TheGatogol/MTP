'use strict';
module.exports = config => {
  const { getLanguage, getLocalCurrency, headerHeightMinimum } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('paymentDashboardBnpl');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { flexibleFinancings, customersV1 } },
    native = false,
    nativeIos = false
  } = config;
  const analyticsPaymentDashboardBnpl = require('./analytics/_paymentDashboardBnpl')(config);
  const analyticsMonthlyStatements = require('./analytics/_monthlyStatementEnquiry')(config);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      animationType: 'horizontal',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: headerHeightMinimum,
      iOSFixedHeader: nativeIos,
      className: nativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          payment_dashboard_bnpl_init_page: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'paymentDashboardBnpl',
      requiredToken,
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_paymentDashboardBnpl: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'reset'
          },
          payment_dashboard_bnpl_close_operative: {
            bind: 'reset'
          }
        },
        out: {
          payment_dashboard_bnpl_init_page: {
            bind: 'init-page'
          },
          payment_dashboard_bnpl_reset_page: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const paymentDashboardBnpl = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/card-transaction-servicing-finance-payment-dashboard',
    tag: 'card-transaction-servicing-finance-payment-dashboard-bnpl',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      language: getLanguage(),
      flexibleFinancingsApiVersion: flexibleFinancings,
      customersApiVersion: customersV1,
      constantsIds: {
        clabe: 'CLABE',
        chargeAccount: 'CHARGE_ACCOUNT',
        fees: {
          microloanAmountWithoutFees: 'MICROLOAN_AMOUNT_WITHOUT_FEES',
          installmentMonthlyAmountFee: 'INSTALLMENT_MONTHLY_AMOUNT_FEE',
          microloanWithdrawalFee: 'MICROLOAN_WITHDRAWAL_FEE'
        },
        specific: {
          installmentMonthlyAmount: 'INSTALLMENT_MONTHLY_AMOUNT',
          microloanAmount: 'MICROLOAN_AMOUNT',
          totalAmount: 'TOTAL_AMOUNT',
          paymentAmount: 'PAYMENT_AMOUNT',
          installmentAmount: 'INSTALLMENT_AMOUNT'
        },
        lineDetails: {
          availableBalance: 'AVAILABLE_BALANCE',
          disposedBalance: 'DISPOSED_BALANCE',
          grantedAmount: 'GRANTED_AMOUNT',
          overdueBalance: 'OVERDUE_BALANCE',
          totalInstallmentMonthlyAmount: 'TOTAL_INSTALLMENT_MONTHLY_AMOUNT'
        },
        specificDates: {
          lastPaymentLength: 'LAST_PAYMENT_LENGTH'
        }
      },
      productId: '0PYP',
      subProductId: '0PYP',
      pageSize: 10,
      cellsConnections: {
        in: {
          payment_dashboard_bnpl_init_page: {
            bind: 'init'
          },
          payment_dashboard_bnpl_reset_page: {
            bind: 'reset'
          },
          payment_dashboard_bnpl_send_financial_data: {
            bind: 'financingData'
          },
          payment_dashboard_bnpl_send_account_name: {
            bind: 'accountName'
          },
          payment_dashboard_bnpl_send_account_number: {
            bind: 'accountNumber'
          },
          global_card_transaction_servicing_dashboardBnpl: {
            bind: 'financingData'
          },
          global_set_feature_flag_debit_dashboard_purchase: {
            bind: 'hideDeferPurchases'
          },
          global_set_feature_flag_debit_dashboard_cancel_line: {
            bind: 'hideCancelLine'
          },
          global_set_feature_flag_debit_dashboard_edc: {
            bind: 'hideAccountStatus'
          },
          global_set_feature_flag_debit_dashboard_advance_payment: {
            bind: 'hideAdvancePayment'
          },
          global_set_feature_flag_debit_dashboard_monthly_payment: {
            bind: 'hideMonthlyPayment'
          },
          global_set_feature_flag_debit_dashboard_overdue_payment: {
            bind: 'hideOverduePayment'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          }
        },
        out: {
          payment_dashboard_bnpl_close_operative: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-close-operative'
          },
          payment_dashboard_bnpl_get_account_data: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-get-account-data'
          },
          payment_dashboard_bnpl_share_template_receipt: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-purchase-detail-template'
          },
          payment_dashboard_bnpl_share_receipt: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-share-purchase-detail'
          },
          payment_dashboard_bnpl_share_dynamic_template: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-share-dynamic-template'
          },
          payment_dashboard_bnpl_financing_line_response: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financing-line-response'
          },
          payment_dashboard_bnpl_dashboard_initialized: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-initialize',
            analytics: analyticsPaymentDashboardBnpl.footprintsLvl2('detalle compras y disponible linea de credito')
          },
          payment_dashboard_bnpl_show_purchase_detail_analytic: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-account-status-from-detail',
            analytics: analyticsMonthlyStatements.clickStartFromDetails
          },
          payment_dashboard_bnpl_navigate_monthly_statement_enquiry: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-account-status',
            link: {
              page: 'monthlyStatementEnquiry',
              params: {
                financingLineId: 'financialId'
              }
            }
          },
          payment_dashboard_bnpl_navigate_to_finance_debit_line_cancel: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-cancel-line',
            link: {
              page: 'financeDebitLineCancel',
              params: {
                financingLineId: 'financingLineId'
              }
            }
          },
          payment_dashboard_bnpl_show_purchase_detail: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-show-purchase-detail',
            analytics: analyticsPaymentDashboardBnpl.footprintsLvl3('disposicion')
          }
        },
        params: {
          globalUser: 'global_user',
          financialId: 'financingLineId'
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialData'
          },
          payment_dashboard_bnpl_get_account_data: {
            bind: 'cardId'
          },
          navigation_financing_channel: {
            bind: 'setFinancingData'
          }
        },
        out: {
          payment_dashboard_bnpl_send_account_name: {
            bind: 'send-associated-account-name'
          },
          payment_dashboard_bnpl_send_account_number: {
            bind: 'send-associated-account-number'
          },
          payment_dashboard_bnpl_send_financial_data: {
            bind: 'set-financing-data'
          }
        }
      }
    }
  };
  const shareOperativeReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          payment_dashboard_bnpl_share_dynamic_template: {
            bind: 'addDynamicTemplate'
          },
          payment_dashboard_bnpl_share_template_receipt: {
            bind: 'result'
          },
          payment_dashboard_bnpl_share_receipt: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      currentPage: 'paymentDashboardBnpl',
      backAction: 'back-step-request',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          payment_dashboard_bnpl_close_operative: {
            bind: 'goBack'
          }
        },
        out: {
          payment_dashboard_bnpl_back_step_request: {
            bind: 'back-step-request',
            backStep: true
          },
          payment_dashboard_bnpl_navigate_to_previous_page: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };
  const base = {
    hash: 'payment-dashboard-bnpl',
    currentPage: {
      url: '/payment-dashboard-bnpl'
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      paymentDashboardBnpl,
      manager,
      shareOperativeReceipt
    ]
  };
  return base;
};
