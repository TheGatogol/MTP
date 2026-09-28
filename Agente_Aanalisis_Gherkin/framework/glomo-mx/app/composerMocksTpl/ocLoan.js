'use strict';
module.exports = config => {
  const {
    getLocalCurrency,
    createSpinner,
    getDate,
    getLanguage,
    detailDownloadParams,
    pluginSoftoken,
    pluginEtherToken
  } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica.js')(config, 'ocLoan');
  const { stopLossWidgetComponent } = require('./common/_abandoned_cart.js');
  const { stopLossWidget, stopLossAnalytics } = stopLossWidgetComponent(config, 'ocLoan', 'SHOPPING_CART');
  const {
    appCompleted,
    getCustomAdnvancedFootprintError,
    getCustomAppStep
  } = require('./analytics/_ocLoan')(config);
  const {
    preApprovedLoan: {
      immediatePersonalLoan
    },
    commons: {
      payrolLoan
    },
    errors: {
      operationError,
      errorOperationNotAvailable,
      operationNotAvailablePDF
    }
  } = require('./analytics/common/_literals.js');
  const { glomoOpenDocument } = require('./common/helpers/_utils');
  const {
    environmentType,
    native = false,
    nativeIos = false,
    globalServices: {
      host,
      publicSettingsId,
      publicSettingsHost,
      requiredToken,
      hostGrantingTicket,
      versions: {
        appSettings: appSettingsApiVersion,
        businessDocumentsV0: documentsApiVersion,
        customersV1: customersApiVersion,
        customerContactDetails: customerContactDetailsApiVersion,
        grantingTicket: grantingTicketsApiVersion,
        loans,
        singleSignOnApiVersion
      }
    }
  } = config;

  const attachedServices = {
    'bbva-global-single-sign-on-api-dm': {
      'single-sign-on-api-dm-create-error': 'postSingleSignOn',
      'api-dm-error': 'postSingleSignOn'
    }
  };

  const nomssContractDocumentKey = 'GMDCNSS022';
  const nomsvContractDocumentKey = 'GMDCNSV022';
  const nomsvInsurancePolicyDocumentKey = 'GMDPLSV004';
  const nomsvdContractDocumentKey = 'GMDCNSD022';
  const nomsvdInsurancePolicyDocumentKey = 'GMDPLSD004';
  const nomsvmgContractDocumentKey = 'GMDPLSV004';
  const nomsvmgInsurancePolicyDocumentKey = 'GMDCNMG017';
  const ppiContractDocumentKey = 'GMDPPIN015';

  const additionalproductPpi = 'PBCCMPPI04';
  const additionalproductNomsvd = 'PBCCMNOM01';
  const additionalproductNomsv = 'PBCCMNOM02';
  const additionalproductNomss =  'PBCCMPPI03';
  const additionalproductNommg = 'PBCCMMAG01';

  const creditHistoryReviewDocKey = 'credit-history-consult';
  const termsAndConditionsDocKey = 'terms-and-conditions';

  const documents = [
    termsAndConditionsDocKey,
    creditHistoryReviewDocKey,
    nomssContractDocumentKey,
    nomsvContractDocumentKey,
    nomsvdContractDocumentKey,
    nomsvmgContractDocumentKey,
    ppiContractDocumentKey,
    nomsvInsurancePolicyDocumentKey,
    nomsvdInsurancePolicyDocumentKey,
    nomsvmgInsurancePolicyDocumentKey
  ];

  const documentsConfig = {
    docTerms: {
      [additionalproductPpi]: ppiContractDocumentKey,
      [additionalproductNomsvd]: nomsvdContractDocumentKey,
      [additionalproductNomsv]: nomsvContractDocumentKey,
      [additionalproductNomss]: nomssContractDocumentKey,
      [additionalproductNommg]: nomsvmgContractDocumentKey
    }
  };

  const userIdBinding = native ? {native_user_id: {bind: 'userId'}} : {global_login_success: {bind: 'setUserId'}};
  const shareReceipt = {
    zone: 'app_main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      infoImage: './images/sphericaInfo.svg',
      language: config.lang,
      localCurrency: getLocalCurrency(),
      dateHourNoSecondsFormat: 'DD MMM YYYY, HH:mm [h]',
      sharedReceiptStyles: {
        fieldValue: {
          'word-wrap': 'break-word',
          'overflow-wrap': 'break-word',
          'white-space': 'normal'
        },
        infolcon: {
          'display': 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'width': '1.75rem'
        },
        sectionHeaderAmount: {
          'font-size': '2.5rem',
          'font-weight': '350'
        }
      },
      cellsConnections: {
        in: {
          oc_loan_share_data_receipt: {
            bind: 'captureReceipt'
          },
          oc_loan_share_data_result_receipt: {
            bind: 'result'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };
  const base = {
    hash: 'oc-loan-web-glomo',
    currentPage: {
      url: '/oc-loan-web-glomo'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      familyPathSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {}
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica'
      })
    },
    components: [
      createSpinner(),
      shareReceipt,
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-controller-oc-loan-mx',
        tag: 'bbva-controller-oc-loan-mx',
        render: 'litElement',
        properties: {
          isNativeIos: nativeIos,
          commissionId: 'COMISION REVIRE',
          country: 'mx',
          environmentType,
          host,
          native,
          notificationKeys: ['LWGPPIOL', 'LWGNOMOL'],
          openingCommissionId: 'COMISION REVIRE',
          requiredToken,
          singleSignOnApiVersion,
          hostGrantingTicket,
          grantingTicketsApiVersion,
          documentsApiVersion,
          documentsConfig,
          insurancePolicyName: 'docInsuranceCoverage',
          termsAndConditionsName: 'docTerms',
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlags'
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
              global_product_found: {
                bind: 'setLoanType'
              },
              dashboard_customer_email: {
                bind: 'setCustomerContactDetails'
              },
              global_softoken_get_token_list_success: {
                bind: 'requestOTP'
              },
              global_softoken_get_token_list_error: {
                bind: 'handleTokenListErrorRespose'
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
              oc_loan_encrypt_otp_successful: {
                bind: 'redirectToLandingWeb'
              },
              oc_loan_get_offer: {
                bind: 'setInsuranceType'
              },
              oc_loan_request_document: {
                bind: 'getDocument'
              },
              oc_loan_set_public_settings: {
                bind: 'setPublicSettings'
              },
              oc_loan_offer_set: {
                bind: 'setOffer'
              },
              oc_loan_error_offer_set: {
                bind: 'hideSpinner'
              },
              oc_loan_set_loan_contracted: {
                bind: 'setLoanContracted'
              },
              oc_loan_generate_receipt: {
                bind: 'generateReceipt'
              },
              oc_loan_retry_sso: {
                bind: 'requestPostSSO'
              },
              oc_loan_failed_operation_exit: {
                bind: 'openDial'
              },
              ...userIdBinding
            },
            out: {
              oc_loan_show_component: {
                bind: 'controller-oc-loan-mx-show-component'
              },
              global_open_control_veil: {
                bind: 'controller-oc-loan-mx-show-spinner'
              },
              global_softoken_get_token_list: {
                bind: 'controller-oc-loan-mx-get-token-list'
              },
              global_softoken_generate_next_otp: {
                bind: 'controller-oc-loan-mx-generate-next-otp'
              },
              global_ether_token_create_client: {
                bind: 'controller-oc-loan-mx-create-client'
              },
              global_ether_token_get_tokens_ids: {
                bind: 'controller-oc-loan-mx-get-tokens-ids'
              },
              global_ether_token_custom_plugin_call: {
                bind: 'controller-oc-loan-mx-ether-token-custom-call'
              },
              oc_loan_encrypt_otp: {
                bind: 'controller-oc-loan-mx-request-encrypted-otp'
              },
              global_action_launcher_uri: {
                bind: 'controller-oc-loan-mx-open-uri'
              },
              oc_loan_set_customers: {
                bind: 'controller-oc-loan-mx-set-customers'
              },
              oc_loan_set_loan_type: {
                bind: 'controller-oc-loan-mx-set-loan-type'
              },
              oc_loan_init: {
                bind: 'controller-oc-loan-mx-init'
              },
              oc_loan_init_sp: {
                bind: 'controller-oc-loan-mx-init-sp'
              },
              oc_loan_stop_loss_flag: {
                bind: 'controller-oc-loan-mx-stop-loss-flag'
              },
              oc_loan_set_receipt_template: {
                bind: 'controller-oc-loan-mx-set-receipt-template'
              },
              oc_loan_set_receipt_data: {
                bind: 'controller-oc-loan-mx-set-receipt-data'
              },
              oc_loan_share_receipt: {
                bind: 'controller-oc-loan-mx-share-receipt'
              },
              global_close_control_veil: {
                bind: 'controller-oc-loan-mx-hide-spinner'
              },
              oc_loan_document_download_error: {
                bind: 'controller-oc-loan-mx-document-download-error',
                analytics: getCustomAdnvancedFootprintError(operationNotAvailablePDF)
              },
              global_open_document_base64: {
                bind: 'controller-oc-loan-mx-open-document-open-by-base64'
              },
              oc_loan_go_to_dashboard: {
                bind: 'controller-oc-loan-mx-go-to-dashboard',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_loan_sso_service_error: {
                bind: 'controller-oc-loan-mx-sso-error'
              },
              oc_loan_document_service_error: {
                bind: 'controller-oc-loan-mx-document-download-error'
              },
              global_action_launcher_dialer: {
                bind: 'controller-oc-loan-mx-open-dial'
              },
              oc_loan_go_to_enrollment: {
                bind: 'controller-oc-loan-mx-go-to-st-enrollment',
                link: {
                  page: 'stEnrollment'
                }
              },
              oc_loan_set_show_web_glomo: {
                bind: 'controller-oc-loan-mx-show-web-glomo'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components-widgets/loan-and-mortgage-origination-oc-loan',
        tag: 'loan-and-mortgage-origination-oc-loan',
        render: 'litElement',
        properties: {
          appSettingsApiVersion,
          avoidTermsPacksService: true,
          customerContactDetailsApiVersion,
          customersApiVersion,
          documentModalName: 'MODAL',
          documentPdfName: 'PDF',
          hidden: true,
          host,
          initFromLandingWeb: true,
          loansApiVersion: loans,
          loansRequiredOTP: true,
          annualHiringRate: 'TASA ANUAL',
          commission: 'COMISION REVIRE',
          monthlyRate: 'Tasa mensual',
          native,
          iOSFixedHeader: nativeIos,
          nominalRateDueId: 'CAT',
          offersApiVersion: loans,
          openingCommissionId: 'COMISION REVIRE',
          operationDateFormat: 'DD MMMM YYYY, HH:mm a',
          publicSettingsId,
          publicSettingsKey: 'app_settings_glomo',
          publicSettingsHost: publicSettingsHost,
          rateAnnualId: 'TASA_ANUAL',
          requiredToken,
          shareReceipt: true,
          showContractingDocument: documents,
          termsAndConditionsDocuments: documents,
          unifiedTotalValueId: 'TASA_MENSUAL',
          maxServiceAttempts: '3',
          attachedServices,
          cellsConnections: {
            params: {
              offerId: 'offerId'
            },
            in: {
              oc_loan_show_component: {
                bind: 'hidden'
              },
              oc_loan_set_show_web_glomo: {
                bind: 'showWebGlomo'
              },
              oc_loan_set_customers: {
                bind: 'customers'
              },
              oc_loan_set_loan_type: {
                bind: 'loanType'
              },
              oc_loan_init: {
                bind: 'webPlusGlomo'
              },
              global_sign_token_standby_timer_succes: {
                bind: 'clearLoader'
              },
              global_sign_token_standby_otp_cancel: {
                bind: 'clearLoader'
              },
              sign_modal_cancelled: {
                bind: 'clearLoader'
              },
              cells_to_native_modal_closed: {
                bind: 'clearLoader'
              },
              oc_loan_sso_service_error: {
                bind: 'requestedDownloadStatus'
              },
              oc_loan_document_service_error: {
                bind: 'requestedDownloadStatus'
              }
            },
            out: {
              oc_loan_offer_set: {
                bind: 'offer-api-dm-fetch'
              },
              global_close_control_veil: {
                bind: 'offer-api-dm-fetch-error'
              },
              oc_loan_fire_confirmation_step: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-all-complete'
              },
              oc_loan_success_create_loan: {
                bind: 'loans-api-dm-create'
              },
              oc_loan_operation_error: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-retry-error'
              },
              oc_loan_request_document: {
                bind: 'loan-and-mortgage-origination-oc-loan-file-list-document-click'
              },
              oc_loan_get_offer: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-offer-set'
              },
              oc_loan_set_public_settings: {
                bind: 'public-settings-api-dm-fetch'
              },
              oc_loan_set_loan_contracted: {
                bind: 'loans-api-dm-create'
              },
              oc_loan_generate_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-recipt-format'
              },
              oc_loan_failed_operation_exit: {
                bind: 'loan-and-mortgage-origination-oc-loan-modal-manager-failed-operation-accept-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_loan_exit: {
                bind: 'loan-and-mortgage-origination-oc-loan-modal-manager-exit-accept-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_loan_exit_from_header: {
                bind: 'loan-and-mortgage-origination-oc-loan-modal-manager-failed-operation-cancel-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_loan_exit_from_succes: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-header-right-primary-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_loan_retry_sso: {
                bind: 'loan-and-mortgage-origination-oc-loan-request-sso'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/loan-and-mortgage-origination-oc-loan-mx',
        tag: 'loan-and-mortgage-origination-oc-loan-mx',
        render: 'litElement',
        properties: {
          appSettingsApiVersion,
          avoidTermsPacksService: true,
          customerContactDetailsApiVersion,
          customersApiVersion,
          documentModalName: 'MODAL',
          documentPdfName: 'PDF',
          detailDownloadConfig: detailDownloadParams,
          host,
          initFromLandingWeb: true,
          loansApiVersion: loans,
          loansRequiredOTP: true,
          annualHiringRate: 'TASA ANUAL',
          commission: 'COMISION REVIRE',
          monthlyRate: 'Tasa mensual',
          native,
          iOSFixedHeader: nativeIos,
          nominalRateDueId: 'CAT',
          offersApiVersion: loans,
          openingCommissionId: 'COMISION REVIRE',
          operationDateFormat: 'DD MMMM YYYY, HH:mm a',
          publicSettingsId,
          publicSettingsKey: 'app_settings_glomo',
          publicSettingsHost: publicSettingsHost,
          rateAnnualId: 'TASA_ANUAL',
          requiredToken,
          shareReceipt: true,
          showContractingDocument: documents,
          termsAndConditionsDocuments: documents,
          unifiedTotalValueId: 'TASA_MENSUAL',
          maxServiceAttempts: '3',
          attachedServices,
          cellsConnections: {
            params: {
              offerId: 'offerId'
            },
            in: {
              oc_loan_set_customers: {
                bind: 'customers'
              },
              oc_loan_set_loan_type: {
                bind: 'loanType'
              },
              oc_loan_init_sp: {
                bind: 'webPlusGlomo'
              },
              oc_loan_stop_loss_flag: {
                bind: 'stopLossFlag'
              },
              global_sign_token_standby_timer_succes: {
                bind: 'clearLoader'
              },
              global_sign_token_standby_otp_cancel: {
                bind: 'clearLoader'
              },
              sign_modal_cancelled: {
                bind: 'clearLoader'
              },
              cells_to_native_modal_closed: {
                bind: 'clearLoader'
              },
              oc_loan_sso_service_error: {
                bind: 'requestedDownloadStatus'
              },
              oc_loan_document_service_error: {
                bind: 'requestedDownloadStatus'
              },
              dashboard_customer_email: {
                bind: 'userEmail'
              },
              global_storage_get_deviceId_success: {
                bind: 'device'
              },
              oc_loan_stop_loss_offer_benefits_empty: {
                bind: 'skipStopLoss'
              },
              oc_loan_stop_loss_modal_header_leave: {
                bind: 'stopLossLeave'
              },
              oc_loan_stop_loss_modal_footer_leave: {
                bind: 'stopLossLeave'
              }
            },
            out: {
              oc_loan_exit_flow: {
                bind: 'loan-and-mortgage-origination-oc-loan-exit-flow',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard'
                }
              },
              oc_loan_share_data_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-data'
              },
              oc_loan_share_data_result_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-data-result'
              },
              oc_loan_offer_set: {
                bind: 'offer-api-dm-fetch'
              },
              global_close_control_veil: {
                bind: 'offer-api-dm-fetch-error'
              },
              oc_loan_fire_confirmation_step: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-all-complete'
              },
              oc_loan_success_create_loan: {
                bind: 'loans-api-dm-create'
              },
              oc_loan_operation_error: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-retry-error'
              },
              oc_loan_request_document: {
                bind: 'loan-and-mortgage-origination-oc-loan-file-list-document-click'
              },
              oc_loan_get_offer: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-offer-set'
              },
              oc_loan_set_public_settings: {
                bind: 'public-settings-api-dm-fetch'
              },
              oc_loan_set_loan_contracted: {
                bind: 'loans-api-dm-create'
              },
              oc_loan_generate_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-recipt-format'
              },
              oc_loan_retry_sso: {
                bind: 'loan-and-mortgage-origination-oc-loan-request-sso'
              },
              global_open_document_url: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-post-document'
              },
              oc_loan_stop_loss_modal_offer_id_set: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-offer-id-set'
              },
              oc_loan_stop_loss_modal_title_set: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-title-set'
              },
              oc_loan_stop_loss_modal_open: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-modal-open'
              },
              oc_loan_stop_loss_offer_benefit_id_set: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-offer-benefit-id-set'
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
              oc_loan_encrypt_otp: {
                bind: 'rsaEncrypt'
              }
            },
            out: {
              oc_loan_encrypt_otp_successful: {
                bind: 'rsa-encrypt-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-oc-loan-mx',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
        properties: {
          page: 'ocLoan',
          openningComissionId: 'COMISION REVIRE',
          loanBreakDownId: 'INSTALLMENT',
          productNameNOM: payrolLoan,
          productNamePPI: immediatePersonalLoan,
          rateAnnualId: 'TASA_ANUAL',
          createLoanEvent: 'loans-api-dm-create-error',
          dictionaryData: {
            paymentFrequency: {
              'MONTHLY': 'mensual',
              'ANNUAL': 'anual',
              'WEEKLY': 'semanal'
            },
            createLoanStatus: {
              success: 'contratado',
              pending: 'en revision'
            }
          },
          config: {
            steps: {
              3: 'terminos y condiciones',
              4: 'confirmacion',
              5: 'otp'
            }
          },
          cellsConnections: {
            in: {
              global_product_found: {
                bind: 'setLoanType'
              },
              oc_loan_offer_set: {
                bind: 'storeAttributes'
              },
              oc_loan_fire_confirmation_step: {
                bind: 'fireConfirmationStep'
              },
              widget_signature_handle_required_first_step: {
                bind: 'fireAppStepOTP'
              },
              oc_loan_success_create_loan: {
                bind: 'fireAppCompleted'
              },
              oc_loan_operation_error: {
                bind: 'checkOperationError'
              },
              global_open_document_base64_error: {
                bind: 'firePdfError'
              }
            },
            out: {
              oc_loan_step_3: {
                bind: 'analytics-terms-and-conditions',
                analytics: getCustomAppStep(3)
              },
              oc_loan_step_4: {
                bind: 'analytics-confirmation',
                analytics: getCustomAppStep(4)
              },
              oc_loan_step_5: {
                bind: 'analytics-otp',
                analytics: getCustomAppStep(5)
              },
              oc_loan_app_completed: {
                bind: 'analytics-app-completed',
                analytics: appCompleted
              },
              oc_loan_operation_not_available: {
                bind: 'analytics-operation-not-available',
                analytics: getCustomAdnvancedFootprintError(errorOperationNotAvailable)
              },
              oc_loan_operation_not_done: {
                bind: 'analytics-operation-error',
                analytics: getCustomAdnvancedFootprintError(operationError)
              },
              oc_loan_pdf_view_error: {
                bind: 'analytics-pdf-error',
                analytics: getCustomAdnvancedFootprintError(operationNotAvailablePDF)
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-share-generic-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPath: 'cells-share-operative-receipt',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        properties: {
          country: 'mx',
          language: getLanguage(),
          dateFormat: getDate(),
          cellsConnections: {
            in: {
              oc_loan_init: {
                bind: 'reset'
              },
              oc_loan_set_receipt_template: {
                bind: 'addDynamicTemplate'
              },
              oc_loan_set_receipt_data: {
                bind: 'result'
              },
              oc_loan_share_receipt: {
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
      stopLossWidget,
      stopLossAnalytics
    ]
  };

  const signConnector = require('./common/_widget-sign-connector.js')(config)(base);
  signConnector('loan-and-mortgage-origination-oc-loan');
  signConnector('loan-and-mortgage-origination-oc-loan-mx');
  if (native) {
    const openDocument = glomoOpenDocument(config);
    base.components.push(pluginSoftoken(config), pluginEtherToken(config));
    if (openDocument) {
      base.components.push(openDocument);
    }
  }
  return sphericaPageUtils.spherize(base);
};
