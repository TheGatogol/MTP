'use strict';

/*eslint complexity: ["error", 100]*/
/*eslint-disable*/
module.exports = PRODUCT => CONFIG => {
  const utils = require('../common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency();
  const COUNTRY = utils.getCountry();
  const isNativeIos = CONFIG.nativeIos || false;
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)(PRODUCT);
  const SHOW_OPERATIONS = true;
  const {APP_ON_CLICK_START} = require('../analytics/_cardlessWithdrawal')(PRODUCT);
  const ANALYTICS = {
    DEPOSITPURCHASE: require('../analytics/_depositsPurchase')(CONFIG),
  }
  const { getAdvancedFootprintSustainableRateJustification } = require('../analytics/_sustainableRateJustification')(CONFIG);

  const CONSIDER_BILLING_PERIOD = (PRODUCT === 'card');
  const OPERATION_DISABLE = {
    loan: [
      'ANNULLED',
      'IN_ANALYSIS',
      'TO_BE_VALIDATED',
      'CHARGED_OFF',
      'CLOSED'
    ],
  };

  const base = {
    currentPage: {
      url: PRODUCT + '/',
      params: []
    },
    hash: PRODUCT + '-' + COUNTRY + '-' + CONFIG.environment,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        preventScrollWithOverlay: true,
        extraHeaderClass: 'dark-blue-bg',
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            [PRODUCT + '_product_detail_init_page']: {
              bind: 'recalculateHeader'
            },
            ['global_' + PRODUCT + '_product_detail_reset_page']: {
              bind: 'closeConfigurations'
            },
            [PRODUCT + '_product_detail_patch_activations']: {
              bind: 'resetLayerScroll'
            }
          },
          out: {
            [PRODUCT + '_product_detail_content_scroll']: {
              bind: 'template-content-scroll'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-product-detail-manager',
        properties: {
          cellsConnections: {
            in: {
              [PRODUCT + '_product_detail_init_page']: {
                bind: 'init'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              ['global_' + PRODUCT + '_edit_alias_error']: {
                bind: 'error'
              },
              ['__bridge_evt_nav-request']: {
                bind: 'pageIsNotLoaded'
              }
            },
            out: {
              [PRODUCT + '_product_detail_get']: {
                bind: 'init-services'
              },
              [PRODUCT + '_open_edit_alias_error']: {
                bind: 'error-on-edit-alias'
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cache: [
            PRODUCT + 'MoreInfo',
            PRODUCT + 'Transactions',
            PRODUCT + 'TransactionDetail',
            PRODUCT + 'EditAlias',
            PRODUCT + 'Activations',
            PRODUCT + 'CreditCardPayment',
            'cardBlockNormal',
            'monthlyStatement',
            'prepaidCardTopUp',
            'operations',
            'billPayments',
            'transfer',
            'cardlessWithdrawal',
            'loanExpiredInstallments',
            'loanInstallments',
            'loanPayment',
            'mobilePhoneWalletTransfer',
            'depositImpositionDetail',
            'cardConfigByOperation',
            'increment',
            'reward',
            'cardWithoutData',
            'codicelPeerToPeerSend',
            'comingSoon'
          ],
          private: true,
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT]: {
                bind: 'init'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              [PRODUCT + '_product_detail_init_page']: {
                bind: 'init-page'
              },
              global_product_detail_init_page: {
                bind: 'init-page'
              },
              global_get_offer_banner: {
                bind: 'init-page'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          removeSpaces: true,
          leftIcon: 'coronita:return-12',
          group: PRODUCT,
          titleName: 'cells-product-summary-' + PRODUCT + '-header-title',
          showProductType: false,
          showDefaultTitleName: false,
          mask: {
            separator: '•',
            chars: VISIBLE_CHARS,
            status: true
          },
          cellsConnections: {
            in: {
              [PRODUCT + '_detail_response']: {
                bind: 'product'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + '_show_product_header']: {
                bind: 'haveMaskedNumber'
              },
              qr_reader_discard_mask_header: {
                bind: 'haveMaskedNumber'
              }
            },
            out: {
              ['navigation_' + PRODUCT + '_product_detail_back_request']: {
                bind: 'click-left-button',
                backStep: true,
                skipHistory: true,
                link: {
                  page: 'dashboard'
                }
              }
            }
          }
        },
        propertiesSpherica: {
          leftIcon: 'coronita:back-mini',
          className: 'header--core-grey header',
          variant: 'primary-alt',
          leftIconText: 'cells-molecule-header-spherica-back'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-product-summary-' + PRODUCT,
        tagSpherica: `cells-product-summary-${PRODUCT}-spherica`,
        properties: {
          localCurrency: LOCAL_CURRENCY,
          showAccountNumber: false,
          maskedAmountNumberChars: VISIBLE_CHARS,
          cellsConnections: {
            in: {
              [PRODUCT + '_detail_response']: {
                bind: PRODUCT
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              active_local_storage_succes:{
                bind: 'activeFlagSustainableLoanReview'
              },
              ['navigation_product_edit_alias_to_' + PRODUCT]: {
                bind: 'reset'
              },
              ['global_' + PRODUCT + '_credit_card_payment_success']: {
                bind: 'reset'
              },
              global_product_mobile_top_up_success: {
                bind: 'reset'
              },
              global_product_transfer_success: {
                bind: 'reset'
              },
              global_product_payment_success: {
                bind: 'reset'
              },
              global_product_cardless_withdrawal_success: {
                bind: 'reset'
              },
              global_product_mobile_phone_wallet_transfer_success: {
                bind: 'reset'
              },
              [PRODUCT + '_product_detail_patch_activations']: {
                bind: 'reset'
              },
              card_activations_patch_activations_success: {
                bind: 'reset'
              },
              global_reward_detail_parsed_response:{
                bind: 'reward'
              },
              global_product_loan_payment_success: {
                bind: 'reset'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'maskedAmount'
              },
              upgrade_account_icon_message_type: {
                bind: 'iconMessageType'
              },
              upgrade_account_icon_message_icon: {
                bind: 'iconMessageIcon'
              },
              upgrade_account_icon_message_icon_link_button: {
                bind: 'iconMessageIconLinkButton'
              },
              upgrade_account_icon_message_title: {
                bind: 'messageHeadingIconInfo'
              },
              upgrade_account_icon_message_messages: {
                bind: 'iconMessageMessages'
              },
              upgrade_account_icon_message_msg: {
                bind: 'messageIconInfo'
              },
              upgrade_account_icon_message_link_button_label: {
                bind: 'linkButtonMessage'
              },
              upgrade_account_icon_message_button_label: {
                bind: 'buttonMessage'
              },
              upgrade_account_icon_message_button_style: {
                bind: 'iconMessageButtonStyle'
              },
              upgrade_account_icon_message_link_button_style: {
                bind: 'iconMessageLinkButtonStyle'
              },
              upgrade_account_icon_message_link_button_span_style: {
                bind: 'iconMessageLinkButtonSpanStyle'
              },
              upgrade_account_icon_message_link_button_atom_icon_style: {
                bind: 'iconMessageLinkButtonAtomIconStyle'
              },
              upgrade_account_icon_message_button_event_name: {
                bind: 'iconMessageButtonEventName'
              },
              upgrade_account_icon_message_link_button_event_name: {
                bind: 'iconMessageLinkButtonEventName'
              },
              upgrade_account_icon_message_show: {
                bind: 'showIconMessage'
              },
              upgrade_account_icon_message_link_button_show: {
                bind: 'showIconMessageLinkButton'
              },
              loan_product_detail_init_page: {
                bind: 'getStorageSustainableLoan'
              },
              active_storage_to_sustainable_rate_justification:{
                bind: 'activeFlagSustainableLoanReview'
              },
              global_storage_get_sustainable_loan_review_success: {
                bind: 'saveLocalStorageSustainableLoan'
              },
              global_storage_get_sustainable_loan_review_error: {
                bind: 'saveLocalStorageSustainableLoan'
              }
            },
            out: {
              [PRODUCT + '_show_product_header']: {
                bind: 'show-product-header-changed'
              },
              global_account_upgrade_account_upgrade_button_click: {
                bind: 'click-upgrade-account'
              },
              upgrade_account_upgrade_link_button_click: {
                bind: 'click-upgrade-account-restriction-information'
              },
              ['global_'+PRODUCT+'_product_detail_info_modal']: {
                bind: 'cells-product-summary-optional-items-key-icon'
              },
              global_get_from_storage: {
                bind: 'get-local-storage-sustainable-loan-review'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-sustainable-loan-review'
              }
            },
            params: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message-spherica',
        properties: {
          type: 'success',
          autoHide: true,
          fullHeight: true,
          time: 3000,
          message: [ 'cells-' + PRODUCT + '-edit-alias-bottom-modal-message-success' ],
          messageDisabled: true,
          cellsConnections: {
            in: {
              ['global_' + PRODUCT + '_edit_alias_success']: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'error',
          autoHide: true,
          time: 3000,
          message: [ 'cells-' + PRODUCT + '-edit-alias-bottom-modal-message-error' ],
          messageDisabled: true,
          cellsConnections: {
            in: {
              [PRODUCT + '_open_edit_alias_error']: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      }
    ]
  };

  if (PRODUCT === 'account') {
    base.components.push(
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-products',
        properties: {
          host: CONFIG.globalServices.host,
          productsApiVersion: CONFIG.globalServices.versions.products,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              upgrade_account_get_product_limits: {
                bind: 'getProductLimits'
              }
            },
            out: {
              upgrade_account_get_poroduct_limits_success: {
                bind: 'success-on-get-product-limits'
              },
              upgrade_account_get_poroduct_limits_error: {
                bind: 'error-on-get-product-limits'
              }
            }
          }
        }
      }
    );
  }

  if (SHOW_OPERATIONS) {
    base.components.push(
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-operations-dm-' + COUNTRY,
        familyPath: 'glomo-operations-dm',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          continue: PRODUCT,
          depositEnabled: true,
          productType: PRODUCT,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          titleIdsNotAllowedToSeeFinanceMovements: ['003', 'B1', 'B2', 'B3', 'B4', 'M1', 'M2', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'],
          disabledOperationStatus: OPERATION_DISABLE,
          cellsConnections: {
            in: {
              global_feature_flag_available_operations: {
                bind: 'availableOperations'
              },
              [PRODUCT + '_get_operations_product']: {
                bind: 'getOperations'
              },
              [PRODUCT + '_set_operations_product_error']: {
                bind: 'getOperations'
              },
              ['global_' + PRODUCT + '_product_detail_reset_page']: {
                bind: 'reset'
              },
              navigation_product_detail_to_codicel_agree_and_remove_consent:{
                bind: 'reset'
              },
              [PRODUCT + 'get_full_product_detail_operations_list']: {
                bind: 'getFullOperations'
              },
              global_dashboard_set_related_accounts: {
                bind: 'setAccounts'
              },
              product_detail_device_info_nfc_status_success: {
                bind: 'associableToNFCFlag'
              },
              active_sustainable_loan: {
                bind: 'isActiveSustainable'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFlagCollection'
              }
            },
            out: {
              [PRODUCT + 'set_limit']: {
                bind: 'set-limit'
              },
              ['global_' + PRODUCT + '_featured_product_detail_operations_list']: {
                bind: 'featured-operations-list'
              },
              global_full_product_detail_operations_list: {
                bind: 'full-operations-list'
              },
              global_product_hide_operations_list: {
                bind: 'hide-operations-list'
              }
            },
            params: {
              stateAccounts: 'stateAccounts',
              productId: 'productId',
              continue: 'continue'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-operations-list-indicators',
        tagSpherica: 'cells-operations-list-indicators-spherica',
        properties: {
          group: PRODUCT,
          continue: PRODUCT,
          localCurrency: LOCAL_CURRENCY,
          limit: 3,
          defaultLimit: 3,
          viewMore: true,
          alwaysShowViewMore: false,
          cellsConnections: {
            in: {
              ['global_' + PRODUCT + '_featured_product_detail_operations_list']: {
                bind: 'operations'
              },
              ['navigation_' + PRODUCT + '_product_detail_back_request']: {
                bind: 'reset'
              },
              global_product_transfer_success: {
                bind: 'reset'
              },
              ['global_' + PRODUCT + '_credit_card_payment_success']: {
                bind: 'reset'
              },
              global_product_cardless_withdrawal_success: {
                bind: 'reset'
              },
              global_product_mobile_phone_wallet_transfer_success: {
                bind: 'reset'
              },
              global_product_hide_operations_list: {
                bind: 'hidden'
              },
              [PRODUCT + 'set_limit']: {
                bind: 'limit'
              },
            },
            out: {
              [PRODUCT + 'get_full_product_detail_operations_list']: {
                bind: 'get-full-operations'
              },
              navigation_product_detail_to_operations: {
                bind: 'url-to-operations',
                link: {
                  page: 'operations',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              global_account_detail_open_transfer_bubble: {
                bind: 'navigation-product-to-transfer-error'
              },
              navigation_product_detail_to_transfer: {
                bind: 'navigation-product-to-transfer',
                link: {
                  page: 'transfers',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_mobile_top_up: {
                bind: 'navigation-product-to-mobile-top-up',
                link: {
                  page: 'mobileTopUp',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_mobile_top_up_packages: {
                bind: 'navigation-product-to-mobile-top-up-packages',
                link: {
                  page: 'mobileTopUpPackages',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_prepaid_card_top_up: {
                bind: 'navigation-product-to-card-gift-recharge',
                link: {
                  page: 'prepaidCardTopUp',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_cardless_withdrawal: {
                bind: 'navigation-product-to-cardless-withdrawal',
                analytics: APP_ON_CLICK_START,
                link: {
                  page: 'cardlessWithdrawal',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              ['navigation_product_detail_to_' + PRODUCT + '_credit_card_payment']: {
                bind: 'navigation-product-to-' + PRODUCT + '-credit-card-payment',
                link: {
                  page: PRODUCT + 'CreditCardPayment',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                },
              },
              ['navigation_' + PRODUCT + '_detail_to_block_card_normal']: {
                bind: 'navigation-product-to-block-card-normal',
                link: {
                  page: 'cardBlockNormal',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              ['navigation_' + PRODUCT + '_detail_to_increment']: {
                bind: 'navigation-product-to-increment',
                link: {
                  page: 'increment',
                  params: {
                    productId: 'productId',
                    offerId: 'offerId',
                  },
                },
              },
              navigation_product_detail_to_mobile_payment: {
                bind: 'navigate-operations-mobile-payment',
                link: {
                  page: 'mobilePayment',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_monthly_statement: {
                bind: 'navigation-product-to-monthly-statement',
                link: {
                  page: 'monthlyStatement',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_edit_alias: {
                bind: 'navigation-to-edit-' + PRODUCT + '-alias',
                link: {
                  page: PRODUCT + 'EditAlias',
                  params: {
                    productId: 'productId',
                    productType: 'productType'
                  }
                }
              },
              navigation_product_detail_to_new_fund: {
                bind: 'navigation-product-to-new-fund',
                link: {
                  page: 'addFundToContract',
                  params: {
                    productId: 'productId',
                    productType: 'productType'
                  }
                }
              },
              navigation_product_detail_to_bill_payments: {
                bind: 'navigation-product-to-bill-payments',
                link: {
                  page: 'billPayments',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_to_sustainable_rate_justification: {
                bind: 'navigation-product-to-sustainable-rate-justification',
                analytics: getAdvancedFootprintSustainableRateJustification('getInternalLink', 'detalle', 'subir y enviar facturas'),
                link: {
                  page: 'sustainableRateJustification'
                }
              },
              navigation_product_detail_to_deposits_purchase_sales: {
                bind: 'navigation-product-to-deposit-purchase',
                analytics: ANALYTICS.DEPOSITPURCHASE.APP_ON_CLICK_START,
                link: {
                  page: 'depositsPurchase',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_checks_section: {
                bind: 'navigation-product-to-checks-section',
                link: {
                  page: 'checksSection',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_product_detail_to_loan_payments: {
                bind: 'navigation-loan-detail-to-loan-payment',
                link: {
                  page: 'loanPayment',
                  params: {
                    productId: 'productId',
                    continue: 'continue',
                    statusId: 'statusId',
                    totalInstallments: 'totalInstallments'
                  }
                }
              },
              navigation_to_codicel_agree_and_remove_consent: {
                bind: 'navigate-operations-to-codicel_agree_and_remove_consent',
                link: {
                  page: 'codicelAgreeAndRemoveConsent',
                }
              },
              navigation_to_codicel_peer_to_peer_send: {
                bind: 'navigate-operations-to-codicel_peer_to_peer_send',
                //analytics: ANALYTICS_CLEAN_CARD.APP_ON_CLICK_START,
                link: {
                  page: 'codicelPeerToPeerSend',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              global_loan_payment_up_to_date_open: {
                bind: 'global-loan-payment-up-to-date-open'
              },
              navigation_product_detail_to_equity_assistance: {
                bind: 'navigation-product-to-equity-assistance',
                link: {
                  page: 'equityAssistance',
                  params: {
                    productId: 'productId'
                  }
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
  }

  const get = utils.get(base);

  if (CONSIDER_BILLING_PERIOD) {
    Object.assign(get('cells-product-detail-manager').properties.cellsConnections.params, { billingPeriod: 'billingPeriod' });
  }

  if (PRODUCT === 'reward') {
    delete get('cells-product-detail-manager').properties.cellsConnections.in['global_' + PRODUCT + '_product_detail_reset_page'];
  }

  return base;
};
