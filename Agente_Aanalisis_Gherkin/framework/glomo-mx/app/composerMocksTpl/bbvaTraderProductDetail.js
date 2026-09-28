'use strict';

module.exports = config => {
  const pageName = 'bbvaTraderProductDetail';
  const {
    useNames,
    getLanguage,
    createSpinner,
    getLocalCurrency,
    createPrefixFromPageName,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      bmeHost,
      requiredToken = 'tsec',
      versions: {
        stockMarkets,
        privateBankingPortfolios,
        customerRequestSessionToken
      }
    },
    native = false,
    nativeIos = false,
    phoneNumberBbvaLine
  } = config;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_btrader')(config);
  const spinner = createSpinner(config);

  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = true;
  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = { className: 'solid-spinner' };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'dark-blue-bg',
      disableEdgeSwipe: true,
      drawerWidth: '100%',
      disableScrollLock: true,
      preventScrollWithOverlay: true,
      headerHeight: headerHeightMinimum,
      headerFixed: true
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      showConfirmInManualScroll: true
    }
  };

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
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          btrader_cancel_order_review_init_page: {
            bind: 'init-page',
            analytics: analytics.btsiFingerprintProductDetail
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bbvaTraderProductDetail = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/stock-information-bbva-trader',
    familyPathSpherica: '@bbva-web-components-widgets/stock-information-bbva-trader',
    tag: 'stock-information-bbva-trader',
    render: 'litElement',
    properties: {
      host,
      locale: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      requiredToken,
      getBalancesApiVersion: privateBankingPortfolios,
      getOrdersApiVersion: stockMarkets,
      phoneNumberAttention: phoneNumberBbvaLine,
      disableRightIconMenu: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'showLoader'
          },
          btrader_simple_code_data: {
            bind: 'getSimpleCode'
          },
          btrader_save_simple_code_data: {
            bind: 'getSaveSimpleCode'
          },
          navigation_btrader_channel: {
            bind: 'setHeaderConfig'
          },
          btrader_id_code_data: {
            bind: 'getIdCode'
          },
          global_edit_alias_success_refresh: {
            bind: 'globalEditAlias'
          },
          navigation_btrader_product_detail_back_request: {
            bind: 'reset'
          },
          purchase_and_sale_navigate_order_list: {
            bind: 'handleNavigationToOrderList'
          },
          purchase_and_sale_close_cancel_receipt: {
            bind: 'handleNavigationToOrderList'
          },
          purchase_and_sale_navigation_to_stock_information: {
            bind: 'handleNavigationToOrderList'
          },
          purchase_and_sale_navigate_order_list_for_error: {
            bind: 'handleNavigationToOrderList'
          },
          btrader_set_local_custom_properties: {
            bind: 'localCustomProperties'
          },
          btrader_init_request: {
            bind: 'init'
          },
          btrader_set_no_content: {
            bind: '_listInvestmentError'
          },
          btrader_get_calculate_shares_amount: {
            bind: '_getCalculateSharesTransactionMarginDataDm'
          },
          btrader_gtm_timezone: {
            bind: 'gmtTime'
          },
          btrader_assets_other_markets: {
            bind: 'assetsOtherMarkets'
          }
        },
        out: {
          btrader_init_values: {
            bind: 'stock-information-bbva-trader-initialize'
          },
          btrader_header_back_step: {
            bind: 'stock-information-bbva-trader-header-close-button-click',
            backStep: true
          },
          btrader_navegation_purchase_and_sale: {
            bind: 'stock-information-bbva-trader-purchase-and-sale-button-click-navigation-external'
          },
          btrader_navegation_cancel_request: {
            bind: 'stock-information-bbva-trader-cancel-order-button-click-navigation-external'
          },
          btrader_set_contract_details: {
            bind: 'stock-information-bbva-trader-contract-detail-purchase-and-sell-request'
          },
          navigation_btrader_detail_to_edit_alias: {
            bind: 'stock-information-bbva-trader-edit-alias-button-click-navigation-external',
            link: {
              page: 'btraderEditAlias',
              params: {
                continue: 'productType',
                productId: 'productId'
              }
            }
          },
          navigation_to_btrader_transfers: {
            bind: 'stock-information-bbva-trader-transfer-button-click-navigation-external',
            link: {
              page: 'transfers'
            }
          },
          btrader_cancel_receipt_navigate_to_success_page: {
            bind: 'receipt-cancel-order'
          },
          btrader_purchase_and_sale_app_on_click_start: {
            bind: 'stock-information-bbva-trader-purchase-and-sale-request-submit'
          },
          btrader_stock_information_issuer_detail: {
            bind: 'stock-information-bbva-trader-investment-detail-open'
          },
          btrader_stock_information_balance_investment: {
            bind: 'stock-information-bbva-trader-info-modal-available-balance-open'
          },
          btrader_stock_information_my_orders_detail: {
            bind: 'stock-information-bbva-trader-update-order-list-initialize'
          },
          btrader_stock_information_order_detail: {
            bind: 'stock-information-bbva-trader-order-list-select'
          },
          analytics_cancel_app_on_click_start: {
            bind: 'stock-information-bbva-trader-cancel-order-button-click-navigation-external',
            analytics: analytics.btcAppOnClickStart
          },
          btrader_select_issuer: {
            bind: 'stock-information-bbva-trader-investment-list-issuer-select'
          },
          btrader_issuer_not_found: {
            bind: 'stock-information-bbva-trader-investment-list-issuer-not-find'
          },
          btrader_issuer_info_graph_daily: {
            bind: 'stock-information-bbva-trader-daily-graph-frequency-select'
          },
          btrader_issuer_info_graph_historic: {
            bind: 'stock-information-bbva-trader-historical-graph-frequency-select'
          },
          global_action_launcher_dialer: {
            bind: 'stock-information-bbva-trader-call-to-line-button-click-navigation-external'
          },
          btrader_back_action: {
            bind: 'navigation-go-back'
          },
          btrader_handle_no_content: {
            bind: 'security-account-investments-api-dm-fetch-error'
          },
          close_control_veil: {
            bind: 'stock-information-bbva-trader-dm-get-balances-respond'
          },
          global_error_tsec_invalid: {
            bind: 'tsec-invalid'
          },
          global_error_tsec_expired: {
            bind: 'tsec-expired'
          },
          global_error_tsec_cancelled: {
            bind: 'tsec-cancelled'
          },
          global_error_high_risk_of_fraud: {
            bind: 'high-risk-of-fraud'
          }
        },
        params: {
          productId: 'productId'
        }
      }
    },
    propertiesSpherica: {
      currencyCode: getLocalCurrency(),
      iOSFixedHeader: nativeIos,
      newCellsConnections: {
        add: {
          in: {
            trading_stocks_switch_components: {
              bind: 'toggleInvestmentDetailVisibility'
            }
          },
          out: {
            btrader_data_graph: {
              bind: 'stock-information-bbva-trader-dm-get-investment-detail-respond'
            },
            close_control_veil: {
              bind: 'stock-information-bbva-trader-start'
            },
            global_open_native_menu: {
              bind: 'stock-information-bbva-trader-burger-menu-click',
              'forward-to-native': true
            }
          }
        }
      }
    }
  };

  const analyticManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-stock-information',
    familyPath: '@glomo-web-components/bbva-analyticmanager-stock-information',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'loginSuccess'
          },
          btrader_purchase_and_sale_app_on_click_start: {
            bind: 'appOnClickStart'
          },
          btrader_stock_information_issuer_detail: {
            bind: 'issuerDetail'
          },
          btrader_stock_information_balance_investment: {
            bind: 'investmentBalance'
          },
          btrader_stock_information_my_orders_detail: {
            bind: 'myOrdersDetail'
          },
          btrader_stock_information_order_detail: {
            bind: 'orderDetail'
          }
        },
        out: {
          btrader_stock_information_issuer_detail_to_get: {
            bind: 'stock-information-page-view-issuer-detail',
            analytics: analytics.btsiFingerprintIssuerDetail
          },
          btrader_stock_information_investment_balance_to_get: {
            bind: 'stock-information-page-view-investment-balance',
            analytics: analytics.btsiFingerprintInvestBalance
          },
          btrader_stock_information_my_orders_detail_to_get: {
            bind: 'stock-information-page-view-my-orders-detail',
            analytics: analytics.btsiFingerprintMyOrdersDetail
          },
          btrader_stock_information_order_detail_to_get: {
            bind: 'stock-information-page-view-order-detail',
            analytics: analytics.btsiFingerprintOrderDetail
          },
          btrader_purchase_analytics_start: {
            bind: 'stock-information-purchase-link-app-on-click-start',
            analytics: analytics.btpAppOnClickStart
          },
          btrader_sale_analytics_start: {
            bind: 'stock-information-sale-link-app-on-click-start',
            analytics: analytics.btsAppOnClickStart
          }
        }
      }
    }
  };

  const glomoEquitySummaryDm = {
    zone: 'app__main',
    tag: 'glomo-equity-summary-dm',
    type: 'DM',
    properties: {
      host,
      native: !!native,
      requiredToken,
      localCurrency: getLocalCurrency(),
      privateBankingPortfoliosApiVersion: privateBankingPortfolios,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          global_financial_overview_success: {
            bind: 'financialOverview'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          btrader_simple_code_data_in_sc: {
            bind: 'getProductBtrader'
          },
          [pageName + '_retry_getting_balances_btrader']: {
            bind: 'getProductBtrader'
          },
          ['equity_retry_getting_balances']: {
            bind: 'getProduct'
          }
        },
        out: {
          btrader_simple_code_data: {
            bind: 'send-simplecode-data'
          },
          btrader_validate_simple_code_data: {
            bind: 'save-simplecode-data'
          }
        },
        params: {
          productId: 'productId'
        }
      }
    }
  };

  const controllerTrandingStock = {
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-controller-bbva-trader',
    tag: 'bbva-controller-bbva-trader',
    type: 'DM',
    render: 'litElement',
    properties: {
      host,
      bmeHost,
      native,
      requiredToken,
      requestSessionTokenApiVersion: customerRequestSessionToken,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'getSessionRequestToken'
          },
          btrader_select_issuer: {
            bind: 'getDataInvestmentDetail'
          },
          btrader_issuer_not_found: {
            bind: 'getDataInvestmentDetail'
          },
          btrader_issuer_info_graph_daily: {
            bind: 'getDataInvestmentDetail'
          },
          btrader_issuer_info_graph_historic: {
            bind: 'getDataGraphHistoric'
          },
          btrader_header_back_step: {
            bind: 'cleanData'
          },
          btrader_back_action: {
            bind: 'validateBackAction'
          },
          btrader_set_contract_details: {
            bind: 'setContractDetails'
          },
          btrader_navegation_purchase_and_sale: {
            bind: 'setPurchaseAndSaleLocalCustomProperties'
          },
          btrader_navegation_cancel_request: {
            bind: 'navigateToTradingStocksPurchaseAndSaleCancel'
          },
          btrader_handle_no_content: {
            bind: 'handleNoContent'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          global_login_timer: {
            bind: 'setLoginTimer'
          },
          purchase_and_sale_header_back_step: {
            bind: 'openWebSocketInvestmentDetail'
          },
          global_financial_overview_success: {
            bind: 'financialOverview'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          __bridge_page_bbvaTraderProductDetail: {
            bind: 'recoveryDataContract'
          },
          btrader_validate_simple_code_data: {
            bind: 'simpleCode'
          },
          onboarding_bbva_trader_btrader_simple_code: {
            bind: 'simpleCode'
          }
        },
        out: {
          btrader_bme_token: {
            bind: 'bbva-controller-trading-stock-token-update'
          },
          btrader_set_local_custom_properties: {
            bind: 'bbva-controller-trading-stock-local-custom-properties-update'
          },
          btrader_set_no_content: {
            bind: 'stock-information-bbva-trader-dm-handle-no-content-error'
          },
          btrader_init_request: {
            bind: 'bbva-controller-trading-stock-init-request'
          },
          btrader_set_contract_alias: {
            bind: 'bbva-controller-trading-stocks-alias'
          },
          btrader_set_contract_privateBankingPortfolio: {
            bind: 'bbva-controller-trading-stocks-private-banking-portfolio-id'
          },
          btrader_navigate_purchase_and_sale: {
            bind: 'bbva-controller-trading-stock-purchase-and-sale-navigation',
            link: {
              page: 'bbvaTraderPurchaseSale'
            }
          },
          btrader_cancel_order_data: {
            bind: 'trading-stocks-purchase-and-sale-cancel-navigation',
            link: {
              page: 'bbvaTraderPurchaseSale'
            }
          },
          btrader_init_purchase_and_sale: {
            bind: 'trading-stocks-purchase-and-sale-init-trading'
          },
          btrader_key_settings: {
            bind: 'stock-information-bbva-trader-dm-param-settings'
          },
          btrader_get_calculate_shares_amount: {
            bind: 'stock-information-bbva-trader-dm-handle-no-content-purchase'
          },
          btrader_gtm_timezone: {
            bind: 'bbva-controller-trading-stock-gtm-timezone-update'
          },
          global_logout_sesion_expiration: {
            bind: 'bbva-controller-trading-stock-timeout-expired'
          },
          global_stop_app_logoff_time: {
            bind: 'bbva-controller-trading-stock-stop-session-timeout'
          },
          global_start_session_end_time: {
            bind: 'bbva-controller-trading-stock-start-session-timeout'
          },
          btrader_assets_other_markets: {
            bind: 'bbva-controller-trading-stock-assets-other-markets'
          },
          navigation_btrader_channel: {
            bind: 'bbva-controller-trading-stock-recovery-data-contract'
          },
          btrader_save_simple_code_data: {
            bind: 'bbva-controller-trading-stock-simplecode'
          },
          btrader_id_code_data: {
            bind: 'bbva-controller-trading-stock-idcode'
          }
        },
        params: {
          productId: 'productId'
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            btrader_data_graph: {
              bind: 'validateDataGraph'
            }
          }
        }
      }
    }
  };

  const toastAlert = {
    zone: 'app__overlay',
    tag: 'cells-modal-alert',
    tagSpherica: 'cells-bottom-modal-message-spherica',
    type: 'UI',
    attributes: {
      inert: true
    },
    propertiesSpherica: {
      type: 'success',
      icon: 'coronita:right',
      iconSize: '30',
      autoHide: true,
      fullHeight: false,
      time: 3000,
      message: 'cells-btrader-edit-alias-bottom-modal-message-success',
      messageDisabled: true,
      cellsConnections: {
        in: {
          show_toast_success_save_alias: {
            bind: 'open'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/bbva-trader-product-detail'
    },
    pages,
    template: template,
    components: [spinner, handleLifeCycle, bbvaTraderProductDetail, glomoEquitySummaryDm,
      controllerTrandingStock, analyticManager, toastAlert]
  };

  return sphericaPageUtils.spherize(base);
};
