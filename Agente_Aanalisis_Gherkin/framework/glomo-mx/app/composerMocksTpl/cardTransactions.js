'use strict';

module.exports = appConfig => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { cardTransactionsV2 }},
    native,
    nativeIos
  } = appConfig;
  const analytics = require('./analytics/_cardsTransactions')({});

  const base = {
    currentPage: {
      url: '/card/:productId/transactions',
      params: []
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        iOSFixedHeader: nativeIos,
        headerHeight: 0
      }
    },
    components: [
      {
        type: 'DM',
        zone: 'app__main',
        render: 'litElement',
        familyPath: '@glomo-web-components/card-information-transactions-list-searching-enrichment-cards-mx',
        tag: 'card-information-transactions-list-searching-enrichment-cards-mx',
        properties: {
          iOSFixedHeader: nativeIos,
          country: 'mx',
          host,
          isCompleteView: true,
          native,
          pageSize: 10,
          requiredToken,
          isGetTransactionsService: true,
          cardTransactionsV2,
          filterTransfers: 'POINTS',
          cellsConnections: {
            params: {
              productId: 'productId'
            },
            in: {
              __bridge_page_cardTransactions: {
                bind: 'init'
              },
              product_detail_cards_mx_go_to_dashboard: {
                bind: 'reset'
              },
              product_detail_cards_mx_go_to_digital_butler: {
                bind: 'reset'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlagCollection'
              },
              channel_transactions_list_cards_mx_navigation_go_back: {
                bind: 'reset'
              },
              blue_pay_with_points_flag: {
                bind: 'isBlueTransactionsByPoints'
              },
              channel_transactions_list_cards_mx_go_to_detail: {
                bind: 'reset'
              },
              navigation_transactions_to_transaction_detail: {
                bind: 'reset'
              },
              card_Detail_persisted_data_additional: {
                bind: 'financialDataAdditionalPersist'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'isMaskedAmount'
              },
              global_set_app_settings: {
                bind: 'setAppSettings'
              }
            },
            out: {
              global_action_launcher_dialer: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-bbva-line-call'
              },
              channel_transactions_list_cards_mx_set_transaction_detail: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-set-transaction-detail'
              },
              channel_transactions_list_cards_mx_go_to_detail: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-go-to-detail',
                link: {
                  page: 'cardTransactionDetail',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId',
                    contractId: 'contractId',
                    transactionAmount: 'amountPurchaseMixed',
                    simpleCode: 'simpleCode',
                    pobPromotionFlag: 'pobPromotionFlag',
                    financingType: 'financingType',
                    rewardBenefits: 'rewardBenefits',
                    localId: 'localId'
                  }
                }
              },
              navigation_transactions_to_transaction_detail: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-set-transaction-detail',
                link: {
                  page: 'cardTransactionDetail',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId',
                    transactionAmount: 'amountPurchaseMixed',
                    continue: 'continue',
                    financingType: 'financingType',
                    rewardBenefits: 'rewardBenefits',
                    pobPromotionFlag: 'pobPromotionFlag',
                    transactionNumber: 'transactionNumber'
                  }
                }
              },
              channel_transactions_list_cards_mx_navigation_go_back: {
                bind: 'navigation-go-back',
                backStep: true
              },
              channel_transactions_list_cards_mx_see_transactions_list: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-see-transactions-list',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionListFootprint')
              },
              channel_transactions_list_cards_mx_complete_view_help_modal_open: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-help-modal-open',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionListFootprintInformation')
              },
              channel_transactions_list_cards_mx_get_transactions_dm_error: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-get-transactions-dm-error',
                analytics: analytics.getFootprintCardTransactionsByKey('transactionListFootprintnoErrorLoadingMovements')
              }
            }
          }
        }

      }
    ]
  };
  return base;
};
