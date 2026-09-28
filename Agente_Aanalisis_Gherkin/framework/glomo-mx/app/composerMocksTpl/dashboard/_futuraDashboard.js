'use strict';

const analyticsFuturaDashboard = require('../analytics/_futuraDashboard')();
const operationalAnalytics = require('../analytics/_operationals')();
const LITERALS = require('../analytics/common/_literals');
const { offersFlagsData } = require('./_operationals.js');
const {
  getLocalCurrency,
  getLanguage,
  getCampaignsCode,
  getCampaignAnalytics
} = require('../common/helpers/_utils');

const experiencesConfig = {
  header: {
    rightButtons: false
  }
};

const {
  configAccountsProduct,
  configCardsProduct,
  configLoansProduct,
  configInsuranceProduct,
  configInsurancesProduct,
  configBusinessProduct,
  externalOpportunitiesData,
  configAccountsProductStandIn,
  configCardsProductStandIn,
  togglesStandIn,
  toggles,
  messagesApiData,
  dictionaryFlagsStandInOperatives
} = require('./_config.js');

const appInfoEstructureHomeCore = (CONFIG) => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        campaigns: messagesApiVersion,
        financialOverviewApiVersion,
        privateBankingPortfolios: versionPrivateBankingPortfolioBalancesDm
      }
    },
    native = false
  } = CONFIG;
  return {
    zone: 'futuraDashboard',
    type: 'UI',
    tag: 'app-info-structure-home-core-gl',
    familyPath: '@glomo-web-components/app-info-structure-home-core-gl',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      messagesApiVersion,
      financialOverviewApiVersion,
      countryNba: 'mx',
      countryNbo: 'mx',
      countrySvps: 'mx',
      language: getLanguage(),
      nbaType: 'NBA',
      autoPlay: false,
      localCurrency: getLocalCurrency(),
      loading: true,
      nboType: 'NBO',
      showExpenseCard: true,
      showIncomeCard: true,
      showInvestmentCard: true,
      showIncrementalInvestment: true,
      showWhimRecommendation: true,
      hideMedianSpeedPercentage: true,
      showCoachAccessArrow: true,
      callMessageService: false,
      expensesGroupId: '2',
      incomesGroupId: '1',
      compositeEncryptionIndicator: [ 'DEPOSIT' ],
      investmentProductType: ['DEPOSIT', 'INVESTMENT_FUND'],
      specificAmountProduct: 'CURRENT_BALANCE',
      countryDefaultCurrency: getLocalCurrency(),
      native,
      svpId: 'SVP',
      scrollElement: ['#cells-template-dashboard', '#app-container', 'slot'],
      experiencesAttachToBody: true,
      experienceMode: 'CAROUSEL',
      experiencesConfig,
      indicatorIdNbo: 'OLG',
      indicatorIdNba: 'OLG',
      showExpenseDates: true,
      showIncomeDates: true,
      maxVisibleProducts: 6,
      hideEditLink: false,
      hideEditionTutorial: true,
      offersValidationData: offersFlagsData,
      configAccountsProduct,
      configCardsProduct,
      configLoansProduct,
      configInsuranceProduct,
      configInsurancesProduct,
      configAccountsProductStandIn,
      configCardsProductStandIn,
      togglesStandIn,
      configBusinessProduct,
      externalOpportunitiesData,
      toggles,
      messagesApiData,
      isAnimationHeaderBlue: true,
      activePage: 'dashboard',
      storesArray: [],
      avoidRequestBalanceDashboardRewards: true,
      displayHeaderSvps: true,
      sendClickDiscreetMode: true,
      isActiveDataStorageMaincardAnimation: true,
      enableCarouselFirstSlideAnimationMaincard: true,
      cellsConnections: {
        in: {
          '__bridge_evt_page-ready': {
            bind: 'pageInfo'
          },
          __bridge_page_dashboard: {
            bind: 'returnPage'
          },
          __bridge_app: {
            bind: 'navigationData'
          },
          glomo_dashboard_futura_tab_options_configuration: {
            bind: 'options'
          },
          futura_dashboard_collection_assistance_feature_flag: {
            bind: 'showAssistanceSection'
          },
          futura_dashboard_collection_hide_edition_maincard_feature_flag: {
            bind: 'hideEditLink'
          },
          futura_dashboard_collection_hide_last_card_feature_flag: {
            bind: 'hideLastCard'
          },
          glomo_dashboard_futura_configuration_offers_minior: {
            bind: 'offersData'
          },
          futura_dashboard_collection_discreet_mode_feature_flag: {
            bind: 'discreetModeSection'
          },
          futura_dashboard_collection_blue_feature_flag: {
            bind: 'isActiveBlueCollection'
          },
          futura_dashboard_collection_nba_feature_flag: {
            bind: 'isActiveNbaCollection'
          },
          futura_dashboard_collection_maincard_feature_flag: {
            bind: 'isActiveMaincardCollection'
          },
          futura_dashboard_collection_frequent_actions_feature_flag: {
            bind: 'isActiveFrequentactionsCollection'
          },
          futura_dashboard_collection_smart_servicing_feature_flag: {
            bind: 'isActiveSmartServicingCollection'
          },
          futura_dashboard_collection_financial_coach_feature_flag: {
            bind: 'isActiveFinancialCoachCollection'
          },
          futura_dashboard_collection_financial_health_feature_flag: {
            bind: 'isActiveFinancialHealthCollection'
          },
          futura_dashboard_collection_tips_finance_profiling_feature_flag: {
            bind: 'isActiveTipsFinanceProfilingCollection'
          },
          futura_dashboard_collection_nbo_feature_flag: {
            bind: 'isActiveNboCollection'
          },
          futura_dashboard_collection_svps_feature_flag: {
            bind: 'isActiveSvpsCollection'
          },
          futura_dashboard_collection_experiences_feature_flag: {
            bind: 'isActiveExperiencesCollection'
          },
          futura_check_business_intelligence_configuration: {
            bind: 'checkBusinessConfig'
          },
          dashboard_bi_get_customer_id: {
            bind: 'customerId'
          },
          global_customer_relationship_management_offers: {
            bind: 'offersData'
          },
          global_technicalcore_operations_filter_send_delfos_filter_response: {
            bind: 'cacheFutura'
          },
          global_technicalcore_operations_workshop_mx_new_financial_overview: {
            bind: 'financialOverviewData'
          },
          global_technicalcore_operations_filter_send_user_settings_filter_response: {
            bind: 'userSettingsData'
          },
          global_controller_home_core_send_to_home_core_status_user_setting: {
            bind: 'userSettingsStatus'
          },
          global_controller_home_core_send_to_home_core_futura_app_setting: {
            bind: 'futuraAppSettings'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'discreetMode'
          },
          dashboard_reset_page: {
            bind: 'showLoader'
          },
          global_technicalcore_operations_filter_send_smart_settings_filter_response: {
            bind: 'smartItemsData'
          },
          global_offers_campaigns_error: {
            bind: 'offersErrorData'
          },
          global_analytics_optimization_node_response: {
            bind: 'stateCollectionResponse'
          },
          blue_navigate_dashboard_to_operations_frequent: {
            bind: 'frequentOperation'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          get_accounts_documents_dossiers_success: {
            bind: 'cacheDossiers'
          },
          get_accounts_documents_dossiers_error: {
            bind: 'cacheDossiersError'
          },
          get_accounts_documents_dossiers_api_error: {
            bind: 'cacheDossiersError'
          },
          global_get_accounts_documentation_dossiers_data_success: {
            bind: 'cacheDossiersError'
          },
          global_get_accounts_documentation_dossiers_data_error: {
            bind: 'cacheDossiersError'
          },
          futura_collections_home_always_on_feature_flag: {
            bind: 'alwaysOnMode'
          },
          native_click_event: {
            bind: 'isSidebarOptionClicked'
          },
          global_technicalcore_operations_workshop_mx_config_data_properties: {
            bind: 'configDataProperties'
          },
          global_technicalcore_operations_filter_mx_config_investment_properties: {
            bind: 'configInvestmentProduct'
          },
          navigation_bar_to_stand_in_mode: {
            bind: 'scrollTopPage'
          },
          global_discreet_mode_init_external_page_data: {
            bind: 'getConfigDiscreetMode'
          },
          global_discreet_mode_selected_option: {
            bind: 'changeDiscreetMode'
          },
          global_discreet_mode_request_permission_state: {
            bind: 'changeCameraPermission'
          },
          global_discreet_mode_face_detected: {
            bind: 'seeCameraToast'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'app-info-structure-home-core-gl-btn-menu-click',
            'forward-to-native': true
          },
          global_collection_visible: {
            bind: 'app-info-structure-home-core-gl-status-collection-view'
          },
          app_info_structure_home_core_colletion_get_items: {
            bind: 'app-info-structure-home-core-gl-smart-items-fetch'
          },
          app_info_structure_home_core_collection_navigate: {
            bind: 'app-info-structure-home-core-gl-item-click'
          },
          app_info_structure_home_core_save_user_setting: {
            bind: 'app-info-structure-home-core-gl-user-settings-save'
          },
          app_info_structure_home_core_financial_overview_details: {
            bind: 'app-info-structure-home-core-gl-financial-overview-data-view'
          },
          app_info_structure_home_core_item_close: {
            bind: 'app-info-structure-home-core-gl-item-close'
          },
          app_info_structure_home_next_best_actions_items_load: {
            bind: 'app-info-structure-home-next-best-action-gl-items-load'
          },
          app_info_structure_home_core_items_load: {
            bind: 'app-info-structure-home-core-gl-items-load'
          },
          app_info_structure_home_core_element_scroll: {
            bind: 'app-info-structure-home-core-gl-element-scroll'
          },
          app_info_structure_home_core_item_click: {
            bind: 'app-info-structure-home-core-gl-item-click'
          },
          app_info_structure_home_core_collection_click: {
            bind: 'app-info-structure-home-core-gl-collection-click'
          },
          app_info_structure_home_core_collection_edit: {
            bind: 'app-info-structure-home-core-gl-collection-edit'
          },
          app_info_structure_home_core_collection_saved: {
            bind: 'app-info-structure-home-core-gl-collection-saved'
          },
          global_message_snackbar: {
            bind: 'app-info-structure-home-core-gl-user-settings-edit-succeed'
          },
          app_info_structure_home_core_customized_offers_link_more: {
            bind: 'app-info-structure-home-customized-offers-gl-link-more-navigate',
            link: {
              page: 'contractProductSection'
            }
          },
          app_info_structure_home_core_customized_offers_card_see_more: {
            bind: 'app-info-structure-home-customized-offers-gl-card-see-more-navigate',
            link: {
              page: 'contractProductSection'
            }
          },
          global_enable_menu_swipe: {
            bind: 'app-info-structure-experiences-section-gl-experiences-section-close-change',
            'forward-to-native': true
          },
          app_info_structure_home_core_tab_change: {
            bind: 'app-info-structure-home-core-gl-tab-change'
          },
          app_info_structure_home_core_show_loader: {
            bind: 'show-loader'
          },
          app_info_structure_home_core_hide_loader: {
            bind: 'hide-loader'
          },
          app_info_structure_home_core_init_collections_load: {
            bind: 'app-info-structure-home-core-gl-all-collections-load'
          },
          app_info_structure_home_core_experiences_section_see_all_click: {
            bind: 'app-info-structure-experiences-section-gl-see-all-click',
            analytics: analyticsFuturaDashboard.pageViewExperiencesAll
          },
          business_intelligence_futura_see_all_commerces: {
            bind: 'app-info-structure-home-dashboard-gl-business-see-all-commerce-click'
          },
          app_info_structure_home_core_get_status_discreet_mode: {
            bind: 'app-info-structure-home-core-gl-get-status-discreet-mode'
          },
          app_info_structure_home_core_discreet_mode_status: {
            bind: 'app-info-structure-home-core-gl-discreet-mode-status'
          },
          global_discreet_mode_open_discover_modal: {
            bind: 'app-info-structure-home-core-gl-discreet-mode-camera-toast-link-click'
          },
          app_pageview_cards: {
            bind: 'app-info-structure-home-customized-offers-gl-items-load'
          },
          app_info_structure_home_customized_offers_item_click: {
            bind: 'app-info-structure-home-customized-offers-gl-item-click'
          },
          app_info_structure_home_next_best_actions_item_click: {
            bind: 'app-info-structure-home-next-best-action-gl-item-click'
          },
          global_state_collection_change: {
            bind: 'app-info-structure-home-main-card-gl-item-click'
          },
          app_info_structure_home_core_discreet_mode_click: {
            bind: 'app-info-structure-home-core-gl-discreet-mode-click',
            analytics: analyticsFuturaDashboard.internalLinkDiscreetModeToggle
          },
          app_info_structure_home_core_collection_close: {
            bind: 'app-info-structure-home-core-gl-collection-close'
          },
          tips_finance_profiling_entrypoint_analytic: {
            bind: 'app-info-structure-home-core-gl-item-click'
          }
        }
      }
    }
  };
};

