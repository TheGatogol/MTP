'use strict';

module.exports = (CONFIG) => {
  const pages = require('./common/_pages')(CONFIG)('creditScore');
  const localStorageApp = require('./common/_local-storage');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { cardsV2, creditScore, accountsV1 } },
    native = false,
    nativeIos = false
  } = CONFIG;

  const adviceCreditScoreAnalytics = require('./analytics/_adviceCreditScore')(CONFIG);

  const base = {
    hash: 'score-credit',
    currentPage: {
      url: '/score-credit',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        className: nativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: nativeIos,
        drawerWidth: '100%',
        disableEdgeSwipe: true
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-controller-advice-credit-score-mx',
        tag: 'bbva-controller-advice-credit-score-mx',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              card_cut_off_date_channel_to_geturl: {
                bind: 'getUrl'
              },
              card_credit_card_payment_channel_to_geturl: {
                bind: 'getUrl'
              },
              global_storage_get_firstLoadTerms_success: {
                bind: 'getFirstLoadTerms'
              },
              global_storage_get_firstLoadTerms_error: {
                bind: 'getFirstLoadTermsError'
              }
            },
            out: {
              credit_score_to_card_credit_card_payment_channel: {
                bind: 'advice-credit-score-navigate-to-cardCreditCardPayment',
                link: {
                  page: 'cardCreditCardPayment',
                  params: {
                    productId: 'productId',
                    cleanUntil: 'creditScore'
                  }
                }
              },
              credit_score_to_card_cut_off_date_channel: {
                bind: 'advice-credit-score-navigate-to-cardCutOffDate',
                link: {
                  page: 'cardCutOffDate',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              flag_storage_get_firstLoadTerms_success: {
                bind: 'advice-credit-score-terms-response'
              },
              flag_storage_get_firstLoadTerms_error: {
                bind: 'advice-credit-score-terms-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/advice-credit-score-mx',
        tag: 'advice-credit-score-mx',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          iOSFixedHeader: nativeIos,
          cardsApiVersion: cardsV2,
          creditScoreApiVersion: creditScore,
          accountsApiVersion: accountsV1,
          cellsConnections: {
            in: {
              __bridge_page_creditScore: {
                bind: 'init'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              return_to_dashboard_channel: {
                bind: 'reset'
              },
              terms_previous_section_channel: {
                bind: 'reset'
              },
              return_to_dashboard_from_credit_score_modal_channel: {
                bind: 'reset'
              },
              return_to_dashboard_from_credit_score_header_modal_channel: {
                bind: 'reset'
              },
              global_dashboard_cards: {
                bind: 'dashboardCards'
              },
              flag_storage_get_firstLoadTerms_success: {
                bind: 'getFirstLoadTerms'
              },
              flag_storage_get_firstLoadTerms_error: {
                bind: 'getFirstLoadTermsError'
              }
            },
            out: {
              return_to_dashboard_from_credit_score_header_modal_channel: {
                bind: 'advice-credit-score-mx-generic-modal-close-modal',
                backStep: true
              },
              return_to_dashboard_from_credit_score_modal_channel: {
                bind: 'alreadyRequested-footer-button-click',
                backStep: true
              },
              return_to_dashboard_channel: {
                bind: 'app-go-back',
                backStep: true
              },
              terms_previous_section_channel: {
                bind: 'terms-previous-section',
                backStep: true
              },
              global_open_native_menu: {
                bind: 'app-open-menu',
                'forward-to-native': true
              },
              card_credit_card_payment_channel_to_geturl: {
                bind: 'navigate-to-credit-card-payment'
              },
              set_push_data_void: {
                bind: 'set-push-data-void'
              },
              global_send_card_detail_data: {
                bind: 'global-send-card-detail-data'
              },
              global_set_financial_overview_accounts: {
                bind: 'get-accounts-success'
              },
              card_cut_off_date_channel_to_geturl: {
                bind: 'call-change-date-event'
              },
              global_get_from_storage: {
                bind: 'global-get-from-storage'
              },
              global_set_in_storage: {
                bind: 'global-set-in-storage'
              },
              advice_credit_score_tracker_view: {
                bind: 'set-terms-conditions',
                analytics: adviceCreditScoreAnalytics.termsAndConditions
              },
              advice_credit_score_dashboard: {
                bind: 'set-info-dashboard',
                analytics: adviceCreditScoreAnalytics.dashboardAdvice
              },
              advice_credit_score_information_about_score: {
                bind: 'open-modal-from-bc-score-current',
                analytics: adviceCreditScoreAnalytics.informationAboutScore
              },
              advice_credit_score_relevant_history: {
                bind: 'open-history-modal',
                analytics: adviceCreditScoreAnalytics.relevantHistory
              },
              advice_credit_score_challenge_detail: {
                bind: 'set-info-change-detail',
                analytics: adviceCreditScoreAnalytics.challengeDetail
              },
              advice_credit_score_challenges_list: {
                bind: 'set-info-challenge-list',
                analytics: adviceCreditScoreAnalytics.challengesList
              },
              advice_credit_score_error_information_not_available: {
                bind: 'error-on-get-information-not-available',
                analytics: adviceCreditScoreAnalytics.errorInformationNotAvailable
              }
            }
          }
        }
      }
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'firstLoadTerms' ], CONFIG);
  return base;
};
