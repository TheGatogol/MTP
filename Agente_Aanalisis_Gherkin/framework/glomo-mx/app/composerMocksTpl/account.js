'use strict';

const createPage = require('./common/_pages');

// eslint-disable-next-line max-statements
module.exports = (CONFIG) => {
  const pages = createPage(CONFIG)('account');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { businessCryptography, campaigns, contracts, customerDocuments, customerServices, pockets, products, accountsV2, piggyBanks }
    },
    native = false,
    nativeIos = false,
    swiftCode
  } = CONFIG;
  const { bbvaAuth } = require('./common/_cross-components');
  const {
    addFeatureFlag,
    getLanguage,
    getLocalCurrency,
    getShortFormatDate,
    SPINNERSPHERICA: getSpinner,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const localStorageApp = require('./common/_local-storage');
  const { commons: { account, limitedApp } } = require('./analytics/common/_literals');
  const analytics = require('./analytics/_accountDetail')(CONFIG);
  const { PROJECT_NAME_GLOMO, PROJECT_NAME_GLOMO_ALWAYSON } = require('./analytics/_accountDetail')(CONFIG).bindLiterals;
  const analyticsMoreInfo = require('./analytics/_productMoreInfo')();
  const analyticsPockets = require('./analytics/_pockets')({});
  const analyticsRequestMoney = require('./analytics/_requestMoney')(CONFIG);
  const analyticsMonthlyStatement = require('./analytics/_monthlyStatement')('account');
  const analyticsGiveMoney = require('./analytics/_giveMoney')(CONFIG);
  const analyticsUpgradeAccount = require('./analytics/_upgradeAccountCustomer')();
  const analyticsAlwaysOn = require('./analytics/_standInAlwaysOn')(CONFIG);
  const analyticsRelevantFacts = require('./analytics/_relevantFacts')(CONFIG);
  const analyticsTransactions = require('./analytics/_accountTransactions')({});
  const { _codiQrAccount } = require('./codi/_codiQrAccount')();
  const analyticsAccountInformation = require('./analytics/_accountInformation')({});
  const analyticsQrDeposit = require('./analytics/_qrDeposit')(CONFIG);
  const cellsSpinnerVeil = getSpinner(CONFIG);
  cellsSpinnerVeil.properties = cellsSpinnerVeil.propertiesSpherica;
  cellsSpinnerVeil.properties.className = 'solid-spinner';
  cellsSpinnerVeil.properties.cellsConnections.in.mobile_manage_operation = {
    bind: 'hide'
  };
  const operationals = require('./dashboard/_operationals');

  const analyticsFlagFromPage = {
    key: 'glomo.analytics.account',
    defaultValue: true
  };

  const featureAccount = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-product-detail-accounts-mx',
    familyPath: '@glomo-web-components/bbva-feature-product-detail-accounts-mx',
    render: 'litElement',
    container: true,
    properties: {
      id: 'productDetailAccountMx',
      pageName: 'account',
      apiBusinessCryptographyVersion: businessCryptography,
      apiCampaignsVersion: campaigns,
      apiContractsVersion: contracts,
      apiCustomerDocumentsVersion: customerDocuments,
      apiCustomerServicesVersion: customerServices,
      apiProductsVersion: products,
      debitCardSubProductTypes: [ '0300' ],
      enableSwiftCode: true,
      host,
      native,
      language: getLanguage(),
      projectNameGlomo: PROJECT_NAME_GLOMO,
      projectNameGlomoAlwaysOn: PROJECT_NAME_GLOMO_ALWAYSON,
      requiredToken,
      subProductTypes: ['0246', '0103', '0001', '0115', '0210', '0005', '0004', '0104', '0205', '0201', '0260'],
      swiftCode,
      standInOperativesFeatureFlags: {
        transfers: ['glomo.standin.transfers.alwaysOn', 'glomo.standin.transfers.internal']
      },
      swipeMenu: false,
      cellsConnections: {
        in: {
          global_get_accounts_documentation_dossiers_data_success: {
            bind: 'listDocumentationDossiers'
          },
          global_account_documents_dossiers_data: {
            bind: 'listDocumentationDossiers'
          },
          global_client_id: {
            bind: 'clientId'
          },
          account_reset_page: {
            bind: 'accountResetPage'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          account_set_pockets_success_response: {
            bind: 'getPocketSuccessResponse'
          },
          bbva_controller_piggy_banks_data: {
            bind: 'getPiggyBanksSuccessResponse'
          },
          account_set_pockets_error_response: {
            bind: 'getPocketErrorResponse'
          },
          bbva_controller_piggy_banks_error: {
            bind: 'getPiggyBanksErrorResponse'
          },
          global_user_id: {
            bind: 'setPhoneNumber'
          },
          native_user_id: {
            bind: 'phoneNumber'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_login_success: {
            bind: 'customerResponse'
          },
          codicel_entrypoint_status: {
            bind: 'codicelConsentStatus'
          },
          global_dashboard_cards: {
            bind: 'dashboardCards'
          },
          flag_minior_account: {
            bind: 'isGlomoMinorAccount'
          },
          flag_parent_account: {
            bind: 'isGlomoParentAccount'
          },
          global_feature_flag_available_operations: {
            bind: 'availableOperations'
          },
          global_dimo_transfer_enable: {
            bind: 'dimoTransferFeature'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          navigation_from_futura_dashboard: {
            bind: 'setSelectedAccountData'
          },
          navigation_accounts_channel: {
            bind: 'setDataFromAccountSelected'
          },
          global_account_validate_localstorage_givemoney: {
            bind: 'getDataLocalStorageGiveMoney'
          },
          account_message_journey_to_idfx: {
            bind: 'payloadFinancialHealth'
          },
          dashboard_accounts_tdde: {
            bind: 'dashboardAccountsEnterprise'
          },
          global_storage_get_loginData_success: {
            bind: 'handleLoginData'
          },
          global_storage_get_loginData_error: {
            bind: 'handleLoginData'
          },
          global_storage_get_account_data_success: {
            bind: 'setDataFromLocalStorage'
          },
          global_storage_get_account_data_error: {
            bind: 'setDataFromLocalStorage'
          },
          global_storage_get_evidences_data_success: {
            bind: 'getGlobalStorageEvidences'
          },
          global_storage_get_evidences_data_error: {
            bind: 'getGlobalStorageEvidences'
          },
          global_storage_get_codicel_entrypoint_error: {
            bind: 'handleCodicelEntrypoint'
          },
          global_codicel_consent_status_updated: {
            bind: 'handleCodicelEntrypoint'
          },
          global_storage_get_codicel_entrypoint_success: {
            bind: 'handleCodicelEntrypoint'
          },
          response_evidences_success: {
            bind: 'handleEvidencesSuccess'
          },
          response_evidences_error: {
            bind: 'handleEvidencesError'
          },
          global_storage_get_giveMoney_success: {
            bind: 'onSuccessLocalStorageGiveMoney'
          },
          global_storage_get_giveMoney_error: {
            bind: 'onErrorLocalStorageGivemoney'
          },
          global_storage_get_update_contract_success_date_success: {
            bind: 'handleUpdateContractSuccessDate'
          },
          upgrade_customer_success_dossier_completed: {
            bind: 'upgradeCustomer'
          },
          open_modal_limited_operatives_stand_in: {
            bind: 'openInformationStandInModal'
          },
          relevant_facts_account_navigation_notify_channel: {
            bind: 'payloadFinancialHealth'
          },
          global_dashboard_cards_for_deeplink: {
            bind: 'dashboardCards'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'setDeepLinkProductId'
          },
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_account: {
            bind: 'init'
          },
          global_account_set_transactions_loaded: {
            bind: 'loadedMovements'
          },
          set_codi_qr_image_src: {
            bind: 'setQrCodi'
          },
          rcp_update_customer_completed: {
            bind: 'updateDepositThresholdsRcp'
          },
          global_offers_retrieved: {
            bind: 'getOffers'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'maskedAmount'
          },
          pockets_refresh_account: {
            bind: 'updatePocketsAccount'
          },
          pockets_pockets_created_to_account: {
            bind: 'updatePocketsAccount'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          global_account_request_generate_qr_success: {
            bind: 'handleQrCreateSuccess'
          },
          global_account_request_generate_qr_error: {
            bind: 'handleQrCreateError'
          }
        },
        out: {
          navigate_to_goals_minors_hiring: {
            bind: 'goals-youngster-card-know-more',
            link: {
              page: 'goalsMinorHiring'
            }
          },
          global_logout_sesion_expiration: {
            bind: 'alert-AUTOMATIC-LOGOUT-accept'
          },
          open_control_veil: {
            bind: 'show-loader'
          },
          close_control_veil: {
            bind: 'hide-loader'
          },
          navigation_from_carousel: {
            bind: 'change-account-carrousell'
          },
          account_detail_with_proactivity_campaigns_loaded: {
            bind: 'init-page-analytics'
          },
          account_more_info_init_page: {
            bind: 'init-page'
          },
          account_detail_without_proactivity_campaigns: {
            bind: 'init-page-analytics'
          },
          account_change_product_id: {
            bind: 'change-account-carrousell'
          },
          account_set_get_pockets_balance: {
            bind: 'set-get-pockets-balance'
          },
          account_set_country_receipt_qr_deposit: {
            bind: 'set-country-receipt'
          },
          global_account_request_generate_qr: {
            bind: 'request-generate-qr'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line',
            'forward-to-native': true
          },
          request_codi_qr_account: {
            bind: 'request-account-qr-codi'
          },
          navigation_accounts_go_back: {
            bind: 'navigate-to-dashboard',
            backStep: true
          },
          set_get_piggy_banks_balance: {
            bind: 'set-get-piggy-banks-balance'
          },
          global_account_set_account_for_operations: {
            bind: 'send-selected-account'
          },
          global_account_set_success_response: {
            bind: 'get-on-get-account'
          },
          global_account_set_error_response: {
            bind: 'error-on-get-account',
            analytics: analytics.accountErrorPageView
          },
          global_account_set_product_id: {
            bind: 'send-product-id'
          },
          navigete_to_pockets_welcome: {
            bind: 'navigate-to-pockets-welcome',
            analytics: analyticsPockets.APP_ON_CLICK_START_PD,
            link: {
              page: 'pocketsWelcome'
            }
          },
          navigate_to_pockets_list: {
            bind: 'navigate-to-pockets-list',
            link: {
              page: 'pocketsList'
            }
          },
          navigate_to_piggy_banks: {
            bind: 'navigate-to-piggy-banks',
            link: {
              page: 'piggyBanks'
            }
          },
          navigate_to_product_more_info: {
            bind: 'navigate-to-product-more-info',
            analytics: analytics.moreInfoPageView
          },
          navigation_to_portabilities_list: {
            bind: 'navigate-to-change-payroll',
            link: {
              page: 'payrollPortabilityListPage'
            }
          },
          message_addressing_interbank_transfers: {
            bind: 'navigate-to-interbank-transfers',
            analytics: analytics._getOnClickStart('internationalTransfers', true),
            link: {
              page: 'internationalTransfersPanel'
            }
          },
          navigation_product_detail_to_transfer: {
            bind: 'navigate-to-transfers',
            analytics: analytics._getOnClickStart('transfer'),
            link: {
              page: 'transfers',
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          navigation_product_detail_to_bill_payments_request: {
            bind: 'navigate-to-bill-payments',
            analytics: analytics._getOnClickStart('billPayment')
          },
          navigation_product_detail_to_cardless_withdrawal: {
            bind: 'navigate-to-cardless-withdrawal',
            analytics: analytics._getOnClickStart('cardlessWithdrawal'),
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
            analytics: analytics._getOnClickStart('accountCreditCardPayment'),
            link: {
              page: 'accountCreditCardPayment',
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
            analytics: analytics._getOnClickStart('codi'),
            link: {
              page: 'codiQrScanner',
              params: {
                continue: 'continue'
              }
            }
          },
          navigation_product_detail_to_checks_section: {
            bind: 'navigate-to-checks-sections',
            analytics: analytics._getOnClickStart('checksSection'),
            link: {
              page: 'checksSection',
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          navigation_product_detail_to_mobile_top_up: {
            bind: 'navigate-to-refills-and-packages',
            analytics: analytics._getOnClickStart('refillsAndPackages'),
            link: {
              page: 'mobileTopUp',
              skipHistory: true,
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          navigation_product_detail_to_mobile_top_up_packages: {
            bind: 'navigate-to-mobile-top-up-packages',
            analytics: analytics._getOnClickStart('refillsAndPackages'),
            link: {
              page: 'mobileTopUpPackages'
            }
          },
          navigation_product_detail_to_account_statements_from_account: {
            bind: 'navigate-to-account-statements',
            analytics: analyticsMonthlyStatement.dynamicLevel1('cuentas'),
            link: addFeatureFlag('account.monthlyStatement', {
              page: 'accountMonthlyStatement',
              skipHistory: true,
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            })
          },
          navigation_parental_control_account_limits: {
            bind: 'navigate-to-parental-control',
            link: {
              page: 'parentalControlAccountLimits',
              params: {
                productId: 'productId',
                continue: 'continue',
                cleanUntil: 'operations'
              }
            }
          },
          navigate_to_request_money: {
            bind: 'navigate-to-request-money',
            analytics: analyticsRequestMoney._onClickStart('detalle'),
            link: {
              page: 'requestMoney',
              params: {
                continue: 'continue',
                cleanUntil: 'operations'
              }
            }
          },
          global_account_analytics_give_money: {
            bind: 'start-give-money-flow',
            analytics: analyticsGiveMoney.appOnClickStartGiveMoney
          },
          global_account_navigate_for_give_money: {
            bind: 'navigate-to-give-money',
            analytics: analyticsGiveMoney.pageViewGiveMoney,
            link: {
              page: 'giveMoney'
            }
          },
          navigation_to_codicel_peer_to_peer_send: {
            bind: 'navigate-to-codicel-peer-to-peer-send',
            analytics: analytics._getOnClickStart('sendMoney'),
            link: {
              page: 'codicelPeerToPeerSend',
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          navigation_account_detail_to_edit_alias: {
            bind: 'navigate-to-edit-account-alias',
            analytics: analytics._getOnClickStart('editAlias'),
            link: {
              page: 'accountEditAlias',
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          navigation_to_add_video_selfie_code: {
            bind: 'navigate-to-add-video-selfie',
            link: {
              page: 'addVideoSelfie'
            }
          },
          navigation_product_detail_to_codicel_agree_and_remove_consent: {
            bind: 'navigate-to-codicel-agree-and-remove-consent',
            link: {
              page: 'codicelAgreeAndRemoveConsent',
              params: {
                continue: 'continue',
                cleanUntil: 'operations'
              }
            }
          },
          navigate_message_boost_to_transfer: {
            bind: 'message-addressing-cv-currency',
            analytics: analytics._getOnClickStart('globalOperativeTransfers', true),
            link: {
              page: 'transfers',
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          OPEN_UPGRADE_MODULAR: {
            bind: 'navigate-to-upgrade-N2-N4-page',
            analytics: analytics.appOnClickStartButtonMessage('ampliar cuenta'),
            link: {
              page: 'upgradeN2N4'
            }
          },
          open_upgrade_hybrid: {
            bind: 'navigate-to-upgrade-N2-N4-page-hybrid',
            link: {
              page: 'upgradeCustomer'
            }
          },
          navigation_product_detail_to_update_account: {
            bind: 'navigate-to-update-account-page',
            link: {
              page: 'updateContractConfirmation'
            }
          },
          global_account_navigation_product_detail_to_upgrade_account: {
            bind: 'navigate-to-upgrade-account',
            analytics: analyticsUpgradeAccount.APP_ON_CLICK_START,
            link: {
              page: 'upgradeAccountInitPage'
            }
          },
          global_account_analityc_alert_click: {
            bind: 'account-upgrade-event-button-click',
            analytics: analytics.appOnClickStartButtonMessage('actualizar ahora')
          },
          global_account_analityc_proactive_upgrade_rcp: {
            bind: 'rcp-alert-navigate-to-upgrade'
          },
          global_account_account_manager_set_update_contract_banner_analytic_dayzero: {
            bind: 'account-upgrade-alert-event',
            analytics: analytics.alertView()
          },
          global_account_set_upgrade_account_modal_headingtext_restrictions: {
            bind: 'expand-account-modal-restriction-info',
            analytics: analyticsUpgradeAccount.RESTRICTIONS_PRINT
          },
          global_get_from_storage: {
            bind: 'global-get-from-storage'
          },
          global_set_in_storage: {
            bind: 'global-set-in-storage'
          },
          global_remove_from_storage: {
            bind: 'global-remove-from-storage'
          },
          request_get_evidences: {
            bind: 'get-evidence-service'
          },
          account_info_receipt: {
            bind: 'product-account-detail-send-data-receipt'
          },
          account_share_receipt: {
            bind: 'product-account-detail-create-receipt',
            analytics: analyticsMoreInfo._getExternalLinkData()
          },
          account_detail_qr_deposit_send_data_receipt: {
            bind: 'product-account-detail-qr-deposit-send-data-receipt'
          },
          account_detail_qr_deposit_create_receipt: {
            bind: 'product-account-detail-qr-deposit-create-receipt'
          },
          account_detail_qr_deposit_set_country_receipt: {
            bind: 'product-account-detail-qr-deposit-set-country-receipt'
          },
          account_more_info_clipboard_button: {
            bind: 'copy-link-click'
          },
          account_products_limits: {
            bind: 'send-products-limits'
          },
          global_account_stand_in_info_page: {
            bind: 'navigate-to-limited-operatives-info',
            analytics: analyticsAlwaysOn.standInOperatives(account, limitedApp),
            link: {
              page: 'limitedOperativesInfo'
            }
          },
          account_init_page_stand_in: {
            bind: 'init-account-stand-in',
            analytics: analyticsAlwaysOn.standInOperatives(account)
          },
          account_stand_in_analytics_transfers: {
            bind: 'stand-in-transfers',
            analytics: analyticsAlwaysOn.standInOperatives(account, 'TRANSFER')
          },
          account_stand_in_analytics_bill_payment: {
            bind: 'stand-in-bill-payments',
            analytics: analyticsAlwaysOn.standInOperatives(account, 'BILL_PAYMENT')
          },
          account_stand_in_analytics_card_less_withdrawl: {
            bind: 'stand-in-cardless-withdrawal',
            analytics: analyticsAlwaysOn.standInOperatives(account, 'CARDLESS_WITHDRAW')
          },
          account_stand_in_analytics_detail_info: {
            bind: 'stand-in-product-more-info',
            analytics: analyticsAlwaysOn.standInOperatives(account, 'ACCOUNT_MORE_DETAILS')
          },
          analytics_account_detail_generate_qr_deposit: {
            bind: 'analytics-account-detail-generate-qr-deposit',
            analytics: analyticsQrDeposit.pageViewQrDeposit
          },
          analytics_account_detail_share_receipt_qr_deposit: {
            bind: 'analytics-account-detail-share-receipt-qr-deposit',
            analytics: analyticsQrDeposit.externalLink
          },
          analytics_account_detail_generate_qr_deposit_error: {
            bind: 'analytics-account-detail-generate-qr-deposit-error',
            analytics: analyticsQrDeposit.errorPageViewQrDeposit
          },
          open_modal_limited_operatives_stand_in: {
            bind: 'open-modal-limited-operatives-stand-in'
          },
          global_account_send_product_id_account_deeplink: {
            bind: 'send-product-id-account-deeplink'
          },
          set_initial_property_value_from_deeplink: {
            bind: 'initialize-property-upgradeable-account'
          },
          global_account_navigation_to_pending_movements: {
            bind: 'list-link-list-movements',
            link: {
              page: 'transfersPendingMovements'
            }
          },
          global_account_set_feature_flags: {
            bind: 'feature-flags-accounts'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        },
        params: {
          productId: 'productId',
          user: 'global_user'
        }
      }
    }
  };

  const bbvaControllerBillPaymentsHome = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-bill-payments-home',
    familyPath: '@glomo-web-components/bbva-controller-bill-payments-home',
    render: 'litElement',
    properties: {
      operationalsPage: operationals.operationalsPage,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'updatedPaymentsFlags'
          },
          navigation_product_detail_to_bill_payments_request: {
            bind: 'routeToBillPayments'
          }
        },
        out: {
          navigation_product_detail_to_bill_payments: {
            bind: 'bbva-controller-bill-payments-home-bill-payments-legacy-navigate',
            link: {
              page: 'billPayments',
              params: {
                productId: 'productId',
                continue: 'continue'
              }
            }
          },
          navigation_to_bill_payments_home: {
            bind: 'bbva-controller-bill-payments-home-bill-payments-home-navigate',
            link: {
              page: 'billPaymentsHome'
            }
          },
          is_from_accounts_for_store_and_forward: {
            bind: 'bbva-controller-bill-payments-home-is-from-account-validate'
          }
        }
      }
    }
  };

  const relevantFactsManager = {
    zone: 'productDetailAccountMx.slot-content',
    type: 'DM',
    tag: 'bbva-manager-relevant-facts',
    familyPath: '@glomo-web-components/bbva-manager-relevant-facts',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          global_financial_overview_details: {
            bind: 'getFinancialData'
          },
          global_account_send_product_id_account_deeplink: {
            bind: 'getEmplacementProductId'
          },
          navigation_from_futura_dashboard: {
            bind: 'getEmplacementProductId'
          },
          navigation_accounts_channel: {
            bind: 'getEmplacementProductId'
          }
        },
        out: {
          emplacement_product_id_channel: {
            bind: 'emplacement-product-id'
          }
        }
      }
    }
  };

  const proactivityMessage = {
    zone: 'productDetailAccountMx.slot-content',
    type: 'UI',
    tag: 'proactivity-message',
    familyPath: '@bbva-web-components-widgets/proactivity-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      emplacement: 'ACCOUNT_PROFILE',
      host,
      language: getLanguage(),
      native,
      showMessage: true,
      cellsConnections: {
        in: {
          emplacement_product_id_channel: {
            bind: 'productId'
          }
        },
        out: {
          global_navigation_message_to_detail_account: {
            bind: 'proactivity-message-execute',
            link: {
              page: 'relevantFactsDetail',
              params: {
                relevantFactId: 'relevantFactId'
              }
            }
          },
          account_close_message: {
            bind: 'proactivity-message-close'
          },
          relevant_facts_account_navigation_notify_channel: {
            bind: 'proactivity-message-to-load'
          },
          account_message_journey_to_idfx: {
            bind: 'proactivity-message-to-load'
          }
        }
      }
    }
  };
  const analyticsRelevantFactsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-personalization',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-personalization',
    render: 'litElement',
    properties: {
      analyticsFlagFromPage: analyticsFlagFromPage,
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          relevant_facts_account_navigation_notify_channel: {
            bind: 'firePageView'
          },
          account_detail_with_proactivity_campaigns_loaded: {
            bind: 'firePageView'
          },
          account_detail_without_proactivity_campaigns: {
            bind: 'firePageViewWithoutCampaigns'
          },
          global_navigation_message_to_detail_account: {
            bind: 'fireClickEvent'
          },
          account_close_message: {
            bind: 'fireCloseEvent'
          }
        },
        out: {
          ch_relevant_facts_account_analytics_page_view: {
            bind: 'analytics-page-view',
            analytics: analytics.accountPageViewWithProactivityCampaigns
          },
          ch_relevant_facts_account_analytics_page_view_without_campaigns: {
            bind: 'analytics-page-view-without-campaigns',
            analytics: analytics.accountPageViewWithoutProactivityCampaigns
          },
          ch_relevant_facts_account_analytics_click_event: {
            bind: 'relevant-facts-analytics-click-event-pfm-dashboard',
            analytics: analyticsRelevantFacts.MESSAGE_ACCOUNT_OVERVIEW_CLICK_LINK
          },
          ch_relevant_facts_account_analytics_close_event: {
            bind: 'relevant-facts-analytics-close-event-pfm-dashboard',
            analytics: analyticsRelevantFacts.MESSAGE_ACCOUNT_OVERVIEW_CLICK_CLOSE
          },
          ch_analytics_flag_to_ticket: {
            bind: 'relevant-facts-analytics-click-event-pfm-dashboard'
          }
        },
        params: {
          productId: 'productId'
        }
      }
    }
  };
  const cellsDmGlobalApisPockets = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-pockets',
    properties: {
      host,
      pocketsApiVersion: pockets,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          account_set_get_pockets_balance: {
            bind: 'getPocketsBalance'
          }
        },
        out: {
          account_set_pockets_success_response: {
            bind: 'get-pockets-balance-success'
          },
          account_set_pockets_error_response: {
            bind: 'get-pockets-balance-error'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisEvidences = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-evidences',
    properties: {
      host,
      native: !!CONFIG.native,
      requiredToken,
      cellsConnections: {
        in: {
          request_get_evidences: {
            bind: 'getListEvidences'
          }
        },
        out: {
          response_evidences_success: {
            bind: 'success-on-get-list-evidences'
          },
          response_evidences_error: {
            bind: 'error-on-get-list-evidences'
          }
        }
      }
    }
  };
  const clipboard = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-clipboard-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          account_more_info_clipboard_button: {
            bind: 'text'
          }
        },
        out: {
          account_more_info_clipboard_success: {
            bind: 'text-copied'
          },
          account_more_info_clipboard_error: {
            bind: 'clipboard-error'
          }
        }
      }
    }
  };
  const receipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mxGlobal',
      dateFormat: getShortFormatDate(),
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      sharedReceiptStyles: {
        infoIcon: {
          'display': 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'width': '1.75rem'
        }
      },
      cellsConnections: {
        in: {
          account_set_country_receipt_qr_deposit: {
            bind: 'country'
          },
          account_share_receipt: {
            bind: 'captureReceipt'
          },
          account_info_receipt: {
            bind: 'result'
          },
          mobile_manage_operation: {
            bind: 'reset'
          },
          account_detail_qr_deposit_send_data_receipt: {
            bind: 'result'
          },
          account_detail_qr_deposit_create_receipt: {
            bind: 'captureReceipt'
          },
          account_detail_qr_deposit_set_country_receipt: {
            bind: 'country'
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
  };
  const bbvaNotificationToast = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'bbva-notification-toast',
    familyPath: '@bbva-spherica-components/bbva-notification-toast',
    render: 'litElement',
    properties: {
      type: 'success',
      iconExplainer: 'coronita:correct',
      alertText: 'bbva-feature-edit-alias-account-toast-message',
      duration: '3000',
      autoHide: 'true',
      fixedBottom: 'true',
      cellsConnections: {
        in: {
          show_edit_alias_success: {
            bind: 'show'
          },
          global_edit_alias_success_toast: {
            bind: 'show'
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
      capitalizeAndroidPlatform: true,
      apiVersionAccountsData: 2,
      pageSize: 10,
      nativeIos,
      continue: 'account',
      isPreview: true,
      currentPage: 'account',
      productType: 'account',
      cellsConnections: {
        in: {
          navigation_from_carousel: {
            bind: 'data'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          navigation_from_futura_dashboard: {
            bind: 'data'
          },
          navigation_accounts_channel: {
            bind: 'data'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          navigation_accounts_go_back: {
            bind: 'reset'
          },
          account_change_product_id: {
            bind: 'getTransactionFromTab'
          },
          __bridge_page_account: {
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
          navigation_product_detail_to_transaction_detail: {
            bind: 'setIsTransactionDetail'
          },
          navigation_transactions_to_transaction_detail: {
            bind: 'setIsTransactionDetail'
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
                rewardBenefits: false,
                pobPromotionFlag: false
              }
            }
          },
          global_account_on_transaction_tap_validation: {
            bind: 'bbva-feature-transactions-list-accounts-mx-detail-transaction-tap'
          },
          global_account_set_transactions: {
            bind: 'set-transactions',
            analytics: analyticsTransactions.transactionsListFootprint
          },
          global_account_set_transactions_list_empty: {
            bind: 'empty-page-reached',
            analytics: analyticsTransactions.transactionsListEmptyFootprint
          },
          global_account_set_account_transactions: {
            bind: 'set-account-transactions',
            analytics: analyticsTransactions.transactionsListFootprint
          },
          global_account_set_transactions_error: {
            bind: 'error-on-get-transactions',
            analytics: analyticsTransactions.errorTransactionsListLinkAction
          },
          global_account_set_transactions_loaded: {
            bind: 'bbva-feature-transactions-list-accounts-mx-movements-loaded'
          }
        }
      }
    }
  };

  const piggyBanksController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-piggy-banks-mx',
    familyPath: '@glomo-web-components/bbva-controller-piggy-banks-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      piggyBanksApiVersion: piggyBanks,
      accountsApiVersion: accountsV2,
      requiredToken,
      currency: getLocalCurrency(),
      productsTypesAllowed: ['AH', 'CH'],
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          set_get_piggy_banks_balance: {
            bind: 'requestGetData'
          }
        },
        out: {
          bbva_piggy_banks_controller_show_onboarding: {
            bind: 'bbva-controller-piggy-banks-mx-onboarding-show'
          },
          bbva_controller_piggy_banks_selected_contract_id: {
            bind: 'bbva-controller-piggy-banks-mx-selected-contract-id'
          },
          bbva_controller_piggy_banks_payroll_amount: {
            bind: 'bbva-controller-piggy-banks-mx-payroll-amount'
          },
          bbva_controller_piggy_banks_payroll_currency: {
            bind: 'bbva-controller-piggy-banks-mx-payroll-currency'
          },
          bbva_piggy_banks_controller_success_get_piggy_contact_detail_names: {
            bind: 'bbva-controller-piggy-banks-mx-consumer-names-send'
          },
          bbva_controller_has_piggy_banks: {
            bind: 'bbva-controller-piggy-banks-mx-has-piggy-banks'
          },
          bbva_controller_piggy_banks_data: {
            bind: 'bbva-controller-piggy-banks-mx-data'
          },
          bbva_controller_piggy_banks_error: {
            bind: 'bbva-controller-piggy-banks-mx-error'
          },
          bbva_controller_piggy_banks_mx_route: {
            bind: 'bbva-controller-piggy-banks-mx-route'
          }
        },
        params: {
          user: 'global_user'
        }
      }
    }
  };

  const analyticsManagerAccountInformation = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-account-information-product-detail-accounts-mx',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-account-information',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_account_analityc_proactive_upgrade_rcp: {
            bind: 'fireAccountUpgradeCustomerEvent'
          }

        },
        out: {
          'analytics-manager-account-upgrade-info-box': {
            bind: 'bbva-analyticmanager-account-information-product-detail-accounts-mx-upgrade-info-box',
            analytics: analyticsAccountInformation.upgradeAccount
          },
          'analytics-manager-account-upgrade-alert-share': {
            bind: 'bbva-analyticmanager-account-information-product-detail-accounts-mx-upgrade-alert-share',
            analytics: analyticsAccountInformation.upgradeAccountDetailShare
          }
        }
      }
    }
  };

  const qrCreator = {
    zone: 'app__main',
    tag: 'bbva-nativeconnector-bbva-qr-creator',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr-creator',
    render: 'litElement',
    isNativeiOS: nativeIos,
    properties: {
      cellsConnections: {
        in: {
          global_account_request_generate_qr: {
            bind: 'generateQr'
          }
        },
        out: {
          global_account_request_generate_qr_success: {
            bind: 'bbva-qr-creator-code-success'
          },
          global_account_request_generate_qr_error: {
            bind: 'bbva-qr-creator-code-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'account',
    currentPage: {
      url: '/account/:productId'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        disableScrollLock: true,
        drawerWidth: '100%',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        headerHeight: headerHeightMinimum,
        footerFixed: true,
        disableEdgeSwipe: true,
        className: 'bg-light-grey',
        cellsConnections: {
          in: {
            account_init_account_detail: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      featureAccount,
      ..._codiQrAccount,
      proactivityMessage,
      relevantFactsManager,
      analyticsRelevantFactsManager,
      cellsDmGlobalApisPockets,
      cellsDmGlobalApisEvidences,
      clipboard,
      receipt,
      bbvaFeatureTransactionsList,
      bbvaControllerBillPaymentsHome,
      bbvaNotificationToast,
      analyticsManagerAccountInformation,
      piggyBanksController,
      qrCreator,
      cellsSpinnerVeil
    ]
  };
  base.components.push(bbvaAuth('mx', CONFIG));
  localStorageApp.addOutStorageChannels(base.components, ['account_data', 'evidences_data', 'enrollment_codi_key',
    'registration_completed_codi', 'update_contract_success_date', 'codicel_entrypoint', 'loginData', 'giveMoney', 'discreet_mode'], CONFIG);
  return base;
};
