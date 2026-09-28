'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { sustainability }
    },
    native,
    nativeIos,
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
  const {
    pageView,
    createOnClickStart
  } = require('./analytics/_sustainabilitySection')(CONFIG);
  const pageName = 'sustainabilitySection';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);

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

  const sustainableSustainabilitySectionAnalyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-sustainability-section',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sustainability',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          sustainability_section_navigate_products_section: {
            bind: 'manageAnalyticsExternalNavigation'
          }
        },
        out: {
          sustainability_section_analytics_navigate_loan: {
            bind: 'bbva-analyticmanager-sustainability-section-navigate-offers',
            analytics: createOnClickStart('preapproved loan', 'dashboard sostenibilidad preferencial', 'preaprobado')
          }
        }
      }
    }
  };

  const sustainabilitySustainabilyController = {
    zone: 'app__main',
    tag: 'bbva-controller-sustainability-section-mx',
    familyPath: '@glomo-web-components/bbva-controller-sustainability-section-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'setCachedUser'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          sustainability_section_navigate_products_section: {
            bind: 'manageProductsNavigation'
          },
          sustainability_section_products_link_clicked: {
            bind: 'manageLoansNavigation'
          },
          sustainability_section_navigate_forward: {
            bind: 'manageForwardNavigation'
          }
        },
        out: {
          sustainability_set_cached_user: {
            bind: 'bbva-controller-sustainability-section-mx-set-cached-user'
          },
          sustainability_set_features_flags: {
            bind: 'bbva-controller-sustainability-section-mx-set-toggles-flags',
            analytics: pageView
          },
          sustainability_features_flags_update_complete: {
            bind: 'bbva-controller-sustainability-section-mx-flags-updated-complete'
          },
          sustainability_product_navigation: {
            bind: 'bbva-controller-sustainability-section-mx-navigate-to-product',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_preapproved_conventional_loan: {
            bind: 'bbva-controller-sustainability-section-mx-pre-approved-conventional-loan',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_preapproved_preferential_loan: {
            bind: 'bbva-controller-sustainability-section-mx-pre-approved-preferential-loan',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_non_preapproved_loan: {
            bind: 'bbva-controller-sustainability-section-mx-non-pre-approved-loan',
            link: {
              page: {
                bind: 'redirectPage'
              },
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_preapproved_and_non_preapproved_loan_clicked: {
            bind: 'bbva-controller-sustainability-section-mx-preapproved-and-non-preapproved-loan-offer',
            link: {
              page: 'ocCarLoanOrigination',
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_preapproved_loan_clicked: {
            bind: 'bbva-controller-sustainability-section-mx-preapproved-loan-offer',
            link: {
              page: 'carLoan',
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_non_preapproved_loan_offer: {
            bind: 'bbva-controller-sustainability-section-mx-non-preapproved-loan-offer',
            link: {
              page: 'nonPreApprovedCarCertificate'
            }
          },
          sustainability_section_loan_offer_default_case: {
            bind: 'bbva-controller-sustainability-section-mx-loan-offer-default-case',
            link: {
              page: 'assistanceSection'
            }
          },
          sustainability_carbon_footprint_section_navigation: {
            bind: 'bbva-controller-sustainability-section-mx-navigate-forward',
            link: {
              page: {
                bind: 'page'
              }
            }
          }
        }
      }
    }
  };

  const sustainabilitySustainabilySection = {
    zone: 'app__main',
    tag: 'sustainability-sustainability-section',
    familyPath: '@glomo-web-components/sustainability-sustainability-section-gl',
    type: 'UI',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      sustainabilityApiVersion: sustainability,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      simulatorsOrder: ['PANELS', 'HOME', 'CAR'],
      functionalityTypes: ['SUSTAINABLE_LOAN', 'CAR'],
      targetProductIds: [['0NOM', '0PPI', '0060'], [ 'AUTO' ]],
      productMode: 'MULTIPLE',
      contractingType: {categoryId: 'H'},
      productTypeId: 'LOANS',
      aemHost,
      exclPromosAemPath: 'content/caas/mexico/app/sustainability/sustainability-exclusive-car-promotions.model.json',
      genPromosAemPath: 'content/caas/mexico/app/sustainability/sustainability-general-car-promotions.model.numcf-10.page-1.json',
      cellsConnections: {
        in: {
          sustainability_features_flags_update_complete: {
            bind: 'firstUpdated'
          },
          sustainability_set_features_flags: {
            bind: 'toggles'
          },
          sustainability_set_cached_user: {
            bind: 'userName'
          }
        },
        out: {
          sustainability_on_simulator_request_success_car: {
            bind: 'car-simulator-api-dm-fetch'
          },
          sustainability_on_simulator_request_success_home: {
            bind: 'home-simulator-api-dm-fetch'
          },
          sustainability_on_simulator_request_success_offers: {
            bind: 'offers-api-dm-fetch'
          },
          sustainability_solar_panels_simulator_navigation: {
            bind: 'sustainability-sustainability-section-navigation-solar-panels-simulator',
            link: {
              page: 'solarPanelsSimulator'
            }
          },
          sustainability_home_appliance_simulator_navigation: {
            bind: 'sustainability-sustainability-section-navigation-appliance-simulator',
            link: {
              page: 'applianceSimulator'
            }
          },
          sustainability_car_simulator_navigation: {
            bind: 'sustainability-sustainability-section-navigation-car-simulator',
            link: {
              page: 'carSimulator'
            }
          },
          sustainability_section_navigate_forward: {
            bind: 'sustainability-sustainability-section-navigation-carbon-footprint'
          },
          sustainability_carbon_footprint_offset_navigation: {
            bind: 'sustainability-sustainability-section-navigation-forestry-projects',
            link: {
              page: 'sustainabilityCarbonFootprintOffset'
            }
          },
          sustainability_section_navigate_products_section: {
            bind: 'sustainability-sustainability-section-navigation-offers'
          },
          global_open_native_menu: {
            bind: 'sustainability-sustainability-section-menu-click',
            'forward-to-native': true
          },
          sustainability_exit: {
            bind: 'navigation-go-back',
            backStep: true
          },
          sustainability_section_products_link_clicked: {
            bind: 'sustainability-sustainability-section-products-link-clicked'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mxsustainabilitySection',
    currentPage: {
      url: '/sustainability-section'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      sustainabilitySustainabilySection,
      sustainableSustainabilitySectionAnalyticsManager,
      sustainabilitySustainabilyController
    ]
  };

  if (!nativeShell) {
    base.components.push(appSideBar(CONFIG));
  }

  return sphericaPageUtils.spherize(base);
};