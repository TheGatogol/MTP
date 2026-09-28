'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const {
    getLanguage,
    getLocalCurrency,
    createSpinner
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('cardCreditCardPaymentPromise');
  const pageNameChannel = 'CARD_CREDIT_CARD_PAYMENT_PROMISE';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const analytics = require('./analytics/_cardCreditCardPaymentPromise')(CONFIG);

  const base = {
    hash: 'card-credit-card-payment-promise',
    currentPage: {
      url: '/card-credit-card-payment-promise'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding dark-blue-bg' : '',
        extraHeaderClass: 'dark-blue-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'cardCreditCardPaymentPromise',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_cardCreditCardOperationSelect: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              card_payment_operation_reset_page: {
                bind: 'reset'
              },
              card_payment_operation_init_page: {
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
        type: 'UI',
        tag: 'bbva-feature-credit-card-payment-own-cards',
        familyPath: '@glomo-web-components/bbva-feature-credit-card-payment-own-cards',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          currency: getLocalCurrency(),
          language: getLanguage(),
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'validateFeatureFlags'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'setLastCreditCardDigits'
              },
              global_financial_overview_details: {
                bind: 'financialInformation'
              },
              [pageNameChannel + '_set_card_data']: {
                bind: 'handleSuccessGetCardResponse'
              },
              [pageNameChannel + '_card_data_error']: {
                bind: 'handleGetCardError'
              },
              global_deviceid_channel: {
                bind: 'deviceId'
              },
              [pageNameChannel + '_set_selected_date']: {
                bind: 'setSelectedPaymentPromiseDate'
              }
            },
            out: {
              [pageNameChannel + '_EXIT_MENU']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-navigate-to-dashboard',
                link: {
                  page: 'dashboard'
                }
              },
              [pageNameChannel + '_set_card']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-set-card-id'
              },
              [pageNameChannel + '_get_card_data']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-get-card'
              },
              [pageNameChannel + '_GO_TO_CARD_DETAIL']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-go-to-card-payment',
                link: {
                  page: 'cardDetail',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              'CARD_CREDIT_CARD_PAYMENT_PROMISE_SET_PAYMENT_PROMISE_DATA': {
                bind: 'bbva-feature-credit-card-payment-own-cards-set-promise-navigations'
              },
              global_retry_error: {
                bind: 'show-global-retry-error'
              },
              open_control_veil: {
                bind: 'show-loader'
              },
              close_control_veil: {
                bind: 'hide-loader'
              },
              [pageNameChannel + '_APP_ON_CLICK_START']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-on-click-start',
                analytics: analytics.creditCardPaymentPromiseStart('pagar tarjeta', 'acceder')
              },
              [pageNameChannel + '_APP_PAGE_VISIT']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-page-visit',
                analytics: analytics.creditCardPaymentPromisePageVisit('compromiso de pago', '1 compromiso de pago')
              },
              [pageNameChannel + '_APP_STARTED']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-app-started',
                analytics: analytics.creditCardPaymentPromiseStarted('compromiso de pago', '1 compromiso de pago', 'seleccionar fecha pago')
              },
              [pageNameChannel + '_APP_STEP_PAYMENT_AMOUNT']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-app-step-payment-amount',
                analytics: analytics.creditCardPaymentPromiseStep('compromiso de pago', '2 importe', 2)
              },
              [pageNameChannel + '_APP_STEP_PAYMENT_METHOD']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-app-step-payment-method',
                analytics: analytics.creditCardPaymentPromiseStep('compromiso de pago', '3 metodo de pago', 3, true)
              },
              [pageNameChannel + '_APP_STEP_CONFIRM']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-app-step-payment-promise-confirmation',
                analytics: analytics.creditCardPaymentPromiseStep('compromiso de pago', '4 confirmacion', 4, true, true)
              },
              [pageNameChannel + '_APP_COMPLETED']: {
                bind: 'bbva-feature-credit-card-payment-own-cards-analytics-app-completed',
                analytics: analytics.creditCardPaymentPromiseAppCompleted('compromiso de pago', 'pagina exitosa')
              },
              [pageNameChannel + '_set_initial_calendar_date']: {
                bind: 'bbva-credit-card-payment-promise-send-promise-initial-date'
              },
              [pageNameChannel + '_send_calendar_dates']: {
                bind: 'bbva-credit-card-payment-promise-send-promise-dates'
              },
              [pageNameChannel + '_open_calendar']: {
                bind: 'bbva-credit-card-payment-promise-open-calendar'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'cells-modal-calendar',
        properties: {
          onlyHighlighted: true,
          blockWeekend: true,
          iOSFixed: isNativeIos,
          primaryButtonText: 'bbva-feature-credit-card-payment-own-cards-payment-promise-calendar-button',
          title: 'bbva-feature-credit-card-payment-own-cards-payment-promise-calendar-header',
          cellsConnections: {
            in: {
              [pageNameChannel + '_set_initial_calendar_date']: {
                bind: 'initialDate'
              },
              [pageNameChannel + '_send_calendar_dates']: {
                bind: 'highlightDays'
              },
              [pageNameChannel + '_open_calendar']: {
                bind: 'open'
              },
              [pageNameChannel + '_set_selected_date']: {
                bind: 'close'
              },
              [pageNameChannel + '_EXIT_MENU']: {
                bind: 'clean'
              }
            },
            out: {
              [pageNameChannel + '_set_selected_date']: {
                bind: 'primary-button-pressed'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cardsV1,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cardActivations: [ { 'activationId': 'ON_OFF' } ],
          cellsConnections: {
            in: {
              [pageNameChannel + '_set_card']: {
                bind: 'cardId'
              },
              [pageNameChannel + '_get_card_data']: {
                bind: 'getCard'
              }
            },
            out: {
              [pageNameChannel + '_set_card_data']: {
                bind: 'set-card'
              },
              [pageNameChannel + '_card_data_error']: {
                bind: 'error-on-get-card'
              }
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([
    {
      id: 'card-information-not-loaded',
      acceptRetry: { bind: 'getCardInfo', component: 'bbva-feature-credit-card-payment-own-cards' },
      cancelRetry: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' },
      successEvent: {
        bind: 'set-card',
        component: 'cells-dm-global-apis-cards'
      },
      acceptCallForHelp: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' }
    },
    {
      id: 'dates-information-not-loaded',
      acceptRetry: { bind: 'calculatedPaymentPromiseDates', component: 'bbva-feature-credit-card-payment-own-cards' },
      cancelRetry: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' },
      acceptCallForHelp: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' }
    },
    {
      id: 'promise-unfinished-operation',
      acceptRetry: { bind: 'createPaymentPromise', component: 'bbva-feature-credit-card-payment-own-cards' },
      cancelRetry: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' },
      acceptCallForHelp: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' }
    },
    {
      id: 'pending-promise-information-not-loaded',
      acceptRetry: { bind: 'searchPendingPaymentPromise', component: 'bbva-feature-credit-card-payment-own-cards' },
      cancelRetry: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' },
      acceptCallForHelp: { bind: 'onNavigateToDashboard', component: 'bbva-feature-credit-card-payment-own-cards' }
    }
  ]);

  addCommonErrors(base.components)();

  return base;
};
