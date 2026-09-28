/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const base = require('./product/_product-detail')('deposit')(CONFIG);
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const getUtils = utils.get(base);
  const localStorageApp = require('./common/_local-storage');
  const setProperty = utils.setProperty(base);
  const connectionsIn = utils.connectionsIn(base);
  const connectionsOut = utils.connectionsOut(base);
  const connectionsParams = utils.connectionsParams(base);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const showMoreInfoButton = true;
  const HIDE_RETRY_LOAD_LIST_BUTTON = true;
  const showIconMessage = true;
  const depositSummaryDm = 'glomo-deposit-summary-dm-mx';
  const depositOperationsDm = 'glomo-operations-dm-mx';
  const getExpandByCountry = 'related-contracts';
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('deposit');
  const { phoneNumberContact, nativeIos } = CONFIG;
  getUtils('cells-molecule-header').properties.canHaveSwitch = false;
  base.template.tag = 'cells-template-coronita-spherica';
  base.template.properties.className = `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`;
  base.template.properties.hasFooter = true;
  base.template.properties.disableEdgeSwipe = true;
  base.template.properties.footerHeight = 64;

  getUtils('cells-product-summary-deposit').tag = 'cells-product-summary-deposit-spherica';
  setProperty('cells-product-summary-deposit-spherica').maskedAmountNumberChars = VISIBLE_CHARS;
  setProperty('cells-product-summary-deposit-spherica').hideMoreInfoButton = !showMoreInfoButton;
  setProperty('cells-product-summary-deposit-spherica').showDepositConditions = false;
  connectionsParams('cells-product-summary-deposit-spherica').productId = 'productId';
  connectionsIn('cells-product-summary-deposit-spherica').deposit_product_get_deposit_error = {
    bind: 'onDepositError'
  };
  connectionsIn('cells-product-summary-deposit-spherica').deposit_product_stop_deposit_error = {
    bind: 'errorHandler'
  };
  connectionsIn('cells-product-summary-deposit-spherica').global_discreet_mode_mask_amount_values = {
    bind: 'maskedAmount'
  };
  connectionsOut('cells-product-summary-deposit-spherica').deposit_product_detail_retry_get_product = {
    bind: 'cells-product-summary-retry-load'
  };

  connectionsOut('cells-product-summary-deposit-spherica').navigation_deposit_to_deposit_more_info = {
    bind: 'cells-product-summary-more-info-navigation',
    link: {
      page: 'depositMoreInfo',
      params: {
        productId: 'productId'
      }
    }
  };

  base.components.push(
    {
      zone: 'app__main',
      type: 'DM',
      tag: depositSummaryDm,
      familyPath: 'glomo-deposit-summary-dm',
      properties: {
        isSpherica: true,
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        locale: LOCAL_CURRENCY,
        continue: 'deposit',
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        depositsApiVersion: CONFIG.globalServices.versions.deposits,
        fixedVersion: true,
        expand: getExpandByCountry,
        impositionDateFormat: utils.getShortFormatDate(CONFIG),
        impositionMainDateFormat: utils.getShortFormatDate(CONFIG),
        visibleChars: VISIBLE_CHARS,
        contactNumber: phoneNumberContact,
        maxAttempts: 2,
        cellsConnections: {
          in: {
            deposit_product_detail_get: {
              bind: 'init'
            },
            global_deposit_product_detail_reset_page: {
              bind: 'reset'
            },
            global_product_list_selected_product: {
              bind: 'setDepositCachedData'
            },
            deposit_product_call_contact_number: {
              bind: 'callContactNumber'
            },
            deposit_product_detail_retry_get_product: {
              bind: 'retryGetDeposits'
            },
            deposit_product_detail_retry_get_transaction: {
              bind: 'retryGetTransaction'
            },
            deposit_get_error: {
              bind: 'getTransactions'
            },
            global_retry_error: {
              bind: 'getTransactions'
            },
            global_financial_overview_details: {
              bind: 'financialOverviewOriginalData'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            }
          },
          out: {
            deposit_detail_response: {
              bind: 'deposit-response-success'
            },
            deposit_product_detail_list: {
              bind: 'investment-list-changed'
            },
            deposit_product_get_deposit_error: {
              bind: 'error-on-get-deposit'
            },
            deposit_product_stop_deposit_error: {
              bind: 'stop-retry-error-on-get-deposit'
            },
            deposit_product_send_deposit_error: {
              bind: 'send-error-on-get-deposit'
            },
            deposit_product_send_transactions_error: {
              bind: 'send-error-on-get-transactions'
            },
            deposit_get_operations_product: {
              bind: 'deposit-response-success'
            },
            deposit_set_operations_product_error: {
              bind: 'send-error-on-get-deposit'
            },
            navigation_deposit_detail: {
              bind: 'investment-detail-navigate',
              link: {
                page: 'depositTransactionDetail',
                params: {
                  productId: 'productId',
                  transactionId: 'transactionId'
                }
              }
            },
            global_conflict_generic_error: {
              bind: 'error-on-get-deposit'
            }
          },
          params: {
            productId: 'productId'
          }
        }
      }
    }
  );

  if (showIconMessage) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message-spherica',
        properties: {
          className: 'h-gutter bottom-separation',
          showIconCloseMessage: false,
          icon: 'coronita:info',
          type: 'info-dark',
          message: 'cells-icon-message-deposits-impositions',
          cellsConnections: {
            in: {
              ['navigation_deposit_product_detail_back_request']: {
                bind: 'hidden'
              }
            }
          }
        }
      }
    );
  }

  connectionsIn(depositSummaryDm).deposit_product_detail_imposition_selected = {
    bind: 'getInvestmentListDetail'
  };
  connectionsOut(depositSummaryDm).deposit_product_detail_impositions = {
    bind: 'impositions-changed'
  };
  connectionsOut(depositSummaryDm).global_set_main_imposition_detail = {
    bind: 'set-main-imposition-detail'
  };
  connectionsOut(depositSummaryDm).global_set_imposition_detail = {
    bind: 'set-imposition-detail'
  };
  connectionsOut(depositSummaryDm).global_set_original_imposition = {
    bind: 'set-original-imposition'
  };
  connectionsOut(depositSummaryDm).navigation_impositions_to_impositions_detail = {
    bind: 'imposition-navigate',
    link: {
      page: 'depositImpositionDetail',
      params: {
        productId: 'productId',
        impositionId: 'impositionId',
        continue: 'continue'
      }
    }
  };

  base.components.push(
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'cells-product-item-list-info-spherica',
      properties: {
        listHeader: 'cells-transactions-investment-list-header-spherica',
        emptyListImage: './images/spherica/deposits/empty_state_glass.svg',
        variant: 'primary',
        className: 'card-list',
        skeletonItems: 3,
        imageHeight: 145,
        imageWidth: 165,
        hideMessage: true,
        hideRetryLoadListButton: HIDE_RETRY_LOAD_LIST_BUTTON,
        productItemListClass: 'deposit-investment-list',
        maskedAmountNumberChars: VISIBLE_CHARS,
        cellsConnections: {
          in: {
            global_deposit_product_detail_reset_page: {
              bind: 'reset'
            },
            deposit_product_detail_impositions: {
              bind: 'listItems'
            },
            deposit_product_send_transactions_error: {
              bind: 'showMessageError'
            },
            deposit_product_detail_list: {
              bind: 'listItems'
            },
            global_discreet_mode_mask_amount_values: {
              bind: 'maskedAmount'
            }
          },
          out: {
            deposit_product_detail_imposition_selected: {
              bind: 'cells-product-item-list-info-list-item-tap'
            },
            deposit_product_detail_retry_get_transaction: {
              bind: 'cells-product-item-list-retry-info-list'
            },
            deposit_product_call_contact_number: {
              bind: 'cells-product-call-contact-number'
            }
          }
        }
      }
    }
  );

  connectionsIn(depositSummaryDm).navigation_deposit_to_deposit_more_info = {
    bind: 'getLoadedDeposit'
  };
  connectionsOut(depositSummaryDm).global_product_deposit_set_more_info = {
    bind: 'get-loaded-deposit'
  };

  connectionsParams(depositOperationsDm).depositSaleEnabled = 'depositWithdrawalsEnabled';
  connectionsOut(depositOperationsDm).deposit_sale_enabled = {
    bind: 'send-deposit-sale-enabled'
  };

  addRetryErrors(base)(
    [],
    {
      dmName: 'glomo-deposit-summary-dm-mx',
      product: 'deposit'
    });
  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'discreet_mode' ], CONFIG);

  getUtils('cells-molecule-header').tag = 'cells-molecule-header-spherica';
  getUtils('cells-molecule-header-spherica').properties.variant = 'primary-alt';
  getUtils('cells-molecule-header-spherica').properties.leftIcon = 'coronita:back-mini';
  getUtils('cells-molecule-header-spherica').properties.leftIconText = 'cells-molecule-header-spherica-back';
  getUtils('cells-molecule-header-spherica').properties.className = 'header';


  getUtils('cells-product-summary-deposit-spherica').properties.labelMoreInfo = 'cells-product-summary-more-info-deposit-spherica';

  getUtils(depositOperationsDm).properties.iconDepositPurchase = 'coronita:addnotes';

  getUtils('cells-operations-list-indicators').tag = 'cells-operations-list-indicators-spherica';

  return base;
};
