'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { sustainability, customersV1, campaigns } },
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
    headerHeightMinimum,
    del: utilsDel
  } = require('./common/helpers/_utils');
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  const pageName = 'solarPanelsSimulator';
  const {
    createOnClickStart,
    createAdvancedFootprint,
    errorModal
  } = require('./analytics/_solarPanelsSimulator')(CONFIG);
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
          solar_panels_simulator_init_page: {
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

  const newLocal = 'analitycsFeatureFlagSolarPanelsPreferencePreapproved';
  const solarPanelsSimulatorAnalyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-sustainability-solar-panels-simulator',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sustainability',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          solar_panels_simulator_modal_state_changed: {
            bind: 'manageAnalyticsModalNavigation'
          },
          solar_panels_simulator_preference_preapproved_loan: {
            bind: 'manageAnalyticsExternalNavigation'
          },
          solar_panels_simulator_conventional_preapproved_loan: {
            bind: 'manageAnalyticsExternalNavigation'
          },
          solar_panels_simulator_non_preapproved_loan: {
            bind: 'manageAnalyticsExternalNavigation'
          },
          solar_panels_simulator_init_feature: {
            bind: 'visitPageView'
          }
        },
        out: {
          solar_panels_simulator_analytics_home_view: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-home-view',
            analytics: createAdvancedFootprint()
          },
          solar_panels_simulator_analytics_request_contact_view: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-request-contact-modal',
            analytics: createAdvancedFootprint('contactar con powen')
          },
          solar_panels_simulator_analytics_request_success_view: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-request-success-modal',
            analytics: createAdvancedFootprint('contactar con powen', 'exitoso')
          },
          solar_panels_simulator_analytics_modal_show_operation: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-show-operation-modal',
            analytics: createAdvancedFootprint('instalando paneles solares')
          },
          solar_panels_simulator_analytics_modal_partner_service: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-partner-services-modal',
            analytics: createAdvancedFootprint('servicios')
          },
          solar_panels_simulator_analytics_modal_error: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-error-modal',
            analytics: errorModal
          },
          solar_panels_simulator_analytics_navigate_preference_preapproved_loan: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-navigate-preference-preapproved',
            analytics: createOnClickStart('oc loan', 'sostenibilidad simulador paneles solares preferencial', 'preaprobado', 'analitycsFeatureFlagSolarPanelsPreapproved')
          },
          solar_panels_simulator_analytics_navigate_conventional_preapproved_loan: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-navigate-conventional-preapproved',
            analytics: createOnClickStart('oc loan', 'sostenibilidad simulador paneles solares convencional', 'preaprobado', 'analitycsFeatureFlagSolarPanelsPreapproved')
          },
          solar_panels_simulator_analytics_navigate_non_preapproved_loan: {
            bind: 'bbva-analyticmanager-sustainability-solar-panels-simulator-navigate-non-preapproved',
            analytics: createOnClickStart('preapproved loan', 'sostenibilidad simulador paneles solares no preaprobado', 'no preaprobado digital', 'analitycsFeatureFlagSolarPanelsNonPreapproved')
          }
        }
      }
    }
  };

  const solarPanelsSimulatorController = {
    zone: 'app__main',
    tag: 'bbva-controller-sustainable-solar-panels-simulator',
    familyPath: '@glomo-web-components/bbva-controller-sustainable-solar-panels-simulator',
    type: 'DM',
    render: 'litElement',
    properties: {
      native,
      cellsConnections: {
        in: {
          user_cached: {
            bind: 'setCachedUser'
          },
          solar_panels_simulator_preference_preapproved_loan: {
            bind: 'navigateToOfferLoanPage'
          },
          solar_panels_simulator_conventional_preapproved_loan: {
            bind: 'navigateToOfferLoanPage'
          },
          solar_panels_simulator_non_preapproved_loan: {
            bind: 'navigateToNonPreapprovedConsumerLoanPage'
          },
          solar_panels_simulator_products_navigation: {
            bind: 'manageLoansNavigation'
          },
          solar_panels_simulator_conditions_modal_external_navigation: {
            bind: 'openExternalUrl'
          },
          solar_panels_simulator_privacy_notice_link: {
            bind: 'openExternalUrl'
          },
          solar_panels_simulator_init_page: {
            bind: 'initFeature'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          }
        },
        out: {
          solar_panels_simulator_set_cached_user: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-set-cached-user'
          },
          solar_panels_simulator_loan_offer_page: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-navigate-to-loan-offer',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          solar_panels_simulator_preapproved_conventional_loan: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-pre-approved-conventional-loan',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          solar_panels_simulator_preapproved_preferential_loan: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-pre-approved-preferential-loan',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          solar_panels_simulator_non_preapproved_loan: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-non-pre-approved-loan',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          solar_panels_simulator_set_features_flags: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-set-toggles-flags'
          },
          global_action_launcher_uri: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-external-url-navigate'
          },
          solar_panels_simulator_init_feature: {
            bind: 'bbva-controller-sustainable-solar-panels-simulator-init-feature'
          }
        }
      }
    }
  };

  const sustainableSolarPanelsSimulator = {
    zone: 'app__main',
    tag: 'sustainability-sustainable-solar-panels-simulator',
    familyPath: '@glomo-web-components/sustainability-sustainable-solar-panels-simulator-gl',
    type: 'UI',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      contactPhone: CONFIG.phoneNumberContactPowen,
      sustainabilityApiVersion: sustainability,
      customerApiVersion: customersV1,
      campaingsOffersApiVersion: campaigns,
      aemHost,
      aemPath: '/global/glomo/sustainability/solar_panels/images/',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      isRequiredOTP: true,
      serviceCacheEnabled: true,
      termTypeId: 'EV-MX-AO-COTRDP-001',
      acceptanceMessages: 'EVCOTRDP01',
      linkPage: 'https://www.bbva.mx',
      boxClipIconEntity: 'entityPowenxxxxxxDark',
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          solar_panels_simulator_set_features_flags: {
            bind: 'toggles'
          },
          sustainability_set_cached_user: {
            bind: 'userName'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          },
          global_login_success: {
            bind: 'setUserPhoneNumber'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'sustainability-sustainable-solar-panels-simulator-menu-click',
            'forward-to-native': true
          },
          solar_panels_simulator_back_navigation: {
            bind: 'navigation-go-back',
            backStep: true
          },
          solar_panels_simulator_modal_state_changed: {
            bind: 'modal-state-change'
          },
          solar_panels_simulator_external_navigation: {
            bind: 'sustainability-sustainable-solar-panels-simulator-navigation-external'
          },
          solar_panels_simulator_conditions_modal_external_navigation: {
            bind: 'sustainability-sustainable-solar-panels-simulator-conditions-modal-external-navigate'
          },
          solar_panels_simulator_preference_preapproved_loan: {
            bind: 'sustainability-sustainable-solar-panels-simulator-preference-preapproved-external-navigate'
          },
          solar_panels_simulator_conventional_preapproved_loan: {
            bind: 'sustainability-sustainable-solar-panels-simulator-conventional-preapproved-external-navigate'
          },
          solar_panels_simulator_privacy_notice_link: {
            bind: 'sustainability-sustainable-solar-panels-simulator-privacy-terms-external-navigate'
          },
          solar_panels_simulator_error_view: {
            bind: 'sustainability-sustainable-solar-panels-simulator-error-not-available-retry',
            analytics: errorModal
          },
          solar_panels_simulator_non_preapproved_loan: {
            bind: 'sustainability-sustainable-solar-panels-simulator-non-preapproved-external-navigate',
            link: {
              page: 'nonPreApprovedConsumerLoan'
            }
          },
          solar_panels_simulator_products_navigation: {
            bind: 'sustainability-sustainable-products-gl-navigation-external'
          },
          solar_panels_simulator_contact_with_me: {
            bind: 'sustainability-sustainable-solar-panels-simulator-contact-with-me-click'
          },
          solar_panels_simulator_contact_phone: {
            bind: 'sustainability-sustainable-solar-panels-simulator-contact-phone-click'
          },
          solar_panels_simulator_interested_credit_card: {
            bind: 'sustainability-sustainable-solar-panels-simulator-interested-credit-card-clicked'
          },
          solar_panels_simulator_interested_financing: {
            bind: 'sustainability-sustainable-solar-panels-simulator-interested-financing-clicked'
          },
          global_action_launcher_dialer: {
            bind: 'sustainability-sustainable-solar-panels-simulator-open-dialer'
          }
        }
      }
    }
  };

  const base = {
    hash: 'solarPanelsSimulator',
    currentPage: {
      url: '/solar-panels-simulator'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      handleLifeCycle,
      sustainableSolarPanelsSimulator,
      solarPanelsSimulatorController,
      solarPanelsSimulatorAnalyticsManager
    ]
  };

  if (!nativeShell) {
    base.components.push(appSideBar(CONFIG));
  }

  errorAndSignWidgetConnector(CONFIG)(base)(sustainableSolarPanelsSimulator.tag, {
    widgetId: pageName,
    cancelAfterErrorFunction: 'OTPCancelled'
  });

  return sphericaPageUtils.spherize(base);
};
