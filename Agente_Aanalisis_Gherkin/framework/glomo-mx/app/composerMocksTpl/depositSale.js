/* eslint-disable camelcase, new-cap, no-shadow */
'use strict';

const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');

const { createPrefixFromPageName, useNames, SPINNER } = utils;
const PAGE_NAME = 'depositSale';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);

module.exports = config => {
  const HOST = config.globalServices.host;
  const depositSale = page(config)(PAGE_NAME);
  const LOCAL_CURRENCY = utils.getLocalCurrency(config);
  const LANGUAGE = utils.getLanguage(config);
  const is_native_ios = config.nativeIos || false;
  const spinner = SPINNER(config);
  const OPERATIVE_ID = 'deposits-sale';
  const MAX_STEPS = 1;

  const template = {
    tag: 'glomo-opx-template',
    properties: {
      animationType: 'verticalUp',
      className: is_native_ios ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
      delayScrollTop: 300,
      extraHeaderClass: 'bbva-core-blue',
      headerHeight: utils.headerHeight,
      headerFixed: true,
      iOSFixedHeader: true,
      topOnConfirm: true,
      collapseOpened: true,
      cellsConnections: {
        in: {
          [getChannelName('scroll_zone')]: {
            bind: 'scrollItemIntoView'
          }
        },
        out: {
        }
      }
    }
  };

  const handleLifeCycle =  {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
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

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [getChannelName('navigate_to_page')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          SHOW_DEPOSITS_SALE_NAVIGATION_TO_SUCCESS: {
            bind: 'navigation-to-success',
            link: {
              page: 'depositSaleReview',
              skipHistory: true
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '20',
      titleName: 'glomo-deposit-sale-header-title',
      cellsConnections: {
        in: {
        },
        out: {
          [getChannelName('go_back_navigation')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const depositDetail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-operative-info',
    properties: {
      title: 'glomo-deposits-imposition-update-title-info',
      className: 'product-item',
      titleSection: true,
      amountDeposit: true,
      infoMessage: {},
      showSeparator: true,
      maxSteps: MAX_STEPS,
      cellsConnections: {
        in: {
          [getChannelName('set_values_info_operative')]: {
            bind: 'product'
          },
          [getChannelName('messages_operative_info')]: {
            bind: 'infoMessageAmount'
          }
        },
        out: {
        }
      }
    }
  };

  const stepDepositSale = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-deposits-offer-page',
    properties: {
      active: true,
      classDividersOfferData: 'short-info-divider',
      className: 'deposit-hiring',
      collapsed: true,
      decorated: true,
      filledInvestAmountText: 'glomo-deposit-sale-step-text-filled',
      localCurrency: LOCAL_CURRENCY,
      showOfferData: true,
      collapsedWrappingIconClass: 'collapsed-message-warning',
      collapsedIconCellClass: '',
      stepTitle: 'glomo-deposit-sale-step-title',
      cellsConnections: {
        in: {
          [getChannelName('step_deposit_sale_offer_data')]: {
            bind: 'offerData'
          }
        }
      }
    }
  };

  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      showLoadingSkeleton: true,
      showAddition: true,
      buttonLabel: 'cells-summary-view-continue',
      summaryViewTitle: 'glomo-deposit-sale-summary-title',
      operationAmountClass: 'amount-huge-decimals',
      localCurrency: LOCAL_CURRENCY,
      hideCustomFeesMessage: true,
      primaryButtonClass: 'deposit-sale',
      cellsConnections: {
        in: {
          [getChannelName('summary_operation')]: {
            bind: 'operation'
          }
        },
        out: {
          [getChannelName('summary_continue')]: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };

  const depositSaleDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-sale-dm-mx',
    familyPath: 'glomo-deposits-sale-dm',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      currentLanguage: LANGUAGE,
      productType: PAGE_NAME,
      classBoldSpacing: 'bold spacing',
      boldSpacing: 'bold',
      classKeyValueSuccess: 'spacing md',
      heroImageError: './images/general_error_2.svg',
      heroImageOutTime: './images/Clock_funds.svg',
      btnLabelUnderstood: 'glomo-deposits-modal-help-understood',
      btnLabelExit: 'glomo-deposits-modal-btn-exit',
      btnLabelCancel: 'glomo-deposits-modal-btn-cancel',
      modalHeadTitle: 'glomo-deposit-imposition-update-title',
      depositPurchaseAccount: 'glomo-deposits-purchase-sale-account',
      depositPurchaseContract: 'glomo-deposits-purchase-sale-contract',
      depositPurchaseBalance: 'glomo-deposits-purchase-sale-balance',
      storeAndForwardActive: false,
      fixedVersion: true,
      host: HOST,
      native: config.native || false,
      depositsApiVersion: config.globalServices.versions.deposits,
      accountsApiVersion: config.globalServices.versions.accounts,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          navigation_product_transaction_to_deposit_imposition_sale: {
            bind: 'depositTransaction'
          },
          [getChannelName('init_page')]: {
            bind: 'initImpositionSalePage'
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'modalExitConfirmation'
          },
          [getChannelName('summary_continue')]: {
            bind: 'generateSale'
          },
          [getChannelName('_request_post_deposits_withdrawals_error')]: {
            bind: 'manageResponseErrorDepositSale'
          },
          [getChannelName('_request_post_deposits_withdrawals_success')]: {
            bind: 'manageResponseSuccessDepositSale'
          },
          [getChannelName('_HEADER_MODAL_EXIT_CONFIRMATION')]: {
            bind: 'modalExitConfirmation'
          }
        },
        out: {
          [getChannelName('step_deposit_sale_offer_data')]: {
            bind: 'set-offer-data'
          },
          [getChannelName('set_values_info_operative')]: {
            bind: 'set-product-detail-info'
          },
          [getChannelName('summary_operation')]: {
            bind: 'set-operation-data'
          },
          [getChannelName('navigate_to_page')]: {
            bind: 'deposit-navigate-to-page'
          },
          [getChannelName('_request_deposit_sale')]: {
            bind: 'request_deposit_sale'
          },
          global_deposit_sale_exit_confirmation: {
            bind: 'modal-exit-confirmation'
          },
          global_deposit_sale_error_operation_sale_exit: {
            bind: 'modal-error-operation-sale-exit'
          },
          global_deposit_sale_error_operation_sale_out_time: {
            bind: 'modal-error-operation-sale-out-time'
          },
          global_deposit_sale_error_operation_sale_blocked_account: {
            bind: 'modal-error-operation-sale-blocked-account'
          },
          global_deposit_sale_error_operation_sale_account_not_active: {
            bind: 'modal-error-operation-sale-account-not-active'
          },
          global_deposit_sale_error_process_expiration: {
            bind: 'modal-in-process-expiration'
          },
          global_deposit_sale_alert_out_time: {
            bind: 'modal-alert-out-time'
          },
          open_control_veil: {
            bind: 'deposits-start-spinner'
          },
          close_control_veil: {
            bind: 'deposits-stop-spinner'
          },
          close_undefined_control_veil: {
            bind: 'close-spinner-veil'
          },
          show_undefined_modal: {
            bind: 'open-undefined-session'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
          }
        }
      }
    }
  };

  const depositsApi = {
    zone: 'app_main',
    tag: 'cells-dm-global-apis-deposits',
    type: 'DM',
    otpId: OPERATIVE_ID,
    properties: {
      host: HOST,
      native: !!config.native,
      depositsApiVersion: config.globalServices.versions.deposits,
      cellsConnections: {
        in: {
          [getChannelName('_request_deposit_sale')]: {
            bind: 'postDepositsWithdrawals'
          }
        },
        out: {
          [getChannelName('_request_post_deposits_withdrawals_success')]: {
            bind: 'set-post-deposits-withdrawals'
          },
          [getChannelName('_request_post_deposits_withdrawals_error')]: {
            bind: 'error-on-post-deposits-withdrawals'
          }
        }
      }
    }
  };

  /* base */
  const base = {
    hash: 'mx-deposit-sale',
    currentPage: {
      url: '/deposit-sale',
      params: []
    },
    pages: depositSale,
    template,
    components: [
      spinner,
      handleLifeCycle,
      navigationHandler,
      header,
      depositDetail,
      stepDepositSale,
      summaryView,
      depositSaleDm,
      depositsApi
    ]
  };

  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-deposits', PAGE_NAME, ['set-post-deposits-withdrawals', 'error-on-post-deposits-withdrawals']);

  return base;
};
