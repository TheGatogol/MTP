'use strict';
module.exports = (config) => {
  const {
    useNames,
    createPrefixFromPageName,
    getLanguage,
    getLocalCurrency,
    getShortFormatDate
  } = require('./common/helpers/_utils');
  const {
    aemHost,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        flexibleFinancings: flexibleFinancingsApiVersion,
        cardsV1: cardsApiVersion,
        customersV1: customersApiVersion
      }
    },
    payments: {
      financeTransactionMultipurchaseDebit: {
        onboardingUrl: mobilePaymentsOnboardingUrl
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const _localStorage = require('./common/_local-storage');
  const pageName = 'financeTransactionMultipurchaseDebitPostHiring';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const analyticsFinanceDebitMultipurchasePostHiring = require('./analytics/_financeTransactionMultipurchaseDebitPostHiring')(config);
  const analyticsAdvancePayments = require('./analytics/_advancePayments')(config);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);

  const base = {
    hash: 'financeTransactionMultipurchaseDebitPostHiring',
    currentPage: { url: '/finance-transaction-multipurchase-debit-post-hiring', params: [] },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: 0,
        iOSFixedHeader: nativeIos,
        className: `${nativeIos ? 'ios-top-padding safe-area-app' : ''}`,
        animationType: 'verticalUp',
        cellsConnections: {
          in: {
            finance_transaction_multipurchase_debit_post_hiring__init_page: {
              bind: 'recalculateHeader'
            },
            modal_transitionend_scroll_into_view: {
              bind: 'scrollIntoView'
            }
          }
        }
      }
    }
  };
  const feature = {
    zone: 'app__main',
    type: 'UI',
    tag: 'card-transaction-servicing-finance-debit-multipurchase',
    familyPath: '@bbva-web-components-widgets/card-transaction-servicing-finance-debit-multipurchase',
    tagSpherica: 'card-transaction-servicing-finance-debit-multipurchase-mx',
    familyPathSpherica: '@glomo-web-components/card-transaction-servicing-finance-debit-multipurchase-mx',
    render: 'litElement',
    properties: {
      isNativeIos: nativeIos,
      iOSFixedHeader: nativeIos,
      localeCards: 'Mx',
      productId: '0PYP',
      subProductId: '0PYP',
      productIdFinancing: '92',
      subProductIdFinancing: 'CFX1',
      host,
      native,
      requiredToken,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      pageName,
      cardsApiVersion,
      customersApiVersion,
      flexibleFinancingsApiVersion,
      balancesIds: 'AVAILABLE_BALANCE',
      imagesIds: 'FRONT_CARD',
      specificAmountsIds: {
        financingResponse: 'GRANTED_AMOUNT',
        transactions: 'TOTAL_AMOUNT',
        microloans: 'MICROLOAN_AMOUNT',
        microloansFees: 'MICROLOAN_AMOUNT_WITHOUT_FEES',
        monthlyInstallment: 'INSTALLMENT_MONTHLY_AMOUNT',
        lastInstallment: 'LAST_INSTALLMENT',
        simulateRequest: 'MICROLOAN_AMOUNT',
        financingRequest: 'FINANCING_AMOUNT',
        totalInstallment: 'TOTAL_INSTALLMENT',
        totalInstallmentPlan: 'TOTAL_INSTALLMENT_PLAN'
      },
      feeType: 'MICROLOAN_WITHDRAWAL_FEE',
      rateType: 'TOTAL_ANNUAL_COST',
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_card_transaction_servicing_post_contracting: {
            bind: 'setDataPostContracting'
          },
          finance_payment_multipurchase_debit_defer_purchase: {
            bind: 'setDataPostContracting'
          },
          finance_payment_multipurchase_debit_post_contracting: {
            bind: 'setDataPostContracting'
          },
          finance_transaction_multipurchase_debit_post_hiring__init_page: {
            bind: 'postContractInit'
          },
          finance_transaction_multipurchase_debit_post_hiring__send_account_name: {
            bind: 'accountName'
          },
          finance_transaction_multipurchase_debit_post_hiring__send_account_number: {
            bind: 'accountNumber'
          },
          sign_modal_cancelled: {
            bind: 'cancelProcess'
          },
          signature_cancel_widgetErrorHandler: {
            bind: 'cancelProcess'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'closeOperative'
          }
        },
        out: {
          payment_dashboard_init_page: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-exit-accept',
            backStep: true
          },
          finance_transaction_multipurchase_debit_post_hiring__get_account_data: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-get-account-data'
          },
          finance_transaction_multipurchase_debit_post_hiring__FINANCE_DEBIT_RECEIPT_INFO: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-receipt-data-share'
          },
          finance_transaction_multipurchase_debit_post_hiring__SHARE_RECEIPT_CAPTURE: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-share-receipt-select'
          },
          global_card_transaction_servicing_post_contracting_update_card_detail: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-microloans-create'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_transaction_preselect: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-transaction-preselect'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_select_purchase: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-purchase-select'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_see_more_transactions: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-see-more-transactions-select'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_request_months_to_defer_data: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-purchases-continue-select'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_step_months_to_defer_load: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-post-contracting-step-months-to-defer-load'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_months_to_defer_select: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-post-contracting-show-defer-summary'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_otp: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-summary-button-press'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_success_defer_modal_show: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-post-contracting-success-defer-modal-show'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_show_simulate_error_credit_limit: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-error-credit-limit-open',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.pageViewInfo('saldo superado')
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_show_no_available_purchases: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-no-available-purchases-open',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.pageViewError('sin compras')
          },
          'finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_show-error-credit-limit': {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-post-contracting-error-credit-limit-show',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.pageViewError('liberar linea')
          },
          finance_transaction_multipurchase_debit_post_hiring_anticipate_payments_navigate: {
            bind: 'card-transaction-servicing-finance-debit-multipurchase-anticipate-payments-navigate',
            analytics: analyticsAdvancePayments.appOnClickStartFromMultipurchase('liberar linea'),
            link: {
              page: 'advancePayments',
              skipHistory: true
            }
          }
        }
      }
    },
    propertiesSpherica: {
      locale: '',
      contentFragmentHost: aemHost,
      carouselContentFragmentPath: mobilePaymentsOnboardingUrl,
      newCellsConnections: {
        add: {
          in: {
            global_storage_get_finance_debit_multipurchase_error: {
              bind: 'getLocalStorageErrorResponse'
            },
            global_storage_get_finance_debit_multipurchase_success: {
              bind: 'getLocalStorageSuccessResponse'
            },
            sign_modal_cancelled: {
              bind: 'handleOtpCancel'
            },
            widget_signature_close_modal_error: {
              bind: 'handleOtpCancel'
            },
            sign_modal_close_reset: {
              bind: 'handleOtpCancel'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'nativeBackNavigation'
            }
          },
          out: {
            modal_transitionend_scroll_into_view: {
              bind: 'help-modal-transitionend'
            },
            global_get_from_storage: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-get-native-local-storage-request'
            },
            global_set_in_storage: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-set-native-local-storage-request'
            },
            finance_transaction_multipurchase_debit_post_hiring__exit: {
              bind: 'navigation-go-back',
              backStep: true
            },
            finance_transaction_multipurchase_debit_post_hiring__FINANCE_DEBIT_RECEIPT_INFO: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-receipt-result-share'
            },
            finance_transaction_multipurchase_debit_post_hiring__SHARE_RECEIPT_CAPTURE: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-receipt-share'
            },
            finance_transaction_multipurchase_debit_post_hiring__multipurchase_months_to_defer_select_post_contracting: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-post-contracting-defer-summary-show'
            },
            finance_transaction_multipurchase_debit_post_hiring__multipurchase_otp: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-microloans-otp'
            },
            finance_transaction_multipurchase_debit_post_hiring__multipurchase_show_simulate_error_credit_limit: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-error-credit-limit-show',
              analytics: analyticsFinanceDebitMultipurchasePostHiring.pageViewInfo('saldo superado')
            },
            finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_show_no_available_purchases: {
              bind: 'card-transaction-servicing-finance-debit-multipurchase-multistep-no-available-purchases-show',
              analytics: analyticsFinanceDebitMultipurchasePostHiring.pageViewError('sin compras')
            }
          }
        },
        remove: {
          in: [
            'finance_transaction_multipurchase_debit_post_hiring__init_page'
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
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_select_purchase: {
            bind: 'debitFireAppStarted'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_see_more_transactions: {
            bind: 'debitFireAppStarted'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_request_months_to_defer_data: {
            bind: 'debitFireAppStarted'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_transaction_preselect: {
            bind: 'managePurchaseCustomFields'
          },
          finance_payment_multipurchase_debit_post_contracting: {
            bind: 'debitFirePageVisit'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_step_months_to_defer_load: {
            bind: 'debitFireAppStepMonthsToDefer'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_months_to_defer_select: {
            bind: 'debitFireAppStepTerms'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_otp: {
            bind: 'debitFireAppStepContractLineRequest'
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_post_contracting_success_defer_modal_show: {
            bind: 'debitFireAppDeferCompleted'
          }
        },
        out: {
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_analytics_app_page_visit: {
            bind: 'debit-analytics-page-visit',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.appVisit()
          },
          finance_transaction_multipurchase_debit_post_hiring__multpurchase_analytics_app_started: {
            bind: 'debit-analytics-app-started',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.appStarted()
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_analytics_step_months_to_defer: {
            bind: 'debit-analytics-step-months-to-defer',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.appStep('2', 'meses a diferir')
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_analytics_step_confirmation: {
            bind: 'debit-analytics-step-terms',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.appStep('3', 'confirmacion')
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_analytics_step_request_otp: {
            bind: 'debit-analytics-step-contract-line-request',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.appStep('4', 'otp')
          },
          finance_transaction_multipurchase_debit_post_hiring__multipurchase_analytics_completed: {
            bind: 'debit-analytics-defer-completed',
            analytics: analyticsFinanceDebitMultipurchasePostHiring.appCompleted('pagina exitosa')
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
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0rem',
          'margin-top': '0.125rem',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0rem',
          'font-size': 'var(--cells-text-size-12, 0.75rem)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          finance_transaction_multipurchase_debit_post_hiring__SHARE_RECEIPT_CAPTURE: {
            bind: 'captureReceipt'
          },
          finance_transaction_multipurchase_debit_post_hiring__FINANCE_DEBIT_RECEIPT_INFO: {
            bind: 'result'
          },
          finance_transaction_multipurchase_debit_post_hiring__right_primary_click: {
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
      country: 'mxGlobal',
      newCellsConnections: {
        remove: {
          out: [
            'open_control_veil',
            'close_control_veil'
          ]
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
      tokenName: requiredToken,
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          finance_transaction_multipurchase_debit_post_hiring__close_operative: {
            bind: 'reset'
          }
        },
        out: {
          finance_transaction_multipurchase_debit_post_hiring__init_page: {
            bind: 'init-page'
          },
          finance_transaction_multipurchase_debit_post_hiring__reset_page: {
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
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      host,
      native,
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialData'
          },
          finance_transaction_multipurchase_debit_post_hiring__get_account_data: {
            bind: 'cardId'
          }
        },
        out: {
          finance_transaction_multipurchase_debit_post_hiring__send_account_name: {
            bind: 'send-associated-account-name'
          },
          finance_transaction_multipurchase_debit_post_hiring__send_account_number: {
            bind: 'send-associated-account-number'
          }
        }
      }
    }
  };
  const pageBase = {
    ...base,
    components: [lifeCycle, feature, manager, analyticsManager, receiptManager]
  };
  _localStorage.addOutStorageChannels(pageBase.components, [ 'finance_debit_multipurchase' ], config);
  const signConnector = require('./common/_widget-sign-connector')(config)(pageBase);
  signConnector('card-transaction-servicing-finance-debit-multipurchase');
  return sphericaPageUtils.spherize(pageBase);
};
