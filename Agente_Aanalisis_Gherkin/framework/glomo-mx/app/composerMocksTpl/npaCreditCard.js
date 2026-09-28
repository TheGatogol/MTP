'use strict';
module.exports = config => {
  const pageName = 'npaCreditCard';
  const { getLanguage } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_npaCreditCard')();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customersV1,
        cardsV1,
        campaigns,
        riskV1,
        creditRequestV2
      }
    },
    native = false,
    nativeIos = false
  } = config;

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'dark-blue-bg'
    }
  };

  const npaCreditCard = {
    zone: 'app__main',
    type: 'DM',
    tag: 'card-origination-non-pre-approved-credit-card-mx',
    familyPath: '@glomo-web-components/card-origination-non-pre-approved-credit-card-mx',
    render: 'litElement',
    properties: {
      native,
      host,
      customersLocalApiVersion: customersV1,
      customersGlobalApiVersion: customersV1,
      cardsApiVersion: cardsV1,
      campaignsApiVersion: campaigns,
      riskLocalsApiVersion: riskV1,
      offerBenefitsApiVersion: campaigns,
      risksCreditRequestApiVersion: creditRequestV2,
      requiredToken,
      iOSFixedHeader: nativeIos,
      termTypeId: 'BD-MX-AA-AUTBUR-001',
      statusValidateDigitalFile: 'VALID',
      missingPersonalDataLabels: [
        'CURP',
        'Birth Date',
        'Gender',
        'Nationality',
        'Marital Satus',
        'Country'
      ],
      digitalMissingDocuments: ['IDENTITY', 'PROOF_OF_ADDRESS'],
      ldaId: '0SKY',
      maxRetries: 3,
      termsAcceptanceMessage: 'card-origination-non-pre-approved-credit-card-mx-terms-acceptance-message',
      country: { id: 'MX'},
      acceptanceMethod: 'CHECK',
      appInitialDate: '00:00',
      screenResolution: 24,
      operationChannelId: 'MGT',
      originId: 'NP',
      processCode: 'MEM',
      productType: 'CREDITCARD',
      productTypeAccounts: 'ACCOUNTS',
      referenceNumber: 'TARJETA',
      subProcessCode: 'SOVITCANI',
      webBrowserName: 'OTHER',
      netWorkNames: {
        WIFI: 'wifi',
        NOT_CONNECTED: 'nodata'
      },
      netWorkBands: {
        GPRS: '2G',
        GSM: '2G',
        EDGE: '2G',
        WCDMA: '3G',
        HSDPA: '4G',
        HSUPA: '3G',
        CDMA: '2G',
        EVDO_0: '3G',
        EVDO_A: '3G',
        EVDO_B: '3G',
        EHRPD: '3G',
        LTE: '4G',
        WIFI: 'OT',
        NOT_CONNECTED: 'OT'
      },
      platformNames: {
        ANDROID: 'ANDROI',
        IOS: 'APPIOS'
      },
      sizeHeight: 1280,
      language: getLanguage(),
      pageName,
      cellsConnections: {
        in: {
          __bridge_page_npaCreditCard: {
            bind: 'init'
          },
          global_user_id: {
            bind: 'customerId'
          },
          sign_modal_open: {
            bind: 'signOtpOpen'
          },
          sign_modal_cancelled: {
            bind: 'closeModalOTP'
          },
          cells_to_native_modal_closed: {
            bind: 'closeModalOTP'
          },
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          },
          global_device_get_manufacturer_success: {
            bind: 'deviceManufacturer'
          },
          global_device_get_device_model_success: {
            bind: 'deviceModel'
          },
          global_device_get_device_platform_success: {
            bind: 'platformData'
          },
          global_device_get_network_type_success: {
            bind: 'deviceNetwork'
          },
          npa_credit_card_device_geolocation: {
            bind: 'geolocation'
          },
          npa_credit_card_flag_enabled: {
            bind: 'flagEnabled'
          },
          npa_credit_card_show_benefits: {
            bind: 'showBenefits'
          },
          npa_credit_card_new_model_evaluation: {
            bind: 'newModelEvaluation'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          }
        },
        out: {
          global_retargeting_reset_step: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-init-page'
          },
          global_retargeting_initialize: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-init-page'
          },
          npa_credit_card_back_to_contract_product_section: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-close-operative',
            backStep: true
          },
          npa_credit_card_update_profile: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-go-profile',
            link: {
              page: 'profile',
              cleanUntil: 'npaCreditCard',
              skipHistory: true
            }
          },
          npa_credit_card_holder: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-go-credit-card-holder'
          },
          npa_credit_card_page_visit: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-visible-offer-page'
          },
          npa_credit_card_continue_checks_page: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-offer-page-continue'
          },
          npa_credit_card_modal_benefits: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-offer-page-benefits'
          },
          npa_credit_card_show_checks: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-visible-modal-checks'
          },
          npa_credit_card_show_loader: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-dm-show-loader',
            analytics: analytics._getNpaCreditCardFootprint('appPageVisitLoader')
          },
          npa_credit_card_otp: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-open-otp'
          },
          npa_credit_card_app_completed: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-visible-success-page'
          },
          npa_credit_card_app_completed_rejection: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-dm-get-cards-offers-offer-error'
          },
          npa_credit_card_app_completed_rejection_request: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-dm-get-risks-credit-request-error'
          },
          npa_credit_card_app_wait_request: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-dm-offer-completed-wait-request'
          },
          npa_credit_card_internal_link: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-modals-internal-bureau-link-button',
            analytics: analytics._getNpaCreditCardFunnel('internalLink')
          },
          npa_credit_card_error: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-dm-retries-show-modal'
          },
          npa_credit_card_modals: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-visible-modal'
          },
          global_action_launcher_uri: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-action-launcher-link-external'
          },
          modal_logout_automatic: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-action-launcher-link-external'
          },
          global_retargeting_send_information_update: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-retargeting-updated'
          },
          global_retargeting_form_submission: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-retargeting'
          },
          global_retargeting_contracted_product: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-go-credit-card-holder'
          },
          global_retargeting_go_next_step: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-retargeting-next-step'
          },
          npa_credit_card_get_device_geolocation: {
            bind: 'card-origination-non-pre-approved-credit-card-mx-get-current-position'
          }
        },
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    }
  };

  const BbvaAnalyticmanagerCardOrigination = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          npa_credit_card_new_model_evaluation: {
            bind: 'newModelEvaluation'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetailsData'
          },
          npa_credit_card_continue_checks_page: {
            bind: 'appStarted'
          },
          npa_credit_card_modal_benefits: {
            bind: 'appStarted'
          },
          npa_credit_card_modals: {
            bind: 'appPageVisit'
          },
          npa_credit_card_error: {
            bind: 'appPageVisitError'
          },
          npa_credit_card_page_visit: {
            bind: 'customValidation'
          },
          npa_credit_card_show_checks: {
            bind: 'customValidation'
          },
          npa_credit_card_otp: {
            bind: 'customValidation'
          },
          npa_credit_card_app_completed: {
            bind: 'appCompleted'
          },
          npa_credit_card_app_completed_rejection: {
            bind: 'appCompleted'
          },
          npa_credit_card_app_completed_rejection_request: {
            bind: 'appCompleted'
          },
          npa_credit_card_app_wait_request: {
            bind: 'appCompleted'
          },
          npa_credit_card_back_to_contract_product_section: {
            bind: 'resetAppStarted'
          }
        },
        out: {
          npa_credit_card_app_page_visit_funnel: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-custom-app-visit-fields',
            analytics: analytics._getNpaCreditCardFunnel('appPageVisit')
          },
          npa_credit_card_app_started: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card-app-started',
            analytics: analytics._getNpaCreditCardFunnel('appStarted')
          },
          npa_credit_card_app_step_offer_page: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-custom-checks-page-fields',
            analytics: analytics._getNpaCreditCardFunnel('appStep2')
          },
          npa_credit_card_app_step_checks_page: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-custom-otp-modal-fields',
            analytics: analytics._getNpaCreditCardFunnel('appStep3')
          },
          npa_credit_card_app_completed_analytics: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card-completed',
            analytics: analytics._getNpaCreditCardFunnel('appCompleted')
          },
          npa_credit_card_app_page_visit: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card-page-visit',
            analytics: analytics._getNpaCreditCardFootprint('appPageVisit')
          },
          npa_credit_card_app_page_visit_error: {
            bind: 'bbva-analyticmanager-card-origination-non-pre-approved-credit-card-page-visit-error',
            analytics: analytics._getNpaCreditCardError('operationError')
          }
        }
      }
    }
  };

  const managerNpaCreditCard = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-non-pre-approved-credit-card-origination',
    familyPath: '@glomo-web-components/bbva-manager-non-pre-approved-credit-card',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'enableFeatureFlag'
          },
          npa_credit_card_holder: {
            bind: 'enableFeatureFlagRedirection'
          }
        },
        out: {
          npa_credit_card_flag_enabled: {
            bind: 'bbva-manager-non-pre-approved-credit-card-origination-flag-enabled'
          },
          npa_credit_card_show_benefits: {
            bind: 'bbva-manager-non-pre-approved-credit-card-origination-show-benefits'
          },
          npa_credit_card_new_model_evaluation: {
            bind: 'bbva-manager-non-pre-approved-credit-card-origination-new-model-evaluation'
          },
          npa_credit_card_holder_navigation: {
            bind: 'credit-card-holder-navigation',
            link: {
              page: 'creditCardHolder',
              cleanUntil: 'npaCreditCard',
              skipHistory: true
            }
          },
          npa_credit_card_holder_navigation_spherica: {
            bind: 'credit-card-holder-spherica-navigation',
            link: {
              page: 'creditCardHolderSpherica',
              cleanUntil: 'npaCreditCard',
              skipHistory: true
            }
          }
        }
      }
    }
  };

  const npaDeviceGeolocation = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-nativeconnector-geolocation',
    familyPath: '@glomo-web-components/bbva-nativeconnector-geolocation',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          npa_credit_card_get_device_geolocation: {
            bind: 'getCurrentPosition'
          }
        },
        out: {
          npa_credit_card_device_geolocation: {
            bind: 'current-position-available'
          }
        }
      }
    }
  };

  const base = {
    hash: 'npa-credit-card',
    currentPage: {
      url: '/npa-credit-card',
      params: [
        'global_user_id'
      ]
    },
    pages,
    template,
    components: [
      managerNpaCreditCard,
      npaCreditCard,
      BbvaAnalyticmanagerCardOrigination
    ]
  };

  if (native) {
    base.components.push(npaDeviceGeolocation);
  }

  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('card-origination-non-pre-approved-credit-card-mx');
  return base;
};