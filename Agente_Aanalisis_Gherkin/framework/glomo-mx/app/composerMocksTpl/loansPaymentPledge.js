'use strict';

module.exports = config => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        loans: loanApiVersion,
        loansV2: loansApiVersion,
        campaigns: campaignsApiVersion
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const pageName = 'loansPaymentPledge';
  const {
    getLanguage,
    getLocalCurrency,
    createSpinner
  } = require('./common/helpers/_utils.js');
  createSpinner.tagSpherica = 'cells-spinner-veil-spherica';
  createSpinner.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const pages = require('./common/_pages.js')(config)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const analytics = require('./analytics/_loansPaymentPledge.js')(config);

  const pageMap = {
    '0732': 'ocLoanPaymentPlanRestructurePage',
    '0740': 'ocPaymentPlanDecreaseLoan'
  };

  const base = {
    hash: 'loans-payment-pledge',
    currentPage: {
      url: '/loans-payment-pledge'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: nativeIos ? 'ios-top-padding dark-blue-bg' : '',
        extraHeaderClass: 'dark-blue-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        drawerWidth: '100%',
        componentName: 'cells-template-coronita-spherica',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        className: nativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
        headerHeight: 0,
        footerFixed: true
      })
    },
    components: [
      createSpinner(config),
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'loan-and-mortgage-transaction-servicing-payment-pledge',
        familyPath: '@bbva-web-components-widgets/loan-and-mortgage-transaction-servicing-payment-pledge',
        render: 'litElement',
        properties: {
          advisorId: 'glomo',
          maxAllowedRetries: 3,
          host,
          native: !!native,
          requiredToken,
          language: getLanguage(),
          campaignsApiVersion,
          loanApiVersion,
          loansApiVersion,
          localCurrency: getLocalCurrency(),
          cellsConnections: {
            in: {
              notification_controller_payment_pledge_channel_init_process: {
                bind: 'initProcess'
              },
              notification_controller_payment_pledge_channel_termination_value: {
                bind: 'terminationValue'
              },
              notification_controller_payment_pledge_channel_matury_date: {
                bind: 'maturityDate'
              },
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              }
            },
            out: {
              loan_and_mortgage_transaction_servicing_payment_pledge_modal_transitionend_scroll_into_view: {
                bind: 'help-modal-transitionend'
              },
              notification_controller_payment_pledge_channel_offer_clicked: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-list-offer-link-click'
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_exit_modal: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-modal-manager-close',
                link: {
                  page: 'dashboard'
                }
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_navigate_to_page_loan_payment: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-pay-credit-navigate-to-page-loan-payment'
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_loan_data: {
                bind: 'loan-api-dm-fetch'
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_open_pledge_form: {
                bind: 'button-row-item-button-schedule-payment-click',
                analytics: analytics.loansPaymentPledgeOnClickStart('programar fecha compromiso')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_show_multistep: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-pay-credit-multistep-page-show',
                analytics: analytics.loansPaymentPledgePageVisit('1 seleccionar fecha')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_select_pledge_date: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-payment-pledge-step-selected',
                analytics: analytics.loansPaymentPledgeStarted('1 seleccionar fecha', 'seleccionar fecha')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_confirm_pledge_date: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-multistep-first-step-complete',
                analytics: analytics.loansPaymentPledgeStarted('1 seleccionar fecha', 'continuar')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_preselected_amount: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-multistep-second-step-first-update',
                analytics: analytics.loansPaymentPledgeStep('2 importe', 2)
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_select_amount: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-payment-type-step-selected',
                analytics: analytics.loansPaymentPledgeStep('2 importe', 2)
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_confirm_amount: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-multistep-second-step-complete',
                analytics: analytics.loansPaymentPledgeStep('3 confirmacion', 3)
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_create_payment_pledge: {
                bind: 'payment-promises-api-dm-create'
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_offers_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-offers-error',
                analytics: analytics.loansPaymenErrorPageView('error informacion no disponible')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_loans_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-loans-error',
                analytics: analytics.loansPaymenErrorPageView('error informacion no disponible')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_loan_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-loan-error',
                analytics: analytics.loansPaymenErrorPageView('error informacion no disponible')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_promise_search_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-payment-promises-search-error',
                analytics: analytics.loansPaymenErrorPageView('error informacion no disponible')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_create_promise_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-create-payment-promises-error',
                analytics: analytics.loansPaymenErrorPageView('error operacion no realizada')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_calculated_dates_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-calculated-payment-promises-error',
                analytics: analytics.loansPaymenErrorPageView('error informacion no disponible')
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_calculate_error: {
                bind: 'loan-and-mortgage-transaction-servicing-payment-pledge-dm-calculate-error',
                analytics: analytics.loansPaymenErrorPageView('error informacion no disponible')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-loan-and-mortgage-transaction-servicing',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-transaction-servicing',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              loan_and_mortgage_transaction_servicing_payment_pledge_analytics_loan_data: {
                bind: 'loanData'
              },
              loan_and_mortgage_transaction_servicing_payment_pledge_create_payment_pledge: {
                bind: 'fireAppCompleted'
              }
            },
            out: {
              loans_payment_pledge_analytics_app_completed: {
                bind: 'analytics-app-completed',
                analytics: analytics.loansPaymentPledgeAppCompleted('pagina exitosa')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-notification-detail',
        familyPath: '@glomo-web-components/bbva-controller-notification-detail',
        render: 'litElement',
        properties: {
          pageMap,
          operativeType: 'promiseConsumo',
          featureFlagKey: 'glomo.loans.paymentPledge',
          cellsConnections: {
            in: {
              loan_and_mortgage_transaction_servicing_payment_pledge_navigate_to_page_loan_payment: {
                bind: 'navigateToPageLoanPayment'
              },
              notification_controller_payment_pledge_channel_offer_clicked: {
                bind: 'offerClicked'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'pushNotificationDetail'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              notification_controller_payment_pledge_channel_init_process: {
                bind: 'reset'
              }
            },
            out: {
              notification_controller_payment_pledge_navigate_to_page_loan_payment: {
                bind: 'bbva-controller-notification-detail-navigate-to-page-loan-payment',
                link: {
                  page: 'loanPayment',
                  params: {
                    productId: 'loanId'
                  }
                }
              },
              notification_controller_payment_pledge_exit_page: {
                bind: 'bbva-controller-notification-detail-navigation-dashboard',
                link: {
                  page: 'dashboard'
                }
              },
              notification_controller_payment_pledge_navigation_to_fixed_payment_plan: {
                bind: 'bbva-controller-notification-detail-offer-clicked',
                link: {
                  page: {
                    bind: 'pageName'
                  },
                  params: {
                    offerId: 'offerId',
                    productId: 'productId'
                  }
                }
              },
              notification_controller_payment_pledge_channel_termination_value: {
                bind: 'bbva-controller-notification-detail-termination-value'
              },
              notification_controller_payment_pledge_channel_matury_date: {
                bind: 'bbva-controller-notification-detail-maturity-date'
              },
              notification_controller_payment_pledge_channel_init_process: {
                bind: 'bbva-controller-notification-detail-init-process'
              }
            }
          }
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(base);
};
