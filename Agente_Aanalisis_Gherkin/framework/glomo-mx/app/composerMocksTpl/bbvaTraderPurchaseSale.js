'use strict';

module.exports = (config) => {
  const pageName = 'bbvaTraderPurchaseSale';
  const {
    useNames,
    getLanguage,
    createPrefixFromPageName,
    getLocalCurrency,
    pluginDatePicker,
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      bmeHost,
      requiredToken = 'tsec',
      publicSettingsHost,
      publicSettingsId,
      versions: {
        stockMarkets,
        privateBankingPortfolios,
        customerRequestSessionToken
      }
    },
    native = false,
    nativeIos = false
  } = config;
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const datePicker = pluginDatePicker(config);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)('bbvaTraderPurchaseSale');
  const analytics = require('./analytics/_btrader')(config);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'dark-blue-bg',
      disableEdgeSwipe: true,
      drawerWidth: '100%',
      disableScrollLock: true,
      preventScrollWithOverlay: true
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-template-coronita-spherica'
    })
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
          btrader_review_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          btrader_get_order_types: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      sharedReceiptStyles: {
        section: {
          'margin-bottom': '5rem'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('_share_receipt')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('_share_receipt_purchase_or_sale')]: {
            bind: 'captureReceipt'
          },
          btrader_review_init_page: {
            bind: 'reset'
          },
          btrader_receipt_navigate_to_success_page: {
            bind: 'result'
          },
          btrader_cancel_order_review_init_page: {
            bind: 'reset'
          },
          btrader_cancel_receipt_navigate_to_success_page: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const bbvaTraderPurchaseSale = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/trading-stocks-purchase-and-sale',
    familyPathSpherica: '@bbva-web-components-widgets/trading-stocks-purchase-and-sale',
    tag: 'trading-stocks-purchase-and-sale',
    render: 'litElement',
    properties: {
      country: 'mx',
      currency: getLocalCurrency(),
      language: getLanguage(),
      host,
      native,
      requiredToken,
      publicSettingsHost: publicSettingsHost,
      publicSettingsId: publicSettingsId,
      investmentDetailApiVersion: stockMarkets,
      orderSimulationApiVersion: stockMarkets,
      createOrderApiVersion: privateBankingPortfolios,
      calculateSharesTransactionMarginApiVersion: privateBankingPortfolios,
      fixNativeCalendar: nativeIos,
      cellsConnections: {
        in: {
          btrader_set_order_types: {
            bind: 'orderTypeList'
          },
          btrader_init_purchase_and_sale: {
            bind: 'initTrading'
          },
          btrader_navigate_purchase_and_sale: {
            bind: 'issuingEntity'
          },
          btrader_cancel_order_data: {
            bind: 'issuingEntity'
          },
          btrader_set_contract_privateBankingPortfolio: {
            bind: 'privateBankingPortfolioId'
          },
          btrader_set_contract_alias: {
            bind: 'aliasContract'
          },
          global_user_id: {
            bind: 'customerId'
          },
          btrader_bme_token: {
            bind: 'token'
          },
          btrader_set_local_custom_properties: {
            bind: 'localCustomProperties'
          },
          btrader_set_calendar_date: {
            bind: 'updateDateCalendarMultistep'
          },
          btrader_key_settings: {
            bind: 'publicSettingsKey'
          },
          btrader_gtm_timezone: {
            bind: 'gmtTime'
          }
        },
        out: {
          global_nativeconnector_datepicker_launch: {
            bind: 'trading-stocks-purchase-and-sale-calendar-show'
          },
          purchase_and_sale_header_back_step: {
            bind: 'trading-stocks-purchase-and-sale-navigation-purchase-and-sale-go-back',
            backStep: true,
            cleanUntil: 'bbvaTraderProductDetail'
          },
          purchase_and_sale_navigation_to_stock_information: {
            bind: 'trading-stocks-purchase-and-sale-exit-operative',
            link: {
              page: 'bbvaTraderProductDetail',
              skipHistory: true
            }
          },
          purchase_and_sale_close_cancel_receipt: {
            bind: 'trading-stocks-purchase-and-sale-exit-cancel-operative',
            link: {
              page: 'bbvaTraderProductDetail',
              skipHistory: true
            }
          },
          purchase_and_sale_navigate_order_list: {
            bind: 'trading-stocks-purchase-and-sale-order-list-navigate',
            link: {
              page: 'bbvaTraderProductDetail',
              cleanUntil: 'bbvaTraderProductDetail'
            }
          },
          [getChannelName('_share_receipt_purchase_or_sale')]: {
            bind: 'trading-stocks-purchase-and-sale-receipt-info-capture'
          },
          [getChannelName('_share_receipt')]: {
            bind: 'trading-stocks-purchase-and-sale-receipt-cancel-order-respond'
          },
          btrader_cancel_receipt_navigate_to_success_page: {
            bind: 'trading-stocks-purchase-and-sale-receipt-cancel-order-respond'
          },
          btrader_receipt_navigate_to_success_page: {
            bind: 'trading-stocks-purchase-and-sale-receipt-info-capture'
          },
          bbva_trader_simulate_error: {
            bind: 'trading-stocks-purchase-and-sale-dm-api-dm-simulation-error'
          },
          trading_stocks_purchase_app_page_visit: {
            bind: 'trading-stocks-purchase-and-sale-purchase-operative-initialize'
          },
          trading_stocks_purchase_app_started: {
            bind: 'trading-stocks-purchase-and-sale-option-select'
          },
          trading_stocks_purchase_and_sale_app_step_selection: {
            bind: 'trading-stocks-purchase-and-sale-expandible-step-continue'
          },
          trading_stocks_purchase_app_step_confirmation: {
            bind: 'trading-stocks-purchase-and-sale-order-data-simulate'
          },
          trading_stocks_purchase_and_sale_app_completed: {
            bind: 'trading-stocks-purchase-and-sale-create-order-respond'
          },
          trading_stocks_purchase_app_footprint_change_validity: {
            bind: 'trading-stocks-purchase-and-sale-calendar-open'
          },
          trading_stocks_purchase_app_footprint_commission: {
            bind: 'trading-stocks-purchase-and-sale-order-detail-comission-info-show'
          },
          trading_stocks_sale_app_page_visit: {
            bind: 'trading-stocks-purchase-and-sale-sale-operative-initialize'
          },
          trading_stocks_sale_app_started: {
            bind: 'trading-stocks-purchase-and-sale-expandible-step-continue'
          },
          trading_stocks_sale_app_step_selection: {
            bind: 'trading-stocks-purchase-and-sale-expandible-step-continue'
          },
          trading_stocks_sale_app_step_confirmation: {
            bind: 'trading-stocks-purchase-and-sale-order-data-simulate'
          },
          trading_stocks_sale_app_footprint_change_validity: {
            bind: 'trading-stocks-purchase-and-sale-calendar-open'
          },
          trading_stocks_sale_app_footprint_commission: {
            bind: 'trading-stocks-purchase-and-sale-order-detail-comission-info-show'
          },
          trading_stocks_cancel_app_page_visit: {
            bind: 'trading-stocks-purchase-and-sale-sale-cancel-operative'
          },
          trading_stocks_cancel_order_confirm_accept: {
            bind: 'trading-stocks-purchase-and-sale-cancel-order-confirm'
          },
          trading_stocks_cancel_order_link_click_exit: {
            bind: 'trading-stocks-purchase-and-sale-cancel-order-link-click'
          },
          trading_stocks_cancel_order_close_icon_click_close: {
            bind: 'trading-stocks-purchase-and-sale-cancel-order-close-icon-click'
          },
          trading_stocks_cancel_app_completed: {
            bind: 'trading-stocks-purchase-and-sale-cancel-order-respond'
          },
          purchase_and_sale_navigate_order_list_for_error: {
            bind: 'trading-stocks-purchase-and-sale-create-order-error-modal-close',
            link: {
              page: 'bbvaTraderProductDetail',
              skipHistory: true
            }
          }
        }
      }
    },
    propertiesSpherica: {
      localCurrency: getLocalCurrency(),
      currencyCode: getLocalCurrency(),
      newCellsConnections: {
        add: {
          out: {
            purchase_and_sale_navigation_to_stock_information: {
              bind: 'trading-stocks-purchase-and-sale-operative-exit',
              link: {
                page: 'bbvaTraderProductDetail',
                cleanUntil: 'bbvaTraderProductDetail'
              }
            },
            purchase_and_sale_close_cancel_receipt: {
              bind: 'trading-stocks-purchase-and-sale-exit-operative-cancel',
              link: {
                page: 'bbvaTraderProductDetail',
                cleanUntil: 'bbvaTraderProductDetail'
              }
            },
            trading_stocks_cancel_app_page_visit: {
              bind: 'trading-stocks-purchase-and-sale-sale-operative-cancel'
            },
            trading_stocks_switch_components: {
              bind: 'trading-stocks-purchase-and-sale-component-switch'
            }
          }
        },
        remove: {
          out: [
            'purchase_and_sale_navigate_order_list'
          ]
        }
      }
    }
  };

  const analyticPurchaseSaleManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-trading',
    familyPath: '@glomo-web-components/bbva-analyticmanager-trading',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'loginSuccess'
          },
          trading_stocks_purchase_app_page_visit: {
            bind: 'tradingStocksPurchaseAppPageVisit'
          },
          trading_stocks_purchase_app_started: {
            bind: 'tradingStocksPurchaseAppStarted'
          },
          trading_stocks_purchase_and_sale_app_step_selection: {
            bind: 'tradingStocksPurchaseAndSaleAppStepSelection'
          },
          trading_stocks_purchase_app_step_confirmation: {
            bind: 'tradingStocksPurchaseAppStepConfirmation'
          },
          trading_stocks_purchase_and_sale_app_completed: {
            bind: 'tradingStocksPurchaseAndSaleAppCompleted'
          },
          trading_stocks_purchase_app_footprint_change_validity: {
            bind: 'tradingStocksPurchaseAppFootprintChangeValidity'
          },
          trading_stocks_purchase_app_footprint_commission: {
            bind: 'tradingStocksPurchaseAppFootprintCommission'
          },
          trading_stocks_sale_app_page_visit: {
            bind: 'tradingStocksSaleAppPageVisit'
          },
          trading_stocks_sale_app_started: {
            bind: 'tradingStocksSaleAppStarted'
          },
          trading_stocks_sale_app_step_simulate: {
            bind: 'tradingStocksPurchaseAppStepConfirmation'
          },
          trading_stocks_sale_app_footprint_change_validity: {
            bind: 'tradingStocksPurchaseAppFootprintChangeValidity'
          },
          trading_stocks_sale_app_footprint_commission: {
            bind: 'tradingStocksPurchaseAppFootprintCommission'
          },
          trading_stocks_cancel_app_page_visit: {
            bind: 'tradingStocksCancelAppPageVisit'
          },
          trading_stocks_cancel_order_confirm_accept: {
            bind: 'tradingStocksCancelOrderConfirmAccept'
          },
          trading_stocks_cancel_order_link_click_exit: {
            bind: 'tradingStocksCancelOrderLinkClickExit'
          },
          trading_stocks_cancel_order_close_icon_click_close: {
            bind: 'tradingStocksCancelOrderCloseIconClickClose'
          },
          trading_stocks_cancel_app_completed: {
            bind: 'tradingStocksCancelAppCompleted'
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
        out: {
          btrader_trading_stock_purchase_app_page_visit: {
            bind: 'trading-stocks-purchase-app-page-visit',
            analytics: analytics.btpAppPageVisit
          },
          btrader_trading_stock_purchase_app_started: {
            bind: 'trading-stocks-purchase-started',
            analytics: analytics.btpAppStarted
          },
          btrader_trading_stock_purchase_app_step_selection: {
            bind: 'trading-stocks-purchase-step-selection',
            analytics: analytics.btpAppStepSelection
          },
          btrader_trading_stock_purchase_app_step_confirmation: {
            bind: 'trading-stocks-purchase-step-confirmation-modal',
            analytics: analytics.btpAppStepConfirmation
          },
          btrader_trading_stock_purchase_app_completed: {
            bind: 'trading-stocks-purchase-create-order-respond',
            analytics: analytics.btpAppCompleted
          },
          btrader_trading_stock_purchase_app_footprint_change_validity: {
            bind: 'trading-stocks-purchase-calendar-open',
            analytics: analytics.btpFootprintChangeCurrency
          },
          btrader_trading_stock_purchase_app_footprint_commission: {
            bind: 'trading-stocks-purchase-info-modal-commission',
            analytics: analytics.btpFootprintCommission
          },
          btrader_trading_stock_sale_app_page_visit: {
            bind: 'trading-stocks-sales-app-page-visit',
            analytics: analytics.btsAppPageVisit
          },
          btrader_trading_stock_sale_app_started: {
            bind: 'trading-stocks-sales-app-started',
            analytics: analytics.btsAppStarted
          },
          btrader_trading_stock_sale_app_step_selection: {
            bind: 'trading-stocks-sales-step-selection',
            analytics: analytics.btsAppStepSelection
          },
          btrader_trading_stock_sale_app_step_confirmation: {
            bind: 'trading-stocks-sales-step-confirmation-modal',
            analytics: analytics.btsAppStepConfirmation
          },
          btrader_trading_stock_sale_app_completed: {
            bind: 'trading-stocks-sale-step-complete',
            analytics: analytics.btsAppCompleted
          },
          btrader_trading_stock_sale_footprint_change_validity: {
            bind: 'trading-stocks-sales-calendar-open',
            analytics: analytics.btsFootprintChangeCurrency
          },
          btrader_trading_stock_sale_app_footprint_commission: {
            bind: 'trading-stocks-sales-info-modal-commission',
            analytics: analytics.btsFootprintCommission
          },
          btrader_trading_stock_cancel_app_page_visit: {
            bind: 'trading-stocks-cancel-page-visit',
            analytics: analytics.btcAppPageVisit
          },
          btrader_trading_stock_cancel_app_started_order_confirm: {
            bind: 'trading-stocks-cancel-order-confirm',
            analytics: analytics.btcAppStarted
          },
          btrader_trading_stock_cancel_app_started_order_link_click: {
            bind: 'trading-stocks-cancel-order-link-click',
            analytics: analytics.btcAppStarted
          },
          btrader_trading_stock_cancel_app_started_order_close_icon_click: {
            bind: 'trading-stocks-cancel-order-close-icon-click',
            analytics: analytics.btcAppStarted
          },
          btrader_trading_stock_cancel_app_completed: {
            bind: 'trading-stocks-cancel-order-complete',
            analytics: analytics.btcAppCompleted
          }
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
      native,
      bmeHost,
      requiredToken,
      requestSessionTokenApiVersion: customerRequestSessionToken,
      cellsConnections: {
        in: {
          global_nativeconnector_date_picker_launch_success: {
            bind: 'datePickerLaunchSuccess'
          },
          bbva_trader_simulate_error: {
            bind: 'simulateError'
          },
          btrader_get_order_types: {
            bind: 'getOrderTypes'
          }
        },
        out: {
          btrader_set_calendar_date: {
            bind: 'bbva-controller-trading-stocks-date-selected'
          },
          btrader_set_order_types: {
            bind: 'bbva-controller-trading-stocks-order-types'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        remove: {
          in: [
            'bbva_trader_simulate_error'
          ]
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/bbva-trader-purchase-sale'
    },
    pages,
    template,
    components: [
      {
        ...createSpinner(config),
        tagSpherica: 'cells-spinner-veil-spherica',
        propertiesSpherica: {
          className: 'solid-spinner'
        }
      },
      handleLifeCycle,
      shareReceipt,
      bbvaTraderPurchaseSale,
      controllerTrandingStock,
      analyticPurchaseSaleManager
    ]
  };

  if (config.nativeShell) {
    base.components.push(datePicker);
  }

  return sphericaPageUtils.spherize(base);
};
