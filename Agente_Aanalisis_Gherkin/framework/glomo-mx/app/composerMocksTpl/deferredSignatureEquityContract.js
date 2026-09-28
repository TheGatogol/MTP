'use strict';
module.exports = CONFIG => {
  const { connectionsOut } = require('./common/helpers/_utils');
  const product = 'deferredSignatureEquityContract';
  const base = require('./common/deferredSignature/deferredSignature')(CONFIG, product, 'deferred-equity-contract');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const analytics = require('./analytics/_deferredSignature')(CONFIG);
  const constants = require('./analytics/common/_constants');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, product);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const checkSafe = [
    { id: ' ' },
    { id: ' ' },
    { id: ' ' },
    { id: ' ' }
  ];
  const textIdSafe = [
    {
      index: 3,
      id: 'BDAUTBUR11',
      text: 'deferred-signature-information-product-contract-checkbox-message-two',
      analytic: 'clic autorizo consulta datos'
    },
    {
      index: 1,
      id: 'BDCOPUBP01',
      text: 'deferred-signature-information-product-contract-checkbox-message-three',
      analytic: 'clic autorizo uso datos'
    },
    {
      index: 2,
      id: 'BDACEPBP01',
      text: 'deferred-signature-information-product-contract-checkbox-message-one',
      analytic: 'clic terminos'
    },
    {
      index: 0,
      id: 'BDACDOBP01',
      text: 'deferred-signature-information-product-contract-checkbox-message-one',
      analytic: 'clic terminos'
    }
  ];
  const eventTypes = {
    A000000617: 'CONTRATO',
    A000000618: 'NOTA',
    A000000937: 'INSTRUCCION'
  };
  base.components.push(
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-manager-deferred-signature-equity-contract',
      familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
      render: 'litElement',
      properties: {
        className: 'margin-dark-background',
        additionalInfoClass: 'additional-info-m',
        native: CONFIG.native || false,
        dataSafeGuard: textIdSafe,
        responseSafeGuard: checkSafe,
        host: CONFIG.globalServices.host,
        eventDeferredType: eventTypes,
        isSphericaDesign: isSpherica,
        cellsConnections: {
          in: {
            [product + '_SEND_NAME_PDF_TITLE']: {
              bind: 'documentTitle'
            },
            [product + 'PDF_CLICKED']: {
              bind: 'pdfSelectedBusinessDocs'
            },
            [product + '_CUSTOMER_TERMS_N_CONDITIONS_PREV_SUCCESS']: {
              bind: 'validateTermsAndConditions'
            },
            [product + '_CUSTOMER_TERMS_N_CONDITIONS_PREV_FAILURE']: {
              bind: 'errorOnGetCustomerAddresses'
            },
            global_user_id: {
              bind: 'customerId'
            },
            global_financial_overview_details: {
              bind: 'globalCacheStorage'
            },
            navigation_from_deep_link_from_notification_detail: {
              bind: 'deferredSignature'
            },
            navigation_from_deep_link_to_operations: {
              bind: 'deferredSignaturePush'
            },
            global_storage_get_loginData_success: {
              bind: 'loginDataStorageSucces'
            },
            deferred_signature_native_data: {
              bind: 'dataNative'
            },
            [product + '_INIT_PAGE']: {
              bind: 'init'
            },
            global_tsec_channel: {
              bind: 'tsec'
            },
            global_deviceid_channel: {
              bind: 'deviceId'
            },
            global_login_success: {
              bind: 'dataCustomerId'
            },
            [product + 'list_file_click_pdf']: {
              bind: 'downloadBusinessPdf'
            },
            [product + 'customer_data']: {
              bind: 'clientDataCustomers'
            },
            [product + 'terms_and_conditions_click_pdf']: {
              bind: 'successResponse'
            },
            [product + '_SUCCESS_RESPONSE_PDF']: {
              bind: 'getSuccesBusinessDocuments'
            },
            [product + '_ERROR_RESPONSE_PDF']: {
              bind: 'getErrorBusinessDocuments'
            },
            [product + '_ERROR_POST_BD']: {
              bind: 'errorPostBusinessDocuments'
            },
            [product + '_SUCCESS_POST_BD']: {
              bind: 'successPostBusinessDocuments'
            },
            [product + 'complete_steps_terms_and_conditions']: {
              bind: 'showReviewAndAuthorize'
            },
            [product + 'edit_complete_step']: {
              bind: 'editCompleteStep'
            },
            [product + 'complete_steps_deffered_signature']: {
              bind: 'safeguardProcess'
            },
            [product + '_SUCCESS_RESET']: {
              bind: 'reset'
            },
            deferred_contract_signature_return_to_dashboard: {
              bind: 'reset'
            },
            [product + '_GET_REQUEST_SEARCH_BODY']: {
              bind: 'getRequestSearchBody'
            },
            [product + '_SEARCH_CONTRACT_SUCCESS']: {
              bind: 'successContractSearch'
            },
            [product + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'errorContractSearch'
            },
            [product + '_SEND_NAME_PDF']: {
              bind: 'showPdf'
            },
            [product + '_BUSSINES_DOCUMENTS_CONTRACTS_SUCCESS']: {
              bind: 'successBussines'
            },
            [product + '_BUSSINES_DOCUMENTS_CONTRACTS_ERROR']: {
              bind: 'errorBussines'
            },
            [product + '_BUSSINES_DOCUMENTS_LAST_RESPONSE']: {
              bind: 'successBussinesPluging'
            },
            [product + '_SAFEGUARD_CONTRACT_SUCCESS']: {
              bind: 'responseSafeguarSuccess'
            },
            [product + '_SAFEGUARD_CONTRACT_ERROR']: {
              bind: 'responseSafeguarError'
            },
            [product + '_SEND_DATA_CHECKBOX_TERMS']: {
              bind: 'fillResponseSafeGuard'
            },
            [product + '_SUCCESS_BACK_REQUEST_EXIT_MODAL']: {
              bind: 'exitModal'
            },
            [product + '_SHOW_SUCCESSFUL_CONTRACTING_PAGE']: {
              bind: 'reset'
            }
          },
          out: {
            CLOSE_NOTIFICATION_CENTER_DETAIL_MODAL: {
              bind: 'close-modal-notification-center-detail'
            },
            OPEN_MODAL_EXPIRED_DEAD_LINE: {
              bind: 'exit-structured-feature'
            },
            [product + 'SET_MODAL_HEADER_TEXT']: {
              bind: 'expired-modal-text-header'
            },
            [product + 'SET_MODAL_TITLE_TEXT']: {
              bind: 'expired-modal-title-text'
            },
            [product + 'SET_MODAL_MESSAGE_TEXT']: {
              bind: 'expired-modal-message-text'
            },
            [product + 'SET_MODAL_BUTTON_TEXT']: {
              bind: 'expired-modal-button-text'
            },
            [product + 'REQUEST_PDF']: {
              bind: 'get-params-business-documents'
            },
            [product + 'CustomerDetail']: {
              bind: 'customer-detail'
            },
            [product + 'data_send_list_multistep']: {
              bind: 'send-data-multistep-list'
            },
            [product + '_BUSINESS_DOCUMENTS_GET']: {
              bind: 'get-business-documents'
            },
            [product + '_BUSINESS_PROPERTIES_SET']: {
              bind: 'set-business-properties'
            },
            [product + '_BUSINESS_DOCUMENTS_POST']: {
              bind: 'post-business-documents'
            },
            global_open_document_url: {
              bind: 'native-download-receipt'
            },
            [product + '_CUSTOMER_TERMS_N_CONDITIONS_PREV']: {
              bind: 'get-customer-address'
            },
            [product + '_SHOW_SUCCESSFUL_CONTRACTING_PAGE']: {
              bind: 'show-successful-contracting',
              link: {
                page: 'deferredSignatureEquityContractReview',
                cleanUntil: 'deferredSignatureEquityContract',
                skipHistory: true
              }
            },
            [product + 'show_review_and_authorize']: {
              bind: 'show-review-and-authorize'
            },
            [product + 'hide_button_review_edit']: {
              bind: 'hide-button-review'
            },
            [product + '_SEND_DATA_COMPLETE_ANALYTIC']: {
              bind: 'send-data-complete-analytic'
            },
            [product + '_GET_REQUEST_SEARCH_BODY']: {
              bind: 'get-request-search-body'
            },
            [product + '_SEND_REQUEST_SEARCH_CONTRACT']: {
              bind: 'send-body-search-contract'
            },
            [product + '_SET_CUSTOMER_ID']: {
              bind: 'set-customer-id'
            },
            [product + '_CUSTOMER_DATA_TERMS']: {
              bind: 'get-customer-terms'
            },
            [product + '_CUSTOMER_TERMS_N_CONDITIONS_PARAMS']: {
              bind: 'send-params-address'
            },
            global_retry_error: {
              bind: 'retry-error'
            },
            [product + '_PATRIMONIAL_CONTRACT_REQUEST_DATA']: {
              bind: 'request-patrimonial-contract-search-data'
            },
            [product + '_PATRIMONIAL_CONTRACT_REQUEST_DIGITAL']: {
              bind: 'request-patrimonial-contract-search-digital'
            },
            [product + '_PATRIMONIAL_CONTRACT_GO_TO_ANALYTICS']: {
              bind: 'set-flow-equity-contract'
            },
            [product + 'PATRIMONIAL_SUCCESS_INIT']: {
              bind: 'set-success-init'
            },
            [product + '_VALIDATE_SINGLE_CHECK']: {
              bind: 'set-data-validation-check-one'
            },
            [product + '_VALIDATE_DOUBLE_CHECK']: {
              bind: 'set-data-validation-check-two'
            },
            [product + '_SEND_BUSSINES_BODY']: {
              bind: 'send-bussines-contract-body'
            },
            [product + '_BACK_TO_LAST_RESPONSE']: {
              bind: 'back-last-response-raw'
            },
            [product + '_SET_FLOW_EQUITY']: {
              bind: 'set-flow-equity-contract'
            },
            [product + '_SUCCESS_RESET_MULTISTEP']: {
              bind: 'show-successful-contracting'
            },
            global_open_document_base64: {
              bind: 'show-document-event'
            },
            EQUITY_DOC_CONTENT: {
              bind: 'set-base-src'
            },
            global_alert_manager_open_with_settings: {
              bind: 'open-modal-exit-deferred-signature'
            },
            [product + '_SEND_PDF_ANALYTIC']: {
              bind: 'send-pdf-analytic'
            },
            [product + '_SEND_CHECK_BOX_ANALYTIC']: {
              bind: 'send-check-box-analytic'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            }
          }
        }
      },
      propertiesSpherica: {
        newCellsConnections: {
          remove: {
            out: [
              'global_alert_manager_open_with_settings'
            ]
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-analyticmanager-deferred-signature',
      familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
      render: 'litElement',
      properties: {
        signatureTypes: constants.SIGNATURE_TYPES,
        cellsConnections: {
          in: {
            [product + '_PATRIMONIAL_CONTRACT_GO_TO_ANALYTICS']: {
              bind: 'fireCommonData'
            },
            [product + '_SEND_PDF_ANALYTIC']: {
              bind: 'fireAnalyticsAppStarted'
            },
            [product + '_SEND_CHECK_BOX_ANALYTIC']: {
              bind: 'fireAnalyticsAppStarted'
            },
            [product + '_SEND_ANALYTICS_STEP_TERMS_AND_CONDITIONS']: {
              bind: 'fireAnalyticsStepTwo'
            },
            sign_modal_signature_type: {
              bind: 'fireAnalyticsStepThree'
            },
            PATRIMONIAL_SEND_ANALYTICS_SIGN_TYPE: {
              bind: 'fireAnalyticsStepThree'
            },
            [product + '_SEND_DATA_COMPLETE_ANALYTIC']: {
              bind: 'fireAnalyticsAppCompleted'
            },
            [product + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'fireAnalyticsError'
            },
            [product + '_SAFEGUARD_CONTRACT_ERROR']: {
              bind: 'fireAnalyticsError'
            }
          },
          out: {
            contract_analytics_app_on_page_visit: {
              bind: 'analytics-deferred-page-visit',
              analytics: analytics.APP_PAGE_VISIT
            },
            contract_analytics_app_started: {
              bind: 'analytics-deferred-app-started',
              analytics: analytics.APP_STARTED
            },
            contract_analytics_step_terms_and_conditions: {
              bind: 'analytics-deferred-step-two',
              analytics: analytics.APP_STEP_2
            },
            contract_analytics_step_complete_operation: {
              bind: 'analytics-deferred-step-three',
              analytics: analytics.APP_STEP_3_OTP
            },
            contract_analytics_app_completed: {
              bind: 'analytics-deferred-app-completed',
              analytics: analytics.APP_COMPLETED
            },
            contract_analytics_error: {
              bind: 'analytics-deferred-error',
              analytics: analytics.ERROR
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-dataprovider-patrimonial-contracts',
      familyPath: '@glomo-web-components/bbva-dataprovider-patrimonial-contracts',
      render: 'litElement',
      properties: {
        host: CONFIG.globalServices.host,
        native: CONFIG.native || false,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        apiVersion: CONFIG.globalServices.versions.patrimonialContracts,
        cellsConnections: {
          in: {
            global_user_id: {
              bind: 'customerId'
            },
            [product + '_SEND_REQUEST_SEARCH_CONTRACT']: {
              bind: 'postSearchContract'
            },
            [product + '_PATRIMONIAL_CONTRACT_REQUEST']: {
              bind: 'postSearchContract'
            },
            [product + '_PATRIMONIAL_CONTRACT_REQUEST_DIGITAL']: {
              bind: 'postSearchContract'
            },
            [product + '_PATRIMONIAL_CONTRACT_REQUEST_DATA']: {
              bind: 'postSearchContract'
            },
            [product + '_CUSTOMER_TERMS_N_CONDITIONS_PREV']: {
              bind: 'postSafeguardContract'
            },
            [product + '_CUSTOMER_TERMS_N_CONDITIONS_PARAMS']: {
              bind: 'safeguardParams'
            }
          },
          out: {
            [product + '_SEARCH_CONTRACT_SUCCESS']: {
              bind: 'post-patrimonial-contracts-search-v0-success'
            },
            [product + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'post-patrimonial-contracts-search-v0-error'
            },
            [product + '_SAFEGUARD_CONTRACT_SUCCESS']: {
              bind: 'post-patrimonial-contracts-safeguard-v0-success'
            },
            [product + '_SAFEGUARD_CONTRACT_ERROR']: {
              bind: 'post-patrimonial-contracts-safeguard-v0-error'
            }
          }
        }
      }
    }
  );
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-patrimonial-contracts', product,
    ['post-patrimonial-contracts-safeguard-v0-success',
      'post-patrimonial-contracts-safeguard-v0-error']);
  connectionsOut(base)('cells-sign-operation-dm-mx')
    .PATRIMONIAL_SEND_ANALYTICS_SIGN_TYPE = {
      bind: 'signature-required'
    };
  if (CONFIG.native) {
    addRetryErrors(base)([
      {
        id: 'UNAVAILABLE-OPERATION-DEFERRED-SIGNATURE',
        acceptRetry: { bind: 'equityContract',
          component: 'bbva-manager-deferred-signature-equity-contract' },
        cancelRetry: { bind: 'backToStartDeferredSignature',
          component: 'bbva-manager-deferred-signature-equity-contract' }
      }
    ]);
    addCommonErrors(base.components)();
  }
  return sphericaPageUtils.spherize(base);
};
