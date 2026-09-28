'use strict';
module.exports = (config) => {
  const {
    globalServices: { host, requiredToken = 'tsec', publicSettingsHost, publicSettingsId,
      versions: { merchantOptionsInstallmentsV2, vehicleFinancialSimulation, proposalsV2,
        customerEconomicDataV1, customerTermsV1, customersV1, customersAddressesV1,
        customerContactDetailsV1, offersV1, publicSettings }
    },
    consumerId, nativeIos, native, retargetingOffers,
    ocCarLoanUniversal: { nationality, aditionalProductId, country, rateTypeAnualId,
      aditionalProductProposalId, feeTypeId, rateTypeIdTin, rateTypeProposalId, maxServiceAttempts,
      componentTypes, carType }
  } = config;
  const { SPINNERSPHERICA: spinner, getLocalCurrency, getLanguage, headerHeightMinimum } = require('./common/helpers/_utils.js');
  const pageName = 'ocCarLoanOrigination';
  const pages = require('./common/_pages.js')(config)(pageName);
  const constants = require('./analytics/common/_constants');
  const analyticsOcCarLoanOrigination = require('./analytics/_ocCarLoanOrigination.js')(config);
  const CMB_CONFIG = {
    operativeName: pageName,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: false,
      showInSummary: true
    },
    onlyCallMeBack: true,
    recoverySettings: true
  };
  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      headerFixed: true,
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: nativeIos ? 'dark-blue-bg ios-top-padding' : '',
      iOSFixedHeader: nativeIos,
      headerHeight: headerHeightMinimum,
      animationType: 'verticalUp',
      disableScrollLock: true,
      cellsConnections: {
        in: {
          loan_and_mortgage_origination_oc_car_loan_update_input: {
            bind: 'recalculateStatusBarTop'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
      iOSFixedHeader: nativeIos
    }
  };
  const { controllerCallMeBack } = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(CMB_CONFIG);
  const loanAndMortagageOriginationOcCarLoan = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/loan-mortgage-origination-oc-car-loan-mx',
    tag: 'loan-mortgage-origination-oc-car-loan-mx',
    render: 'litElement',
    properties: {
      host,
      publicSettingsHost,
      requiredToken,
      consumerId: consumerId,
      publicSettingsKey: 'app_settings_glomo',
      publicSettingsId,
      native,
      publicSettingsApiVersion: publicSettings,
      merchantOptionsInstallmentsApiVersion: merchantOptionsInstallmentsV2,
      vehicleFinancialSimulationApiVersion: vehicleFinancialSimulation,
      proposalsApiVersion: proposalsV2,
      customerEconomicDataApiVersion: customerEconomicDataV1,
      customerTermsApiVersion: customerTermsV1,
      customersApiVersion: customersV1,
      customerAddressesApiVersion: customersAddressesV1,
      customersContactDetailApiVersion: customerContactDetailsV1,
      offerApiVersion: offersV1,
      requiredTokenOtp: true,
      idNationality: nationality,
      country: country,
      iOSFixedHeader: nativeIos,
      rateTypeAnualId: rateTypeAnualId,
      currencyCode: getLocalCurrency(),
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      aditionalProductId: aditionalProductId,
      aditionalProductProposalId: aditionalProductProposalId,
      feeTypeId: feeTypeId,
      rateTypeIdTin: rateTypeIdTin,
      maxServiceAttempts: maxServiceAttempts,
      rateTypeProposalId: rateTypeProposalId,
      componentTypes: componentTypes,
      carType: carType,
      vehicleDecision: 'VEHICLE_DECISION',
      purchaseTerm: 'PURCHASE_TERM',
      quotationStatus: 'QUOTATION_STATUS',
      transferringUserData: 'TRANSFERRING_USER_DATA_TO_THIRD_PARTIES',
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'setCustomerId'
          },
          contract_product_section_oc_banner_non_pre_approved_car_loan_clicked: {
            bind: 'navigationOffer'
          },
          bbva_controller_oc_car_loan_mx_set_customer_id: {
            bind: 'customerId'
          },
          bbva_controller_oc_car_loan_mx_set_customer_age: {
            bind: 'customerAge'
          },
          bbva_controller_oc_car_loan_mx_set_customer_nationality: {
            bind: 'nationality'
          },
          bbva_controller_oc_loan_mx_set_parse_data: {
            bind: 'publicSettings'
          },
          bbva_controller_oc_loan_mx_set_offfer_id: {
            bind: 'offerId'
          },
          bbva_controller_oc_car_loan_set_call_center_number: {
            bind: 'bbvaLine'
          },
          bbva_controller_oc_car_loan_mx_set_phone_number: {
            bind: 'phoneNumber'
          },
          validate_document_oc_car_loan_origination: {
            bind: 'rfcClient'
          },
          bbva_controller_oc_car_loan_status_payroll: {
            bind: 'hassActivePayroll'
          },
          bbva_controller_oc_car_loan_mx_set_rfc_client: {
            bind: 'updateDocuments'
          },
          bbva_controller_oc_car_loan_mx_set_rejection_descriptions: {
            bind: 'certificateRejection'
          },
          sign_modal_cancelled: {
            bind: 'showMultistepModal'
          },
          cells_to_native_modal_closed: {
            bind: 'showMultistepModal'
          },
          sign_modal_close_reset: {
            bind: 'showMultistepModal'
          },
          bbva_controller_oc_car_loan_mx_set_segment: {
            bind: 'segmentId'
          },
          bbva_controller_oc_car_loan_update_selected_employment: {
            bind: 'workStartDate'
          },
          bbva_controller_oc_car_loan_update_selected_years_home_value: {
            bind: 'yearsInHomevalue'
          },
          bbva_controller_oc_car_loan_update_income_data: {
            bind: 'incomesDeclaratory'
          },
          bbva_controller_oc_car_loan_documentConfig: {
            bind: 'documentConfig'
          },
          bbva_controller_oc_car_loan_terms_data: {
            bind: 'termsData'
          },
          bbva_controller_oc_car_loan_invalid_documents: {
            bind: 'withoutInformationDocuments'
          },
          bbva_controller_oc_car_loan_show_call_me_back: {
            bind: 'showCallMeBack'
          },
          bbva_controller_oc_loan_mx_feature_flags: {
            bind: 'subprimeAutoFlags'
          }
        },
        out: {
          global_call_me_back_init_header_configuration: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-simulation-step-call-me-back'
          },
          loan_and_mortgage_origination_oc_car_loan_dm_exit_process: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-exit-process',
            backStep: true
          },
          loan_and_mortgage_origination_oc_car_loan_init_simulation: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-initialize-process'
          },
          global_open_document_url: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-simulation-step-create-amortization-table'
          },
          loan_and_mortgage_origination_oc_car_loan_share_receipt_result: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-share-receipt-proposal'
          },
          loan_and_mortgage_origination_oc_car_loan_share_receipt_operative: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-share-receipt-proposal-operative'
          },
          loan_and_mortgage_origination_oc_car_loan_init_process_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-start-view'
          },
          loan_and_mortgage_origination_oc_car_loan_init_simulation_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-initialize-process'
          },
          loan_and_mortgage_origination_oc_car_loan_simulation_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-start-simulation'
          },
          loan_and_mortgage_origination_oc_car_loan_user_data_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-simulation-step-simulation-complete'
          },
          loan_and_mortgage_origination_oc_car_loan_terms_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-user-data-step-complete'
          },
          loan_and_mortgage_origination_oc_car_loan_confirmation_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-terms-conditions-step-button-confirm'
          },
          loan_and_mortgage_origination_oc_car_loan_simulation_link_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-simulation-step-help-open'
          },
          loan_and_mortgage_origination_oc_car_loan_validation_documents_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-error-validation-documents'
          },
          loan_and_mortgage_origination_oc_car_loan_fire_link_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-list-file-click'
          },
          loan_and_mortgage_origination_oc_car_loan_list_category_link_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-list-category-help-icon-click'
          },
          loan_and_mortgage_origination_oc_car_loan_contract_reject_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-proposals-fetch-denie'
          },
          loan_and_mortgage_origination_oc_car_loan_contract_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-proposals-fetch-success'
          },
          loan_and_mortgage_origination_oc_car_loan_amortization_table_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-list-file-document-click'
          },
          loan_and_mortgage_origination_oc_car_loan_error_service_analytic: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-fetch-error'
          },
          loan_and_mortgage_origination_oc_car_loan_update_data: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-user-data-step-complete'
          },
          global_action_launcher_dialer: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-success-click-notification-link'
          },
          otp_sing_oc_car_loan_origination: {
            bind: 'signature-required-first-step-dm'
          },
          navigation_atm_location: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-warning-modal-documentation-incomplete-link-click',
            link: {
              page: 'atmLocator'
            }
          },
          loan_and_mortgage_origination_oc_car_loan_fetch_public_settings: {
            bind: 'public-settings-api-dm-fetch'
          },
          loan_and_mortgage_origination_oc_car_loan_success_terms_and_conditions: {
            bind: 'customer-terms-api-dm-create'
          },
          loan_and_mortgage_origination_oc_car_loan_init_process: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-init-offer-button-click'
          },
          loan_mortgage_origination_oc_car_loan_change_type_car: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-success-fetch-merchant-installments'
          },
          bbva_controller_oc_car_loan_update_merchant_installments: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-multistep-merchant-data-change'
          },
          update_multistep_merchant_installments: {
            bind: 'expandable-step-button-click'
          },
          complete_simulation_step: {
            bind: 'expandable-step-complete-change'
          },
          global_retargeting_go_next_step_continue: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-multistep-generation-simulation'
          },
          global_retargeting_contracted_product: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-proposals-fetch-success'
          },
          global_retargeting_send_information_update: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-exit-process'
          },
          loan_and_mortgage_origination_oc_car_loan_settings_fetch: {
            bind: 'loan-mortgage-origination-oc-car-loan-mx-dm-settings-fetch'
          },
          loan_and_mortgage_origination_oc_car_loan_update_input: {
            bind: 'form-field-input-blur'
          }
        }
      }
    }
  };
  const receipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mxGlobal',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      sharedReceiptStyles: {
        infoIcon: {
          'display': 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'width': '1.75rem'
        }
      },
      cellsConnections: {
        in: {
          loan_and_mortgage_origination_oc_car_loan_share_receipt_operative: {
            bind: 'captureReceipt'
          },
          loan_and_mortgage_origination_oc_car_loan_share_receipt_result: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const controllerOcCarLoan = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-controller-oc-car-loan-mx',
    tag: 'bbva-controller-oc-car-loan-mx',
    render: 'litElement',
    properties: {
      termTypeId: 'BD-MX-AA-AUTBUR-003',
      acceptanceMethodId: 'TA001',
      originId: 'RN',
      acceptanceMessagesFirst: 'BDAUTBUR22',
      acceptanceMessagesSecond: 'BDAUTBUR23',
      acceptanceMessagesThird: 'BDAUTBUR24',
      dataRetargeting: retargetingOffers,
      nativeIos,
      textAmortizationTable: 'loan-mortgage-origination-oc-car-loan-mx-text-amortization-table',
      cellsConnections: {
        in: {
          __bridge_page_ocCarLoanOrigination: {
            bind: 'initPage'
          },
          loan_and_mortgage_origination_oc_car_loan_init_process: {
            bind: 'retargetingProcess'
          },
          loan_and_mortgage_origination_oc_car_loan_fetch_public_settings: {
            bind: 'parseSettingsData'
          },
          global_login_success: {
            bind: 'setCustomerId'
          },
          global_user: {
            bind: 'setCustomerData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          contract_product_section_oc_banner_oc_car_loan_origination_clicked: {
            bind: 'navigationOfferPage'
          },
          global_login_success_indicators: {
            bind: 'detailCustomerResponse'
          },
          global_user_id: {
            bind: 'setPhoneNumber'
          },
          loan_and_mortgage_origination_oc_car_loan_init_simulation: {
            bind: 'initCallMeBackSettings'
          },
          bbva_customer_validate_digital_file_success: {
            bind: 'documentsValidated'
          },
          bbva_customer_validate_digital_file_error: {
            bind: 'documentsValidated'
          },
          native_user_id: {
            bind: 'nativePhoneNumber'
          },
          loan_and_mortgage_origination_oc_car_loan_update_data: {
            bind: 'updateUserData'
          },
          loan_and_mortgage_origination_oc_car_loan_success_terms_and_conditions: {
            bind: 'updateOfferId'
          },
          navigation_from_futura_dashboard: {
            bind: 'navigationOfferPage'
          },
          loan_mortgage_origination_oc_car_loan_change_type_car: {
            bind: 'updateData'
          },
          bbva_controller_oc_car_loan_update_merchant_installments: {
            bind: 'changeTypeCar'
          },
          update_multistep_merchant_installments: {
            bind: 'nextStepRetargeting'
          },
          complete_simulation_step: {
            bind: 'nextStepRetargeting'
          },
          loan_and_mortgage_origination_oc_car_loan_settings_fetch: {
            bind: 'updateSettings'
          }
        },
        out: {
          bbva_controller_oc_car_loan_mx_set_customer_id: {
            bind: 'bbva-controller-oc-car-loan-mx-customer-id-set'
          },
          bbva_controller_oc_car_loan_mx_set_customer_age: {
            bind: 'bbva-controller-oc-car-loan-mx-customer-age-set'
          },
          bbva_controller_oc_car_loan_mx_set_customer_nationality: {
            bind: 'bbva-controller-oc-car-loan-mx-foreign-modifications-set'
          },
          bbva_controller_oc_loan_mx_set_parse_data: {
            bind: 'bbva-controller-oc-car-loan-mx-parse-data-settings'
          },
          bbva_controller_oc_loan_mx_set_offfer_id: {
            bind: 'bbva-controller-oc-car-loan-mx-offer-id-set'
          },
          bbva_controller_oc_loan_mx_init_call_me_back_settings: {
            bind: 'bbva-controller-oc-car-loan-mx-call-me-back-settings-init'
          },
          validate_document_oc_car_loan_origination: {
            bind: 'bbva-controller-oc-car-loan-mx-rfc-client-set'
          },
          bbva_controller_oc_car_loan_mx_set_rfc_client: {
            bind: 'bbva-controller-oc-car-loan-mx-evalue-documents-set'
          },
          bbva_controller_oc_car_loan_mx_set_phone_number: {
            bind: 'bbva-controller-oc-car-loan-mx-phone-number-set'
          },
          bbva_controller_oc_car_loan_mx_set_rejection_descriptions: {
            bind: 'bbva-controller-oc-car-loan-mx-rejection-descriptions-set'
          },
          bbva_controller_oc_car_loan_mx_set_segment: {
            bind: 'bbva-controller-oc-car-loan-mx-segment-set'
          },
          bbva_controller_oc_car_loan_update_selected_employment: {
            bind: 'bbva-controller-oc-car-loan-mx-selected-employment-seniority-update'
          },
          bbva_controller_oc_car_loan_update_selected_years_home_value: {
            bind: 'bbva-controller-oc-car-loan-mx-selected-years-home-value-update'
          },
          bbva_controller_oc_car_loan_update_income_data: {
            bind: 'bbva-controller-oc-car-loan-mx-incomes-declaratory-update'
          },
          bbva_controller_oc_car_loan_documentConfig: {
            bind: 'bbva-controller-oc-car-loan-mx-document-config-send'
          },
          bbva_controller_oc_car_loan_terms_data: {
            bind: 'bbva-controller-oc-car-loan-mx-terms-data-set'
          },
          bbva_controller_oc_car_loan_status_payroll: {
            bind: 'bbva-controller-oc-car-loan-mx-payroll-status-set'
          },
          bbva_controller_oc_car_loan_set_call_center_number: {
            bind: 'bbva-controller-oc-car-loan-mx-call-center-number-set'
          },
          bbva_controller_oc_car_loan_invalid_documents: {
            bind: 'bbva-controller-oc-car-loan-mx-user-without-information-validate'
          },
          bbva_controller_oc_car_loan_init_retargeting_non_pre_approved: {
            bind: 'bbva-controller-oc-car-loan-mx-retargeting-init'
          },
          bbva_controller_oc_car_loan_update: {
            bind: 'bbva-controller-oc-car-loan-mx-data-update'
          },
          bbva_controller_oc_loan_mx_feature_flags: {
            bind: 'bbva-controller-oc-car-loan-mx-feature-flags'
          },
          global_retargeting_initialize: {
            bind: 'bbva-controller-oc-car-loan-mx-page-init'
          },
          global_retargeting_form_submission: {
            bind: 'bbva-controller-oc-car-loan-mx-post-retargeting-send'
          },
          global_retargeting_amount_data: {
            bind: 'bbva-controller-oc-car-loan-mx-amount-data-change'
          },
          global_retargeting_slider_properties: {
            bind: 'bbva-controller-oc-car-loan-mx-slider-property-change'
          },
          global_retargeting_car_type: {
            bind: 'bbva-controller-oc-car-loan-mx-item-selected-index-change'
          },
          global_retargeting_go_next_step_continue: {
            bind: 'bbva-controller-oc-car-loan-mx-next-step-retargeting-send'
          },
          global_retargeting_send_information_update: {
            bind: 'bbva-controller-oc-car-loan-mx-exit-pa-process'
          },
          bbva_controller_oc_car_loan_show_call_me_back: {
            bind: 'bbva-controller-oc-car-loan-mx-call-me-back-show'
          }
        }
      }
    }
  };
  const customer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      host,
      customersApiVersion: customersV1,
      native,
      currentInfoEnabled: true,
      cellsConnections: {
        in: {
          __bridge_page_ocCarLoanOrigination: {
            bind: 'getCustomer'
          },
          navigation_atm_locator_back_request: {
            bind: 'getCustomer'
          }
        },
        out: {
          bbva_customer_validate_digital_file_success: {
            bind: 'customers-response-get-customer-success'
          },
          bbva_customer_validate_digital_file_error: {
            bind: 'customers-response-get-customer-error'
          }
        },
        params: {
          customerId: 'global_user_id',
          reloadContacDetails: 'reloadContacDetails',
          avatarId: 'avatarId',
          clientId: 'global_client_id'
        }
      }
    }
  };
  const analyticsOcCar = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-oc-car-loan-origination-mx',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
    properties: {
      page: pageName,
      createLoanEvent: 'loans-api-dm-create-error',
      signatureTypes: constants.SIGNATURE_TYPES,
      dictionaryData: {
        paymentFrequency: {
          'MONTHLY': 'mensual',
          'ANNUAL': 'anual',
          'WEEKLY': 'semanal'
        },
        carType: {
          'NUEVO': 'nuevo',
          'SEMINUEVO': 'seminuevo',
          'NPA': 'no preaprobado',
          'PREAPROBADO': 'preaprobado'
        },
        createLoanStatus: {
          success: 'aprobado',
          reject: 'rechazado',
          pageState: 'pagina exitosa'
        },
        modalSimulation: {
          carType: 'tipo de auto',
          downPayment: 'enganche',
          lifeInsurance: 'seguro de vida financiado',
          annualRate: 'tasa de interes fija anual',
          cat: 'costo anual total',
          commission: 'comision por contratacion',
          damageInsurance: 'no incluye seguro de danos'
        },
        modalsTermsAndConditions: {
          modalTerms: 'terminos y condiciones cotizacion',
          modalBureau: 'autorizacion consulta historial de credito',
          modalPrivacy: 'aviso privacidad'
        },
        errors: {
          errorCreateFileModalRetry: 'error informacion no disponible',
          errorServiceCommon: 'error operacion no disponible',
          errorServiceCommonOtp: 'error operacion no realizada',
          documentationIncomplete: 'error informacion no actualizada'
        },
        documents: {
          amortizationTable: 'tabla de amortizacion'
        },
        advisoryReceived: {
          yes: 'si recibi asesoria',
          no: 'no recibi asesoria'
        }
      },
      config: {
        steps: {
          2: 'simulador',
          3: 'datos',
          4: 'terminos y condiciones',
          5: 'confirmacion',
          6: 'otp'
        },
        appPageVisit: 'iniciar simulacion'
      },
      userDataOptions: {
        carPlansOptions: {
          '1/SI': 'si, ya se que auto quiero',
          '2/ESTOYVIENDO': 'estoy viendo algunas opciones',
          '3/NO': 'no, necesito ayuda'
        },
        timePlansOptions: {
          '1/UNMES': '1 mes o menos',
          '2/DOSASEIS': '2 a 6 meses',
          '3/SEISOMAS': '6 meses o mas'
        },
        quotePlansOptions: {
          '1/BBVA': 'con un asesor bbva',
          '2/AGENCIA': 'con un vendedor de agencia',
          '3/OTRO': 'otra entidad financiera',
          '4/No': 'no he cotizado aun'
        }
      },
      authorization: {
        withAuthorization: 'con autorizacion',
        withoutAuthorization: 'sin autorizacion'
      },
      cellsConnections: {
        in: {
          loan_and_mortgage_origination_oc_car_loan_init_process_analytic: {
            bind: 'fireAppPageVisit'
          },
          loan_and_mortgage_origination_oc_car_loan_init_simulation_analytic: {
            bind: 'fireAppStarted'
          },
          loan_and_mortgage_origination_oc_car_loan_simulation_analytic: {
            bind: 'fireSimulationStep'
          },
          loan_and_mortgage_origination_oc_car_loan_user_data_analytic: {
            bind: 'fireDataStep'
          },
          loan_and_mortgage_origination_oc_car_loan_terms_analytic: {
            bind: 'fireTermsAndConditionsStep'
          },
          loan_and_mortgage_origination_oc_car_loan_confirmation_analytic: {
            bind: 'fireConfirmationStep'
          },
          loan_and_mortgage_origination_oc_car_loan_contract_reject_analytic: {
            bind: 'fireContractRejected'
          },
          loan_and_mortgage_origination_oc_car_loan_contract_analytic: {
            bind: 'fireContractSuccess'
          },
          loan_and_mortgage_origination_oc_car_loan_simulation_link_analytic: {
            bind: 'fireAdvancedFootprintWithLevel4'
          },
          loan_and_mortgage_origination_oc_car_loan_validation_documents_analytic: {
            bind: 'fireErrorService'
          },
          loan_and_mortgage_origination_oc_car_loan_fire_link_analytic: {
            bind: 'fireInteractionLink'
          },
          loan_and_mortgage_origination_oc_car_loan_list_category_link_analytic: {
            bind: 'fireAdvancedFootprintWithLevel4'
          },
          loan_and_mortgage_origination_oc_car_loan_amortization_table_analytic: {
            bind: 'fireDownloadLink'
          },
          loan_and_mortgage_origination_oc_car_loan_error_service_analytic: {
            bind: 'fireErrorService'
          },
          otp_sing_oc_car_loan_origination: {
            bind: 'fireOtpStep'
          }
        },
        out: {
          analytics_page_view: {
            bind: 'analytics-app-page-visit',
            analytics: analyticsOcCarLoanOrigination._getPageVisitRaw(pageName)
          },
          analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: analyticsOcCarLoanOrigination._getDynamicAppStarted(pageName)
          },
          analytics_simulation_step: {
            bind: 'analytics-simulation-step',
            analytics: analyticsOcCarLoanOrigination._getAppStepWithLevel3(pageName, 2)
          },
          analytics_user_data_step: {
            bind: 'analytics-user-data-step',
            analytics: analyticsOcCarLoanOrigination._getAppStepWithLevel3(pageName, 3)
          },
          analytics_terms_and_conditions_step: {
            bind: 'analytics-terms-and-conditions-step',
            analytics: analyticsOcCarLoanOrigination._getAppStepWithLevel3(pageName, 4)
          },
          analytics_confirmation: {
            bind: 'analytics-confirmation',
            analytics: analyticsOcCarLoanOrigination._getAppStepWithLevel3(pageName, 5)
          },
          analytics_otp_step: {
            bind: 'analytics-otp-step',
            analytics: analyticsOcCarLoanOrigination._getAppStepWithLevel3(pageName, 6)
          },
          analytics_contract_rejected: {
            bind: 'analytics-contract-rejected',
            analytics: analyticsOcCarLoanOrigination._getAppCompleted(pageName)
          },
          analytics_contract_success: {
            bind: 'analytics-contract-success',
            analytics: analyticsOcCarLoanOrigination._getAppCompleted(pageName)
          },
          analytics_interaction_link: {
            bind: 'analytics-interaction-link',
            analytics: analyticsOcCarLoanOrigination._getInteractionLink(pageName)
          },
          analytics_advanced_footprint: {
            bind: 'analytics-advanced-footprint',
            analytics: analyticsOcCarLoanOrigination._getAdvancedFootprint(pageName)
          },
          analytics_download_link: {
            bind: 'analytics-download-link',
            analytics: analyticsOcCarLoanOrigination._getDownloadLink(pageName)
          },
          analytics_error_service: {
            bind: 'analytics-error-service',
            analytics: analyticsOcCarLoanOrigination._getError(pageName)
          }
        }
      }
    }
  };
  const base = {
    hash: 'oc-car-loan-origination',
    currentPage: {
      url: '/oc-car-loan-origination'
    },
    pages,
    template,
    components: [
      loanAndMortagageOriginationOcCarLoan,
      controllerCmb,
      controllerOcCarLoan,
      customer,
      receipt,
      analyticsOcCar,
      spinner(config)
    ]
  };
  const signConnector = require('./common/_widget-sign-connector.js')(config)(base);
  signConnector('loan-mortgage-origination-oc-car-loan-mx');
  return base;

};
