/* eslint-disable no-shadow */
'use strict';

module.exports = config => {
  const {
    getLanguage,
    getLocalCurrency,
    getCurrencyCode,
    glomoOpenDocument,
    pluginSoftoken,
    pluginEtherToken
  } = require('./common/helpers/_utils');
  const { stopLossWidgetComponent } = require('./common/_abandoned_cart.js');
  const { stopLossWidget, stopLossAnalytics } = stopLossWidgetComponent(config, 'creditCardHolder', 'SHOPPING_CART');
  const creditCardHolderAnalytics = require('./analytics/_creditCardHolderSpherica')(config);
  const {
    environmentType,
    native = false,
    nativeIos,
    globalServices: {
      host,
      publicSettingsHost,
      requiredToken = 'tsec',
      publicSettingsId,
      hostGrantingTicket,
      versions: {
        grantingTicket: grantingTicketApiVersion,
        singleSignOnApiVersion
      }
    }
  } = config;

  const cmbConfig = {
    operativeName: 'creditCardHolder',
    productName: 'TDC',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    migrationGenesys: true,
    notGlobalInitConfigurationChannel: true
  };

  const {controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(cmbConfig);
  const localStorage = require('./common/_local-storage');

  const userIdBinding = native ? {native_user_id: {bind: 'userId'}} : {global_login_success: {bind: 'setUserId'}};

  const analyticsConfig = {
    appOnClickStarted: false
  };

  const base = {
    hash: 'credit-card-holder-spherica',
    currentPage: {
      url: '/credit-card-holder-spherica',
      params: [
        'offerId'
      ]
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: 'bbva-core-blue'
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-controller-oc-credit-card-holder-mx',
        tag: 'bbva-controller-oc-credit-card-holder-mx',
        render: 'litElement',
        properties: {
          isNativeIos: nativeIos,
          country: 'mx',
          environmentType,
          host,
          native,
          requiredToken,
          singleSignOnApiVersion,
          hostGrantingTicket,
          grantingTicketApiVersion,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              dashboard_customer_email: {
                bind: 'setContactDetail'
              },
              dashboard_accounts: {
                bind: 'setAccount'
              },
              contract_product_section_offers_parsed: {
                bind: 'offers'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'setOfferDataFromDeeplink'
              },
              received_tdc_send_notification_data: {
                bind: 'offerData'
              },
              dashboard_oc_banner_credit_card_holder_clicked: {
                bind: 'offerData'
              },
              contract_product_section_oc_banner_credit_card_holder_clicked: {
                bind: 'offerData'
              },
              app_info_structure_home_core_collection_navigate: {
                bind: 'setOfferDataFromDashboard'
              },
              appliance_simulator_credit_card_holder_clicked: {
                bind: 'offerData'
              },
              blue_navigate_payload_tdc_offer: {
                bind: 'setOfferDataFromBlue'
              },
              global_financial_overview_details: {
                bind: 'setFinancialOverviewDetails'
              },
              global_storage_get_app_settings_success: {
                bind: 'setAppSettings'
              },
              global_deep_link: {
                bind: 'setDeepLinkKey'
              },
              global_login_success: {
                bind: 'setCustomerId'
              },
              global_softoken_get_token_list_success: {
                bind: 'requestOTP'
              },
              global_softoken_get_token_list_error: {
                bind: 'handleTokenListErrorResponse'
              },
              global_softoken_generate_next_otp_success: {
                bind: 'requestEncryptedOTP'
              },
              global_ether_token_create_client_success: {
                bind: 'createClientSuccess'
              },
              global_ether_token_get_tokens_ids_success: {
                bind: 'setTokenSerialS3'
              },
              global_ether_token_gen_next_otp_success: {
                bind: 'requestEncryptedOTP'
              },
              oc_credit_card_holder_encrypt_otp_successful: {
                bind: 'redirectToLandingWeb'
              },
              oc_credit_card_holder_error_offer_set: {
                bind: 'hideSpinner'
              },
              oc_credit_card_holder_retry_sso: {
                bind: 'requestPostSSO'
              },
              ...userIdBinding
            },
            out: {
              oc_credit_card_holder_set_customer_indicators: {
                bind: 'controller-oc-credit-card-holder-mx-set-customer-indicators-data'
              },
              oc_credit_card_holder_set_customer_email: {
                bind: 'controller-oc-credit-card-holder-mx-set-contact-detail-data'
              },
              oc_credit_card_holder_set_account_user_data: {
                bind: 'controller-oc-credit-card-holder-mx-set-customer-account-data'
              },
              oc_credit_card_holder_set_offer_data: {
                bind: 'controller-oc-credit-card-holder-mx-set-offer-data'
              },
              oc_credit_card_holder_set_features_flags: {
                bind: 'controller-oc-credit-card-holder-mx-set-features-flags'
              },
              oc_credit_card_holder_set_financial_overview_details: {
                bind: 'controller-oc-credit-card-holder-mx-set-financial-overview-details-data'
              },
              global_softoken_get_token_list: {
                bind: 'controller-oc-credit-card-holder-mx-token-list-fetch'
              },
              global_softoken_generate_next_otp: {
                bind: 'controller-oc-credit-card-holder-mx-next-otp-generate'
              },
              global_ether_token_create_client: {
                bind: 'controller-oc-credit-card-holder-mx-create-client'
              },
              global_ether_token_get_tokens_ids: {
                bind: 'controller-oc-credit-card-holder-mx-tokens-ids-fetch'
              },
              global_ether_token_custom_plugin_call: {
                bind: 'controller-oc-credit-card-holder-mx-ether-token-custom-call'
              },
              oc_credit_card_holder_encrypt_otp: {
                bind: 'controller-oc-credit-card-holder-mx-encrypted-otp-request'
              },
              global_action_launcher_uri: {
                bind: 'controller-oc-credit-card-holder-mx-uri-open'
              },
              oc_credit_card_holder_customer_set: {
                bind: 'controller-oc-credit-card-holder-mx-customer-set'
              },
              oc_credit_card_holder_init_from_landing_web: {
                bind: 'controller-oc-credit-card-holder-mx-init'
              },
              oc_credit_card_holder_dashboard_navigate: {
                bind: 'controller-oc-credit-card-holder-mx-dashboard-navigate',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_credit_card_holder_sso_service_error: {
                bind: 'controller-oc-credit-card-holder-mx-sso-error'
              },
              oc_credit_card_holder_st_enrollment_navigate: {
                bind: 'controller-oc-credit-card-holder-mx-st-enrollment-navigate',
                link: {
                  page: 'stEnrollment'
                }
              },
              oc_credit_card_holder_set_card_url_information: {
                bind: 'controller-oc-credit-card-holder-mx-set-card-url-information'
              }
            },
            params: {
              globalUser: 'global_user'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'card-origination-oc-credit-card-holder-mx',
        familyPath: '@glomo-web-components/card-origination-oc-credit-card-holder-mx',
        render: 'litElement',
        properties: {
          host,
          publicSettingsHost: publicSettingsHost,
          requiredToken,
          native,
          currencyCode: getCurrencyCode(),
          localCurrency: getLocalCurrency(),
          language: getLanguage(),
          iOSFixedHeader: nativeIos,
          publicSettingsId,
          productSpecialWords: ['BBVA', 'IPN', 'UNAM'],
          validNationalDocuments: ['INE', 'I', 'PASSPORT', 'P', 'MILITARY', 'C', 'M'],
          validRfcIds: ['RFC', 'rfc'],
          maxAttempts: 2,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'nativeBackNavigation'
              },
              oc_credit_card_holder_set_features_flags: {
                bind: 'featureFlags'
              },
              oc_credit_card_holder_set_customer_indicators: {
                bind: 'customerIndicators'
              },
              oc_credit_card_holder_set_customer_email: {
                bind: 'customerEmail'
              },
              oc_credit_card_holder_set_account_user_data: {
                bind: 'customerAccount'
              },
              oc_credit_card_holder_set_offer_data: {
                bind: 'offerData'
              },
              oc_credit_card_holder_set_financial_overview_details: {
                bind: 'financialOverviewDetails'
              },
              oc_credit_card_holder_init_from_landing_web: {
                bind: 'initFromLandingWeb'
              },
              sign_modal_open: {
                bind: 'hiddenMultiStep'
              },
              sign_modal_cancelled_widgetErrorHandler: {
                bind: 'showMultiStep'
              },
              sign_modal_close_reset: {
                bind: 'showMultiStep'
              },
              sign_modal_close: {
                bind: 'showMultiStep'
              },
              credit_card_holder_stop_loss_modal_header_leave: {
                bind: 'stopLossLeave'
              },
              credit_card_holder_stop_loss_modal_footer_leave: {
                bind: 'stopLossLeave'
              },
              credit_card_holder_stop_loss_modal_offer_return: {
                bind: 'stopLossReturn'
              },
              global_call_me_back_show_secondary_button: {
                bind: 'showCallMeBack'
              },
              credit_card_holder__call_me_back_show_sticky_button: {
                bind: 'stickyMessage'
              },
              update_national_id_success_navigate_to_previous_page: {
                bind: 'userComesFromIne'
              },
              oc_credit_card_holder_exit: {
                bind: 'reset'
              },
              npa_credit_card_holder_navigation_spherica: {
                bind: 'offerData'
              },
              oc_credit_card_holder_set_card_url_information: {
                bind: 'cardInformationUrl'
              }
            },
            out: {
              oc_credit_card_holder_exit: {
                bind: 'card-origination-oc-credit-card-holder-mx-exit',
                backStep: true,
                skipHistory: true
              },
              oc_credit_card_holder_navigate_to_branch_locator: {
                bind: 'oc-credit-card-holder-mx-modals-navigate-atm-locator',
                link: {
                  page: 'atmLocator',
                  skipHistory: true
                }
              },
              oc_credit_card_holder_receipt_template: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-set-receipt-template'
              },
              oc_credit_card_holder_receipt_data: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-set-receipt-data'
              },
              oc_credit_card_holder_share_receipt: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-share-receipt'
              },
              oc_credit_card_holder_update_national_id: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-go-to-ine',
                link: {
                  page: 'updateNationalId'
                }
              },
              global_retargeting_contracted_product: {
                bind: 'oc-credit-card-holder-mx-receipt-page-retargeting-contracted-product'
              },
              global_retargeting_send_information_update: {
                bind: 'oc-credit-card-holder-mx-modals-retargeting-send-information-update'
              },
              global_retargeting_initialize: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-retargeting-initialize'
              },
              global_retargeting_form_submission: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-retargeting-form-submission'
              },
              global_retargeting_go_next_step: {
                bind: 'oc-credit-card-holder-mx-multistep-retargeting-go-next-step'
              },
              global_retargeting_payment_type: {
                bind: 'payment-settings-step-retargeting-payment-type'
              },
              global_retargeting_pay_date: {
                bind: 'delivery-address-step-retargeting-pay-date'
              },
              global_retargeting_amount_data_changed: {
                bind: 'oc-credit-card-holder-mx-multistep-retargeting-amount-data-changed'
              },
              global_open_document_base64: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-open-document-by-base64'
              },
              oc_credit_card_holder_signature_modal: {
                bind: 'hidden'
              },
              set_benefits_data: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-offer-benefits-success'
              },
              credit_card_holder_get_offer: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-fire-app-page-visit'
              },
              oc_credit_card_holder_analytics_view_details: {
                bind: 'oc-credit-card-holder-mx-offer-page-modal-sub-benefits-started',
                analytics: creditCardHolderAnalytics.appBenefitsDetail()
              },
              oc_credit_card_holder_analytics_view_offer: {
                bind: 'oc-credit-card-holder-mx-offer-page-visible-multi'
              },
              oc_credit_card_holder_analytics_step_two_offer_information: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-offer-successful'
              },
              oc_credit_card_holder_analytics_step_payment_settings: {
                bind: 'oc-credit-card-holder-mx-multistep-app-offer-information-step'
              },
              oc_credit_card_holder_analytics_step_delivery_address: {
                bind: 'oc-credit-card-holder-mx-multistep-app-payment-settings-step'
              },
              oc_credit_card_holder_analytics_step_terms_and_conditions: {
                bind: 'oc-credit-card-holder-mx-multistep-app-delivery-address-step'
              },
              oc_credit_card_holder_analytics_step_summary: {
                bind: 'oc-credit-card-holder-mx-multistep-app-terms-and-conditions-step'
              },
              oc_credit_card_holder_analytics_app_completed_success: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-open-receipt'
              },
              oc_credit_card_holder_analytics_app_rfc: {
                bind: 'oc-credit-card-holder-mx-multistep-customer-fiscal-data-step-available'
              },
              oc_credit_card_holder_analytics_footprint_direct_debit: {
                bind: 'payment-settings-step-fire-payment-direct-debit',
                analytics: creditCardHolderAnalytics.appPaymentDirectDebit()
              },
              oc_credit_card_holder_analytics_footprint_card_delivery: {
                bind: 'delivery-address-step-fire-delivery-address',
                analytics: creditCardHolderAnalytics.appCardDelivery()
              },
              oc_credit_card_holder_analytics_footprint_payment_deadline: {
                bind: 'payment-settings-step-fire-interaction-link-payment-deadline'
              },
              oc_credit_card_holder_errors: {
                bind: 'cards-api-dm-create-error'
              },
              oc_credit_card_holder_analytics_footprint_open_document: {
                bind: 'terms-and-conditions-step-open-document'
              },
              oc_credit_card_holder_see_document: {
                bind: 'oc-credit-card-holder-mx-receipt-page-fire-success-view-documents'
              },
              oc_credit_card_holder_share_document: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-fire-success-page-share'
              },
              oc_credit_card_holder_retry_error: {
                bind: 'api-dm-error'
              },
              oc_credit_card_holder_rfc_error: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-service-error-response'
              },
              credit_card_holder__call_me_back_initialize: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-call-me-back-initialize'
              },
              credit_card_holder__call_me_back_init_sticky_configuration: {
                bind: 'offer-information-step-call-me-back-init-sticky-configuration'
              },
              credit_card_holder__call_me_back_reset_step: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-call-me-back-reset-step'
              },
              credit_card_holder_stop_loss_modal_open: {
                bind: 'card-origination-oc-credit-card-holder-mx-stop-loss-modal-open'
              },
              credit_card_holder_stop_loss_modal_title_set: {
                bind: 'card-origination-oc-credit-card-holder-mx-stop-loss-title-set'
              },
              credit_card_holder_stop_loss_modal_offer_id_set: {
                bind: 'card-origination-oc-credit-card-holder-mx-dm-stop-loss-offer-id-set'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-nativeconnector-cipher',
        tag: 'bbva-nativeconnector-cipher',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              oc_credit_card_holder_encrypt_otp: {
                bind: 'rsaEncrypt'
              }
            },
            out: {
              oc_credit_card_holder_encrypt_otp_successful: {
                bind: 'rsa-encrypt-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt-spherica',
        properties: {
          country: 'mx',
          language: getLanguage(),
          localCurrency: getLocalCurrency(),
          infoImage: './images/spherica/darkInfoSpherica.svg',
          dataHourFormat: 'D MMM YYYY, h:mm [h]',
          sharedReceiptStyles: {
            sectionHeaderAmount: {
              'font-size': '2.5rem',
              'font-weight': '350'
            },
            receiptTitle: {
              'line-height': '2rem',
              'font-size': '1.5rem',
              'font-weight': '500',
              'word-spacing': '0.125rem',
              'letter-spacing': '0.031rem'
            },
            receipt: {
              'width': '23.438rem',
              'position': 'absolute',
              'padding': '1rem',
              'background-color': 'var(--bbva-spherica-grey-200, #F7F8F8)',
              'color': 'var(--bbva-spherica-midnight-blue, #070E46)'
            },
            info: {
              'padding': '1rem',
              'margin': '0.5rem 1rem 0 0',
              'background-color': 'var(--bbva-spherica-blue-light, #D6E9F8)',
              'font-weight': '350',
              'border-radius': '1rem',
              'display': 'flex',
              'align-items': 'flex-start'
            }
          },
          cellsConnections: {
            in: {
              oc_credit_card_holder_receipt_template: {
                bind: 'addDynamicTemplate'
              },
              oc_credit_card_holder_receipt_data: {
                bind: 'result'
              },
              oc_credit_card_holder_share_receipt: {
                bind: 'captureReceipt'
              }
            },
            out: {
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-card-origination-oc-credit-card-holder-mx',
        familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
        render: 'litElement',
        properties: {
          currentStates: analyticsConfig,
          cellsConnections: {
            in: {
              set_benefits_data: {
                bind: 'setBenefitsData'
              },
              oc_credit_card_holder_set_financial_overview_details: {
                bind: 'setTypeOfClient'
              },
              credit_card_holder_get_offer: {
                bind: 'fireVisit'
              },
              oc_credit_card_holder_analytics_view_details: {
                bind: 'fireAppStartedViewDetails'
              },
              oc_credit_card_holder_analytics_view_offer: {
                bind: 'fireAppStartedViewOffer'
              },
              oc_credit_card_holder_analytics_step_two_offer_information: {
                bind: 'fireStepInformation'
              },
              oc_credit_card_holder_analytics_step_payment_settings: {
                bind: 'fireStepSettings'
              },
              oc_credit_card_holder_analytics_step_delivery_address: {
                bind: 'fireStepAddress'
              },
              oc_credit_card_holder_analytics_step_terms_and_conditions: {
                bind: 'fireStepTermsAndConditions'
              },
              oc_credit_card_holder_analytics_step_summary: {
                bind: 'fireStepSummary'
              },
              oc_credit_card_holder_analytics_app_completed_success: {
                bind: 'fireAppCompletSuccess'
              },
              oc_credit_card_holder_analytics_app_rfc: {
                bind: 'fireAppRfc'
              },
              oc_credit_card_holder_analytics_footprint_open_document: {
                bind: 'fireOpenDocument'
              },
              oc_credit_card_holder_see_document: {
                bind: 'fireSeeDocument'
              },
              oc_credit_card_holder_share_document: {
                bind: 'fireShareDocument'
              },
              sign_modal_open: {
                bind: 'openSignatureModal'
              },
              sign_modal_cancelled: {
                bind: 'closeSignatureModal'
              },
              sign_modal_close: {
                bind: 'closeSignatureModal'
              },
              widget_signature_handle_required_first_step: {
                bind: 'fireOtp'
              },
              oc_credit_card_holder_errors: {
                bind: 'fireAppCompletSuccess'
              },
              oc_credit_card_holder_retry_error: {
                bind: 'fireRetryError'
              },
              oc_credit_card_holder_rfc_error: {
                bind: 'fireRfcError'
              },
              oc_credit_card_holder_init_from_landing_web: {
                bind: 'initFromLandingWeb'
              },
              oc_credit_card_holder_analytics_footprint_payment_deadline: {
                bind: 'firePaymentDeadline'
              },
              oc_credit_card_holder_exit: {
                bind: 'reset'
              }
            },
            out: {
              oc_credit_card_holder_app_page_visit_analytics: {
                bind: 'analytics-page-visit',
                analytics: creditCardHolderAnalytics.appPageVisit()
              },
              oc_credit_card_holder_app_started_analytics: {
                bind: 'analytics-app-started',
                analytics: creditCardHolderAnalytics.appStarted()
              },
              oc_credit_card_holder_app_information_step_analytics: {
                bind: 'analytics-app-step-information',
                analytics: creditCardHolderAnalytics.getStepAnalytic('stepInformation')
              },
              oc_credit_card_holder_app_payment_settings_step_analytics: {
                bind: 'analytics-app-step-settings',
                analytics: creditCardHolderAnalytics.getStepAnalytic('stepSettings')
              },
              oc_credit_card_holder_app_domiciliation_step_analytics: {
                bind: 'analytics-app-step-address',
                analytics: creditCardHolderAnalytics.getStepAnalytic('stepAddress')
              },
              oc_credit_card_holder_app_terms_and_conditions_step_analytics: {
                bind: 'analytics-app-step-terms-and-conditions',
                analytics: creditCardHolderAnalytics.getStepAnalytic('stepTerms')
              },
              oc_credit_card_holder_app_summary_analytics: {
                bind: 'analytics-app-step-summary',
                analytics: creditCardHolderAnalytics.getStepAnalytic('appSummary')
              },
              oc_credit_card_holder_analytics_app_completed: {
                bind: 'analytics-app-completed',
                analytics: creditCardHolderAnalytics.appCompletedSuccess()
              },
              oc_credit_card_holder__footprint_analytics_open_document: {
                bind: 'analytics-footprint-open-document',
                analytics: creditCardHolderAnalytics.apptermsPdf()
              },
              oc_credit_card_holder_analytics_view_otp: {
                bind: 'analytics-otp-view',
                analytics: creditCardHolderAnalytics.appOtp()
              },
              oc_credit_card_holder_documents: {
                bind: 'analytics-footprint-raw-buttons',
                analytics: creditCardHolderAnalytics.appDocuments()
              },
              oc_credit_card_holder_retry_error_modal: {
                bind: 'analytics-retry-error',
                analytics: creditCardHolderAnalytics.appOperationNotPerfomedError()
              },
              oc_credit_card_holder_rfc: {
                bind: 'analytics-app-rfc',
                analytics: creditCardHolderAnalytics.appRfcValidation()
              },
              oc_credit_card_holder_rfc_error_modal: {
                bind: 'analytics-rfc-error',
                analytics: creditCardHolderAnalytics.appRfcValidationError()
              },
              oc_credit_card_holder_deadline_segmennt_profile: {
                bind: 'analytics-footprint-payment-deadline',
                analytics: creditCardHolderAnalytics.appPaymentDeadline()
              },
              oc_credit_card_holder_signature_modal: {
                bind: 'signature-modal-set'
              }
            }
          }
        }
      }
    ]
  };

  base.components.push(controllerCmb, stopLossWidget, stopLossAnalytics);

  const signConnector = require('./common/_widget-sign-connector.js')(config)(base);
  signConnector('card-origination-oc-credit-card-holder-mx');

  localStorage.addOutStorageChannels(base.components, [ 'call_me_back' ], config);

  if (native) {
    base.components.push(pluginSoftoken(config), pluginEtherToken(config));
    const openDocument = glomoOpenDocument(config);
    if (openDocument) {
      base.components.push(openDocument);
    }
  }
  return base;
};
