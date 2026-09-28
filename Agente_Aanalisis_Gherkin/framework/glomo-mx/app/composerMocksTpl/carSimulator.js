'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false,
    nativeShell = false,
    aemHost
  } = CONFIG;
  const {
    createSpinner,
    APP_SIDEBAR: appSideBar,
    getLocalCurrency,
    getLanguage,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const pageName = 'carSimulator';
  const {
    _createOnClickStart,
    _createAdvancedFootprint,
    pageViewCustomizeExpenses,
    pageViewDetail,
    pageViewCarPromotions,
    pageViewPromotionDetail,
    pageViewCalculateConsent,
    pageViewTermsConditions,
    internalLink,
    interactionLink,
    errorModal
  } = require('./analytics/_carSimulator')(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      headerHeight: headerHeightMinimum,
      className: nativeIos ? 'ios-top-padding' : '',
      rightDrawer: true,
      disableEdgeSwipe: nativeShell,
      avoidToggleMenu: nativeShell,
      edgeSwipeSensitivity: 50,
      cellsConnections: {
        in: {
          global_open_native_menu: {
            bind: 'toggleMenu'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`
    }
  };
  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          car_simulator_init_page: {
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

  const carSimulatorAnalyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-sustainability-car-simulator',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sustainability',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          car_simulator_external_navigation: {
            bind: 'manageAnalyticsExternalNavigation'
          },
          car_simulator_data_fetch: {
            bind: 'dataView'
          },
          car_simulator_modal_state_changed: {
            bind: 'manageAnalyticsModalNavigation'
          },
          car_simulator_init_page: {
            bind: 'homeView'
          },
          car_simulator_page_view_customize_expenses: {
            bind: 'pageViewCustomizeExpenses'
          },
          car_simulator_page_view_detail: {
            bind: 'pageViewDetail'
          },
          car_simulator_reset_values_internal_link: {
            bind: 'interactionLink'
          },
          car_simulator_reset_values_interaction_link: {
            bind: 'internalLink'
          },
          car_simulator_carousel_home_promotions: {
            bind: 'pageViewPromotions'
          },
          car_simulator_page_view_promotions_detail: {
            bind: 'pageViewPromotionsDetail'
          },
          car_simulator_carousel_exclusive_promotions: {
            bind: 'pageViewExclusivePromotions'
          },
          car_simulator_exclusive_list_detail_navigate: {
            bind: 'pageViewExclusivePromotionDetail'
          },
          car_simulator_promotions_detail_terms_conditions: {
            bind: 'pageViewExclusivePromotionTermsConditions'
          },
          car_simulator_calculate_consent_modal: {
            bind: 'pageViewCalculateConsent'
          }

        },
        out: {
          car_simulator_analytics_home_view: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-home-view',
            analytics: _createAdvancedFootprint(true)
          },
          car_simulator_analytics_detail_view: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-detail-view',
            analytics: _createAdvancedFootprint(true, 'comparar gastos')
          },
          car_simulator_analytics_modal_calculation: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-modal-calculation',
            analytics: _createAdvancedFootprint(false, 'como hacemos los calculos')
          },
          car_simulator_analytics_navegate_preapproved_loan_from_home: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-navigate-preapproved-loan-offer-from-home',
            analytics: _createOnClickStart(false, 'prestamo vehicular', 'prestamo vehicular', 'sostenibilidad simulador auto detalle promo', true)
          },
          car_simulator_analytics_navegate_preapproved_loan_from_detail: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-navigate-preapproved-loan-offer-from-detail',
            analytics: _createOnClickStart('comparar gastos', 'prestamo vehicular', 'prestamo vehicular', 'sostenibilidad simulador auto detalle promo', false)
          },
          car_simulator_analytics_navegate_non_preapproved_loan_from_home: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-navigate-non-preapproved-loan-offer-from-home',
            analytics: _createOnClickStart(false, false, 'contratacion credito auto', 'sostenibilidad simulador auto detalle promo', true, 'analitycsFeatureFlagCarNonPreapproved')
          },
          car_simulator_analytics_navegate_non_preapproved_loan_from_detail: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-navigate-non-preapproved-loan-offer-from-detail',
            analytics: _createOnClickStart('comparar gastos', false, 'contratacion credito auto', 'sostenibilidad simulador auto detalle promo', false, 'analitycsFeatureFlagCarNonPreapproved')
          },
          car_simulator_analytics_page_view_customize_expenses: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-page-view-customize-expenses',
            analytics: pageViewCustomizeExpenses
          },
          car_simulator_analytics_page_view_detail: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-page-view-detail',
            analytics: pageViewDetail
          },
          car_simulator_analytics_interaction_link: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-interaction-link',
            analytics: interactionLink
          },
          car_simulator_analytics_internal_link: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-internal-link',
            analytics: internalLink
          },
          car_simulator_analytics_page_view_car_promotions: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-page-view-promotions',
            analytics: pageViewCarPromotions
          },
          car_simulator_analytics_page_view_promotions_detail: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-page-view-promotions-detail',
            analytics: pageViewPromotionDetail
          },
          car_simulator_calculate_page_view_consent_modal: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-page-view-calculate-consent',
            analytics: pageViewCalculateConsent
          },
          car_simulator_exclusive_promotion_terms_conditions: {
            bind: 'bbva-analyticmanager-sustainability-car-simulator-page-view-exclusive-promotion-terms-conditions',
            analytics: pageViewTermsConditions
          }
        }
      }
    }
  };

  const carSimulatorController = {
    zone: 'app__main',
    tag: 'bbva-controller-sustainable-car-simulator',
    familyPath: '@glomo-web-components/bbva-controller-sustainable-car-simulator',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'setCachedUser'
          },
          car_simulator_external_navigation: {
            bind: 'manageExternalNavigation'
          },
          car_simulator_back_navigation: {
            bind: 'manageBackNavigation'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          car_simulator_products_link_clicked: {
            bind: 'manageLoansNavigation'
          }
        },
        out: {
          car_simulator_set_cached_user: {
            bind: 'bbva-controller-sustainable-car-simulator-set-cached-user'
          },
          car_simulator_preapproved_loan_clicked: {
            bind: 'bbva-controller-sustainable-car-simulator-preapproved-loan-offer',
            link: {
              page: 'carLoan',
              params: {
                offerId: 'offerId'
              }
            }
          },
          car_simulator_non_preapproved_loan_clicked: {
            bind: 'bbva-controller-sustainable-car-simulator-non-preapproved-loan-offer',
            link: {
              page: 'nonPreApprovedCarCertificate'
            }
          },
          car_simulator_preapproved_and_non_preapproved_loan_clicked: {
            bind: 'bbva-controller-sustainable-car-simulator-preapproved-and-non-preapproved-loan-offer',
            link: {
              page: 'ocCarLoanOrigination',
              params: {
                offerId: 'offerId'
              }
            }
          },
          car_simulator_exit: {
            bind: 'bbva-controller-sustainable-car-simulator-exit-feature',
            backStep: true
          },
          car_simulator_set_features_flags: {
            bind: 'bbva-controller-sustainable-car-simulator-set-toggles-flags'
          }
        }
      }
    }
  };

  const sustainableCarSimulator = {
    zone: 'app__main',
    tag: 'sustainability-sustainable-car-simulator',
    familyPath: '@glomo-web-components/sustainability-sustainable-car-simulator-gl',
    type: 'UI',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      sustainabilityApiVersion: CONFIG.globalServices.versions.sustainability,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      aemHost,
      exclPromosAemPath: 'content/caas/mexico/app/sustainability/sustainability-exclusive-car-promotions.model.json',
      genPromosAemPath: 'content/caas/mexico/app/sustainability/sustainability-general-car-promotions.model.numcf-10.page-1.json',
      intlReturnEmptyIfMissing: true,
      imageUrl: './images/carSimulator/electricCar.svg',
      cellsConnections: {
        in: {
          car_simulator_set_features_flags: {
            bind: 'toggles'
          },
          car_simulator_set_cached_user: {
            bind: 'userName'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          },
          sustainability_on_simulator_request_success_car: {
            bind: 'externalSimulatorData'
          },
          sustainability_on_simulator_request_success_offers: {
            bind: 'externalOffersData'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'sustainability-sustainable-promotions-menu-click',
            'forward-to-native': true
          },
          car_simulator_back_navigation: {
            bind: 'navigation-go-back'
          },
          car_simulator_external_navigation: {
            bind: 'sustainability-sustainable-car-simulator-navigation-external'
          },
          car_simulator_error_view: {
            bind: 'sustainability-sustainable-car-simulator-error-not-available-retry',
            analytics: errorModal
          },
          car_simulator_modal_state_changed: {
            bind: 'modal-state-change'
          },
          car_simulator_data_fetch: {
            bind: 'sustainability-sustainable-car-simulator-data-fetch'
          },
          car_simulator_detail_view: {
            bind: 'car-simulator-detail-view'
          },
          car_simulator_page_view_customize_expenses: {
            bind: 'sustainability-sustainable-car-simulator-detail-link-icon-click'
          },
          car_simulator_page_view_detail: {
            bind: 'sustainability-sustainable-car-simulator-home-navigate-detail'
          },
          car_simulator_reset_values_internal_link: {
            bind: 'sustainability-sustainable-car-simulator-detail-reset-values-internal-link'
          },
          car_simulator_reset_values_interaction_link: {
            bind: 'sustainability-sustainable-car-simulator-detail-send-updated-data'
          },
          car_simulator_carousel_home_promotions: {
            bind: 'sustainability-sustainable-promotions-home-navigate-list'
          },
          car_simulator_page_view_promotions_detail: {
            bind: 'sustainability-sustainable-promotions-list-detail-navigate'
          },
          car_simulator_carousel_exclusive_promotions: {
            bind: 'sustainability-sustainable-promotions-list-navigate-exclusive-list'
          },
          car_simulator_exclusive_list_detail_navigate: {
            bind: 'sustainability-sustainable-promotions-exclusive-list-detail-navigate'
          },
          car_simulator_promotions_detail_terms_conditions: {
            bind: 'sustainability-sustainable-promotions-detail-terms-conditions'
          },
          car_simulator_calculate_consent_modal: {
            bind: 'sustainability-sustainable-car-simulator-home-open-consent-modal'
          },
          car_simulator_products_link_clicked: {
            bind: 'sustainability-sustainable-car-simulator-products-link-clicked'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mxCarSimulator',
    currentPage: {
      url: '/car-simulator'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      handleLifeCycle,
      sustainableCarSimulator,
      carSimulatorAnalyticsManager,
      carSimulatorController
    ]
  };

  if (!nativeShell) {
    base.components.push(appSideBar(CONFIG));
  }

  return sphericaPageUtils.spherize(base);
};
