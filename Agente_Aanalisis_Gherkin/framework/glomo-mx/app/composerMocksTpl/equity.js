/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME_CHANNEL = 'equity';
  const base = require('./product/_product-detail')('equity')(CONFIG);
  const utils = require('./common/helpers/_utils');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsIn = utils.connectionsIn(base);
  const setProperty = utils.setProperty(base);
  const ANALYTICS = require('./analytics/_equityDetail')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME_CHANNEL);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addProperty = utils.addProperty(base);
  const visibleChars = utils.getVisibleChars(CONFIG);
  const tagProductSummary = 'cells-product-summary-equity';
  const { maskedAmountNumberChars }  = require('./common/helpers/_constants');
  const isNativeIos = !!CONFIG.nativeIos;

  base.template = {
    ...base.template,
    tagSpherica: 'cells-template-coronita-spherica',
    extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
    }
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_equity_contracts_full_error_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  connectionsIn(tagProductSummary).equity_get_error = {
    bind: 'showErrorMessage'
  };

  connectionsIn(tagProductSummary).navigation_equity_product_detail_back_request = {
    bind: 'reset'
  };

  connectionsIn(tagProductSummary).equity_exit_page = {
    bind: 'reset'
  };

  addProperty(tagProductSummary).tagSpherica = 'cells-product-summary-equity-spherica';

  connectionsIn('cells-operations-list-indicators').equity_exit_page = {
    bind: 'reset'
  };

  addProperty('cells-operations-list-indicators').tagSpherica = 'cells-operations-list-indicators-spherica';

  delete connectionsIn('cells-bottom-modal-message').global_equity_edit_alias_success;

  connectionsOut(tagProductSummary).equity_get_retry = {
    bind: 'equity-get-product-detail-retry'
  };

  connectionsOut(tagProductSummary).equity_summary_open_launcher_dialer = {
    bind: 'open-action-launcher-dialer'
  };

  connectionsOut(tagProductSummary).equity_more_info_detail = {
    bind: 'cells-product-summary-more-info-navigation',
    link: {
      page: 'equityMoreInfo',
      params: {
        productId: 'productId'
      }
    }
  };

  connectionsIn('cells-molecule-header').equity_header_title_changed = {
    bind: 'titleName'
  };

  addProperty('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  addProperty('cells-molecule-header').propertiesSpherica = {
    className: 'header--core-grey',
    variant: 'primary-alt',
    leftIcon: 'coronita:back-mini',
    leftIconText: 'cells-molecule-header-spherica-back',
    maskConfig: {
      separator: '&bull;&nbsp;',
      chars: visibleChars,
      status: true
    }
  };

  connectionsIn('glomo-operations-dm-mx').global_feature_flag_collection_updated = {
    bind: 'featureFlagCollection'
  };

  delete connectionsOut('cells-operations-list-indicators').navigation_product_detail_to_transfer;
  delete connectionsOut('cells-handle-life-cycle').global_equity_product_detail_reset_page;

  connectionsOut('cells-operations-list-indicators').navigation_product_detail_to_transfer = {
    bind: 'navigation-product-to-transfer'
  };

  addProperty('cells-operations-list-indicators').tagSpherica = 'cells-operations-list-indicators-spherica';
  addProperty('cells-operations-list-indicators').propertiesSpherica = {
    className: 'product-detail',
    loaded: true
  };

  connectionsOut('cells-operations-list-indicators').navigation_product_detail_to_equity_contracts_new_fund = {
    bind: 'navigation-product-to-equity-new-fund',
    link: {
      page: 'equityContractsNewFund'
    }
  };

  setProperty('cells-molecule-header').titleName = 'cells-product-summary-equity-header-title';
  setProperty('cells-operations-list-indicators').defaultLimit = 4;
  setProperty('cells-operations-list-indicators').limit = 4;
  setProperty('cells-operations-list-indicators').viewMore = false;

  base.components.push(
    {
      zone: 'app__main',
      tag: 'glomo-equity-summary-dm',
      type: 'DM',
      properties: {
        isSpherica,
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        privateBankingPortfoliosApiVersion: CONFIG.globalServices.versions.privateBankingPortfolios,
        localCurrency: LOCAL_CURRENCY,
        assistancePhone: CONFIG.phoneNumberContact,
        balancesId: [
          'BANK_INVESTMENTS',
          'DEBT_INVESTMENT_FUNDS',
          'EQUITY_INVESTMENT_FUNDS',
          'STRATEGY_INVESTMENTS',
          'MONEY_MARKET',
          'CAPITAL_MARKET',
          'DEBT_SECURITIES',
          'STRUCTURED_PRODUCTS',
          'OTHERS',
          'CASH'
        ],
        heroImage: './images/errors/error.svg',
        cellsConnections: {
          in: {
            __bridge_app: {
              bind: 'navigation'
            },
            global_financial_overview_details: {
              bind: 'financialOverview'
            },
            navigation_product_detail_to_edit_alias: {
              bind: 'prepareEditEvent'
            },
            navigation_equity_product_detail_back_request: {
              bind: 'reset'
            },
            equity_get_retry: {
              bind: 'getProduct'
            },
            equity_summary_open_launcher_dialer: {
              bind: 'openDialer'
            },
            global_action_launcher_dialer: {
              bind: 'reset'
            },
            global_equity_product_detail_reset_page: {
              bind: 'reset'
            },
            [PAGE_NAME_CHANNEL + '_exit_page']: {
              bind: 'reset'
            },
            [PAGE_NAME_CHANNEL + '_more_info_detail']: {
              bind: 'getLoadedEquity'
            },
            [PAGE_NAME_CHANNEL + '_retry_getting_balances']: {
              bind: 'getProduct'
            },
            navigation_product_detail_to_transfer: {
              bind: 'navigateToEquityTransfers'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            }
          },
          out: {
            equity_detail_response: {
              bind: 'equity-changed',
              analytics: ANALYTICS.HUELLA_PAGEVIEW
            },
            equity_get_operations_product: {
              bind: 'equity-changed'
            },
            equity_header_title_changed: {
              bind: 'contract-header-changed'
            },
            global_product_equity_set_more_info: {
              bind: 'get-loaded-equity'
            },
            global_action_launcher_dialer: {
              bind: 'open-call-action',
              backStep: true
            },
            [PAGE_NAME_CHANNEL + '_handled_equity_balances_item_list']: {
              bind: 'handled-balances-item-list'
            },
            [PAGE_NAME_CHANNEL + '_get_error_on_product_summary']: {
              bind: 'show-equity-error',
              analytics: ANALYTICS.ERROR_PAGEVIEW
            },
            [PAGE_NAME_CHANNEL + '_get_balances_list_error']: {
              bind: 'hide-notification-message-changed'
            },
            [PAGE_NAME_CHANNEL + '_get_balances_list_error_message_btn']: {
              bind: 'get-balances-list-error-message-btn'
            },
            [PAGE_NAME_CHANNEL + '_hide_product_item_list']: {
              bind: 'hide-item-list-changed'
            },
            [PAGE_NAME_CHANNEL + '_title_name_item_list']: {
              bind: 'title-name-item-list'
            },
            set_single_reasonableness_header: {
              bind: 'set-single-reasonableness-header'
            },
            set_single_reasonableness_title: {
              bind: 'set-single-reasonableness-title'
            },
            set_single_reasonableness_text: {
              bind: 'set-single-reasonableness-text'
            },
            [PAGE_NAME_CHANNEL + '_contracts_product']: {
              bind: 'share-equity-contracts-product'
            },
            navigation_equity_error_page: {
              bind: 'open-single-reasonableness-letter-error',
              backStep: true,
              skipHistory: true,
              link: {
                page: 'equityErrorPage'
              }
            },
            navigation_equity_detail_to_edit_alias: {
              bind: 'send-alias-data',
              link: {
                page: 'equityEditAlias',
                params: {
                  continue: 'productType',
                  productId: 'productId'
                }
              }
            },
            navigation_to_equity_tranfers: {
              bind: 'navigate-to-equity-transfers',
              link: {
                page: 'transfers'
              }
            }
          },
          params: {
            productId: 'productId'
          }
        }
      }
    }
  );

  const bbvaManagerEquityContracts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-equity-contracts',
    tagSpherica: 'bbva-manager-equity-contracts-spherica',
    familyPath: '@glomo-web-components/bbva-manager-equity-contracts',
    familyPathSpherica: '@glomo-web-components/bbva-manager-equity-contracts-spherica',
    render: 'litElement',
    properties: {
      mode: 'list',
      host: CONFIG.globalServices.host,
      investmentFundsApiVersion: CONFIG.globalServices.versions.investmentFunds,
      native: !!CONFIG.native,
      showFundDetail: true,
      showFundOperatives: true,
      showFundsList: true,
      enableStorageAndForward: true,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_contracts_product']: {
            bind: 'equity'
          },
          [PAGE_NAME_CHANNEL + '_title_name_item_list']: {
            bind: 'listTitle'
          },
          [PAGE_NAME_CHANNEL + '_handled_equity_balances_item_list']: {
            bind: 'balances'
          },
          [PAGE_NAME_CHANNEL + '_get_error_on_product_summary']: {
            bind: 'error'
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'reset'
          },
          navigation_equity_product_detail_back_request: {
            bind: 'reset'
          },
          global_equity_product_detail_reset_page: {
            bind: 'reset'
          },
          global_action_launcher_dialer: {
            bind: 'reset'
          },
          equityInvestment_get_error: {
            bind: 'error'
          }
        },
        out: {
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
          global_equity_contracts_list_go_to_detail: {
            bind: 'bbva-manager-equity-contracts-go-to-detail-event',
            link: {
              page: 'equityContractsInvestmentDetail'
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
          },
          global_equity_contracts_common_error: {
            bind: 'bbva-manager-equity-contracts-common-error-event'
          },
          open_control_veil: {
            bind: 'open-control-veil-event'
          },
          close_control_veil: {
            bind: 'close-control-veil-event'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            global_equity_contracts_full_error_spherica: {
              bind: 'bbva-manager-equity-contracts-full-error-event'
            }
          }
        },
        remove: {
          out: [
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
            bind: 'handleEquityExitPages'
          }
        },
        out: {
          global_equity_contracts_common_error: {
            bind: 'equity-contracts-common-error-event'
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'equity-reset-external-components-event',
            backStep: true
          }
        }
      }
    }
  };

  const toastSperica = {
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
        },
        out: {}
      }
    }
  };

  base.components = [...base.components,
    bbvaManagerEquityContracts,
    manager,
    toastSperica
  ];

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  addRetryErrors(base)([], { dmName: 'glomo-equity-summary-dm', product: 'equity'});
  addRetryErrors(base)([], { dmName: 'glomo-equity-summary-dm', product: 'equityInvestment'});

  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'discreet_mode' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
