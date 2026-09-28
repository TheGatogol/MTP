/* eslint-disable new-cap, no-dupe-keys */
'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('checksManagementList');
  const SPINNERMAIN = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const ANALYTICS_CHECKS_MANAGEMENT_LIST = require('./analytics/_checksManagementList')('checksManagementList');

  SPINNERMAIN.properties.className = 'cells-spinner-veil-fixed';
  SPINNERMAIN.properties.messages = [ 'glomo-checks-management-list-spinner-message' ];

  const base = {
    hash: 'checks-management-list',
    currentPage: {
      url: '/checks-management/list',
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
        headerFixed: true
      }
    },
    components: [
      SPINNERMAIN,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-predictive',
        familyPath: '@bbva-web-components/bbva-form-predictive',
        render: 'litElement',
        properties: {
          allowedPattern: '[0-9]',
          minChars: 7,
          required: true,
          label: 'Busca por número de cheque',
          className: 'navy-on-header',
          search: true,
          cellsConnections: {
            in: {
              checks_deposits_update_form_predictive: {
                bind: 'hidden'
              }
            },
            out: {
              checks_deposits_list_id_update_filter_buton: {
                bind: 'form-search-button-submit'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'filter-tags',
        properties: {
          showBySort: true,
          urlSortByImg: './images/arrow_icon.svg',
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
          pageName: 'checksManagementList',
          cache: [
            'checksManagementListSearcher'
          ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksManagementList: {
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

          cellsConnections: {
            in: {
              checks_deposits_update_header: {
                bind: 'title-name'
              }
            },
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
          imageEmptyList: './images/empty_micro.svg',
          showFulfillmentStatus: true,
          hasFooterButton: false,
          skeletonItems: 4,
          pagination: 6,
          stickyGroup: true,
          skeletonItems: 5,
          transactionGroupDateFormat: utils.getShortFormatDate(),
          transactionCurrentYearDateFormat: 'DD [de] MMMM YYYY',
          className: 'sticky-with-action empty-message-ml',
          cellsConnections: {
            in: {
              checks_deposits_list_reset_page: {
                bind: 'reset'
              },
              checks_deposits_list_transactions: {
                bind: 'transactions'
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
              }
            },
            out: {
              checks_deposits_list_full_list: {
                bind: 'view-all-transactions',
                analytics: ANALYTICS_CHECKS_MANAGEMENT_LIST.managementList('lista'),
                featureFlag: ANALYTICS_CHECKS_MANAGEMENT_LIST.ANALYTICS_FEATURE_FLAG
              },
              navigate_to_check_deposits_add_check: {
                bind: 'go-to-checks-management-add-check',
                link: {
                  page: 'checksManagement'
                }
              },
              navigate_to_check_deposits_searcher: {
                bind: 'go-to-checks-management-list-searcher',
                link: {
                  page: 'checksManagementListSearcher'
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
        tag: 'glomo-check-management-manager-list',
        familyPath: 'glomo-check-management-manager',
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
              navigation_product_detail_to_checks_section: {
                bind: 'setAccountInfo'
              },
              account_get_operations_product: {
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
              checks_deposits_list_id_update_filter_buton: {
                bind: 'getChecksId'
              },
              global_checks_section_navigate_to_checks_management: {
                bind: 'account'
              },
              checks_management_exit_operative: {
                bind: 'goToChecksDepositsAdd'
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
                bind: 'check-list-changed'
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
              checks_deposits_update_form_predictive: {
                bind: 'update-form-predictive'
              },
              checks_deposits_update_header: {
                bind: 'update-header'
              },
              checks_deposits_hide_filter_tags: {
                bind: 'hide-filter-tags'
              },
              global_retry_error: {
                bind: 'retry-error-list-checks'
              },
              checks_deposits_checks_not_released: {
                bind: 'checks-not-released',
                analytics: ANALYTICS_CHECKS_MANAGEMENT_LIST.managementListError('error no hay cheques liberados', 'lista'),
                featureFlag: ANALYTICS_CHECKS_MANAGEMENT_LIST.ANALYTICS_FEATURE_FLAG
              },
              checks_deposits_go_back: {
                bind: 'checks-management-list-go-back',
                backStep: true
              },
              checks_deposits_list_reset_page: {
                bind: 'checks-management-list-go-back'
              },
              global_checks_section_navigate_to_checks_management_add: {
                bind: 'glomo-check-list-navigate-to-checks-management-add'
              },
              navigate_to_checks_deposits_detail: {
                bind: 'glomo-check-list-navigate-to-detail',
                link: {
                  page: 'checksManagementDetail',
                  params: {
                    checkId: 'checkId'
                  }
                }
              },
              checks_deposits_analytics_initial: {
                bind: 'analytics',
                analytics: ANALYTICS_CHECKS_MANAGEMENT_LIST.managementList(),
                featureFlag: ANALYTICS_CHECKS_MANAGEMENT_LIST.ANALYTICS_FEATURE_FLAG
              }
            }
          }
        }
      }
    ]
  };

  //Add retry errors
  addRetryErrors(base)([
    {
      id: 'checks-deposits-list-get-checks-error',
      acceptRetry: { bind: 'requestGetChecks', component: 'glomo-check-management-manager-list' },
      cancelRetry: { bind: 'goBackToChecksDeposits', component: 'glomo-check-management-manager-list' },
      finishRetry: { bind: 'goBackToChecksDeposits', component: 'glomo-check-management-manager-list' },
      successEvent: { bind: 'check-list-changed', component: 'glomo-check-management-manager-list' }
    },
    {
      id: 'checks-deposits-list-get-checks-filter-error',
      acceptRetry: { bind: 'requestGetChecks', component: 'glomo-check-management-manager-list' },
      successEvent: { bind: 'check-list-changed', component: 'glomo-check-management-manager-list' }
    }
  ]);

  //Add common errors
  addCommonErrors(base.components)();

  return base;
};
