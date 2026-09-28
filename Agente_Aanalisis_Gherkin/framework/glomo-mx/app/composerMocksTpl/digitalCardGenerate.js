'use strict';

module.exports = config => {
  const { headerHeightMinimum } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica.js')(config, 'digitalCardGenerate');
  const pages = require('./common/_pages')(config)('digitalCardGenerate');
  const analytics = require('./analytics/_cardGenerate')(config);
  const analyticsCardlessWithdrawal = require('./analytics/_cardlessWithdrawal')(config);

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        cards
      } },
    native = false,
    nativeIos = false
  } = config;

  const base = {
    hash: 'digital_card_generate',
    currentPage: {
      url: '/card-detail/:productId/digital-generate'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        relativeMain: true,
        disableEdgeSwipe: true,
        headerHeight: headerHeightMinimum
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica'
      })
    },
    components: [
      {
        zone: 'app__main',
        tag: 'bbva-feature-digital-card-activation-mx',
        familyPath: '@glomo-web-components/bbva-feature-digital-card-activation-mx',
        type: 'UI',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          cardsApiVersion: cards,
          iOSFixedHeader: nativeIos,
          cellsConnections: {
            in: {
              global_financial_overview_details: {
                bind: 'financialOverview'
              },
              global_set_app_settings: {
                bind: 'getAppSettings'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              global_account_navigate_to_cardless_withdrawal: {
                bind: 'fromAccounts'
              },
              navigation_product_detail_to_cardless_withdrawal: {
                bind: 'fromAccounts'
              },
              global_card_detail_data_success_channel: {
                bind: 'cardData'
              },
              global_navigate_digital_card_generate: {
                bind: 'init'
              },
              navigation_checklist_actions_to_challenge_with_params: {
                bind: 'init'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              }
            },
            out: {
              digital_card_generate_manage_exit: {
                bind: 'bbva-feature-digital-card-activation-mx-digital-card-activation-exit',
                backStep: true
              },
              financial_overview_refresh: {
                bind: 'bbva-feature-digital-card-activation-mx-financial-overview-refresh'
              },
              global_digital_card_generate_success: {
                bind: 'bbva-feature-digital-card-activation-mx-financial-overview-refresh'
              },
              digital_card_generate_manage_dashboard_exit: {
                bind: 'bbva-feature-digital-card-activation-mx-dashboard-navigate',
                backStep: true,
                link: {
                  page: 'dashboard',
                  skipHistory: true
                }
              },
              global_action_launcher_dialer: {
                bind: 'bbva-feature-digital-card-activation-mx-modal-line-call-open'
              },
              digital_card_generate_manage_accounts_exit: {
                bind: 'bbva-feature-digital-card-activation-mx-account-navigate',
                backStep: true,
                link: {
                  page: 'account',
                  skipHistory: true,
                  params: {
                    productId: 'productId'
                  }
                }
              },
              digital_card_generate_card_generate_navigate: {
                bind: 'bbva-feature-digital-card-activation-mx-card-generate-navigate',
                link: {
                  page: 'cardGenerateVirtual',
                  skipHistory: true
                }
              },
              digital_card_generate_analytics_page_visit: {
                bind: 'bbva-feature-digital-card-activation-mx-analytics-page-visit',
                analytics: analytics.cardGenerate
              },
              digital_card_generate_analytics_success_card_generate: {
                bind: 'bbva-feature-digital-card-activation-mx-analytics-success-card-generate',
                analytics: analytics.cardGenerateSuccess
              },
              digital_card_generate_analytics_error_card_generate: {
                bind: 'bbva-feature-digital-card-activation-mx-analytics-error-card-generate',
                analytics: analytics.cardGenerateError
              },
              digital_card_generate_analytics_modal_cardless_withdrawal: {
                bind: 'bbva-feature-digital-card-activation-mx-analytics-modal-cardless-withdrawal-show',
                analytics: analyticsCardlessWithdrawal.pageViewDigitalCardActivation
              }
            },
            params: {
              cardId: 'productId'
            }
          }
        }
      }
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('bbva-feature-digital-card-activation-mx');
  return sphericaPageUtils.spherize(base);
};