'use strict';

const utils = require('./common/helpers/_utils');

module.exports = AppConfig => {
  const { addCommonErrors, addRetryErrors } = {
    addCommonErrors: require('./common/commonErrors/_dm-common-errors'),
    addRetryErrors: require('./common/commonErrors/_dm-retry-errors')(AppConfig)
  };
  const localStorageApp = require('./common/_local-storage');
  const localCurrency = utils.getLocalCurrency(AppConfig);
  const language = utils.getLanguage();
  const { commons: { cards, limitedApp } } = require('./analytics/common/_literals');
  const analytics = require('./analytics/_cardDetail')({});
  const analyticsCleanCard = require('./analytics/_cleanCardOperations')(AppConfig);
  const analyticsMonthlyStatement = require('./analytics/_monthlyStatement')('card');
  const analyticsInterestSimulator = require('./analytics/_interestSimulator')(AppConfig);
  const analyticsFinanceMultipurchase = require('./analytics/_financeTransactionMultipurchase')(AppConfig);
  const analyticsFinanceDebitMultipurchase = require('./analytics/_financeTransactionMultipurchaseDebit')(AppConfig);
  const analyticsFinanceDebitMultipurchasePostHiring = require('./analytics/_financeTransactionMultipurchaseDebitPostHiring')(AppConfig);
  const analyticsCreditcardMainpage = require('./analytics/_additionalCreditCardMainPage')({});
  const analyticsAlwaysOn = require('./analytics/_standInAlwaysOn')(AppConfig);
  const analyticsMobilePayment = require('./analytics/_mobilePayment')({});
  const analyticsProvisioning = require('./analytics/_thirdPartyWallet')();
  const analyticsOcDebitCardImmediateDelivery = require('./analytics/_ocDebitCardImmediateDelivery')(AppConfig);
  const analyticsTransactions = require('./analytics/_cardsTransactions.js')({});
  const analyticsMinimumPaymentClarifications = require('./analytics/_minimumPaymentClarifications')(AppConfig);
  const analyticsCardLinkAndActivationQrCard = require('./analytics/_cardLinkAndActivationQrCard.js');
  const analyticsOcDebitCard = require('./analytics/_cardOriginationOcDebitCard')();
  const ANALYTICS_ADVANCE_PROMOTIONS = require('./analytics/_promotionsAdvancedPayments')(AppConfig);
  const analyticsDigitalCardActivations = require('./analytics/_cardGenerate')(AppConfig);
  const { CARDS_CHARGES_AND_COMMISSIONS: cardsChargesAndCommissions } = require('./product/_constanst');
  const sphericaPageUtils = require('./common/helpers/_spherica')(AppConfig, 'cardDetail');
  const constants = require('./pfm/_constants');
  const { bbvaAuth } = require('./common/_cross-components');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { campaigns, flexibleFinancings, cardProposeDeliveryV3, pfm = '', pfmV2, cards: cardsVersion } },
    native = false,
    nativeIos = false
  } = AppConfig;
  const cardConfigs = {
    REGISTRATION_LINKCARD: {
      flag: 'glomo.cardDetail.cardOriginationOcDebitCardInmediateDelivery',
      card: {
        microillustration: 'aquaCard',
        title: 'card-origination-oc-debit-card-inmediate-delivery-offer-title',
        text: 'card-origination-oc-debit-card-inmediate-delivery-offer-text',
        link: 'card-origination-oc-debit-card-inmediate-delivery-offer-link'
      }
    },
    REGISTRATION: {
      flag: 'glomo.cardDetail.payrollCardRequest',
      card: {
        microillustration: 'aquaCard',
        title: 'card-origination-oc-debit-card-offer-title',
        text: 'card-origination-oc-debit-card-offer-text',
        link: 'card-origination-oc-debit-card-offer-link'
      }
    },
    REGISTRATION_RETAIL: {
      flag: 'glomo.cardDetail.retailCardRequest',
      card: {
        microillustration: 'aquaCard',
        title: 'card-origination-oc-debit-card-retail-offer-title',
        text: 'card-origination-oc-debit-card-retail-offer-text',
        link: 'card-origination-oc-debit-card-retail-offer-link'
      }
    },
    ACTIVATION: {
      flag: 'glomo.cardDetail.payrollCardActivate',
      card: {
        microillustration: 'aquaCard',
        title: 'bbva-feature-card-link-and-activation-qr-card-mx-offer-title',
        text: 'bbva-feature-card-link-and-activation-qr-card-mx-offer-text',
        link: 'bbva-feature-card-link-and-activation-qr-card-mx-offer-link'
      }
    }
  };
  const base = {
    hash: 'card-detail',
    currentPage: {
      url: '/card-detail/:productId',
      params: []
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        headerHeight: 0,
        footerFixed: true,
        rightDrawer: true,
        disableScrollLock: true,
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        headerFixed: true,
        className: nativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
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
          isNativeIos: nativeIos,
          language,
          showServiceErrorLimitsAttempts: true,
          showRetriesErrorLimitOnCardActivations: true,
          creditCardOperativesToHide: ['cardLocation', 'editAvailableCreditLimit'],
          debitCardOperativesToHide: ['cardLocation', 'accountStatus', 'payCard', 'transfers'],
          deepLinkCases: ['HTDCLIM', 'HTDCPAY', 'HTDCOFF', 'HTDDISF', 'viewDigitalCard', 'turnOffCard'],
          chargesAndCommissions: cardsChargesAndCommissions,
          electronicSignature: 'Autorizado con firma electrónica',
          evidenceTypeId: 'BD-MX-AA-ACTDCA-001',
          incompleteDebitExpedientCause: 'MPE4069: BLOQUEO TEMP DEBIT  FALTAN DOC EXP-UNIC',
          incompleteCreditExpedientCause: 'MPE4069: BLOQUEO TEMP CREDIT  FALTAN DOC EXP-UNIC',
          incompleteExpedientStatus: 409,
          flagFTMP: true,
          productType: 'CARDS',
          localStorageKey: 'cardFeatureFlags',
          maximumAdditionalCards: 9,
          cardNumberAttemps: 0,
          cardEntryPoints: cardConfigs,
          limitNumberOfOperatives: 3,
          showViewMoreOperative: true,
          alwaysShowViewMoreOperative: false,
          getCardV2ServiceFlagName: 'glomo.payments.getCardV2',
          validBalanceIds: ['AVAILABLE_CURRENT_BALANCES', 'CURRENT_BALANCE'],
          localStorageErrorCode: 999,
          cardProposeDeliveryApiVersion: cardProposeDeliveryV3,
          accountsInvalidProductIds: [ 'ME' ],
          accountsValidProductTypes: ['COMMON_AND_SAVINGS', 'ACCOUNT'],
          nameFeatureFlagActivationLinkcard: 'glomo.cardDetail.cardActivationLinkcard',
          cellsConnections: {
            params: {
              cardId: 'productId'
            },
            in: {
              product_detail_cards_mx_go_to_dashboard: {
                bind: 'reset'
              },
              product_detail_cards_mx_go_to_digital_butler: {
                bind: 'reset'
              },
              navigation_loan_detail_to_account_status: {
                bind: 'reset'
              },
              card_Detail_reset_page: {
                bind: 'reset'
              },
              global_card_detail_data_refresh: {
                bind: 'reset'
              },
              global_card_credit_card_payment_success: {
                bind: 'reset'
              },
              navigation_card_detail_to_block_card: {
                bind: 'reset'
              },
              navigation_card_detail_to_block_card_old: {
                bind: 'reset'
              },
              card_Detail_linkcard_request: {
                bind: 'reset'
              },
              card_Detail_payroll_request: {
                bind: 'reset'
              },
              card_Detail_retail_request: {
                bind: 'reset'
              },
              card_Detail_payroll_activate: {
                bind: 'reset'
              },
              global_navigation_to_additional_card_detail: {
                bind: 'reset'
              },
              global_card_generate_virtual_cards_success: {
                bind: 'validateResetCardDigitalActivation'
              },
              global_digital_card_generate_success: {
                bind: 'validateResetCardDigitalActivation'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'maskedAmount'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlagCollection'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              __bridge_page_cardDetail: {
                bind: 'init'
              },
              global_storage_get_cardFeatureFlags_success: {
                bind: 'setDataFromLocalStorage'
              },
              global_storage_get_cardFeatureFlags_error: {
                bind: 'setDataFromLocalStorage'
              },
              global_feature_card_transactions_status: {
                bind: 'transactionsFeatureFlag'
              },
              global_feature_flag_stand_in_movements_adittional_cards: {
                bind: 'standInMovementsAdittionalCards'
              },
              global_feature_stand_in_status: {
                bind: 'standIn'
              },
              card_Detail_init_stand_in: {
                bind: 'initialStandIn'
              },
              global_card_detail_card_detail_data_reload: {
                bind: 'getCardDetailData'
              },
              global_unparsed_offers_retrieved: {
                bind: 'offersData'
              },
              global_set_app_settings: {
                bind: 'appSettings'
              },
              card_Detail_get_user_offer_success: {
                bind: 'manageMultipurchaseDebitFinancingBanner'
              },
              card_Detail_back_button_pressed: {
                bind: 'backToDashboard'
              },
              card_Detail_activation_error: {
                bind: 'openCardActivationError'
              },
              card_Detail_open_payment_options_modal: {
                bind: 'openPaymentOptionsModal'
              },
              card_Detail_request_additional_cards_data: {
                bind: 'requestForAdditionalCards'
              },
              card_Detail_retry_request_additional_cards_data: {
                bind: 'retryAdditionalCards'
              },
              ADDITIONALS_CARDS_RESET: {
                bind: 'retryAdditionalCards'
              },
              cardDetail_additional_cards_success: {
                bind: 'generateAdditionalCardsDataSuccess'
              },
              cardDetail_additional_cards_error: {
                bind: 'generateAdditionalCardsDataError'
              },
              card_Detail_simulation_onboard_modal_success: {
                bind: 'openSimulatorOnboardModal'
              },
              global_card_detail_card_activation_error_retry: {
                bind: 'activationCard'
              },
              global_card_detail_card_activation_error_cancel: {
                bind: 'resetCardActivationRetries'
              },
              global_card_detail_card_activation_error_max_retries_cancel: {
                bind: 'resetCardActivationRetries'
              },
              global_card_detail_card_activation_error_max_retries_call: {
                bind: 'callToContactNumber'
              },
              global_storage_get_card_detail_data_error: {
                bind: 'getCardDetailLocalStorage'
              },
              global_storage_get_card_detail_data_success: {
                bind: 'getCardDetailLocalStorage'
              },
              go_back_to_dashboard: {
                bind: 'backToDashboard'
              },
              global_control_status_opened: {
                bind: 'setModalOpened'
              },
              global_control_status_closed: {
                bind: 'setModalClosed'
              },
              global_card_edit_alias_success: {
                bind: 'updateAliasForCard'
              },
              global_opened_modal: {
                bind: 'closedModal'
              },
              card_Detail_set_navigation_for_credit_card_limit_increase: {
                bind: 'setOfferNavigation'
              },
              card_Detail_init_page: {
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
              card_Detail_get_indicators_success: {
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
              CARD_CREDIT_CARD_PAYMENT_PROMISE_SET_PAYMENT_PROMISE_DATA: {
                bind: 'paymentPromiseData'
              },
              GO_TO_CARD_PAYMENT_PROMISE: {
                bind: 'returnToPromise'
              },
              key_recovery_back_forward_date_page: {
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
              card_Detail_status_card_global_api_version: {
                bind: 'statusCardApiVersionV2'
              },
              cards_close_modal_full_height: {
                bind: 'close-full-modals'
              },
              global_nativeconnector_device_info_get_nfc_status_success: {
                bind: 'nfcStatus'
              },
              global_nativeconnector_device_info_is_google_play_services_available_success: {
                bind: 'isGoogleStatus'
              },
              global_device_get_device_nfc_status_success: {
                bind: 'nfcStatus'
              },
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              product_detail_blue_navigation_flag: {
                bind: 'isBlueNavigation'
              },
              clarificationsManagementCarePage_MODAL_CHIP_NIP_ACCEPT: {
                bind: 'offCardClaims'
              },
              global_nativeconnector_third_party_wallet_status_devices_success: {
                bind: 'devices'
              },
              navigate_to_third_party_wallet_provisioning_error_off: {
                bind: 'checkActivationCard'
              }
            },
            out: {
              global_logout_sesion_expiration: {
                bind: 'alert-AUTOMATIC-LOGOUT-accept'
              },
              card_Detail_set_header_title: {
                bind: 'set-detail-header-title'
              },
              card_Detail_associated_account_number: {
                bind: 'send-associated-account-number'
              },
              global_card_detail_card_activation_help_off: {
                bind: 'open-modal-card-activation-help-off'
              },
              global_card_detail_card_activation_help_on: {
                bind: 'open-modal-card-activation-help-on'
              },
              global_selected_card_api_version: {
                bind: 'selected-card-api-version'
              },
              navigation_loan_detail_to_account_status: {
                bind: 'navigate-operations-to-account-status',
                analytics: analyticsMonthlyStatement.dynamicLevel1('tarjetas'),
                link: utils.addFeatureFlag('card.monthlyStatement', {
                  page: 'cardMonthlyStatement',
                  params: {
                    cardId: 'productId'
                  }
                })
              },
              navigation_minimum_payment_clarifications: {
                bind: 'card-detail-payment-navigation-detail',
                analytics: analyticsMinimumPaymentClarifications.accessInternalLink,
                link: {
                  page: 'minimumPaymentClarifications',
                  params: {
                    cardNumber: 'cardNumber'
                  }
                }
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
                analytics: analyticsCleanCard.APP_ON_CLICK_START,
                link: {
                  page: 'cleanCardOperations',
                  params: {
                    cardId: 'productId',
                    operativeAction: 'operativeAction',
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
              navigation_product_detail_to_card_cut_off_date: {
                bind: 'navigate-operations-to-card-cut-off-date',
                link: {
                  page: 'cardCutOffDate',
                  params: {
                    productId: 'productId'
                  }
                }
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
              navigation_product_detail_to_parental_control: {
                bind: 'navigate-parental-control-card-limits',
                link: {
                  page: 'parentalControlCardLimits',
                  params: {
                    cardId: 'productId'
                  }
                }
              },
              navigation_payment_clarifications: {
                bind: 'navigate-promotions-payments',
                analytics: ANALYTICS_ADVANCE_PROMOTIONS.appOnClickStart,
                link: {
                  page: 'promotionsAdvancedPayments',
                  params: {
                    cardId: 'productId'
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
              navigation_loan_detail_to_transfer: {
                bind: 'navigate-to-transfers-from-account',
                link: {
                  page: 'transfers',
                  params: {
                    cardId: 'productId'
                  }
                }
              },
              OPEN_UPGRADE_MODULAR: {
                bind: 'navigate-to-upgrade-modular-page',
                link: {
                  page: 'upgradeN2N4'
                }
              },
              navigation_to_add_video_selfie_code: {
                bind: 'navigation-product-to-add-video-selfie',
                link: {
                  page: 'addVideoSelfie'
                }
              },
              global_get_card_orange_data_success: {
                bind: 'set-card'
              },
              product_detail_cards_mx_go_to_dashboard: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-dashboard',
                backStep: true
              },
              product_detail_cards_mx_go_to_digital_butler: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-digital-butler',
                backStep: true
              },
              card_Detail_associated_account_id: {
                bind: 'send-associated-account-id'
              },
              card_Detail_virtual_card_id: {
                bind: 'send-card-id-virtual'
              },
              global_send_card_detail_data: {
                bind: 'get-card-detail-data-success'
              },
              card_Detail_set_selected_card_info: {
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
              card_Detail_manager_product_id: {
                bind: 'set-product-id-from-manager'
              },
              orange_reward_benefits_valid_card: {
                bind: 'reward-benefits-valid-card'
              },
              card_Detail_manager_product_type: {
                bind: 'set-product-type-from-manager'
              },
              card_Detail_manager_related_id: {
                bind: 'set-related-id-from-manager'
              },
              global_card_orange_over_draft_modal: {
                bind: 'open-modal-over-draft-info'
              },
              card_Detail_open_simulator_onboarding_modal: {
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
              card_Detail_set_header_expandable_list_title: {
                bind: 'set-additional-cards-expandable-list-title'
              },
              card_Detail_set_additional_cards_products_error: {
                bind: 'set-additional-cards-data-error'
              },
              card_Detail_reset_aditional_cards_list: {
                bind: 'reset-additional-cards'
              },
              card_Detail_update_additional_card_status: {
                bind: 'update-additional-card-status'
              },
              card_Detail_set_flag_debit_limits: {
                bind: 'set-flag-debit-limits'
              },
              card_Detail_send_additional_list_cards: {
                bind: 'additional-cards-list-response'
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
              credit_card_limit_increase_init: {
                bind: 'navigate-to-offer-selected',
                link: {
                  page: 'increment',
                  continue: 'cardDetail',
                  params: {
                    productId: 'productId',
                    offerId: 'offerId'
                  }
                }
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
              global_navigate_generate_digital_card: {
                bind: 'navigate-to-generate-digital-card',
                link: {
                  page: 'cardGenerateVirtual'
                }
              },
              global_navigate_digital_card_generate: {
                bind: 'navigate-to-digital-card-activation-feature',
                link: {
                  page: 'digitalCardGenerate'
                }
              },
              navigate_to_operations_digital_card_add_wallet: {
                bind: 'navigate-operations-digital-card-add-wallet',
                link: {
                  page: 'paymentsThirdPartyWalletProvisioning'
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
              navigation_transactions_to_transaction_account_detail: {
                bind: 'transaction-account-tap',
                link: {
                  page: 'accountTransactionDetail',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId',
                    continue: 'continue'
                  }
                }
              },
              global_set_card_api_version: {
                bind: 'set-orange-card-version'
              },
              card_Detail_analytics_initial_event: {
                bind: 'analytics-fire-advanced-fingerprint-card-detail'
              },
              global_prepare_feedback: {
                bind: 'rating-security-code-turn-on-off-channel'
              },
              send_data_is_business_credit_card_to_cvv: {
                bind: 'set-is-business-credit-card-from-manager'
              },
              global_card_detail_is_next_to_expired: {
                bind: 'bbva-feature-product-detail-cards-is-next-to-expired-send'
              },
              global_alert_manager_open_with_settings: {
                bind: 'stand-in-card-detail-modal'
              },
              card_Detail_activate_digital_card_wallet: {
                bind: 'card-detail-activate-digital-card-wallet',
                analytics: analyticsDigitalCardActivations.appInternalLink()
              },
              card_Detail_digital_card_wallet_type: {
                bind: 'card-detail-digital-card-wallet-type',
                analytics: analyticsDigitalCardActivations.appPageView()
              },
              card_Detail_stand_in_analytic_check_activation: {
                bind: 'stand-in-card-detail-check-activation',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'ACTIVATION_CARD')
              },
              card_Detail_stand_in_analytic_card_generate: {
                bind: 'stand-in-card-detail-card-generate',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'DIGITAL_CARD')
              },
              card_Detail_stand_in_analytic_card_more_details: {
                bind: 'stand-in-card-more-details',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'CARD_MORE_DETAILS')
              },
              card_Detail_stand_in_analytic_card_paycard: {
                bind: 'stand-in-card-detail-modal-paycard',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'PAY_CARD')
              },
              card_Detail_stand_in_analytic_edit_limits: {
                bind: 'stand-in-card-detail-modal-editLimits',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'CARD_EDIT_LIMITS')
              },
              card_Detail_stand_in_analytic_aStatus: {
                bind: 'stand-in-card-detail-modal-aStatus',
                analytics: analyticsAlwaysOn.standInOperatives(cards, 'CARD_STATUS')
              },
              card_Detail_stand_in_analytic_viewMore: {
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
              card_Detail_stand_in_reset_icon_message: {
                bind: 'stand-in-reset-error-icon-message'
              },
              card_Detail_stand_in_error_message: {
                bind: 'stand-in-error-icon-message'
              },
              card_Detail_stand_in_show_message_error: {
                bind: 'stand-in-transactions-show-message-error'
              },
              card_Detail_get_card_indicators: {
                bind: 'get-card-indicators'
              },
              card_Detail_stand_in_always_on: {
                bind: 'stand-in-card-detail',
                analytics: analyticsAlwaysOn.standInOperatives(cards)
              },
              card_Detail_go_to_card_financing: {
                bind: 'go-to-card-financing'
              },
              card_Detail_show_finance_debit_multipurchase_banner: {
                bind: 'show-financing-debit-multipurchase-banner'
              },
              card_Detail_set_financing_debit_multipurchase_offer_id: {
                bind: 'set-financing-debit-multipurchase-offer-id'
              },
              card_Detail_set_finance_multipurchase_banner: {
                bind: 'set-financing-multipurchase-banner'
              },
              card_Detail_set_finance_debit_multipurchase_banner: {
                bind: 'set-financing-debit-multipurchase-banner'
              },
              card_Detail_hide_finance_debit_multipurchase_banner: {
                bind: 'hide-financing-debit-multipurchase-banner'
              },
              card_Detail_hide_finance_multipurchase_banner: {
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
              NAVIGATE_TO_CREDIT_CARD_PAYMENT: {
                bind: 'navigate-to-credit-card-payment',
                link: {
                  page: 'cardCreditCardPayment',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              NAVIGATE_TO_CREDIT_CARD_PAYMENT_PROMISE: {
                bind: 'promise-navigation-to-payment-promise',
                link: {
                  page: 'cardCreditCardPaymentPromise'
                },
                skipHistory: true
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
              global_action_launcher_uri: {
                bind: 'send-description-uri'
              },
              card_Detail_hide_transactions_list: {
                bind: 'hide-transaction-list-cards'
              },
              card_Detail_hide_transactions_list_accounts: {
                bind: 'hide-transaction-list-accounts'
              },
              card_Detail_is_debit_transactions_list_accounts: {
                bind: 'is-debit-transaction-list-accounts'
              },
              global_navigation_to_additional_card_detail: {
                bind: 'card-detail-display-additional-card-detail',
                link: {
                  page: 'additionalCardDetail',
                  params: {
                    id: 'additionalProductId',
                    simpleCode: 'simpleCode'
                  }
                }
              },
              card_Detail_show_aggregation_group_turns: {
                bind: 'show-aggregation-group-turns'
              },
              global_navigation_to_additional_card_mainpage: {
                bind: 'bbva-feature-product-detail-cards-mx-go-additional-card',
                analytics: analyticsCreditcardMainpage.pageViewBenefits,
                link: {
                  page: 'additionalCreditCardMainPage'
                }
              },
              card_Detail_activation_successful: {
                bind: 'patch-activations-successful'
              },
              card_Detail_request_apply_for_additional_card: {
                bind: 'bbva-feature-product-detail-cards-mx-go-additional-card'
              },
              card_Detail_cells_product_summary_card_orange_auxiliary_link_button_clicked: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-debit-card-tracking',
                analytics: analyticsCleanCard.APP_ONCLICK_START_ENTRY_POINT_CONSULT_AND_CONFIRM,
                link: {
                  page: 'debitCardTracking'
                }
              },
              navigation_loan_detail_to_card_location: {
                bind: 'bbva-feature-product-detail-cards-mx-go-to-credit-card-tracking',
                link: utils.addFeatureFlag('creditCardTracking', {
                  page: 'creditCardTracking'
                })
              },
              global_alert_manager_open_with_settings_spherica: {
                bind: 'navigate-operations-error'
              },
              navigate_to_third_party_wallet_provisioning_error_off: {
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
              card_Detail_manage_navigation_to_mobile_payment: {
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
              card_Detail_persisted_data_additional: {
                bind: 'persisted-data-additional'
              },
              card_Detail_set_filtered_product_summary_data: {
                bind: 'set-filtered-product'
              },
              card_Detail_set_card_img_product_data: {
                bind: 'send-card-image-product'
              },
              card_Detail_set_product_summary_data: {
                bind: 'set-product-summary-config-data'
              },
              card_Detail_get_card_financing_debit_offer: {
                bind: 'get-financing-debit-offer'
              },
              card_Detail_analytics_registration_linkcard: {
                bind: 'card-entry-point-card-load-registration-linkcard'
              },
              card_Detail_linkcard_request: {
                bind: 'navigation-banner-card-to-registration-linkcard',
                link: utils.addFeatureFlag('cardDetail.cardOriginationOcDebitCardInmediateDelivery', {
                  page: 'cardOriginationOcDebitCardInmediateDelivery'
                })
              },
              card_Detail_payroll_request: {
                bind: 'navigation-banner-card-to-registration',
                analytics: analyticsOcDebitCard.payrollAppOnClick,
                link: utils.addFeatureFlag('cardDetail.payrollCardRequest', {
                  page: 'cardOriginationOcDebitCard'
                })
              },
              card_Detail_retail_request: {
                bind: 'navigation-banner-card-to-registration-retail',
                analytics: analyticsOcDebitCard.payrollAppOnClick,
                link: utils.addFeatureFlag('cardDetail.retailCardRequest', {
                  page: 'cardOriginationOcDebitCard'
                })
              },
              card_Detail_payroll_activate: {
                bind: 'navigation-banner-card-to-activation',
                analytics: analyticsCardLinkAndActivationQrCard.appOnClickStart,
                link: utils.addFeatureFlag('cardDetail.payrollCardActivate', {
                  page: 'cardLinkAndActivationQrCard'
                })
              },
              card_Detail_card_configs: {
                bind: 'card-entry-point-dm-card-configs'
              },
              card_Detail_commission: {
                bind: 'card-entry-point-dm-cost'
              },
              card_Detail_simple_code: {
                bind: 'card-entry-point-dm-simple-code'
              },
              card_Detail_simple_code_card: {
                bind: 'card-entry-point-dm-simple-code-card'
              },
              card_Detail_product_id: {
                bind: 'card-entry-point-dm-product-id'
              },
              card_Detail_process_id: {
                bind: 'card-entry-point-dm-process-id'
              },
              card_Detail_delivery_time: {
                bind: 'card-entry-point-dm-delivery-time'
              },
              card_Detail_next_to_expire: {
                bind: 'card-entry-point-dm-next-to-expire'
              },
              card_Detail_allotment: {
                bind: 'card-entry-point-dm-allotment'
              },
              card_Detail_modal_set_label_header: {
                bind: 'set-label-header-add-to-bbva-pay'
              },
              card_Detail_modal_set_microilustration: {
                bind: 'set-microilustration-add-to-bbva-pay'
              },
              card_Detail_modal_set_label_title: {
                bind: 'set-label-title-add-to-bbva-pay'
              },
              card_Detail_modal_set_label_body: {
                bind: 'set-label-body-add-to-bbva-pay'
              },
              card_Detail_modal_set_label_button: {
                bind: 'set-label-button-add-to-bbva-pay'
              },
              card_Detail_mobile_payment_digital_card_id: {
                bind: 'mobile-payment-digital-card-id'
              },
              global_mobile_payment_modal: {
                bind: 'mobile-payment-modal-open'
              },
              global_nativeconnector_third_party_wallet_status_devices: {
                bind: 'card-detail-request-devices'
              },
              card_detail_analytics_page_view_to_cvv: {
                bind: 'analytics-navigate-card-detail-to-cvv'
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
        tag: 'card-transaction-servicing-finance-debit-multipurchase',
        familyPath: '@bbva-web-components-widgets/card-transaction-servicing-finance-debit-multipurchase',
        tagSpherica: 'card-transaction-servicing-finance-debit-multipurchase-mx',
        familyPathSpherica: '@glomo-web-components/card-transaction-servicing-finance-debit-multipurchase-mx',
        render: 'litElement',
        properties: {
          balancesIds: 'AVAILABLE_BALANCE',
          feeType: 'MICROLOAN_WITHDRAWAL_FEE',
          flexibleFinancingsApiVersion: flexibleFinancings,
          imagesIds: 'FRONT_CARD',
          host,
          native,
          requiredToken,
          language,
          localCurrency,
          pageName: 'cardDetail',
          productId: '0PYP',
          specificAmountsIds: {
            financingResponse: 'GRANTED_AMOUNT',
            microloans: 'MICROLOAN_AMOUNT',
            simulateRequest: 'MICROLOAN_AMOUNT',
            transactions: 'TOTAL_AMOUNT'
          },
          subProductId: '0PYP',
          cellsConnections: {
            in: {
              global_set_feature_flag_debit_bnpl: {
                bind: 'hideDashboardBnpl'
              },
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              card_Detail_virtual_card_id: {
                bind: 'cardId'
              },
              card_Detail_associated_account_id: {
                bind: 'carouselInit'
              },
              card_Detail_back_button_pressed: {
                bind: 'carouselReset'
              }
            },
            out: {
              global_card_transaction_servicing_post_contracting: {
                bind: 'card-transaction-servicing-finance-debit-multipurchase-carrousel-purchase-select',
                analytics: analyticsFinanceDebitMultipurchasePostHiring.appOnClickStart('diferir'),
                link: {
                  page: 'financeTransactionMultipurchaseDebitPostHiring'
                }
              },
              global_card_transaction_servicing_dashboard: {
                bind: 'card-transaction-servicing-finance-debit-multipurchase-dashboard-link-click',
                link: {
                  page: 'paymentDashboard'
                }
              },
              global_card_transaction_servicing_dashboardBnpl: {
                bind: 'card-transaction-servicing-finance-debit-multipurchase-dashboard-bnpl-link-click',
                link: {
                  page: 'paymentDashboardBnpl'
                }
              },
              global_card_transaction_flexible_financing_distributor: {
                bind: 'card-transaction-servicing-finance-debit-multipurchase-distributor-link-click',
                link: {
                  page: 'distributor'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-campaigns',
        properties: {
          host,
          native,
          requiredToken,
          apiVersion: campaigns,
          cellsConnections: {
            params: {
              productId: 'productId'
            },
            in: {
              card_Detail_get_card_financing_debit_offer: {
                bind: 'getOffers'
              }
            },
            out: {
              card_Detail_get_user_offer_success: {
                bind: 'set-offers'
              },
              card_Detail_get_user_offer_error: {
                bind: 'error-on-retrieve-campaigns'
              }
            }
          }
        }
      },
      {
        zone: 'productDetailCardsMx.footer-content',
        type: 'UI',
        tag: 'cells-oc-banner-spherica',
        properties: {
          className: 'banner banner--image-center wrapper-page financeMultiPurchaseDebit',
          allAreaClickable: true,
          decimalsHidden: true,
          localCurrency,
          closeAutomatically: false,
          noClose: true,
          hidden: true,
          bannerLink: 'cells-finance-debit-multipurchase-info-card-link',
          cellsConnections: {
            in: {
              card_Detail_show_finance_debit_multipurchase_banner: {
                bind: 'openBanner'
              },
              card_Detail_set_finance_debit_multipurchase_banner: {
                bind: 'config'
              },
              card_Detail_hide_finance_debit_multipurchase_banner: {
                bind: 'closeBanner'
              },
              reset_manager: {
                bind: 'closeBanner'
              },
              card_Detail_back_button_pressed: {
                bind: 'closeBanner'
              },
              go_back_to_dashboard: {
                bind: 'closeBanner'
              }
            },
            out: {
              navigation_finance_transaction_debit_multipurchase: {
                bind: 'cells-oc-banner-click',
                link: {
                  page: 'financeTransactionMultipurchaseDebit'
                }
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
              card_Detail_hide_aggregation_group_turn: {
                bind: 'setProperties'
              },
              reset_manager: {
                bind: 'reset'
              },
              go_back_to_dashboard: {
                bind: 'reset'
              },
              card_Detail_set_group_period: {
                bind: 'setProperties'
              },
              card_Detail_set_error_group_period: {
                bind: 'setProperties'
              }
            },
            out: {
              card_Detail_hide_transactions_list: {
                bind: 'hide-transactions-list'
              },
              card_Detail_movements_tab: {
                bind: 'get-first-tab',
                analytics: analyticsTransactions.categoryInteractionLinkDate
              },
              card_Detail_get_service_pfm_dm: {
                bind: 'get-second-tab',
                analytics: analyticsTransactions.categoryInteractionLink
              },
              card_Detail_retry_get_contract_balances: {
                bind: 'tourn-grouper-error-message'
              },
              card_Detail_select_step: {
                bind: 'select-accordeon-step'
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
              productId: 'productId'
            },
            in: {
              __bridge_page_cardDetail: {
                bind: 'init'
              },
              reward_card_list_item_click: {
                bind: 'reset'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              card_Detail_hide_transactions_list: {
                bind: 'isHideTransactionList'
              },
              product_detail_cards_mx_go_to_dashboard: {
                bind: 'reset'
              },
              NAVIGATE_TO_CREDIT_CARD_PAYMENT_PROMISE: {
                bind: 'reset'
              },
              product_detail_cards_mx_go_to_digital_butler: {
                bind: 'reset'
              },
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlagCollection'
              },
              global_navigation_to_additional_card_detail: {
                bind: 'reset'
              },
              channel_transactions_list_cards_mx_go_to_detail: {
                bind: 'reset'
              },
              navigation_transactions_to_transaction_detail: {
                bind: 'reset'
              },
              channel_transactions_list_cards_mx_see_all_movements: {
                bind: 'reset'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'isMaskedAmount'
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
                    rewardBenefits: 'rewardBenefits',
                    navigationFrom: 'navigationFrom',
                    localId: 'localId'
                  }
                }
              },
              navigation_transactions_to_transaction_detail: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-go-to-detail',
                link: {
                  page: 'cardTransactionDetail',
                  params: {
                    productId: 'productId',
                    transactionId: 'transactionId',
                    contractId: 'contractId',
                    simpleCode: 'simpleCode',
                    financingType: 'financingType',
                    rewardBenefits: 'rewardBenefits',
                    pobPromotionFlag: 'pobPromotionFlag',
                    transactionNumber: 'transactionNumber',
                    navigationFrom: 'navigationFrom'
                  }
                }
              },
              channel_transactions_list_cards_mx_see_all_movements: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-see-all-movements',
                analytics: analyticsTransactions.transactionDetailCardFootprintAllMovements,
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
              channel_transactions_list_cards_mx_see_transactions_list: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-see-transactions-list',
                analytics: analyticsTransactions.transactionListFootprint
              },
              channel_transactions_list_cards_mx_no_transactions: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-no-transactions',
                analytics: analyticsTransactions.transactionListFootprintWithoutMovements
              },
              channel_transactions_list_cards_mx_get_transactions_dm_error: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-get-transactions-dm-error',
                analytics: analyticsTransactions.transactionListFootprintnoErrorLoadingMovements
              },
              channel_transactions_list_cards_mx_is_additional_card: {
                bind: 'card-information-transactions-list-searching-enrichment-cards-mx-is-additional-card'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'bbva-notification-toast',
        familyPath: '@bbva-spherica-components/bbva-notification-toast',
        render: 'litElement',
        properties: {
          type: 'success',
          iconExplainer: 'coronita:correct',
          alertText: 'bbva-feature-edit-alias-card-toast-message',
          duration: '3000',
          autoHide: 'true',
          fixedBottom: 'true',
          cellsConnections: {
            in: {
              global_edit_alias_success_toast_card: {
                bind: 'show'
              },
              global_hanlder_native_back_button: {
                bind: 'closeAndFinishTimeout'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'cells-modal-slider',
        properties: {
          buttonLabel: 'glomo-card-detail-payment-simulation-button-label',
          title: 'glomo-card-detail-payment-simulation-title',
          slidesLoadingDelay: 50,
          cellsConnections: {
            in: {
              card_Detail_manager_product_id: {
                bind: 'productId'
              },
              card_Detail_open_simulator_onboarding_modal: {
                bind: 'openWithData'
              },
              global_hanlder_native_back_button: {
                bind: 'closeModal'
              }
            },
            out: {
              global_navitage_to_payment_simulation: {
                bind: 'onboard-modal-succes',
                link: {
                  page: 'interestSimulator',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              card_Detail_slide_change_on_boarding: {
                bind: 'cells-molecule-slider-slide-changed'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'cells-modal-alert',
        properties: {
          toast: true,
          icon: 'coronita:info',
          type: 'info',
          iconMessageClass: 'on-dark',
          duration: 3000,
          cellsConnections: {
            in: {
              card_Detail_show_toast_empty_period: {
                bind: 'open'
              },
              card_Detail_set_content_toast_empty_period: {
                bind: 'content'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-finance-transaction-multipurchase',
        familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
        render: 'litElement',
        properties: {
          featureFlagKeys: [
            'glomo.financingDebit.multiPurchase',
            'glomo.financingDebit.bnpl',
            'glomo.financingDebit.dashboardPurchase',
            'glomo.financingDebit.dashboard',
            'glomo.financingDebit.dashboardLineCancel',
            'glomo.financingDebit.dashboardEDC',
            'glomo.financingDebit.dashboardAdvancePayment',
            'glomo.financingDebit.dashboardMonthlyPayment',
            'glomo.financingDebit.dashboardOverduePayment'
          ],
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlagCollection'
              }
            },
            out: {
              global_set_feature_flag_debit_multipurchase: {
                bind: 'set-feature-flag-debit-multiPurchase'
              },
              global_set_feature_flag_debit_dashboard_purchase: {
                bind: 'set-feature-flag-debit-dashboardPurchase'
              },
              global_set_feature_flag_debit_dashboard: {
                bind: 'set-feature-flag-debit-dashboard'
              },
              global_set_feature_flag_debit_dashboard_cancel_line: {
                bind: 'set-feature-flag-debit-dashboardLineCancel'
              },
              global_set_feature_flag_debit_dashboard_edc: {
                bind: 'set-feature-flag-debit-dashboardEDC'
              },
              global_set_feature_flag_debit_dashboard_advance_payment: {
                bind: 'set-feature-flag-debit-dashboardAdvancePayment'
              },
              global_set_feature_flag_debit_dashboard_monthly_payment: {
                bind: 'set-feature-flag-debit-dashboardMonthlyPayment'
              },
              global_set_feature_flag_debit_dashboard_overdue_payment: {
                bind: 'set-feature-flag-debit-dashboardOverduePayment'
              },
              global_feature_flag_multipurchase_debit_multipurchase: {
                bind: 'feature-flag-multipurchase-debit-multiPurchase'
              },
              global_set_feature_flag_debit_bnpl: {
                bind: 'feature-flag-multipurchase-debit-bnpl'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-finance-transaction-multipurchase-analytics',
        familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
        render: 'litElement',
        properties: {
          productCode: '0PYP',
          cellsConnections: {
            in: {
              global_offers_retrieved: {
                bind: 'offers'
              },
              navigation_finance_transaction_debit_multipurchase: {
                bind: 'appOnClickStart'
              }
            },
            out: {
              finance_multipurchase_debit_view_channel: {
                bind: 'app-on-click-start',
                analytics: analyticsFinanceDebitMultipurchase.appOnClickStart
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-pfm-balances-dm',
        properties: {
          pfmCategories: constants.categories,
          pfmApiVersion: pfmV2,
          cellsConnections: {
            in: {
              card_Detail_show_aggregation_group_turns: {
                bind: 'movementsCategorizerFlag'
              },
              card_Detail_set_selected_card_info: {
                bind: 'initConfiguration'
              },
              card_Detail_get_service_pfm_dm: {
                bind: 'getContractBalances'
              },
              card_Detail_retry_get_contract_balances: {
                bind: 'retryGetContractBalances'
              },
              card_Detail_get_contract_balance_current_period_success: {
                bind: 'parseContractsBalances'
              },
              card_Detail_get_contract_balance_current_period_error: {
                bind: 'errorGetContractBalances'
              },
              card_Detail_select_step: {
                bind: 'validateSelectPeriodStep'
              },
              channel_transactions_list_cards_mx_set_transactions: {
                bind: 'getTransactions'
              },
              card_Detail_product_get_transactions_error: {
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
              card_Detail_get_contract_balance_current_period: {
                bind: 'get-group-turns-data-current-period'
              },
              card_Detail_set_group_period: {
                bind: 'send-group-turns-data-period'
              },
              card_Detail_set_error_group_period: {
                bind: 'set-error-group-turns'
              },
              card_Detail_show_toast_empty_period: {
                bind: 'show-toast-empty-period'
              },
              card_Detail_set_content_toast_empty_period: {
                bind: 'set-content-toast-empty-period'
              },
              card_Detail_hide_aggregation_group_turn: {
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
              card_Detail_manager_product_id: {
                bind: 'contractId'
              },
              card_Detail_get_contract_balance_current_period: {
                bind: 'getContractBalances'
              }
            },
            out: {
              card_Detail_get_contract_balance_current_period_success: {
                bind: 'get-contract-balances-current-period-success'
              },
              card_Detail_get_contract_balance_current_period_error: {
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
          additionalCardButtonLabel: 'glomo-card-detail-additional-cards-expandable-product-list-footer-button-label',
          cellsConnections: {
            in: {
              global_send_card_detail_data: {
                bind: 'getProductData'
              },
              card_Detail_analytics_initial_event: {
                bind: 'fireAdvancedFingerprintCardDetail'
              },
              product_card_detail_open_card_activation_help: {
                bind: 'fireAdvancedFingerprintCardDetailOnOffModal'
              },
              card_Detail_activation_successful: {
                bind: 'fireAdvancedFingerprintCardDetailOnOff'
              },
              navigation_to_more_info: {
                bind: 'fireAdvancedFingerprintCardDetailMoreInfo'
              },
              global_card_detail_card_activation_help_off: {
                bind: 'helpModalOpened'
              },
              global_card_detail_card_activation_help_on: {
                bind: 'helpModalOpened'
              },
              card_Detail_request_apply_for_additional_card: {
                bind: 'fireAdvancedFingerprintCardDetailApplyForAdditionalCard'
              },
              reward_card_list_item_click: {
                bind: 'fireAdvancedFingerprintCardDetailUseYourPoints'
              },
              card_Detail_manage_navigation_to_mobile_payment: {
                bind: 'fireMobilePaymentInternalLink'
              },
              card_Detail_manage_corner_case_modal_mobile_payment: {
                bind: 'fireMobilePaymentInternalLink'
              }
            },
            out: {
              card_Detail_analytics_advanced_fingerprint_card_credit: {
                bind: 'analytics-advanced-fingerprint-card-detail-credit-card',
                analytics: analytics.CREDIT_CARD_DETAIL_HUELLA_AVANZADA
              },
              card_Detail_analytics_advanced_fingerprint_card_debit: {
                bind: 'analytics-advanced-fingerprint-card-detail-debit-card',
                analytics: analytics.DEBIT_CARD_DETAIL_HUELLA_AVANZADA
              },
              card_Detail_analytics_advanced_fingerprint_card_credit_enterprise: {
                bind: 'analytics-advanced-fingerprint-card-detail-business-credit-card',
                analytics: analytics.huellaAvanzadaEnterpriseCard('enterpriseCardCredit')
              },
              card_Detail_analytics_advanced_fingerprint_card_debit_enterprise: {
                bind: 'analytics-advanced-fingerprint-card-detail-business-debit-card',
                analytics: analytics.huellaAvanzadaEnterpriseCard('enterpriseCardDebit')
              },
              card_Detail_analytics_advanced_fingerprint_help_on: {
                bind: 'analytics-advanced-fingerprint-card-activation-help-on',
                analytics: analytics.CARD_DETAIL_ON_HELP_MODAL
              },
              card_Detail_analytics_advanced_fingerprint_help_off: {
                bind: 'analytics-advanced-fingerprint-card-activation-help-off',
                analytics: analytics.CARD_DETAIL_OFF_HELP_MODAL
              },
              card_Detail_analytics_advanced_fingerprint_card_off_from_modal: {
                bind: 'analytics-advanced-fingerprint-card-off-modal-off-opened',
                analytics: analytics.CARD_DETAIL_OFF_FROM_MODAL
              },
              card_Detail_analytics_advanced_fingerprint_card_on_from_modal: {
                bind: 'analytics-advanced-fingerprint-card-on-modal-on-opened',
                analytics: analytics.CARD_DETAIL_ON_FROM_MODAL
              },
              card_Detail_analytics_advanced_fingerprint_card_on: {
                bind: 'analytics-advanced-fingerprint-card-on',
                analytics: analytics.CARD_DETAIL_TURN_ON_CARD
              },
              card_Detail_analytics_advanced_fingerprint_card_off: {
                bind: 'analytics-advanced-fingerprint-card-off',
                analytics: analytics.CARD_DETAIL_TURN_OFF_CARD
              },
              card_Detail_analytics_advanced_fingerprint_credit_card_view_more_info: {
                bind: 'analytics-advanced-fingerprint-view-more-info-credit-card',
                analytics: analytics.CREDIT_CARD_DETAIL_VIEW_MORE_DETAIL
              },
              card_Detail_analytics_advanced_fingerprint_debit_card_view_more_info: {
                bind: 'analytics-advanced-fingerprint-view-more-info-debit-card',
                analytics: analytics.DEBIT_CARD_DETAIL_VIEW_MORE_DETAIL
              },
              card_Detail_analytics_advanced_fingerprint_apply_additional_card: {
                bind: 'analytics-advanced-fingerprint-apply-additional-card',
                analytics: analytics.CREDIT_CARD_DETAIL_APPLY_FOR_ADDITIONAL_CARD
              },
              card_Detail_analytics_advanced_fingerprint_use_your_points: {
                bind: 'analytics-advanced-fingerprint-use-your-points',
                analytics: analytics.CARD_DETAIL_USE_YOURS_POINTS
              },
              card_Detail_analytics_fire_mobile_payment_internal_link_credit: {
                bind: 'fire-mobile-payment-internal-link-credit',
                analytics: analyticsMobilePayment.internalLinks.credit
              },
              card_Detail_analytics_fire_mobile_payment_internal_link_debit: {
                bind: 'fire-mobile-payment-internal-link-debit',
                analytics: analyticsMobilePayment.internalLinks.debit
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-card-dynamic-cvv',
        familyPath: '@glomo-web-components/bbva-analyticmanager-card-information',
        render: 'litElement',
        properties: {
          additionalCardButtonLabel: 'glomo-card-detail-additional-cards-expandable-product-list-footer-button-label',
          cellsConnections: {
            in: {
              card_detail_analytics_page_view_to_cvv: {
                bind: 'fireAdvancedFingerprintCardDetailPageViewCvv'
              }
            },
            out: {
              card_detail_analytics_page_view_isBusiness_credit_cvv: {
                bind: 'analytics-advanced-fingerprint-page-view-business-credit-card',
                analytics: analytics.pageViewEnterpriseCardCvv('enterpriseCardCredit')
              },
              card_detail_analytics_page_view_isBusiness_debit_cvv: {
                bind: 'analytics-advanced-fingerprint-page-view-business-debit-card',
                analytics: analytics.pageViewEnterpriseCardCvv('enterpriseCardDebit')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-help-modal-spherica',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-spherica-wrapper',
        container: true,
        attributes: {
          'justify-content': 'center'
        },
        properties: {
          id: 'addDigitalCardModalConfirm',
          fullHeight: true,
          fixedFooter: true,
          titleIcon: 'spherica:close',
          cellsConnections: {
            in: {
              global_mobile_payment_modal: {
                bind: 'open'
              },
              global_operations_modal_aric_close_call: {
                bind: 'close'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'close'
              },
              card_Detail_modal_set_label_header: {
                bind: 'headerText'
              },
              card_Detail_modal_set_label_title: {
                bind: 'titleText'
              },
              card_Detail_modal_set_microilustration: {
                bind: 'illustration'
              },
              card_Detail_modal_set_label_body: {
                bind: 'bodyText'
              },
              card_Detail_modal_set_label_button: {
                bind: 'buttonText'
              }
            },
            out: {
              global_operations_modal_aric_close_call: {
                bind: 'help-modal-close'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-notification-toast',
        familyPath: '@bbva-spherica-components/bbva-notification-toast',
        render: 'litElement',
        properties: {
          type: 'success',
          iconExplainer: 'coronita:correct',
          alertText: 'glomo-card-detail-toast-digital-card-turned-on',
          duration: '3000',
          autoHide: 'true',
          fixedBottom: 'true',
          cellsConnections: {
            in: {
              card_Detail_mobile_payment_card_success_turn_on: {
                bind: 'show'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-mobile-payment',
        tag: 'bbva-manager-mobile-payment',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          cardsApiVersion: cardsVersion,
          cellsConnections: {
            in: {
              card_Detail_mobile_payment_digital_card_id: {
                bind: 'cardIdToTurnOn'
              },
              mobile_payment_turn_on_digital_card: {
                bind: 'digitalCardPatchOnActivation'
              }
            },
            out: {
              card_Detail_mobile_payment_card_success_turn_on: {
                bind: 'mobile-payment-card-success-turn-on'
              },
              dashboard_refresh_financial_overview: {
                bind: 'card-activation-api-dm-update'
              },
              global_retry_error: {
                bind: 'retry-error'
              }
            }
          }
        }
      }
    ]
  };

  const analyticManagerCardOriginationDelivery = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-card-origination-oc-debit-card-inmediate-delivery',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          card_Detail_linkcard_request: {
            bind: 'appOnClickStart'
          },
          card_Detail_analytics_registration_linkcard: {
            bind: 'footprintOfferProductDetail'
          }
        },
        out: {
          card_Detailapp_on_click_start: {
            bind: 'app-on-click-start',
            analytics: analyticsOcDebitCardImmediateDelivery.appOnClickStart
          },
          card_Detail_analytics_footprint_offer_product_detail: {
            bind: 'analytics-footprint-offer-product-detail',
            analytics: analyticsOcDebitCardImmediateDelivery.footprintProductDetail
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-interest-simulator-manager',
    familyPath: '@glomo-web-components/glomo-analytics-interest-simulator-manager',
    render: 'litElement',
    properties: {
      LITERALS: analyticsInterestSimulator.BINDED_LITERALS,
      cellsConnections: {
        in: {
          card_Detail_open_simulator_onboarding_modal: {
            bind: 'fireMarkSimulatorOnBoarding'
          },
          card_Detail_slide_change_on_boarding: {
            bind: 'fireMarkSimulatorOnBoardingSlide'
          }
        },
        out: {
          card_Detailanalytics_mark_simulator_on_boarding: {
            bind: 'analytics-mark-simulator-on-boarding',
            analytics: analyticsInterestSimulator.PAGE_VIEW_ONBOARDING
          },
          card_Detailanalytics_mark_simulator_on_boarding_slide: {
            bind: 'analytics-mark-simulator-on-boarding-slide',
            analytics: analyticsInterestSimulator.PAGE_VIEW_ONBOARDING
          }
        }
      }
    }
  };

  const analyticsProvisioningManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-tpw-provisioning',
    familyPath: '@glomo-web-components/bbva-analyticmanager-payments',
    render: 'litElement',
    properties: {
      wallet: nativeIos ? 'apple' : 'google',
      cellsConnections: {
        in: {
          global_card_detail_data_success_channel: {
            bind: 'cardData'
          },
          navigate_to_third_party_wallet_provisioning: {
            bind: 'sendInternalLinkOperative'
          },
          navigate_to_third_party_wallet_provisioning_error_off: {
            bind: 'sendErrorCardOffGooglePay'
          }
        },
        out: {
          card_Detail_analytic_internal_link: {
            bind: 'internal-link-operative',
            analytics: analyticsProvisioning.internalLink
          },
          card_Detail_analytic_internal_link_error: {
            bind: 'internal-link-operative-error',
            analytics: analyticsProvisioning.internalLink
          },
          cardDetail_analytic_footprint_error: {
            bind: 'error-card-off-google-pay',
            analytics: analyticsProvisioning.getFootPrintError('errorCardOff')
          },
          analytics_manager_provisioning_persist_data: {
            bind: 'analytic-manager-provisioning-persist-data'
          }
        }
      }
    }
  };

  const bbvaFeatureTransactionsList = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-transactions-list-accounts-mx',
    familyPath: '@glomo-web-components/bbva-feature-transactions-list-accounts-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      nativeIos,
      capitalizeAndroidPlatform: true,
      apiVersionAccountsData: 2,
      pageSize: 10,
      continue: 'account',
      isPreview: true,
      currentPage: 'account',
      productType: 'account',
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          navigation_from_futura_dashboard: {
            bind: 'data'
          },
          navigation_accounts_channel: {
            bind: 'data'
          },
          navigation_debit_cards_channel: {
            bind: 'data'
          },
          digital_butler_navigation_wit_product_id: {
            bind: 'data'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          card_Detail_hide_transactions_list_accounts: {
            bind: 'disableTransactionsAccount'
          },
          product_detail_cards_mx_go_to_dashboard: {
            bind: 'reset'
          },
          NAVIGATE_TO_CREDIT_CARD_PAYMENT_PROMISE: {
            bind: 'reset'
          },
          product_detail_cards_mx_go_to_digital_butler: {
            bind: 'reset'
          },
          __bridge_page_cardDetail: {
            bind: 'getTransactionsInfo'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          dashboard_list_virtual_contracts: {
            bind: 'digitalCards'
          },
          global_dashboard_cards_for_deeplink: {
            bind: 'dashboardCards'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'maskedAmount'
          }
        },
        out: {
          global_logout_sesion_expiration: {
            bind: 'alert-AUTOMATIC-LOGOUT-accept'
          },
          navigation_product_detail_to_transaction_detail: {
            bind: 'bbva-feature-transactions-list-accounts-mx-detail-transaction-tap',
            link: {
              page: 'accountTransactionDetail',
              params: {
                productId: 'productId',
                transactionId: 'transactionId',
                continue: 'continue'
              }
            }
          },
          navigation_transactions_to_transaction_detail: {
            bind: 'bbva-feature-transactions-list-accounts-mx-transaction-detail-tap-cards',
            link: {
              page: 'cardTransactionDetail',
              params: {
                productId: 'productId',
                transactionId: 'transactionId',
                financingType: null,
                rewardBenefits: null,
                pobPromotionFlag: null
              }
            }
          },
          global_card_detail_on_transaction_tap_validation: {
            bind: 'bbva-feature-transactions-list-accounts-mx-detail-transaction-tap'
          },
          global_card_detail_set_transactions: {
            bind: 'set-transactions',
            analytics: analyticsTransactions.transactionsListFootprint
          },
          global_card_detail_set_transactions_list_empty: {
            bind: 'empty-page-reached',
            analytics: analyticsTransactions.transactionsListEmptyFootprint
          },
          global_card_detail_set_account_transactions: {
            bind: 'set-account-transactions',
            analytics: analyticsTransactions.transactionsListFootprint
          },
          global_card_detail_set_transactions_error: {
            bind: 'error-on-get-transactions',
            analytics: analyticsTransactions.errorTransactionsListLinkAction
          },
          card_Detail_analytics_footprint_offer_product_detail: {
            bind: 'analytics-footprint-offer-product-detail',
            analytics: analyticsOcDebitCardImmediateDelivery.footprintProductDetail
          }
        }
      }
    }
  };

  base.components.push(
    analyticsManager,
    analyticsProvisioningManager,
    analyticManagerCardOriginationDelivery,
    bbvaFeatureTransactionsList
  );

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'mobile-payment-card-error-turn-on',
      acceptRetry: { bind: 'digitalCardPatchOnActivation', component: 'bbva-manager-mobile-payment' }
    }
  ]);
  base.components.push(bbvaAuth('mx', AppConfig));
  localStorageApp.addOutStorageChannels(base.components, ['cardFeatureFlags', 'card_detail_data'], AppConfig);

  return sphericaPageUtils.spherize(base);
};