const analyticsFuturaHome = () => {
  return {
    zone: 'futuraDashboard',
    type: 'DM',
    tag: 'bbva-analyticmanager-home-core',
    familyPath: '@glomo-web-components/bbva-analyticmanager-app-info-and-structure',
    render: 'litElement',
    properties: {
      campaignCodeMap: getCampaignsCode(),
      campaignAnalyticsMap: getCampaignAnalytics(),
      fulfillmentModelMap: analyticsFuturaDashboard.fulfillmentModelMap,
      primaryCategoryMap: analyticsFuturaDashboard.primaryCategoryMap,
      productSubtypeMap: analyticsFuturaDashboard.productSubtypeMap,
      productNameMap: analyticsFuturaDashboard.productNameMap,
      typologyMap: analyticsFuturaDashboard.typologyMap,
      cellsConnections: {
        in: {
          app_info_structure_home_core_tab_change: {
            bind: 'detectTabSelected'
          },
          app_info_structure_home_core_item_click: {
            bind: 'navigateToOperative'
          },
          futura_analytics_app_page_view: {
            bind: 'collectCustomerExperiences'
          },
          app_info_structure_home_customized_offers_item_click: {
            bind: 'getOffersClickData'
          },
          app_info_structure_home_next_best_actions_item_click: {
            bind: 'getOffersClickData'
          },
          app_info_structure_home_core_items_load: {
            bind: 'loadFootprintsProducts'
          },
          app_info_structure_home_next_best_actions_items_load: {
            bind: 'loadFootprintsNbaProducts'
          },
          global_financial_overview_details: {
            bind: 'setFinancialOverviewData'
          },
          global_storage_get_contractIdEncryptedStored_success: {
            bind: 'setContractIdEncrypted'
          },
          global_storage_get_contractIdEncryptedStored_error: {
            bind: 'setContractIdEncrypted'
          },
          futura_dashboard_collection_contracts_encrypt_feature_flag: {
            bind: 'setPrivateEncrypt'
          },
          global_technicalcore_operations_filter_send_delfos_filter_response: {
            bind: 'collectionDataHandler'
          }
        },
        out: {
          app_pageview_outstanding: {
            bind: 'app-pageview-outstanding'
          },
          app_pageview_products: {
            bind: 'app-pageview-products',
            analytics: analyticsFuturaDashboard.pageViewProducts
          },
          app_onclick_transfers_international: {
            bind: 'app-info-structure-home-core-transfer-international-ss-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.smartServicing, LITERALS.commons.globalPositionSmartMaintenance, LITERALS.sections.internationalTransfers, LITERALS.operative.transferInternational, LITERALS.commons.account, LITERALS.commons.smartMaintenance)
          },
          app_onclick_transfers: {
            bind: 'app-info-structure-home-core-transfers-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.transfer, LITERALS.commons.global_position, LITERALS.operative.transfers, LITERALS.commons.transfers, LITERALS.commons.account)
          },
          app_on_click_credit_card_holder: {
            bind: 'app-info-structure-home-core-oc-credit-card-holder-click',
            analytics: analyticsFuturaDashboard.getOnClickStartCreditCard('dataQuery', 'creditCardHolder', 'posicion global')
          },
          app_onclick_nbo: {
            bind: 'app-info-structure-home-core-next-best-offer-click',
            analytics: analyticsFuturaDashboard.getOnClickStartOffers('dataQuery', 'cardsOnDemand', 'me interesa posicion global nbo')
          },
          app_onclick_nba: {
            bind: 'app-info-structure-home-core-next-best-actions-click',
            analytics: analyticsFuturaDashboard.getOnClickStartOffers('dataQuery', 'cardsOnDemand', 'me interesa posicion global nba')
          },
          app_onclick_internationals_transfers: {
            bind: 'app-info-structure-home-core-internationalTransfers-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.internationalTransfers, LITERALS.commons.goToInternationalTransfers, LITERALS.sections.internationalTransfers, LITERALS.operative.transferInternational, LITERALS.commons.account)
          },
          app_onclick_cardless_withdrawal: {
            bind: 'app-info-structure-home-core-cardlessWithdrawal-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.cardlessWithdrawal, 'consulta retiro sin tarjeta posicion global acciones habituales', LITERALS.operative.cardlessWithdrawal, LITERALS.commons.withdrawalWithoutCard, LITERALS.commons.account)
          },
          app_onclick_billPayments: {
            bind: 'app-info-structure-home-core-billPayments-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.billPayments, 'pago de impuestos posicion global acciones habituales', 'taxes payment', 'pagar impuestos', LITERALS.commons.account)
          },
          app_onclick_rechargeTag: {
            bind: 'app-info-structure-home-core-rechargeTag-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.rechargeTag, 'recarga tag posicion global acciones habituales', LITERALS.tag.tagReload, LITERALS.operative.rechargeTag, LITERALS.commons.account)
          },
          app_onclick_cardCreditCardPayment: {
            bind: 'app-info-structure-home-core-cardCreditCardPayment-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.creditCardPayment, LITERALS.commons.card_detail, LITERALS.operative.creditCardPayments, LITERALS.commons.payCard, LITERALS.commons.account)
          },
          app_onclick_mobileTopUp: {
            bind: 'app-info-structure-home-core-mobileTopUp-click',
            analytics: operationalAnalytics.get_onclick_start(LITERALS.featureFlag.mobileTopUp, LITERALS.commons.global_position, LITERALS.globalApplication.mobileTopUp, LITERALS.applicationName.mobileTopUp, LITERALS.commons.account)
          },
          app_pageview_campaigns_outstanding_nba: {
            bind: 'app-info-structure-home-core-pageview-campaigns-nba',
            analytics: analyticsFuturaDashboard.pageViewCampaignsOutstanding
          },
          app_pageview_campaigns_outstanding: {
            bind: 'app-info-structure-home-core-pageview-campaigns-outstanding',
            analytics: analyticsFuturaDashboard.pageViewCampaignsOutstanding
          },
          global_analytics_optimization_node_response_products: {
            bind: 'app-info-structure-home-core-analytics-products'
          },
          global_analytics_optimization_contracts_to_encrypt: {
            bind: 'app-info-structure-home-core-analytics-contracts-to-encrypt'
          }
        }
      }
    }
  };
};

