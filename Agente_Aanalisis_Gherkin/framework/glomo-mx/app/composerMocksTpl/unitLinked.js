'use strict';

module.exports = CONFIG => {
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'unitLinked';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_unitLinked')();
  const utils = require('./common/helpers/_utils');
  const CurrencyCode = utils.getCurrencyCode(CONFIG);
  const AMOUNTFORMAT = utils.getLanguage(CONFIG);

  const base = {
    hash: 'unit-linked',
    currentPage: {
      url: '/unit-linked'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        headerFixed: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        className: 'bg-light-grey ' + isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: []
  };

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME + '_init_page']: {
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

  const bbvaDefaultUnitLinked = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-unit-linked-mx',
    familyPath: '@glomo-web-components/bbva-feature-unit-linked-mx',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      financialOverviewApiVersion: CONFIG.globalServices.versions.financialOverview,
      bankingPortfolioApiVersion: CONFIG.globalServices.versions.privateBankingPortfolios,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      currencySymbol: CurrencyCode,
      amountFormat: AMOUNTFORMAT,
      cellsConnections: {
        in: {
          navigation_unitlinked_channel: {
            bind: 'editAliasConfig'
          },
          unitLinked_exit_for_edit_alias: {
            bind: 'refreshFinancialOverview'
          },
          [PAGE_NAME + '_init_page']: {
            bind: 'refreshUnitLinked'
          },
          [PAGE_NAME + '_clipboard_success']: {
            bind: 'text-copied'
          },
          [PAGE_NAME + '_clipboard_error']: {
            bind: 'clipboard-error'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFlagCollection'
          }
        },
        out: {
          navigation_to_unit_linked_edit_alias: {
            bind: 'unit-linked-edit-alias',
            link: {
              page: 'unitLinkedEditAlias',
              params: {
                productId: 'productId'
              }
            }
          },
          [PAGE_NAME + '_go_back']: {
            bind: 'unit-linked-go-back',
            backStep: true
          },
          [PAGE_NAME + '_analytics_initial_event']: {
            bind: 'analytics-fire-fingerprint-unit-linked'
          },
          [PAGE_NAME + '_set_copy_card_number']: {
            bind: 'unit-linked-text-copied'
          },
          unit_linked_original_alias: {
            bind: 'unit-linked-original-alias'
          }
        },
        params: {
          productId: 'productId'
        }
      }
    }
  };

  const analyticmanager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-technical-core',
    familyPath: '@glomo-web-components/bbva-analyticmanager-technical-core',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_analytics_initial_event']: {
            bind: 'firePageView'
          }
        },
        out: {
          [PAGE_NAME + '_analytics_fingerprint_panel_detail']: {
            bind: 'analytics-page-view-unit-linked-panel-detail',
            analytics: ANALYTICS.UNIT_LINKED_DETAIL
          },
          [PAGE_NAME + '_analytics_fingerprint_more_info']: {
            bind: 'analytics-page-view-unit-linked-detail-more-info',
            analytics: ANALYTICS.UNIT_LINKED_MORE_INFO
          },
          [PAGE_NAME + '_analytics_fingerprint_error_message']: {
            bind: 'analytics-page-view-unit-linked-panel-error-message',
            analytics: ANALYTICS.UNIT_LINKED_ERROR
          }
        }
      }
    }
  };

  const clipBoard = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-clipboard-manager',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_set_copy_card_number']: {
            bind: 'text'
          }
        },
        out: {
          [PAGE_NAME + '_clipboard_success']: {
            bind: 'text-copied'
          },
          [PAGE_NAME + '_clipboard_error']: {
            bind: 'clipboard-error'
          }
        }
      }
    }
  };

  const bottomModalMessageSpherica = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-bottom-modal-message-spherica',
    properties: {
      type: 'success',
      icon: 'coronita:correct',
      iconSize: '24',
      autoHide: true,
      time: 3000,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          global_edit_alias_success_toast: {
            bind: 'open'
          }
        }
      }
    }
  };

  base.components.push(
    cellsHandleLifeCycle,
    bbvaDefaultUnitLinked,
    analyticmanager,
    clipBoard,
    bottomModalMessageSpherica
  );

  return base;
};
