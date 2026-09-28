/* eslint-disable complexity, new-cap */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'contractProductSection';
  const configOperatives = require('./common/helpers/_configOperativeUtils');
  const localStorageApp = require('./common/_local-storage');
  const {
    SPINNER: spinner,
    APP_SIDEBAR: appSidebar,
    getCampaignsChannels,
    appFooter,
    getLocalCurrency,
    get
  } = require('./common/helpers/_utils');
  const SPINNER = spinner(CONFIG);
  const campaignsChannels = getCampaignsChannels(PAGE_NAME);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('contractProductSection');
  const APP_FOOTER = appFooter(CONFIG, 'contractProductSection');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const ocAccountAnalytics = require('./analytics/_ocAccount')();
  const ocAccessAnalytics = require('./analytics/_ocAccess')();
  const ocAnalytics = require('./analytics/_ocLoanOfferPageSpherica.js')();
  const {
    appOnClickStart,
    getPageView
  } =  require('./analytics/_ocCarLoan')();
  const finacingDebitAnalytics = require('./analytics/_financeTransactionMultipurchaseDebit')();
  const npaCreditCardAnalytics = require('./analytics/_npaCreditCard')();
  const npaConsumerLoanAnalytics = require('./analytics/_npaConsumerLoan')();

  const constants = require('./common/helpers/_constants');
  const campaigns = constants.CAMPAIGNS.CARDS;

  const OPERATIVES = {
    mortgageCertificateReview: 'mortgage_certificate_review',
    ocCarLoanReview: 'oc_car_loan_review',
    npaCarLoan: 'non-pre-approved-car-loan',
    npaCarLoanOrigination: 'oc-car-loan-auto-universal',
    flexibleFinancingDebit: 'flexible_financing_debit'
  };

  const { ocBannerAnalytics } = configOperatives.getAnalyticsOcBanner(PAGE_NAME, CONFIG);

  const outChannels = {
    ...campaignsChannels,
    contract_product_section_oc_banner_coming_soon_clicked: {
      bind: 'cells-oc-banner-click-coming-soon',
      link: {
        page: 'comingSoon'
      }
    },
    [`contract_product_section_oc_banner_${OPERATIVES.mortgageCertificateReview}_clicked`]: {
      bind: 'cells-oc-banner-click-mortgage-certificate-review',
      link: {
        page: 'mortgageCertificateReview'
      }
    },
    [`contract_product_section_oc_banner_${OPERATIVES.ocCarLoanReview}_clicked`]: {
      bind: 'cells-oc-banner-click-oc-car-loan',
      link: {
        page: 'ocCarLoanTracking'
      }
    },
    contract_product_section_oc_banner_mortgage_loan_clicked: {
      bind: 'cells-oc-banner-click-mortgage-loan',
      link: {
        page: 'mortgage',
        params: {
          offerId: 'offerId'
        }
      },
      analytics: ocAccessAnalytics.OPPORTUNITIES_OC_ACCESS_APP_ON_CLICK_START
    },
    [`contract_product_section_oc_banner_${OPERATIVES.npaCarLoan}_clicked`]: {
      bind: `cells-oc-banner-click-${OPERATIVES.npaCarLoan}`,
      link: {
        page: 'nonPreApprovedCarCertificate',
        params: {
          offerId: 'offerId'
        }
      },
      analytics: ocAccessAnalytics.opportunitiesOcCarLoanNpa
    },
    contract_product_section_oc_banner_oc_car_loan_auto_universal_clicked: {
      bind: `cells-oc-banner-click-${OPERATIVES.npaCarLoanOrigination}`,
      link: {
        page: 'ocCarLoanOrigination',
        params: {
          offerId: 'offerId'
        }
      },
      analytics: ocAccessAnalytics.opportunitiesOcCarLoanOrigination
    },
    contract_product_section_oc_banner_oc_account_clicked: {
      bind: 'cells-oc-banner-click-oc-account',
      link: {
        page: 'ocAccount'
      }
    },
    [`contract_product_section_oc_banner_${OPERATIVES.mortgageTracking}_clicked`]: {
      bind: 'cells-oc-banner-click-oc-mortgage-tracking',
      link: {
        page: 'mortgageMainTracking'
      }
    },
    contract_product_section_oc_banner_loan_and_mortgage_information_mortgage_tracking_clicked: {
      bind: 'cells-oc-banner-click-loan-and-mortgage-information-mortgage-tracking',
      link: {
        page: 'loanAndMortgageInformation'
      }
    },
    contract_product_section_oc_banner_servicing_scheduled_donations_clicked: {
      bind: 'cells-oc-banner-click-card-transaction-servicing-scheduled-donations',
      link: {
        page: 'cardTransactionServicingScheduledDonations',
        params: {
          offerId: 'offerId'
        }
      },
      analytics: ocAccessAnalytics.opportunitiesCardScheduledTransactions
    }
  };

  if (isSpherica) {
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  }

  if (APP_FOOTER) {
    APP_FOOTER.properties.cellsConnections.in.set_footer_hidden = {
      bind: 'hidden'
    };
  }

  SPINNER.properties.className = 'solid-spinner';

  const base = {
    hash: 'contract-product-section',
    currentPage: {
      url: '/contract-product-section'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'fade',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: true,
        footerFixed: true,
        headerFixed: true,
        iOSFixedHeader: IS_NATIVE_IOS,
        footerHeight: APP_FOOTER ? 64 : 0,
        offset: 120,
        fixOffset: 70,
        extraHeaderClass: 'dark-blue-bg',
        className: IS_NATIVE_IOS ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
        rightDrawer: true,
        edgeSwipeSensitivity: 50,
        disableEdgeSwipe: true,
        avoidToggleMenu: !!CONFIG.nativeShell,
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        footerFloating: true,
        className: `bg-light-grey${IS_NATIVE_IOS ? ' dashboard-ios-top-padding ios-top-padding' : ''}`
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': true
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_contractProductSection: {
                bind: 'init'
              }
            },
            out: {
              contract_product_section_init_page: {
                bind: 'init-page'
              },
              contract_product_section_reset_page: {
                bind: 'reset'
              },
              app_error_access_token: {
                bind: 'access-token-error'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              open_control_veil: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark',
          rightIcon: 'coronita:menu',
          rightIconAction: 'toggle-menu',
          titleName: 'contract-product-section-header-title',
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'click-left-button'
              },
              blue_set_left_icon: {
                bind: 'setProperties'
              },
              blue_set_right_icon: {
                bind: 'rightIcon'
              }
            },
            out: {
              global_open_native_menu: {
                bind: 'click-right-button'
              },
              navigation_about_to_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--core-grey header',
          variant: 'primary-alt',
          rightIcon: 'coronita:menu',
          rightIconAction: 'toggle-menu',
          rightIconText: 'cells-molecule-header-spherica-menu',
          titleName: 'contract-product-section-header-title'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          continue: 'dashboard',
          cellsConnections: {
            in: {
              global_redirect_to_deposit_hiring_send_navigate: {
                bind: 'navigateToPage'
              },
              contract_product_section_review_exit_header: {
                bind: 'navigate'
              },
              contract_product_section_click_back_button: {
                bind: 'navigate'
              }
            },
            out: {
              global_redirect_to_deposit_hiring: {
                bind: 'navigation-to-deposits-hiring',
                link: {
                  page: 'depositHiring'
                }
              }
            },
            params: {
              isLogged: 'global_user_logged'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-oc-banner-list',
        tagSpherica: 'cells-oc-banner-list-spherica',
        properties: {
          continue: PAGE_NAME,
          imageEmpty: './images/empty_micro.svg',
          featured: [ 1 ],
          featureClass: 'banner--special',
          bannerLink: 'cells-oc-banner-iwant',
          hideEmptyTitle: true,
          emptyDescription: 'contract-product-section-empty-description',
          localCurrency: getLocalCurrency(CONFIG),
          decimalsHidden: true,
          className: 'offers',
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'appSettings'
              },
              contract_product_section_offers_parsed: {
                bind: 'campaigns'
              },
              contract_product_section_reset_page: {
                bind: 'reset'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlags'
              }
            },
            out: outChannels
          }
        },
        propertiesSpherica: {
          bannerClass: 'banner banner--image-center banner--status',
          bannerSpecialVariant: true,
          imageEmpty: './images/spherica/empty_micro.svg',
          defaultImage: './images/spherica/contractProductSection/default-image.svg'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-oc-banner-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-oc-banner-manager',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          campaignFormat: 'card',
          productNames: ocBannerAnalytics.productNames,
          offersAnalytics: ocBannerAnalytics.offers,
          locationCPS: {
            top: 'contract product section--superior',
            center: 'contract product section--centro'
          },
          offersFullLocation: [ '0835' ],
          cellsConnections: {
            in: {
              ...ocBannerAnalytics.channelIn,
              contract_product_section_offers_parsed: {
                bind: 'offers'
              }
            },
            out: ocBannerAnalytics.channelOut
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-mortgage-certificate-management',
        familyPath: '@glomo-web-components/bbva-manager-mortgage-certificate-management',
        render: 'litElement',
        properties: {
          fetureEnabled: true,
          showCard: true,
          cardConfig: {
            bannerType: 'mortgage-certificate-review',
            bannerLink: 'mortgage-certificate-review-banner-link',
            config: {
              animated: true,
              class: 'contract-pending',
              title: 'mortgage-certificate-review-header-title',
              description: 'mortgage-certificate-review-banner-description',
              isShownInDashboard: false,
              offerType: {
                id: 'mortgage-certificate-review'
              },
              smallImg: {
                id: 'mortgage-certificate-review-view-certificate-button',
                src: './images/home_search.svg'
              }
            }
          },
          cellsConnections: {
            in: {
              global_request_external_offers: {
                bind: 'requestMortgageProposal'
              },
              mortgage_certificate_review_get_mortgage: {
                bind: 'setCertificateDetails'
              },
              mortgage_certificate_review_get_error: {
                bind: 'close'
              },
              mortgage_certificate_review_backend_error: {
                bind: 'close'
              }
            },
            out: {
              mortgage_certificate_review_set_amount_text: {
                bind: 'mortgage-certificate-set-amount-text'
              },
              mortgage_certificate_review_set_term_text: {
                bind: 'mortgage-certificate-set-term-text'
              },
              mortgage_certificate_review_set_purpose_text: {
                bind: 'mortgage-certificate-set-purpose-text'
              },
              mortgage_certificate_review_set_expiration_date_text: {
                bind: 'mortgage-certificate-set-expiration-date-text'
              },
              mortgage_certificate_review_set_folio_text: {
                bind: 'mortgage-certificate-set-folio-text'
              },
              mortgage_certificate_review_get_mortgage_proposal: {
                bind: 'mortgage-certificate-review-get-mortgage-proposal'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              MORTGAGE_CERTIFICATE_REVIEW_SEND_CARD_CONFIG: {
                bind: 'mortgage-certificate-review-show-card'
              },
              mortgage_certificate_review_navigation_from_contract_product_section: {
                bind: 'navigation-to-mortgage-certificate-review'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-dataprovider-mortgages',
        familyPath: '@glomo-web-components/bbva-dataprovider-mortgages',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              mortgage_certificate_review_get_mortgage_proposal: {
                bind: 'getMortgageProposal'
              }
            },
            out: {
              mortgage_certificate_review_get_mortgage: {
                bind: 'get-mortgage-proposal-v0-success'
              },
              mortgage_certificate_review_get_error: {
                bind: 'get-mortgage-proposal-v0-error'
              },
              mortgage_certificate_review_backend_error: {
                bind: 'api-dm-response-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-loans',
        properties: {
          host: CONFIG.globalServices.host,
          loansApiVersion: CONFIG.globalServices.versions.loans,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          native: !!CONFIG.native,
          cellsConnections: {
            in: {
              oc_car_loan_get_proposals_request: {
                bind: 'getProposals'
              }
            },
            out: {
              get_proposals_success: {
                bind: 'get-proposals'
              },
              get_proposals_error: {
                bind: 'error-on-get-proposals'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
        tag: 'bbva-manager-oc-car-loan',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              get_proposals_success: {
                bind: 'getCellsOcBannerConfig'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagsCollection'
              },
              contract_product_section_oc_banner_oc_car_loan_review_clicked: {
                bind: 'handleOcCarLoanClick'
              },
              global_set_app_settings: {
                bind: 'fireReviewOffersAmount'
              },
              contract_product_section_init_page: {
                bind: 'handleFeatureFlag'
              },
              get_proposals_error: {
                bind: 'handleErrorOnGetProposals'
              }
            },
            out: {
              send_review_offers_amount: {
                bind: 'send-review-offers-amount'
              },
              oc_car_loan_app_on_click_start: {
                bind: 'app-on-click-start',
                analytics: appOnClickStart
              },
              list_proposals_normalized: {
                bind: 'get-banner-config'
              },
              oc_car_loan_app_page_view_tracking: {
                bind: 'app-page-view-tracking',
                analytics: getPageView('TRACKING', 'oportunidades')
              },
              get_request_status: {
                bind: 'get-request-status'
              },
              global_open_control_veil: {
                bind: 'show-spinner'
              },
              oc_car_loan_get_proposals_request: {
                bind: 'oc-car-loan-get-proposals-request'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica: isSpherica
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-deposits-dm-mx',
        familyPath: 'glomo-deposits-dm',
        properties: {
          host: CONFIG.globalServices.host,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          depositsApiVersion: CONFIG.globalServices.versions.depositsV1,
          cellsConnections: {
            in: {
              global_redirect_to_deposit_hiring_create_channel: {
                bind: 'createNameToNavigateDepositsHiring'
              }
            },
            out: {
              global_redirect_to_deposit_hiring_send_navigate: {
                bind: 'deposit-navigate-to-page-deposits-hiring'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-non-pre-approved-car-loan',
        familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
        render: 'litElement',
        properties: {
          offerCardConfig: {
            bannerLink: 'cells-oc-banner-iwant',
            bannerType: 'non-pre-approved-car-loan',
            config: {
              description: 'no-pre-approved-car-card-banner-description',
              text: 'no-pre-approved-car-card-banner-text',
              name: '',
              class: 'banner--image-center',
              offerType: {
                id: 'non-pre-approved-car-loan',
                name: 'non-pre-approved-car-loan'
              },
              offerId: '',
              endDate: null,
              isShownInDashboard: false,
              amount: {
                amount: '',
                currency: '',
                description: ''
              },
              contractId: '',
              smallImg: {
                src: './images/car.svg'
              }
            },
            isNpa: true
          },
          offerCardOriginationConfig: {
            bannerLink: 'cells-oc-banner-iwant',
            bannerType: 'oc-car-loan-auto-universal',
            config: {
              description: 'no-pre-approved-car-card-banner-description',
              text: 'no-pre-approved-car-card-banner-text',
              name: '',
              class: 'banner--image-center',
              offerType: {
                id: 'oc-car-loan-auto-universal',
                name: 'oc-car-loan-auto-universal'
              },
              offerId: '',
              endDate: null,
              isShownInDashboard: false,
              amount: {
                amount: '',
                currency: '',
                description: ''
              },
              contractId: '',
              smallImg: {
                src: './images/car.svg'
              }
            },
            isNpa: true
          },
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlags'
              },
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              contract_products_page_init_page: {
                bind: 'requestNpaCarLoanFlag'
              },
              global_financial_overview_details: {
                bind: 'financialOverview'
              },
              global_unparsed_offers_retrieved: {
                bind: 'hasAutoOffer'
              },
              global_request_external_offers: {
                bind: 'handleListOffers'
              }
            },
            out: {
              npa_car_loan_offer: {
                bind: 'npa-car-loan-offer'
              },
              npa_car_loan_mortgage_origination_offer: {
                bind: 'npa-car-loan-mortgage-origination'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-oc-car-loan',
        familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              contract_product_section_offers_parsed: {
                bind: 'offers'
              },
              [`contract_product_section_oc_banner_${OPERATIVES.npaCarLoan}_clicked`]: {
                bind: 'bannerClicked'
              },
              contract_product_section_oc_banner_oc_car_loan_auto_universal_clicked: {
                bind: 'bannerClickedLoanOrigination'
              }
            },
            out: {
              oc_car_loan_page_view_channel: {
                bind: 'analytics-oc-banner-car-loan-clicked',
                analytics: ocAccessAnalytics.opportunitiesOcCarLoanNpa
              },
              oc_car_loan_origination_page_view_channel: {
                bind: 'analytics-oc-banner-car-loan-origination-clicked',
                analytics: ocAccessAnalytics.opportunitiesOcCarLoanOrigination
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-oc-account-mx',
        familyPath: '@glomo-web-components/bbva-analyticmanager-account-origination',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              contract_product_section_offers_parsed: {
                bind: 'offers'
              },
              contract_product_section_oc_banner_oc_account_clicked: {
                bind: 'fireAppOnClickStart'
              }
            },
            out: {
              analytics_app_on_click_start_oc_account_product_section: {
                bind: 'analytics-app-on-click-start',
                analytics: ocAccountAnalytics.appOnClickStart
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-consumer-loan-mx',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              contract_product_section_offers_parsed: {
                bind: 'offers'
              },
              contract_product_section_oc_banner_consumer_loan_clicked: {
                bind: 'appOnClickStartAnalyticProcuctSection'
              }
            },
            out: {
              analytics_app_on_click_start_product_section: {
                bind: 'analytics-app-on-click-start-product-section',
                analytics: ocAnalytics.appOnClickStartContractAnalytic()
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
              contract_product_section_offers_parsed: {
                bind: 'offers'
              },
              [`contract_product_section_oc_banner_${OPERATIVES.flexibleFinancingDebit}_clicked`]: {
                bind: 'appOnClickStart'
              }
            },
            out: {
              finance_multipurchase_debit_view_channel: {
                bind: 'app-on-click-start',
                analytics: finacingDebitAnalytics.appOnClickStart
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-non-pre-approved-consumer-loan',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              contract_product_section_analytics_oc_banner_non_preapproved_consumer_loan_app_on_click_start: {
                bind: 'onClickStart'
              }
            },
            out: {
              npa_consumer_loan_on_click_start: {
                bind: 'bbva-analyticmanager-non-pre-approved-consumer-loan-on-click-start',
                analytics: npaConsumerLoanAnalytics.APP_ON_CLICK_START
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card',
        familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_financial_overview_details: {
                bind: 'financialOverviewDetailsData'
              },
              contract_product_section_oc_banner_non_preapproved_credit_card_clicked: {
                bind: 'onClickStart'
              }
            },
            out: {
              npa_credit_card_on_click_start: {
                bind: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card-on-click-start',
                analytics: npaCreditCardAnalytics._getNpaCreditCardFunnel('appOnclickStart')
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-notification-detail',
        familyPath: '@glomo-web-components/bbva-controller-notification-detail',
        render: 'litElement',
        properties: {
          campaigns,
          operativeType: 'PdS01',
          featureFlagKey: 'glomo.dashboard.fixedPaymentPlanRisksCollection',
          cellsConnections: {
            in: {
              navigation_from_deep_link_to_operations: {
                bind: 'pushNotificationDetail'
              },
              global_offers_retrieved: {
                bind: 'getOffers'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              risk_collection_channel_navigation_to_fixed_payment_plan: {
                bind: 'reset'
              }
            },
            out: {
              risk_collection_channel_navigation_to_fixed_payment_plan: {
                bind: 'bbva-controller-notification-detail-navigation',
                link: {
                  page: {
                    bind: 'pageName'
                  },
                  params: {
                    offerId: 'offerId',
                    productId: 'productId'
                  }
                }
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'hide-spinner'
              }
            }
          }
        }
      }
    ]
  };

  if (APP_FOOTER) {
    base.components.push(APP_FOOTER);
  }

  if (CONFIG.nativeShell) {
    const getComponent = get(base);
    getComponent('cells-molecule-header').properties.cellsConnections.out.global_open_native_menu = {
      bind: 'toggle-menu',
      'forward-to-native': true
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }

  localStorageApp.addOutStorageChannels(base.components, ['feedback_client_voice_connect',
    'closed_offers'], CONFIG);

  return sphericaPageUtils.spherize(base);
};
