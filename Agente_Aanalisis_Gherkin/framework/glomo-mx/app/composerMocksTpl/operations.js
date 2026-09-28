'use strict';

module.exports = CONFIG => {
  const pageName = 'operations';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const ACCOUNT_ANALYTICS = require('./analytics/_accountDetail')(CONFIG);
  const ANALYTICS_CLEAN_CARD = require('./analytics/_cleanCardOperations')(CONFIG);
  const IT_ANALYTICS = require('./analytics/_internationalTransfers')();
  const ANALYTICS_PAYROLL_PORTABILITY = require('./analytics/_payrollPortability')(CONFIG);
  const ANALYTICS_MONTHLY_STATEMENT = require('./analytics/_monthlyStatement')('account');
  const ANALYTICS_MOBILE_TOP_UP = require('./analytics/_mobileTopUp')();
  const { _onClickStart } = require('./analytics/_requestMoney')();
  const analyticsProvisioning = require('./analytics/_thirdPartyWallet')();
  const ANALYTICS_ADVANCE_PROMOTIONS = require('./analytics/_promotionsAdvancedPayments')(CONFIG);
  const base = {
    hash: 'operations',
    currentPage: {
      url: '/operations'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding bg-dark-medium-blue' : '',
        extraHeaderClass: 'bbva-dark-medium-blue',
        hasFooter: false,
        disableScrollLock: true,
        disableEdgeSwipe: true
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'operations',
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
              __bridge_page_operations: {
                bind: 'init'
              },
              operations_reset_page: {
                bind: 'reset'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              operations_init_page: {
                bind: 'init-page'
              },
              global_operations_reset: {
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
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark-medium',
          back: true,
          leftIcon: 'coronita:return-12',
          cellsConnections: {
            in: {},
            out: {
              navigation_operations_to_continue: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'back-to-card-detail',
          cellsConnections: {
            in: {
              operatios_third_party_wallet_back: {
                bind: 'goBack',
                previousState: false,
                cleanUntil: 'operations'
              }
            },
            out: {
              operations_reset_page: {
                bind: 'back-to-card-detail',
                backStep: true,
                cleanUntil: 'operations'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'glomo-alert-manager',
        properties: {
          className: CONFIG.nativeIos ? 'ios-top-padding' : '',
          cellsConnections: {
            in: {
              navigate_to_third_party_wallet_provisioning_error_off_operations: {
                bind: 'openWithSettings'
              },
              operations_reset_page: {
                bind: 'reset'
              }
            },
            out: {
              global_card_detail_third_party_wallet_on_card: {
                bind: 'alert-your-card-is-off-accept'
              },
              operatios_third_party_wallet_back: {
                bind: 'alert-your-card-is-off-accept'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-operations-list-group',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          gridColumns: 3,
          className: 'flat',
          cellsConnections: {
            in: {
              operations_init_page: {
                bind: 'initialize'
              },
              global_full_product_detail_operations_list: {
                bind: 'operationLists'
              },
              global_operations_reset: {
                bind: 'reset'
              }
            },
            out: {
              app_click_start_transfers: {
                bind: 'navigate-to-transfers-from-account'
              },
              navigation_product_detail_to_codicel_agree_and_remove_consent: {
                bind: 'navigate-operations-to-codicel-agree-and-remove-consent',
                link: {
                  page: 'codicelAgreeAndRemoveConsent',
                  params: {
                    continue: 'continue',
                    cleanUntil: 'operations'
                  }
                }
              },
              navigation_parental_control_account_limits: {
                bind: 'navigate-operations-to-parental-control',
                link: {
                  page: 'parentalControlAccountLimits',
                  params: {
                    productId: 'productId',
                    continue: 'continue',
                    cleanUntil: 'operations'
                  }
                }
              },
              global_account_navigate_to_transfer: {
                bind: 'navigate-to-transfers-from-account',
                link: {
                  page: 'transfers',
                  params: {
                    productId: 'productId',
                    continue: 'continue',
                    cleanUntil: 'operations'
                  }
                }
              },
              navigation_product_detail_to_bill_payments: {
                bind: 'navigate-to-bill-payments',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('billPayment'),
                link: {
                  page: 'billPayments',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_cardless_withdrawal: {
                bind: 'navigate-to-cardless-withdrawal',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('cardlessWithdrawal'),
                link: {
                  page: 'cardlessWithdrawal',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_credit_card_payment: {
                bind: 'navigate-to-credit-card-payment',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('accountCreditCardPayment'),
                link: {
                  page: 'accountCreditCardPayment',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_mobile_top_up: {
                bind: 'navigate-to-refills-and-packages',
                link: {
                  page: 'mobileTopUp',
                  skipHistory: true
                }
              },
              navigation_product_detail_to_account_statements_from_account: {
                bind: 'navigate-to-statements-from-account',
                analytics: ANALYTICS_MONTHLY_STATEMENT.dynamicLevel1('cuentas'),
                link: utils.addFeatureFlag('account.monthlyStatement', {
                  page: 'accountMonthlyStatement',
                  skipHistory: true,
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                })
              },
              navigation_product_detail_to_change_payroll: {
                bind: 'navigate-to-change-payroll',
                analytics: ANALYTICS_PAYROLL_PORTABILITY.APP_ON_CLICK_START,
                link: {
                  page: 'payrollPortability',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_receive_payroll: {
                bind: 'navigate-to-receive-payroll',
                link: {
                  page: 'payroll',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_codi: {
                bind: 'navigate-to-codi',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('codi'),
                link: {
                  page: 'codiQrScanner',
                  params: {
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_international_transfers: {
                bind: 'navigate-to-international-transfers',
                analytics: IT_ANALYTICS.get_custom_app_on_click_start_with_feature_flag('detalle cuentas', 'cuentas', 'detalle'),
                link: {
                  page: 'internationalTransfersPanel'
                }
              },
              navigation_product_detail_to_checks_section: {
                bind: 'navigate-to-checks-sections',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('checksSection'),
                link: {
                  page: 'checksSection',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_to_codicel_peer_to_peer_send: {
                bind: 'navigate-operations-to-codicel_peer_to_peer_send',
                link: {
                  page: 'codicelPeerToPeerSend',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_account_detail_to_edit_alias: {
                bind: 'navigation-to-edit-account-alias',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('editAlias'),
                link: {
                  page: 'accountEditAlias',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_card_detail_to_edit_alias: {
                bind: 'navigation-to-edit-card-detail-alias',
                analytics: ACCOUNT_ANALYTICS.editAliasOnClickStart,
                link: {
                  page: 'cardEditAlias',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_accounts_state: {
                bind: 'navigate-operations-to-account-status',
                analytics: ANALYTICS_MONTHLY_STATEMENT.dynamicLevel1('tarjetas'),
                link: utils.addFeatureFlag('card.monthlyStatement', {
                  page: 'cardMonthlyStatement',
                  skipHistory: true,
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                })
              },
              navigation_deposit_detail_to_edit_alias: {
                bind: 'navigation-to-edit-deposit-alias',
                link: {
                  page: 'comingSoon',
                  params: {
                    productId: 'productId',
                    cleanUntil: 'cardDetail'
                  }
                }
              },
              navigation_product_detail_to_mobile_payment: {
                bind: 'navigate-operations-mobile-payment',
                link: {
                  page: 'mobilePayment',
                  params: {
                    productId: 'productId',
                    operation: 'operation',
                    continue: 'continue'
                  }
                }
              },
              navigation_account_detail_to_card_activation: {
                bind: 'navigate-operations-to-card-activation',
                link: {
                  cleanUntil: 'operations',
                  page: 'cardActivation',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              navigation_card_detail_to_card_location: {
                bind: 'navigate-operations-to-card-location',
                link: {
                  page: 'comingSoon',
                  params: {
                    productId: 'productId',
                    cleanUntil: 'cardDetail'
                  }
                }
              },
              navigation_additional_card_detail_to_block_card: {
                bind: 'navigation-to-block-card-normal',
                link: {
                  page: 'blockAndReplacement',
                  params: {
                    cardId: 'cardId'
                  }
                }
              },
              navigation_loan_detail_to_show_nip: {
                bind: 'navigate-operations-to-show-ccv',
                link: {
                  skipHistory: true,
                  page: 'pinRequest',
                  params: {
                    cardId: 'productId',
                    cardNumber: 'cardNumber',
                    cardVariant: 'cardVariant',
                    cardKindPayment: 'cardKindPayment',
                    cardExpirationDate: 'cardExpirationDate',
                    cardHolderName: 'cardHolderName',
                    cardProductId: 'cardProductId',
                    cardHolderType: 'cardHolderType'
                  }
                }
              },
              navigation_product_detail_to_card_limits: {
                bind: 'navigate-operations-to-edit-limits',
                link: {
                  page: 'listCreditCardLimits',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              navigation_product_detail_to_parental_control_card_limits: {
                bind: 'navigate-parental-control-card-limits',
                link: {
                  page: 'parentalControlCardLimits',
                  params: {
                    cardId: 'productId'
                  }
                }
              },
              navigation_card_detail_to_Credit_card_payment: {
                bind: 'navigate-operations-to-pay-card',
                link: {
                  page: 'cardCreditCardPayment',
                  params: {
                    productId: 'productId',
                    cleanUntil: 'cardDetail'
                  }
                }
              },
              navigation_to_view_pin_with_qr_code: {
                bind: 'navigate-operations-to-show-pin-with-qr-code',
                link: {
                  page: 'cleanCardOperations',
                  params: {
                    cardId: 'productId',
                    operativeAction: 'operativeAction',
                    continue: 'continue'
                  }
                }
              },
              navigation_to_card_activation_with_qr_code: {
                bind: 'navigate-operations-to-card-activation-with-qr-code',
                analytics: ANALYTICS_CLEAN_CARD.APP_ON_CLICK_START,
                link: {
                  page: 'cleanCardOperations',
                  params: {
                    cardId: 'productId',
                    operativeAction: 'operativeAction',
                    continue: 'continue'
                  }
                }
              },
              global_card_product_detail_open_modal_event: {
                bind: 'navigate-operations-error'
              },
              navigation_to_add_video_selfie_code: {
                bind: 'navigation-product-to-add-video-selfie',
                link: {
                  cleanUntil: 'operations',
                  page: 'addVideoSelfie'
                }
              },
              navigate_to_third_party_wallet_provisioning_error_operations: {
                bind: 'navigate-operations-wallet-error'
              },
              navigate_to_third_party_wallet_provisioning_error_off_operations: {
                bind: 'navigate-operations-wallet-error-off'
              },
              navigate_to_third_party_wallet_provisioning: {
                bind: 'navigate-operations-wallet',
                link: {
                  page: 'paymentsThirdPartyWalletProvisioning',
                  params: {
                    cardData: 'product',
                    cleanUntil: 'cardDetail'
                  }
                }
              },
              open_unavailable_stand_in_modal: {
                bind: 'unavailable-stand-in-operative-modal'
              },
              OPEN_UPGRADE_MODULAR: {
                bind: 'navigate-to-upgrade-modular-page',
                analytics: ACCOUNT_ANALYTICS.appOnClickStartButtonMessage('ampliar cuenta'),
                link: {
                  page: 'upgradeN2N4'
                }
              },
              open_upgrade_hybrid: {
                bind: 'navigate-to-upgrade-hybrid-page',
                analytics: ACCOUNT_ANALYTICS.appOnClickStartButtonMessage('ampliar cuenta'),
                link: {
                  page: 'upgradeCustomer'
                }
              },
              navigate_to_request_money: {
                bind: 'navigate-operations-to-request-money',
                analytics: _onClickStart('global'),
                link: {
                  page: 'requestMoney',
                  params: {
                    continue: 'continue',
                    cleanUntil: 'operations'
                  }
                }
              },
              navigation_payment_clarifications: {
                bind: 'navigate-promotions-payments',
                analytics: ANALYTICS_ADVANCE_PROMOTIONS.appOnClickStart,
                link: {
                  page: 'promotionsAdvancedPayments',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              additional_card_detail_navigation_to_card_balance_limit_update: {
                bind: 'navigate-operations-to-edit-available-credit-limit',
                link: {
                  cleanUntil: 'operations',
                  page: 'editCreditCardLimits',
                  params: {
                    productId: 'productId'
                  }
                }
              }
            },
            params: {
              productId: 'productId',
              continue: 'continue'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/glomo-analytics-mobile-top-up-manager',
        tag: 'glomo-analytics-mobile-top-up-manager-mx',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              navigation_product_detail_to_mobile_top_up: {
                bind: 'onClickStart'
              }
            },
            out: {
              analytics_on_click_start: {
                bind: 'analytics-on-click-start',
                analytics: ANALYTICS_MOBILE_TOP_UP.APP_ON_CLICK_START
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-operative-selector-manager-mx',
        familyPath: 'glomo-operative-selector-manager',
        properties: {
          projectNameGlomo: ACCOUNT_ANALYTICS.bindLiterals.PROJECT_NAME_GLOMO,
          projectNameGlomoAlwaysOn: ACCOUNT_ANALYTICS.bindLiterals.PROJECT_NAME_GLOMO_ALWAYSON,
          standInFeatureFlags: {
            transfer: ['glomo.standin.transfers.alwaysOn', 'glomo.standin.transfers.internal']
          },
          cellsConnections: {
            in: {
              global_feature_stand_in_status: {
                bind: 'standInMode'
              },
              open_unavailable_stand_in_modal: {
                bind: 'operationalsNavigateTo'
              },
              app_click_start_transfers: {
                bind: 'onClickStartOperationalsTransfer'
              }
            },
            out: {
              global_alert_manager_open_with_settings: {
                bind: 'open-modal'
              },
              app_click_start_transfers_from_operationals: {
                bind: 'app-click-start-transfers-operationals-section',
                analytics: ACCOUNT_ANALYTICS._getOnClickStart('transfer')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-tpw-provisioning',
        familyPath: '@glomo-web-components/bbva-analyticmanager-payments',
        render: 'litElement',
        properties: {
          wallet: isNativeIos ? 'apple' : 'google',
          cellsConnections: {
            in: {
              global_get_card_orange_data_success: {
                bind: 'cardData'
              },
              navigate_to_third_party_wallet_provisioning: {
                bind: 'sendInternalLinkOperative'
              },
              navigate_to_third_party_wallet_provisioning_error_operations: {
                bind: 'sendErrorPendingCardGooglePay'
              },
              navigate_to_third_party_wallet_provisioning_error_off_operations: {
                bind: 'sendErrorCardOffGooglePay'
              }
            },
            out: {
              [pageName + '_analytic_internal_link']: {
                bind: 'internal-link-operative',
                analytics: analyticsProvisioning.internalLink
              },
              [pageName + '_analytic_internal_link_error']: {
                bind: 'internal-link-operative-error',
                analytics: analyticsProvisioning.internalLink
              },
              [pageName + '_analytic_footprint_error_pending']: {
                bind: 'error-card-pending-google-pay',
                analytics: analyticsProvisioning.getFootPrintError('errorPendingCard')
              },
              [pageName + '_analytic_footprint_error_off']: {
                bind: 'error-card-off-google-pay',
                analytics: analyticsProvisioning.getFootPrintError('errorCardOff')
              },
              analytics_manager_provisioning_persist_data: {
                bind: 'analytic-manager-provisioning-persist-data'
              }
            }
          }
        }
      }
    ]
  };

  const connectionsOut = utils.connectionsOut(base);
  connectionsOut('glomo-operations-list-group').global_alert_manager_open_with_settings = {
    bind: 'navigate-operations-wallet-error'
  };
  return base;
};
