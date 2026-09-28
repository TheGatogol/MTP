'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const utils = require('./common/helpers/_utils');
  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const NATIVE_DATEPICKER_TYPE = isNativeIos ? 'text' : 'date';
  const pages = require('./common/_pages')(CONFIG)('checksDepositsListSearcher');

  const CALENDAR_FORMATS_MIN_DATE = {
    en: {
      sameDay: 'glomo-checks-deposits-list-searcher-today-text-min-date',
      sameElse: 'glomo-checks-deposits-list-searcher-today-text-min-date'
    },
    es: {
      sameDay: 'glomo-checks-deposits-list-searcher-today-text-min-date',
      sameElse: 'glomo-checks-deposits-list-searcher-initial-text-max-date'
    }
  };

  const CALENDAR_FORMATS_MAX_DATE = {
    en: { sameDay: 'glomo-checks-deposits-list-searcher-today-text-min-date'},
    es: { sameDay: 'glomo-checks-deposits-list-searcher-today-text-min-date'}
  };

  const DATE_RANGES_TYPES = [
    { name: 'glomo-date-filter-period' },
    { name: 'glomo-date-filter-today' },
    { name: 'glomo-date-filter-last-week' },
    { name: 'glomo-date-filter-last-month' }
  ];

  const getDefaultDateFilterType = () => {
    return {
      index: ((DATE_RANGES_TYPES || []).length > 0) ? 0 : undefined,
      item: ((DATE_RANGES_TYPES || []).length > 0) ? DATE_RANGES_TYPES[0] : undefined
    };
  };

  const DATE_RANGES_TYPE = getDefaultDateFilterType();

  const CATEGORY_FILTER = [
    'empty',
    'Accepted',
    'Rejected'];

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-confirm-buttons-filter-checks-deposits-search',
        action: 'set-transactions-filter',
        class: 'primary',
        disabled: true
      },
      secondary: {
        text: 'cells-confirm-buttons-filter-checks-deposits-clean',
        class: 'link',
        action: 'reset-transactions-filter',
        disabled: true
      }
    }
  };

  const base = {
    hash: 'checks-deposits-list-searcher',
    currentPage: {
      url: '/checks-deposits/list-searcher',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding bbva-core-blue' : '',
        extraHeaderClass: 'bbva-core-blue',
        hasFooter: false,
        animationType: 'verticalUp',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksDepositsListSearcher',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_checksDepositsListSearcher: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              checks_deposits_list_searcher_reset_page: {
                bind: 'reset'
              },
              checks_deposits_list_searcher_init_page: {
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
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-checks-deposits-list-searcher-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_checks_deposits_list_searcher_to_page: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-transactions-searcher',
        properties: {
          className: 'compact-theme light-background category-no-border',
          calendarTimeMinDate: true,
          calendarTimeMaxDate: true,
          calendarFormatsMaxDate: CALENDAR_FORMATS_MAX_DATE,
          calendarFormatsMinDate: CALENDAR_FORMATS_MIN_DATE,
          language: LANGUAGE,
          localCurrency: LOCAL_CURRENCY,
          hideDateSelectorFilter: false,
          hideDateSelectorFilterButton: false,
          hideCategoryFilter: false,
          transactionTypes: [],
          filterOptions: ['Todos', 'Cobrados', 'Rechazados'],
          categoryHead: 'glomo-checks-deposits-list-searcher-category-head',
          hideAmountFilter: false,
          enableErrorAmountFilter: true,
          nativeShell: CONFIG.nativeShell,
          hideActions: true,
          amountFilterDecimalDigits: 0,
          enableTodayLabel: true,
          simpleDateFormatLabel: true,
          dateFormatLabel: 'D MMM YYYY',
          readOnly: isNativeIos,
          inputType: NATIVE_DATEPICKER_TYPE,
          setAmountFilterInitialDecimals: true,
          forceAlwaysShowDate: false,
          enabledSearchButton: true,
          disabledAmountSublabels: true,
          defaultDate: -90,
          setAmountMin: '',
          setDates: true,
          categoryFilter: CATEGORY_FILTER,
          filterPeriodTitle: 'glomo-date-filter-period',
          emptyDefaultInitDate: true,
          cellsConnections: {
            in: {
              navigation_checks_deposits_list_to_page: {
                bind: 'reset'
              },
              checks_deposits_list_searcher_set_selected_filters: {
                bind: '_sendSelectedFilters'
              },
              checks_deposits_list_searcher_reset_selected_filters: {
                bind: 'reset'
              },
              checks_deposits_list_searcher_range_item_selected: {
                bind: 'selectedDateFilter'
              },
              checks_deposits_list_searcher_init_page: {
                bind: 'setInitialDates'
              },
              checks_deposits_list_searcher_offset_date: {
                bind: 'setAccountTypeOffset'
              },
              global_checks_deposits_list_searcher_selected_filters_updated: {
                bind: 'resetSelectedFilters'
              }
            },
            out: {
              checks_deposits_list_searcher_filter_detail_empty: {
                bind: 'filter-details-empty'
              },
              checks_deposits_list_searcher_open_filter_types: {
                bind: 'open-selector-modal'
              },
              checks_deposits_list_searcher_reset_filter_types: {
                bind: 'reset-selector-date-filter'
              },
              global_checks_deposits_list_selected_filter_data: {
                bind: 'selected-filters-data'
              },
              navigation_checks_deposits_list_searcher_back_navigation: {
                bind: 'request-back-navigation',
                backStep: true
              },
              checks_deposits_list_searcher_open_modal_info_filters: {
                bind: 'selected-date-before-min-date-filter'
              },
              checks_deposits_list_searcher_disable_buttons: {
                bind: 'disable-buttons'
              },
              checks_deposits_list_searcher_reset_all_filters: {
                bind: 'reset-all-filters'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-transactions-searcher-filters-dm',
        type: 'DM',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: !!CONFIG.native,
          buttonPrimaryText: 'cells-confirm-buttons-filter-checks-deposits-search',
          buttonSecondaryText: 'cells-confirm-buttons-filter-checks-deposits-clean',
          offsetDate: '90',
          cellsConnections: {
            in: {
              checks_deposits_list_searcher_filter_detail_empty: {
                bind: 'changeConfirmButtons'
              },
              checks_deposits_list_searcher_init_page: {
                bind: 'changeOffsetDate'
              },
              checks_deposits_list_searcher_open_modal_info_filters: {
                bind: 'openModalInfoFiltersAccount'
              },
              checks_deposits_list_searcher_disable_buttons: {
                bind: 'changeConfirmButtons'
              }
            },
            out: {
              checks_deposits_list_searcher_change_confirm_buttons: {
                bind: 'change-config-confirm-buttons'
              },
              checks_deposits_list_searcher_offset_date: {
                bind: 'change-offset-date'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector',
        type: 'UI',
        properties: {
          items: DATE_RANGES_TYPES,
          selected: DATE_RANGES_TYPE.index,
          itemSelected: DATE_RANGES_TYPE.item,
          cellsConnections: {
            in: {
              checks_deposits_list_searcher_open_filter_types: {
                bind: 'open'
              },
              checks_deposits_list_searcher_reset_filter_types: {
                bind: 'reset'
              }
            },
            out: {
              checks_deposits_list_searcher_range_selected: {
                bind: 'selected-changed'
              },
              checks_deposits_list_searcher_range_item_selected: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        properties: {
          unfixed: true,
          config: configButtons,
          cellsConnections: {
            in: {
              checks_deposits_list_searcher_change_confirm_buttons: {
                bind: 'config'
              },
              checks_deposits_list_searcher_disable_buttons: {
                bind: 'config'
              },
              checks_deposits_list_searcher_init_page: {
                bind: 'disableButtons'
              },
              checks_deposits_list_searcher_reset_all_filters: {
                bind: 'disableButtons'
              }
            },
            out: {
              checks_deposits_list_searcher_set_selected_filters: {
                bind: 'set-transactions-filter'
              },
              checks_deposits_list_searcher_reset_selected_filters: {
                bind: 'reset-transactions-filter'
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
