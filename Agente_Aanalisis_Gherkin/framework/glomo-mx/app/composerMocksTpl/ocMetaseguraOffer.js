/* eslint-disable max-statements */
'use strict';

module.exports = CONFIG => {
  const { createPrefixFromPageName, useNames, createSpinner, glomoOpenDocument, SPINNERSPHERICA: getSpinnerSpherica, setPropertiesSpherica } = require('./common/helpers/_utils');
  const pageName = 'ocMetaseguraOffer';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getChannelNameCallMeBack = nameChannel => getChannelName(nameChannel).toLowerCase();
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { customersV1, financialOverviewApiVersion, interactionContextV1, routingV2 } },
    native = false,
    nativeIos = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = !!CONFIG.nativeIos;
  const DOCUMENT_PLUGIN = glomoOpenDocument(CONFIG);
  const ANALYTICS = require('./analytics/_ocMetaseguraOffer')();
  const analyticsProactiveAssistance = require('./analytics/_proactiveAssistance')('metaSegura');
  const { analyticsCallMeBack, controllerCallMeBack } = require('./common/_redirectCallMeBack');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const cmbConfig = {
    operativeName: pageName,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 9,
    onlyCallMeBack: true,
    recoverySettings: true,
    useFeatureFlag: true,
    isCallCenter: true,
    twoCallMeBacks: true
  };
  const cmbConfigAnalytics = {
    operativeName: pageName,
    steps: {
      1: '1 caracteristicas',
      2: '2 cuestionario',
      3: '3 tu meta',
      4: '4 meta personalizada',
      5: '5 beneficiarios',
      6: '6 datos beneficiario',
      7: '7 forma de pago',
      8: '8 terminos y condiciones',
      9: '9 confirmacion'
    },
    levels: {
      1: 'meta segura'
    },
    buttons: {
      summary: '9 confirmacion'
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'static',
      className: isNativeIos ? 'ios-top-padding' : '',
      disableScrollLock: true,
      headerHeight: 0,
      hasFooter: false,
      disableEdgeSwipe: true,
      extraHeaderClass: isSpherica ? '' : 'dark-blue-bg',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };

  const lifeCycle = {
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
          [getChannelName('init_page')]: {
            bind: 'init-page',
            analytics: ANALYTICS.OFFER_DETAIL
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelNameCallMeBack('_call_me_back_initialize')]: {
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

  const ocMetaseguraManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-metasegura',
    familyPath: '@glomo-web-components/bbva-manager-oc-metasegura',
    render: 'litElement',
    properties: {
      enableTDCPayment: false,
      cellsConnections: {
        in: {
          global_login_success_indicators: {
            bind: 'customerInfo'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          navigation_from_futura_dashboard: {
            bind: 'getOffer'
          },
          dashboard_oc_banner_oc_metasegura_clicked: {
            bind: 'getOffer'
          },
          ['contract_product_section_oc_banner_oc_metasegura_clicked']: {
            bind: 'getOffer'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'getOffer'
          },
          blue_redirect_send_offer_id: {
            bind: 'getOffer'
          },
          [getChannelName('offer_detail_response_success')]: {
            bind: 'getOfferDetail'
          },
          [getChannelName('date-request')]: {
            bind: 'getTodaysDate'
          },
          [getChannelName('offer_detail_response_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('response_financial_overview_success')]: {
            bind: 'getPaymentOptionsData'
          },
          [getChannelName('response_financial_overview_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('customer_contact_response_success')]: {
            bind: 'getEmailCustomer'
          },
          [getChannelName('customer_contact_response_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('customer_address_response_success')]: {
            bind: 'getCustomerAddress'
          },
          [getChannelName('full_customer_address_request')]: {
            bind: 'requestFullCustomerAddress'
          },
          [getChannelName('customer_address_response_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('personalize_saving_button_click')]: {
            bind: 'requestInsuranceProductSettings'
          },
          [getChannelName('response_insurance_product_settings_success')]: {
            bind: 'responseInsuranceProductSettingsSuccess'
          },
          [getChannelName('response_insurance_product_settings_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('health_questionnaire_answers')]: {
            bind: 'healthQuestionnaireAnswers'
          },
          [getChannelName('offer_simulate_response_success')]: {
            bind: 'responseInsuranceSimulateSuccess'
          },
          [getChannelName('offer_simulate_response_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('response_post_insurance_quotation_success')]: {
            bind: 'responseFirstInsuranceQuotationSuccess'
          },
          [getChannelName('response_post_insurance_quotation_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('requotation_request')]: {
            bind: 'requestRequotationContibution'
          },
          [getChannelName('response_patch_insurance_quotation_success')]: {
            bind: 'responseRequotationSuccess'
          },
          [getChannelName('response_patch_insurance_quotation_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('response_catalogs_records_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('response_catalogs_records_success')]: {
            bind: 'responseCatalogRecordsSuccess'
          },
          [getChannelName('register_assistance_code')]: {
            bind: 'registerAssistanceCode'
          },
          [getChannelName('remove_executive_code')]: {
            bind: 'removeExecutiveCode'
          },
          [getChannelName('selected_contribution')]: {
            bind: 'selectedPaymentFrequency'
          },
          [getChannelName('add_beneficiary')]: {
            bind: 'addBeneficiary'
          },
          [getChannelName('edit_beneficiary')]: {
            bind: 'editBeneficiary'
          },
          [getChannelName('response_geographic_places_success')]: {
            bind: 'responseGeographicPlacesSuccess'
          },
          [getChannelName('response_geographic_places_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('selected_payment_method')]: {
            bind: 'paymentSelected'
          },
          [getChannelName('contract_savings_insurance')]: {
            bind: 'registerBeneficiariesQuotation'
          },
          [getChannelName('response_business_documets_list_success')]: {
            bind: 'responseBusinessDocumetsListSuccess'
          },
          [getChannelName('response_business_documets_list_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('response_business_documets_post_success')]: {
            bind: 'sendContentDocumentToPlugin'
          },
          [getChannelName('response_business_documets_post_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('show_file')]: {
            bind: 'showFile'
          },
          [getChannelName('open_date_picker')]: {
            bind: 'openDatePicker'
          },
          [getChannelName('response_patch_insurance_quotation_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('response_post_insurance_success')]: {
            bind: 'responseInsuranceSuccess'
          },
          [getChannelName('response_post_insurance_error')]: {
            bind: 'errorAlertHandler'
          },
          [getChannelName('confirm_remove_beneficiary')]: {
            bind: 'removeBeneficiary'
          },
          [getChannelName('retry_last_request')]: {
            bind: 'retryLastRequest'
          },
          oc_metasegura_offer_open_exit_offer_modal: {
            bind: 'exitOffer'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'backButtonHandler'
          },
          [getChannelName('container_opened')]: {
            bind: 'containerOpened'
          },
          [getChannelName('container_closed')]: {
            bind: 'containerClosed'
          },
          [getChannelName('status_modal_changed')]: {
            bind: 'statusModalChanged'
          },
          cells_to_native_modal_opened: {
            bind: 'otpOpened'
          },
          cells_to_native_modal_closed: {
            bind: 'otpClosed'
          },
          [getChannelName('close_offer')]: {
            bind: 'resetValues'
          },
          [getChannelName('analytics_app_step_nine')]: {
            bind: 'activateOTPAnalytic'
          },
          signature_handle_required_first_step: {
            bind: 'generateAnalyticOTP'
          },
          global_open_document_base64_success: {
            bind: 'closeSpinner'
          },
          global_open_document_base64_error: {
            bind: 'errorAlertHandler'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'callMeBack'
          }
        },
        out: {
          [getChannelName('get_offer_detail')]: {
            bind: 'metasegura-get-offer-detail'
          },
          [getChannelName('request_financial_overview')]: {
            bind: 'metasegura-request-financial-overview'
          },
          [getChannelName('set_customer_id')]: {
            bind: 'metasegura-set-customer-id'
          },
          [getChannelName('get_customer_email')]: {
            bind: 'metasegura-get-customer-email'
          },
          [getChannelName('set_email_address')]: {
            bind: 'metasegura-set-email-address'
          },
          oc_metasegura_offer_set_checkbox_document: {
            bind: 'metasegura-set-checkbox-document'
          },
          [getChannelName('get_customer_address')]: {
            bind: 'metasegura-get-customer-address'
          },
          [getChannelName('set_customer_address')]: {
            bind: 'metasegura-set-customer-address'
          },
          [getChannelName('success_sign')]: {
            bind: 'metasegura-success-sign'
          },
          [getChannelName('set_payment_options')]: {
            bind: 'metasegura-set-payment-options'
          },
          [getChannelName('request_insurance_product_settings')]: {
            bind: 'metasegura-request-insurance-product-settings'
          },
          [getChannelName('previous_questions_open')]: {
            bind: 'metasegura-set-diseases-checklist'
          },
          [getChannelName('request_catalogs_records')]: {
            bind: 'metasegura-request-catalogs-records'
          },
          [getChannelName('get_simulate_offer')]: {
            bind: 'metasegura-get-suggest-amounts'
          },
          [getChannelName('request_post_insurance_quotation')]: {
            bind: 'metasegura-post-insurance-quotation-request'
          },
          [getChannelName('savings_customization_open')]: {
            bind: 'metasegura-set-insured-amounts-config'
          },
          [getChannelName('request_patch_insurance_quotation')]: {
            bind: 'metasegura-patch-insurance-quotation-request'
          },
          [getChannelName('update_insured_amounts_config')]: {
            bind: 'metasegura-update-insured-amounts-config'
          },
          [getChannelName('set_relationship_records_list')]: {
            bind: 'metasegura-set-relationship-records-list'
          },
          [getChannelName('set_executive_code_coupon')]: {
            bind: 'metasegura-set-executive-code-coupon'
          },
          [getChannelName('remove_executive_code_coupon')]: {
            bind: 'metasegura-remove-executive-code-coupon'
          },
          [getChannelName('payment_frequency_step_completed')]: {
            bind: 'metasegura-payment-frequency-step-completed'
          },
          [getChannelName('saved_beneficiary')]: {
            bind: 'metasegura-saved-beneficiary'
          },
          [getChannelName('set_location_info')]: {
            bind: 'metasegura-set-location-info'
          },
          [getChannelName('request_insurance_hiring')]: {
            bind: 'metasegura-request-insurance-hiring'
          },
          [getChannelName('request_business_documets_list')]: {
            bind: 'metasegura-request-business-documets-list'
          },
          [getChannelName('set_business_properties')]: {
            bind: 'metasegura-set-business-properties'
          },
          [getChannelName('request_post_document')]: {
            bind: 'metasegura-request-post-document'
          },
          global_open_document_base64: {
            bind: 'metasegura-show-document'
          },
          [getChannelName('close_modal')]: {
            bind: 'metasegura-close-height-modal'
          },
          [getChannelName('close_container_modal')]: {
            bind: 'metasegura-close-container-modal'
          },
          sign_modal_close: {
            bind: 'metasegura-close-token-modal'
          },
          [getChannelName('show_add_beneficiary_form_modal')]: {
            bind: 'metasegura-show-add-beneficiary-form-modal'
          },
          [getChannelName('successful_insurance_hiring_receipt')]: {
            bind: 'metasegura-successful-insurance-hiring-receipt'
          },
          [getChannelName('successful_insurance_hiring')]: {
            bind: 'metasegura-successful-insurance-hiring',
            link: {
              page: 'ocMetaseguraOfferSuccess'
            }
          },
          [getChannelName('completed_hiring_data')]: {
            bind: 'metasegura-completed-hiring-data'
          },
          [getChannelName('launch_date_picker')]: {
            bind: 'metasegura-launch-date-picker'
          },
          [getChannelName('show_alert')]: {
            bind: 'metasegura-show-alert'
          },
          [getChannelName('send_data_step')]: {
            bind: 'metasegura-send-data-step'
          },
          [getChannelName('exit_offer')]: {
            bind: 'metasegura-exit-offer',
            backStep: true
          },
          open_control_veil: {
            bind: 'metasegura-show-spinner'
          },
          close_control_veil: {
            bind: 'metasegura-hide-spinner'
          }
        }
      }
    }
  };

  const proactiveAssistanceFeature = {
    zone: 'app__main',
    tag: 'relationship-models-proactive-assistance-mx',
    familyPath: '@glomo-web-components/relationship-models-proactive-assistance-mx',
    type: 'UI',
    render: 'litElement',
    properties: {
      id: 'proactiveAssistanceMetaSegura',
      host,
      native,
      requiredToken,
      interactionContextApiVersion: interactionContextV1,
      routingApiVersion: routingV2,
      isIos: isNativeIos,
      intentId: 'Contratar_Metasegura',
      currentAccessRoute: 'GLOMO',
      intentCategory: 'COMPLEX_SALES',
      operationType: 'CONTRACTING',
      productName: 'Meta Segura',
      maxNumChannels: 2,
      featureFlagConfig: [
        {
          property: '_ocMetasegura',
          name: 'glomo.widgetcallmeback.ocMetasegura'
        },
        {
          property: '_proactiveAssistance',
          name: 'glomo.ocMetaSegura.proactiveAssistance'
        }
      ],
      disabledPopupAutoCloseDelay: 20000,
      proactiveAssistanceConfig: {
        firstTechnicalId: 'offerDetailModal',
        stepKeyPaths: ['event', 'step.step', 'step', 'editedStep.step'],
        analyticsStepOriginByTechnicalId: {
          offerDetailModal: '1 caracteristicas'
        },
        technicalIdByStep: {
          three: 'quotationContainer',
          four: 'personalizedSaving',
          six: 'beneficiaryFormContainer',
          nine: 'termsAndConditions'
        },
        transitionOpenEvents: [
          'transition-container-open',
          'expandable-step-edit-step',
          'expandable-multistep-current-active-step',
          'show-offer-detail-modal',
          'show-savings-customization-modal',
          'metasegura-send-data-step'
        ],
        transitionCloseEvents: [
          'expandable-step-close',
          'hide-offer-detail-modal',
          'hide-savings-customization-modal'
        ],
        allCompleteEvent: 'expandable-multistep-all-complete',
        allCompleteDetailKey: 'allCompleted',
        allCompleteTechnicalId: 'default',
        abandonEvents: [
          'metasegura-close-offer-header',
          'metasegura-close-offer-detail-modal',
          'metasegura-savings-qustomization-close'
        ]
      },
      cellsConnections: {
        in: {
          oc_metasegura_offer_init_page: {
            bind: 'restartProactiveAssistanceFlow'
          },
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlag'
          },
          global_logout_sesion_expiration: {
            bind: 'resetSessionVisitCount'
          },
          global_client_id: {
            bind: 'getCustomerId'
          },
          global_storage_get_loginData_success: {
            bind: 'getCustomerId'
          },
          oc_metasegura_offer_savings_customization_open: {
            bind: 'insuredAmounts'
          },
          oc_metasegura_offer_update_insured_amounts_config: {
            bind: 'insuredAmounts'
          },
          oc_metasegura_offer_close_offer_header: {
            bind: 'exitController'
          },
          oc_metasegura_offer_close_offer_detail_modal: {
            bind: 'exitController'
          },
          global_call_me_back_navigation: {
            bind: 'callMeBackCompleted'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          }
        },
        out: {
          oc_metasegura_offer__call_me_back_init_modal_configuration: {
            bind: 'relationship-models-proactive-assistance-mx-call-me-back'
          },
          oc_metasegura_offer_close_offer: {
            bind: 'relationship-models-proactive-assistance-mx-modal-button-exit',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('salir del proceso', 'modal')
          },
          open_control_veil: {
            bind: 'show-loader'
          },
          close_control_veil: {
            bind: 'hide-loader'
          },
          global_entry_points_call_me_back: {
            bind: 'relationship-models-proactive-assistance-mx-update-entry-points'
          },
          oc_metasegura_offer_open_exit_offer_modal: {
            bind: 'relationship-models-proactive-assistance-mx-open-exit-offer-modal'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line',
            'forward-to-native': true
          },
          oc_metasegura_offer__call_me_back_init_modal_configuration_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-call-me-back-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistancePageView('popup')
          },
          oc_metasegura_offer_close_emergent_button_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-close-emergent-button-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('cerrar asistencia proactiva', 'link')
          },
          oc_metasegura_offer_link_emergent_button_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-link-emergent-button-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('contactar a un asesor', 'link')
          },
          oc_metasegura_offer_emergent_button_page_visit_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-page-visit-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistancePageView('modal')
          },
          oc_metasegura_offer_emergent_button_app_started_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-app-started-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('solicitar llamada', 'modal')
          },
          oc_metasegura_offer_emergent_button_app_schedule_call_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-app-schedule-call-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceInternalLink('agendar llamada', 'modal')
          },
          oc_metasegura_offer_emergent_button_error_analitycs: {
            bind: 'relationship-models-proactive-assistance-mx-emergent-button-error-analitycs',
            analytics: analyticsProactiveAssistance.proactiveAssistanceFootprintAnalyticError('error operacion no disponible')
          },
          oc_metasegura_offert_close_init_offert: {
            bind: 'relationship-models-proactive-assistance-mx-open-exit-offer-modal-init-offert',
            analytics: analyticsProactiveAssistance.proactiveAssistancePageView('modal')
          }
        }
      }
    }
  };

  const ocMetaseguraMultistep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-oc-metasegura',
    tagSpherica: 'bbva-multistep-oc-metasegura-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-oc-metasegura',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-oc-metasegura-spherica',
    render: 'litElement',
    properties: {
      enableTDCPayment: false,
      finalHour: '19:00',
      cellsConnections: {
        in: {
          [getChannelNameCallMeBack('_call_me_back_show_icon_button_header')]: {
            bind: 'callMeBackIcon'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'disabledSimulatorStep'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'true'
          },
          [getChannelName('exit_offer')]: {
            bind: 'reset'
          },
          [getChannelName('set_email_address')]: {
            bind: 'email'
          },
          [getChannelName('set_customer_address')]: {
            bind: 'address'
          },
          [getChannelName('set_payment_options')]: {
            bind: 'paymentOptions'
          },
          [getChannelName('previous_questions_open')]: {
            bind: 'setDiseasesChecklist'
          },
          [getChannelName('savings_customization_open')]: {
            bind: 'setInsuredAmounts'
          },
          [getChannelName('update_insured_amounts_config')]: {
            bind: 'setInsuredAmounts'
          },
          [getChannelName('set_relationship_records_list')]: {
            bind: 'relationshipList'
          },
          [getChannelName('set_executive_code_coupon')]: {
            bind: 'setExecutiveCode'
          },
          [getChannelName('remove_executive_code_coupon')]: {
            bind: 'executiveCode'
          },
          [getChannelName('payment_frequency_step_completed')]: {
            bind: 'stickyButtonHandler'
          },
          [getChannelName('saved_beneficiary')]: {
            bind: 'setBeneficiaryList'
          },
          [getChannelName('set_location_info')]: {
            bind: 'setLocationInfo'
          },
          [getChannelName('confirm_remove_address')]: {
            bind: 'removeBeneficiaryAddress'
          },
          [getChannelName('set_date_select')]: {
            bind: 'setCalendarDate'
          },
          [getChannelName('set_date_select_error')]: {
            bind: 'errorCalendarDate'
          },
          signature_handle_required_first_step: {
            bind: 'hideForm'
          },
          signature_handle_invalid: {
            bind: 'closeSignAddress'
          },
          ['signature_cancel_' + pageName]: {
            bind: 'closeSignAddress'
          },
          [getChannelName('success_sign')]: {
            bind: 'closeSignAddress'
          },
          [getChannelName('show_add_beneficiary_form_modal')]: {
            bind: 'closeSignAddress'
          },
          [getChannelName('show_alert')]: {
            bind: 'openAlert'
          },
          [getChannelName('close_container_modal')]: {
            bind: 'closeContainers'
          },
          [getChannelName('close_modal')]: {
            bind: 'closeModal'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'showStickyButton'
          },
          oc_metasegura_offer_set_checkbox_document: {
            bind: 'setCheckboxDocument'
          }
        },
        out: {
          [getChannelName('what_you_should_know_link_click')]: {
            bind: 'metasegura-what-you-should-know-link-click',
            analytics: ANALYTICS.getOfferStartedLink('ver informacion')
          },
          [getChannelName('show_faqs')]: {
            bind: 'metasegura-show-faqs',
            analytics: ANALYTICS.getOfferAdvancedFootprintAnalytic('faqs')
          },
          [getChannelName('general_conditions_link_click')]: {
            bind: 'metasegura-general-conditions-link-click',
            analytics: ANALYTICS.getOfferStartedLink('ver condiciones generales')
          },
          [getChannelName('personalize_saving_button_click')]: {
            bind: 'metasegura-personalize-saving-button-click',
            analytics: ANALYTICS.getOfferStartedLink('personalizar ahorro')
          },
          [getChannelName('open_privacy_notice_modal')]: {
            bind: 'metasegura-open-privacyNotice-modal',
            analytics: ANALYTICS.getOfferAdvancedFootprintAnalytic('aviso de privacidad')
          },
          [getChannelName('health_questionnaire_answers')]: {
            bind: 'metasegura-health-questionnaire-answers'
          },
          [getChannelName('requotation_request')]: {
            bind: 'metasegura-requotation-request'
          },
          [getChannelName('selected_contribution')]: {
            bind: 'metasegura-selected-contribution'
          },
          [getChannelName('register_assistance_code')]: {
            bind: 'metasegura-register-assistance-code'
          },
          [getChannelName('show_executive_code_modal')]: {
            bind: 'metasegura-show-executive-code-modal',
            analytics: ANALYTICS.getOfferAdvancedFootprintAnalytic('codigo de ejecutivo')
          },
          [getChannelName('remove_executive_code')]: {
            bind: 'metasegura-remove-executive-code'
          },
          [getChannelName('open_beneficiary_modal')]: {
            bind: 'metasegura-open-beneficiary-modal',
            analytics: ANALYTICS.getOfferAdvancedFootprintAnalytic('informacion beneficiarios')
          },
          [getChannelName('add_beneficiary')]: {
            bind: 'metasegura-add-beneficiary'
          },
          [getChannelName('full_customer_address_request')]: {
            bind: 'metasegura-customer-address-request'
          },
          [getChannelName('edit_beneficiary')]: {
            bind: 'metasegura-edit-beneficiary'
          },
          [getChannelName('show_edit_percentages_modal')]: {
            bind: 'metasegura-show-edit-percentages-modal',
            analytics: ANALYTICS.getOfferAdvancedFootprintAnalytic('editar porcentajes')
          },
          [getChannelName('request_geographic_places')]: {
            bind: 'metasegura-form-search-zip-code'
          },
          [getChannelName('selected_payment_method')]: {
            bind: 'metasegura-selected-payment-method'
          },
          [getChannelName('contract_savings_insurance')]: {
            bind: 'metasegura-contract-savings-insurance'
          },
          [getChannelName('show_file')]: {
            bind: 'metasegura-show-file'
          },
          [getChannelName('open_date_picker')]: {
            bind: 'metasegura-open-date-picker'
          },
          [getChannelName('confirm_remove_beneficiary')]: {
            bind: 'metasegura-remove-beneficiary'
          },
          [getChannelName('confirm_remove_address')]: {
            bind: 'metasegura-remove-address'
          },
          [getChannelName('close_offer_header')]: {
            bind: 'metasegura-close-offer-header'
          },
          [getChannelName('close_offer')]: {
            bind: 'metasegura-close-offer'
          },
          [getChannelName('retry_last_request')]: {
            bind: 'metasegura-retry-last-request'
          },
          [getChannelName('send_data_step')]: {
            bind: 'metasegura-send-data-step'
          },
          [getChannelName('show_add_beneficiary_form_modal')]: {
            bind: 'metasegura-show-add-beneficiary-form-modal'
          },
          [getChannelName('hiring_rejection')]: {
            bind: 'metasegura-hiring-rejection'
          },
          [getChannelName('open_operationNotPerformed_modal')]: {
            bind: 'metasegura-open-operationNotPerformed-modal',
            analytics: ANALYTICS.getOfferAdvancedFootprintAnalyticError('error operacion no realizada')
          },
          open_control_veil: {
            bind: 'metasegura-show-spinner'
          },
          close_control_veil: {
            bind: 'metasegura-hide-spinner'
          },
          [getChannelName('container_opened')]: {
            bind: 'transition-container-open'
          },
          [getChannelName('container_closed')]: {
            bind: 'transition-container-close'
          },
          [getChannelName('status_modal_changed')]: {
            bind: 'metasegura-status-full-height-modal'
          },
          oc_metasegura_offer_close_offer_detail_modal: {
            bind: 'metasegura-close-offer-detail-modal'
          },
          [getChannelNameCallMeBack('_call_me_back_init_summary_configuration')]: {
            bind: 'panel-button-fixed-footer-link-click'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'metasegura-bbva-button-default-secondary-button'
          },
          [getChannelNameCallMeBack('_call_me_back_show_icon_button_header')]: {
            bind: 'cmb-icon-header'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'go-next-step'
          },
          [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
            bind: 'header-main-icon-right-secondary-click'
          },
          [getChannelNameCallMeBack('_call_me_back_show_sticky_button')]: {
            bind: 'show-sticky-button'
          }
        }
      }
    }
  };

  const analyticmanagerMetasegura = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-metasegura',
    familyPath: '@glomo-web-components/bbva-manager-oc-metasegura',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('send_data_step')]: {
            bind: 'fireAnalyticsAppStep'
          },
          [getChannelName('hiring_rejection')]: {
            bind: 'fireAnalyticsAppCompletedRejection'
          },
          [getChannelName('completed_hiring_data')]: {
            bind: 'fireAnalyticsAppCompleted'
          }
        },
        out: {
          [getChannelName('analytics_app_step_two')]: {
            bind: 'metasegura-analytics-app-step-two',
            analytics: ANALYTICS.getOfferStepAnalytic('2', '2 cuestionario')
          },
          [getChannelName('analytics_app_step_three')]: {
            bind: 'metasegura-analytics-app-step-three',
            analytics: ANALYTICS.getOfferStepAnalytic('3', '3 tu meta')
          },
          [getChannelName('analytics_app_step_four')]: {
            bind: 'metasegura-analytics-app-step-four',
            analytics: ANALYTICS.getOfferStepAnalytic('4', '4 meta personalizada')
          },
          [getChannelName('analytics_app_step_five')]: {
            bind: 'metasegura-analytics-app-step-five',
            analytics: ANALYTICS.getOfferStepAnalytic('5', '5 beneficiarios')
          },
          [getChannelName('analytics_app_step_six')]: {
            bind: 'metasegura-analytics-app-step-six',
            analytics: ANALYTICS.getOfferStepAnalytic('6', '6 datos beneficiario')
          },
          [getChannelName('analytics_app_step_seven')]: {
            bind: 'metasegura-analytics-app-step-seven',
            analytics: ANALYTICS.getOfferStepAnalytic('7', '7 forma de pago')
          },
          [getChannelName('analytics_app_step_eight')]: {
            bind: 'metasegura-analytics-app-step-eight',
            analytics: ANALYTICS.getOfferStepAnalytic('8', '8 terminos y condiciones')
          },
          [getChannelName('analytics_app_step_nine')]: {
            bind: 'metasegura-analytics-app-step-nine',
            analytics: ANALYTICS.getOfferStepAnalytic('9', '9 confirmacion')
          },
          [getChannelName('analytics_app_step_ten')]: {
            bind: 'metasegura-analytics-app-step-ten',
            analytics: ANALYTICS.getOfferStepAnalytic('10', '10 otp')
          },
          [getChannelName('analytics_completed_rejection_health_requirements')]: {
            bind: 'metasegura-analytics-app-completed-rejection-health-requirements',
            analytics: ANALYTICS.getOfferCompletedAnalytic('rechazado', 'temas de salud')
          },
          [getChannelName('analytics_completed_rejection_account_level')]: {
            bind: 'metasegura-analytics-app-completed-rejection-account-level',
            analytics: ANALYTICS.getOfferCompletedAnalytic('rechazado', 'no es posible por nivel de cuenta')
          },
          [getChannelName('analytics_completed_rejection_cumulus')]: {
            bind: 'metasegura-analytics-app-completed-rejection-cumulus',
            analytics: ANALYTICS.getOfferCompletedAnalytic('rechazado', 'tope cumulos')
          },
          [getChannelName('analytics_completed_hiring_success')]: {
            bind: 'metasegura-analytics-app-completed-hiring-success',
            analytics: ANALYTICS.getOfferCompletedAnalytic('contratado')
          }
        }
      }
    }
  };

  const datePickerPlugginConnector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('launch_date_picker')]: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          [getChannelName('set_date_select')]: {
            bind: 'launch-date-picker-success'
          },
          [getChannelName('set_date_select_error')]: {
            bind: 'launch-date-picker-error'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host,
      otpId: pageName,
      requiredToken,
      customersApiVersion: customersV1,
      native: !!native,
      cellsConnections: {
        in: {
          [getChannelName('set_customer_id')]: {
            bind: 'customerId'
          },
          [getChannelName('get_customer_email')]: {
            bind: 'getCustomerContacts'
          },
          [getChannelName('get_customer_address')]: {
            bind: 'getCustomerAddresses'
          }
        },
        out: {
          [getChannelName('customer_address_response_success')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('customer_address_response_error')]: {
            bind: 'error-on-get-customer-addresses'
          },
          [getChannelName('customer_contact_response_success')]: {
            bind: 'set-customer-contacts'
          },
          [getChannelName('customer_contact_response_error')]: {
            bind: 'error-on-get-customer-contacts'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisFinancialOverview = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-financial-overview',
    properties: {
      host,
      native: !!native,
      requiredToken,
      financialOverviewApiVersion,
      cellsConnections: {
        in: {
          [getChannelName('request_financial_overview')]: {
            bind: 'getFinancialOverview'
          }
        },
        out: {
          [getChannelName('response_financial_overview_success')]: {
            bind: 'financial-overview-retrieved'
          },
          [getChannelName('response_financial_overview_error')]: {
            bind: 'error-on-get-financial-overview'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisInsurancesOffers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances-offers',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('get_offer_detail')]: {
            bind: 'getInsurancesOfferDetail'
          },
          [getChannelName('get_simulate_offer')]: {
            bind: 'postInsurancesOfferSimulate'
          }
        },
        out: {
          [getChannelName('offer_detail_response_success')]: {
            bind: 'success-get-insurances-offers-detail'
          },
          [getChannelName('offer_detail_response_error')]: {
            bind: 'error-get-insurances-offers-detail'
          },
          [getChannelName('offer_simulate_response_success')]: {
            bind: 'success-get-insurances-offers-simulate'
          },
          [getChannelName('offer_simulate_response_error')]: {
            bind: 'error-get-insurances-offers-simulate'
          },
          [getChannelName('date-request')]: {
            bind: 'date-insurances-offers-detail-request'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisInsurancesProducts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances-products',
    properties: {
      host,
      requiredToken,
      native: !!native,
      cellsConnections: {
        in: {
          [getChannelName('request_insurance_product_settings')]: {
            bind: 'getInsuranceProductSettings'
          }
        },
        out: {
          [getChannelName('response_insurance_product_settings_success')]: {
            bind: 'success-insurance-product-settings'
          },
          [getChannelName('response_insurance_product_settings_error')]: {
            bind: 'error-insurance-product-settings'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisLifeHealthInsurances = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-life-health-insurances',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('request_post_insurance_quotation')]: {
            bind: 'postDynamicLifeInsuranceQuotationRequest'
          },
          [getChannelName('request_patch_insurance_quotation')]: {
            bind: 'patchDynamicLifeInsuranceQuotationRequest'
          }
        },
        out: {
          [getChannelName('response_post_insurance_quotation_success')]: {
            bind: 'post-quotations-request-success'
          },
          [getChannelName('response_post_insurance_quotation_error')]: {
            bind: 'post-quotations-request-error'
          },
          [getChannelName('response_patch_insurance_quotation_success')]: {
            bind: 'patch-quotations-request-success'
          },
          [getChannelName('response_patch_insurance_quotation_error')]: {
            bind: 'patch-quotations-request-error'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisInsurancesCatalogs = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances-catalogs',
    properties: {
      host,
      requiredToken,
      native: !!native,
      cellsConnections: {
        in: {
          [getChannelName('request_catalogs_records')]: {
            bind: 'getInsuranceRecords'
          }
        },
        out: {
          [getChannelName('response_catalogs_records_success')]: {
            bind: 'success-on-get-records'
          },
          [getChannelName('response_catalogs_records_error')]: {
            bind: 'error-on-get-records'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisGeographicPlaces = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-geographicplaces',
    properties: {
      host,
      native: !!native,
      requiredToken,
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('request_geographic_places')]: {
            bind: 'getListPlaces'
          }
        },
        out: {
          [getChannelName('response_geographic_places_success')]: {
            bind: 'set-list-places'
          },
          [getChannelName('response_geographic_places_error')]: {
            bind: 'error-on-get-list-places'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisInsurances = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances',
    properties: {
      host,
      otpId: pageName,
      native,
      version: '1',
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('request_insurance_hiring')]: {
            bind: 'npmPostInsurances'
          }
        },
        out: {
          [getChannelName('response_post_insurance_success')]: {
            bind: 'post-insurance-success'
          },
          [getChannelName('response_post_insurance_error')]: {
            bind: 'error-on-post-insurance'
          }
        }
      }
    }
  };

  const cellsDmGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('set_business_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('request_business_documets_list')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('request_post_document')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('response_business_documets_list_success')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('response_business_documets_list_error')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('response_business_documets_post_success')]: {
            bind: 'post-business-documents-success'
          },
          [getChannelName('response_business_documets_post_error')]: {
            bind: 'error-on-post-business-documents'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/oc-metasegura-offer',
      params: []
    },
    pages,
    template,
    components: [
      controllerCallMeBack(cmbConfig),
      analyticsCallMeBack(cmbConfigAnalytics),
      lifeCycle,
      ocMetaseguraManager,
      proactiveAssistanceFeature,
      ocMetaseguraMultistep,
      analyticmanagerMetasegura,
      cellsDmGlobalApisCustomers,
      cellsDmGlobalApisInsurancesOffers,
      cellsDmGlobalApisFinancialOverview,
      cellsDmGlobalApisInsurancesProducts,
      cellsDmGlobalApisLifeHealthInsurances,
      cellsDmGlobalApisInsurancesCatalogs,
      cellsDmGlobalApisGeographicPlaces,
      cellsDmGlobalApisInsurances,
      cellsDmGlobalApisBusinessDocuments
    ]
  };

  if (native) {
    base.components.push(DOCUMENT_PLUGIN);
  }

  if (!nativeIos) {
    base.components.push(datePickerPlugginConnector);
  }

  if (isSpherica) {
    base.components.push(getSpinnerSpherica(CONFIG));
    const setPropertyComponent = setPropertiesSpherica(base);
    setPropertyComponent('cells-spinner-veil-spherica').className = 'cells-spinner-veil-full-height solid-spinner';
  } else {
    base.components.push(createSpinner(CONFIG));
  }

  const singConnector = require('./common/_sign-connector')(CONFIG)(base);
  singConnector('cells-dm-global-apis-insurances', pageName, ['post-insurance-success', 'error-on-post-insurance']);
  singConnector('cells-dm-global-apis-customers', pageName, ['set-customer-addresses', 'error-on-get-customer-addresses']);

  return sphericaPageUtils.spherize(base);
};