const routerFuturaHome = () => {
  return {
    zone: 'futuraDashboard',
    type: 'DM',
    tag: 'bbva-technicalcore-global-feature-id-router-mx',
    familyPath: '@glomo-web-components/bbva-technicalcore-global-feature-id-router-mx',
    render: 'litElement',
    properties: {
      dictionaryStandInOperatives: dictionaryFlagsStandInOperatives,
      productDefault: 'N/A',
      flagReplacementGl: true,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'appSettings'
          },
          app_info_structure_home_core_collection_navigate: {
            bind: 'navigationData'
          },
          app_info_structure_home_core_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          futura_collections_home_always_on_feature_flag: {
            bind: 'standInMode'
          }
        },
        out: {
          navigation_from_futura_dashboard: {
            bind: 'bbva-technicalcore-global-feature-id-router-mx-navigate',
            link: {
              page: {
                bind: 'pageToNavigate'
              },
              params: {
                smartServicingId: 'smartServicingId',
                contractId: 'contractId',
                contactNumber: 'contactNumber',
                currency: 'currency',
                amount: 'amount',
                concept: 'concept',
                receiverNumber: 'receiverNumber',
                receiverFullName: 'receiverFullName',
                receiverBankId: 'receiverBankId',
                receiverContractType: 'receiverContractType',
                receiverBankName: 'receiverBankName',
                reference: 'reference',
                selectedWhen: 'selectedWhen',
                receiverEditable: 'receiverEditable',
                relevantFactId: 'relevantFactId',
                offerId: 'offerId',
                continue: 'continue',
                productId: 'productId',
                operation: 'operation',
                products: 'products',
                messageId: 'messageId'
              }
            }
          },
          navigation_from_futura_dashboard_pfm: {
            bind: 'bbva-technicalcore-global-feature-id-router-mx-navigate-pfm'
          },
          navigation_from_futura_dashboard_zero_party_data: {
            bind: 'bbva-technicalcore-global-feature-id-router-mx-navigate-zero-party-data'
          }
        }
      }
    }
  };
};

module.exports = {
  featureHomeFutura: appInfoEstructureHomeCore,
  routerFuturaHome: routerFuturaHome,
  analyticsFuturaHome: analyticsFuturaHome
};
