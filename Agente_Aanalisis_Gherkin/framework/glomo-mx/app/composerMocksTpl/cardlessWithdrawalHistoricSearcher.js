'use strict';
module.exports = CONFIG => {
  const PRODUCT = 'cardlessWithdrawalHistoricSearcher';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const { getLanguage, getLocalCurrency, getRewardsFormatDay} = require('./common/helpers/_utils');
  const NATIVE_DATEPICKER_TYPE = isNativeIos ? 'text' : 'date';
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);
  const additionalHeaderClass = isSpherica ? '' : 'bbva-core-blue';

  const { CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER_VIEW } = require('./analytics/_cardlessWithdrawalHistoric');

  const CALENDAR_FORMATS_MIN_DATE = {
    en: {
      sameDay: 'glomo-cardless-withdrawal-historic-searcher-today-text-min-date',
      sameElse: 'glomo-cardless-withdrawal-historic-searcher-today-text-min-date'
    },
    es: {
      sameDay: 'glomo-cardless-withdrawal-historic-searcher-today-text-min-date',
      sameElse: 'glomo-cardless-withdrawal-historic-searcher-initial-text-max-date'
    }
  };

  const CALENDAR_FORMATS_MAX_DATE = {
    en: { sameDay: 'glomo-cardless-withdrawal-historic-searcher-today-text-min-date'},
    es: { sameDay: 'glomo-cardless-withdrawal-historic-searcher-today-text-min-date'}
  };

  const DATE_RANGES_TYPES = [
    { id: 0, name: 'glomo-date-filter-period', isTitle: true },
    { id: 1, name: 'glomo-date-filter-today' },
    { id: 2, name: 'glomo-date-filter-last-week' },
    { id: 3, name: 'glomo-date-filter-last-month' }
  ];

  const getDefaultDateFilterType = () => {
    return {
      index: ((DATE_RANGES_TYPES || []).length > 0) ? 0 : undefined,
      item: ((DATE_RANGES_TYPES || []).length > 0) ? DATE_RANGES_TYPES[0] : undefined
    };
  };

  const DATE_RANGES_TYPE = getDefaultDateFilterType();

  const CHECKBOX_FILTER = {
    state: [
      {id: '01', description: 'glomo-transfers-status-pending'},
      {id: '02', description: 'glomo-transfers-status-rejected'},
      {id: '03', description: 'glomo-transfers-status-expired'}
    ]
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-confirm-buttons-filter-cardless-withdrawal-historic-search',
        class: 'primary',
        action: 'set-transactions-filter',
        disabled: true
      },
      secondary: {
        text: 'cells-confirm-buttons-filter-cardless-withdrawal-historic-clean',
        class: 'link',
        action: 'reset-transactions-filter',
        disabled: true
      }
    }
  };

  const base = {
    hash: 'cardless-withdrawal-historic-searcher',
    currentPage: {
      url: '/cardless-withdrawal/searcher',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? `ios-top-padding ${additionalHeaderClass}` : '',
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
          pageName: 'cardlessWithdrawalHistoricSearcher',
          customInitEvents: {
            'swipe-menu-enabled': false,
            'reset-filter-cardless-withdrawal': null
          },
          cellsConnections: {
            in: {
              __bridge_page_cardlessWithdrawalHistoricSearcher: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              cardless_withdrawal_historic_searcher_reset_page: {
                bind: 'reset'
              },
              cardless_withdrawal_historic_searcher_init_page: {
                bind: 'init-page',
                analytics: CARDLESS_WIDTHDRAWAL_HISTORIC_SEARCHER_VIEW
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              cardless_withdrawal_historic_searcher_reset_filter: {
                bind: 'reset-filter-cardless-withdrawal'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: isSpherica ? '' : 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-cardless-withdrawal-historic-searcher-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_cardless_withdrawal_historic_searcher_to_page: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          rightIconText: 'cells-molecule-header-spherica-close',
          newCellsConnections: {
            add: {
              out: {
                navigation_cardless_withdrawal_historic_searcher_to_page_spherica: {
                  bind: 'click-right-button',
                  backStep: true
                }
              }
            },
            remove: {
              out: [
                'navigation_cardless_withdrawal_historic_searcher_to_page'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-transactions-searcher',
        tagSpherica: 'glomo-transactions-searcher-spherica',
        properties: {
          className: 'compact-theme light-background category-no-border',
          calendarTimeMinDate: true,
          calendarTimeMaxDate: true,
          calendarFormatsMaxDate: CALENDAR_FORMATS_MAX_DATE,
          calendarFormatsMinDate: CALENDAR_FORMATS_MIN_DATE,
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          currencyCode: getLocalCurrency(),
          hideDateSelectorFilter: false,
          hideDateSelectorFilterButton: false,
          hideCategoryFilter: true,
          transactionTypes: [],
          hideAmountFilter: false,
          enableErrorAmountFilter: true,
          nativeShell: CONFIG.nativeShell,
          hideActions: true,
          enableTodayLabel: true,
          simpleDateFormatLabel: true,
          dateFormatLabel: getRewardsFormatDay(),
          dateDefaultFormat: getRewardsFormatDay(),
          readOnly: isNativeIos,
          inputType: NATIVE_DATEPICKER_TYPE,
          setAmountFilterInitialDecimals: true,
          forceAlwaysShowDate: false,
          enabledSearchButton: true,
          defaultDate: -90,
          setAmountMin: '',
          setDates: true,
          hideCheckboxFilter: false,
          checkboxFilterGroup: CHECKBOX_FILTER,
          filterPeriodTitle: 'glomo-date-filter-period-cardless-withdrawal-searcher',
          maxLengthAmount: 4,
          staticDividerKind: 'divider',
          disabledAmountSublabels: true,
          avoidHidePicker: true,
          cellsConnections: {
            in: {
              navigation_cardless_withdrawal_historic_to_page: {
                bind: 'reset'
              },
              cardless_withdrawal_historic_searcher_set_selected_filters: {
                bind: '_sendSelectedFilters'
              },
              cardless_withdrawal_historic_searcher_reset_selected_filters: {
                bind: 'reset'
              },
              cardless_withdrawal_historic_searcher_range_item_selected: {
                bind: 'selectedDateFilter'
              },
              cardless_withdrawal_historic_searcher_init_page: {
                bind: 'setInitialDates'
              },
              cardless_withdrawal_historic_searcher_offset_date: {
                bind: 'setAccountTypeOffset'
              },
              global_cardless_withdrawal_historic_searcher_selected_filters_updated: {
                bind: 'resetSelectedFilters'
              },
              navigation_cardless_withdrawal_historic_searcher_to_page: {
                bind: 'reset'
              },
              cardless_withdrawal_historic_searcher_reset_filter: {
                bind: 'reset'
              }
            },
            out: {
              cardless_withdrawal_historic_searcher_filter_detail_empty: {
                bind: 'filter-details-empty'
              },
              cardless_withdrawal_historic_searcher_open_filter_types: {
                bind: 'open-selector-modal'
              },
              cardless_withdrawal_historic_searcher_reset_filter_types: {
                bind: 'reset-selector-date-filter'
              },
              global_cardless_withdrawal_historic_selected_filter_data: {
                bind: 'selected-filters-data'
              },
              navigation_cardless_withdrawal_historic_searcher_back_navigation: {
                bind: 'request-back-navigation',
                backStep: true
              },
              cardless_withdrawal_historic_searcher_open_modal_info_filters: {
                bind: 'selected-date-before-min-date-filter'
              },
              cardless_withdrawal_historic_searcher_disable_buttons: {
                bind: 'disable-buttons'
              },
              cardless_withdrawal_historic_searcher_reset_all_filters: {
                bind: 'reset-all-filters'
              }
            }
          }
        },
        propertiesSpherica: {
          showInputTextRightIcon: true,
          newCellsConnections: {
            add: {
              in: {
                navigation_cardless_withdrawal_historic_searcher_to_page_spherica: {
                  bind: 'reset'
                }
              }
            },
            remove: {
              in: [
                'navigation_cardless_withdrawal_historic_searcher_to_page'
              ]
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
          buttonPrimaryText: 'cells-confirm-buttons-filter-cardless-withdrawal-historic-search',
          buttonSecondaryText: 'cells-confirm-buttons-filter-cardless-withdrawal-historic-clean',
          offsetDate: '90',
          cellsConnections: {
            in: {
              cardless_withdrawal_historic_searcher_filter_detail_empty: {
                bind: 'changeConfirmButtons'
              },
              cardless_withdrawal_historic_searcher_init_page: {
                bind: 'changeOffsetDate'
              },
              cardless_withdrawal_historic_searcher_open_modal_info_filters: {
                bind: 'openModalInfoFiltersAccount'
              },
              cardless_withdrawal_historic_searcher_disable_buttons: {
                bind: 'changeConfirmButtons'
              }
            },
            out: {
              cardless_withdrawal_historic_searcher_change_confirm_buttons: {
                bind: 'change-config-confirm-buttons'
              },
              cardless_withdrawal_historic_searcher_offset_date: {
                bind: 'change-offset-date'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        tag: 'cells-modal-selector',
        tagSpherica: 'cells-modal-selector-spherica',
        type: 'UI',
        properties: {
          items: DATE_RANGES_TYPES,
          selected: DATE_RANGES_TYPE.index,
          itemSelected: DATE_RANGES_TYPE.item,
          hideCheckIcon: true,
          cellsConnections: {
            in: {
              cardless_withdrawal_historic_searcher_open_filter_types: {
                bind: 'open'
              },
              cardless_withdrawal_historic_searcher_reset_filter_types: {
                bind: 'reset'
              }
            },
            out: {
              cardless_withdrawal_historic_searcher_range_selected: {
                bind: 'selected-changed'
              },
              cardless_withdrawal_historic_searcher_range_item_selected: {
                bind: 'item-selected-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          unfixed: true,
          config: configButtons,
          cellsConnections: {
            in: {
              cardless_withdrawal_historic_searcher_change_confirm_buttons: {
                bind: 'config'
              },
              cardless_withdrawal_historic_searcher_disable_buttons: {
                bind: 'config'
              },
              cardless_withdrawal_historic_searcher_init_page: {
                bind: 'disableButtons'
              },
              cardless_withdrawal_historic_searcher_reset_all_filters: {
                bind: 'disableButtons'
              }
            },
            out: {
              cardless_withdrawal_historic_searcher_set_selected_filters: {
                bind: 'set-transactions-filter'
              },
              cardless_withdrawal_historic_searcher_reset_selected_filters: {
                bind: 'reset-transactions-filter'
              }
            }
          }
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(base);
};