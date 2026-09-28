'use strict';
module.exports = CONFIG => {
  const { useNames, createPrefixFromPageName, getLanguage, getLocalCurrency } = require('./common/helpers/_utils');
  const pageName = 'suspectedTransactionDirectDebits';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const opertativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(opertativePrefix);
  const getGlobalName = nameGlobalName => `global_${getChannelName(nameGlobalName)}`.toLowerCase();
  const analytics = require('./analytics/_suspectedTransactionsDirectDebits')(CONFIG);
  const {
    globalServices: {
      host,
      requiredToken = 'tsec'
    },
    native = false,
    nativeIos = false
  } = CONFIG;

  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          suspected_transaction_direct_debit_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bbvaFeatureSuspectedTransaction = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-suspected-transactions-management-mx',
    familyPath: '@glomo-web-components/bbva-feature-suspected-transactions-management-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      nativeIOS: nativeIos,
      native,
      requiredOtpPayments: true,
      cellsConnections: {
        in: {
          navigation_from_deep_link_to_operations: {
            bind: 'suspectedTransactionDebitsPush'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'subscriptionNotificationCDM'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'closeModal'
          },
          [getChannelName('reset_receipt')]: {
            bind: 'shareReceipt'
          },
          suspected_transaction_direct_debit_init_page: {
            bind: 'completedComponent'
          }
        },
        out: {
          [getGlobalName('exit_page')]: {
            bind: 'suspected-transaction-direct-debits-exit-flow',
            link: {
              page: 'dashboard'
            }
          },
          [getChannelName('suspected_transaction_debit_result')]: {
            bind: 'suspected-transaction-direct-debits-receipt-share'
          },
          [getChannelName('suspected_transaction_debit_capture')]: {
            bind: 'suspected-transaction-direct-debits-receipt-share'
          },
          [getChannelName('hide_scroll_template')]: {
            bind: 'suspected-transaction-direct-debits-hide-scroll'
          },
          global_action_launcher_share_image: {
            bind: 'suspected-transaction-direct-debits-open-launcher'
          },
          [getGlobalName('suspected_transaction_debit_analytics_exit_page_view_domiciliado')]: {
            bind: 'suspected-transaction-direct-debits-domiciled-charge',
            analytics: analytics.viewAnalytic('confirma o rechazar', 'cargo domiciliado', 'salir', '', '')
          },
          [getGlobalName('suspected_transaction_debit_analytics_exit_page_view_recurrente')]: {
            bind: 'suspected-transaction-direct-debits-recurrent-charge',
            analytics: analytics.viewAnalytic('confirma o rechazar', 'cargo recurrente', 'salir', '', '')
          },
          [getGlobalName('suspected_transaction_debit_analytics_exit_internal_link_domiciliado')]: {
            bind: 'suspected-transaction-direct-debits-domiciled-charge-output',
            analytics: analytics.linkAnalytic('confirma o rechazar', 'cargo domiciliado', 'salir', 'salir')
          },
          [getGlobalName('suspected_transaction_debit_analytics_exit_internal_link_recurrente')]: {
            bind: 'suspected-transaction-direct-debits-recurrent-charge-output',
            analytics: analytics.linkAnalytic('confirma o rechazar', 'cargo recurrente', 'salir', 'salir')
          },
          [getGlobalName('suspected_transaction_debit_analytics_share_page_view_domiciliado')]: {
            bind: 'suspected-transaction-direct-debits-share-page-view-domiciled',
            analytics: analytics.viewAnalytic('confirma o rechazar', 'cargo domiciliado', 'solicitud respondida', 'compartir', '')
          },
          [getGlobalName('suspected_transaction_debit_analytics_error_page_view_domiciliado')]: {
            bind: 'suspected-transaction-direct-debits-error-domiciled',
            analytics: analytics.viewAnalytic('confirma o rechazar', 'cargo domiciliado', 'error operacion no realizada', '', 'error operacion no realizada')
          }
        }
      }
    }
  };

  const receiptManager = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      country: 'mx',
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('suspected_transaction_debit_capture')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('suspected_transaction_debit_result')]: {
            bind: 'result'
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
  };

  const base = {
    hash: 'suspectedTransactionDirectDebits',
    currentPage: {
      url: '/suspected-transaction-direct-debits'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        iOSFixedHeader: nativeIos,
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        drawerWidth: '100%',
        cellsConnections: {
          in: {
            [getChannelName('hide_scroll_template')]: {
              bind: 'addComponentClass'
            }
          }
        }
      }
    },
    components: [
      handleLifeCycle,
      bbvaFeatureSuspectedTransaction,
      receiptManager
    ]
  };

  const signWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signWidgetConnector('bbva-feature-suspected-transactions-management-mx');
  return base;
};
