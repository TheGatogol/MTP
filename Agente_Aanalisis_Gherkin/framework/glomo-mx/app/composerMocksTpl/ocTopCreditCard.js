/* eslint-disable camelcase, new-cap, no-shadow */
'use strict';
module.exports = CONFIG => {
  const { globalServices: { host, requiredToken = 'tsec'}, native = false } = CONFIG;
  const UTILS = require('./common/helpers/_utils');
  const PAGE = require('./common/_pages');
  const PAGE_NAME = 'ocTopCreditCard';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const TOP_CREDIT_CARD = PAGE(CONFIG)(PAGE_NAME);
  const SPINNER = UTILS.SPINNER(CONFIG);
  const LANGUAGE = UTILS.getLanguage(CONFIG);
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const Glomo_Open_Document = UTILS.glomoOpenDocument(CONFIG);
  const detailDownloadParams = UTILS.detailDownloadParams;
  const ANALYTICS = require('./analytics/_ocTopCreditCard')(CONFIG);
  const { useNames, createPrefixFromPageName, headerHeightMinimum } = UTILS;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const localStorage = require('./common/_local-storage');
  const TEMPLATE = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      iOSFixedHeader: isNativeIos,
      className: isNativeIos ? 'ios-top-padding dark-blue-bg' : 'dark-blue-bg',
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true
    },
    propertiesSpherica: {
      extraHeaderClass: '',
      className: isNativeIos ? 'ios-top-padding' : '',
      headerHeight: headerHeightMinimum
    }
  };
  const LIFE_CYCLE = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      private: true,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          },
          [getChannelName('_close_operative')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('_init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('_reset_page')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const FEATURE = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-top-credit-card-mx',
    tagSpherica: 'bbva-feature-top-credit-card-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-top-credit-card-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-top-credit-card-mx-spherica',
    render: 'litElement',
    properties: {
      showHelpFaqs: true,
      carouselContentFragmentPath:
        'content/caas/mexico/glomo/ilc-credit-card-upgrade/onboarding.model.json',
      faqsContentFragmentPath:
        'content/caas/mexico/glomo/credit-card-upgrade/faqs.model.json',
      contentFragmentHost: CONFIG.aemHost,
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      iOSFixedHeader: isNativeIos,
      pdfDownloadParams: detailDownloadParams,
      pageName: PAGE_NAME,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          profile_contract_documents_get_list_dossiers_success: {
            bind: 'getAddressStatus'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlag'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          },
          global_storage_get_card_upgrade_error: {
            bind: 'getLocalStorageErrorResponse'
          },
          global_storage_get_card_upgrade_success: {
            bind: 'getLocalStorageSuccessResponse'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_open_document_url_success: {
            bind: 'manageOpenDocumentResult'
          },
          global_open_document_url_error: {
            bind: 'manageOpenDocumentResult'
          },
          global_glomo_signature_open_modal_error: {
            bind: 'resetSignSpinners'
          },
          global_glomo_signature_open_modal_error_spherica: {
            bind: 'resetSignSpinners'
          },
          cells_to_native_modal_closed: {
            bind: 'closeSpinner'
          },
          global_dashboard_cards: {
            bind: 'cards'
          },
          dashboard_financial_overview: {
            bind: 'financialData'
          },
          sign_modal_cancelled: {
            bind: 'closeSpinner'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'navigationDeepLink'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'cards-upgrade-get-native-local-storage'
          },
          global_set_in_storage: {
            bind: 'cards-upgrade-set-native-local-storage'
          },
          global_open_document_url: {
            bind: 'cards-upgrade-request-document'
          },
          [getChannelName('_close_operative')]: {
            bind: 'cards-upgrade-exit',
            backStep: true
          },
          [getChannelName('_cards_upgrade_faq_question_title')]: {
            bind: 'cards-upgrade-faq-question-title'
          },
          [getChannelName('_cards_upgrade_show_faqs')]: {
            bind: 'cards-upgrade-show-faqs'
          },
          [getChannelName('_cards_upgrade_post_offer_option_redeems_success')]: {
            bind: 'cards-upgrade-post-offer-option-redeems-success'
          },
          [getChannelName('_cards_upgrade_option_help_button_click')]: {
            bind: 'cards-upgrade-help-modal-opened'
          },
          [getChannelName('_cards_upgrade_info_help_modal_click')]: {
            bind: 'cards-upgrade-info-help-modal-click'
          },
          [getChannelName('_cards_upgrade_show_option_detail')]: {
            bind: 'cards-upgrade-analytics-show-option-detail'
          },
          [getChannelName('_cards_upgrade_option_selected')]: {
            bind: 'cards-upgrade-analytics-show-option-selected'
          },
          [getChannelName('_current_step_0_focus')]: {
            bind: 'current-step-0'
          },
          [getChannelName('_current_step_1_focus')]: {
            bind: 'current-step-1'
          },
          [getChannelName('_current_step_2_focus')]: {
            bind: 'current-step-2'
          },
          [getChannelName('_all_steps_completed')]: {
            bind: 'current-step-3'
          },
          [getChannelName('_cards_upgrade_send_data_otp')]: {
            bind: 'cards-upgrade-send-data-otp'
          },
          [getChannelName('_cards_upgrade_offer_data')]: {
            bind: 'cards-upgrade-analytics-send-offer-detail'
          },
          [getChannelName('_cards_upgrade_data_error_modal')]: {
            bind: 'cards-upgrade-data-error-modal'
          },
          [getChannelName('set_id_customers')]: {
            bind: 'cards-upgrade-set-customer-id'
          },
          [getChannelName('get_the_contracts')]: {
            bind: 'cards-upgrade-get-contracts'
          },
          [getChannelName('_manage_navigate_to_profile')]: {
            bind: 'navigate-to-my-profile',
            link: {
              page: 'profile',
              skipHistory: true
            }
          }
        },
        params: {
          offerId: 'offerId',
          user: 'global_user',
          customerId: 'global_user_id'
        }
      }
    }
  };
  const customers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('set_id_customers')]: {
            bind: 'customerId'
          },
          [getChannelName('get_the_contracts')]: {
            bind: 'getContractingDossiers'
          }
        },
        out: {
          profile_contract_documents_get_list_dossiers_success: {
            bind: 'customers-response-get-list-dossiers-success'
          }
        }
      }
    }
  };
  const ANALYTICS_DM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-feature-top-credit-card-mx',
    tagSpherica: 'bbva-analyticmanager-feature-top-credit-card-mx',
    familyPath: '@glomo-web-components/bbva-feature-top-credit-card-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-top-credit-card-mx-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('_reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('_cards_upgrade_offer_data')]: {
            bind: 'offerData'
          },
          [getChannelName('_current_step_0_focus')]: {
            bind: 'appPageVisit'
          },
          [getChannelName('_cards_upgrade_option_help_button_click')]: {
            bind: 'appStarted'
          },
          [getChannelName('_cards_upgrade_show_option_detail')]: {
            bind: 'appStarted'
          },
          [getChannelName('_cards_upgrade_option_selected')]: {
            bind: 'appStarted'
          },
          [getChannelName('_cards_upgrade_info_help_modal_click')]: {
            bind: 'fireAdvanceFootprint'
          },
          [getChannelName('_cards_upgrade_show_faqs')]: {
            bind: 'fireAdvanceFootprint'
          },
          [getChannelName('_current_step_1_focus')]: {
            bind: 'appStep'
          },
          [getChannelName('_current_step_2_focus')]: {
            bind: 'appStep'
          },
          [getChannelName('_all_steps_completed')]: {
            bind: 'appStep'
          },
          [getChannelName('_cards_upgrade_send_data_otp')]: {
            bind: 'appStep'
          },
          [getChannelName('_cards_upgrade_faq_question_title')]: {
            bind: 'fireInternalLink'
          },
          [getChannelName('_cards_upgrade_post_offer_option_redeems_success')]: {
            bind: 'fireAppCompleted'
          },
          [getChannelName('_cards_upgrade_data_error_modal')]: {
            bind: 'fireErrorPage'
          }
        },
        out: {
          [getChannelName('_analytics_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('_analytics_app_started')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('_analytics_app_step_2')]: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS.APP_STEP('2', 'domicilio')
          },
          [getChannelName('_analytics_app_step_3')]: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS.APP_STEP('3', 'terminos y condiciones')
          },
          [getChannelName('_analytics_app_step_4')]: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS.APP_STEP('4', 'confirmacion')
          },
          [getChannelName('_analytics_app_step_5')]: {
            bind: 'analytics-app-step-5',
            analytics: ANALYTICS.APP_STEP('5', 'otp')
          },
          [getChannelName('_analytics_advanced_footprint')]: {
            bind: 'analytics-advanced-footprint',
            analytics: ANALYTICS.ADVANCED_FOOTPRINT
          },
          [getChannelName('_analytics_internal_link')]: {
            bind: 'analytics-internal-link',
            analytics: ANALYTICS.INTERNAL_LINK
          },
          [getChannelName('_analytics_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [getChannelName('_analytics_advanced_footprint_error')]: {
            bind: 'analytics-advanced-footprint-error',
            analytics: ANALYTICS.ADVANCED_FOOTPRINT_ERROR
          }
        },
        params: {
          offerId: 'offerId',
          user: 'global_user',
          customerId: 'global_user_id'
        }
      }
    }
  };
  const BASE = {
    hash: 'oc-top-credit-card',
    currentPage: {
      url: '/oc-top-credit-card'
    },
    pages: TOP_CREDIT_CARD,
    template: TEMPLATE,
    components: [
      SPINNER,
      LIFE_CYCLE,
      FEATURE,
      customers,
      ANALYTICS_DM
    ]
  };
  if (CONFIG.native) {
    BASE.components.push(Glomo_Open_Document);
  }
  localStorage.addOutStorageChannels(BASE.components, [ 'card_upgrade' ], CONFIG);
  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(BASE);
  signConnector('bbva-feature-top-credit-card-mx');
  return sphericaPageUtils.spherize(BASE);
};
