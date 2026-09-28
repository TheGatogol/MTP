'use strict';

module.exports = (CONFIG) => {
  const pageName = 'kycValidation';
  const {
    SPINNER: spinner,
    connectionsOut
  } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const customerApiVersion = CONFIG.globalServices.versions.customersV1;
  const analytic = require('./analytics/_kycValidation')();
  const native = CONFIG.native || false;

  spinner(CONFIG).properties.cellsConnections.in = {
    open_control_veil: {
      bind: 'show'
    },
    close_control_veil: {
      bind: 'hide'
    }
  };

  const base = {
    hash: 'kyc-validation',
    currentPage: {
      url: '/kyc-validation'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      spinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'kycValidation',
          cache: [ '' ],
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_kycValidation: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          search: false,
          back: true,
          rightIcon: 'coronita:close',
          titleName: 'profile-kyc-title',
          cellsConnections: {
            in: {},
            out: {
              [pageName + '_BUTTON_HEADER']: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-know-your-client',
        familyPath: '@glomo-web-components/bbva-manager-know-your-client',
        render: 'litElement',
        properties: {
          isGlobalContext: true,
          cellsConnections: {
            in: {
              global_cache_channel: {
                bind: 'globalCacheStorage'
              },
              __bridge_page_kycValidation: {
                bind: 'reset'
              },
              navigation_profile_to_kyc_validation: {
                bind: 'initKycValidation'
              },
              [pageName + '_GET_MARITAL_STATUS_SUCCESS']: {
                bind: 'onMaritalStatusSuccess'
              },
              [pageName + '_GET_MARITAL_STATUS_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_SET_CATALOG']: {
                bind: 'onResposeSuccessCatalog'
              },
              [pageName + '_REQUEST_CATALOGS_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_PARTICIPATION_TYPE_INFO']: {
                bind: 'showAccountPropertyModal'
              },
              [pageName + '_POLITIC_ACTIVITY_INFO']: {
                bind: 'showPoliticallyExposedPersonModal'
              },
              [pageName + '_REQUEST_CATALOG_OCCUPATIONS']: {
                bind: 'requestOccupations'
              },
              [pageName + '_SET_PAGINATION_SUCCESS']: {
                bind: 'getOccupationsSuccess'
              },
              [pageName + '_SET_PAGINATION_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_SEND_SELECTED_OCCUPATION']: {
                bind: 'filterEcnomicActivities'
              },
              [pageName + '_TRANSFERS_NUMBER_INFO']: {
                bind: 'showOperationsTypeModal'
              },
              [pageName + '_SET_QUESTIONNAIRE_RESULT']: {
                bind: 'questionnaireResult'
              },
              [pageName + '_SWHOW_AFFIDAVIT']: {
                bind: 'showSwornDeclarationModal'
              },
              [pageName + '_REQUEST_MODIFY_CUSTOMER']: {
                bind: 'updateQuestionnaire'
              },
              [pageName + '_PATCH_CUSTOMER_SUCCESS']: {
                bind: 'onPatchCustomerSuccess'
              },
              [pageName + '_PATCH_CUSTOMER_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_PATCH_CUSTOMER_ECONOMIC_DATA_SUCCESS']: {
                bind: 'onPatchEconomicDataSuccess'
              },
              [pageName + '_PATCH_CUSTOMER_ECONOMIC_DATA_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_POST_ADDITIONAL_INFORMATION_SUCCESS']: {
                bind: 'onPostAdditionalInformationSuccess'
              },
              [pageName + '_POST_ADDITIONAL_INFORMATION_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_PUT_QUESTIONNAIRE_SUCESS']: {
                bind: 'onResponseSuccessQuestionnaire'
              },
              [pageName + '_PUT_QUESTIONNAIRE_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_POST_CUSTOMER_TERMS_SUCCESS']: {
                bind: 'onResponseSuccessCustomerTerms'
              },
              [pageName + '_POST_CUSTOMER_TERMS_ERROR']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_POST_IDENTIFICATION_PROCESS_DOCUMENTS_SUCCESS']: {
                bind: 'onResponseSuccessCustomerIdentificationProcess'
              },
              [pageName + 'ERROR_ON_POST_CUSTOMER_IDENTIFICATION_PROCESS']: {
                bind: 'onResponseErrorService'
              },
              [pageName + '_BUTTON_HEADER']: {
                bind: 'toLeaveProcess'
              },
              [pageName + '_EXCEPTION_CASE_RESULT']: {
                bind: 'handleExceptionCase'
              },
              [pageName + '_INFO_RETRY_ACCEPT']: {
                bind: 'requestRetry'
              },
              [pageName + '_INFO_RETRY_CANCEL']: {
                bind: 'onBackButtonPressed'
              },
              [pageName + '_INFO_EXIT_ACCEPT']: {
                bind: 'onBackButtonPressed'
              },
              [pageName + '_INFO_EXIT_CANCEL']: {
                bind: 'onBackButtonPressed'
              },
              [pageName + '_EXCEPTION_CASE_MODAL_ACCEPT']: {
                bind: 'onBackButtonPressed'
              },
              [pageName + '_EXCEPTION_CASE_MODAL_CANCEL']: {
                bind: 'onBackButtonPressed'
              },
              kycValidation_sign_close_modal: {
                bind: 'cancelSignatureProcess'
              },
              [pageName + '_INITIAL_INFO_CANCEL']: {
                bind: 'onBackButtonPressed'
              }
            },
            out: {
              open_control_veil: {
                bind: 'manager-kyc-open-veil'
              },
              [pageName + '_SET_CUSTOMER_ID']: {
                bind: 'manager-kyc-set-customer-id'
              },
              [pageName + '_OPEN_FULL_MODAL']: {
                bind: 'manager-kyc-ui-show-full-screen-modal'
              },
              [pageName + '_SET_CATALOG_MARITAL_STATUS']: {
                bind: 'manager-kyc-set-catalog-marital-status'
              },
              [pageName + '_CLEAN_RESULT']: {
                bind: 'manager-kyc-clean-result'
              },
              [pageName + '_SET_CATALOG_ID']: {
                bind: 'manager-kyc-set-catalog-id'
              },
              [pageName + '_GET_CATALOG']: {
                bind: 'manager-kyc-request-catalog'
              },
              close_control_veil: {
                bind: 'manager-kyc-close-veil'
              },
              [pageName + '_SEND_DATA_CATALOG']: {
                bind: 'manager-kyc-ui-send-data-catalog'
              },
              [pageName + '_RENDER_QUESTIONNAIRE']: {
                bind: 'manager-kyc-render-questionnaire'
              },
              [pageName + '_CLEAN_RESULT_PAGINATION']: {
                bind: 'manager-kyc-clean-result-pagination'
              },
              [pageName + '_SET_CATALOG_ID_OCCUPATIONS']: {
                bind: 'manager-kyc-set-catalog-id-occupations'
              },
              [pageName + '_GET_PAGINATION']: {
                bind: 'manager-kyc-get-pagination'
              },
              [pageName + '_SEND_CATALOG_OCCUPATIONS']: {
                bind: 'manager-kyc-ui-send-catalog-occupations'
              },
              [pageName + '_HIDDEN_SPINNER']: {
                bind: 'manager-kyc-ui-hidden-spinner'
              },
              [pageName + '_SEND_CATALOG_ACTIVITIES']: {
                bind: 'manager-kyc-ui-send-catalog-activities'
              },
              [pageName + 'TURN_NATIVE_FLAG']: {
                bind: 'manager-kyc-turn-native-flag'
              },
              [pageName + '_PATCH_CUSTOMER_DATA']: {
                bind: 'manager-kyc-patch-customer'
              },
              [pageName + '_PATCH_ECONOMIC_DATA']: {
                bind: 'manager-kyc-patch-economic-data'
              },
              [pageName + '_POST_ADITIONAL_INFORMATION']: {
                bind: 'manager-kyc-post-additional-information'
              },
              [pageName + '_PUT_QUESTIONNAIRE']: {
                bind: 'manager-kyc-put-questionnaire'
              },
              [pageName + '_POST_CUSTOMER_TERMS']: {
                bind: 'manager-kyc-post-customer-terms'
              },
              [pageName + '_CHANGE_GLOBAL_APIS_CUSTOMERS_HEADERS']: {
                bind: 'manager-kyc-global-apis-headers'
              },
              [pageName + '_POST_IDENTIFICATION_PROCESS_DOCUMENTS']: {
                bind: 'manager-kyc-post-identification'
              },
              [pageName + '_REQUEST_SEND_NOTIFICATION']: {
                bind: 'manager-kyc-request-send-notification'
              },
              SET_RESULT_KYC_SUCCESS: {
                bind: 'manager-kyc-ui-send-data-to-success-page'
              },
              [pageName + '_NAVIGATE_TO_SUCCESS_PAGE']: {
                bind: 'manager-kyc-route-to-success-page',
                link: {
                  page: 'kycValidationSuccess'
                }
              },
              global_set_in_storage: {
                bind: 'manager-kyc-write-exception-case'
              },
              profile_perform_kyc_update: {
                bind: 'manager-kyc-ui-write-just-updated-flag'
              },
              [pageName + '_ROUTE_BACK']: {
                bind: 'manager-kyc-route-backstep',
                backStep: true
              },
              [pageName + '_ANALYTICS_OPERATION_NUMBER']: {
                bind: 'manager-kyc-analytics-app-completed'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-catalogs',
        properties: {
          host: CONFIG.globalServices.host,
          native,
          catalogPaginationKeys: [0, 50],
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          catalogsApiVersion: CONFIG.globalServices.versions.catalogs,
          headers: { 'Accept-Language': 'es' },
          cellsConnections: {
            in: {
              [pageName + '_SET_CATALOG_MARITAL_STATUS']: {
                bind: 'getMaritalStatuses'
              },
              [pageName + '_CLEAN_RESULT']: {
                bind: 'countries'
              },
              [pageName + '_SET_CATALOG_ID']: {
                bind: 'countriesId'
              },
              [pageName + '_GET_CATALOG']: {
                bind: 'getCountries'
              },
              [pageName + '_CLEAN_RESULT_PAGINATION']: {
                bind: 'catalogResponse'
              },
              [pageName + '_SET_CATALOG_ID_OCCUPATIONS']: {
                bind: 'catalogId'
              },
              [pageName + '_GET_PAGINATION']: {
                bind: 'getCatalogWithPagination'
              }
            },
            out: {
              [pageName + '_GET_MARITAL_STATUS_SUCCESS']: {
                bind: 'set-marital-statuses'
              },
              [pageName + '_GET_MARITAL_STATUS_ERROR']: {
                bind: 'error-on-get-marital-statuses'
              },
              [pageName + '_SET_CATALOG']: {
                bind: 'set-countries'
              },
              [pageName + '_REQUEST_CATALOGS_ERROR']: {
                bind: 'error-on-get-countries'
              },
              [pageName + '_SET_PAGINATION_SUCCESS']: {
                bind: 'get-catalog-pagination'
              },
              [pageName + '_SET_PAGINATION_ERROR']: {
                bind: 'error-on-get-catalog-pagination'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'cells-dm-global-apis-customers-bgadpmock',
        tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          customersApiVersion: customerApiVersion,
          apiAggregatorApiVersion: customerApiVersion,
          native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          headers: { 'Accept-Language': 'es' },
          cellsConnections: {
            in: {
              [pageName + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [pageName + 'TURN_NATIVE_FLAG']: {
                bind: 'native'
              },
              [pageName + '_PATCH_CUSTOMER_DATA']: {
                bind: 'patchCustomer'
              },
              [pageName + '_PATCH_ECONOMIC_DATA']: {
                bind: 'patchEconomicData'
              },
              [pageName + '_POST_ADITIONAL_INFORMATION']: {
                bind: 'postAdditionalInformation'
              },
              [pageName + '_PUT_QUESTIONNAIRE']: {
                bind: 'putQuestionnaire'
              },
              [pageName + '_POST_CUSTOMER_TERMS']: {
                bind: 'postCustomerTerms'
              },
              [pageName + '_CHANGE_GLOBAL_APIS_CUSTOMERS_HEADERS']: {
                bind: 'headers'
              },
              [pageName + '_POST_IDENTIFICATION_PROCESS_DOCUMENTS']: {
                bind: 'postCustomerIdentificationProcessDocuments'
              }
            },
            out: {
              [pageName + '_PATCH_CUSTOMER_SUCCESS']: {
                bind: 'patch-customer-success'
              },
              [pageName + '_PATCH_CUSTOMER_ERROR']: {
                bind: 'error-on-patch-customer'
              },
              [pageName + '_PATCH_CUSTOMER_ECONOMIC_DATA_SUCCESS']: {
                bind: 'patch-customer-economic-data'
              },
              [pageName + '_PATCH_CUSTOMER_ECONOMIC_DATA_ERROR']: {
                bind: 'error-on-patch-economic-data'
              },
              [pageName + '_POST_ADDITIONAL_INFORMATION_SUCCESS']: {
                bind: 'post-additional-information-success'
              },
              [pageName + '_POST_ADDITIONAL_INFORMATION_ERROR']: {
                bind: 'post-additional-information-error'
              },
              [pageName + '_PUT_QUESTIONNAIRE_SUCESS']: {
                bind: 'put-questionnaire-kyc-success'
              },
              [pageName + '_PUT_QUESTIONNAIRE_ERROR']: {
                bind: 'put-questionnaire-kyc-error'
              },
              [pageName + '_POST_CUSTOMER_TERMS_SUCCESS']: {
                bind: 'post-customer-terms'
              },
              [pageName + '_POST_CUSTOMER_TERMS_ERROR']: {
                bind: 'error-on-post-customer-terms'
              },
              [pageName + '_POST_IDENTIFICATION_PROCESS_DOCUMENTS_SUCCESS']: {
                bind: 'post-customer-identification-process-documents-sucess'
              },
              [pageName + 'ERROR_ON_POST_CUSTOMER_IDENTIFICATION_PROCESS']: {
                bind: 'post-customer-identification-process-documents-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-notifications',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          headers: { 'Accept-Language': 'es' },
          native,
          cellsConnections: {
            in: {
              [pageName + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [pageName + '_REQUEST_SEND_NOTIFICATION']: {
                bind: 'sendNotification'
              }
            },
            out: {
              [pageName + '_SUCCESS_SEND_NOTIFICATION']: {
                bind: 'post-notification-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-multistep-know-your-client',
        familyPath: '@glomo-web-components/bbva-multistep-know-your-client',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              __bridge_page_kycValidation: {
                bind: 'reset'
              },
              [pageName + '_SEND_DATA_CATALOG']: {
                bind: 'setCatalogs'
              },
              [pageName + '_RENDER_QUESTIONNAIRE']: {
                bind: 'renderComponent'
              },
              [pageName + '_SEND_CATALOG_OCCUPATIONS']: {
                bind: 'occupationsIdOptions'
              },
              [pageName + '_HIDDEN_SPINNER']: {
                bind: 'visibleSpinner'
              },
              [pageName + '_SEND_CATALOG_ACTIVITIES']: {
                bind: 'economicActivityIdOptions'
              }
            },
            out: {
              [pageName + '_PARTICIPATION_TYPE_INFO']: {
                bind: 'bbva-multistep-kyc-button-participation-type-info'
              },
              [pageName + '_POLITIC_ACTIVITY_INFO']: {
                bind: 'bbva-multistep-kyc-button-politic-activity-info'
              },
              [pageName + '_REQUEST_CATALOG_OCCUPATIONS']: {
                bind: 'bbva-multistep-kyc-request-catalog-occupations'
              },
              [pageName + '_SEND_SELECTED_OCCUPATION']: {
                bind: 'bbva-multistep-kyc-selected-occupation'
              },
              [pageName + '_TRANSFERS_NUMBER_INFO']: {
                bind: 'bbva-multistep-kyc-button-type-operations'
              },
              [pageName + '_SWHOW_AFFIDAVIT']: {
                bind: 'bbva-multistep-kyc-button-show-affidavit'
              },
              [pageName + '_SET_QUESTIONNAIRE_RESULT']: {
                bind: 'bbva-multistep-kyc-button-continue-send-questionnaire'
              },
              [pageName + '_REQUEST_MODIFY_CUSTOMER']: {
                bind: 'bbva-multistep-kyc-button-update-information'
              },
              [pageName + '_EXCEPTION_CASE_RESULT']: {
                bind: 'bbva-multistep-kyc-error-exception',
                analytics: analytic._getAdvancedFootprint('error'),
                featureFlag: analytic.analyticsErrorFeatureFlag
              },
              [pageName + '_STEP_PERSONAL_INFO_ENABLED']: {
                bind: 'bbva-multistep-kyc-step-personal-info-enabled'
              },
              [pageName + '_STEP_BANK_INFO_ENABLED']: {
                bind: 'bbva-multistep-kyc-step-bank-info-enabled'
              },
              [pageName + '_STEP_BANK_OPERATIONS_ENABLED']: {
                bind: 'bbva-multistep-kyc-step-bank-op-enabled'
              },
              [pageName + '_STEP_CREDIT_INFO_ENABLED']: {
                bind: 'bbva-multistep-kyc-step-credit-op-enabled'
              },
              [pageName + '_ANALYTICS_HAS_CREDIT']: {
                bind: 'bbva-multistep-kyc-has-credit'
              },
              [pageName + '_FILLMENT_STEPS']: {
                bind: 'multistep-kyc-hide-confirm-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-know-your-client',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-know-your-client',
        properties: {
          cellsConnections: {
            in: {
              __bridge_page_kycValidation: {
                bind: 'resetData'
              },
              navigation_profile_to_kyc_validation: {
                bind: 'kycPayload'
              },
              [pageName + '_KYC_CUSTOM_FIELDS']: {
                bind: 'customFields'
              },
              [pageName + '_KYC_TYPOLOGY']: {
                bind: 'typology'
              },
              [pageName + '_OPEN_FULL_MODAL']: {
                bind: 'onAppPageVisit'
              },
              [pageName + '_INITIAL_INFO_ACCEPT']: {
                bind: 'onAppStarted'
              },
              [pageName + '_INITIAL_INFO_CANCEL']: {
                bind: 'onAppStarted'
              },
              [pageName + '_STEP_PERSONAL_INFO_ENABLED']: {
                bind: 'onAppStepPageView'
              },
              [pageName + '_STEP_BANK_INFO_ENABLED']: {
                bind: 'onAppStepPageView'
              },
              [pageName + '_STEP_BANK_OPERATIONS_ENABLED']: {
                bind: 'onAppStepPageView'
              },
              [pageName + '_STEP_CREDIT_INFO_ENABLED']: {
                bind: 'onAppStepPageView'
              },
              [pageName + '_ANALYTICS_HAS_CREDIT']: {
                bind: 'onAppStepPageView'
              },
              [pageName + '_FILLMENT_STEPS']: {
                bind: 'onLastStepChanged'
              },
              signature_handle_required_first_step: {
                bind: 'onOtpModal'
              },
              [pageName + '_ANALYTICS_OPERATION_NUMBER']: {
                bind: 'onAppCompleted'
              },
              [pageName + '_PUT_QUESTIONNAIRE_ERROR']: {
                bind: 'handleExceptionCaseAnalytics'
              }
            },
            out: {
              [pageName + '_ANALYTICS_PAGE_VISIT']: {
                bind: 'analytics-page-visit',
                analytics: analytic.appPageVisit,
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_PAGE_STARTED']: {
                bind: 'analytics-app-started',
                analytics: analytic.appStarted,
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_APP_STARTED']: {
                bind: 'analytics-page-view-loaded',
                analytics: analytic._getAdvancedFootprint('viewStep1'),
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_STEP_PERSONAL_INFORMATION']: {
                bind: 'analytics-app-step-view-personal-info',
                analytics: analytic._getAdvancedFootprint('viewStep2'),
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_STEP_BANK_INFORMATION']: {
                bind: 'analytics-app-step-view-bank-info',
                analytics: analytic._getAdvancedFootprint('viewStep3'),
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_STEP_BANK_OPERATIONS']: {
                bind: 'analytics-app-step-view-bank-op',
                analytics: analytic._getAdvancedFootprint('viewStep4'),
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_STEP_CREDIT_OPERATIONS']: {
                bind: 'analytics-app-step-view-credit-op',
                analytics: analytic._getAdvancedFootprint('viewStep5'),
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_STEP_USE_CREDITS']: {
                bind: 'analytics-app-step-view-use-credit',
                analytics: analytic._getAdvancedFootprint('viewStep6'),
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_STEP_SUMMARY']: {
                bind: 'analytics-app-step-summary',
                analytics: analytic.appStepSummary,
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_OTP']: {
                bind: 'analytics-app-otp-viewed',
                analytics: analytic.appStepShowOtp,
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_APP_COMPLETED']: {
                bind: 'analytics-app-completed',
                analytics: analytic.appCompleted,
                featureFlag: analytic.analyticsFeatureFlag
              },
              [pageName + '_ANALYTICS_QUESTIONNAIRE_ERROR']: {
                bind: 'analytics-error-kyc-exception',
                analytics: analytic._getAdvancedFootprint('error'),
                featureFlag: analytic.analyticsErrorFeatureFlag
              }
            }
          }
        }
      }
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', pageName,
    ['post-customer-terms', 'error-on-post-customer-terms',
      'post-customer-identification-process-documents-sucess',
      'post-customer-identification-process-documents-error']);

  connectionsOut('cells-sign-operation-dm-mx').kycValidation_sign_close_modal = {
    bind: `signature-cancel-${pageName}`
  };

  return base;
};
