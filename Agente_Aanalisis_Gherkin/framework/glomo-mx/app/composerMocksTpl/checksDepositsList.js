/* eslint-disable no-dupe-keys */
'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('checksDepositsList');
  // eslint-disable-next-line new-cap
  const SPINNERMAIN = utils.SPINNERMAIN(CONFIG);

  SPINNERMAIN.properties.className = 'cells-spinner-veil-fixed';
  SPINNERMAIN.properties.messages = [ 'glomo-checks-deposits-list-spinner-message' ];
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const ANALYTICS_CHECKS_DEPOSIT = require('./analytics/_checksDeposit')('checksDeposits');

  const LOCAL_CURRENCY = utils.getLocalCurrency();

  const base = {
    hash: 'checks-deposits-list',
    currentPage: {
      url: '/checks-deposits/list',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding dark-blue-bg' : '',
        extraHeaderClass: 'dark-blue-bg',
        hasFooter: false,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        delayScroll: 0,
        fixOffsetScroll: 0,
        handleStoppedScroll: true,
        preventScrollWithOverlay: true,
        cellsConnections: {
          out: {
            checks_deposits_list_scroll_completed: {
              bind: 'set-scroll-bottom-event'
            }
          }
        }
      }
    },
    components: [
      SPINNERMAIN,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'filter-tags',
        properties: {
          showBySort: true,
          cellsConnections: {
            in: {
              checks_deposits_list_update_filter_tags: {
                bind: 'selectedFilters'
              },
              checks_deposits_list_reset_page: {
                bind: 'reset'
              },
              checks_deposits_list_clean_filters: {
                bind: 'reset'
              },
              checks_deposits_update_tags: {
                bind: 'hideFilterTags'
              },
              checks_deposits_hide_filter_tags: {
                bind: 'hideFilterTags'
              },
              checks_deposits_update_sort: {
                bind: 'showBySort'
              }
            },
            out: {
              checks_deposits_list_sort_by_date: {
                bind: 'sort-by-date'
              },
              global_checks_deposits_list_searcher_selected_filters_updated: {
                bind: 'user-selected-filters'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksDepositsList',
          cache: [
            'checksDepositsListSearcher'
          ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksDepositsList: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              checks_deposits_list_reset_page: {
                bind: 'reset'
              },
              checks_deposits_list_init_page: {
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
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-checks-deposits-list-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_checks_deposits_list_to_page: {
                bind: 'click-left-button',
                backStep: true
              },
              checks_deposits_list_reset_page: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-text-description',
        type: 'UI',
        properties: {
          id: 'mainDescription',
          cellsConnections: {
            in: {
              checks_deposits_top_description: {
                bind: 'mainDescription'
              },
              checks_deposits_list_hide_view_all: {
                bind: 'hidden'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-transactions-list',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          imageEmptyList: './images/empty_state_day.svg',
          showFulfillmentStatus: true,
          hasFooterButton: false,
          skeletonItems: 4,
          pagination: 5,
          stickyGroup: true,
          transactionGroupDateFormat: utils.getShortFormatDate(),
          transactionCurrentYearDateFormat: utils.getTransactionCurrentYearDateFormat(),
          spinnerType: 'spinner',
          className: 'sticky-with-action empty-message-ml',
          cellsConnections: {
            in: {
              checks_deposits_list_reset_page: {
                bind: 'reset'
              },
              checks_deposits_list_transactions: {
                bind: 'transactions'
              },
              checks_deposits_list_transactions_render: {
                bind: 'forceTransactionsRender'
              },
              checks_deposits_list_limit: {
                bind: 'limit'
              },
              checks_deposits_list_reverse_order: {
                bind: 'reverseOrder'
              },
              checks_deposits_list_hide_view_all: {
                bind: 'disableViewAll'
              },
              checks_deposits_list_message_empty: {
                bind: 'messageEmptyList'
              },
              checks_deposits_list_button: {
                bind: 'floatedButtonIcon'
              },
              checks_deposits_list_button_event: {
                bind: 'floatedButtonEvent'
              },
              checks_deposits_update_title: {
                bind: 'title'
              },
              checks_deposits_update_list_spinner: {
                bind: 'spinner'
              },
              checks_deposits_status_loading_get_checks: {
                bind: 'spinner'
              }
            },
            out: {
              checks_deposits_list_full_list: {
                bind: 'view-all-transactions'
              },
              checks_deposits_list_add_check_selected: {
                bind: 'go-to-checks-deposits-add-check'
              },
              navigate_to_check_deposits_searcher: {
                bind: 'go-to-checks-deposits-list-searcher',
                link: {
                  page: 'checksDepositsListSearcher'
                }
              },
              checks_deposits_list_check_selected: {
                bind: 'transaction-detail'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-text-description',
        type: 'UI',
        properties: {
          id: 'bottomDescription',
          className: 'text-centered',
          cellsConnections: {
            in: {
              checks_deposits_bottom_description: {
                bind: 'secondaryDescription'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-check-list-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              navigation_checks_deposits_list_to_page: {
                bind: 'reset'
              },
              checks_deposits_list_reset_page: {
                bind: 'reset'
              },
              checks_deposits_list_init_page: {
                bind: 'getChecksList'
              },
              checks_deposits_list_full_list: {
                bind: 'getChecksFullList'
              },
              global_checks_deposits_list_searcher_selected_filters_updated: {
                bind: 'onChangeFilterTags'
              },
              account_get_operations_product: {
                bind: 'setAccountInfo'
              },
              navigation_product_detail_to_checks_section: {
                bind: 'setAccountInfo'
              },
              global_checks_deposits_list_selected_filter_data: {
                bind: 'filterCheckList'
              },
              checks_deposits_list_sort_by_date: {
                bind: 'toggleReverseOrder'
              },
              checks_deposits_list_check_selected: {
                bind: 'goToCheckDetail'
              },
              checks_deposits_list_add_check_selected: {
                bind: 'goToChecksDepositsAdd'
              },
              checks_deposits_list_scroll_completed: {
                bind: 'moreChecksTransactions'
              },
              checks_deposits_set_checks_transactions_succes: {
                bind: 'onGetChecksResponse'
              },
              checks_deposits_set_checks_transactions_error: {
                bind: 'onGetChecksError'
              },
              checks_deposits_empty_filter_checks: {
                bind: 'onGetChecksResponse'
              }
            },
            out: {
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              checks_deposits_list_transactions: {
                bind: 'update-list-check'
              },
              checks_deposits_list_transactions_render: {
                bind: 'update-list-check-force-render'
              },
              checks_deposits_list_reverse_order: {
                bind: 'reverse-order-changed'
              },
              checks_deposits_list_limit: {
                bind: 'update-list-limit'
              },
              checks_deposits_list_hide_view_all: {
                bind: 'update-view-all'
              },
              checks_deposits_list_message_empty: {
                bind: 'update-empty-message'
              },
              checks_deposits_top_description: {
                bind: 'update-top-description'
              },
              checks_deposits_bottom_description: {
                bind: 'update-bottom-description'
              },
              checks_deposits_list_button: {
                bind: 'update-button-icon'
              },
              checks_deposits_list_button_event: {
                bind: 'update-button-event'
              },
              checks_deposits_list_update_filter_tags: {
                bind: 'update-filter-tags'
              },
              checks_deposits_update_title: {
                bind: 'update-title'
              },
              checks_deposits_update_tags: {
                bind: 'update-tags'
              },
              checks_deposits_update_sort: {
                bind: 'update-show-sort-by'
              },
              checks_deposits_update_text_description: {
                bind: 'update-text-description'
              },
              checks_deposits_hide_filter_tags: {
                bind: 'hide-filter-tags'
              },
              checks_deposits_checks_not_released: {
                bind: 'checks-not-released'
              },
              global_retry_error: {
                bind: 'retry-error-list-checks'
              },
              checks_deposits_go_back: {
                bind: 'checks-deposits-list-go-back',
                backStep: true
              },
              checks_deposits_list_reset_page: {
                bind: 'checks-deposits-list-go-back'
              },
              navigate_to_checks_deposits_detail: {
                bind: 'glomo-check-list-navigate-to-detail',
                link: {
                  page: 'checksDepositsDetail',
                  params: {
                    checkId: 'checkId'
                  }
                }
              },
              checks_deposits_set_selected_account: {
                bind: 'glomo-check-list-navigate-to-checks-deposits-add',
                link: {
                  page: 'checksDeposits'
                }
              },
              checks_deposits_analytics_initial: {
                bind: 'analytics'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-modal-attempts-account'
              },
              analytics_set_trace_error_code: {
                bind: 'set-trace-error-code'
              },
              checks_list_leave_page: {
                bind: 'glomo-leave-check-list',
                backStep: true
              },
              global_retry_error: {
                bind: 'retry-error'
              },
              checks_deposits_update_list_spinner: {
                bind: 'loading-changed'
              },
              checks_deposits_get_checks_transactions: {
                bind: 'get-checks-transactions'
              },
              checks_deposits_get_more_transactions_checks: {
                bind: 'get-more-checks-transactions-config'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-accounts-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: CONFIG.native || false,
          accountsApiVersion: CONFIG.globalServices.versions.accountsV1,
          cellsConnections: {
            in: {
              checks_deposits_get_checks_transactions: {
                bind: 'getAccountsChecks'
              },
              checks_deposits_get_more_transactions_checks: {
                bind: 'getMoreTransactionsChecks'
              }
            },
            out: {
              checks_deposits_set_checks_transactions_succes: {
                bind: 'success-get-account-checks'
              },
              checks_deposits_set_checks_transactions_error: {
                bind: 'error-on-get-account-checks'
              },
              checks_deposits_status_loading_get_checks: {
                bind: 'loading-changed'
              },
              checks_deposits_empty_filter_checks: {
                bind: 'empty-checks-page-service'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-checks-deposits-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-checks-deposits-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          config: {
            steps: {
              1: 'app-page-visit',
              2: 'app-step-2',
              3: 'app-step-3'
            }
          },
          cellsConnections: {
            in: {
              checks_deposits_set_selected_product: {
                bind: 'account'
              },
              checks_deposits_list_add_check_selected: {
                bind: 'sendAnalyticOnClickStart'
              },
              analytics_set_trace_error_code: {
                bind: 'sendAnalyticLimitOperationsExceeded'
              },
              checks_deposits_set_selected_account: {
                bind: 'resetAnalyticData'
              }
            },
            out: {
              checks_deposits_analytics_on_click_start: {
                bind: 'analytics-on-click-start',
                analytics: ANALYTICS_CHECKS_DEPOSIT.appOnclickStart('lista cheques'),
                featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
              },
              checks_deposits_analytics_limit_operations_exceeded: {
                bind: 'analytics-limit-operations-exceeded',
                analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error solicitudes excedidas', 'error solicitudes excedidas')
              }
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([
    {
      id: 'checks-deposits-list-get-checks-error',
      acceptRetry: { bind: 'requestGetChecks', component: 'glomo-check-list-dm' },
      cancelRetry: { bind: 'goBackToChecksDeposits', component: 'glomo-check-list-dm' },
      finishRetry: { bind: 'goBackToChecksDeposits', component: 'glomo-check-list-dm' },
      successEvent: { bind: 'check-list-changed', component: 'glomo-check-list-dm' }
    },
    {
      id: 'checks-deposits-list-get-checks-filter-error',
      acceptRetry: { bind: 'requestGetChecks', component: 'glomo-check-list-dm' },
      successEvent: { bind: 'check-list-changed', component: 'glomo-check-list-dm' }
    },
    {
      id: 'error-on-get-attempts-validation-account',
      acceptRetry: { bind: 'goToCheckDepositsList', component: 'glomo-check-list-dm'},
      acceptCallForHelp: { bind: 'leavePage', component: 'glomo-check-list-dm'}
    }
  ]);

  addCommonErrors(base.components)();

  return base;
};
