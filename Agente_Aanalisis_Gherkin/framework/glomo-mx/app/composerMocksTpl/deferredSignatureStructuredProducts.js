'use strict';
module.exports = CONFIG => {
  const { connectionsOut } = require('./common/helpers/_utils');
  const base = require('./common/deferredSignature/deferredSignature')(CONFIG, 'deferredSignatureStructuredProducts', 'deferred-structured-products');
  const product = 'deferredSignatureStructuredProducts';
  const analytics = require('./analytics/_deferredSignature')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const constants = require('./analytics/common/_constants');
  const checkSafe = [
    { id: ' ' },
    { id: ' ' }
  ];
  const textIdSafe = [
    {
      index: 0,
      id: 'BDAUTCCO01',
      text: 'He leído, comprendo y acepto la confirmación de compra.',
      analytic: 'confirmacion compra'
    },
    {
      index: 1,
      id: 'BDNIVIND01',
      text: 'He recibido y comprendido los términos y condiciones de la operación y sus riesgos respectivos.',
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
      tag: 'bbva-manager-deferred-signature-structured-note',
      familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
      render: 'litElement',
      properties: {
        className: 'margin-dark-background',
        additionalInfoClass: 'additional-info-m',
        native: CONFIG.native || false,
        dataSafeGuard: textIdSafe,
        responseSafeGuard: checkSafe,
        eventDeferredType: eventTypes,
        cellsConnections: {
          in: {
            [product + '_SEND_NAME_PDF_TITLE']: {
              bind: 'documentTitle'
            },
            global_user_id: {
              bind: 'customerId'
            },
            [product + '_SEND_NAME_PDF']: {
              bind: 'showPdf'
            },
            deferred_signature_native_data_structured_products: {
              bind: 'dataNative'
            },
            [product + '_INIT_PAGE']: {
              bind: 'init'
            },
            global_tsec_channel: {
              bind: 'tsec'
            },
            device_accesses_device_id: {
              bind: 'deviceId'
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
            [product + 'complete_steps_terms_and_conditions']: {
              bind: 'showReviewAndAuthorize'
            },
            [product + 'edit_complete_step']: {
              bind: 'editCompleteStep'
            },
            [product + 'complete_steps_deffered_signature']: {
              bind: 'safeguardProcess'
            },
            [product + '_GET_CARD_ID']: {
              bind: 'getCardId'
            },
            [product + '_STRUCTURED_PRODUCTS_SUCCESS']: {
              bind: 'successNote'
            },
            [product + '_STRUCTURED_PRODUCTS_ERROR']: {
              bind: 'errorNote'
            },
            [product + '_STRUCTURED_PRODUCTS_DETAIL_SUCCESS']: {
              bind: 'succesProducts'
            },
            [product + '_STRUCTURED_PRODUCTS_DETAIL_ERROR']: {
              bind: 'errorProducts'
            },
            [product + '_SAFE_CONTRACT_SUCCESS']: {
              bind: 'successSafeContract'
            },
            [product + '_SAFE_CONTRACT_ERROR']: {
              bind: 'errorSafeContract'
            },
            [product + '_SEND_INFO_KEY']: {
              bind: 'infoStructuredProduct'
            },
            [product + '_SUCCESS_RESPONSE_PDF']: {
              bind: 'getSuccesBusinessDocuments'
            },
            [product + '_ERROR_RESPONSE_PDF']: {
              bind: 'getErrorBusinessDocuments'
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
            [product + '_SEND_DATA_CHECKBOX_TERMS']: {
              bind: 'fillResponseSafeGuard'
            },
            [product + '_SAFE_STRUCTURED_SUCCESS']: {
              bind: 'responseSafeguarSuccess'
            },
            [product + '_SAFE_STRUCTURED_ERROR']: {
              bind: 'responseSafeguarError'
            },
            [product + '_SEARCH_CONTRACT_SUCCESS']: {
              bind: 'customerMailPatrimonialContractsSuccess'
            },
            [product + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'customerMailPatrimonialContractsError'
            },
            [product + '_SUCCESS_BACK_REQUEST_EXIT_MODAL']: {
              bind: 'exitModal'
            },
            global_login_success_indicators: {
              bind: 'clientData'
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
            global_notifications_list_notification_detail: {
              bind: 'notificationNative'
            },
            global_login_success: {
              bind: 'dataCustomerId'
            },
            [product + '_SUCCESS_RESET']: {
              bind: 'reset'
            },
            [product + '_EXIT_RESET']: {
              bind: 'reset'
            },
            [product + '_SHOW_SUCCESSFUL_CONTRACTING_PAGE']: {
              bind: 'reset'
            },
            deferred_structured_signature_return_to_dashboard: {
              bind: 'reset'
            },
            notificationslist_navigate_to_deferred_equity: {
              bind: 'notificationNative'
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
            global_open_document_url: {
              bind: 'native-download-receipt'
            },
            [product + 'send_customer_id']: {
              bind: 'set-customer-id'
            },
            [product + 'get-Customer-Addresses']: {
              bind: 'get-customer-contacts'
            },
            [product + '_SHOW_SUCCESSFUL_CONTRACTING_PAGE']: {
              bind: 'show-successful-contracting',
              link: {
                page: 'deferredSignatureStructuredProductsReview',
                cleanUntil: 'deferredSignatureStructuredProducts'
              }
            },
            [product + '_EXIT_BACK_REQUEST']: {
              bind: 'exit-operative',
              backStep: true
            },
            [product + 'show_review_and_authorize']: {
              bind: 'show-review-and-authorize'
            },
            [product + 'hide_button_review_edit']: {
              bind: 'hide-button-review'
            },
            [product + '_GET_CARD_ID']: {
              bind: 'get-card-id'
            },
            [product + '_SEND_CARD_ID']: {
              bind: 'send-card-id'
            },
            [product + '_SEND_PARAMS_DATA']: {
              bind: 'send-params-data-products'
            },
            [product + '_SEND_INFO_KEY']: {
              bind: 'send-info-key'
            },
            [product + '_SUCCESS_LOAD']: {
              bind: 'set-success-complete'
            },
            [product + '_SUCCESS_INIT']: {
              bind: 'set-success-init'
            },
            [product + '_NOTES_GO_TO_ANALYTICS']: {
              bind: 'set-flow-structured-products'
            },
            [product + '_SEND_DATA_COMPLETE_ANALYTIC']: {
              bind: 'send-data-complete-analytic'
            },
            [product + '_VALIDATE_SINGLE_CHECK']: {
              bind: 'set-data-validation-check-one'
            },
            [product + '_VALIDATE_DOUBLE_CHECK']: {
              bind: 'set-data-validation-check-two'
            },
            global_retry_error: {
              bind: 'retry-error'
            },
            [product + '_SET_FLOW_EQUITY']: {
              bind: 'set-flow-structured-products'
            },
            [product + '_BUSINESS_DOCUMENTS_GET']: {
              bind: 'get-business-documents'
            },
            [product + '_BUSINESS_PROPERTIES_SET']: {
              bind: 'set-business-properties'
            },
            [product + '_SEND_BUSSINES_BODY']: {
              bind: 'send-bussines-contract-body'
            },
            [product + '_BACK_TO_LAST_RESPONSE']: {
              bind: 'back-last-response-raw'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            [product + 'send_class_name']: {
              bind: 'set-class-name-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            [product + '_SEND_REQUEST_SAFE_STRUCTURED']: {
              bind: 'get-customer-address'
            },
            [product + '_SEND_REQUEST_SAFE_STRUCTURED_PARAMS']: {
              bind: 'send-params-address'
            },
            [product + '_SUCCESS_RESET_MULTISTEP']: {
              bind: 'show-successful-contracting'
            },
            global_open_document_base64: {
              bind: 'show-document-event'
            },
            [product + '_SEARCH_PATRIMONIAL_CONTRACT_CUSTOMER_EMAIL']: {
              bind: 'request-patrimonial-contract-search-email'
            },
            global_alert_manager_open_with_settings: {
              bind: 'open-modal-exit-deferred-signature'
            },
            [product + '_SEND_PDF_ANALYTIC']: {
              bind: 'send-pdf-analytic'
            },
            [product + '_SEND_CHECK_BOX_ANALYTIC']: {
              bind: 'send-check-box-analytic'
            }
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
            [product + '_NOTES_GO_TO_ANALYTICS']: {
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
            NOTES_SEND_ANALYTICS_SIGN_TYPE: {
              bind: 'fireAnalyticsStepThree'
            },
            [product + '_SEND_DATA_COMPLETE_ANALYTIC']: {
              bind: 'fireAnalyticsAppCompleted'
            },
            [product + '_STRUCTURED_PRODUCTS_DETAIL_ERROR']: {
              bind: 'fireAnalyticsError'
            },
            [product + '_SAFE_STRUCTURED_ERROR']: {
              bind: 'fireAnalyticsError'
            }
          },
          out: {
            notes_analytics_app_on_page_visit: {
              bind: 'analytics-deferred-page-visit',
              analytics: analytics.APP_PAGE_VISIT
            },
            notes_analytics_app_started: {
              bind: 'analytics-deferred-app-started',
              analytics: analytics.APP_STARTED
            },
            notes_analytics_step_terms_and_conditions: {
              bind: 'analytics-deferred-step-two',
              analytics: analytics.APP_STEP_2
            },
            notes_analytics_step_complete_operation: {
              bind: 'analytics-deferred-step-three',
              analytics: analytics.APP_STEP_3_OTP
            },
            notes_analytics_app_completed: {
              bind: 'analytics-deferred-app-completed',
              analytics: analytics.APP_COMPLETED
            },
            notes_analytics_error: {
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
      tag: 'bbva-dataprovider-structured-products',
      familyPath: '@glomo-web-components/bbva-dataprovider-structured-products',
      render: 'litElement',
      properties: {
        host: CONFIG.globalServices.host,
        native: CONFIG.native || false,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        apiVersion: CONFIG.globalServices.versions.structuredProducts,
        cellsConnections: {
          in: {
            deferred_signature_native_data_card: {
              bind: 'cardId'
            },
            [product + '_SEND_CARD_ID']: {
              bind: 'getStructuredProductsRucId'
            },
            [product + '_SEND_PARAMS_DATA']: {
              bind: 'getStructuredProductsDetail'
            }
          },
          out: {
            [product + '_STRUCTURED_PRODUCTS_SUCCESS']: {
              bind: 'get-structured-products-ruc-v1-success'
            },
            [product + '_STRUCTURED_PRODUCTS_ERROR']: {
              bind: 'get-structured-products-ruc-v1-error'
            },
            [product + '_STRUCTURED_PRODUCTS_DETAIL_SUCCESS']: {
              bind: 'get-structured-products-detail-v1-success'
            },
            [product + '_STRUCTURED_PRODUCTS_DETAIL_ERROR']: {
              bind: 'get-structured-products-detail-v1-error'
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
            [product + '_SEND_REQUEST_SAFE_STRUCTURED']: {
              bind: 'postSafeguardContract'
            },
            [product + '_SEND_REQUEST_SAFE_STRUCTURED_PARAMS']: {
              bind: 'safeguardParams'
            },
            [product + '_SEND_REQUEST_SAFE_CONTRACT']: {
              bind: 'postSafeguardContract'
            },
            [product + '_SEARCH_PATRIMONIAL_CONTRACT_CUSTOMER_EMAIL']: {
              bind: 'postSearchContract'
            }
          },
          out: {
            [product + '_SAFE_STRUCTURED_SUCCESS']: {
              bind: 'post-patrimonial-contracts-safeguard-v0-success'
            },
            [product + '_SAFE_STRUCTURED_ERROR']: {
              bind: 'post-patrimonial-contracts-safeguard-v0-error'
            },
            [product + '_SEARCH_CONTRACT_SUCCESS']: {
              bind: 'post-patrimonial-contracts-search-v0-success'
            },
            [product + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'post-patrimonial-contracts-search-v0-error'
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
    .NOTES_SEND_ANALYTICS_SIGN_TYPE = {
      bind: 'signature-required'
    };
  addRetryErrors(base)([
    {
      id: 'UNAVAILABLE-OPERATION',
      acceptRetry: { bind: 'getCardId',
        component: 'bbva-manager-deferred-signature-structured-note' },
      cancelRetry: { bind: 'forceExitPage',
        component: 'bbva-manager-deferred-signature-structured-note' },
      acceptCallForHelp: { bind: 'forceExitPage',
        component: 'bbva-manager-deferred-signature-structured-note' }
    }
  ]);
  addCommonErrors(base.components);
  return base;
};
