module.exports = (CONFIG) => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { sustainability, sustainabilityV3, cardsV1, customersV1, customerContactDetailsV1, loyalty }
    },
    sustainability: { atmos },
    environment,
    aemHost,
    native = false,
    nativeIos = false
  } = CONFIG;
  const {
    getCurrencyCode,
    getLocalCurrency,
    getLanguage
  } = require('./common/helpers/_utils');
  const pageName = 'sustainabilityCarbonFootprintOffset';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_sustainabilityCarbonFootprintOffset')();
  const base = {
    hash: 'sustainability-carbon-footprint-offset',
    currentPage: {
      url: '/sustainability-carbon-footprint-offset'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        className: nativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: nativeIos,
        headerFixed: true,
        disableEdgeSwipe: true,
        disableScrollLock: true
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'sustainability-carbon-footprint-offset',
        familyPath: '@bbva-web-components-widgets/sustainability-carbon-footprint-offset',
        render: 'litElement',
        properties: {
          aemHost,
          aemPath: atmos.forestryImagesPath,
          contentFragmentPath: atmos.forestryFaqsUrl,
          currencyCode: getCurrencyCode(),
          country: 'mx',
          environment,
          host,
          iOSFixedHeader: nativeIos,
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          native,
          nativeIos,
          physicalSupportDescription: 'DIGITAL',
          requiredToken,
          rewardsConversionFactor: 0.1,
          showHelpFaqs: true,
          versionCardsApiDm: cardsV1,
          versionCustomersApiDm: customersV1,
          versionCustomerContactDetailsApiDm: customerContactDetailsV1,
          versionLoyaltyApiDm: loyalty,
          versionSustainabilityApiDm: sustainability,
          versionSustainabilityMetricsApiDm: sustainabilityV3,
          cellsConnections: {
            in: {
              sustainability_carbon_footprint_offset_public_key: {
                bind: 'publicKey'
              },
              widget_signature_handle_required_first_step: {
                bind: 'otpFirstStep'
              },
              sustainability_carbon_footprint_offset_rsa_encrypt_successful: {
                bind: 'cvvGenerated'
              },
              sustainability_carbon_footprint_offset_set_local_custom_properties: {
                bind: 'localCustomProperties'
              }
            },
            out: {
              sustainability_carbon_footprint_offset_generate_public_key: {
                bind: 'sustainability-carbon-footprint-offset-cvv-handler-native-generate-pub-keys'
              },
              sustainability_carbon_footprint_offset_request_cvv_decypher: {
                bind: 'sustainability-carbon-footprint-offset-request-cvv-decypher'
              },
              sustainability_carbon_footprint_offset_navigation_reward: {
                bind: 'sustainability-carbon-footprint-offset-modal-success-payment-navigation-rewards-page',
                link: {
                  page: 'reward'
                }
              },
              sustainability_carbon_footprint_offset_go_back: {
                bind: 'sustainability-carbon-footprint-offset-go-back',
                backStep: true
              },
              sustainability_carbon_footprint_offset_generate_receipt: {
                bind: 'sustainability-carbon-footprint-share-receipt'
              },
              sustainability_carbon_footprint_offset_share_receipt_data: {
                bind: 'sustainability-carbon-footprint-receipt-data'
              },
              sustainability_carbon_footprint_offset_contribute_to_forestry_projects_click: {
                bind: 'sustainability-carbon-footprint-offset-contribute-to-forestry-projects-click-analytic'
              },
              sustainability_carbon_footprint_offset_select_project_to_contribute: {
                bind: 'sustainability-carbon-footprint-offset-select-project-analytic'
              },
              sustainability_carbon_footprint_offset_send_app_started: {
                bind: 'sustainability-carbon-footprint-offset-send-app-started-analytic',
                analytics: analytics.appStarted
              },
              sustainability_carbon_footprint_offset_send_app_step: {
                bind: 'sustainability-carbon-footprint-offset-send-app-step-analytic'
              },
              sustainability_carbon_footprint_offset_send_app_completed: {
                bind: 'sustainability-carbon-footprint-offset-send-app-completed-analytic'
              },
              sustainability_carbon_footprint_offset_send_forestry_projects: {
                bind: 'sustainability-carbon-footprint-offset-send-forestry-projects-analytic',
                analytics: analytics.footprintForestryProjects
              },
              sustainability_carbon_footprint_offset_send_project_list: {
                bind: 'sustainability-carbon-footprint-offset-send-project-list-analytic',
                analytics: analytics.footprintProjectList
              },
              sustainability_carbon_footprint_offset_send_project_detail: {
                bind: 'sustainability-carbon-footprint-offset-send-project-detail-analytic',
                analytics: analytics.footprintProjectDetail
              },
              sustainability_carbon_footprint_offset_send_bbva_points: {
                bind: 'sustainability-carbon-footprint-offset-send-bbva-points-analytic',
                analytics: analytics.footprintBBVAPoints
              },
              sustainability_carbon_footprint_offset_send_thanks_for_contribute: {
                bind: 'sustainability-carbon-footprint-offset-send-thanks-for-contribute-analytic',
                analytics: analytics.footprintThanksForContribute
              },
              sustainability_carbon_footprint_offset_send_contributions_list: {
                bind: 'sustainability-carbon-footprint-offset-send-contributions-list-analytic',
                analytics: analytics.footprintContributionsList
              },
              sustainability_carbon_footprint_offset_send_contribution_detail: {
                bind: 'sustainability-carbon-footprint-offset-send-contribution-detail-analytic',
                analytics: analytics.footprintContributionDetail
              },
              sustainability_carbon_footprint_offset_send_your_emissions: {
                bind: 'sustainability-carbon-footprint-offset-send-your-emissions-analytic',
                analytics: analytics.footprintYourEmissions
              },
              sustainability_carbon_footprint_offset_send_sustainability_detail: {
                bind: 'sustainability-carbon-footprint-offset-send-sustainability-detail-analytic',
                analytics: analytics.footprintSustainabilityDetail
              },
              sustainability_carbon_footprint_offset_send_error_digital_card: {
                bind: 'sustainability-carbon-footprint-offset-send-error-digital-card-analytic',
                analytics: analytics.errorRequiredActiveDigitalCard
              },
              sustainability_carbon_footprint_offset_send_error_ocurred: {
                bind: 'sustainability-carbon-footprint-metrics-retry',
                analytics: analytics.errorOcurred
              },
              sustainability_carbon_footprint_offset_send_error_payment: {
                bind: 'sustainability-carbon-footprint-offset-send-error-payment-analytic',
                analytics: analytics.errorPayment
              },
              sustainability_carbon_footprint_offset_send_insufficient_balance: {
                bind: 'sustainability-carbon-footprint-offset-send-insuficcient-balance-analytic',
                analytics: analytics.errorInsufficientBalance
              },
              sustainability_carbon_footprint_offset_send_app_step_otp_analytic: {
                bind: 'sustainability-carbon-footprint-offset-analytics-app-step-otp',
                analytics: analytics.appStepOTP
              },
              sustainability_carbon_footprint_offset_navigate_to_carbon_footprint: {
                bind: 'sustainability-carbon-footprint-offset-navigate-to-carbon-footprint',
                link: {
                  page: 'sustainability'
                }
              },
              dashboard_refresh_financial_overview: {
                bind: 'request-financial-overview-refresh'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-carbon-footprint-offset-mx',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-controller-carbon-footprint-offset-mx',
        properties: {
          pointsRedemptionsSimulateErrorMessage: '00000140#ERROR DE SIMULACION PTS',
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'setRSAPublicKey'
              },
              global_financial_overview_details: {
                bind: 'setLocalCustomProperties'
              },
              sustainability_carbon_footprint_offset_pub_key_generated_success: {
                bind: 'publicKey'
              },
              sustainability_carbon_footprint_offset_requested_decrypt_success: {
                bind: 'cvvDecypherSuccess'
              }
            },
            out: {
              sustainability_carbon_footprint_offset_public_key: {
                bind: 'bbva-controller-carbon-footprint-offset-mx-set-public-key'
              },
              sustainability_carbon_footprint_offset_rsa_encrypt: {
                bind: 'bbva-controller-carbon-footprint-offset-mx-rsa-encrypt'
              },
              sustainability_carbon_footprint_offset_set_local_custom_properties: {
                bind: 'bbva-controller-carbon-footprint-offset-mx-set-local-custom-properties'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          country: 'mx',
          cellsConnections: {
            in: {
              sustainability_carbon_footprint_offset_share_receipt_data: {
                bind: 'setProperties'
              },
              sustainability_carbon_footprint_offset_generate_receipt: {
                bind: 'captureReceipt'
              }
            },
            out: {
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              }
            }
          }
        },
        propertiesSpherica: {
          country: 'mxGlobal'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-sustainability-carbon-footprint-offset',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-analyticmanager-sustainability',
        properties: {
          cellsConnections: {
            in: {
              sustainability_carbon_footprint_offset_contribute_to_forestry_projects_click: {
                bind: 'fireAppOnClickStart'
              },
              sustainability_carbon_footprint_offset_select_project_to_contribute: {
                bind: 'firePageVisit'
              },
              sustainability_carbon_footprint_offset_send_app_step: {
                bind: 'analyticAppStep'
              },
              sustainability_carbon_footprint_offset_send_app_completed: {
                bind: 'analyticAppCompleted'
              }
            },
            out: {
              sustainability_carbon_footprint_offset_contribute_to_forestry_projects_click_analytic: {
                bind: 'analytics-app-on-click-start',
                analytics: analytics.appOnClickStart
              },
              sustainability_carbon_footprint_offset_select_project_to_contribute_analytic: {
                bind: 'analytics-page-visit',
                analytics: analytics.appPageVisit
              },
              sustainability_carbon_footprint_offset_send_app_step_aportation_analytic: {
                bind: 'bbva-analyticmanager-sustainability-carbon-footprint-offset-analytics-app-step-aportation',
                analytics: analytics.appStepAportation
              },
              sustainability_carbon_footprint_offset_send_app_step_payment_method_analytic: {
                bind: 'bbva-analyticmanager-sustainability-carbon-footprint-offset-analytics-app-step-payment-method',
                analytics: analytics.appStepPaymentMethod
              },
              sustainability_carbon_footprint_offset_send_app_step_summary_analytic: {
                bind: 'bbva-analyticmanager-sustainability-carbon-footprint-offset-analytics-app-step-summary',
                analytics: analytics.appStepSummary
              },
              sustainability_carbon_footprint_offset_send_app_completed_analytic: {
                bind: 'bbva-analyticmanager-sustainability-carbon-footprint-offset-analytics-app-completed',
                analytics: analytics.appCompleted
              }
            }
          }
        }
      }
    ]
  };
  if (native) {
    base.components.push({
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-nativeconnector-cipher',
      familyPath: '@glomo-web-components/bbva-nativeconnector-cipher',
      render: 'litElement',
      properties: {
        isNativeIos: nativeIos,
        cellsConnections: {
          in: {
            sustainability_carbon_footprint_offset_generate_public_key: {
              bind: 'generateKeyPair'
            },
            sustainability_carbon_footprint_offset_request_cvv_decypher: {
              bind: 'pinCipherDecrypt'
            },
            sustainability_carbon_footprint_offset_rsa_encrypt: {
              bind: 'rsaEncrypt'
            }
          },
          out: {
            sustainability_carbon_footprint_offset_pub_key_generated_success: {
              bind: 'pin-cipher-public-key-modulus-success'
            },
            sustainability_carbon_footprint_offset_pub_key_generated_error: {
              bind: 'pin-cipher-public-key-modulus-error'
            },
            sustainability_carbon_footprint_offset_requested_decrypt_success: {
              bind: 'pin-cipher-decrypt-success'
            },
            sustainability_carbon_footprint_offset_requested_decrypt_error: {
              bind: 'pin-cipher-public-key-modulus-error'
            },
            sustainability_carbon_footprint_offset_rsa_encrypt_successful: {
              bind: 'rsa-encrypt-success'
            },
            sustainability_carbon_footprint_offset_rsa_encrypt_error: {
              bind: 'rsa-encrypt-error'
            }
          }
        }
      }
    });
  }
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('sustainability-carbon-footprint-offset');
  return sphericaPageUtils.spherize(base);
};
