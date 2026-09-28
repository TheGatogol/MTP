/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const PRODUCT = 'loan';
  const {
    getVisibleChars,
    getCountry,
    getLanguage,
    getLocalCurrency,
    connectionsIn,
    connectionsOut,
    setProperty,
    get,
    addFeatureFlag } = require('./common/helpers/_utils');
  const base = require('./product/_product-detail')(PRODUCT)(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const VISIBLE_CHARS = getVisibleChars(CONFIG);
  const COUNTRY = getCountry(CONFIG);
  const LANGUAGE = getLanguage(CONFIG);
  const LOCAL_CURRENCY = getLocalCurrency(CONFIG);
  const connectionsInChannels = connectionsIn(base);
  const connectionsOutChannels = connectionsOut(base);
  const setPropertyComponent = setProperty(base);
  const getComponent = get(base);
  const tagOperationsDM = 'glomo-operations-dm-' + COUNTRY;
  const ANALITYCS = require('./analytics/_loanDetail')();
  const { getAdvancedFootprintSustainableRateJustification } = require('./analytics/_sustainableRateJustification')(CONFIG);
  const { loanPaymentClickStart } = require('./analytics/_loanPayment')('loan');
  const localStorageApp = require('./common/_local-storage');
  const isNativeIos = !!CONFIG.nativeIos;
  const isSpherica = sphericaPageUtils.isSpherica();

  getComponent('cells-operations-list-indicators').zone = 'summaryLoan.operatives';
  setPropertyComponent('cells-bottom-modal-message-spherica').icon = 'coronita:correct';
  setPropertyComponent('cells-bottom-modal-message-spherica').expand = true;
  setPropertyComponent('cells-bottom-modal-message-spherica').iconSize = 24;
  setPropertyComponent('cells-bottom-modal-message-spherica').className = 'standar-padding';
  setPropertyComponent('cells-bottom-modal-message-spherica').fullHeight = false;
  setPropertyComponent('cells-product-summary-loan').id = 'summaryLoan';
  setPropertyComponent('cells-product-summary-loan').disableProgressBar = true;
  setPropertyComponent('cells-product-summary-loan').hiddenMessageInfoSummary = true;
  setPropertyComponent('cells-product-summary-loan').className = 'loan-product-detail';
  setPropertyComponent('cells-product-summary-loan').optionalItemsAlign = 'inline book-amount';
  setPropertyComponent('cells-product-summary-loan').labelMoreInfo = 'cells-product-summary-loan-detail';
  setPropertyComponent('cells-product-summary-loan').maskedAmountNumberChars = VISIBLE_CHARS;

  setPropertyComponent('cells-molecule-header').className = 'header header-content-title';
  if (!isSpherica) {
    setPropertyComponent('cells-molecule-header').className = 'header--dark header header-content-title';
  }
  setPropertyComponent('cells-product-summary-loan').isNativeIos = isNativeIos;

  setPropertyComponent('cells-operations-list-indicators').className = 'font-product-detail';

  connectionsInChannels(tagOperationsDM).global_get_full_product_detail_operations_list = {
    bind: 'getFullOperations'
  };
  connectionsInChannels('cells-product-summary-loan').global_discreet_mode_mask_amount_values = {
    bind: 'maskedAmount'
  };
  connectionsOutChannels('cells-product-summary-loan').update_message_values_sustainable_loan = {
    bind: 'update-message-values-sustainable-loan'
  };
  connectionsOutChannels('cells-product-summary-loan').navigation_loan_product_detail_back_request = {
    bind: 'update-message-values-sustainable-loan'
  };
  connectionsOutChannels('cells-product-summary-loan').navigation_loan_product_detail_back_request = {
    bind: 'navigation-loan-product-detail-back-request'
  };
  connectionsOutChannels('cells-product-summary-loan').update_title_values_sustainable_loan = {
    bind: 'update-title-values-sustainable-loan'
  };
  connectionsOutChannels('cells-product-summary-loan').update_link_values_sustainable_loan = {
    bind: 'update-link-values-sustainable-loan'
  };
  connectionsOutChannels('cells-product-summary-loan').active_sustainable_loan = {
    bind: 'active-sustainable-loan'
  };
  connectionsOutChannels('cells-product-summary-loan').update_progress_step_values_sustainable_loan = {
    bind: 'update-progress-step-values-sustainable-loan'
  };
  connectionsOutChannels(tagOperationsDM).global_full_product_detail_operations_list = {
    bind: 'full-operations-list'
  };
  connectionsOutChannels('cells-operations-list-indicators').global_get_full_product_detail_operations_list = {
    bind: 'get-full-operations'
  };
  connectionsOutChannels('cells-operations-list-indicators').navigation_product_detail_to_bill_payments = {
    bind: 'navigation-product-to-bill-payments'
  };
  connectionsOutChannels('cells-operations-list-indicators').navigation_loan_to_invitation_non_account_link = {
    bind: 'invitation-non-account-link',
    link: {
      page: 'invitationNonAccountClient'
    }
  };
  connectionsOutChannels('cells-product-summary-loan').navigation_product_detail_to_more_info = {
    bind: 'cells-product-summary-more-info-navigation',
    link: {
      page: 'loanMoreInfo',
      params: {
        productId: 'productId'
      }
    },
    analytics: ANALITYCS.APP_PAGE_VIEW_LOAN_DETAIL_MORE_INFO
  };
  connectionsOutChannels('cells-handle-life-cycle').loan_product_detail_init_page = {
    bind: 'init-page',
    analytics: ANALITYCS.APP_PAGE_VIEW_LOAN_DETAIL
  };

  base.components.push(
    {
      zone: 'app__main',
      tag: 'glomo-loan-summary-dm-' + COUNTRY,
      familyPath: 'glomo-loan-summary-dm',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        locale: LOCAL_CURRENCY,
        language: LANGUAGE,
        loansApiVersion: CONFIG.globalServices.versions.loans,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            loan_product_detail_get: {
              bind: 'getProduct'
            },
            refresh_loan_payment: {
              bind: 'getProduct'
            },
            global_loan_edit_alias_success: {
              bind: 'getProductSuccessAlias'
            },
            global_product_list_selected_product: {
              bind: 'setProduct'
            },
            global_loan_product_detail_reset_page: {
              bind: 'reset'
            },
            navigation_loan_product_detail_back_request: {
              bind: 'reset'
            },
            navigation_product_detail_to_bill_payments: {
              bind: 'validateBillPayments'
            },
            loanPaymentsReturnPage_channel: {
              bind: 'getProductSuccessAlias'
            },
            loan_product_detail_init_page: {
              bind: 'getStorageMonoproduct'
            },
            global_storage_get_monoproduct_success: {
              bind: 'setStorageMonoproduct'
            },
            global_storage_get_monoproduct_error: {
              bind: 'hasMonoproductStorageError'
            },
            global_feature_flag_collection_updated: {
              bind: 'getFlagCollection'
            },
            global_financial_overview_details: {
              bind: 'setFOProducts'
            }
          },
          out: {
            loan_detail_response: {
              bind: 'loan-response-success'
            },
            loan_get_operations_product: {
              bind: 'loan-response-success'
            },
            loan_more_info_set: {
              bind: 'send-to-more-info'
            },
            set_related_contracts: {
              bind: 'loan-related-contracts'
            },
            set_commissions: {
              bind: 'loan-commissions-percentage'
            },
            navigation_loan_product_detail_back_request: {
              bind: 'close-loan-product-detail',
              backStep: true
            },
            navigation_loan_product_detail_to_billpayments_mortage: {
              bind: 'navigate-to-billpayment-mortgage',
              link: addFeatureFlag('mortgage.mortgagePayment', {
                page: 'mortgagePayment',
                params: {
                  productId: 'loanId'
                }
              }),
              analytics: loanPaymentClickStart
            },
            navigation_loan_product_detail_to_billpayments_loan: {
              bind: 'navigate-to-billpayment-consume-personal',
              link: addFeatureFlag('loan.loanPayment', {
                page: 'loanPayment',
                params: {
                  productId: 'loanId'
                }
              }),
              analytics: loanPaymentClickStart
            },
            navigation_loan_product_detail_to_billpayments_car: {
              bind: 'navigate-to-billpayment-car',
              link: addFeatureFlag('loan.carLoanPayment', {
                page: 'carLoanPayment',
                params: {
                  productId: 'loanId'
                }
              }),
              analytics: loanPaymentClickStart
            },
            global_retry_error: {
              bind: 'glomo-loan-summary-dm-get-loan-error'
            },
            global_get_from_storage: {
              bind: 'get-native-local-storage',
              'forward-to-native': true
            },
            navigation_loan_to_invitation_non_account_link: {
              bind: 'invitation-non-account-link',
              link: {
                page: 'invitationNonAccountClient'
              }
            }
          },
          params: {
            productId: 'productId'
          }
        }
      },
      propertiesSpherica: {
        isSpherica
      }
    },
    {
      zone: 'app__transactional',
      type: 'UI',
      tag: 'bbva-widget-product-detail-sustainable-loans',
      familyPath: '@glomo-web-components/bbva-widget-product-detail-sustainable-loans',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            notification_message_link_click: {
              bind: 'openModal'
            }
          }
        }
      }
    },
    {
      zone: 'summaryLoan.progressStep',
      type: 'UI',
      tag: 'bbva-progress-step',
      familyPath: '@bbva-experience-components/bbva-progress-step',
      render: 'litElement',
      properties: {
        stepsInView: 2,
        cellsConnections: {
          in: {
            update_progress_step_values_sustainable_loan: {
              bind: 'steps'
            }
          }
        }
      }
    },
    {
      zone: 'summaryLoan.sustainableMessage',
      type: 'UI',
      tag: 'bbva-notification-message',
      familyPath: '@bbva-web-components/bbva-notification-message',
      render: 'litElement',
      properties: {
        variant: 'information',
        cellsConnections: {
          in: {
            update_message_values_sustainable_loan: {
              bind: 'message'
            },
            update_title_values_sustainable_loan: {
              bind: 'messageTitle'
            },
            update_link_values_sustainable_loan: {
              bind: 'linkTitle'
            }
          },
          out: {
            notification_message_link_click: {
              bind: 'notification-message-link-click',
              analytics: getAdvancedFootprintSustainableRateJustification('withLevel3', 'detalle', '', 'mejorar tasa')
            }
          }
        }
      }
    });

  addRetryErrors(base)([
    {
      id: 'LOAN-DETAIL-ERROR-REQUEST',
      acceptRetry: { bind: 'getProduct', component: 'glomo-loan-summary-dm-mx' },
      cancelRetry: { bind: 'closeLoanProductDetail', component: 'glomo-loan-summary-dm-mx' },
      acceptCallForHelp: { bind: 'closeLoanProductDetail', component: 'glomo-loan-summary-dm-mx' }
    }
  ]);

  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, ['monoproduct', 'sustainable_loan_review',
    'discreet_mode'], CONFIG);

  return sphericaPageUtils.spherize(base);
};
