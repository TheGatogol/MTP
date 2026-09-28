'use strict';

module.exports = CONFIG => {
  const {
    nativeIos = false,
    native,
    globalServices: {
      requiredToken,
      host,
      versions: { investmentFundsApiVersion, investmentFundsApiVersionV0, calculate }
    }
  } = CONFIG;
  const pageName = 'fundTransactionFundsContribution';
  const { getLocalCurrency, getLanguage, createSpinner } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {cellsConnectionStatus} = require('./common/_cross-components');
  const analytics = require('./analytics/_fundTransactionFundsContribution')(CONFIG);

  let base = {};

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      componentName: 'cells-template-coronita-spherica',
      override: {
        iOSFixedHeader: nativeIos,
        className: nativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'header--core'
      }
    }
  };

  const receiptComponent = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: getLanguage(),
      country: 'mx',
      sharedReceiptStyles: {
        info: {
          'padding': '0',
          'margin-top': '1rem',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0',
          'font-size': 'var(--cells-text-size-12, 1rem)',
          'text-align': 'left',
          'background-color': 'none'
        }
      },
      cellsConnections: {
        in: {
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_SEND_PAYLOAD: {
            bind: 'result'
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_SEND_LINK_PAYLOAD: {
            bind: 'captureReceipt'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };
  const fundsContribution = {
    zone: 'app__main',
    tag: 'fund-transaction-servicing-funds-contribution-mx',
    familyPath: '@glomo-web-components/fund-transaction-servicing-funds-contribution-mx',
    render: 'litElement',
    type: 'UI',
    properties: {
      pageName,
      host,
      native,
      requiredToken,
      requiredOTP: true,
      otpId: pageName,
      country: 'mx',
      currency: getLocalCurrency(),
      language: getLanguage(),
      iOSFixedHeader: nativeIos,
      numberAttempts: 3,
      tokenName: requiredToken,
      investmentFundApiVersion: investmentFundsApiVersion,
      investmentFundSubscriptionsApiVersion: investmentFundsApiVersionV0,
      investmentFundSubscriptionsSimulateApiVersion: investmentFundsApiVersionV0,
      calculatorApiVersion: calculate,
      investmentAmountMultiplierFactor: '3',
      fundLiquidityType: 'MISMO DIA',
      templateReceiptId: 'investmentFunds',
      operationTypeWithdrawal: 'WITHDRAWAL',
      receiptKeys: {
        title: 'cells-funds-hiring-success-screen-title',
        amountLabel: 'cells-funds-hiring-investment-amount-title',
        account: 'cells-share-operative-receipt-funds-operation-account',
        operationType: 'cells-share-operative-receipt-funds-operation-type',
        contractNumber: 'cells-share-operative-receipt-funds-contract-number',
        fundName: 'cells-share-operative-receipt-funds-fund-name',
        fundKey: 'cells-share-operative-receipt-funds-fund-key',
        fundLiquidity: 'cells-share-operative-receipt-funds-liquidity',
        fundSerie: 'cells-share-operative-receipt-funds-serial',
        folio: 'cells-share-operative-receipt-funds-operation-folio'
      },
      receiptTitle: 'fund-transaction-servicing-funds-contribution-mx-dm-receipt-title',
      cellsConnections: {
        in: {
          __bridge_page_fundTransactionFundsContribution: {
            bind: 'init'
          },
          global_user_id: {
            bind: 'customerId'
          },
          FUND_FUNDS_OPERATION_DATA_CONTRIBUTION: {
            bind: 'dataInvestmentFund'
          },
          sign_modal_close_reset: {
            bind: 'openGenericModal'
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_NAVIGATE_TO_BACK: {
            bind: 'resetInputValue'
          }
        },
        out: {
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_SEND_PAYLOAD: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-send-receipt-payload'
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_SEND_LINK_PAYLOAD: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-share-receipt'
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_NAVIGATE_TO_BACK: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-navigate-back',
            backStep: true
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_GO_TO_FUND_CONTRACTED_DETAIL: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-back-to-fund-detail',
            backStep: true
          },
          FUND_CONTRACTED_DETAIL_SHOW_WITHDRAWAL_FLOW: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-go-to-withdrawal',
            link: {
              page: 'fundsWithdrawal'
            }
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_GO_TO_NEW_CONTRACT_FLOW: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-go-to-new-contract-flow',
            link: {
              page: 'fundsHiring'
            }
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_INITIALIZE_FLOW: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-initialize-flow',
            analytics: analytics.appPageVisit
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_BUY_BONDS_BUTTON_CLICK: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-buy-bonds-button-click',
            analytics: analytics.appOnClick
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_GENERIC_ERROR_MODAL: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-show-generic-error-modal',
            analytics: analytics.appOnClickError
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_INFO_NOT_LOADED_ERROR_MODAL: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-show-info-not-loaded-error-modal',
            analytics: analytics.appOnClickErrorInfoNotLoaded
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_SERIE_NOT_AVAILABLE_ERROR_MODAL: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-show-serie-not-available-error-modal',
            analytics: analytics.appOnClickErrorSerie
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_SUCCESS_FUNDS_CONTRIBUTION: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-send-successful-funds-contribution',
            analytics: analytics.appCompletedSuccess
          },
          dashboard_refresh_financial_overview: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-send-successful-funds-contribution'
          },
          FUND_TRANSACTION_FUNDS_CONTRIBUTION_PENDING_FUNDS_CONTRIBUTION: {
            bind: 'fund-transaction-servicing-funds-contribution-mx-send-pending-funds-contribution',
            analytics: analytics.appCompletedPending
          }
        }
      }
    }
  };

  base = {
    hash: 'fund-transaction-funds-contribution',
    currentPage: {
      url: '/fund-transaction-funds-contribution'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      cellsConnectionStatus(pageName),
      receiptComponent,
      fundsContribution
    ]
  };
  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector('fund-transaction-servicing-funds-contribution-mx');
  return base;
};
