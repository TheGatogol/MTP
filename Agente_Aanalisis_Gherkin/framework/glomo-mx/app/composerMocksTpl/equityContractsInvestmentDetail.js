'use strict';

module.exports = (CONFIG) => {
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const PAGE_NAME = 'equityContractsInvestmentDetail';
  const PAGE_NAME_CHANNEL = 'equity_contracts_investment_detail';
  const pages = require('./common/helpers').getPages(CONFIG)(PAGE_NAME);
  const ANALYTICS_CONTRIBUTION = require('./analytics/_equityContractsContribution')(CONFIG);
  const ANALYTICS_WITHDRAWAL = require('./analytics/_equityContractsWithdrawal')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_equity_contracts_detail_show_tooltip_spherica: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_full_error_spherica: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_common_error_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'horizontal',
      hasFooter: false,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
      headerFixed: true,
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      cellsConnections: {
        [PAGE_NAME_CHANNEL + '_init_page']: {
          bind: 'recalculateHeader'
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      cache: [ '' ],
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'init-page',
            analytics: ANALYTICS_CONTRIBUTION.MARK_PAGE_EQUITY_CONTRACTS_DETAIL
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--dark',
      search: false,
      back: true,
      leftIcon: 'coronita:return-12',
      titleName: 'equity-contracts-investment-detail-header-title',
      cellsConnections: {
        in: {},
        out: {
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--core-grey',
      variant: 'primary-alt',
      leftIcon: 'coronita:back',
      leftIconText: 'equity-contracts-investment-detail-header-text-icon-return-spherica'
    }
  };

  const clipboardManager = {
    zone: 'app__main',
    tag: 'cells-clipboard-manager',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_copy_contract']: {
            bind: 'text'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_success_copy_contract']: {
            bind: 'text-copied'
          }
        }
      }
    }
  };

  const toast = {
    zone: 'app__footer',
    tag: 'cells-modal-alert',
    type: 'UI',
    properties: {
      toast: true,
      className: 'white-icon-success',
      icon: 'coronita:correct',
      type: 'success',
      content: 'cells-product-more-info-contact-title-copy',
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_success_copy_contract']: {
            bind: 'open'
          }
        }
      }
    }
  };

  const bbvaManagerEquityContracts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-equity-contracts',
    tagSpherica: 'bbva-manager-equity-contracts-spherica',
    familyPath: '@glomo-web-components/bbva-manager-equity-contracts',
    familyPathSpherica: '@glomo-web-components/bbva-manager-equity-contracts-spherica',
    render: 'litElement',
    properties: {
      mode: 'detail',
      host: CONFIG.globalServices.host,
      investmentFundsApiVersion: CONFIG.globalServices.versions.investmentFunds,
      native: !!CONFIG.native,
      showFundOperatives: true,
      enableStorageAndForward: true,
      cellsConnections: {
        in: {
          equity_contracts_product: {
            bind: 'equity'
          },
          global_equity_contracts_list_go_to_detail: {
            bind: 'detail'
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_copy_contract']: {
            bind: 'bbva-manager-equity-contracts-detail-copy-contract-event'
          },
          global_equity_contracts_detail_show_tooltip: {
            bind: 'bbva-manager-equity-contracts-detail-show-tooltip-event'
          },
          global_equity_contracts_go_to_contribution: {
            bind: 'bbva-manager-equity-contracts-contribution-event',
            link: {
              page: 'equityContractsContribution'
            }
          },
          global_equity_contracts_go_to_withdrawal: {
            bind: 'bbva-manager-equity-contracts-withdrawal-event',
            link: {
              page: 'equityContractsWithdrawal'
            }
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'bbva-manager-equity-contracts-exit-page-event'
          },
          [PAGE_NAME_CHANNEL + '_no_cash_enough']: {
            bind: 'bbva-manager-equity-contracts-no-cash-enough'
          },
          global_equity_contracts_full_error: {
            bind: 'bbva-manager-equity-contracts-full-error-event'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            global_equity_contracts_detail_show_tooltip_spherica: {
              bind: 'bbva-manager-equity-contracts-detail-show-tooltip-event'
            },
            global_equity_contracts_full_error_spherica: {
              bind: 'bbva-manager-equity-contracts-full-error-event'
            }
          }
        },
        remove: {
          out: [
            'global_equity_contracts_detail_show_tooltip',
            'global_equity_contracts_full_error'
          ]
        }
      }
    }
  };

  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-equity-contracts-operations-manager',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_no_cash_enough']: {
            bind: 'notCashEnough'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          }
        },
        out: {
          global_equity_contracts_common_error: {
            bind: 'equity-contracts-common-error-event'
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'navigate-back-button',
            backStep: true
          }
        }
      }
    }
  };

  const analytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-equity-contracts-operations-analytics-manager',
    familyPath: 'glomo-equity-contracts-operations-manager',
    properties: {
      cellsConnections: {
        in: {
          global_equity_contracts_go_to_contribution: {
            bind: 'appOnClickStart'
          },
          global_equity_contracts_go_to_withdrawal: {
            bind: 'appOnClickStart'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_app_on_click_start_contribution_event']: {
            bind: 'analytics-app-on-click-start-contribution-event',
            analytics: ANALYTICS_CONTRIBUTION.APP_ON_CLICK_START_DETAIL
          },
          [PAGE_NAME_CHANNEL + '_app_on_click_start_withdrawal_event']: {
            bind: 'analytics-app-on-click-start-withdrawal-event',
            analytics: ANALYTICS_WITHDRAWAL.APP_ON_CLICK_START_DETAIL
          }
        }
      }
    }
  };

  const components = [
    lifeCycle,
    header,
    manager,
    analytics,
    clipboardManager,
    bbvaManagerEquityContracts
  ];

  if (isSpherica) {
    components.push(glomoAlertManagerSpherica);
  } else {
    components.push(toast);
  }

  return sphericaPageUtils.spherize({
    hash: 'mx-' + 'equity-contracts-investment-detail',
    currentPage: {
      url: `/${PAGE_NAME}`,
      params: []
    },
    pages: pages,
    template,
    components
  });
};
