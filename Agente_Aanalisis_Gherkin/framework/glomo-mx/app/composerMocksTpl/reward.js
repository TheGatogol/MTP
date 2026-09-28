'use strict';
module.exports = config => {
  const pageName = 'reward';
  const localStorageApp = require('./common/_local-storage');
  const utils = require('./common/helpers/_utils');
  const {
    getLanguage,
    glomoOpenDocument,
    getRewardsFormatDay,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  const analytics = require('./analytics/_reward.js')(config);
  const storesMapAnalytics = require('./analytics/_storesMap')(config);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { categories, categoriesV1, suggestions, suggestionsV1, promotions } },
    native = false,
    nativeIos = false,
    phoneNumberBbvaLine,
    aemHost,
    defaultGeoLocation,
    rewards: { onboarding: { url: aemOnboardingPath }, landing: { faqs: { url: aemLandingFaqsPath } }, pointsRedeemPurchaseOptions: { faqs: { url: aemPointsRedeemPurchaseOptionsFaqsPath } } }
  } = config;
  const pdfConfig = {
    mimeType: 'application/pdf',
    headerColor: 'FFFFFFFF',
    tintColor: 'FF072146',
    canShare: true,
    titleColor: 'FF072146',
    blackStatusBar: false
  };
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const base = {
    hash: 'mx-reward',
    currentPage: {
      url: '/reward'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        headerHeight: headerHeightMinimum,
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            reward_reset_scroll_page: {
              bind: 'resetLayerScroll'
            }
          }
        }
      }
    },

    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'rewards-landing-mx',
        familyPath: '@glomo-web-components/rewards-landing-mx',
        render: 'litElement',
        propertiesSpherica: {
          host,
          native,
          requiredToken,
          language: getLanguage(),
          iOSFixedHeader: nativeIos,
          pageName,
          dateFormat: getRewardsFormatDay(),
          purchaseOptionsEnabled: true,
          onboardingEnabled: true,
          disableCallBbvaLink: true,
          pdfDocumentConfig: pdfConfig,
          aemHost,
          aemOnboardingPath,
          aemLandingFaqsPath,
          aemPointsRedeemPurchaseOptionsFaqsPath,
          showHelpFaqs: true,
          faqsEnabled: true,
          modalInfoContent: [
            { modal: 'zeroPoints',
              headerText: 'rewards-landing-zero-points-info-modal-header-text',
              items: [
                { type: 'bullet', text: 'rewards-landing-zero-points-info-modal-bullet-one'},
                { type: 'bullet', text: 'rewards-landing-zero-points-info-modal-bullet-two'},
                { type: 'bullet', text: 'rewards-landing-zero-points-info-modal-bullet-three'},
                { type: 'bullet', text: 'rewards-landing-zero-points-info-modal-bullet-four'}
              ] }
          ],
          cellsConnections: {
            in: {
              blue_navigate_promotions_tab_selected: {
                bind: 'selectedTabBlue'
              },
              reward_hide_points_tab: {
                bind: 'hidePointsTab'
              },
              reward_init_page: {
                bind: 'init'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_avoid_reset: {
                bind: 'avoidReset'
              },
              dashboard_cache_cards: {
                bind: 'cards'
              },
              global_financial_overview_details: {
                bind: 'financialOverview'
              },
              financial_overview_refresh: {
                bind: 'flagPointsBalancesOutdated'
              },
              reward_get_back_from_rewards: {
                bind: 'navigateBack'
              },
              reward_navigate_to_rewards_promotions: {
                bind: 'selectedTab'
              },
              global_set_app_settings: {
                bind: 'setDataFromAppSettings'
              },
              reward_send_empty_cards: {
                bind: 'fullSize'
              },
              rewards_landing_open_pdf_document: {
                bind: 'openPdfDocument'
              },
              global_open_document_url_success: {
                bind: 'closeSpinner'
              },
              global_open_document_url_error: {
                bind: 'closeSpinner'
              },
              global_open_document_url: {
                bind: 'showSpinner'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              global_storage_get_rewards_onboarding_showed_success: {
                bind: 'rewardsOnboardingShowedSuccess'
              },
              global_storage_get_rewards_onboarding_showed_error: {
                bind: 'rewardsOnboardingShowedError'
              },
              rewards_landing_cancel_services_response: {
                bind: 'cancelServicesResponse'
              }
            },
            out: {
              reward_go_back_to_previous_page: {
                bind: 'navigation-go-back',
                backStep: true
              },
              rewards_landing_cancel_services_response: {
                bind: 'rewards-landing-cancel-services-response'
              },
              reward_offer_banner_clicked: {
                bind: 'rewards-landing-offer-link-click'
              },
              global_action_launcher_dialer: {
                bind: 'rewards-landing-click-call-bbva-link'
              },
              rewards_landing_navigate_to_points_raffle: {
                bind: 'rewards-landing-purchase-raffle-click'
              },
              rewards_landing_navigate_to_points_transfer: {
                bind: 'rewards-landing-purchase-pointstransfer-click',
                link: {
                  page: 'rewardOriginCardPage'
                }
              },
              rewards_landing_navigate_to_stores_map: {
                bind: 'rewards-landing-purchase-storesmap-click',
                analytics: storesMapAnalytics.INTERNAL_LINK,
                link: {
                  page: 'storesMap'
                }
              },
              rewards_landing_navigate_to_promotions: {
                bind: 'rewards-landing-nativebbva-button-click',
                'forward-to-native': true
              },
              reward_promotions_init_data: {
                bind: 'rewards-landing-promotions-data-init'
              },
              reward_rewards_landing_tab_change_visibility: {
                bind: 'rewards-landing-tab-visibility-change'
              },
              reward_allow_reset_promotions: {
                bind: 'rewards-landing-allow-reset-promotions-enable'
              },
              reward_send_tab_id: {
                bind: 'tab-default-tab-click'
              },
              reward_landing_points_balances_api_success: {
                bind: 'rewards-landing-points-balance-success'
              },
              reward_landing_movements_update: {
                bind: 'rewards-landing-movements-update'
              },
              reward_points_balances_api_error: {
                bind: 'rewards-landing-balances-service-error'
              },
              rewards_landing_open_pdf_document: {
                bind: 'rewards-landing-page-not-redeemable-click-terms'
              },
              global_open_document_url: {
                bind: 'rewards-landing-pdf-documents-open'
              },
              reward_analytics_rewards_tab_change_promotions: {
                bind: 'rewards-landing-not-promotions',
                analytics: analytics.rewardsTabPromotions
              },
              reward_analytics_accumulated_points_page_view: {
                bind: 'rewards-landing-points-help-link-click',
                analytics: analytics.rewardsAccumulatedPointsLoadPageView
              },
              reward_analytics_max_calls_error_page_view: {
                bind: 'rewards-landing-points-service-max-calls-error',
                analytics: analytics.rewardsMaxCallsErrorLoadPageView
              },
              reward_analytics_purchase_options_view: {
                bind: 'rewards-landing-redemption-options-view',
                analytics: analytics.rewardsPurchaseOptionsPageView
              },
              reward_analytics_crea_card_info_modal: {
                bind: 'rewards-landing-terms-and-conditions-view',
                analytics: analytics.termAndConditionsCreaCardPageView
              },
              reward_cards_loaded: {
                bind: 'rewards-landing-cards-load'
              },
              global_set_in_storage: {
                bind: 'rewards-landing-native-local-storage-set'
              },
              global_get_from_storage: {
                bind: 'rewards-landing-native-local-storage-get'
              },
              reward_analytics_modal_close: {
                bind: 'rewards-landing-modal-cancel',
                analytics: analytics.rewardsPointsPageView
              },
              reward_modal_close: {
                bind: 'rewards-landing-modal-cancel'
              },
              reward_modal_open: {
                bind: 'rewards-landing-go-to-faqs-click'
              },
              reward_analytics_close_purchase_options: {
                bind: 'rewards-landing-page-status'
              },
              reward_rewards_landing_press_tab_promotions: {
                bind: 'rewards-landing-launch-tab-promotions-change'
              },
              reward_customer_not_registered_error: {
                bind: 'rewards-landing-customer-not-registered-error'
              }
            }
          }
        },
        properties: {
          host,
          native,
          requiredToken,
          language: getLanguage(),
          showButtonDefault: true,
          assistancePhone: phoneNumberBbvaLine,
          iOSFixedHeader: nativeIos,
          externalPromotionsType: '',
          pageName,
          formatDate: getRewardsFormatDay(),
          hasPurchaseOptions: true,
          disableCallBbvaLink: true,
          showOnboarding: true,
          pointsLessHeight: true,
          pdfDocumentUrl: 'https://www.bbva.mx/content/dam/public-web/mexico/documents/2-oct/personas/tarjetas/promociones-tdc/anexo_de_beneficios_bbva_mx.pdf',
          detailDownloadConfig: pdfConfig,
          aemHost,
          aemOnboardingPath,
          aemLandingFaqsPath,
          aemPurchaseFaqsPath: aemPointsRedeemPurchaseOptionsFaqsPath,
          showHelpFaqs: true,
          modalInfoContent: [
            { modal: 'zeroPoints',
              headerText: 'rewards-landing-how-to-get-points-modal-header-text',
              buttonText: 'rewards-landing-how-to-get-points-modal-button-text',
              panelTitle: 'rewards-landing-how-to-get-points-modal-text',
              items: [
                { type: 'text', text: 'rewards-landing-how-to-get-points-modal-description'},
                { type: 'bullet', text: 'rewards-landing-how-to-get-points-modal-bullet-one'},
                { type: 'bullet', text: 'rewards-landing-how-to-get-points-modal-bullet-two'},
                { type: 'bullet', text: 'rewards-landing-how-to-get-points-modal-bullet-three'},
                { type: 'bullet', text: 'rewards-landing-how-to-get-points-modal-bullet-four'}
              ] },
            { modal: 'travel', items: [
              { type: 'bullet',  text: 'rewards-landing-travel-purchases-info-bullet-one' },
              { type: 'bullet', text: 'rewards-landing-travel-purchases-info-bullet-two' },
              { type: 'bullet',  text: 'rewards-landing-travel-purchases-info-bullet-three' },
              { type: 'text', text: 'rewards-landing-travel-purchases-infol-extra-text' }
            ] },
            { modal: 'purchaseOptions', items: [
              { type: 'bullet',  text: 'rewards-landing-points-redeem-purchases-info-bullet-one' },
              { type: 'bullet', text: 'rewards-landing-points-redeem-purchases-info-bullet-two' },
              { type: 'bullet',  text: 'rewards-landing-points-redeem-purchases-info-bullet-three' }
            ] }
          ],
          cellsConnections: {
            in: {
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_hide_points_tab: {
                bind: 'hidePointsTab'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_avoid_reset: {
                bind: 'avoidReset'
              },
              dashboard_cache_cards: {
                bind: 'cardsData'
              },
              global_financial_overview_details: {
                bind: 'financialOverviewData'
              },
              financial_overview_refresh: {
                bind: 'canUpdateContent'
              },
              reward_init_page: {
                bind: 'updateContent'
              },
              reward_get_back_from_rewards: {
                bind: 'navigateBack'
              },
              global_set_app_settings: {
                bind: 'getDataFromAppSettings'
              },
              reward_send_empty_cards: {
                bind: 'fullSize'
              },
              reward_change_full_size: {
                bind: 'fullSize'
              },
              rewards_landing_open_pdf_document: {
                bind: 'openPdfDocument'
              },
              global_open_document_url_success: {
                bind: 'closeSpinner'
              },
              global_open_document_url_error: {
                bind: 'closeSpinner'
              },
              global_open_document_url: {
                bind: 'showSpinner'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              global_storage_get_rewards_onboarding_showed_success: {
                bind: 'rewardsOnboardingShowedSuccess'
              },
              global_storage_get_rewards_onboarding_showed_error: {
                bind: 'rewardsOnboardingShowedError'
              },
              reward_navigate_to_rewards_promotions: {
                bind: 'tabSelected'
              }
            },
            out: {
              reward_header_main_icon_left_clicked: {
                bind: 'header-main-icon-left-primary-click',
                backStep: true
              },
              reward_go_back_to_previous_page: {
                bind: 'rewards-landing-go-back-to-previous-page',
                backStep: true
              },
              reward_offer_banner_clicked: {
                bind: 'rewards-landing-offer-link-click'
              },
              global_action_launcher_dialer: {
                bind: 'rewards-landing-click-call-bbva-link'
              },
              rewards_landing_navigate_to_points_raffle: {
                bind: 'rewards-landing-purchase-raffle-click'
              },
              rewards_landing_navigate_to_points_transfer: {
                bind: 'rewards-landing-purchase-pointstransfer-click',
                link: {
                  page: 'rewardOriginCardPage'
                }
              },
              rewards_landing_navigate_to_stores_map: {
                bind: 'rewards-landing-purchase-storesmap-click',
                analytics: storesMapAnalytics.INTERNAL_LINK,
                link: {
                  page: 'storesMap'
                }
              },
              rewards_landing_navigate_to_promotions: {
                bind: 'rewards-landing-nativebbva-button-click',
                'forward-to-native': true
              },
              reward_promotions_init_data: {
                bind: 'rewards-landing-init-promotions-data'
              },
              reward_rewards_landing_tab_change_visibility: {
                bind: 'rewards-landing-tab-change-visibility'
              },
              reward_allow_reset_promotions: {
                bind: 'rewards-landing-allow-reset-promotions'
              },
              reward_send_tab_id: {
                bind: 'tab-default-tab-click'
              },
              reward_landing_points_balances_api_success: {
                bind: 'rewards-landing-points-balance-success'
              },
              reward_landing_movements_update: {
                bind: 'rewards-landing-movements-update'
              },
              reward_points_balances_api_error: {
                bind: 'rewards-landing-balances-error-service'
              },
              rewards_landing_open_pdf_document: {
                bind: 'rewards-landing-page-not-redeemable-click-terms'
              },
              global_open_document_url: {
                bind: 'rewards-landing-open-pdf-documents'
              },
              reward_analytics_rewards_tab_change_promotions: {
                bind: 'rewards-landing-not-promotions',
                analytics: analytics.rewardsTabPromotions
              },
              reward_analytics_accumulated_points_page_view: {
                bind: 'rewards-landing-points-help-link-click',
                analytics: analytics.rewardsAccumulatedPointsLoadPageView
              },
              reward_analytics_max_calls_error_page_view: {
                bind: 'rewards-landing-service-error-max-calls-points',
                analytics: analytics.rewardsMaxCallsErrorLoadPageView
              },
              reward_analytics_purchase_options_view: {
                bind: 'rewards-landing-redemption-options-view',
                analytics: analytics.rewardsPurchaseOptionsPageView
              },
              reward_analytics_crea_card_info_modal: {
                bind: 'rewards-landing-terms-and-conditions-view',
                analytics: analytics.termAndConditionsCreaCardPageView
              },
              reward_cards_loaded: {
                bind: 'rewards-landing-cards'
              },
              global_set_in_storage: {
                bind: 'rewards-set-native-local-storage'
              },
              global_get_from_storage: {
                bind: 'rewards-get-native-local-storage'
              },
              reward_analytics_modal_close: {
                bind: 'rewards-landing-modal-cancel',
                analytics: analytics.rewardsPointsPageView
              },
              reward_modal_close: {
                bind: 'rewards-landing-modal-cancel'
              },
              reward_modal_open: {
                bind: 'rewards-landing-click-go-to-faqs'
              },
              reward_analytics_close_purchase_options: {
                bind: 'rewards-landing-page-status'
              },
              reward_rewards_landing_press_tab_promotions: {
                bind: 'rewards-landing-launch-tab-change-promotions'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'rewards-promotions-mx',
        familyPath: '@glomo-web-components/rewards-promotions-mx',
        render: 'litElement',
        propertiesSpherica: {
          host,
          native,
          categoriesApiVersion: categoriesV1,
          promotionsApiVersion: promotions,
          suggestionsApiVersion: suggestionsV1,
          country: 'mx',
          locale: 'mx',
          requiredToken,
          language: getLanguage(),
          showButtonDefault: true,
          iOSFixedHeader: nativeIos,
          parallelRequests: true,
          pageName,
          dateFormat: getRewardsFormatDay(),
          loadStandaloneContent: false,
          showPromotionsByType: true,
          showPromotionsByFeature: true,
          showPromotionsByCategory: true,
          showSearchPromotions: true,
          showCardsForPromotion: true,
          showSearchByLocation: true,
          showSearchByPromotionType: true,
          showStoresForPromotion: true,
          showStoreInformation: true,
          enabledFilterPromotionsByProductId: true,
          defaultGeoLocation,
          detailDownloadConfig: pdfConfig,
          enabledSearchSuggestions: true,
          hideHeaderIconsLabels: true,
          fieldToSearch: 'commerceInformation.name',
          promotionsTypeId: [
            {promotionTypeTitle: 'MESES SIN INTERESES', id: 'POST_PAYMENT'},
            {promotionTypeTitle: 'PUNTOS', id: 'LOYALTY_POINTS'},
            {promotionTypeTitle: 'DESCUENTOS', id: 'RATE,FIXED,GIFT,CASHBACK,OTHER'}
          ],
          topPosition: '6.875rem',
          hidden: true,
          pageSize: 10,
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'setDataFromAppSettings'
              },
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              reward_position_available: {
                bind: 'getGeolocationSuccess'
              },
              reward_position_error: {
                bind: 'getGeolocationError'
              },
              reward_check_location_state_error: {
                bind: 'getGeolocationError'
              },
              reward_check_location_permissions_plugin_not_installed: {
                bind: 'getGeolocationError'
              },
              reward_promotions_init_data: {
                bind: 'promotionsConfig'
              },
              global_financial_overview_details: {
                bind: 'contracts'
              },
              reward_rewards_landing_tab_change_visibility: {
                bind: 'hidden'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              global_rewards_points_redeem_purchases_is_points_offers_error: {
                bind: 'isPointsOffersError'
              },
              global_rewards_points_redeem_purchases_send_offers: {
                bind: 'setCurrentOffers'
              },
              reward_get_back_from_promotions: {
                bind: 'navigateBack'
              },
              reward_offer_banner_clicked: {
                bind: 'avoidResetPage'
              },
              reward_allow_reset_promotions: {
                bind: 'allowResetPage'
              },
              global_open_document_url_success: {
                bind: 'clearLoader'
              },
              global_open_document_url_error: {
                bind: 'clearLoader'
              },
              global_open_document_url: {
                bind: 'showLoader'
              },
              global_storage_get_promotions_historical_search_success: {
                bind: 'promotionsHistoricalSearch'
              },
              global_storage_get_promotions_historical_search_error: {
                bind: 'rewardsHistoricalSearchFromStorageError'
              },
              reward_check_location_state_success: {
                bind: 'locationPermissionState'
              },
              reward_gps_state: {
                bind: 'locationServiceState'
              },
              reward_rewards_landing_press_tab_promotions: {
                bind: 'dispatchPromotionUserInfo'
              },
              reward_go_back_promotion_detail: {
                bind: 'dispatchPromotionUserInfo'
              },
              reward_close_promotion_search: {
                bind: 'dispatchPromotionUserInfo'
              },
              reward_prevent_promotions_flow: {
                bind: 'preventPromotionsFlow'
              },
              navigation_from_futura_dashboard: {
                bind: 'navigationFromNBP'
              },
              reward_rewards_landing_tab_change_visibility_nbp: {
                bind: 'hidden'
              },
              rewards_landing_tab_back_leave_nbp: {
                bind: 'backNavigationFromNBP'
              },
              blue_searchWith_filters_promotions: {
                bind: 'blueSearchWithFilters'
              }
            },
            out: {
              global_action_launcher_dialer: {
                bind: 'rewards-promotions-mx-phone-call-click'
              },
              reward_go_back_to_previous_page: {
                bind: 'rewards-promotions-mx-navigation-go-back',
                backStep: true
              },
              global_action_launcher_uri: {
                bind: 'rewards-promotions-mx-external-uri-launch'
              },
              reward_get_current_position: {
                bind: 'rewards-promotions-mx-current-location-get'
              },
              reward_get_location_permission: {
                bind: 'rewards-promotions-mx-location-permission-granted-check'
              },
              reward_persist_user_info: {
                bind: 'rewards-promotions-mx-persist-promotions-user-info-send',
                analytics: analytics._getAdvancedFootprint('promotionsLandingView', 'promotions')
              },
              reward_select_promotion_from_hot_carrousel: {
                bind: 'rewards-promotions-mx-promotion-from-hot-carrousel-select',
                analytics: analytics.promotionsLandingPromotionClick
              },
              reward_select_promotion_from_carrousel: {
                bind: 'rewards-promotions-mx-promotion-from-carrousel-select',
                analytics: analytics.promotionsLandingPromotionClick
              },
              reward_view_more_promotions: {
                bind: 'rewards-promotions-mx-view-more-promotions-click',
                analytics: analytics.promotionsLandingViewMore
              },
              reward_trigger_empty_categories: {
                bind: 'rewards-promotions-mx-category-link-card-click',
                analytics: analytics.promotionsLandingViewMore
              },
              reward_navigate_to_promotion_detail: {
                bind: 'rewards-promotions-mx-promotion-detail-page-view',
                analytics: analytics._getAdvancedFootprint('promotionsPromotionDetailSpherica', 'promotions')
              },
              reward_activate_promotion_click: {
                bind: 'rewards-promotions-mx-activate-promotion-click',
                analytics: analytics.rewardsPromotionsDetailActivatePromotionClick
              },
              reward_promotions_notification_message_error: {
                bind: 'rewards-promotions-mx-notification-message-error-call-last-view',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsLandingViewError', 'promotionsErrorsLanding')
              },
              reward_promotion_detail_last_error: {
                bind: 'rewards-promotions-mx-promotion-detail-last-error-view',
                analytics: analytics._getAdvancedFootprint('promotionsPromotionDetailError', 'promotionsErrorsDetail')
              },
              global_open_document_url: {
                bind: 'rewards-promotions-mx-pdf-documents-open',
                'forward-to-native': true
              },
              global_action_launcher_maps: {
                bind: 'rewards-promotions-mx-stores-map-route-show'
              },
              global_set_in_storage: {
                bind: 'rewards-promotions-mx-native-local-storage-set'
              },
              global_get_from_storage: {
                bind: 'rewards-promotions-mx-native-local-storage-get'
              },
              reward_analytics_choose_categories_link_click: {
                bind: 'rewards-promotions-mx-choose-categories-link-click',
                analytics: analytics.rewardsChooseCategoriesLinkClickInternalLink
              },
              reward_analytics_open_favorite_categories_modal: {
                bind: 'rewards-promotions-mx-favorite-categories-modal-open',
                analytics: analytics._getAdvancedFootprint('rewardsOpenFavoriteCategoriesModalPageView', 'promotions')
              },
              reward_analytics_favorite_categories_results: {
                bind: 'rewards-promotions-mx-favorite-categories-modal-results-view',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsFavoriteCategoriesResultsPageView', 'promotions')
              },
              reward_analytics_favorite_categories_error_modal: {
                bind: 'rewards-promotions-mx-favorite-categories-last-error-modal-view',
                analytics: analytics._getAdvancedFootprint('rewardsFavoritesCategoriesErrorModalPageView', 'promotionsErrorsFavorites')
              },
              reward_analytics_rewards_promotions_modal_search_opened: {
                bind: 'rewards-promotions-mx-modal-search-open',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsModalSearchOpenedPageView', 'promotions')
              },
              reward_analytics_rewards_promotions_modal_search_result: {
                bind: 'rewards-promotions-mx-modal-search-result-view',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsSearchResultsPageView', 'promotions')
              },
              reward_analytics_rewards_promotions_modal_search_error: {
                bind: 'rewards-promotions-mx-modal-search-last-error-view',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsSearchResultsError', 'promotionsErrorsSearch')
              },
              reward_go_back_promotion_detail: {
                bind: 'rewards-promotions-mx-to-previous-page-go-back'
              },
              reward_close_promotion_search: {
                bind: 'rewards-promotions-mx-modal-search-close'
              },
              reward_analytics_rewards_promotions_without_promotions: {
                bind: 'rewards-promotions-mx-not-promotions',
                analytics: analytics._getAdvancedFootprint('promotionsWithoutPromotions', 'promotions')
              },
              rewards_promotions_detail_navigate_to_rewards_promotions_invitation_enrollment: {
                bind: 'rewards-promotions-mx-promotion-activate-request',
                link: {
                  page: 'rewardsPromotionsInvitationEnrollment',
                  params: {
                    offerId: 'offerId',
                    campaignId: 'campaignId',
                    categoryId: 'categoryId',
                    period: 'period'
                  }
                }
              },
              reward_rewards_landing_tab_change_visibility_nbp: {
                bind: 'rewards-promotions-mx-change-nbp-visibility'
              },
              rewards_landing_tab_back_leave_nbp: {
                bind: 'transition-container-header-back-icon-click'
              },
              reward_landing_back_navigation_to_dashboard: {
                bind: 'rewards-promotions-mx-nbp-back-to-dashboard-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'reward'
                }
              }
            }
          }
        },
        properties: {
          host,
          native,
          categoriesApiVersion: categories,
          promotionsApiVersion: promotions,
          suggestionsApiVersion: suggestions,
          country: 'mx',
          locale: 'mx',
          requiredToken,
          maxRequestAttempts: 4,
          language: getLanguage(),
          showButtonDefault: true,
          iOSFixedHeader: nativeIos,
          assistancePhone: phoneNumberBbvaLine,
          parallelRequests: true,
          pageName,
          dateFormat: utils.getRewardsFormatDay(),
          loadStandaloneContent: false,
          showPromotionsByType: true,
          showPromotionsByFeature: true,
          showPromotionsByCategory: true,
          showSearchPromotions: true,
          showCardsForPromotion: true,
          showSearchByLocation: true,
          showSearchByPromotionType: true,
          showStoresForPromotion: true,
          showStoreInformation: true,
          enabledFilterPromotionsByProductId: true,
          defaultGeoLocation,
          detailDownloadConfig: pdfConfig,
          enabledSearchSuggestions: true,
          hideHeaderIconsLabels: true,
          fieldToSearch: 'commerceInformation.name',
          promotionsTypeId: [
            {promotionTypeTitle: 'MESES SIN INTERESES', id: 'POST_PAYMENT'},
            {promotionTypeTitle: 'PUNTOS', id: 'LOYALTY_POINTS'},
            {promotionTypeTitle: 'DESCUENTOS', id: 'RATE,FIXED,GIFT,CASHBACK,OTHER'}
          ],
          topPosition: '6.875rem',
          hidden: true,
          pageSize: 10,
          cellsConnections: {
            in: {
              global_storage_get_mobile_services_success: {
                bind: 'mobileServices'
              },
              reward_position_available: {
                bind: 'getGeolocationSuccess'
              },
              reward_position_error: {
                bind: 'getGeolocationError'
              },
              reward_check_location_state_error: {
                bind: 'getGeolocationError'
              },
              reward_check_location_permissions_plugin_not_installed: {
                bind: 'getGeolocationError'
              },
              reward_promotions_init_data: {
                bind: 'promotionsConfig'
              },
              global_financial_overview_details: {
                bind: 'contracts'
              },
              reward_rewards_landing_tab_change_visibility: {
                bind: 'hidden'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              global_rewards_points_redeem_purchases_is_points_offers_error: {
                bind: 'isPointsOffersError'
              },
              global_rewards_points_redeem_purchases_send_offers: {
                bind: 'setCurrentOffers'
              },
              reward_get_back_from_promotions: {
                bind: 'navigateBack'
              },
              reward_header_main_icon_right_clicked: {
                bind: 'navigateBack'
              },
              reward_offer_banner_clicked: {
                bind: 'avoidResetPage'
              },
              reward_allow_reset_promotions: {
                bind: 'allowResetPage'
              },
              global_open_document_url_success: {
                bind: 'clearLoader'
              },
              global_open_document_url_error: {
                bind: 'clearLoader'
              },
              global_open_document_url: {
                bind: 'showLoader'
              },
              global_storage_get_promotions_historical_search_success: {
                bind: 'promotionsHistoricalSearch'
              },
              global_storage_get_promotions_historical_search_error: {
                bind: 'rewardsHistoricalSearchFromStorageError'
              },
              reward_check_location_state_success: {
                bind: 'locationPermissionState'
              },
              reward_gps_state: {
                bind: 'locationServiceState'
              },
              reward_rewards_landing_press_tab_promotions: {
                bind: 'dispatchPromotionUserInfo'
              },
              reward_go_back_promotion_detail: {
                bind: 'dispatchPromotionUserInfo'
              },
              reward_close_promotion_search: {
                bind: 'dispatchPromotionUserInfo'
              },
              reward_prevent_promotions_flow: {
                bind: 'preventPromotionsFlow'
              }
            },
            out: {
              global_action_launcher_dialer: {
                bind: 'rewards-promotions-mx-click-call-bbva-link'
              },
              reward_go_back_to_previous_page: {
                bind: 'rewards-promotions-mx-back-step',
                backStep: true
              },
              global_action_launcher_uri: {
                bind: 'rewards-promotions-mx-launch-external-uri'
              },
              reward_get_current_position: {
                bind: 'rewards-promotions-mx-get-current-location'
              },
              reward_get_location_permission: {
                bind: 'rewards-promotions-mx-check-location-permission-granted'
              },
              reward_persist_user_info: {
                bind: 'rewards-promotions-mx-persist-promotions-user-info',
                analytics: analytics._getAdvancedFootprint('promotionsLandingView', 'promotions')
              },
              reward_select_promotion_from_hot_carrousel: {
                bind: 'rewards-promotions-mx-select-promotion-from-hot-carrousel',
                analytics: analytics.promotionsLandingPromotionClick
              },
              reward_select_promotion_from_carrousel: {
                bind: 'rewards-promotions-mx-select-promotion-from-carrousel',
                analytics: analytics.promotionsLandingPromotionClick
              },
              reward_view_more_promotions: {
                bind: 'rewards-promotion-list-button-view-more-promotions',
                analytics: analytics.promotionsLandingViewMore
              },
              reward_trigger_empty_categories: {
                bind: 'rewards-promotions-mx-category-link-card-click',
                analytics: analytics.promotionsLandingViewMore
              },
              reward_navigate_to_promotion_detail: {
                bind: 'rewards-promotions-mx-promotion-detail-page-view',
                analytics: analytics._getAdvancedFootprint('promotionsPromotionDetail', 'promotions')
              },
              reward_activate_promotion_click: {
                bind: 'rewards-promotions-mx-activate-promotion-click',
                analytics: analytics.rewardsPromotionsDetailActivatePromotionClick
              },
              reward_promotions_notification_message_error: {
                bind: 'rewards-promotions-mx-notification-message-error-call-last',
                analytics: analytics.promotionsLandingViewError
              },
              reward_promotion_detail_last_error: {
                bind: 'rewards-promotions-mx-promotion-detail-last-error',
                analytics: analytics._getAdvancedFootprint('promotionsPromotionDetailError', 'promotionsErrorsDetail')
              },
              global_open_document_url: {
                bind: 'rewards-promotions-mx-open-pdf-documents',
                'forward-to-native': true
              },
              global_action_launcher_maps: {
                bind: 'rewards-promotions-mx-show-stores-map-route'
              },
              global_set_in_storage: {
                bind: 'rewards-promotions-mx-set-native-local-storage'
              },
              global_get_from_storage: {
                bind: 'rewards-promotions-mx-get-native-local-storage'
              },
              reward_analytics_choose_categories_link_click: {
                bind: 'rewards-promotions-mx-choose-categories-link-click',
                analytics: analytics.rewardsChooseCategoriesLinkClickInternalLink
              },
              reward_analytics_open_favorite_categories_modal: {
                bind: 'rewards-promotions-mx-open-favorite-categories-modal',
                analytics: analytics._getAdvancedFootprint('rewardsOpenFavoriteCategoriesModalPageView', 'promotions')
              },
              reward_analytics_favorite_categories_results: {
                bind: 'rewards-promotions-mx-favorite-categories-modal-results-view',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsFavoriteCategoriesResultsPageView', 'promotions')
              },
              reward_analytics_favorite_categories_error_modal: {
                bind: 'rewards-promotions-mx-favorite-categories-error-modal',
                analytics: analytics._getAdvancedFootprint('rewardsFavoritesCategoriesErrorModalPageView', 'promotionsErrorsFavorites')
              },
              reward_analytics_rewards_promotions_modal_search_opened: {
                bind: 'rewards-promotions-mx-modal-search-opened',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsModalSearchOpenedPageView', 'promotions')
              },
              reward_analytics_rewards_promotions_modal_search_result: {
                bind: 'rewards-promotions-mx-modal-search-result',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsSearchResultsPageView', 'promotions')
              },
              reward_analytics_rewards_promotions_modal_search_error: {
                bind: 'rewards-promotions-mx-modal-search-error',
                analytics: analytics._getAdvancedFootprint('rewardsPromotionsSearchResultsError', 'promotionsErrorsSearch')
              },
              reward_go_back_promotion_detail: {
                bind: 'rewards-promotions-mx-go-back-to-previous-page'
              },
              reward_close_promotion_search: {
                bind: 'rewards-promotions-mx-modal-search-closed'
              },
              reward_analytics_rewards_promotions_without_promotions: {
                bind: 'rewards-promotions-mx-not-promotions',
                analytics: analytics._getAdvancedFootprint('promotionsWithoutPromotions', 'promotions')
              },
              rewards_promotions_detail_navigate_to_rewards_promotions_invitation_enrollment: {
                bind: 'rewards-promotions-mx-promotion-activate-request',
                link: {
                  page: 'rewardsPromotionsInvitationEnrollment',
                  params: {
                    offerId: 'offerId',
                    campaignId: 'campaignId',
                    categoryId: 'categoryId',
                    period: 'period'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-aggregation-simple-list',
        tagSpherica: 'bbva-aggregation-simple-list-spherica',
        familyPath: '@glomo-web-components/bbva-aggregation-simple-list',
        familyPathSpherica: '@glomo-web-components/bbva-aggregation-simple-list-spherica',
        render: 'litElement',
        properties: {
          variant: 'error',
          message: 'cells-rewards-message-error',
          className: 'u-margin--grid',
          showHeaderText: false,
          clipBox: true,
          hidden: true,
          cellsConnections: {
            in: {
              rewardreset_activate_filtered_points: {
                bind: 'activeExpandable'
              },
              reward_points_to_beat_parse_filtered_points: {
                bind: 'config'
              },
              reward_activate_expandable_reward: {
                bind: 'activeExpandable'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              'reward_points_row-title': {
                bind: 'rowTitle'
              },
              'reward_set_link-title': {
                bind: 'linkTitle'
              },
              reward_send_empty_cards: {
                bind: 'hidden'
              },
              reward_points_balances_api_error: {
                bind: 'hidden'
              },
              reward_toggle_points_simple_list_visible: {
                bind: 'hidden'
              }
            },
            out: {
              reward_open_expandable_reward: {
                bind: 'expandable-accordion-open-change'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-aggregation-card-list',
        tagSpherica: 'bbva-aggregation-card-list-spherica',
        familyPath: '@glomo-web-components/bbva-aggregation-card-list',
        familyPathSpherica: '@glomo-web-components/bbva-aggregation-card-list-spherica',
        render: 'litElement',
        properties: {
          loading: true,
          iosDevices: nativeIos,
          cellsConnections: {
            in: {
              reward_send_parse_cards: {
                bind: 'itemsList'
              },
              reward_points_movemements_loaded: {
                bind: 'loading'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_send_empty_cards: {
                bind: 'hidden'
              },
              reward_points_balances_api_error: {
                bind: 'hidden'
              },
              reward_send_one_valid_credit_card: {
                bind: 'hidden'
              },
              reward_send_error_rewards: {
                bind: 'errorRewards'
              },
              reward_send_max_error_rewards: {
                bind: 'errorMaxRewards'
              },
              reward_rewards_request_get_rewards: {
                bind: 'loading'
              }
            },
            out: {
              reward_rewards_service_error_retry: {
                bind: 'bbva-aggregation-list-service-error-click'
              },
              reward_aggregation_item_click: {
                bind: 'bbva-aggregation-list-item-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'rewards-loyalty-points-transactions',
        familyPath: '@bbva-web-components-widgets/rewards-loyalty-points-transactions',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          language: getLanguage(),
          hidden: true,
          headerCategoryHelpModalDescriptionParagraphTexts: [
            {
              type: 'text', text: 'rewards-loyalty-points-transactions-help-paragraph-one'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-help-list-bullet-one'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-help-list-bullet-two'
            }
          ],
          emptyPeriodHelpModalDescriptionParagraphTexts: [
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-one'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-two'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-three'
            },
            {
              type: 'bullet', text: 'rewards-loyalty-points-transactions-empty-help-list-bullet-four'
            }
          ],
          cellsConnections: {
            in: {
              reward_send_card_id: {
                bind: 'setCardData'
              },
              reward_send_rewards_content: {
                bind: 'openPeriodRewardaData'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_avoid_reset: {
                bind: 'avoidReset'
              },
              rewards_landing_navigate_to_points_raffle: {
                bind: 'avoidReset'
              },
              reward_toggle_loyalty_points_visible: {
                bind: 'hidden'
              },
              reward_send_empty_cards: {
                bind: 'hidden'
              },
              reward_points_balances_api_error: {
                bind: 'hidden'
              },
              reward_rewards_error: {
                bind: 'setCardData'
              },
              native_back_button_clicked_close_modal: {
                bind: 'closeModal'
              },
              rewards_landing_navigate_to_stores_map: {
                bind: 'avoidReset'
              }
            },
            out: {
              reward_reset_scroll_page: {
                bind: 'rewards-loyalty-points-transactions-movements-tab-click'
              },
              cells_to_native_modal_closed: {
                bind: 'rewards-loyalty-points-transactions-modal-close',
                'forward-to-native': true
              },
              cells_to_native_modal_opened: {
                bind: 'rewards-loyalty-points-transactions-modal-open',
                'forward-to-native': true
              },
              reward_click_loyalty_reward_tab: {
                bind: 'rewards-loyalty-points-transactions-rewards-tab-click',
                analytics: analytics.analyticsInternalLinkRewardsLoyaltyPointsTab
              },
              reward_max_attempts_rewards_period_error: {
                bind: 'rewards-loyalty-points-transactions-max-attempts-getrewards-load',
                analytics: analytics.rewardsLoyaltyPointsErrorLoad
              }
            }
          }
        },
        propertiesSpherica: {
          host,
          native,
          requiredToken,
          language: getLanguage(),
          hidden: true,
          cellsConnections: {
            in: {
              reward_send_card_id: {
                bind: 'setCardData'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_toggle_loyalty_points_visible: {
                bind: 'hidden'
              },
              reward_send_empty_cards: {
                bind: 'hidden'
              },
              reward_points_balances_api_error: {
                bind: 'hidden'
              },
              reward_rewards_error: {
                bind: 'setCardData'
              }
            },
            out: {
              reward_reset_scroll_page: {
                bind: 'rewards-loyalty-points-transactions-movements-tab-click'
              },
              cells_to_native_modal_closed: {
                bind: 'rewards-loyalty-points-transactions-modal-help-info-close',
                'forward-to-native': true
              },
              cells_to_native_modal_opened: {
                bind: 'rewards-loyalty-points-transactions-modal-help-info-open',
                'forward-to-native': true
              },
              reward_click_loyalty_reward_tab: {
                bind: 'rewards-loyalty-points-transactions-rewards-tab-click',
                analytics: analytics.analyticsInternalLinkRewardsLoyaltyPointsTab
              },
              reward_max_attempts_rewards_period_error: {
                bind: 'rewards-loyalty-points-transactions-max-attempts-get-rewards-load',
                analytics: analytics.rewardsLoyaltyPointsErrorLoad
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-rewards-landing',
        familyPath: '@glomo-web-components/bbva-manager-rewards-landing',
        render: 'litElement',
        properties: {
          host,
          native,
          pageName,
          requiredToken,
          language: getLanguage(),
          cellsConnections: {
            in: {
              __bridge_page_reward: {
                bind: 'handlePageAttachment'
              },
              global_financial_overview_details: {
                bind: 'getCreditCardsFromFO'
              },
              reward_init_page: {
                bind: 'checkIfGetRewards'
              },
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_landing_points_balances_api_success: {
                bind: 'setBalancesLoaded'
              },
              reward_landing_movements_update: {
                bind: 'setBalancesLoaded'
              },
              reward_rewards_service_error_retry: {
                bind: 'retryRequestGetReward'
              },
              reward_send_tab_id: {
                bind: 'handleVisibility'
              },
              reward_points_balances_api_error: {
                bind: 'setBalancesError'
              },
              global_native_menu_item_clicked_analytics: {
                bind: 'menuItemClickedAnalytic'
              },
              reward_aggregation_item_click: {
                bind: 'navigateToFilteredPoints'
              },
              reward_cards_loaded: {
                bind: 'getCreditCardsFromGC'
              },
              reward_analytics_close_purchase_options: {
                bind: 'checkClosePurchaseOptions'
              },
              filtered_points_header_main_icon_left_clicked: {
                bind: 'manageClickFromFilteredPoints'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'navigateBackFromAndroid'
              },
              reward_modal_close: {
                bind: 'rewardsModalClosed'
              },
              reward_modal_open: {
                bind: 'rewardsModalShowed'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              rewards_promotions_invitation_enrollment_navigation_go_back: {
                bind: 'navegateToRewardsPromotions'
              },
              rewards_promotions_invitation_enrollment_navigation_go_back_from_receipt: {
                bind: 'navegateToRewardsPromotions'
              },
              blue_navigate_promotions_tab_content_visibility_setted: {
                bind: 'handleVisibility'
              }
            },
            out: {
              reward_hide_points_tab: {
                bind: 'bbva-manager-rewards-hide-points-tab'
              },
              reward_init_page: {
                bind: 'bbva-manager-rewards-landing-page-attach'
              },
              global_storage_check_mobile_services: {
                bind: 'bbva-manager-rewards-landing-page-attach'
              },
              reward_send_parse_cards: {
                bind: 'bbva-manager-rewards-landing-send-parse-cards'
              },
              reward_navigate_to_rewards_promotions: {
                bind: 'bbva-manager-rewards-landing-navigate-to-rewards-promotions'
              },
              reward_send_raw_cards: {
                bind: 'bbva-manager-rewards-landing-send-raw-cards'
              },
              reward_points_movemements_loaded: {
                bind: 'bbva-manager-rewards-points-movemements-loaded'
              },
              reward_send_empty_cards: {
                bind: 'bbva-manager-rewards-landing-send-empty-cards'
              },
              reward_send_one_valid_credit_card: {
                bind: 'bbva-manager-rewards-landing-send-one-valid-credit-card'
              },
              reward_send_error_rewards: {
                bind: 'bbva-manager-rewards-points-movemements-error'
              },
              reward_send_max_error_rewards: {
                bind: 'bbva-manager-rewards-points-movemements-max-error'
              },
              reward_analytics_max_calls_error_list_card_view: {
                bind: 'bbva-manager-rewards-points-movemements-max-error',
                analytics: analytics.rewardsMaxCallsErrorListCardPageView
              },
              reward_analytics_points_and_detail_points_loaded: {
                bind: 'bbva-manager-rewards-product-type',
                analytics: analytics.rewardsPointsPageView
              },
              reward_analytics_menu_item_click: {
                bind: 'bbva-manager-rewards-landing-menu-click',
                analytics: analytics.rewardsMenuClick
              },
              reward_hide_list_card_items: {
                bind: 'bbva-manager-rewards-hide-list-card-items'
              },
              reward_change_full_size: {
                bind: 'bbva-manager-rewards-landing-change-full-size-rewards-landing'
              },
              reward_send_card_id: {
                bind: 'bbva-manager-rewards-landing-card-id'
              },
              reward_send_rewards_content: {
                bind: 'bbva-manager-rewards-landing-rewards-data'
              },
              reward_toggle_loyalty_points_visible: {
                bind: 'bbva-manager-rewards-landing-toggle-loyalty-points-visible'
              },
              reward_toggle_points_simple_list_visible: {
                bind: 'bbva-manager-rewards-landing-toggle-points-simple-list-visible'
              },
              reward_rewards_error: {
                bind: 'bbva-manager-rewards-landing-error-rewards'
              },
              reward_rewards_request_get_rewards: {
                bind: 'bbva-manager-rewards-request-get-rewards'
              },
              reward_avoid_reset: {
                bind: 'bbva-manager-rewards-avoid-reset'
              },
              reward_card_list_item_click: {
                bind: 'bbva-manager-rewards-navigate-to-filtered-points',
                link: {
                  page: 'filteredPoints'
                }
              },
              reward_analytics_purchase_options_closed: {
                bind: 'bbva-manager-rewards-close-purchase-options',
                analytics: analytics.rewardsPointsPageView
              },
              reward_analytics_click_from_filtered_points: {
                bind: 'bbva-manager-rewards-manage-click-from-filtered-points',
                analytics: analytics.rewardsPointsPageView
              },
              reward_get_back_from_rewards: {
                bind: 'bbva-manager-rewards-landing-navigate-back-rewards'
              },
              reward_get_back_from_promotions: {
                bind: 'bbva-manager-rewards-landing-navigate-back-promotions'
              },
              reward_prevent_promotions_flow: {
                bind: 'bbva-manager-rewards-prevent-promotions-flow'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-loyalty-points-transactions',
        familyPath: '@glomo-web-components/bbva-manager-loyalty-points-transactions',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              reward_header_main_icon_left_clicked: {
                bind: 'reset'
              },
              reward_go_back_to_previous_page: {
                bind: 'reset'
              },
              reward_send_raw_cards: {
                bind: 'rawDataCardsRewards'
              },
              reward_send_parse_cards: {
                bind: 'cardsDataList'
              },
              reward_landing_points_balances_api_success: {
                bind: 'setBalance'
              },
              reward_landing_movements_update: {
                bind: 'setBalance'
              },
              rewards_landing_navigate_to_points_raffle: {
                bind: 'initRaffle'
              },
              reward_points_detail_post_response: {
                bind: 'postPointsRaffleResponse'
              },
              reward_points_detail_post_error: {
                bind: 'postPointsRaffleError'
              },
              global_login_success_indicators: {
                bind: 'getCurrentCustomer'
              },
              reward_retry_redemption_simulate_request: {
                bind: 'retryRequestPostRedemptionSimulateService'
              },
              reward_help_modal_footer_link_click: {
                bind: 'setRetrieNumber'
              },
              reward_help_modal_header_button: {
                bind: 'setRetrieNumber'
              },
              reward_open_expandable_reward: {
                bind: 'expandableAccordionOpen'
              }
            },
            out: {
              rewardreset_activate_filtered_points: {
                bind: 'reset-bbva-loyalty-transaction-activate-expandable-reward'
              },
              reward_activate_expandable_reward: {
                bind: 'bbva-loyalty-transaction-activate-expandable-reward'
              },
              reward_points_to_beat_parse_filtered_points: {
                bind: 'bbva-loyalty-transaction-points-to-beat-parse-filtered-points'
              },
              'reward_points_row-title': {
                bind: 'set-detail-points-row-title'
              },
              'reward_set_link-title': {
                bind: 'set-detail-link-error'
              },
              rewards_landing_navigate_to_points_raffle_multi_product: {
                bind: 'send-flag-multi-product-raffle',
                link: {
                  page: 'rewardOriginCardPage'
                }
              },
              global_reward_detail_redemption_selected_card: {
                bind: 'rewards-raffle-points-selected-card'
              },
              global_reward_analytics_set_product_name: {
                bind: 'rewards-raffle-points-selected-card'
              },
              global_reward_detail_redemption_product_id: {
                bind: 'send-product-id'
              },
              reward_redemption_simulate_request: {
                bind: 'post-redemption-simulate-request'
              },
              global_send_points_raffle_detail_response: {
                bind: 'send-points-raffle-detail-response'
              },
              global_navigation_reward_to_points_raffle_detail: {
                bind: 'navigation-from-reward-to-points-raffle-detail',
                link: {
                  page: 'pointsRaffle'
                }
              },
              reward_error_panel_config_text: {
                bind: 'redemption-simulate-error-text-panel-info'
              },
              'reward_rewards-operative-raffle-open-modal': {
                bind: 'raffle-open-modal-error'
              },
              'reward_hidden-link': {
                bind: 'bbva-loyalty-transaction-hidden-link'
              },
              reward_send_button_name: {
                bind: 'bbva-loyalty-transaction-send-button-name'
              },
              reward_close_modal_error: {
                bind: 'bbva-loyalty-transaction-button-close'
              },
              global_alert_manager_open_with_settings: {
                bind: 'redemption-simulate-error'
              },
              global_reward_detail_redemption_simulate_error_zero_points: {
                bind: 'redemption-simulate-error-zero-points'
              },
              global_reward_detail_redemption_simulate_error_insufficient_points: {
                bind: 'redemption-simulate-error-insufficient-points'
              },
              reward_analytic_expandable_open: {
                bind: 'expandable-accordion-open-analytics',
                analytics: analytics.analyticsExpandableClickReward
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-dm-global-apis-loyalty',
        type: 'CC',
        properties: {
          host,
          path: 'loyalty/v0/rewards',
          native,
          cellsConnections: {
            in: {
              reward_redemption_simulate_request: {
                bind: 'postRedemptionSimulate'
              }
            },
            out: {
              reward_points_detail_post_response: {
                bind: 'success-on-post-redemption-simulate'
              },
              reward_points_detail_post_error: {
                bind: 'error-on-post-redemption-simulate'
              }
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
          id: 'helpModal',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal',
          iconRightPrimary: '',
          closeModalElements: ['footer-link', 'header-left-primary'],
          iconLeftPrimary: 'bbva:return',
          headerText: 'glomo-transfer-points-cards-list-name-rafle',
          cellsConnections: {
            in: {
              'reward_rewards-operative-raffle-open-modal': {
                bind: 'open'
              },
              'reward_hidden-link': {
                bind: 'linkText'
              },
              reward_send_button_name: {
                bind: 'buttonText'
              },
              reward_close_modal_error: {
                bind: 'closeModalElements'
              }
            },
            out: {
              reward_retry_redemption_simulate_request: {
                bind: 'help-modal-footer-button-click'
              },
              reward_help_modal_footer_link_click: {
                bind: 'help-modal-footer-link-click'
              },
              reward_help_modal_header_button: {
                bind: 'help-modal-header-left-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'helpModal.slot-content',
        type: 'UI',
        tag: 'bbva-panel-info',
        tagSpherica: 'bbva-panel-info-spherica',
        familyPath: '@bbva-web-components/bbva-panel-info',
        familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
        render: 'litElement',
        properties: {
          disabledTabindex: '',
          headingLevelTitle: 'h3',
          microillustration: 'error',
          heading: 'glomo-profit-points-error-inactive-raffle-offer-modal-title',
          className: 'alert-message --bbva-panel-info-microillustration-width',
          cellsConnections: {
            in: {
              reward_error_panel_config_text: {
                bind: 'text'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-reward-manager',
        familyPath: '@glomo-web-components/glomo-analytics-reward-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_reward_analytics_set_product_name: {
                bind: 'setProductName'
              },
              global_navigation_reward_to_points_raffle_detail: {
                bind: 'fireOpenRaffle'
              },
              reward_points_detail_post_error: {
                bind: 'fireErrorSimulateRedemptionService'
              },
              global_reward_detail_redemption_simulate_error_zero_points: {
                bind: 'fireOpenRafflePointsZero'
              },
              global_reward_detail_redemption_simulate_error_insufficient_points: {
                bind: 'fireOpenRafflePointsInsufficient'
              }
            },
            out: {
              reward_fire_open_raffle: {
                bind: 'analytics-open-raffle',
                analytics: analytics.openRaffleInternalLink
              },
              reward_fire_open_error_simulate_raffle: {
                bind: 'analytics-open-raffle-internal-link-error-service',
                analytics: analytics.openRaffleInternalLinkErrorSimulate
              },
              reward_fire_open_raffle_not_yet_points: {
                bind: 'analytics-open-raffle-internal-link-not-yet-points',
                analytics: analytics.openRaffleInternalLinkNotYetPoints
              },
              reward_fire_open_raffle_not_enough_points: {
                bind: 'analytics-open-raffle-internal-link-not-enough-points',
                analytics: analytics.openRaffleInternalLinkNotEnoughPoints
              }
            }
          }
        }
      }
    ]
  };

  if (native) {
    base.components.push(
      glomoOpenDocument(config),
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-permissions-plugin',
        properties: {
          cellsConnections: {
            in: {
              reward_get_location_permission: {
                bind: 'checkState'
              }
            },
            out: {
              reward_check_location_state_success: {
                bind: 'permissions-check-state-success'
              },
              reward_check_location_state_error: {
                bind: 'permissions-check-state-error'
              },
              reward_check_location_permissions_plugin_not_installed: {
                bind: 'error-permissions-plugin-not-installed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-geolocation',
        properties: {
          cellsConnections: {
            in: {
              reward_get_current_position: {
                bind: 'getCurrentPosition'
              },
              reward_get_location_permission: {
                bind: 'isLocationServiceEnabled'
              }
            },
            out: {
              reward_position_available: {
                bind: 'current-position-available'
              },
              reward_position_error: {
                bind: 'error'
              },
              reward_gps_state: {
                bind: 'location-service-enabled-success'
              }
            }
          }
        }
      }
    );
  }

  localStorageApp.addOutStorageChannels(base.components, ['mobile_services',
    'rewards_onboarding_showed',
    'promotions_historical_search',
    'discreet_mode'
  ], config);
  errorAndSignWidgetConnector(config)(base)('rewards-promotions-mx', {
    widgetId: pageName,
    cancelAfterErrorFunction: 'clearAndBack',
    addRetryErrorsFlag: true,
    retryConfig: {
      hidden: true
    },
    callConfig: {
      hidden: true
    }
  }, true);

  return sphericaPageUtils.spherize(base);
};
