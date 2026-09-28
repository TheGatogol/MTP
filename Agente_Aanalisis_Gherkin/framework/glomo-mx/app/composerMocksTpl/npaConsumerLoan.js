'use strict';
module.exports = config => {
  const pageName = 'npaConsumerLoan';
  const { getLanguage } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_npaConsumerLoan')();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customersV1,
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

  const npaConsumerLoan = {
    zone: 'app__main',
    type: 'DM',
    tag: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx',
    familyPath: '@glomo-web-components/loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx',
    render: 'litElement',
    properties: {
      native,
      host,
      campaignsBenefitsApiVersion: campaigns,
      campaignsOffersApiVersion: campaigns,
      customersLocalApiVersion: customersV1,
      customersGetApiVersion: customersV1,
      customersPostApiVersion: customersV1,
      risksCreditRequestApiVersion: creditRequestV2,
      risksDeviceAssessmentApiVersion: riskV1,
      requiredToken,
      iOSFixedHeader: nativeIos,
      missingPersonalDataLabels: [
        'CURP',
        'Birth Date',
        'Gender',
        'Nationality',
        'Marital Satus',
        'Country'
      ],
      digitalMissingDocuments: ['IDENTITY', 'PROOF_OF_ADDRESS'],
      statusValidateDigitalFile: 'VALID',
      termTypeId: 'BD-MX-AA-AUTBUR-001',
      termTypeIdHistory: 'BD-MX-AA-HISTLB-001',
      referenceNumber: 'CONSUMO',
      termsAcceptanceMessage: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-terms-acceptance-message',
      originId: 'NP',
      acceptanceMethod: 'CHECK',
      language: getLanguage(),
      country: 'MX',
      operationChannelId: 'MGT',
      processCode: 'MEM',
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
      cellsConnections: {
        in: {
          __bridge_page_npaConsumerLoan: {
            bind: 'init'
          },
          global_user_id: {
            bind: 'customerId'
          },
          sign_modal_open: {
            bind: 'signOtpOpen'
          },
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          },
          npa_consumer_loan_dynamic_benefits: {
            bind: 'showBenefits'
          },
          npa_consumer_loan_device_assessment: {
            bind: 'flagEnabled'
          },
          global_device_get_device_model_success: {
            bind: 'deviceModel'
          },
          global_device_get_manufacturer_success: {
            bind: 'deviceManufacturer'
          },
          global_device_get_network_type_success: {
            bind: 'deviceNetwork'
          },
          npa_consumer_loan_device_geolocation: {
            bind: 'geolocation'
          },
          global_device_get_device_platform_success: {
            bind: 'platformData'
          },
          sign_modal_cancelled: {
            bind: 'closeModalOTP'
          },
          cells_to_native_modal_closed: {
            bind: 'closeModalOTP'
          }
        },
        out: {
          npa_consumer_loan_get_device_geolocation: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-get-current-position'
          },
          npa_consumer_loan_page_visit: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-visible-offer-page',
            analytics: analytics.getNpaConsumerLoanFunnel('appPageVisit')
          },
          npa_consumer_loan_app_started: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-visible-checks',
            analytics: analytics.getNpaConsumerLoanFunnel('appStarted')
          },
          npa_consumer_loan_app_step_two: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-visible-checks',
            analytics: analytics.getNpaConsumerLoanFunnel('appStep2')
          },
          npa_consumer_loan_app_step_three: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-dm-show-loader',
            analytics: analytics.getNpaConsumerLoanFunnel('appStep3')
          },
          npa_consumer_loan_app_completed_update_profile: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-dm-validate-digital-file-documents-incomplete'
          },
          npa_consumer_loan_app_completed_rejection: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-dm-credit-request-error'
          },
          npa_consumer_loan_app_completed_waiting: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-dm-wait-request'
          },
          npa_consumer_loan_app_completed_success: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-visible-success-page'
          },
          npa_consumer_loan_modals: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-visible-modal'
          },
          npa_consumer_loan_otp: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-open-otp',
            analytics: analytics.getNpaConsumerLoanFootprint('appPageVisitOtp')
          },
          npa_consumer_loan_operation_error: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-dm-retries-show-modal'
          },
          global_action_launcher_uri: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-action-launcher-link-external'
          },
          modal_logout_automatic: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-action-launcher-link-external'
          },
          npa_consumer_loan_back_to_contract_product_section: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-close-operative',
            backStep: true
          },
          npa_credit_card_update_profile: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-go-profile',
            link: {
              page: 'profile',
              cleanUntil: 'npaConsumerLoan',
              skipHistory: true
            }
          },
          npa_oc_loan_offer: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-go-oc-loan-offer'
          },
          global_retargeting_reset_step: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-init-page'
          },
          global_retargeting_initialize: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-init-page'
          },
          global_retargeting_form_submission: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-retargeting'
          },
          global_retargeting_go_next_step: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-retargeting-next-step'
          },
          global_retargeting_send_information_update: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-retargeting-updated'
          },
          global_retargeting_contracted_product: {
            bind: 'loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx-go-oc-loan-offer'
          }
        },
        params: {
          offerId: 'offerId',
          productId: 'productId'
        }
      }
    }
  };

  const managerNpaConsumerLoan = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-non-pre-approved-consumer-loan-mx',
    familyPath: '@glomo-web-components/bbva-manager-non-pre-approved-consumer-loan',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'enableFeatureFlag'
          },
          npa_oc_loan_offer: {
            bind: 'navigateToOcLoanOffer'
          }
        },
        out: {
          npa_consumer_loan_device_assessment: {
            bind: 'bbva-manager-non-pre-approved-consumer-loan-mx-flag-enabled'
          },
          npa_consumer_loan_dynamic_benefits: {
            bind: 'bbva-manager-non-pre-approved-consumer-loan-mx-show-benefits'
          },
          npa_consumer_loan_oc_loan_offer: {
            bind: 'bbva-manager-non-pre-approved-consumer-loan-mx-oc-loan-offer',
            link: {
              page: 'ocLoanOfferPage',
              params: {
                offerId: 'offerId',
                continue: 'continue'
              }
            }
          },
          npa_consumer_loan_oc_loan_offer_page_spherica: {
            bind: 'bbva-manager-non-pre-approved-consumer-loan-mx-oc-loan-offer-spherica',
            link: {
              page: 'ocLoanOfferPageSpherica',
              params: {
                offerId: 'offerId',
                continue: 'continue'
              }
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
          npa_consumer_loan_get_device_geolocation: {
            bind: 'getCurrentPosition'
          }
        },
        out: {
          npa_consumer_loan_device_geolocation: {
            bind: 'current-position-available'
          }
        }
      }
    }
  };

  const bbvaAnalyticmanagerLoanAndMortgage = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-non-pre-approved-consumer-loan',
    familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          npa_consumer_loan_app_completed_update_profile: {
            bind: 'appCompleted'
          },
          npa_consumer_loan_app_completed_rejection: {
            bind: 'appCompleted'
          },
          npa_consumer_loan_app_completed_waiting: {
            bind: 'appCompleted'
          },
          npa_consumer_loan_app_completed_success: {
            bind: 'appCompleted'
          },
          npa_consumer_loan_modals: {
            bind: 'appPageVisit'
          },
          npa_consumer_loan_operation_error: {
            bind: 'operationError'
          }
        },
        out: {
          npa_consumer_loan_app_completed: {
            bind: 'bbva-analyticmanager-non-pre-approved-consumer-loan-completed',
            analytics: analytics.getNpaConsumerLoanFunnel('appCompleted')
          },
          npa_consumer_loan_app_page_visit: {
            bind: 'bbva-analyticmanager-non-pre-approved-consumer-loan-page-visit',
            analytics: analytics.getNpaConsumerLoanFootprint('appPageVisit')
          },
          npa_consumer_loan_error: {
            bind: 'bbva-analyticmanager-non-pre-approved-consumer-loan-operation-error',
            analytics: analytics.getNpaConsumerLoanError('operationError')
          }
        }
      }
    }
  };

  const base = {
    hash: 'npa-consumer-loan',
    currentPage: {
      url: '/npa-consumer-loan',
      params: [
        'global_user_id'
      ]
    },
    pages,
    template,
    components: [
      managerNpaConsumerLoan,
      npaConsumerLoan,
      bbvaAnalyticmanagerLoanAndMortgage
    ]
  };

  if (native) {
    base.components.push(npaDeviceGeolocation);
  }

  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('loan-and-mortgage-origination-non-pre-approved-consumer-loan-mx');
  return base;
};