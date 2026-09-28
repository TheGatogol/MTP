'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { sustainability } },
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
    addFeatureFlag
  } = require('./common/helpers/_utils');
  const pageName = 'applianceSimulator';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    simulatorPageView,
    editModal,
    customizeModal,
    calculateModal,
    errorModal,
    editExpenseClick,
    customizeExpenseClick,
    loanClick,
    limitCreditCardClick,
    creditCardClick,
    payReceiptsClick,
    promotionsLandingViewMore,
    promotionDetail
  } =  require('./analytics/_applianceSimulator')(CONFIG);
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
          sustainability_on_simulator_init_page: {
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
  const applianceSimulatorController = {
    zone: 'app__main',
    tag: 'bbva-controller-sustainable-appliance-simulator',
    familyPath: '@glomo-web-components/bbva-controller-sustainable-appliance-simulator',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'setCachedUser'
          },
          appliance_simulator_credit_card_navigation: {
            bind: 'navigateToCreditCardHolder'
          },
          appliance_simulator_limit_credit_card_navigation: {
            bind: 'navigateToIncrementLimitCreditCard'
          },
          appliance_simulator_pay_receipts_navigation: {
            bind: 'closeCustomizeConsumptionModal'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          appliance_simulator_loan_navigation: {
            bind: 'navigateToLoan'
          },
          appliance_simulator_products_link_clicked: {
            bind: 'manageLoansNavigation'
          }
        },
        out: {
          appliance_simulator_credit_card_holder_clicked: {
            bind: 'bbva-controller-sustainable-appliance-simulator-navigate-to-credit-card-holder',
            link: addFeatureFlag('contractProductSection.ocCreditCardHolder', {
              page: 'creditCardHolder',
              params: {
                offerId: 'offerId'
              }
            })
          },
          appliance_simulator_credit_card_holder_spherica_clicked: {
            bind: 'bbva-controller-sustainable-appliance-simulator-navigate-to-credit-card-holder',
            link: addFeatureFlag('operations.creditCardHolderSpherica', {
              page: 'creditCardHolderSpherica',
              params: {
                offerId: 'offerId'
              }
            })
          },
          appliance_simulator_increment_limit_credit_card_clicked: {
            bind: 'bbva-controller-sustainable-appliance-simulator-navigate-to-increment-limit-credit-card',
            link: {
              page: 'increment',
              params: {
                offerId: 'offerId',
                productId: 'productId'
              }
            }
          },
          appliance_simulator_loan_navigation_clicked: {
            bind: 'bbva-controller-sustainable-appliance-simulator-navigate-to-loan-offer',
            link: {
              page: { bind: 'redirectPage' },
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_preapproved_conventional_loan: {
            bind: 'bbva-controller-sustainable-appliance-simulator-pre-approved-conventional-loan',
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
            bind: 'bbva-controller-sustainable-appliance-simulator-pre-approved-preferential-loan',
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
            bind: 'bbva-controller-sustainable-appliance-simulator-non-pre-approved-loan',
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
            bind: 'bbva-controller-sustainable-appliance-simulator-preapproved-and-non-preapproved-loan-offer',
            link: {
              page: 'ocCarLoanOrigination',
              params: {
                offerId: 'offerId'
              }
            }
          },
          sustainability_section_non_preapproved_loan_offer: {
            bind: 'bbva-controller-sustainable-appliance-simulator-non-preapproved-loan-offer',
            link: {
              page: 'nonPreApprovedCarCertificate'
            }
          },
          sustainability_section_loan_offer_default_case: {
            bind: 'bbva-controller-sustainable-appliance-simulator-loan-offer-default-case',
            link: {
              page: 'assistanceSection'
            }
          },
          appliance_simulator_set_cached_user: {
            bind: 'bbva-controller-sustainable-appliance-simulator-set-cached-user'
          },
          appliance_close_customize_consumption_modal: {
            bind: 'bbva-controller-sustainable-appliance-simulator-close-customize-consumption-modal'
          },
          appliance_simulator_set_features_flags: {
            bind: 'bbva-controller-sustainable-appliance-simulator-set-toggles-flags'
          }
        }
      }
    }
  };
  const applianceSimulatorAnalyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-sustainability-appliance-simulator',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sustainability',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          appliance_simulator_page_view: {
            bind: 'pageView'
          },
          appliance_simulator_modal_state_changed: {
            bind: 'analyticsModals'
          },
          sustainability_on_simulator_request_success_home: {
            bind: 'externalSimulatorData'
          },
          sustainability_on_simulator_init_page: {
            bind: 'pageView'
          }
        },
        out: {
          appliance_simulator_analytics_page_view: {
            bind: 'bbva-analyticmanager-sustainability-appliance-simulator-page-view',
            analytics: simulatorPageView
          },
          appliance_simulator_analytics_edit_modal: {
            bind: 'bbva-analyticmanager-sustainability-appliance-simulator-modal-edit',
            analytics: editModal
          },
          appliance_simulator_analytics_customize_modal: {
            bind: 'bbva-analyticmanager-sustainability-appliance-simulator-modal-customize',
            analytics: customizeModal
          },
          appliance_simulator_analytics_calculate_modal: {
            bind: 'bbva-analyticmanager-sustainability-appliance-simulator-modal-calculation',
            analytics: calculateModal
          }
        }
      }
    }
  };
  const sustainableApplianceSimulator = {
    zone: 'app__main',
    tag: 'sustainability-sustainable-appliance-simulator',
    familyPath: '@glomo-web-components/sustainability-sustainable-appliance-simulator-gl',
    type: 'UI',
    render: 'litElement',
    properties: {
      host,
      className: 'u-margin-bottom--2',
      requiredToken,
      sustainabilityApiVersion: sustainability,
      features: {
        appHasPayInApp: true
      },
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      aemHost,
      exclPromosAemPath: 'content/caas/mexico/app/sustainability/sustainability-exclusive-car-promotions.model.json',
      genPromosAemPath: 'content/caas/mexico/app/sustainability/sustainability-general-car-promotions.model.numcf-10.page-1.json',
      cellsConnections: {
        in: {
          appliance_simulator_set_features_flags: {
            bind: 'toggles'
          },
          sustainability_set_cached_user: {
            bind: 'userName'
          },
          appliance_close_customize_consumption_modal: {
            bind: 'customizeConsumptionModal'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          },
          sustainability_on_simulator_request_success_home: {
            bind: 'externalSimulatorData'
          },
          sustainability_on_simulator_request_success_offers: {
            bind: 'externalOffersData'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'sustainability-sustainable-appliance-simulator-menu-click',
            'forward-to-native': true
          },
          appliance_simulator_back_navigation: {
            bind: 'navigation-go-back',
            backStep: true
          },
          appliance_simulator_forward_navigation: {
            bind: 'navigation-go-forward'
          },
          appliance_simulator_products_link_clicked: {
            bind: 'sustainability-sustainable-appliance-simulator-products-link-clicked'
          },
          appliance_simulator_modal_state_changed: {
            bind: 'modal-state-change'
          },
          appliance_simulator_analytics_error_modal: {
            bind: 'sustainability-sustainable-appliance-simulator-error-not-available-retry',
            analytics: errorModal
          },
          appliance_simulator_edit_amount: {
            bind: 'sustainability-sustainable-appliance-simulator-amount-edit',
            analytics: editExpenseClick
          },
          appliance_simulator_customize_amount: {
            bind: 'sustainability-sustainable-appliance-simulator-amount-customize',
            analytics: customizeExpenseClick
          },
          appliance_simulator_loan_navigation: {
            bind: 'sustainability-sustainable-appliance-simulator-loan-external-navigate',
            analytics: loanClick
          },
          appliance_simulator_limit_credit_card_navigation: {
            bind: 'sustainability-sustainable-appliance-simulator-limit-credit-card-external-navigate',
            analytics: limitCreditCardClick
          },
          appliance_simulator_credit_card_navigation: {
            bind: 'sustainability-sustainable-appliance-simulator-credit-card-external-navigate',
            analytics: creditCardClick
          },
          appliance_simulator_pay_receipts_navigation: {
            bind: 'sustainability-sustainable-appliance-simulator-pay-receipts-external-navigate',
            analytics: payReceiptsClick,
            link: {
              page: 'billPaymentsDashboard'
            }
          },
          appliance_simulator_promotions_list_view: {
            bind: 'sustainability-sustainable-appliance-simulator-promotions-list-view',
            analytics: promotionsLandingViewMore
          },
          appliance_simulator_promotion_detail_view: {
            bind: 'sustainability-sustainable-appliance-simulator-promotion-detail-view',
            analytics: promotionDetail
          },
          appliance_simulator_page_view: {
            bind: 'sustainability-sustainable-appliance-simulator-data-fetched'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mxApplianceSimulator',
    currentPage: {
      url: '/appliance-simulator'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      handleLifeCycle,
      applianceSimulatorController,
      applianceSimulatorAnalyticsManager,
      sustainableApplianceSimulator
    ]
  };

  if (!CONFIG.nativeShell) {
    base.components.push(appSideBar(CONFIG));
  }

  return sphericaPageUtils.spherize(base);
};
