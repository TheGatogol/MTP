'use strict';
const { _getAdvancedFootprints, _getAdvancedFootprintWithLevel2, _getInternalLink } = require('./analytics/_suspectedTransactionsPage')();
module.exports = CONFIG => {
  const pageName = 'suspectedTransactionsPage';
  const pages = require('./common/_pages')(CONFIG)('suspectedTransactionsPage');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { fraudMonitoring, cards, cardsV1 } },
    native = false,
    isNativeIos = false
  } = CONFIG;

  const base = {
    hash: 'suspectedTransactionsPage',
    currentPage: {
      url: '/suspected-transactions'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: isNativeIos ? 'padding-top' : '',
        headerHeight: '',
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
    ]
  };

  const bbvaFeatureSuspectedTransaction = {
    zone: 'app__main',
    type: 'DM',
    tag: 'user-notifications-suspected-transactions-management-mx',
    familyPath: '@glomo-web-components/user-notifications-suspected-transactions-management-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      pageName,
      nativeIOS: isNativeIos,
      native,
      cardsApiVersion: cards,
      phoneNumberBBVALine: CONFIG.phoneNumberBbvaLine,
      fraudMonitoringVersion: fraudMonitoring,
      fraudApiVersion: fraudMonitoring,
      cardsApiVersionV1: cardsV1,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'initFeatureFlagsSuspectedTransactions'
          },
          global_get_card_orange_data_success: {
            bind: 'card-detail-api-dm-fetch'
          },
          global_refresh_dashboard_ch: {
            bind: 'patch-card-activation-success'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initHandlerSuspectedTransaction'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'initHandlerSuspectedTransaction'
          },
          global_financial_overview_details: {
            bind: 'globalCacheStorage'
          },
          navigate_to_phishing_page: {
            bind: 'initHandlerSuspectedTransaction'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          }
        },
        out: {
          suspected_transaction_reset_operatives: {
            bind: 'reset-operatives'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          dashboard_refresh_financial_overview: {
            bind: 'suspected-transaction-exit-refresh-dashboard'
          },
          navigation_from_suspected_transaction_page_to_block_card: {
            bind: 'navigation-to-block-card',
            skipNavigation: true,
            link: {
              page: 'blockAndReplacement',
              skipHistory: true,
              params: {
                cardId: 'cardId',
                operativeType: 'operativeType',
                cardTitle: 'cardTitle',
                cardType: 'cardType',
                cardName: 'cardName',
                cardNumber: 'cardNumber'
              }
            }
          },
          analytics_suspected_transaction_fire_persisted_data: {
            bind: 'analytics-fire-fingerprint-suspicious-purchase'
          },
          analytics_suspected_transaction_fire_page_view: {
            bind: 'analytics-suspected-transaction-fire-page-view-id'
          },
          analytics_suspected_transaction_fire_internal_link: {
            bind: 'analytics-suspected-transaction-fire-internal-link'
          },
          ['exit_page']: {
            bind: 'suspected-transactions-management-exit-flow',
            link: {
              page: 'dashboard'
            }
          },
          navigate_to_notifications_center: {
            bind: 'navigation-go-back',
            backStep: true
          }
        }
      }
    }
  };

  const analyticManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-user-notifications',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-notifications',
    render: 'litElement',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          analytics_suspected_transaction_fire_persisted_data: {
            bind: 'firePersistedData'
          },
          analytics_suspected_transaction_fire_page_view: {
            bind: 'firePageViewLevel2'
          },
          analytics_suspected_transaction_fire_internal_link: {
            bind: 'firePageActivityLink'
          }
        },
        out: {
          suspected_transactions_suspicious_purchase: {
            bind: 'analytics-persisted-data',
            analytics: _getAdvancedFootprints({ id: 'suspiciousPurchase' })
          },
          suspected_transactions_suspicious_purchase_confirmed_movement_modal: {
            bind: 'analytics-page-view-modal-confirm',
            analytics: _getAdvancedFootprintWithLevel2({ text: 'confirmedMovement' })
          },
          suspected_transactions_suspicious_purchase_rejected_movement_modal: {
            bind: 'analytics-page-view-modal-reject',
            analytics: _getAdvancedFootprintWithLevel2({ text: 'rejectedMovement' })
          },
          suspected_transactions_suspicious_purchase_confirm_movement_link: {
            bind: 'analytics-page-activity-link-confirm',
            analytics: _getInternalLink({ option: 'confirm' })
          },
          suspected_transactions_suspicious_purchase_reject_movement_link: {
            bind: 'analytics-page-activity-link-reject',
            analytics: _getInternalLink({ option: 'reject' })
          }
        }
      }
    }
  };

  base.components.push(
    analyticManager,
    bbvaFeatureSuspectedTransaction
  );
  return base;
};