'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-transactions')('account')(CONFIG);
  const analyticsTransactions = require('./analytics/_accountTransactions')({});
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { accountsV2 }},
    native = false,
    nativeIos = false
  } = CONFIG;

  const { bbvaAuth } = require('./common/_cross-components');
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

  const bbvaFeatureTransactionsList = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-transactions-list-accounts-mx',
    familyPath: '@glomo-web-components/bbva-feature-transactions-list-accounts-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      capitalizeAndroidPlatform: true,
      apiVersionAccountsData: accountsV2,
      pageSize: 10,
      nativeIos,
      continue: 'account',
      currentPage: 'transactions',
      productType: 'account',
      isPreview: false,
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          navigation_accounts_channel: {
            bind: 'data'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          transactions_list_navigate_to_dashboard: {
            bind: 'reset'
          },
          __bridge_page_accountTransactions: {
            bind: 'getTransactionsModal'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          navigation_from_futura_dashboard: {
            bind: 'navigationFuturaFillProperties'
          },
          dashboard_list_virtual_contracts: {
            bind: 'digitalCards'
          },
          global_dashboard_cards_for_deeplink: {
            bind: 'dashboardCards'
          },
          navigation_product_detail_to_transaction_detail: {
            bind: 'setIsTransactionDetail'
          },
          navigation_transactions_to_transaction_detail: {
            bind: 'setIsTransactionDetail'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'maskedAmount'
          }
        },
        out: {
          global_logout_sesion_expiration: {
            bind: 'bbva-feature-transactions-list-accounts-mx-close-session'
          },
          transactions_list_navigate_to_dashboard: {
            bind: 'bbva-feature-transactions-list-accounts-mx-exit-all-movements',
            backStep: true
          },
          navigation_product_detail_to_transaction_detail: {
            bind: 'bbva-feature-transactions-list-accounts-mx-detail-transaction-tap',
            link: {
              page: 'accountTransactionDetail',
              params: {
                productId: 'productId',
                transactionId: 'transactionId',
                continue: 'continue'
              }
            }
          },
          navigation_transactions_to_transaction_detail: {
            bind: 'bbva-feature-transactions-list-accounts-mx-transaction-detail-tap-cards',
            link: {
              page: 'cardTransactionDetail',
              params: {
                productId: 'productId',
                transactionId: 'transactionId',
                rewardBenefits: false,
                pobPromotionFlag: false
              }
            }
          },
          global_account_on_transaction_tap_validation: {
            bind: 'bbva-feature-transactions-list-accounts-mx-detail-transaction-tap'
          },
          global_account_set_account_for_operations: {
            bind: 'bbva-feature-transactions-list-accounts-mx-navigation-futura-fill-properties'
          },
          global_account_set_transactions: {
            bind: 'set-transactions',
            analytics: analyticsTransactions.transactionsListFootprint
          },
          global_account_set_transactions_list_empty: {
            bind: 'empty-page-reached',
            analytics: analyticsTransactions.transactionsListEmptyFootprint
          },
          global_account_set_account_transactions: {
            bind: 'set-account-transactions',
            analytics: analyticsTransactions.transactionsListFootprint
          },
          global_account_set_transactions_error: {
            bind: 'error-on-get-transactions',
            analytics: analyticsTransactions.errorTransactionsListLinkAction
          }
        }
      }
    }
  };

  base.components.push(bbvaAuth('mx', CONFIG));
  base.components.push(bbvaFeatureTransactionsList);

  return base;
};
