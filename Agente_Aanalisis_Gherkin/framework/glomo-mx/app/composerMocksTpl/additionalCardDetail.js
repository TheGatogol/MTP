'use strict';

module.exports = CONFIG => {
  const { addFeatureFlag, getLanguage } = require('./common/helpers/_utils');
  const language = getLanguage();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const analyticsMobilePayment = require('./analytics/_mobilePayment')({});
  const constants = require('./pfm/_constants');
  const { commons: { cards, limitedApp } } = require('./analytics/common/_literals');
  const analyticsMonthlyStatement = require('./analytics/_monthlyStatement')('card');
  const analyticsFinanceMultipurchase = require('./analytics/_financeTransactionMultipurchase')(CONFIG);
  const analyticsAlwaysOn = require('./analytics/_standInAlwaysOn')(CONFIG);
  const analyticsAdditionalCardDetail = require('./analytics/_additionalCardDetail')();
  const { CARDS_CHARGES_AND_COMMISSIONS: cardsChargesAndCommissions } = require('./product/_constanst');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { pfm = '', listEvidences = '', customersV1 = '' }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const base = {
    hash: 'additional-card-detail',
    currentPage: {
      url: '/additional-card-detail/:additionalProductId'
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: 0,
        className: nativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      cellsConnectionStatus('additionalCardDetail'),
      {
        type: 'DM',
        zone: 'app__main',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-feature-product-detail-cards-mx',
        tag: 'bbva-feature-product-detail-cards-mx',
        container: true,
        properties: {
          allowTDCrequest: true,
          id: 'productDetailCardsMx',
          host,
          requiredToken,
          native,
          iOSFixedHeader: nativeIos,
          language,
          creditCardOperativesToHide: ['cardLocation', 'payCard', 'editAlias'],
          chargesAndCommissions: cardsChargesAndCommissions,
          isAdditionalCard: true,
          cardNumberAttemps: 0,
          limitNumberOfOperatives: 3,
          receiptActivationPurchaseDigitalAdditional: true,
          globalImplementation: true,
          showServiceErrorLimitsAttempts: true,
          showRetriesErrorLimitOnCardActivations: true,
          localStorageKey: 'cardFeatureFlags',
          flagFTMP: true,
          isGlobalMX: true,
          showImageProduct: true,
          defaultCardImageSrc: 'images/cards/blank_card.svg',
          showNipOperativeActionId: 'CD001',
          cardDetailExpiredDateKey: 'expiredDate',
          statusFlags: {
            'digitalCardOrange': true,
            'getCardOrangeV1': true
          },
          statusFlagsMovements: {
            'rewardsBenefitsOrange': false,
            'financeMovementsOrange': true
          },
          evidencesApiVersion: listEvidences,
          customerApiVersion: customersV1,
          showViewMoreOperative: true,
          debitCardOperativesToHide: ['cardLocation', 'cardActivation', 'accountStatus', 'payCard', 'transfers'],
          deepLinkCases: ['HTDCLIM', 'HTDCPAY', 'HTDCOFF', 'HTDDISF', 'viewDigitalCard', 'turnOffCard'],
          electronicSignature: 'Autorizado con firma electrónica',
          evidenceTypeId: 'BD-MX-AA-ACTDCA-001',
          incompleteDebitExpedientCause: 'MPE4069: BLOQUEO TEMP DEBIT  FALTAN DOC EXP-UNIC',
          incompleteCreditExpedientCause: 'MPE4069: BLOQUEO TEMP CREDIT  FALTAN DOC EXP-UNIC',
          incompleteExpedientStatus: 409,
          productType: 'CARDS',
          maximumAdditionalCards: 9,
          alwaysShowViewMoreOperative: false,
          getCardV2ServiceFlagName: 'glomo.payments.getCardV2',
          validBalanceIds: ['AVAILABLE_CURRENT_BALANCES', 'CURRENT_BALANCE'],
          localStorageErrorCode: 999,
          accountsInvalidProductIds: [ 'ME' ],
          accountsValidProductTypes: ['COMMON_AND_SAVINGS', 'ACCOUNT'],
          cellsConnections: {
            params: {
              cardId: 'additionalProductId',
              simpleCode: 'simpleCode'
            },
            in: {
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              global_open_glomo_alert_manager_additional_limits_update_success: {
                bind: 'editLimitToastConfiguration'
              },
              global_client_id: {
                bind: 'clientId'
              },
              global_user_id: {
                bind: 'customerId'
              },
              additional_card_detail_save_digital_card_activated: {
                bind: 'vaultProtection'
              },
              global_cache_channel: {
                bind: 'globalCacheStorage'
              },
              global_storage_get_loginData_success: {
                bind: 'responseClientId'
              },
              navigation_additional_card_received_channel: {
                bind: 'additionalCardDataReceived'
              },
              global_unparsed_offers_retrieved: {
                bind: 'offersData'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlagCollection'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              __bridge_page_additionalCardDetail: {
                bind: 'init'
              },
              additional_card_detail_send_additional_list_cards: {
                bind: 'additionalsCards'
              },
              global_storage_get_cardFeatureFlags_success: {
                bind: 'setDataFromLocalStorage'
              },
              global_storage_get_cardFeatureFlags_error: {
                bind: 'setDataFromLocalStorage'
              },
              global_feature_stand_in_status: {
                bind: 'standIn'
              },
              additional_card_detail_init_stand_in: {
                bind: 'initialStandIn'
              },
              global_card_detail_card_detail_data_reload: {
                bind: 'getCardDetailData'
              },
              global_card_credit_card_payment_success: {
                bind: 'reset'
              },
              additional_card_detail_card_data_error: {
                bind: 'errorCardDetailData'
              },
              global_card_detail_card_activation_error_retry: {
                bind: 'activationCard'
              },
              global_card_detail_card_activation_help_off: {
                bind: 'activationCard'
              },
              global_card_detail_card_activation_help_on: {
                bind: 'activationCard'
              },
              global_storage_get_card_detail_data_error: {
                bind: 'getCardDetailLocalStorage'
              },
              global_storage_get_card_detail_data_success: {
                bind: 'getCardDetailLocalStorage'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackButton'
              },
              global_card_edit_alias_success: {
                bind: 'updateAliasForCard'
              },
              global_opened_modal: {
                bind: 'closedModal'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'maskedAmount'
              },
              additional_card_detail_set_navigation_for_credit_card_limit_increase: {
                bind: 'setOfferNavigation'
              },
              additional_card_detail_transaction_tap: {
                bind: 'onTapTransactions'
              },
              additional_card_detail_init_page: {
                bind: 'standInGetCard'
              },
              navigation_card_detail_stand_in_modals: {
                bind: 'standInOperationModals'
              },
              navigation_product_detail_to_operations: {
                bind: 'standInOperationModals'
              },
              update_additional_card_activation: {
                bind: 'updateAdditionalCardStatus'
              },
              additional_card_detail_get_indicators_success: {
                bind: 'manageMultipurchaseFinancingBanner'
              },
              flag_feature_business_debit_card: {
                bind: 'featureBusinessDebitCard'
              },
              card_detail_reward_banner_click: {
                bind: 'sendCardFilteredPoints'
              },
              global_login_success: {
                bind: 'setLocalStorageMessage'
              },
              CARD_CREDIT_CARD_PAYMENT_PROMISE_GO_TO_CARD_DETAIL: {
                bind: 'pushNotificationData'
              },
              NAVIGATE_TO_CARD_PAYMENT_PROMISE: {
                bind: 'returnToPromise'
              },
              NAVIGATE_TO_CREDIT_CARD_PAYMENT_PROMISE: {
                bind: 'reset'
              },
              global_card_transaction_servicing_post_contracting_update_card_detail: {
                bind: 'retryGetCardDetailData'
              },
              global_card_transaction_servicing_update_card_detail: {
                bind: 'retryGetCardDetailData'
              },
              global_feature_flag_multipurchase_debit_multipurchase: {
                bind: 'financeDebitFlag'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'argsDeeplink'
              },
              additional_card_detail_status_card_global_api_version: {
                bind: 'statusCardApiVersionV2'
              },
              global_navigation_to_additional_card_detail: {
                bind: 'additionalCardData'
              },
              additional_card_detail_get_additional_card_flag_to_send: {
                bind: 'sendAdditionalFlag'
              },
              additional_card_detail_get_additional_card_flag_to_send_QR: {
                bind: 'sendAdditionalFlag'
              },
              additional_card_detail_check_navigation_to_edit_available_credit: {
                bind: 'checkEditCardCreditAvailableNavigation'
              },
              connection_status_additionalCardDetail_online: {
                bind: 'networkReconnected'
              }
            },
            out: {
              persist_data_additional_card_flag: {
                bind: 'send-additional-card-flag'
              },
              navigation_loan_detail_to_card_activation: {
                bind: 'navigate-operations-to-card-activation',
                link: {
                  page: 'cardActivation',
                  params: {
                    cardId: 'productId'
                  }
                }
              },
              navigation_to_card_activation_with_qr_code: {
                bind: 'navigate-operations-to-card-activation-with-qr-code',
                link: {
                  page: 'cleanCardOperations',
                  params: {
                    cardId: 'productId',
                    operativeAction: 'operativeAction',
                    continue: 'continue'
                  }
                }
              },
              navigation_loan_detail_to_account_status: {
                bind: 'navigate-operations-to-account-status',
                analytics: analyticsMonthlyStatement.dynamicLevel1('tarjetas'),
                link: addFeatureFlag('card.monthlyStatement', {
                  page: 'cardMonthlyStatement',
                  params: {
                    cardId: 'productId'
                  }
                })
              },
              persist_data_additional_show_nip_qr: {
                bind: 'persisted-data-additional'
              },
              global_selected_card_api_version: {
                bind: 'selected-card-api-version'
              },
              global_open_additional_card_detail_edit_available_balance_no_active_modal: {
                bind: 'open-additional-available-credit-limit-edit-modal-no-active'
              },
              global_open_additional_card_detail_edit_available_balance_no_balance_modal: {
                bind: 'open-additional-available-credit-limit-edit-modal-no-balance'
              },
              additional_card_detail_check_navigation_to_edit_available_credit: {
                bind: 'navigate-operations-to-edit-available-credit-limit'
              },
              global_additional_card_detail_open_error_activation_digital_purchase_modal: {
                bind: 'show-error-activation-digital-purchase-modal'
              },
              global_card_detail_open_confirm_activation_digital_purchase_modal: {
                bind: 'show-confirm-activation-digital-purchase-modal'
              },
              additional_card_detail_confirm_activation_digital_purchase: {
                bind: 'confirm-activation-digital-purchase-evidence'
              },
              global_get_card_orange_data_success: {
                bind: 'set-card'
              },
              global_get_additional_card_orange_data_success: {
                bind: 'set-card-additional'
              },
              additional_card_detail_flag_list_get_transactions_set_error_empty: {
                bind: 'flag-list-empty-transactions-error-tdd'
              },
              additional_card_detail_associated_account_number: {
                bind: 'send-associated-account-number'
              },
              additional_card_detail_associated_account_id: {
                bind: 'send-associated-account-id'
              },
              additional_card_detail_virtual_card_id: {
                bind: 'send-card-id-virtual'
              },
              global_send_card_detail_data: {
                bind: 'get-card-detail-data-success'
              },
              additional_card_detail_set_selected_card_info: {
                bind: 'set-selected-card-info'
              },
              orange_finance_valid_card: {
                bind: 'finance-valid-card'
              },
              orange_movements_flags: {
                bind: 'set-orange-movements-flags'
              },
              orange_movements_version: {
                bind: 'set-orange-movements-version'
              },
              global_card_detail_data_success_channel: {
                bind: 'get-card-detail-data-success'
              },
              disptach_linkCard: {
                bind: 'dispatch-linkcard'
              },
              disptach_linkCard_subProduct: {
                bind: 'dispatch-linkcard-subProduct'
              },
              additional_card_detail_manager_product_id: {
                bind: 'set-product-id-from-manager'
              },
              orange_reward_benefits_valid_card: {
                bind: 'reward-benefits-valid-card'
              },
              additional_card_detail_manager_product_type: {
                bind: 'set-product-type-from-manager'
              },
              additional_card_detail_manager_related_id: {
                bind: 'set-related-id-from-manager'
              },
              global_card_orange_over_draft_modal: {
                bind: 'open-modal-over-draft-info'
              },
              additional_card_detail_open_simulator_onboarding_modal: {
                bind: 'open-simulator-onboard-modal'
              },
              global_navitage_to_payment_simulation: {
                bind: 'navigate-to-card-payment-simulation',
                link: {
                  page: 'interestSimulator',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              additional_card_detail_set_header_expandable_list_title: {
                bind: 'set-additional-cards-expandable-list-title'
              },
              additional_card_detail_set_additional_cards_products_error: {
                bind: 'set-additional-cards-data-error'
              },
              additional_card_detail_update_additional_card_status: {
                bind: 'update-additional-card-status'
              },
              global_send_financial_overview_to_cvv: {
                bind: 'send-financial-overview-data-to-ccv'
              },
              global_card_detail_open_activation_error: {
                bind: 'open-modal-activation-error'
              },
              product_card_detail_open_card_activation_help: {
                bind: 'open-modal-card-activation-help'
              },
              global_card_detail_open_payment_details_help: {
                bind: 'open-modal-payment-details-help'
              },
              dashboard_refresh_financial_overview: {
                bind: 'card-activation-api-dm-update'
              },
              global_get_from_storage: {
                bind: 'get-card-detail-from-local-storage'
              },
              global_set_in_storage: {
                bind: 'global-set-in-storage'
              },
              go_back_to_dashboard: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-dashboard',
                link: {
                  page: 'dashboard'
                },
                skipHistory: true
              },
              global_hanlder_native_back_button: {
                bind: 'close-modal-back-button'
              },
              global_get_campaigns_offers: {
                bind: 'get-customer-offers'
              },
              global_card_digital_card_associated_data: {
                bind: 'send-digital-card-data'
              },
              global_set_financial_overview_cards_list: {
                bind: 'send-financial-overview-data-parsed'
              },
              global_navigate_to_show_cvv: {
                bind: 'navigate-to-activate-digital-card',
                link: {
                  page: 'cardDynamicCvv',
                  params: {
                    digitalProductId: 'digitalProductId'
                  }
                }
              },
              additional_card_detail_navigation_to_card_balance_limit_update: {
                bind: 'navigate-to-additional-available-credit-limit-edit',
                link: {
                  page: 'editCreditCardLimits',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              global_set_financial_overview_accounts: {
                bind: 'get-accounts-success'
              },
              set_card_data_for_interest_simulator: {
                bind: 'get-card-detail-data-success'
              },
              global_card_is_card_overdraft: {
                bind: 'card-has-overdraft'
              },
              global_card_is_crea_product_card_selected: {
                bind: 'card-is-crea-product-card'
              },
              reset_manager: {
                bind: 'card-detail-manager-reset-page'
              },
              additional_card_detail_analytics_initial_event: {
                bind: 'analytics-fire-advanced-fingerprint-card-detail'
              },
              global_prepare_feedback: {
                bind: 'rating-security-code-turn-on-off-channel'
              },
              send_data_is_business_credit_card_to_cvv: {
                bind: 'set-is-business-credit-card-from-manager'
              },
              global_alert_manager_open_with_settings: {
                bind: 'stand-in-card-detail-modal'
              },
              additional_card_detail_show_aggregation_group_turns: {
                bind: 'show-aggregation-group-turns'
              },
              additional_card_detail_stand_in_analytic_check_activation: {
                bind: 'stand-in-card-detail-check-activation',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'ACTIVATION_CARD')
              },
              additional_card_detail_stand_in_analytic_card_generate: {
                bind: 'stand-in-card-detail-card-generate',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'DIGITAL_CARD')
              },
              additional_card_detail_stand_in_analytic_card_more_details: {
                bind: 'stand-in-card-more-details',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'CARD_MORE_DETAILS')
              },
              additional_card_detail_stand_in_analytic_card_paycard: {
                bind: 'stand-in-card-detail-modal-paycard',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'PAY_CARD')
              },
              additional_card_detail_stand_in_analytic_edit_limits: {
                bind: 'stand-in-card-detail-modal-editLimits',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'CARD_EDIT_LIMITS')
              },
              additional_card_detail_stand_in_analytic_aStatus: {
                bind: 'stand-in-card-detail-modal-aStatus',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'CARD_STATUS')
              },
              additional_card_detail_stand_in_analytic_viewMore: {
                bind: 'stand-in-card-detail-modal-viewMore',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'VIEW_MORE')
              },
              NAVIGATE_TO_LIMITED_OPERATIVES_INFO: {
                bind: 'navigate-stand-in-mode-operatives',
                link: {
                  page: 'limitedOperativesInfo'
                },
                analytics: analyticsAlwaysOn.standInOperatives(cards, limitedApp)
              },
              navigation_finance_transaction_multipurchase: {
                bind: 'cells-oc-banner-main-click-default',
                analytics: analyticsFinanceMultipurchase.APP_ON_CLICK_START,
                link: {
                  page: 'financeTransactionMultipurchase',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              additional_card_detail_stand_in_reset_icon_message: {
                bind: 'stand-in-reset-error-icon-message'
              },
              additional_card_detail_stand_in_error_message: {
                bind: 'stand-in-error-icon-message'
              },
              additional_card_detail_stand_in_show_message_error: {
                bind: 'stand-in-transactions-show-message-error'
              },
              additional_card_detail_get_card_indicators: {
                bind: 'get-card-indicators'
              },
              additional_card_detail_stand_in_always_on: {
                bind: 'stand-in-card-detail',
                analytics: analyticsAlwaysOn.standInOperatives(cards)
              },
              additional_card_detail_go_to_card_financing: {
                bind: 'go-to-card-financing'
              },
              additional_card_detail_show_finance_debit_multipurchase_banner: {
                bind: 'show-financing-debit-multipurchase-banner'
              },
              additional_card_detail_set_financing_debit_multipurchase_offer_id: {
                bind: 'set-financing-debit-multipurchase-offer-id'
              },
              additional_card_detail_set_finance_multipurchase_banner: {
                bind: 'set-financing-multipurchase-banner'
              },
              additional_card_detail_set_finance_debit_multipurchase_banner: {
                bind: 'set-financing-debit-multipurchase-banner'
              },
              additional_card_detail_hide_finance_debit_multipurchase_banner: {
                bind: 'hide-financing-debit-multipurchase-banner'
              },
              additional_card_detail_hide_finance_multipurchase_banner: {
                bind: 'hide-financing-multipurchase-banner'
              },
              global_get_card_orange_indicators_success: {
                bind: 'get-indicators-multipurchase'
              },
              reward_card_list_item_click: {
                bind: 'show-filtered-points-page',
                link: {
                  page: 'filteredPoints'
                }
              },
              reward_points_balances_api_success: {
                bind: 'set-points-balances'
              },
              reward_points_init_icon_message: {
                bind: 'show-icon-message'
              },
              CARD_CREDIT_CARD_FINANCIAL_DATA: {
                bind: 'set-credit-card-payment-financial'
              },
              NAVIGATE_TO_PAY_CARD: {
                bind: 'navigate-to-credit-card-payment'
              },
              NAVIGATE_TO_DASHBOARD_FROM_PUSH_NOTIFICATION: {
                bind: 'promise-navigation-to-dashboard'
              },
              NAVIGATE_TO_PROMISE_FROM_PUSH_NOTIFICATION: {
                bind: 'promise-navigation-to-cardCreditCardPaymentPromise'
              },
              set_push_data_void: {
                bind: 'set-push-data-void'
              },
              set_more_details_product: {
                bind: 'set-more-details-product'
              },
              reward_send_raw_cards: {
                bind: 'bbva-feature-product-detail-cards-mx-send-raw-cards'
              },
              global_action_launcher_uri: {
                bind: 'send-description-uri'
              },
              global_additional_card_detail_is_next_to_expired: {
                bind: 'bbva-feature-product-detail-cards-is-next-to-expired-send'
              },
              additional_card_detail_hide_transactions_list: {
                bind: 'hide-transaction-list-cards'
              },
              additional_card_detail_go_to_product_detail: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-product-detail',
                backStep: true
              },
              additional_card_detail_manage_navigation_to_mobile_payment: {
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
              additional_card_detail_manage_corner_case_modal_mobile_payment: {
                bind: 'navigate-operations-error'
              },
              navigation_product_detail_to_card_limits: {
                bind: 'navigate-operations-to-edit-limits',
                link: {
                  page: 'listCreditCardLimits',
                  params: {
                    cardId: 'productId'
                  }
                }
              },
              navigation_card_detail_to_block_card_old: {
                bind: 'navigate-operations-to-block-and-replacement-old',
                link: {
                  page: 'blockAndReplacement',
                  params: {
                    cardId: 'cardId',
                    cardTitle: 'cardTitle',
                    cardNumber: 'cardNumber',
                    cardType: 'cardType',
                    cardName: 'cardName'
                  }
                }
              },
              navigation_card_detail_to_edit_alias: {
                bind: 'navigation-to-edit-card-detail-alias',
                link: {
                  page: 'cardEditAlias',
                  params: {
                    cardId: 'productId',
                    continue: 'continue'
                  }
                }
              },
              navigation_card_detail_to_block_card: {
                bind: 'navigate-operations-to-block-and-replacement',
                link: {
                  page: 'cardBlockManagement',
                  params: {
                    cardId: 'cardId',
                    operativeType: 'operativeType'
                  }
                }
              },
              navigation_loan_detail_to_show_nip: {
                bind: 'navigate-operations-to-show-ccv',
                link: {
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
              additional_card_detail_navigation_debit_card_tracking: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-debit-card-tracking',
                link: {
                  page: 'debitCardTracking'
                }
              },
              additional_card_detail_navigation_credit_card_tracking: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-credit-card-tracking',
                link: addFeatureFlag('creditCardTracking', {
                  page: 'creditCardTracking'
                })
              },
              additional_card_detail_get_additional_card_flag_to_send: {
                bind: 'navigate-operations-to-show-ccv'
              },
              additional_card_detail_get_additional_card_flag_to_send_QR: {
                bind: 'navigate-operations-to-show-pin-with-qr-code'
              },
              global_additional_card_detail_open_success_activation_digital_purchase_modal: {
                bind: 'show-success-activation-digital-purchase-modal'
              },
              card_Detail_set_filtered_product_summary_data: {
                bind: 'set-filtered-product'
              },
              card_Detail_set_card_img_product_data: {
                bind: 'send-card-image-product'
              },
              card_Detail_activation_successful: {
                bind: 'patch-activations-successful'
              },
              global_additional_card_detail_card_activation_help_off: {
                bind: 'open-modal-card-activation-help-off'
              },
              global_additional_card_detail_card_activation_help_on: {
                bind: 'open-modal-card-activation-help-on'
              },
              additional_card_detail_analytics_load_error: {
                bind: 'card-detail-load-error',
                analytics: analyticsAdditionalCardDetail.errorLoadCardAdditional
              }
            }
          }
        }
      },
      {
        type: 'DM',
        zone: 'app__main',
        render: 'litElement',
        familyPath: '@glomo-web-components/card-information-transactions-list-searching-enrichment-cards-mx',
        tag: 'card-information-transactions-list-searching-enrichment-cards-mx',
        properties: {
          country: 'mx',
          host,
          isCompleteView: false,
          native,
          pageSize: 5,
          requiredToken,
          isGetTransactionsService: true,
          cellsConnections: {
            params: {
              productId: 'additionalProductId'
            },
            in: {
              global_financial_overview_details: {
                bind: 'financialData'
              },
              additional_card_detail_manager_product_id: {
                bind: 'productId'
              },
              additional_card_detail_hide_transactions_list: {
                bind: 'isHideTransactionList'
              },
              product_detail_cards_mx_go_to_dashboard: {
                bind: 'reset'
              },
              product_detail_cards_mx_go_to_digital_butler: {
                bind: 'reset'
              },
              additional_card_detail_go_to_product_detail: {
                bind: 'reset'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlagCollection'
              },
              card_Detail_persisted_data_additional: {
                bind: 'financialData'
              },
              __bridge_page_additionalCardDetail: {
                bind: 'init'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'maskedAmount'
              },
              global_set_app_settings: {
                bind: 'setAppSettings'
              }
            },
            out: {
              global_action_launcher_dialer: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-bbva-line-call'
              },
              channel_transactions_list_cards_mx_go_to_detail: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-go-to-detail',
                link: {
                  page: 'cardTransactionDetail',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId',
                    contractId: 'contractId',
                    simpleCode: 'simpleCode',
                    pobPromotionFlag: 'pobPromotionFlag',
                    financingType: 'financingType',
                    localId: 'localId'
                  }
                }
              },
              channel_transactions_list_cards_mx_see_all_movements: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-see-all-movements',
                link: {
                  page: 'cardTransactions',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              channel_transactions_list_cards_mx_set_transactions: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-set-transactions'
              },
              channel_transactions_list_cards_mx_set_selected_card: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-set-selected-card'
              },
              channel_transactions_list_cards_mx_set_transaction_detail: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-set-transaction-detail'
              },
              channel_transactions_list_cards_mx_is_additional_card: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-is-additional-card'
              }
            }
          }
        }
      },
      {
        zone: 'productDetailCardsMx.footer-content',
        type: 'UI',
        tag: 'glomo-aggregation-pfm-balances-spherica',
        properties: {
          titleHeader: 'glomo-aggregation-pfm-balances-header-title',
          typeTabsValue: [
            { label: 'glomo-aggregation-pfm-balances-tab-date' },
            { label: 'glomo-aggregation-pfm-balances-tab-category' }
          ],
          emptyGrouperResultsImageSrc: 'images/empty_state_day.svg',
          language,
          hidden: true,
          cellsConnections: {
            in: {
              additional_card_detail_hide_aggregation_group_turn: {
                bind: 'setProperties'
              },
              reset_manager: {
                bind: 'reset'
              },
              go_back_to_dashboard: {
                bind: 'reset'
              },
              additional_card_detail_set_group_period: {
                bind: 'setProperties'
              },
              additional_card_detail_set_error_group_period: {
                bind: 'setProperties'
              }
            },
            out: {
              additional_card_detail_hide_transactions_list: {
                bind: 'hide-transactions-list'
              },
              additional_card_detail_movements_tab: {
                bind: 'get-first-tab'
              },
              additional_card_detail_get_service_pfm_dm: {
                bind: 'get-second-tab'
              },
              additional_card_detail_retry_get_contract_balances: {
                bind: 'tourn-grouper-error-message'
              },
              additional_card_detail_select_step: {
                bind: 'select-accordeon-step'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-pfm-balances-dm',
        properties: {
          pfmCategories: constants.categories,
          cellsConnections: {
            in: {
              additional_card_detail_show_aggregation_group_turns: {
                bind: 'movementsCategorizerFlag'
              },
              additional_card_detail_set_selected_card_info: {
                bind: 'initConfiguration'
              },
              additional_card_detail_get_service_pfm_dm: {
                bind: 'getContractBalances'
              },
              additional_card_detail_retry_get_contract_balances: {
                bind: 'retryGetContractBalances'
              },
              additional_card_detail_get_contract_balance_current_period_success: {
                bind: 'parseContractsBalances'
              },
              additional_card_detail_get_contract_balance_current_period_error: {
                bind: 'errorGetContractBalances'
              },
              additional_card_detail_select_step: {
                bind: 'validateSelectPeriodStep'
              },
              channel_transactions_list_cards_mx_set_transactions: {
                bind: 'getTransactions'
              },
              additional_card_detail_product_get_transactions_error: {
                bind: 'errorGetTransactions'
              },
              reset_manager: {
                bind: 'reset'
              },
              go_back_to_dashboard: {
                bind: 'reset'
              }
            },
            out: {
              additional_card_detail_get_contract_balance_current_period: {
                bind: 'get-group-turns-data-current-period'
              },
              additional_card_detail_set_group_period: {
                bind: 'send-group-turns-data-period'
              },
              additional_card_detail_set_error_group_period: {
                bind: 'set-error-group-turns'
              },
              additional_card_detail_show_toast_empty_period: {
                bind: 'show-toast-empty-period'
              },
              additional_card_detail_set_content_toast_empty_period: {
                bind: 'set-content-toast-empty-period'
              },
              additional_card_detail_hide_aggregation_group_turn: {
                bind: 'hide-aggregation-group-turns'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-pfm',
        properties: {
          host,
          native,
          pfmApiVersion: pfm,
          requiredToken,
          cellsConnections: {
            in: {
              additional_card_detail_manager_product_id: {
                bind: 'contractId'
              },
              additional_card_detail_get_contract_balance_current_period: {
                bind: 'getContractBalances'
              }
            },
            out: {
              additional_card_detail_get_contract_balance_current_period_success: {
                bind: 'get-contract-balances-current-period-success'
              },
              additional_card_detail_get_contract_balance_current_period_error: {
                bind: 'get-contract-balances-current-period-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-card-detail',
        familyPath: '@glomo-web-components/bbva-analyticmanager-card-information',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              additional_card_detail_analytics_initial_event: {
                bind: 'fireAdvancedFingerprintCardDetail'
              },
              additional_card_detail_manage_navigation_to_mobile_payment: {
                bind: 'fireMobilePaymentInternalLink'
              },
              product_card_detail_open_card_activation_help: {
                bind: 'fireAdvancedFingerprintCardDetailOnOffModal'
              },
              card_Detail_activation_successful: {
                bind: 'fireAdvancedFingerprintCardDetailOnOff'
              },
              global_additional_card_detail_card_activation_help_off: {
                bind: 'helpModalOpened'
              },
              global_additional_card_detail_card_activation_help_on: {
                bind: 'helpModalOpened'
              },
              additional_card_detail_manage_corner_case_modal_mobile_payment: {
                bind: 'fireMobilePaymentInternalLink'
              }
            },
            out: {
              additional_card_detail_analytics_fire_mobile_payment_internal_link_credit: {
                bind: 'fire-mobile-payment-internal-link-credit',
                analytics: analyticsMobilePayment.internalLinks.credit
              },
              additional_card_detail_analytics_fire_mobile_payment_internal_link_debit: {
                bind: 'fire-mobile-payment-internal-link-debit',
                analytics: analyticsMobilePayment.internalLinks.debit
              },
              additional_card_detail_analytics_page_view_debit: {
                bind: 'analytics-advanced-fingerprint-card-detail-additional-credit-card',
                analytics: analyticsAdditionalCardDetail.pageViewCardAdditional
              },
              additional_card_detail_analytics_page_view_credit: {
                bind: 'analytics-advanced-fingerprint-card-detail-additional-debit-card',
                analytics: analyticsAdditionalCardDetail.pageViewCardAdditional
              },
              additional_card_detail_analytics_advanced_fingerprint_card_on: {
                bind: 'analytics-advanced-fingerprint-additional-card-detail-card-activation-help-on',
                analytics: analyticsAdditionalCardDetail.getPageViewCardDetallePage('on')
              },
              additional_card_detail_analytics_advanced_fingerprint_card_off: {
                bind: 'analytics-advanced-fingerprint-additional-card-detail-card-activation-help-off',
                analytics: analyticsAdditionalCardDetail.getPageViewCardDetallePage('off')
              },
              additional_card_detail_analytics_advanced_fingerprint_card_off_from_modal: {
                bind: 'analytics-advanced-fingerprint-card-off',
                analytics: analyticsAdditionalCardDetail.getInternalLinkPage('off')
              },
              additional_card_detail_analytics_advanced_fingerprint_card_on_from_modal: {
                bind: 'analytics-advanced-fingerprint-card-on',
                analytics: analyticsAdditionalCardDetail.getInternalLinkPage('on')
              }
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components);
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-product-detail-cards-mx');
  localStorageApp.addOutStorageChannels(base.components, ['cardFeatureFlags', 'card_detail_data'], CONFIG);
  return base;
};
