/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-transaction-detail')('account')(CONFIG);
  const analyticsTransactions = require('./analytics/_accountTransactions')({});
  const refundsAnalitycs = require('./analytics/_refunds')(CONFIG);
  const excludeObfuscation = undefined;
  const { getLanguage, getLocalCurrency, getShortFormatDate } = require('./common/helpers/_utils');
  const { standInOperatives } = require('./analytics/_standInAlwaysOn')(CONFIG);
  const { account, account_detail: accountDetail, information } = require('./analytics/common/_literals').commons;
  const analyticsBillPaymentsDashboard = require('./analytics/_billPaymentsDashboard')(CONFIG);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { accountsV1, accountsV2 }},
    native = false,
    nativeIos = false
  } = CONFIG;

  base.components = [];
  base.template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      headerFixed: true,
      disableEdgeSwipe: true,
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
      headerHeight: 0,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          account_init_account_detail: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };

  const transactionDetail = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-transaction-detail-accounts-mx',
    familyPath: '@glomo-web-components/bbva-feature-transaction-detail-accounts-mx',
    render: 'litElement',
    properties: {
      requiredToken,
      native,
      host,
      accountsApiVersion: accountsV2,
      paymentsApiVersion: accountsV1,
      excludeObfuscation: excludeObfuscation,
      enableClaimSection: true,
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          account_init_resend_voucher: {
            bind: 'shareCertifiedReceipt'
          },
          set_global_current_account: {
            bind: 'dashboardAccount'
          },
          navigation_product_detail_to_transaction_detail: {
            bind: 'mainTransactionDetail'
          },
          global_account_set_transaction_detail: {
            bind: 'mainTransactionDetail'
          },
          __bridge_page_account: {
            bind: 'setLoading'
          },
          reset_feature_transaction_detail: {
            bind: 'resetTransactionDetail'
          },
          transaction_detail_reuse_insuficient_money: {
            bind: 'openModalInsufficientMoney'
          },
          account_open_notification_toast_success: {
            bind: 'showShareReceiptSuccessToast'
          },
          banxico_transaction_detail_success: {
            bind: 'successBanxicoTransactionDetail'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'maskedAmount'
          }
        },
        out: {
          account_on_click_resend_voucher_sipare: {
            bind: 'resend-email-receipt'
          },
          account_resending_voucher_error: {
            bind: 'on-error-sipare-resending-voucher'
          },
          account_detail_exit: {
            bind: 'exit-transaction-detail-account',
            backStep: true
          },
          banxico_transaction_detail: {
            bind: 'banxico-transaction-account-detail'
          },
          send_account_and_transaction_id: {
            bind: 'send-banxico-transaction-params'
          },
          transaction_detail_account_info_receipt: {
            bind: 'transaction-detaul-account-send-data-receipt'
          },
          transaction_detail_account_share_receipt: {
            bind: 'transaction-detaul-account-create-receipt'
          },
          account_set_transaction_detail: {
            bind: 'set-transaction-detail'
          },
          reuse_operation_click_navigation: {
            bind: 'operation-frequency-click'
          },
          reuse_operation_navigation: {
            bind: 'operation-frequency-click'
          },
          reuse_operation_back_navigation: {
            bind: 'exit-transaction-detail-account'
          },
          navigation_to_refunds: {
            bind: 'navigation-to-refunds',
            analytics: refundsAnalitycs.APP_ON_CLICK_START(accountDetail, information),
            link: {
              page: 'refunds'
            }
          },
          show_clarifications_management_care_channel: {
            bind: 'claim-data-care-transaction',
            link: {
              page: 'clarificationsManagementCarePage'
            }
          },
          account_share_receipt_transaction: {
            bind: 'share-transaction-receipt-capture'
          },
          action_detail_account_share_receipt: {
            bind: 'transaction-detaul-account-create-receipt'
          },
          reuse_operation_data: {
            bind: 'set-transaction-detail-dm'
          },
          account_set_transaction_detail_analytics: {
            bind: 'set-transaction-detail-analytics',
            analytics: analyticsTransactions.transactionDetailFootprint
          },
          account_set_transaction_detail_standin_analytics: {
            bind: 'set-transaction-detail-standin-analytics',
            analytics: standInOperatives(account, 'NAVIGATION_DETAIL')
          },
          account_share_receipt_analytics: {
            bind: 'share-receipt-analytics',
            analytics: analyticsTransactions.shareInternalLink
          },
          global_action_launcher_uri: {
            bind: 'transaction-detail-navigate-to-external-link'
          },
          global_logout_sesion_expiration: {
            bind: 'transaction-detail-session-expiration'
          },
          share_receipt_stand_in_analytics: {
            bind: 'share-receipt-stand-in-analytics',
            analytics: standInOperatives(account, 'SHARE_TRANSACTION')
          },
          ['account_resending_voucher_success']: {
            bind: 'success-sipare-resending-voucher'
          }
        },
        params: {
          transactionId: 'transactionId',
          productId: 'productId'
        }
      }
    }
  };

  const receipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mxGlobal',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      dateFormat: getShortFormatDate(),
      sharedReceiptStyles: {
        infoIcon: {
          'display': 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'width': '1.75rem'
        }
      },
      cellsConnections: {
        in: {
          transaction_detail_account_share_receipt: {
            bind: 'captureReceipt'
          },
          transaction_detail_account_info_receipt: {
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

  const controllerResendingVoucher = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-resending-voucher-mx',
    familyPath: '@glomo-web-components/bbva-controller-resending-voucher-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          account_on_click_resend_voucher_sipare: {
            bind: 'controllerResendVoucher'
          },
          account_resending_voucher_success: {
            bind: 'controllerResendingVoucherSuccess'
          },
          account_resending_voucher_error: {
            bind: 'controllerResendingVoucherError'
          },
          sipare_resending_voucher_exit: {
            bind: 'closeModalDashboard'
          },
          sipare_resending_voucher_retry: {
            bind: 'sendRequest'
          }
        },
        out: {
          account_init_resend_voucher: {
            bind: 'bbva-controller-resending-voucher-mx-request'
          },
          account_open_notification_toast_success: {
            bind: 'bbva-controller-resending-voucher-mx-success-request'
          },
          account_text_notification_toast_success: {
            bind: 'bbva-controller-resending-voucher-mx-success-text'
          },
          global_alert_manager_open_with_settings: {
            bind: 'bbva-controller-resending-voucher-mx-error'
          },
          account_bbva_controller_resending_voucher_mx_modal_exit: {
            bind: 'bbva-controller-resending-voucher-mx-close-modal-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          account_set_transaction_detail_analytics: {
            bind: 'set-transaction-detail-analytics',
            analytics: analyticsTransactions.transactionDetailFootprint
          },
          account_send_request_voucher_analytics: {
            bind: 'bbva-controller-resending-voucher-mx-send-request-analytic',
            analytics: analyticsTransactions.shareInternalLinkSipare
          },
          account_success_request_analytics: {
            bind: 'bbva-controller-resending-voucher-mx-success-request-analytic',
            analytics: analyticsTransactions.transactionsListFootprintSipare
          },
          account_resend_voucher_exit_analytics: {
            bind: 'bbva-controller-resending-voucher-mx-exit-analytic',
            analytics: analyticsTransactions.errorTransactionsListLinkActionSipare
          }
        }
      }
    }
  };

  const reuseOperationDataManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-transaction-detail-account-reuse-mx',
    familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
    render: 'litElement',
    properties: {
      evtPrefix: 'reuse-operation',
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'isEnableflagValidation'
          },
          dashboard_accounts: {
            bind: 'globalAccounts'
          },
          global_dashboard_cards: {
            bind: 'globalCards'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          account_set_transaction_detail: {
            bind: 'updateOperationsFromReuseOperations'
          },
          reuse_operation_data: {
            bind: 'currentTransactionDetailToNavigate'
          },
          reuse_operation_click_navigation: {
            bind: 'reuseOperationOperativeNavigation'
          },
          reuse_operation_change_product_mandatory: {
            bind: 'afterBalanceErrorSelection'
          },
          reuse_operation_change_amount_mandatory: {
            bind: 'afterBalanceErrorSelection'
          },
          reuse_operation_back_navigation: {
            bind: 'resetClaims'
          }
        },
        out: {
          account_product_set_transaction_detail: {
            bind: 'reuse-operation-new-operations-buttons'
          },
          navigate_to_transfer_operation: {
            bind: 'navigate-reuse-transfer-data',
            link: {
              page: 'reuseOperationsTransfers'
            }
          },
          navigate_to_billPayments_operation: {
            bind: 'navigate-reuse-billPayments-data',
            analytics: analyticsBillPaymentsDashboard.appInternalLinkReuseOperation(),
            link: {
              page: 'reuseOperationsBillPayments'
            }
          },
          transaction_detail_reuse_insuficient_money: {
            bind: 'reuse-operation-insuficient-money'
          },
          reuse_operation_change_product_mandatory: {
            bind: 'reuse-operation-with-diferent-product'
          },
          reuse_operation_change_amount_mandatory: {
            bind: 'reuse-operation-with-diferent-amount'
          }
        }
      }
    }
  };

  const banxicoDataManager = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      host: host,
      native: native,
      requiredToken: CONFIG.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          banxico_transaction_detail: {
            bind: 'getTransactionDetail'
          },
          send_account_and_transaction_id: {
            bind: 'setProperties'
          }
        },
        out: {
          banxico_transaction_detail_success: {
            bind: 'set-account-transaction-detail'
          },
          banxico_transaction_detail_error: {
            bind: 'error-on-get-account-transaction-detail'
          }
        }
      }
    }
  };

  const controllerBillPaymentsHome = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-bill-payments-home',
    familyPath: '@glomo-web-components/bbva-controller-bill-payments-home',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          account_set_transaction_detail: {
            bind: 'billPaymentsDetailMovement'
          }
        },
        out: {
          analytics_billPayments_footprint_reuse_operation: {
            bind: 'bbva-controller-bill-payments-home-reuse-operation-track',
            analytics: analyticsBillPaymentsDashboard.appPageVisitReUseOperation()
          }
        }
      }
    }
  };

  base.components.push(transactionDetail, controllerResendingVoucher, receipt, reuseOperationDataManager, banxicoDataManager, controllerBillPaymentsHome);

  return base;
};
