/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const PRODUCT = 'cardlessWithdrawalHistoric';
  const utils = require('./common/helpers/_utils.js');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const spinner = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const dateFormat = utils.getShortFormatDate();
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);
  const isSpherica = sphericaPageUtils.isSpherica();
  spinner.tagSpherica = 'cells-spinner-veil-spherica';

  const {
    CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_VIEW,
    CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK,
    CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS_VIEW,
    CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR_VIEW
  } = require('./analytics/_cardlessWithdrawalHistoric.js');

  const base = {
    hash: 'mx-cardless-withdrawal-historic',
    currentPage: {
      url: '/cardless-withdrawal/historic',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        footerHeight: 100,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            cardless_withdrawal_historic_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          }
        }
      },
      propertiesSpherica: {
        footerHeight: 0,
        className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'cardlessWithdrawalHistoric',
          private: true,
          cache: [
            'cardlessWithdrawalDetail',
            'cardlessWithdrawalHistoricSearcher'
          ],
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_cardlessWithdrawalHistoric: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              cardless_withdrawal_historic_init_page: {
                bind: 'init-page'
              },
              app_error_access_token: {
                bind: 'access-token-error'
              },
              cardless_withdrawal_historic_reset_page: {
                bind: 'reset'
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          leftIcon: isSpherica ? 'coronita:back' : 'coronita:return-12',
          titleName: 'glomo-cardless-withdrawal-historic-header-title',
          rightIcon: 'coronita:help',
          cellsConnections: {
            in: {},
            out: {
              navigation_cardless_withdrawal_historic_to_page: {
                bind: 'click-left-button',
                backStep: true
              },
              cardless_withdrawal_historic_help_modal: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary-alt',
          className: 'header--grey',
          rightIconText: 'cells-molecule-header-spherica-help',
          leftIconText: 'cells-molecule-header-spherica-back'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-transfers-mx-dm',
        familyPath: 'glomo-transfers-dm',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          transferApiVersion: CONFIG.globalServices.versions.transfer,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          imageModalInfo: './images/cardlessWithdrawal/money-app-dollar.svg',
          cellsConnections: {
            in: {
              cardless_withdrawal_historic_selected_tab: {
                bind: 'selected'
              },
              cardless_withdrawal_historic_init_page: {
                bind: 'getMobileTransfers'
              },
              cardless_withdrawal_historic_help_modal: {
                bind: 'openCardlessWithdrawalJHistoricHelpModal'
              },
              global_cardless_withdrawal_historic_selected_filter_data: {
                bind: 'filterCheckList'
              },
              global_cardless_withdrawal_historic_searcher_selected_filters_updated: {
                bind: 'onChangeFilterTags'
              },
              cardless_withdrawal_historic_reset_page: {
                bind: 'reset'
              },
              cardless_withdrawal_detail_successful_withdrawal_cancelled: {
                bind: 'reset'
              },
              cardless_withdrawal_historic_cancel_modal: {
                bind: 'openCancelModal'
              },
              cardless_withdrawal_error_delete_response: {
                bind: 'onDeleteMobileTransferError'
              },
              cardless_withdrawal_historic_share_receipt: {
                bind: 'shareMobileTransferSwipe'
              },
              global_cardless_withdrawal_historic_cancel_transaction: {
                bind: 'cancelTransactionDetail'
              },
              blue_global_cardless_withdrawal_historic_selected_filter_data: {
                bind: 'filtersFromBlue'
              }
            },
            out: {
              cardless_withdrawal_historic_show_sort_button: {
                bind: 'show-date-sort-button'
              },
              cardless_withdrawal_historic_reset_sort_date: {
                bind: 'reset-button-sort-date'
              },
              cardless_withdrawal_historic_loading_request: {
                bind: 'loading-changed'
              },
              cardless_withdrawal_historic_set_pendings: {
                bind: 'pending-changed'
              },
              cardless_withdrawal_historic_set_expireds: {
                bind: 'expired-changed'
              },
              cardless_withdrawal_historic_set_rejecteds: {
                bind: 'rejected-changed'
              },
              cardless_withdrawal_historic_set_mobile_transfers: {
                bind: 'mobile-transfers-parsed-changed'
              },
              cardless_withdrawal_historic_error: {
                bind: 'error-on-set-mobile-transfers'
              },
              cardless_withdrawal_historic_show_hide_float_button: {
                bind: 'show-floating-button-filter'
              },
              cardless_withdrawal_historic_unset_fixed_height: {
                bind: 'unfixed-height-empty-screen'
              },
              global_generic_error: {
                bind: 'error-on-set-mobile-transfers'
              },
              global_open_glomo_alert_manager_header_modal: {
                bind: 'glomo-transfers-open-modal-with-settings'
              },
              cardless_withdrawal_historic_update_filter_tags: {
                bind: 'update-filter-tags'
              },
              cardless_withdrawal_historic_update_tags: {
                bind: 'update-tags'
              },
              cardless_withdrawal_historic_hide_filter_tags: {
                bind: 'hide-filter-tags'
              },
              cardless_withdrawal_historic_list_limit: {
                bind: 'update-list-limit'
              },
              cardless_withdrawal_historic_hide_view_all: {
                bind: 'update-view-all'
              },
              global_cardless_withdrawal_historic_selected_filter_data: {
                bind: 'selected-filters-data'
              },
              cardless_withdrawal_error_delete_response: {
                bind: 'error-on-delete-mobile-transfer'
              },
              cardless_withdrawal_historic_transaction_list_error: {
                bind: 'open-error-on-get-mobile-transfers',
                analytics: CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_ERROR_VIEW
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              cardless_withdrawal_historic_main_transfer_data: {
                bind: 'data-share-receipt'
              },
              global_open_glomo_alert_manager_icon_cancel_modal: {
                bind: 'glomo-transfers-open-modal-with-settings'
              },
              cardless_withdrawal_historic_widthout_transfers_analytics: {
                bind: 'without-mobile-transfers',
                analytics: CARDLESS_WIDTHDRAWAL_HISTORIC_WITHDOUT_MOVEMENTS_VIEW
              },
              cardless_withdrawal_historic_width_transfers_analytics: {
                bind: 'with-mobile-transfers',
                analytics: CARDLESS_WIDTHDRAWAL_HISTORIC_PAGE_VIEW
              },
              cardless_withdrawal_historic_cancel_click_analytics: {
                bind: 'cancel-transfer',
                analytics: CARDLESS_WIDTHDRAWAL_HISTORIC_CANCEL_CLICK
              },
              global_alert_manager_open_with_settings: {
                bind: 'glomo-transfers-open-modal-with-settings'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_open_glomo_alert_manager_header_modal_spherica: {
                  bind: 'glomo-transfers-open-modal-with-settings'
                },
                global_open_glomo_alert_manager_icon_cancel_modal_spherica: {
                  bind: 'glomo-transfers-open-modal-with-settings'
                },
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'glomo-transfers-open-modal-with-settings'
                }
              }
            },
            remove: {
              out: [
                'global_open_glomo_alert_manager_header_modal',
                'global_open_glomo_alert_manager_icon_cancel_modal',
                'global_alert_manager_open_with_settings'
              ]
            }
          }
        }
      }
    ]
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_open_glomo_alert_manager_header_modal_spherica: {
            bind: 'openWithSettings',
            previousState: false
          },
          global_open_glomo_alert_manager_icon_cancel_modal_spherica: {
            bind: 'openWithSettings'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_glomo_alert_manager_modal_opened: {
            bind: 'glomo-alert-modal-opened'
          },
          global_glomo_alert_manager_modal_closed: {
            bind: 'glomo-alert-modal-closed'
          },
          global_cardless_withdrawal_historic_cancel_transaction: {
            bind: 'alert-cardless-widthdrawal-historic-cancel-modal-transaction-accept'
          }
        }
      }
    }
  };

  const filterTags = {
    zone: 'app__main',
    type: 'UI',
    tag: 'filter-tags',
    tagSpherica: 'filter-tags-spherica',
    properties: {
      cellsConnections: {
        in: {
          cardless_withdrawal_historic_update_filter_tags: {
            bind: 'selectedFilters'
          },
          cardless_withdrawal_historic_reset_page: {
            bind: 'reset'
          },
          cardless_withdrawal_historic_clean_filters: {
            bind: 'reset'
          },
          cardless_withdrawal_historic_update_tags: {
            bind: 'hideFilterTags'
          },
          cardless_withdrawal_historic_hide_filter_tags: {
            bind: 'hideFilterTags'
          },
          cardless_withdrawal_historic_show_sort_button: {
            bind: 'showBySort'
          },
          cardless_withdrawal_historic_reset_sort_date: {
            bind: 'dataReset'
          }
        },
        out: {
          global_cardless_withdrawal_historic_searcher_selected_filters_updated: {
            bind: 'user-selected-filters'
          },
          global_cardless_withdrawal_historic_searcher_sort_date: {
            bind: 'sort-by-date'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'heading-style'
    }
  };

  const transactionsList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-transactions-list',
    tagSpherica: 'cells-transactions-list-spherica',
    properties: {
      className: 'no-link',
      localCurrency: LOCAL_CURRENCY,
      pagination: 5,
      skeletonItems: 4,
      showFulfillmentStatus: true,
      activeSwipe: true,
      showNewOperationButton: true,
      continue: 'cardlessWithdrawalHistoric',
      transactionGroupDateFormat: dateFormat,
      transactionCurrentYearDateFormat: dateFormat,
      titleEmptyList: 'glomo-cardless-withdrawal-historic-list-title-empty',
      imageEmptyList: './images/empty_micro.svg',
      messageEmptyList: 'glomo-cardless-withdrawal-historic-list-message-empty',
      cellsConnections: {
        in: {
          cardless_withdrawal_historic_set_mobile_transfers: {
            bind: 'transactions'
          },
          cardless_withdrawal_historic_reset_page: {
            bind: 'reset'
          },
          cardless_withdrawal_historic_list_limit: {
            bind: 'limit'
          },
          cardless_withdrawal_historic_hide_view_all: {
            bind: 'disableViewAll'
          },
          cardless_withdrawal_historic_transaction_list_error: {
            bind: 'showMessageLoadError'
          },
          cardless_withdrawal_historic_unset_fixed_height: {
            bind: 'fixedHeightEmptyScreen'
          },
          global_cardless_withdrawal_historic_searcher_sort_date: {
            bind: 'toggleSortList'
          }
        },
        out: {
          cardless_withdrawal_historic_get_more_transfers: {
            bind: 'get-more-transfers'
          },
          cardless_withdrawal_historic_go_to_detail: {
            bind: 'transaction-tap',
            link: {
              page: 'cardlessWithdrawalDetail',
              params: {
                transactionId: 'transactionId'
              }
            }
          },
          navigation_cardless_withdrawal_historic_to_new_cardless_withdrawal: {
            bind: 'start-new-operation',
            link: {
              page: 'cardlessWithdrawal',
              params: {
                continue: 'continue'
              }
            }
          },
          cardless_withdrawal_historic_cancel_modal: {
            bind: 'view-operation-swipe-cancel'
          },
          cardless_withdrawal_historic_share_receipt: {
            bind: 'view-operation-swipe-share'
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    },
    propertiesSpherica: {
      fixedHeightEmptyScreen: false,
      className: 'no-link static-actions',
      imageEmptyList: './images/spherica/empty_state_day.svg',
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'share-receipt-show-modal-error'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const floatButton = {
    zone: 'app__footer',
    type: 'UI',
    tag: 'bbva-button-floating-action',
    familyPath: '@bbva-web-components/bbva-button-floating-action',
    render: 'litElement',
    properties: {
      variant: 'medium-blue',
      icon: 'coronita:filter',
      hidden: true,
      cellsConnections: {
        in: {
          cardless_withdrawal_historic_show_hide_float_button: {
            bind: 'hidden'
          }
        },
        out: {
          cardless_withdrawal_historic_go_to_search: {
            bind: 'click',
            link: {
              page: 'cardlessWithdrawalHistoricSearcher'
            }
          }
        }
      }
    }
  };

  const operation = [
    {
      label: 'glomo-cardless-withdrawal-historic-filter',
      id: 'filtrar',
      icon: 'coronita:filter',
      type: 'operation',
      eventName: 'click-on-filter'
    }
  ];
  const operativeButton =  {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-operations-list-indicators',
    tagSpherica: 'cells-operations-list-indicators-spherica',
    properties: {
      customClass: 'filter-button',
      limit: '2',
      gridColumns: '2',
      defaultLimit: '2',
      operations: operation,
      hidden: true,
      cellsConnections: {
        in: {
          cardless_withdrawal_historic_show_hide_float_button: {
            bind: 'hidden'
          }
        },
        out: {
          cardless_withdrawal_historic_go_to_search: {
            bind: 'click-on-filter',
            link: {
              page: 'cardlessWithdrawalHistoricSearcher'
            }
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: LANGUAGE,
      headerReceipt: false,
      maxLineWidth: 40,
      sharedReceiptStyles: {
        headerImage: {
          'padding': '0px'
        }
      },
      unMaskAccount: true,
      cellsConnections: {
        in: {
          cardless_withdrawal_historic_share_receipt: {
            bind: 'captureReceipt'
          },
          cardless_withdrawal_historic_init_page: {
            bind: 'reset'
          },
          cardless_withdrawal_historic_main_transfer_data: {
            bind: 'result'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'share-receipt-show-modal-error'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const button = isSpherica ? operativeButton : floatButton;

  base.components.push(button, filterTags, transactionsList, cellsShareGenericReceipt);
  addCommonErrors(base.components)();
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
