'use strict';

module.exports = PRODUCT => CONFIG => {
  const utils = require('../common/helpers/_utils');

  const isNativeIos = CONFIG.nativeIos || false;
  const LOCAL_CURRENCY = utils.getLocalCurrency();
  const COUNTRY = utils.getCountry();
  const productsWithHolds =  false;
  const LANGUAGE = utils.getLanguage();
  const addCommonErrors = require('../common/commonErrors/_dm-common-errors');

  const base = {
    hash: [PRODUCT, 'transactions', COUNTRY, CONFIG.environment].join('-'),
    currentPage: {
      url: PRODUCT + '/:productId/transactions/',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        delayScroll: 0,
        fixOffsetScroll: 0,
        headerFixed: true,
        handleStoppedScroll: true,
        preventScrollWithOverlay: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            ['global_' + PRODUCT + '_transactions_searcher_selected_tags']: {
              bind: 'recalculateHeader'
            },
            [PRODUCT + '_product_transactions_init_page']: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            [PRODUCT + '_transactions_template_scroll_complete']: {
              bind: 'set-scroll-bottom-event'
            },
            [PRODUCT + '_transactions_template_scroll']: {
              bind: 'template-content-scroll'
            },
            [PRODUCT + '_transactions_template_scroll_stop']: {
              bind: 'stop-template-content-scroll'
            }
          }
        }
      }
    },

    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT + 'Transactions',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cache: [
            PRODUCT + 'TransactionDetail',
            PRODUCT + 'TransactionsSearcher'
          ],
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT + 'Transactions']: {
                bind: 'init'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              [PRODUCT + '_product_transactions_init_page']: {
                bind: 'init-page'
              },
              ['global_' + PRODUCT + '_product_transactions_reset_page']: {
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
        tag: 'cells-molecule-header',
        type: 'UI',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          rightIcon: 'coronita:help',
          titleName: 'cells-transactions-list-title',
          cellsConnections: {
            in: {},
            out: {
              ['navigation_'  + PRODUCT + '_product_transactions_back_request']: {
                bind: 'click-left-button',
                backStep: true
              },
              ['transactions_' + PRODUCT + '_info_icon_help_pressed']: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-icon-message',
        properties: {
          className: 'transactions-modal',
          type: 'info',
          icon: 'coronita:info',
          iconSize: '16',
          closeIcon: 'coronita:close',
          message: 'cells-transactions-icon-message-all-transactions',
          cellsConnections: {
            in: {
              card_hide_modal: {
                bind: 'hide'
              }
            },
            out: {
              card_hide_modal: {
                bind: 'glomo-icon-close-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-transactions',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          showIconMessageEmptyList: true,
          addClassEmptyList: true,
          className: 'transactionsViewAll',
          imageEmptyList: './images/spaceman.svg',
          productType: PRODUCT,
          showButtonSearcher: false,
          transactionGroupDateFormat: utils.getShortFormatDate(),
          transactionCurrentYearDateFormat: utils.getTransactionCurrentYearDateFormat(),
          continue: PRODUCT + 'Transactions',
          hideTitleSettled: true,
          hidePendings: true,
          concatPendingsSettleds: true,
          showNoMoreTransactions: true,
          cellsConnections: {
            in: {
              ['global_' + PRODUCT + '_set_product_id']: {
                bind: 'productId'
              },
              [PRODUCT  + '_set_product_id_ui']: {
                bind: 'productId'
              },
              ['global_' + PRODUCT + '_set_view_more_transactions']: {
                bind: 'setProperties'
              },
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              navigation_product_account_detail_to_more_info: {
                bind: 'setProperties'
              },
              navigation_product_detail_to_more_info: {
                bind: 'setProperties'
              },
              [PRODUCT + '_reset_transactions_list']: {
                bind: 'reset'
              },
              [PRODUCT  + '_product_set_transactions']: {
                bind: 'addTransactions'
              },
              [PRODUCT  + '_product_set_transactions_pendings']: {
                bind: 'pendings'
              },
              ['global_' + PRODUCT + '_product_transactions_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + '_product_transaction_bottom_spinner']: {
                bind: 'manageSpinner'
              },
              [PRODUCT + '_result_no_pagination']: {
                bind: 'manageSpinner'
              },
              [PRODUCT + '_transactions_template_scroll']: {
                bind: 'addOpacitySearcherButton'
              },
              [PRODUCT + '_transactions_template_scroll_stop']: {
                bind: 'removeOpacitySearcherButton'
              },
              [PRODUCT  + '_product_set_transactions_pagination']: {
                bind: 'pagination'
              },
              [PRODUCT + '_product_get_transactions_error']: {
                bind: 'showMessageLoadError'
              },
              [PRODUCT + '_transactions_searcher_searching']: {
                bind: 'searching'
              },
              [PRODUCT + '_transactions_searcher_searching_reset_list']: {
                bind: 'settleds'
              },
              global_reload_card_transaction_detail_list: {
                bind: 'lastTransactionRedeemed'
              }
            },
            out: {
              [PRODUCT + '_product_retry_get_transactions']: {
                bind: 'retry-get-transactions'
              },
              ['global_' + PRODUCT + '_transactions_searcher_selected_filters_retry']: {
                bind: 'retry-search-transactions'
              },
              global_reload_card_transaction_detail: {
                bind: 'reset-last-transaction-redeemed'
              },
              validation_to_transaction_detail: {
                bind: 'transaction-tap'
              },
              ['global_' + PRODUCT + '_transaction_detail']: {
                bind: 'transaction-detail'
              },
              navigation_to_transactions_searcher: {
                bind: 'navigation-to-transactions-searcher',
                link: {
                  page: PRODUCT + 'TransactionsSearcher',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-transactions-dm-mx',
        familyPath: 'glomo-transactions-dm',
        properties: {
          host: CONFIG.globalServices.host,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          addTransactionsType: true,
          productType: PRODUCT,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          language: LANGUAGE,
          native: !!CONFIG.native,
          transactionsListCached: true,
          hidePendings: true,
          moreTransactions: true,
          monthLimit: 3,
          pageSize: 10,
          concatPendingsSettleds: true,
          capitalizeTransactionTitle: true,
          cellsConnections: {
            in: {
              ['global_' + PRODUCT + '_set_product_id']: {
                bind: 'productId'
              },
              ['global_' + PRODUCT + '_set_view_more_transactions']: {
                bind: 'setProperties'
              },
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              ['global_' + PRODUCT + '_transactions_searcher_retrieve_transactions']: {
                bind: 'getTransactions'
              },
              [PRODUCT + '_product_transactions_init_page']: {
                bind: 'init'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              ['global_' + PRODUCT + '_product_transactions_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + '_transactions_template_scroll_complete']: {
                bind: 'setScrollBottomTransactions'
              },
              [PRODUCT + '_transactions_template_scroll_stop']: {
                bind: 'setScrollStopTransactions'
              },
              [PRODUCT + '_product_transactions_fetch_holds']: {
                bind: 'getHoldsWithBalance'
              },
              [PRODUCT + '_product_retry_get_transactions']: {
                bind: 'getTransactions'
              },
              ['global_transactions_searcher_' + PRODUCT + '_clean_filters']: {
                bind: 'getTransactions'
              },
              [PRODUCT +  '_product_detail_pagination']: {
                bind: 'pagination'
              },
              ['global_' + PRODUCT + '_transactions_set_transactions']: {
                bind: 'setTransactions'
              },
              ['global_' + PRODUCT + '_transactions_pagination']: {
                bind: 'pagination'
              },
              ['transactions_' + PRODUCT + '_info_icon_help_pressed']: {
                bind: 'openModalInfoTransactionsCard'
              },
              card_hide_modal: {
                bind: 'SaveToLocalStorage'
              },
              validation_to_transaction_detail: {
                bind: 'validationSpei'
              }
            },
            out: {
              [PRODUCT  + '_set_product_id_ui']: {
                bind: 'set-product-id-from-dm'
              },
              [PRODUCT  + '_product_set_transactions_pendings']: {
                bind: 'pendings-changed'
              },
              [PRODUCT  + '_product_set_transactions_pagination']: {
                bind: 'changed-pagination'
              },
              [PRODUCT  + '_product_set_transactions']: {
                bind: 'set-transactions'
              },
              [PRODUCT + '_product_transaction_bottom_spinner']: {
                bind: 'loading-changed'
              },
              [PRODUCT + '_product_get_transactions_error']: {
                bind: PRODUCT === 'card' || PRODUCT === 'installment' ? 'error-on-get-card-transactions' : 'error-on-get-transactions'
              },
              [PRODUCT + '_reset_transactions_list']: {
                bind: 'reset-transactions-list'
              },
              global_generic_error: {
                bind: 'error-on-get-holds-balances'
              },
              global_generic_holds_error: {
                bind: 'error-on-get-holds'
              },
              global_transactions_list_modal_info_card: {
                bind: 'cells-transactions-modal-info-card'
              },
              [PRODUCT + 'open_modal']: {
                bind: 'spei-movement-stand-in'
              },
              [PRODUCT + '_heading_modal']: {
                bind: 'panel-heading'
              },
              [PRODUCT + '_title_modal']: {
                bind: 'panel-title'
              },
              [PRODUCT + 'text_modal']: {
                bind: 'panel-text'
              }

            },
            params: {
              billingPeriod: 'billingPeriod',
              cardName: 'cardName',
              cardReducedNumber: 'cardReducedNumber'
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        container: true,
        properties: {
          id: 'slotcontent',
          className: 'hide-padding-container',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal',
          hideContentPaddingTop: true,
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              [PRODUCT + 'open_modal']: {
                bind: 'open'
              },
              [PRODUCT + '_heading_modal']: {
                bind: 'headerText'
              },
              [PRODUCT + 'close_modal']: {
                bind: 'close'
              }
            }
          }
        }
      },
      {
        zone: 'slotcontent.slot-title',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          microillustration: 'info',
          cellsConnections: {
            in: {
              [PRODUCT + '_title_modal']: {
                bind: 'heading'
              },
              [PRODUCT + 'text_modal']: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'slotcontent.slot-footer',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--2 u-margin-bottom--2',
          text: 'button-moal-stand-in',
          cellsConnections: {
            out: {
              [PRODUCT + 'close_modal']: {
                bind: 'click'
              }
            }
          }
        }
      }
    ]
  };

  let dms = [];

  if (productsWithHolds) {
    const setProperty = utils.setProperty(base);
    // eslint-disable-next-line no-unused-vars
    const connectionsIn = utils.connectionsIn(base);
    const connectionsOut = utils.connectionsOut(base);

    setProperty('glomo-transactions-dm-' + COUNTRY).enableHolds = true;
    connectionsOut('glomo-transactions-dm-' + COUNTRY)[PRODUCT  + '_product_set_transactions_holds'] = {
      bind: 'holds-changed'
    };
    connectionsOut('glomo-transactions-dm-' + COUNTRY)[PRODUCT  + '_product_set_transactions_holds_balances'] = {
      bind: 'holds-balances-changed'
    };

    base.components.splice(1, 0, {
      zone: 'app__main',
      tag: 'cells-step-transactions',
      type: 'UI',
      properties: {
        localCurrency: LOCAL_CURRENCY,
        className: 'withHoldings',
        iconCellsAtomIconClose: 'coronita:collapse',
        iconCellsAtomIconOpen: 'coronita:expand',
        cellsConnections: {
          in: {
            [PRODUCT  + '_product_set_transactions_holds']: {
              bind: 'transactions'
            },
            [PRODUCT  + '_product_set_transactions_holds_balances']: {
              bind: 'balances'
            },
            ['global_' + PRODUCT + '_product_detail_reset_page']: {
              bind: 'reset'
            },
            ['global_' + PRODUCT + '_product_transactions_reset_page']: {
              bind: 'reset'
            }
          },
          out: {
            navigation_transactions_to_hold_detail: {
              bind: 'transaction-tap'
            },
            [PRODUCT + '_product_transactions_fetch_holds']: {
              bind: 'refresh-transactions-list'
            }
          }
        }
      }
    });
  }

  base.components.push(...dms);

  addCommonErrors(base.components)();

  return base;
};
