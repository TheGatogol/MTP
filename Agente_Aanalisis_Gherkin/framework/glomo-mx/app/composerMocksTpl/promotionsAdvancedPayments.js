module.exports = config => {
  const { getLanguage, getLocalCurrency, useNames, createPrefixFromPageName } = require('./common/helpers/_utils');
  const pageName = require('./common/_pages')(config)('promotionsAdvancedPayments');
  const {
    globalServices: {
      requiredToken = 'tsec',
      host,
      versions: {
        cardsV2,
        cardPromotionsV1,
        accounts,
        transfer
      }
    },
    native = false
  } = config;
  const operativePrefix = createPrefixFromPageName('promotionsAdvancedPayments');
  const [ getChannelName ] = useNames(operativePrefix);
  const analyticsPromotionsAdvancedPayments = require('./analytics/_promotionsAdvancedPayments')(config);

  const base = {
    hash: pageName,
    currentPage: {
      url: '/promotions-advanced-payments'
    },
    pageName,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'horizontal',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        className: 'dark-blue-bg',
        fixOffsetScroll: 0
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_promotionsAdvancedPayments: {
                bind: 'init'
              }
            },
            out: {
              [pageName + '_reset_page']: {
                bind: 'reset'
              },
              advanced_promotions_payments_detail_init_page: {
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
        tag: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment',
        familyPath: '@bbva-web-components-widgets/card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment',
        render: 'litElement',
        type: 'UI',
        properties: {
          language: getLanguage(),
          country: 'mx',
          currency: getLocalCurrency(),
          host,
          native,
          cardStatus: 'ACTIVE',
          maxLengthAmount: 10,
          paginationKey: 1,
          pageSize: 5,
          pageSizeAcumulated: 5,
          cardsApiVersion: cardsV2,
          cardPromotionsApiVersion: cardPromotionsV1,
          accountsApiVersion: accounts,
          transfersApiVersion: transfer,
          requiredToken,
          cellsConnections: {
            in: {
              advanced_promotions_payments_detail_init_page: {
                bind: 'init'
              },
              global_set_app_settings: {
                bind: 'ivrWelcome'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'navigateBack'
              },
              sign_modal_cancelled: {
                bind: 'operativeCloseModal'
              },
              sing_modal_reseated: {
                bind: 'operativeCloseModal'
              },
              navigation_payment_clarifications: {
                bind: 'operativeAnalitycs'
              }
            },
            out: {
              close_page_channel: {
                bind: 'close-header-event',
                link: {
                  page: 'cardDetail',
                  cleanUntil: 'promotionsAdvancedPayments',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              additional_card_detail_limits_set_product_id: {
                bind: 'set-additional-product-id'
              },
              additional_card_detail_get_card_detail_data: {
                bind: 'get-card-detail-data'
              },
              global_card_detail_data_refresh: {
                bind: 'detail-data-refresh'
              },
              global_action_launcher_dialer: {
                bind: 'open-call-action-plug-in'
              },
              global_card_detail_card_detail_data_reload: {
                bind: 'detail-data-refresh-reload'
              },
              [getChannelName('advance_promotion_result')]: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-share-receipt-click'
              },
              [getChannelName('advance_promotion_capture')]: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-share-receipt-click'
              },
              card_analitycs_manager_send_data: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-card-response-send-data'
              },
              promotion_analitycs_selected_manager_send_data: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-promotion-response-send-data'
              },
              promotion_analitycs_typology_selected_manager_send_data: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-promotion-typology-send-data'
              },
              account_analitycs_indicator_manager_send_data: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-origin-account-send-data'
              },
              resume_analitycs_manager_send_data: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-final-step-resume-send-data'
              },
              success_analityc_manager_send_data: {
                bind: 'card-transaction-servicing-credit-card-payment-own-cards-cc-promotions-advanced-payment-open-success-send-data'
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-analyticmanager-promotions-advanced-payment',
        familyPath: '@glomo-web-components/bbva-analyticmanager-card-transaction-servicing',
        render: 'litElement',
        type: 'UI',
        properties: {
          cellsConnections: {
            in: {
              card_analitycs_manager_send_data: {
                bind: 'fireEventAppPageVisit'
              },
              promotion_analitycs_selected_manager_send_data: {
                bind: 'fireEventAppStarted'
              },
              promotion_analitycs_typology_selected_manager_send_data: {
                bind: 'fireEventAppStepAmount'
              },
              account_analitycs_indicator_manager_send_data: {
                bind: 'fireEventAppStepAccount'
              },
              resume_analitycs_manager_send_data: {
                bind: 'fireEventAppStepConfirmation'
              },
              success_analityc_manager_send_data: {
                bind: 'fireProcessAppCompleted'
              }
            },
            out: {
              [getChannelName('advance_promotion_page_visit')]: {
                bind: 'analytics-app-page-visit',
                analytics: analyticsPromotionsAdvancedPayments.appPageVisit
              },
              [getChannelName('advance_promotion_app_started')]: {
                bind: 'analytics-app-started',
                analytics: analyticsPromotionsAdvancedPayments.appStarted
              },
              [getChannelName('advance_promotion_app_step_amount')]: {
                bind: 'analytics-app-step-amount-section',
                analytics: analyticsPromotionsAdvancedPayments.appStep(2)
              },
              [getChannelName('advance_promotion_app_spte_account')]: {
                bind: 'analytics-app-step-account-section',
                analytics: analyticsPromotionsAdvancedPayments.appStep(3)
              },
              [getChannelName('advance_promotion_app_step_confirmation')]: {
                bind: 'analytics-app-step-confirmation-section',
                analytics: analyticsPromotionsAdvancedPayments.appStep(4)
              },
              [getChannelName('advance_promotion_app_completed')]: {
                bind: 'analytics-app-completed',
                analytics: analyticsPromotionsAdvancedPayments.appCompleted
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        properties: {
          language: getLanguage(),
          country: 'mx',
          localCurrency: getLocalCurrency(),
          infoImage: './images/darkInfo.svg',
          sharedReceiptStyles: {
            receiptTitle: {
              'font-weight': 'var(--cells-fontDefaultBold, 700)'
            },
            fieldValue: {
              'font-weight': 'var(--cells-fontDefaultBold, 500)'
            }
          },
          cellsConnections: {
            in: {
              [getChannelName('advance_promotion_result')]: {
                bind: 'result'
              },
              [getChannelName('advance_promotion_capture')]: {
                bind: 'captureReceipt'
              },
              [getChannelName('reset_receipt')]: {
                bind: 'reset'
              }
            },
            out: {
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              },
              [getChannelName('reset_receipt')]: {
                bind: 'receipt-captured'
              },
              global_alert_manager_open_with_settings: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
