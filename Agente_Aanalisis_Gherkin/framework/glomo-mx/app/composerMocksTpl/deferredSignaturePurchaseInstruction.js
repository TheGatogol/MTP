'use strict';

module.exports = CONFIG => {
  const { connectionsOut } = require('./common/helpers/_utils');
  const base = require('./common/deferredSignature/deferredSignature')(CONFIG, 'deferredSignaturePurchaseInstruction', 'deferred-signature-purchase-instruction');
  const productName = 'deferredSignaturePurchaseInstruction';
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { structuredProducts, patrimonialContracts, businessDocuments}},
    native = false,
    nativeIos = false
  } = CONFIG;
  const {
    APP_ONCLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3_OTP,
    APP_COMPLETED
  } = require('./analytics/_deferredSignature')('');
  const constants = require('./analytics/common/_constants');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const chekSafe = [
    { id: ' ' },
    { id: ' ' }
  ];
  const textIdSafe = [
    {
      index: 0,
      id: 'TXT0',
      text: 'deferred-signature-structured-purchase-instruction-information-product-notes-checkbox-message-one',
      analytic: 'comprendo e instruyo la compra'
    },
    {
      index: 1,
      id: 'TXT1',
      text: 'deferred-signature-structured-purchase-instruction-informatio-manager-validation-check-two'
    }];
  const eventTypes = {
    A000000617: 'CONTRATO',
    A000000618: 'NOTA',
    A000000937: 'INSTRUCCION'
  };
  base.components.push(
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-manager-deferred-signature-purchase-instruction',
      familyPath: '@glomo-web-components/bbva-manager-deferred-signature',
      render: 'litElement',
      properties: {
        native,
        nativeIos,
        className: 'margin-dark-background',
        additionalInfoClass: 'additional-info-m',
        emptyListResultsImageSrc: './images/empty_state_day.svg',
        host,
        dataSafeGuard: textIdSafe,
        responseSafeGuard: chekSafe,
        eventDeferredType: eventTypes,
        cellsConnections: {
          in: {
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
            [productName + 'edit_complete_step']: {
              bind: 'editCompleteStep'
            },
            [productName + 'complete_steps_deffered_signature']: {
              bind: 'saveGuardProcess'
            },
            [productName + '_STRUCTURED_PRODUCTS_SUCCESS']: {
              bind: 'successInstructionCardId'
            },
            [productName + '_STRUCTURED_PRODUCTS_ERROR']: {
              bind: 'errorInstructionCardId'
            },
            [productName + '_STRUCTURED_PRODUCTS_DETAIL_SUCCESS']: {
              bind: 'succesProducts'
            },
            [productName + '_STRUCTURED_PRODUCTS_DETAIL_ERROR']: {
              bind: 'errorProducts'
            },
            [productName + '_SEND_DATA_CHECKBOX_TERMS']: {
              bind: 'fillResponseSafeGuard'
            },
            [productName + '_SAFEGUARE_INSTRUCTION_SUCCESS']: {
              bind: 'notifySignature'
            },
            [productName + '_SAFEGUARE_INSTRUCTION_ERROR']: {
              bind: 'errorSafeGuardProcess'
            },
            [productName + 'PATCH_CONTRACT_NOTIFICATION_SUCCESS']: {
              bind: 'responseSafeguarSuccess'
            },
            [productName + 'PATCH_CONTRACT_NOTIFICATION_ERROR']: {
              bind: 'errorNotificationContract'
            },
            SHOW_SUCCESSFUL_PURCHASE_INSTRUCTION_PAGE: {
              bind: 'reset'
            },
            [productName + '_SEARCH_CONTRACT_SUCCESS']: {
              bind: 'customerMailPatrimonialSuccess'
            },
            [productName + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'customerMailPatrimonialContractsError'
            },
            [productName + '_SUCCESS_BACK_REQUEST_EXIT_MODAL']: {
              bind: 'exitModal'
            },
            [productName + '_SUCCESS_RESET']: {
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
            [productName + 'SET_MODAL_HEADER_TEXT']: {
              bind: 'expired-modal-text-header'
            },
            [productName + 'SET_MODAL_TITLE_TEXT']: {
              bind: 'expired-modal-title-text'
            },
            [productName + 'SET_MODAL_MESSAGE_TEXT']: {
              bind: 'expired-modal-message-text'
            },
            [productName + 'SET_MODAL_BUTTON_TEXT']: {
              bind: 'expired-modal-button-text'
            },
            [productName + 'data_send_list_multistep']: {
              bind: 'send-data-multistep-list'
            },
            [productName + 'CustomerDetail']: {
              bind: 'customer-detail'
            },
            [productName + 'send_customer_id']: {
              bind: 'set-customer-id'
            },
            [productName + 'get-Customer-Addresses']: {
              bind: 'get-customer-contacts'
            },
            SHOW_SUCCESSFUL_PURCHASE_INSTRUCTION_PAGE: {
              bind: 'show-successful-contracting',
              link: {
                page: 'deferredSignaturePurchaseInstructionReview',
                cleanUntil: 'deferredSignaturePurchaseInstruction'
              }
            },
            [productName + '_SEND_BODY_SAFEGUARD']: {
              bind: 'send-body-safeguard'
            },
            [productName + '_EXIT_BACK_REQUEST']: {
              bind: 'exit-operative',
              backStep: true
            },
            [productName + 'hide_button_review_edit']: {
              bind: 'hide-button-review'
            },
            [productName + '_SEND_CARD_ID']: {
              bind: 'send-card-id'
            },
            [productName + '_SEND_PARAMS_DATA']: {
              bind: 'send-params-data-products'
            },
            [productName + '_SUCCESS_LOAD']: {
              bind: 'set-success-complete'
            },
            [productName + '_SUCCESS_INIT']: {
              bind: 'set-success-init'
            },
            [productName + '_SEND_DATA_COMPLETE_ANALYTIC']: {
              bind: 'send-data-complete-analytic'
            },
            [productName + '_VALIDATE_SINGLE_CHECK']: {
              bind: 'set-data-validation-check-one'
            },
            [productName + '_VALIDATE_DOUBLE_CHECK']: {
              bind: 'set-data-validation-check-two'
            },
            [productName + 'show_multistep_message_flag']: {
              bind: 'show-multistep-message'
            },
            [productName + 'send_text_info_message']: {
              bind: 'send-text-info-message'
            },
            global_retry_error: {
              bind: 'retry-error'
            },
            [productName + '_SET_FLOW_EQUITY']: {
              bind: 'set-flow-structured-products'
            },
            [productName + 'SET_TITLE_STEP_LABEL']: {
              bind: 'set-title-step-label'
            },
            [productName + 'SET_PANEL_BUTTON_TEXT']: {
              bind: 'set-panel-button-text'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            [productName + 'send_class_name']: {
              bind: 'set-class-name-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            [productName + '_SEND_REQUEST_SAFE_STRUCTURED']: {
              bind: 'get-customer-address'
            },
            [productName + '_SEND_REQUEST_SAFE_STRUCTURED_PARAMS']: {
              bind: 'send-params-address'
            },
            [productName + '_SUCCESS_RESET_MULTISTEP']: {
              bind: 'show-successful-contracting'
            },
            [productName + '_SEARCH_PATRIMONIAL_CONTRACT_CUSTOMER_EMAIL']: {
              bind: 'request-patrimonial-contract-search-email'
            },
            global_alert_manager_open_with_settings: {
              bind: 'open-modal-exit-deferred-signature'
            },
            [productName + '_navigation_dashboard_alert']: {
              bind: 'back-to-dashboard-deferred-signature'
            },
            [productName + '_SET_SUCCESS_COMPLETE_CHARGE']: {
              bind: 'set-success-complete-charge'
            },
            [productName + '_SET_CONTRACT_NAME']: {
              bind: 'set-contract-name'
            },
            [productName + '_SEND_PARAMS_DATA_CONTRACT']: {
              bind: 'send-params-data-contract'
            },
            [productName + '_SEND_ANALYTICS_DATA_PAGE_VISIT']: {
              bind: 'send-analytic-products'
            },
            [productName + '_SEND_CHECK_BOX_ANALYTIC']: {
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
            navigation_from_deep_link_from_notification_detail: {
              bind: 'fireAppStart'
            },
            navigation_from_deep_link_to_operations: {
              bind: 'fireAppStart'
            },
            [productName + '_SEND_ANALYTICS_DATA_PAGE_VISIT']: {
              bind: 'firePurchaceData'
            },
            [productName + '_SEND_CHECK_BOX_ANALYTIC']: {
              bind: 'fireAnalyticsAppStarted'
            },
            [productName + '_SEND_ANALYTICS_STEP_TERMS_AND_CONDITIONS']: {
              bind: 'fireAnalyticsStepTwo'
            },
            PURCHASE_INSTRUCTION_ANALYTICS_SING_TYPE: {
              bind: 'fireAnalyticsStepThree'
            },
            [productName + '_SEND_DATA_COMPLETE_ANALYTIC']: {
              bind: 'fireAnalyticsAppCompleted'
            }
          },
          out: {
            purchace_instruction_on_click_start_visit: {
              bind: 'analytics-deferred-on-click-start',
              analytics: APP_ONCLICK_START
            },
            purchace_instruction_page_visit: {
              bind: 'analytics-deferred-page-visit',
              analytics: APP_PAGE_VISIT
            },
            purchace_instruction_app_started: {
              bind: 'analytics-deferred-app-started',
              analytics: APP_STARTED
            },
            purchace_analytics_step_terms_and_conditions: {
              bind: 'analytics-deferred-step-two',
              analytics: APP_STEP_2
            },
            notes_analytics_step_complete_operation: {
              bind: 'analytics-deferred-step-three',
              analytics: APP_STEP_3_OTP
            },
            notes_analytics_app_completed: {
              bind: 'analytics-deferred-app-completed',
              analytics: APP_COMPLETED
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
        native,
        host,
        requiredToken,
        apiVersion: structuredProducts,
        cellsConnections: {
          in: {
            deferred_signature_native_data_card: {
              bind: 'cardId'
            },
            [productName + '_SEND_CARD_ID']: {
              bind: 'getStructuredProductsRucId'
            },
            [productName + '_SEND_PARAMS_DATA']: {
              bind: 'getStructuredProductsDetail'
            }
          },
          out: {
            [productName + '_STRUCTURED_PRODUCTS_SUCCESS']: {
              bind: 'get-structured-products-ruc-v1-success'
            },
            [productName + '_STRUCTURED_PRODUCTS_ERROR']: {
              bind: 'get-structured-products-ruc-v1-error'
            },
            [productName + '_STRUCTURED_PRODUCTS_DETAIL_SUCCESS']: {
              bind: 'get-structured-products-detail-v1-success'
            },
            [productName + '_STRUCTURED_PRODUCTS_DETAIL_ERROR']: {
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
        host,
        native,
        requiredToken,
        apiVersion: patrimonialContracts,
        cellsConnections: {
          in: {
            global_user_id: {
              bind: 'customerId'
            },
            [productName + '_SET_CONTRACT_NAME']: {
              bind: 'safeguardParams'
            },
            [productName + '_SEND_PARAMS_DATA_CONTRACT']: {
              bind: 'patchContract'
            },
            [productName + '_SEARCH_PATRIMONIAL_CONTRACT_CUSTOMER_EMAIL']: {
              bind: 'postSearchContract'
            }
          },
          out: {
            [productName + 'PATCH_CONTRACT_NOTIFICATION_SUCCESS']: {
              bind: 'patch-patrimonial-contracts-v0-success'
            },
            [productName + 'PATCH_CONTRACT_NOTIFICATION_ERROR']: {
              bind: 'patch-patrimonial-contracts-v0-error'
            },
            [productName + '_SEARCH_CONTRACT_SUCCESS']: {
              bind: 'post-patrimonial-contracts-search-v0-success'
            },
            [productName + '_SEARCH_CONTRACT_ERROR']: {
              bind: 'post-patrimonial-contracts-search-v0-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-dataprovider-business-documents',
      familyPath: '@glomo-web-components/bbva-dataprovider-business-documents',
      render: 'litElement',
      properties: {
        host,
        requiredToken,
        native,
        apiVersion: businessDocuments,
        otpId: productName,
        requiredOTP: true,
        cellsConnections: {
          in: {
            [productName + '_SEND_BODY_SAFEGUARD']: {
              bind: 'postSafeguardContract'
            }
          },
          out: {
            [productName + '_SAFEGUARE_INSTRUCTION_SUCCESS']: {
              bind: 'post-business-documents-safeguar-v1-success'
            },
            [productName + '_SAFEGUARE_INSTRUCTION_ERROR']: {
              bind: 'post-business-documents-safeguar-v1-error'
            }
          }
        }
      }
    }
  );
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-business-documents', productName, ['post-business-documents-safeguar-v1-success', 'post-business-documents-safeguar-v1-error']);
  connectionsOut(base)('cells-sign-operation-dm-mx').PURCHASE_INSTRUCTION_ANALYTICS_SING_TYPE = {
    bind: 'signature-required'
  };

  addRetryErrors(base)([
    {
      id: 'UNAVAILABLE-STRUCTURED-DEFERRED-PURCHASE-INSTRUCTION',
      acceptRetry: { bind: 'purchaseInstructions', component: 'bbva-manager-deferred-signature-purchase-instruction'},
      cancelRetry: { bind: 'forceExitPage', component: 'bbva-manager-deferred-signature-purchase-instruction'},
      finishRetry: { bind: 'forceExitPage', component: 'bbva-manager-deferred-signature-purchase-instruction'}
    },
    {
      id: 'UNAVAILABLE-STRUCTURED-DEFERRED-PURCHASE-INSTRUCTION-SAFE-GUARD-PROCESS',
      acceptRetry: { bind: 'saveGuardProcess', component: 'bbva-manager-deferred-signature-purchase-instruction'},
      cancelRetry: { bind: 'forceExitPage', component: 'bbva-manager-deferred-signature-purchase-instruction'},
      finishRetry: { bind: 'forceExitPage', component: 'bbva-manager-deferred-signature-purchase-instruction'}
    },
    {
      id: 'UNAVAILABLE-STRUCTURED-DEFERRED-PURCHASE-INSTRUCTION-NOTIFY-CONTRACT',
      acceptRetry: { bind: 'notifySignature', component: 'bbva-manager-deferred-signature-purchase-instruction'},
      cancelRetry: { bind: 'forceExitPage', component: 'bbva-manager-deferred-signature-purchase-instruction'},
      finishRetry: { bind: 'forceExitPage', component: 'bbva-manager-deferred-signature-purchase-instruction'}
    }
  ]);

  addCommonErrors(base.components)();

  return base;
};
