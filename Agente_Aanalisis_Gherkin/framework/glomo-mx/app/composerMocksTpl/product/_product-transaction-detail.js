/* eslint-disable complexity, new-cap */
'use strict';

module.exports = PRODUCT => CONFIG => {
  const utils = require('../common/helpers/_utils');

  const COUNTRY = utils.getCountry();
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)(PRODUCT);
  const FORMAT_DATE = utils.getFormatDate();
  const isNativeIos = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage();
  const spinner = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const addCommonErrors = require('../common/commonErrors/_dm-common-errors');
  const { standInOperatives } = require('../analytics/_standInAlwaysOn')(CONFIG);
  const { account } = require('../analytics/common/_literals').commons;
  const sphericaPageUtils = require('../common/helpers/_spherica')(CONFIG, PRODUCT + 'TransactionDetail');
  const isSpherica = sphericaPageUtils.isSpherica();
  if (isSpherica) {
    spinner.tagSpherica = 'cells-spinner-veil-spherica';
  }

  const EXCLUDE_OBFUSCATION = undefined;
  const REFUNDS_BTN = {
    label: 'transfer-refunds-spei-modal-info-title',
    id: 'custom',
    eventName: 'navigation-to-refunds',
    icon: 'coronita:balance',
    operative: 'accountBasicDetail',
    sendTransaction: true
  };
  const SIPARE_BTN = {
    label: 'transfer-sipare-modal-info-title',
    id: 'custom',
    eventName: 'resend-email-receipt',
    icon: 'coronita:send',
    operative: 'sendEmail',
    sendTransaction: true
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [PRODUCT + '_open_transaction_detail_help_modal_spherica']: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const base = {
    hash: [PRODUCT, 'transaction-detail', COUNTRY, CONFIG.environment].join('-'),
    currentPage: {
      url: PRODUCT + '/:productId/transaction/:transactionId/'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        preventScrollWithOverlay: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            [PRODUCT + '_product_transaction_detail_init_page']: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      },
      propertiesSpherica: {
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'bg-light-grey'
      }
    },
    components: [
      spinner,
      {
        zone: 'app__header',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        type: 'UI',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'cells-transaction-detail-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_transation_detail_to_continue: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back',
          leftIconText: 'cells-transaction-detail-header-text',
          className: isNativeIos ? 'ios-top-padding' : '',
          extraHeaderClass: '',
          iOSFixedHeader: isNativeIos
        }
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          currentPage: PRODUCT + 'TransactionDetail',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              }
            },
            out: {
              navigation_transation_detail_to_continue: {
                bind: 'navigate-to-previous-page',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT + 'TransactionDetail',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT + 'TransactionDetail']: {
                bind: 'init'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              [PRODUCT + '_product_transaction_detail_init_page']: {
                bind: 'init-page',
                analytics: standInOperatives(account, 'NAVIGATION_DETAIL')
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
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-clipboard-manager',
        tagSpherica: 'cells-clipboard-manager-spherica',
        properties: {
          cellsConnections: {
            in: {
              [PRODUCT + '_more_info_clipboard_channel']: {
                bind: 'text'
              }
            },
            out: {
              [PRODUCT + '_transaction_copy']: {
                bind: 'text-copied'
              },
              [PRODUCT + '_transaction_detail_clipboard_error']: {
                bind: 'clipboard-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-notification-toast',
        familyPath: '@bbva-web-components/bbva-notification-toast',
        familyPathSpherica: '@bbva-spherica-components/bbva-notification-toast',
        render: 'litElement',
        properties: {
          type: 'success',
          iconExplainer: 'coronita:correct',
          alertText: 'glomo-transaction-detail-success-message',
          duration: '3000',
          autoHide: 'true',
          fixedBottom: 'true',
          cellsConnections: {
            in: {
              global_message_snackbar: {
                bind: 'show'
              },
              [PRODUCT + '_open_notification_toast_success']: {
                bind: 'show'
              },
              [PRODUCT + '_text_notification_toast_success']: {
                bind: 'alertText'
              }
            }
          }
        },
        propertiesSpherica: {
          iconExplainer: 'spherica:correct',
          className: 'u-margin--1 u-max-width--2'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-transaction-detail',
        tagSpherica: 'cells-transaction-detail-spherica',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          className: 'cardDetailTransactions',
          showSpinner: false,
          showStatus: true,
          showPendingStatusOnly: true,
          shareTransaction: false,
          showStatusAfterTitle: false,
          operationsListLayout: 'review',
          cellsConnections: {
            in: {
              ['global_' + PRODUCT + '_set_product_id']: {
                bind: 'productId'
              },
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              [PRODUCT + '_main_transaction_detail']: {
                bind: 'mainTransaction'
              },
              [PRODUCT  + '_product_set_transaction_detail']: {
                bind: 'transaction'
              },
              [PRODUCT + '_transaction_detail_error']: {
                bind: 'errorHandler'
              },
              navigation_transation_detail_to_continue: {
                bind: 'reset'
              },
              [PRODUCT + '_transaction_copy']: {
                bind: 'launchKey'
              },
              [PRODUCT + '_show_loading']: {
                bind: 'loaded'
              },
              [PRODUCT + '_send_reset_button_transaction']: {
                bind: 'setProperties'
              },
              [PRODUCT + '_claims_existing']: {
                bind: 'claimsExisting'
              },
              [PRODUCT + '_is_claim_received']: {
                bind: 'isClaimReceived'
              },
              [PRODUCT + '_is_claim_available']: {
                bind: 'isClaimAvailable'
              }
            },
            out: {
              [PRODUCT + '_retry_load_transaction_detail']: {
                bind: 'retry-load-transaction-detail'
              },
              [PRODUCT + '_share_receipt_transactions']: {
                bind: 'share-transaction-receipt-capture'
              },
              [PRODUCT + '_more_info_clipboard_channel']: {
                bind: 'cells-transaction-detail-copy-button-click'
              },
              [PRODUCT + '_transaction_detail_help_info']: {
                bind: 'help-icon-tapped'
              },
              global_message_snackbar: {
                bind: 'cells-transaction_detail-info-key'
              },
              [PRODUCT + '_on_click_deposit_imposition_update']: {
                bind: 'navigation-to-page'
              },
              [PRODUCT + 'status_info_clicked']: {
                bind: 'on-click-status-icon'
              },
              [PRODUCT + '_on_click_claim_transaction_icon']: {
                bind: 'on-click-claim-transaction-icon'
              },
              global_action_launcher_uri: {
                bind: 'send-url'
              },
              [PRODUCT + '_on_click_resend_voucher_sipare']: {
                bind: 'resend-email-receipt'
              }
            },
            params: {
              productId: 'productId'
            }
          }
        },
        propertiesSpherica: {
          className: 'transaction-title-emphasis ',
          isSpherica,
          showStatusAfterAmount: true,
          showOperationDateAfterStatus: false,
          showOperativesUp: true,
          transactionItemClass: '',
          showSpinner: false,
          showStatus: true,
          showPendingStatusOnly: true,
          shareTransaction: false,
          showStatusAfterTitle: false,
          operationsListLayout: 'review'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          country: 'mxGlobal',
          language: LANGUAGE,
          localCurrency: LOCAL_CURRENCY,
          unMaskAccount: false,
          cellsConnections: {
            in: {
              [PRODUCT + '_share_receipt']: {
                bind: 'captureReceipt'
              },
              [PRODUCT  + '_product_set_transaction_detail']: {
                bind: 'result'
              },
              global_share_receipt_error_accept: {
                bind: 'retryOperation'
              },
              [PRODUCT + '_product_transaction_detail_init_page']: {
                bind: 'reset'
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
              global_alert_manager_open_with_settings: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-transactions-dm-' + COUNTRY,
        familyPath: 'glomo-transactions-dm',
        properties: {
          host: CONFIG.globalServices.host,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
          cardsApiVersion: CONFIG.globalServices.versions.cards,
          depositsApiVersion: CONFIG.globalServices.versions.deposits,
          addTransactionsType: false,
          productType: PRODUCT,
          fixedVersion: true,
          locale: utils.getLocalCurrency(),
          localCurrency: utils.getLocalCurrency(),
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          includeModelSubheaders: false,
          transactionDetailByCategory: false,
          formatAmountPositive: false,
          formatDate: FORMAT_DATE,
          language: LANGUAGE,
          capitalizeTransactionTitle: true,
          excludeObfuscation: EXCLUDE_OBFUSCATION,
          native: !!CONFIG.native,
          enableClaimSection: true,
          uncategorized: 'UNCATEGORIZED',
          mask: {
            separator: '•',
            chars: VISIBLE_CHARS
          },
          addNewOperations: true,
          operationsDetailNew: REFUNDS_BTN,
          operationsDetailSipare: SIPARE_BTN,
          cellsConnections: {
            in: {
              ['__bridge_page_' + PRODUCT + 'TransactionDetail']: {
                bind: 'initResetWithParams'
              },
              global_feature_swich_accounts_transactions_status: {
                bind: 'transactionsFeatureFlag'
              },
              minimum_navigation_transactions_to_transaction_detail: {
                bind: 'setProperties'
              },
              ['global_' + PRODUCT + '_set_product_id']: {
                bind: 'productId'
              },
              ['global_' + PRODUCT + '_transaction_detail']: {
                bind: 'mainTransactionDetail'
              },
              [PRODUCT + '_product_transaction_detail_init_page']: {
                bind: 'initTransactionDetail'
              },
              [PRODUCT + '_retry_load_transaction_detail']: {
                bind: 'getTransactionDetail'
              },
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              navigation_transation_detail_to_continue: {
                bind: 'reset'
              },
              [PRODUCT + '_transaction_detail_help_info']: {
                bind: 'getHelpInfo'
              },
              [PRODUCT + '_on_click_deposit_imposition_update']: {
                bind: 'depositImpositionUpdate'
              },
              [PRODUCT + '_reset_after_operation']: {
                bind: 'resetAfterOperative'
              },
              [PRODUCT + 'status_info_clicked']: {
                bind: '_openModalPendingsTransactions'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlags'
              },
              [PRODUCT + '_share_receipt_transactions']: {
                bind: 'modalShareTransaction'
              },
              [PRODUCT + '_on_click_claim_transaction_icon']: {
                bind: 'validateDataButton'
              },
              [PRODUCT + '_claims_existing']: {
                bind: 'uniFlagProperty'
              },
              minimum_payment_clarifications_movements_details: {
                bind: 'cardsApiVersion'
              }
            },
            out: {
              [PRODUCT  + '_product_set_transaction_detail']: {
                bind: 'transaction-detail-changed'
              },
              [PRODUCT + '_transaction_detail_error']: {
                bind: 'error-on-get-account-transaction-detail-handler'
              },
              [PRODUCT + '_main_transaction_detail']: {
                bind: 'main-transaction-detail'
              },
              global_transaction_detail_modal_pendings: {
                bind: 'cells-transactions-modal-pending'
              },
              [PRODUCT + '_share_receipt']: {
                bind: 'share-transaction'
              },
              mobile_manage_operation: {
                bind: 'receipt-captured-validation',
                'forward-to-native': true
              },
              [PRODUCT + 'open_modal_share_transaction']: {
                bind: 'share-transaction-stand-in',
                analytics: standInOperatives(account, 'SHARE_TRANSACTION')
              },
              [PRODUCT + '_heading_modal_share_transactions']: {
                bind: 'panel-heading'
              },
              [PRODUCT + '_title_modal_share_transactions']: {
                bind: 'panel-title'
              },
              [PRODUCT + 'text_modal_share_transactions']: {
                bind: 'panel-text'
              },
              navigation_product_transaction_to_deposit_imposition_update: {
                bind: 'navigation-product-transaction-to-deposit-imposition-update',
                link: {
                  page: 'depositConfiguration'
                }
              },
              navigation_product_transaction_to_deposit_imposition_sale: {
                bind: 'navigation-product-transaction-to-deposit-imposition-sale',
                link: {
                  page: 'depositSale'
                }
              },
              [PRODUCT + '_set_transaction_detail']: {
                bind: 'set-transaction-detail'
              },
              [PRODUCT + '_send_reset_button_transaction']: {
                bind: 'set-properties-button-transaction'
              },
              [PRODUCT + '_claims_existing']: {
                bind: 'claims-existing-changed'
              },
              [PRODUCT + '_is_claim_received']: {
                bind: 'is-claim-received-changed'
              },
              [PRODUCT + '_is_claim_available']: {
                bind: 'is-claim-available-changed'
              },
              show_clarifications_management_care_channel: {
                bind: 'claim-data-care-transaction',
                link: {
                  page: 'clarificationsManagementCarePage'
                }
              }
            },
            params: {
              productId: PRODUCT === 'deposit' ? 'productId' : undefined,
              transactionId: 'transactionId'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                ['deposit_open_transaction_detail_help_modal_spherica']: {
                  bind: 'open-help-page-alert-modal'
                }
              }
            },
            remove: {
              out: [
                'deposit_open_transaction_detail_help_modal'
              ]
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-help-modal',
        tagSpherica: 'bbva-help-modal-spherica',
        familyPath: '@bbva-web-components/bbva-help-modal',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
              [PRODUCT + 'open_modal_share_transaction']: {
                bind: 'open'
              },
              [PRODUCT + '_heading_modal_share_transactions']: {
                bind: 'headerText'
              },
              [PRODUCT + 'close_modal']: {
                bind: 'close'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica
        }
      },
      {
        zone: 'slotcontent.slot-title',
        type: 'UI',
        tag: 'bbva-panel-info',
        tagSpherica: 'bbva-panel-info-spherica',
        familyPath: '@bbva-web-components/bbva-panel-info',
        familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
        render: 'litElement',
        properties: {
          microillustration: 'info',
          cellsConnections: {
            in: {
              [PRODUCT + '_title_modal_share_transactions']: {
                bind: 'heading'
              },
              [PRODUCT + 'text_modal_share_transactions']: {
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
        tagSpherica: 'bbva-button-default-spherica',
        familyPath: '@bbva-web-components/bbva-button-default',
        familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
        },
        propertiesSpherica: {
          isSpherica
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-resending-voucher-mx',
        familyPath: '@glomo-web-components/bbva-controller-resending-voucher-mx',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [PRODUCT + '_on_click_resend_voucher_sipare']: {
                bind: 'controllerResendVoucher'
              },
              [PRODUCT + '_resending_voucher-success']: {
                bind: 'controllerResendingVoucherSuccess'
              },
              [PRODUCT + '_resending_voucher_error']: {
                bind: 'controllerResendingVoucherError'
              },
              sipare_resending_voucher_exit: {
                bind: 'closeModalDashboard'
              },
              sipare_resending_voucher_retry: {
                bind: 'sendRequest'
              }
            },
            out: {
              [PRODUCT + '_init_resend_voucher']: {
                bind: 'bbva-controller-resending-voucher-mx-request'
              },
              [PRODUCT + '_open_notification_toast_success']: {
                bind: 'bbva-controller-resending-voucher-mx-success-request'
              },
              [PRODUCT + '_text_notification_toast_success']: {
                bind: 'bbva-controller-resending-voucher-mx-success-text'
              },
              global_alert_manager_open_with_settings: {
                bind: 'bbva-controller-resending-voucher-mx-error'
              },
              [PRODUCT + '_bbva_controller_resending_voucher_mx_modal_exit']: {
                bind: 'bbva-controller-resending-voucher-mx-close-modal-dashboard',
                link: {
                  page: 'dashboard'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-local-payments-api-dm-mx',
        familyPath: '@glomo-web-components/bbva-local-payments-api-dm',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          version: CONFIG.globalServices.versions.paymentsV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              [PRODUCT + '_init_resend_voucher']: {
                bind: 'postResendingVoucher'
              }
            },
            out: {
              [PRODUCT + '_resending_voucher-success']: {
                bind: 'post-payments-social-contributions-resending-voucher-success'
              },
              [PRODUCT + '_resending_voucher_error']: {
                bind: 'post-payments-social-contributions-resending-voucher-error'
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  return sphericaPageUtils.spherize(base);
};
