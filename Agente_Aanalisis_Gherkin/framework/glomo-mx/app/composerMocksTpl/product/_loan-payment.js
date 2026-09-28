'use strict';

module.exports = (PRODUCT, ANALYTICS) => (CONFIG) => {
  const {getLocalCurrency, getCurrencyCode, createPrefixFromPageName, useNames, getLanguage} = require('../common/helpers/_utils');
  const pages = require('../common/_pages')(CONFIG)(PRODUCT + 'Payment');
  const addCommonErrors = require('../common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('../common/commonErrors/_dm-retry-errors')(CONFIG);
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false
  } = CONFIG;
  const [ getChannelName ] = useNames(createPrefixFromPageName(PRODUCT + 'Payment'));
  const analytics = require('../analytics/_loanPayment.js')(ANALYTICS);
  const base = {
    hash: 'loanPayment' + PRODUCT,
    currentPage: {
      url: '/loan-payment-' + PRODUCT
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        iOSFixedHeader: nativeIos,
        className: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            [getChannelName('loan_change_header')]: {
              bind: 'className'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'DM',
        properties: {
          pageName: PRODUCT + 'Payment',
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              ['__bridge_page_' + PRODUCT + 'Payment']: {
                bind: 'init'
              }
            },
            out: {
              [PRODUCT + '_init_page']: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-feature-' + PRODUCT + '-payment-mx',
        tag: 'bbva-analytics-' + PRODUCT + '-payment',
        render: 'litElement',
        properties: {
          appStartedText: '',
          cellsConnections: {
            in: {
              [PRODUCT + '_init_page']: {
                bind: 'firePageVisit'
              },
              [getChannelName('payment_recipt_amount')]: {
                bind: 'fireAppStarted'
              },
              [getChannelName('payment_other_amount')]: {
                bind: 'fireAppStarted'
              },
              [getChannelName('payment_setlement_amount')]: {
                bind: 'fireAppStarted'
              },
              [getChannelName('send_analytics_step_data')]: {
                bind: 'fireDynamicStep'
              },
              widget_signature_handle_required_first_step: {
                bind: 'manageAnalyticsSign'
              },
              [getChannelName('post_payment_installment')]: {
                bind: 'parseAnalyticsConfirmData'
              },
              [getChannelName('post_payment_amortizations')]: {
                bind: 'parseAnalyticsConfirmData'
              },
              [getChannelName('error_on_loan_payment')]: {
                bind: 'errorLoanPaymentAnalytics'
              },
              [getChannelName('error_on_get_accounts')]: {
                bind: 'errorGetAccountsAnalytics'
              },
              [getChannelName('persist_data_analytics')]: {
                bind: 'persistData'
              }
            },
            out: {
              [getChannelName('page_visit')]: {
                bind: 'analytics-page-visit',
                analytics: analytics.loanPaymentVisit
              },
              [getChannelName('app_started')]: {
                bind: 'analytics-app-started',
                analytics: analytics.loanPaymentStarted
              },
              [getChannelName('app_step_detail_payment')]: {
                bind: 'analytics-detail-payment',
                analytics: analytics._getStepAnalytic('2')
              },
              [getChannelName('app_step_account_select')]: {
                bind: 'analytics-account-select',
                analytics: analytics._getStepAnalytic('3')
              },
              [getChannelName('app_step_summary_payment')]: {
                bind: 'analytics-summary-payment',
                analytics: analytics._getStepAnalytic('4')
              },
              [getChannelName('app_step_analytics_otp')]: {
                bind: 'analytics-otp',
                analytics: analytics._getStepAnalytic('5')
              },
              [getChannelName('app_completed')]: {
                bind: 'analytics-app-completed',
                analytics: analytics.loanPaymentCompleted
              },
              [getChannelName('analytics_error_loan_payment')]: {
                bind: 'analytics-error-loan-payment',
                analytics: analytics._getAnalyticError('paymentAmount')
              },
              [getChannelName('analytics_error_get_accounts')]: {
                bind: 'analytics-error-get-accounts',
                analytics: analytics._getAnalyticError('paymentAccounts')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-' + PRODUCT + '-payment-mx',
        tag: 'bbva-feature-' + PRODUCT + '-payment-mx',
        render: 'litElement',
        properties: {
          host,
          native,
          iOSFixedHeader: nativeIos,
          requiredToken,
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          currencyCode: getCurrencyCode(CONFIG),
          cellsConnections: {
            in: {
              [PRODUCT + '_init_page']: {
                bind: 'initFlow'
              },
              dashboard_customer_email: {
                bind: 'getEmail'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'exitFeature'
              },
              sign_modal_cancelled: {
                bind: 'onSignOtpModalIsCanceled'
              },
              loan_payment_reset_receipt: {
                bind: 'shareReceipt'
              }
            },
            out: {
              global_retry_error: {
                bind: 'retry-error'
              },
              [getChannelName('exit')]: {
                bind: 'exit',
                backStep: true
              },
              [getChannelName('loan_change_header')]: {
                bind: 'bbva-feature-' + PRODUCT + '-payment-change-header'
              },
              [getChannelName('payment_recipt_amount')]: {
                bind: 'loan-payment-options-recipt-amount'
              },
              [getChannelName('payment_other_amount')]: {
                bind: 'loan-payment-options-other-amount'
              },
              [getChannelName('payment_setlement_amount')]: {
                bind: 'loan-payment-options-settle-amount'
              },
              [getChannelName('send_analytics_step_data')]: {
                bind: 'send-analytics-step-data'
              },
              [getChannelName('post_payment_installment')]: {
                bind: 'post-payment-installment-v1-success'
              },
              [getChannelName('post_payment_amortizations')]: {
                bind: 'post-loan-payment-amortizations'
              },
              [getChannelName('error_on_loan_payment')]: {
                bind: 'error-on-loan-payment-analyitics'
              },
              [getChannelName('error_on_get_accounts')]: {
                bind: 'error-on-get-accounts-analytics'
              },
              [getChannelName('persist_data_analytics')]: {
                bind: 'persist-data-analytics'
              },
              loan_payment_receipt_result: {
                bind: 'loan-payment-ticket-share-click'
              },
              loan_payment_receipt_capture: {
                bind: 'loan-payment-ticket-share-click'
              },
              mortgage_payment_receipt_result: {
                bind: 'mortgage-payment-ticket-share-click'
              },
              mortgage_payment_receipt_capture: {
                bind: 'mortgage-payment-ticket-share-click'
              }
            },
            params: {
              loanId: 'loanId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          country: 'mxGlobal',
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          cellsConnections: {
            in: {
              loan_payment_receipt_capture: {
                bind: 'captureReceipt'
              },
              loan_payment_receipt_result: {
                bind: 'result'
              },
              loan_payment_reset_receipt: {
                bind: 'reset'
              },
              mortgage_payment_receipt_capture: {
                bind: 'captureReceipt'
              },
              mortgage_payment_receipt_result: {
                bind: 'result'
              },
              mortgage_payment_reset_receipt: {
                bind: 'reset'
              }
            },
            out: {
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              },
              loan_payment_reset_receipt: {
                bind: 'receipt-captured'
              },
              mortgage_payment_reset_receipt: {
                bind: 'receipt-captured'
              },
              global_alert_manager_open_with_settings_spherica: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      }
    ]
  };
  const errorAndSignWidgetConnector =
    require('../common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-' + PRODUCT + '-payment-mx');

  addCommonErrors(base.components);

  addRetryErrors(base)([
    {
      id: 'retry-get-loan-detail-' + PRODUCT,
      acceptRetry: {
        bind: 'getLoan',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      cancelRetry: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      acceptCallForHelp: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      }
    },
    {
      id: 'retry-post-loan-simulates-' + PRODUCT,
      acceptRetry: {
        bind: 'retrySimulate',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      cancelRetry: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      acceptCallForHelp: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      }
    },
    {
      id: 'retry-post-loan-signature-' + PRODUCT,
      acceptRetry: {
        bind: 'retrySignature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      cancelRetry: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      acceptCallForHelp: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      }
    },
    {
      id: 'retry-get-loan-detail-loan',
      acceptRetry: {
        bind: 'getLoan',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      cancelRetry: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      },
      acceptCallForHelp: {
        bind: 'exitFeature',
        component: 'bbva-feature-' + PRODUCT + '-payment-mx'
      }
    }
  ]);
  return base;
};
