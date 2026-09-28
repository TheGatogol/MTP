'use strict';
module.exports = config => {
  const pageName = 'paymentDashboard';
  const pages = require('./common/_pages')(config)(pageName);
  const { getLanguage, getLocalCurrency, getCountry } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { flexibleFinancings, customersV1 } },
    native = false,
    nativeIos: isNativeIos = false
  } = config;
  const transactionFilters = [
    {
      id: 'ACTIVE'
    },
    {
      id: 'SETTLED'
    }
  ];
  const analyticsPaymentDashboard = require('./analytics/_paymentDashboard')(config);
  const analyticsMonthlyStatements = require('./analytics/_monthlyStatementEnquiry')(config);
  const analyticsFinanceDebitLineCancel = require('./analytics/_financeDebitLineCancel')(config);
  const analyticsAdvancePayments = require('./analytics/_advancePayments')(config);
  const literals = require('./analytics/common/_literals');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      animationType: 'horizontal',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          payment_dashboard_init_page: {
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
      pageName,
      requiredToken,
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          payment_dashboard_modal_scroll_into_view: {
            bind: 'scrollIntoView'
          }
        },
        out: {
          payment_dashboard_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const paymentDashboard = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components-widgets/card-transaction-servicing-finance-payment-dashboard',
    tag: 'card-transaction-servicing-finance-payment-dashboard',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      language: getLanguage(),
      pageName,
      iOSFixedHeader: isNativeIos,
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
      hideIconMenuHeader: true,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          payment_dashboard_init_page: {
            bind: 'init'
          },
          global_card_transaction_servicing_dashboard: {
            bind: 'financingData'
          },
          payment_dashboard_send_account_name: {
            bind: 'accountName'
          },
          payment_dashboard_send_account_number: {
            bind: 'accountNumber'
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
          }
        },
        out: {
          payment_dashboard_modal_scroll_into_view: {
            bind: 'help-modal-transitionend'
          },
          payment_dashboard_close_operative: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-close-operative',
            backStep: true
          },
          payment_dashboard_get_account_data: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-get-account-data'
          },
          payment_dashboard_share_template_receipt: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-purchase-detail-template'
          },
          payment_dashboard_share_receipt: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-share-purchase-detail'
          },
          payment_dashboard_financing_line_response: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financing-line-response'
          },
          payment_dashboard_dashboard_initialized: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-initialize',
            analytics: analyticsPaymentDashboard.advancedFootprint(literals.commons.detail)
          },
          finance_payment_multipurchase_debit_defer_purchase: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-deferrable-purchase-click',
            analytics: analyticsPaymentDashboard.appOnClickStart(literals.commons.defer),
            link: {
              page: 'financeTransactionMultipurchaseDebitPostHiring'
            }
          },
          finance_payment_multipurchase_debit_post_contracting: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-post-contracting',
            analytics: analyticsPaymentDashboard.appOnClickStart(literals.flexibleFinancing.deferPurchases),
            link: {
              page: 'financeTransactionMultipurchaseDebitPostHiring'
            }
          },
          payment_dashboard_more_operatives_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-more-operatives-open',
            analytics: analyticsPaymentDashboard.advancedFootprint(literals.flexibleFinancing.operatives)
          },
          payment_dashboard_modal_info_cut_off_date_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-modal-info-cutOffDate-open',
            analytics: analyticsPaymentDashboard.advancedFootprint(literals.flexibleFinancing.cutOffDate)
          },
          payment_dashboard_modal_info_next_payment_date_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-modal-info-nextPaymentDate-open',
            analytics: analyticsPaymentDashboard.advancedFootprint(literals.flexibleFinancing.paymentDate)
          },
          payment_dashboard_purchase_detail_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-purchase-detail-interaction',
            analytics: analyticsPaymentDashboard.advancedFootprintWithCustoms
          },
          payment_dashboard_line_detail_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-line-detail-open',
            analytics: analyticsPaymentDashboard.advancedFootprint(literals.flexibleFinancing.lineDetail)
          },
          payment_dashboard_payment_history_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-payments-history-interaction',
            analytics: analyticsPaymentDashboard.interactionLink(literals.flexibleFinancing.paymentHistory)
          },
          payment_dashboard_deferred_purchases_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-deferred-purchases-interaction',
            analytics: analyticsPaymentDashboard.interactionLink(literals.flexibleFinancing.deferredPurchases)
          },
          payment_dashboard_share_button_click: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-share-button-interaction',
            analytics: analyticsPaymentDashboard.externalLink
          },
          payment_dashboard_filter_results_open: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-filter-results-open',
            analytics: analyticsPaymentDashboard.advancedFootprint(literals.commons.filter)
          },
          payment_dashboard_navigate_monthly_statement_enquiry: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-account-status',
            link: {
              page: 'monthlyStatementEnquiry',
              params: {
                financingLineId: 'financialId'
              }
            }
          },
          payment_dashboard_navigate_monthly_statement_enquiry_from_operatives: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-account-status-from-operatives',
            analytics: analyticsMonthlyStatements.clickStartFromOperatives
          },
          payment_dashboard_navigate_monthly_statement_enquiry_from_detail: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-account-status-from-detail',
            analytics: analyticsMonthlyStatements.clickStartFromDetails
          },
          payment_dashboardnavigate_to_finance_debit_line_cancel: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-cancel-line',
            link: {
              page: 'financeDebitLineCancel',
              params: {
                financingLineId: 'financingLineId'
              }
            }
          },
          payment_dashboardnavigate_cancel_line_from_operatives: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-cancel-line-from-operatives',
            analytics: analyticsFinanceDebitLineCancel.clickStartFromOperatives
          },
          payment_dashboardnavigate_cancel_line_from_detail: {
            bind: 'financial-id-cancel-line-from-detail',
            analytics: analyticsFinanceDebitLineCancel.clickStartFromDetail
          },
          payment_dashboard_anticipate_payment: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-advance-payment',
            analytics: analyticsAdvancePayments.appOnClickStartAdvance(literals.commons.detail),
            link: {
              page: 'advancePayments'
            }
          },
          payment_dashboard_monthly_payment: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-monthly-payment',
            analytics: analyticsAdvancePayments.appOnClickStartMonthly(literals.commons.operative),
            link: {
              page: 'advancePayments'
            }
          },
          payment_dashboard_overdue_payment: {
            bind: 'card-transaction-servicing-finance-payment-dashboard-financial-id-overdue-payment',
            analytics: analyticsAdvancePayments.appOnClickStartOverdue(literals.commons.detail),
            link: {
              page: 'advancePayments'
            }
          }
        },
        params: {
          globalUser: 'global_user',
          financialId: 'financingLineId'
        }
      }
    },
    propertiesSpherica: {
      localCurrency: getLocalCurrency(),
      iOSFixedHeader: isNativeIos,
      transactionFilters,
      newCellsConnections: {
        add: {
          in: {
            __bridge_cancelled_back_navigation: {
              bind: 'nativeBackNavigation'
            },
            payment_dashboard_init_page: {
              bind: 'initializeDataLoading'
            }
          },
          out: {
            payment_dashboard_close_operative: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-navigation-external',
              backStep: true
            },
            payment_dashboard_get_account_data: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-account-data-get'
            },
            finance_payment_multipurchase_debit_post_contracting: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-post-contracting-navigation-external',
              analytics: analyticsPaymentDashboard.appOnClickStart(literals.flexibleFinancing.deferPurchases),
              link: {
                page: 'financeTransactionMultipurchaseDebitPostHiring'
              }
            },
            payment_dashboard_navigate_monthly_statement_enquiry: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-account-status-navigation-external',
              link: {
                page: 'monthlyStatementEnquiry',
                params: {
                  financingLineId: 'financialId'
                }
              }
            },
            payment_dashboard_navigate_monthly_statement_enquiry_from_operatives: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-account-status-from-operatives-navigation-external',
              analytics: analyticsMonthlyStatements.clickStartFromOperatives
            },
            payment_dashboard_navigate_monthly_statement_enquiry_from_detail: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-account-status-from-detail-navigation-external',
              analytics: analyticsMonthlyStatements.clickStartFromDetails
            },
            payment_dashboardnavigate_to_finance_debit_line_cancel: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-cancel-line-navigation-external',
              link: {
                page: 'financeDebitLineCancel',
                params: {
                  financingLineId: 'financingLineId'
                }
              }
            },
            payment_dashboardnavigate_cancel_line_from_operatives: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-cancel-line-from-operatives-navigation-external',
              analytics: analyticsFinanceDebitLineCancel.clickStartFromOperatives
            },
            payment_dashboardnavigate_cancel_line_from_detail: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-cancel-line-from-detail-navigation-external',
              analytics: analyticsFinanceDebitLineCancel.clickStartFromDetail
            },
            payment_dashboard_anticipate_payment: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-advance-payment-navigation-external',
              analytics: analyticsAdvancePayments.appOnClickStartAdvance(literals.commons.detail),
              link: {
                page: 'advancePayments'
              }
            },
            payment_dashboard_monthly_payment: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-monthly-payment-navigation-external',
              analytics: analyticsAdvancePayments.appOnClickStartMonthly(literals.commons.operative),
              link: {
                page: 'advancePayments'
              }
            },
            payment_dashboard_overdue_payment: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-overdue-payment-navigation-external',
              analytics: analyticsAdvancePayments.appOnClickStartOverdue(literals.commons.detail),
              link: {
                page: 'advancePayments'
              }
            },
            payment_dashboard_deferred_purchases_click: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-deferred-purchases-click',
              analytics: analyticsPaymentDashboard.interactionLink(literals.flexibleFinancing.deferredPurchases)
            },
            payment_dashboard_payments_history_click: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-payments-history-click',
              analytics: analyticsPaymentDashboard.interactionLink(literals.flexibleFinancing.paymentHistory)
            },
            payment_dashboard_purchase_detail_click: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-purchase-detail-click',
              analytics: analyticsPaymentDashboard.advancedFootprintWithCustoms
            },
            payment_dashboard_share_button_click: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-share-button-click',
              analytics: analyticsPaymentDashboard.externalLink
            },
            payment_dashboard_financing_line_response: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-financing-line-response-send'
            },
            payment_dashboard_filter_page_back: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-filter-page-back-click'
            },
            payment_dashboard_open_filter_results: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-filter-button-click',
              analytics: analyticsPaymentDashboard.advancedFootprintCustom(literals.commons.filter)
            },
            payment_dashboard_share_receipt: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-purchase-detail-share'
            },
            payment_dashboard_share_template_receipt: {
              bind: 'card-transaction-servicing-finance-payment-dashboard-purchase-detail-template-send'
            }
          }
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
          payment_dashboard_get_account_data: {
            bind: 'cardId'
          }
        },
        out: {
          payment_dashboard_send_account_name: {
            bind: 'send-associated-account-name'
          },
          payment_dashboard_send_account_number: {
            bind: 'send-associated-account-number'
          }
        }
      }
    }
  };
  const shareOperativeReceipt = {
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
      cellsConnections: {
        in: {
          payment_dashboard_share_template_receipt: {
            bind: 'result'
          },
          payment_dashboard_share_receipt: {
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
  const base = {
    hash: 'payment-dashboard',
    currentPage: {
      url: '/payment-dashboard'
    },
    pages,
    template,
    components: [
      lifeCycle,
      paymentDashboard,
      manager,
      shareOperativeReceipt
    ]
  };
  return sphericaPageUtils.spherize(base);
};
