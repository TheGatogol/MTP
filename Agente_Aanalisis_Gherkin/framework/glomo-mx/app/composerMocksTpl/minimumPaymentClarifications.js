module.exports = config => {
  const { getLocalCurrency, getLanguage } = require('./common/helpers/_utils');
  const pageName = 'minimumPaymentClarifications';
  const { headerHeightMinimum } = require('./common/helpers/_utils');
  const analyticsMinimumPaymentClarifications = require('./analytics/_minimumPaymentClarifications')(config);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const {
    globalServices: {
      requiredToken = 'tsec',
      host,
      versions: {
        cardsV2,
        cardsV3
      }
    },
    nativeIos = false,
    native = false,
    nativeShell = false
  } = config;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const base = {
    hash: pageName,
    currentPage: {
      url: '/minimum-payment-clarifications'
    },
    pageName,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        headerHeight: headerHeightMinimum,
        headerFixed: true,
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: !!nativeShell,
        avoidToggleMenu: !!nativeShell,
        native,
        className: nativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            },
            global_hanlder_native_back_button: {
              bind: 'handleNativeBackButton'
            },
            minimum_payment_clarifications_hide_scroll_template: {
              bind: 'addComponentClass'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica'
      })
    },
    components: [
      {
        zone: 'app__main',
        tag: 'card-information-minimum-payment-clarifications',
        familyPath: '@bbva-web-components-widgets/card-information-minimum-payment-clarifications',
        familyPathSpherica: '@bbva-web-components-widgets/card-information-minimum-payment-clarifications',
        render: 'litElement',
        type: 'DM',
        properties: {
          ambient: 'primary',
          language: getLanguage(),
          country: 'mx',
          currency: getLocalCurrency(),
          iosFixedHeader: nativeIos,
          host,
          native,
          requiredToken,
          requestServices: true,
          cardsApiVersion: cardsV2,
          freePaymentsApiVersion: cardsV3,
          cellsConnections: {
            in: {
              navigation_minimum_payment_clarifications: {
                bind: 'init'
              },
              dashboard_accounts_from_financial: {
                bind: 'getAccounts'
              },
              free_payments_detail: {
                bind: 'cardsFinancialStatementsInterestFreePayments'
              },
              minimum_payment_clarifications_header_main_close_click: {
                bind: 'reset'
              },
              connection_status_minimum_payment_clarifications_offline: {
                bind: 'onInternetDisconnection'
              },
              minimum_payment_clarifications_footer_button_click: {
                bind: 'reset'
              },
              minimum_payment_clarifications_header_main_back_click: {
                bind: 'reset'
              }
            },
            out: {
              minimum_payment_clarifications_footer_button_click: {
                bind: 'card-information-minimum-payment-clarifications-error-modal-exit-click',
                link: {
                  page: 'cardDetail',
                  params: {
                    productId: 'productId',
                    cleanUntil: 'minimumPaymentClarifications'
                  }
                }
              },
              global_card_detail_data_refresh: {
                bind: 'card-information-minimum-payment-clarifications-detail-data-refresh'
              },
              global_card_detail_card_detail_data_reload: {
                bind: 'card-information-minimum-payment-clarifications-detail-data-refresh-reload'
              },
              minimum_payment_clarifications_header_main_back_click: {
                bind: 'card-information-minimum-payment-clarifications-navigation-ppngi-back',
                link: {
                  page: 'cardDetail',
                  cleanUntil: 'minimumPaymentClarifications',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              global_open_native_menu: {
                bind: 'card-information-minimum-payment-clarifications-navigation-ppngi-menu',
                'forward-to-native': true
              },
              minimum_payment_clarifications_movements_details: {
                bind: 'card-information-minimum-payment-clarifications-change-api-versions'
              },
              minimum_navigation_transactions_to_transaction_detail: {
                bind: 'card-information-minimum-payment-clarifications-card-transaction-detail',
                link: {
                  page: 'cardTransactionDetail',
                  params: {
                    transactionId: 'transactionId',
                    simpleCode: 'simpleCode'
                  }
                }
              },
              navigation_return_modal: {
                bind: 'card-information-minimum-payment-clarifications-modal-cancel',
                backStep: true
              },
              navigation_card_detail_return: {
                bind: 'card-information-minimum-payment-clarifications-navigation-ppngi-error-return',
                backStep: true
              },
              minimum_payment_clarifications_hide_scroll_template: {
                bind: 'cardsFinancialStatementsInterestFreePayments'
              },
              minimum_payment_clarifications_analytics_list_loader_page_view_method: {
                bind: 'card-information-minimum-payment-clarifications-list-data-loader'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-analyticmanager-card-information-minimum-payment-clarifications',
        familyPath: '@glomo-web-components/bbva-analyticmanager-card-transaction-servicing',
        render: 'litElement',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              minimum_payment_clarifications_analytics_list_loader_page_view_method: {
                bind: 'paymentClarificationDahsboard'
              }
            },
            out: {
              minimum_payment_clarifications_analytics_list_loader_page_view: {
                bind: 'analytics-clarifications-payments-dashboard',
                analytics: analyticsMinimumPaymentClarifications.pageView
              }
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
