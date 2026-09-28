/* eslint-disable max-statements */
'use strict';
module.exports = CONFIG => {
  const {
    connectionsIn,
    connectionsOut,
    createPrefixFromPageName,
    detailDownloadParams,
    getLanguage,
    glomoOpenDocument,
    SPINNER: getSpinner,
    useNames
  } = require('./common/helpers/_utils');
  const { glomoAlertManager } = require('./common/_cross-components');

  const pageName = 'openDigitalAccountMultistep';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'openDigitalAccountMultistep');
  const pages = require('./common/_pages')(CONFIG)('openDigitalAccountMultistep');
  const operativePrefix = createPrefixFromPageName('openDigitalAccountMultistep');
  const host = CONFIG.globalServices.host;
  const isNativeIos = CONFIG.nativeIos || false;
  const isNative = CONFIG.native || false;
  const requiredToken = CONFIG.globalServices.requiredToken || 'tsec';
  const hostGrantingTicket = CONFIG.globalServices.hostGrantingTicket;
  const consumerIdAnonymous = CONFIG.globalServices.consumerIdAnonymous;
  const localStorageGet = require('./common/_local-storage');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const pageAnalytics = require('./analytics/_openDigitalAccount')();
  const transversalAnalytics = require('./analytics/_transversalMonoproduct')();
  const entityToReplace = { 'DF': 'Ciudad de México' };
  const externalLinkBranch = 'https://portal.bbva.mx/aplicativos/buscador-sucursales/index.jsp';
  const [ getChannelName ] = useNames(operativePrefix);
  const isSpherica = sphericaPageUtils.isSpherica();
  const spinner = getSpinner(CONFIG);

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          open_digital_account_multistep_exit_flow_code_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-EXIT-FLOW-MODAL-accept'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/open-digital-account-multistep'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        className: 'bbva-core-blue',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        fixOffsetScroll: 0,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        headerHeight: 0
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
          private: false,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_openDigitalAccountMultistep: {
                bind: 'init'
              }
            },
            out: {
              open_digital_account_multistep_init_page: {
                bind: 'init-page'
              },
              global_login_anonymously_success: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              global_device_info_get_platform: {
                bind: 'init-page'
              },
              [getChannelName('secure_sharing_get_data')]: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-campaigns-api-dm-mx',
        tag: 'bbva-campaigns-referral-codes-validate-api-dm-mx',
        render: 'litElement',
        properties: {
          host,
          native: isNative,
          version: CONFIG.globalServices.versions.campaigns,
          requiredToken,
          cellsConnections: {
            in: {
              validate_code_verification: {
                bind: 'postReferralCodesValidate'
              }
            },
            out: {
              mgm_code_validation_success: {
                bind: 'referral-codes-validate-api-dm-create'
              },
              mgm_code_validation_error: {
                bind: 'referral-codes-validate-api-dm-create-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-customers-api-dm-mx',
        tag: 'bbva-customers-referral-invitations-make-invitation-code-relationship-api-dm-mx',
        render: 'litElement',
        properties: {
          host,
          native: isNative,
          version: CONFIG.globalServices.versions.customersV4,
          requiredToken,
          cellsConnections: {
            in: {
              link_mgm_referral_code: {
                bind: 'postCustomerReferralCode'
              }
            },
            out: {
              mgm_assign_success: {
                bind: 'referral-invitations-make-invitation-code-relationship-api-dm-create'
              },
              mgm_assign_error: {
                bind: 'referral-invitations-make-invitation-code-relationship-api-dm-create-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-dataprovider-granting-tickets',
        familyPath: '@glomo-web-components/bbva-dataprovider-granting-tickets',
        render: 'litElement',
        properties: {
          requiredToken,
          host: hostGrantingTicket,
          country: 'mx',
          userId: consumerIdAnonymous,
          consumerId: consumerIdAnonymous,
          native: isNative,
          cellsConnections: {
            in: {
              digital_account_request_granting_tickets: {
                bind: 'postGrantingTickets'
              }
            },
            out: {
              digital_account_login_anonymous_request_success: {
                bind: 'login-anonymous-request-success'
              },
              digital_account_login_anonymous_request_error: {
                bind: 'login-anonymous-request-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-digital-account',
        familyPath: '@glomo-web-components/bbva-manager-digital-account',
        render: 'litElement',
        properties: {
          pageName,
          bindedLiterals: pageAnalytics.bindedLiterals,
          entityToReplace,
          detailDownloadConfig: detailDownloadParams,
          host,
          isNative,
          isNativeIos,
          language: getLanguage(),
          ocrFeatureFlagName: 'glomo.liteOnboarding.onOffOcrN2',
          bureauFeatureFlagName: 'glomo.liteOnboarding.onOffCheckCreditBureau',
          nonBinaryGenderFeatureFlagName: 'glomo.upgradeCustomerGNB',
          idRucFeatureFlagName: 'glomo.enrollmentMonoproduct.idRuc',
          url: externalLinkBranch,
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              close_digital_account_multistep_after_sign_spinner: {
                bind: 'handleAfterSign'
              },
              global_feature_flag_collection_updated: {
                bind: 'handleFeatureFlags'
              },
              [getChannelName('init_page')]: {
                bind: 'init'
              },
              open_digital_account_multistep_after_sign_spinner: {
                bind: 'handleBeforeSign'
              },
              open_digital_account_multistep_send_deeplink_indicator: {
                bind: 'isDeeplinking'
              },
              open_digital_account_multistep_response_success_list_records: {
                bind: 'successListRecords'
              },
              open_digital_account_tmp_data_user: {
                bind: 'createCivilRegistriesRequest'
              },
              [getChannelName('post_customer_civil_registries_success')]: {
                bind: 'setCivilRegistries'
              },
              [getChannelName('post_customer_civil_registries_error')]: {
                bind: 'errorCivilRegistries'
              },
              [getChannelName('response_list_places')]: {
                bind: 'successListPlaces'
              },
              [getChannelName('response_error_list_places')]: {
                bind: 'errorListPlaces'
              },
              [getChannelName('document_capture_success')]: {
                bind: 'onDocumentCaptureSuccess'
              },
              [getChannelName('document_capture_error')]: {
                bind: 'onDocumentCaptureError'
              },
              [getChannelName('document_capture_data')]: {
                bind: 'documentCaptureData'
              },
              [getChannelName('document_capture')]: {
                bind: 'openDocumentCapture'
              },
              [getChannelName('basic_digital_account')]: {
                bind: 'globalGetBasicDigitalAccount'
              },
              [getChannelName('single_digital_contract')]: {
                bind: 'globalGetSingleDigitalContract'
              },
              [getChannelName('exhausted_attempts')]: {
                bind: 'exhaustedAttempts'
              },
              global_open_document_url_success: {
                bind: 'documentOpenHandler'
              },
              global_open_document_url_error: {
                bind: 'documentOpenErrorHandler'
              },
              [getChannelName('request_post_customer')]: {
                bind: 'createCustomer'
              },
              [getChannelName('customer_success')]: {
                bind: 'createCustomerHandler'
              },
              [getChannelName('create_signature_request')]: {
                bind: 'createSignatureRequest'
              },
              [getChannelName('create_signature_success')]: {
                bind: 'createSignatureHandler'
              },
              [getChannelName('tmp_account_data')]: {
                bind: 'createOnboardingRequest'
              },
              [getChannelName('onboarding_success')]: {
                bind: 'onboardingSuccess'
              },
              [getChannelName('customer_terms_success')]: {
                bind: 'termsSuccess'
              },
              [getChannelName('device_info_send_dm')]: {
                bind: 'device'
              },
              [getChannelName('photo_converter_success_front')]: {
                bind: 'getPhotoSuccessFront'
              },
              [getChannelName('photo_converter_success_back')]: {
                bind: 'getPhotoSuccessBack'
              },
              [getChannelName('post_intelligent_extract_upload_success')]: {
                bind: 'postIntelligentExtractUploadSuccess'
              },
              [getChannelName('post_intelligent_extract_upload_error')]: {
                bind: 'postIntelligentExtractUploadError'
              },
              [getChannelName('get_intelligent_extract_upload_success')]: {
                bind: 'getIntelligentExtractGetSuccess'
              },
              [getChannelName('get_intelligent_extract_upload_error')]: {
                bind: 'getIntelligentExtractGetError'
              },
              [getChannelName('retry_intelliget_extract_modal_cancel')]: {
                bind: 'reset'
              },
              [getChannelName('retry_error_intelliget_extract_modal_exit')]: {
                bind: 'reset'
              },
              [getChannelName('onboarding_error')]: {
                bind: 'createCustomerOnboardingError'
              },
              [getChannelName('customer_error')]: {
                bind: 'postContactDataError'
              },
              [getChannelName('retry_error_contact_data_modal_exit')]: {
                bind: 'reset'
              },
              [getChannelName('retry_postal_code_modal_cancel')]: {
                bind: 'resetPostalCodeRetries'
              },
              [getChannelName('retry_contact_data_modal_accept')]: {
                bind: 'retryCreateCustomer'
              },
              [getChannelName('error_postal_code_modal_exit')]: {
                bind: 'resetPostalCodeRetries'
              },
              [getChannelName('get_list_places_error')]: {
                bind: 'openPostalCodeServiceErrorModal'
              },
              [getChannelName('open_exit_modal')]: {
                bind: 'exitFlowErrorModal'
              },
              [getChannelName('go_to_landing')]: {
                bind: 'reset'
              },
              [getChannelName('update_signature_type')]: {
                bind: 'updateOnboardingHeaders'
              },
              [getChannelName('get_business_documents_success')]: {
                bind: 'businessDocumentsGetHandler'
              },
              [getChannelName('get_business_documents_error')]: {
                bind: 'documentOpenErrorHandler'
              },
              [getChannelName('retry_error_intelliget_extract_modal_exit')]: {
                bind: 'goBack'
              },
              [getChannelName('retry_error_create_customer_onboarding_modal_exit')]: {
                bind: 'goBack'
              },
              [getChannelName('retry_error_personal_data_modal_exit')]: {
                bind: 'goBack'
              },
              [getChannelName('retry_error_contact_data_modal_exit')]: {
                bind: 'goBack'
              },
              [getChannelName('error_postal_code_modal_exit')]: {
                bind: 'goBack'
              },
              [getChannelName('footer_button_click_deny_permissions_modal')]: {
                bind: 'openNativeSettings'
              },
              digital_activation_send_flag_transversal: {
                bind: 'activeFlagMonoproduct'
              },
              digital_account_send_phone_otp_datamanager: {
                bind: 'createActivateNotificationsRequest'
              },
              digital_account_post_active_notifications_success: {
                bind: 'activeNotificationsSuccess'
              },
              digital_account_post_active_notifications_error: {
                bind: 'activeNotificationsError'
              },
              digital_account_update_signature_type: {
                bind: 'updateActiveNotificationHeaders'
              },
              digital_account_update_signature_type_new_otp: {
                bind: 'signGetNewOtp'
              },
              digital_account_sign_new_otp: {
                bind: 'createActivateNotificationsRequest'
              },
              digital_account_data_digital_activation: {
                bind: 'createTransversalRequest'
              },
              digital_account_response_success_digital_activation: {
                bind: 'responseDigitalActivactionSuccess'
              },
              digital_account_response_error_digital_activation: {
                bind: 'responseDigitalActivactionError'
              },
              digital_account_response_error_digital_activation_generic: {
                bind: 'responseDigitalActivactionError'
              },
              error_sign_modal_open: {
                bind: 'activeNotificationsError'
              },
              digital_account_call_send_call_up_request: {
                bind: 'requestCallUp'
              },
              digital_account_response_error_call_up: {
                bind: 'responseCallUpError'
              },
              digital_account_go_back_login: {
                bind: 'goToLogin'
              },
              open_digital_account_get_bussiness_document_error: {
                bind: 'showIdRucErrorModal'
              },
              open_digital_account_get_bussiness_document_success: {
                bind: 'getSuccessResponseIdRuc'
              }
            },
            out: {
              digital_account_request_granting_tickets: {
                bind: 'request-granting-ticket'
              },
              [getChannelName('get_list_records')]: {
                bind: 'get-list-records'
              },
              [getChannelName('set_list_records_processed')]: {
                bind: 'set-list-records-processed'
              },
              [getChannelName('customer_personal_data')]: {
                bind: 'customer-personal-data'
              },
              [getChannelName('error_validation_data')]: {
                bind: 'error-personal-data'
              },
              [getChannelName('set_list_places')]: {
                bind: 'manager-digital-account-set-list-places'
              },
              [getChannelName('set_get_list_places')]: {
                bind: 'set-get-list-places'
              },
              [getChannelName('error_get_list_places')]: {
                bind: 'error-get-list-places'
              },
              [getChannelName('error_cero_zip_code')]: {
                bind: 'error-cero-zip-code'
              },
              [getChannelName('document_capture_launch')]: {
                bind: 'launch-document-capture'
              },
              [getChannelName('document_capture_data')]: {
                bind: 'document-capture-data'
              },
              [getChannelName('post_customer_onboarding')]: {
                bind: 'request-post-onboarding'
              },
              global_open_document_url: {
                bind: 'open-document-by-url'
              },
              global_retry_error: {
                bind: 'show-error-modal-pdf'
              },
              [getChannelName('post_customer')]: {
                bind: 'request-post-customer'
              },
              [getChannelName('post_customer_civil_registries')]: {
                bind: 'post-customer-civil-registries'
              },
              [getChannelName('open_control_veil')]: {
                bind: 'manager-digital-account-open-veil'
              },
              [getChannelName('close_control_veil')]: {
                bind: 'manager-digital-account-close-veil'
              },
              [getChannelName('open_messages_veil')]: {
                bind: 'update-spinner-message'
              },
              [getChannelName('customer_contact_data')]: {
                bind: 'create-customer-response'
              },
              [getChannelName('set_customer_id')]: {
                bind: 'set-customer-id'
              },
              open_digital_account_post_create_signature: {
                bind: 'post-create-signature'
              },
              [getChannelName('customer_signature_data')]: {
                bind: 'create-customer-signature-response'
              },
              [getChannelName('set_operation_number')]: {
                bind: 'set-operation-number'
              },
              [getChannelName('customer_onboarding_data')]: {
                bind: 'create-customer-onboarding-response'
              },
              [getChannelName('complete_step')]: {
                bind: 'step-complete'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-modal'
              },
              [getChannelName('request_get_picture_front')]: {
                bind: 'request-get-picture-front'
              },
              [getChannelName('request_get_picture_back')]: {
                bind: 'request-get-picture-back'
              },
              [getChannelName('post_intelligent_extract')]: {
                bind: 'post-intelligent-extract'
              },
              [getChannelName('set_extraction_id')]: {
                bind: 'set-extraction-id'
              },
              [getChannelName('get_intelligent_extract')]: {
                bind: 'get-intelligent-extract'
              },
              [getChannelName('get_intelligent_extract_done')]: {
                bind: 'get-intelligent-extract-done'
              },
              [getChannelName('delete_intelligent_extract')]: {
                bind: 'delete-intelligent-extract'
              },
              [getChannelName('error_data_validation_modal')]: {
                bind: 'error-data-validation-modal'
              },
              [getChannelName('error_personal_data_validation_modal')]: {
                bind: 'error-personal-data-validation-modal'
              },
              [getChannelName('success_page')]: {
                bind: 'go-to-success-page',
                link: {
                  page: 'openDigitalAccountSuccess'
                }
              },
              [getChannelName('error_scan_id_modal')]: {
                bind: 'error-scan-id-modal'
              },
              [getChannelName('error_contact_data_modal')]: {
                bind: 'error-contact-data-modal'
              },
              open_digital_account_error_registered_data_modal: {
                bind: 'error-registered-data-modal'
              },
              open_digital_account_error_post_contact_data_rejected: {
                bind: 'error-post-contact-data-rejected'
              },
              open_digital_account_error_personal_data_app_completed_review: {
                bind: 'error-personal-data-app-completed-review'
              },
              [getChannelName('reset_operative')]: {
                bind: 'reset-operative'
              },
              [getChannelName('go_to_landing')]: {
                bind: 'go-to-landing',
                backStep: true
              },
              [getChannelName('onboarding_bureau_consultation')]: {
                bind: 'onboarding-bureau-consultation'
              },
              [getChannelName('update-onboarding-headers')]: {
                bind: 'update-onboarding-headers'
              },
              [getChannelName('ocr_feature_enable')]: {
                bind: 'ocr-feature-enable'
              },
              [getChannelName('bureau_feature_enable')]: {
                bind: 'bureau-feature-enable'
              },
              [getChannelName('non_binary_gender_feature_enable')]: {
                bind: 'non-binary-gender-feature-enable'
              },
              [getChannelName('software_tokens_register')]: {
                bind: 'software-tokens-register'
              },
              [getChannelName('_get_basic_digital_account_contract')]: {
                bind: 'get-basic-digital-account-contract'
              },
              [getChannelName('_get_single_digital_contract')]: {
                bind: 'get-single-digital-contract'
              },
              [getChannelName('error_document_capture_permissions_denied')]: {
                bind: 'error-document-capture-permissions-denied'
              },
              [getChannelName('open_native_settings')]: {
                bind: 'open-native-settings'
              },
              open_digital_account_multistep_response_error_personal_data: {
                bind: 'seervicePersonalDataError'
              },
              global_action_launcher_uri: {
                bind: 'open-external-url-bank-branches'
              },
              global_open_uri: {
                bind: 'open-external-url-bank-branches'
              },
              open_digital_account_onboarding_token: {
                bind: 'open-digital-account-onboarding-token',
                'forward-to-native': true
              },
              digital_account_post_active_notification_request: {
                bind: 'post-active-notification-request'
              },
              digita_activation_send_mobile_number: {
                bind: 'send-mobile-number'
              },
              digital_account_sign_new_otp: {
                bind: 'sign-new-otp'
              },
              digital_account_transversa_change_header: {
                bind: 'transversa-change-header'
              },
              digital_account_error_customer_transversal: {
                bind: 'error-customer-transversal'
              },
              digital_account_update_active_notification_headers: {
                bind: 'update-active-notification-headers'
              },
              digital_account_send_version_geographic_places: {
                bind: 'send-version-geographic-places'
              },
              [getChannelName('send_version_business-documents')]: {
                bind: 'send-version-business-documents'
              },
              digital_account_init_digital_activation: {
                bind: 'init-request-digital-activation'
              },
              digital_account_post_digital_activation: {
                bind: 'request-digital-activation'
              },
              digital_account_send_cunstomer_id: {
                bind: 'send-customer-id'
              },
              digital_account_success_alert_transversal: {
                bind: 'success-alert-transversal'
              },
              digital_account_call_otp_sms: {
                bind: 'call-otp-sms'
              },
              digital_account_post_call_up: {
                bind: 'request-call-up'
              },
              digital_account_go_to_native_login: {
                bind: 'go-to-native-login',
                'forward-to-native': true,
                nativeLink: {
                  page: 'nativeLogin'
                }
              },
              open_digital_modal_INE: {
                bind: 'modal-escaneo-ine'
              },
              open_digital_account_success_payload: {
                bind: 'send-data-current-account'
              },
              open_digital_account_analytics_transversal_flag: {
                bind: 'is-transversal-user'
              },
              open_digital_account_analytics_transversal_success: {
                bind: 'analytics-transversal-success'
              },
              id_ruc_feature_flag_event: {
                bind: 'feature-flag-value-id-ruc-event'
              },
              open_digital_account_analytics_personal_data_spinner: {
                bind: 'analytics-fire-personal-data-spinner-footprint'
              },
              open_digital_account_analytics_fire_error_contact_data_footprint: {
                bind: 'analytics-fire-error-contact-data-footprint'
              },
              open_digital_account_multistep_launch_signature_pad: {
                bind: 'go-to-signature-pad',
                link: {
                  page: 'openDigitalAccountSignaturePadModal'
                }
              },
              open_digital_account_flag_to_referral_code: {
                bind: 'is-flag-to-referral-code'
              },
              link_mgm_referral_code: {
                bind: 'link-mgm-referral-code'
              },
              open_digital_active_referral_code: {
                bind: 'feature-flag-active-refered-code'
              }
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-modal'
                }
              }
            },
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
        type: 'UI',
        tag: 'bbva-multistep-digital-account',
        tagSpherica: 'bbva-multistep-digital-account-spherica',
        familyPath: '@glomo-web-components/bbva-multistep-digital-account',
        familyPathSpherica: '@glomo-web-components/bbva-multistep-digital-account-spherica',
        render: 'litElement',
        properties: {
          bindedLiterals: pageAnalytics.bindedLiterals,
          isNativeIos,
          productId: 'CUD',
          subproductId: 'CUD',
          cellsConnections: {
            in: {
              open_digital_account_multistep_onboarding_success: {
                bind: 'onboardingSuccessHandler'
              },
              [getChannelName('go_to_landing')]: {
                bind: 'resetSteps'
              },
              [getChannelName('ocr_feature_enable')]: {
                bind: 'isOcrEnabled'
              },
              [getChannelName('bureau_feature_enable')]: {
                bind: 'isBureauEnabled'
              },
              [getChannelName('non_binary_gender_feature_enable')]: {
                bind: 'isNonBinaryGenderEnabled'
              },
              [getChannelName('set_list_records_processed')]: {
                bind: 'entitiesList'
              },
              [getChannelName('set_get_list_places')]: {
                bind: 'setListPlaces'
              },
              [getChannelName('error_get_list_places')]: {
                bind: 'showInvalidPostalCode'
              },
              [getChannelName('error_cero_zip_code')]: {
                bind: 'showInvalidPostalCode'
              },
              [getChannelName('document_capture_data')]: {
                bind: 'documentCaptureData'
              },
              [getChannelName('customer_personal_data')]: {
                bind: 'civilRegistriesHandler'
              },
              [getChannelName('date_picker_success')]: {
                bind: 'setCalendarDate'
              },
              [getChannelName('date_picker_error')]: {
                bind: 'errorSetDate'
              },
              [getChannelName('save_sign')]: {
                bind: 'receiveSign'
              },
              [getChannelName('error_validation_data')]: {
                bind: 'errorData'
              },
              [getChannelName('customer_contact_data')]: {
                bind: 'createCustomerResponse'
              },
              [getChannelName('customer_signature_data')]: {
                bind: 'createSignatureResponse'
              },
              [getChannelName('customer_onboarding_data')]: {
                bind: 'createOnboardingResponse'
              },
              [getChannelName('complete_step')]: {
                bind: 'completeStep'
              },
              [getChannelName('get_intelligent_extract_done')]: {
                bind: 'getIntelligentExtractDone'
              },
              [getChannelName('retry_intelliget_extract_modal_accept')]: {
                bind: 'retryIntelligetExtractModalAccept'
              },
              [getChannelName('retry_personal_data_modal_accept')]: {
                bind: 'retryIntelligetExtractModalAccept'
              },
              [getChannelName('retry_create_customer_onboarding_modal_accept')]: {
                bind: 'retryRequestOtp'
              },
              [getChannelName('retry_postal_code_modal_accept')]: {
                bind: 'retryPostalCode'
              },
              [getChannelName('exit_flow_code_modal_cancel')]: {
                bind: 'exitMultistepFlow'
              },
              [getChannelName('retry_error_personal_data_modal_exit')]: {
                bind: 'resetSteps'
              },
              [getChannelName('retry_error_contact_data_modal_exit')]: {
                bind: 'resetSteps'
              },
              [getChannelName('retry_postal_code_modal_cancel')]: {
                bind: 'resetSteps'
              },
              [getChannelName('error_postal_code_modal_exit')]: {
                bind: 'resetSteps'
              },
              [getChannelName('error_document_capture_permissions_denied')]: {
                bind: 'isPermissionsDeniedModalVisible'
              },
              signature_request_new_sms_openDigitalAccountMultistep: {
                bind: 'retryRequestOtp'
              },
              digital_activation_send_flag_transversal: {
                bind: 'transversalFlag'
              },
              digital_account_transversa_change_header: {
                bind: 'headerVariant'
              },
              digital_account_error_customer_transversal: {
                bind: 'showModalsErrorTransversal'
              },
              digital_account_init_digital_activation: {
                bind: 'createAccountTransversal'
              },
              digital_account_success_alert_transversal: {
                bind: 'flagAlertsTransversal'
              },
              open_digital_account_multistep_retry_error_create_customer_onboarding_modal_exit: {
                bind: 'closeHeaderMain'
              },
              digital_account_call_otp_sms: {
                bind: 'sendPhoneOtp'
              },
              digital_account_go_to_native_login: {
                bind: 'resetSteps'
              },
              open_digital_account_multistep_response_error_list_records: {
                bind: 'setHardDataIntoRecordList'
              },
              open_digital_account_multistep_response_error_list_records_api: {
                bind: 'setHardDataIntoRecordList'
              },
              open_digital_account_multistep_response_error_personal_data: {
                bind: 'errorPersonalData'
              },
              open_digital_modal_INE: {
                bind: 'openModalRecomendation'
              },
              open_digital_account_flag_to_referral_code: {
                bind: 'activeInputCode'
              },
              mgm_code_validation_success: {
                bind: 'handleMgmValidationSuccess'
              },
              id_ruc_feature_flag_event: {
                bind: 'idRucFeatureFlagValue'
              },
              open_digital_account_analytics_transversal_flag: {
                bind: 'setTransversalFlag'
              },
              mgm_code_validation_error: {
                bind: 'handleMgmValidationError'
              }
            },
            out: {
              open_digital_account_tmp_data_user: {
                bind: 'tmp-user-data'
              },
              [getChannelName('request_list_places')]: {
                bind: 'request-postal-code'
              },
              [getChannelName('document_capture')]: {
                bind: 'open-document-capture'
              },
              [getChannelName('request_post_customer')]: {
                bind: 'create-customer-request'
              },
              [getChannelName('basic_digital_account')]: {
                bind: 'request-basic-digital-account'
              },
              [getChannelName('single_digital_contract')]: {
                bind: 'request-single-digital-contract'
              },
              [getChannelName('launch_date_picker')]: {
                bind: 'digital-account-open-date-picker'
              },
              [getChannelName('get_contract_option')]: {
                bind: 'contract-option'
              },
              open_digital_account_multistep_launch_signature_pad: {
                bind: 'signature-pad-event',
                link: {
                  page: 'openDigitalAccountSignaturePadModal'
                }
              },
              [getChannelName('create_signature_request')]: {
                bind: 'request-create-signature'
              },
              [getChannelName('tmp_account_data')]: {
                bind: 'tmp-account-data'
              },
              [getChannelName('set_process')]: {
                bind: 'bureau-consultation'
              },
              [getChannelName('go_to_step_address')]: {
                bind: 'go-to-step-address'
              },
              [getChannelName('go_to_step_contact')]: {
                bind: 'go-to-step-contact'
              },
              [getChannelName('go_to_step_contracts')]: {
                bind: 'go-to-step-contracts'
              },
              [getChannelName('go_to_step_password')]: {
                bind: 'go-to-step-password'
              },
              [getChannelName('go_to_summary')]: {
                bind: 'go-to-summary'
              },
              [getChannelName('analytics_first_item_interaction')]: {
                bind: 'analytics-first-interaction'
              },
              [getChannelName('analytics_open_recomendations_modal')]: {
                bind: 'open-recomendations-modal'
              },
              [getChannelName('go_to_landing')]: {
                bind: 'go-to-landing'
              },
              [getChannelName('open_exit_modal')]: {
                bind: 'go-back'
              },
              [getChannelName('footer_button_click_deny_permissions_modal')]: {
                bind: 'footer-button-click-deny-permissions-modal'
              },
              close_digital_account_multistep_after_sign_spinner: {
                bind: 'hide-spinner-to-next-step'
              },
              open_digital_account_multistep_after_sign_spinner: {
                bind: 'show-spinner-to-next-step'
              },
              digital_account_send_phone_otp_datamanager: {
                bind: 'send-phone-otp-datamanager'
              },
              digital_account_data_digital_activation: {
                bind: 'tmp-account-data-digital-activation'
              },
              digital_account_call_send_call_up_request: {
                bind: 'call-send-call-up-request'
              },
              digital_account_go_back_login: {
                bind: 'go-back-login'
              },
              open_digital_account_multistep_response_success_list_records: {
                bind: 'hard_list_records'
              },
              open_digital_account_analytic_ine_number: {
                bind: 'send-analytic-ine-number'
              },
              open_digital_account_analytic_digital_services: {
                bind: 'send-analytic-digital-services'
              },
              open_digital_account_analytic_call_process: {
                bind: 'send-analytic-call-process'
              },
              open_digital_account_multistep_continue_button_analytics: {
                bind: 'multistep-continue-button-click'
              },
              open_digital_account_request_list_business_documents_api: {
                bind: 'request-list-business-documents-api'
              },
              close_native_web_view_to_welcome: {
                bind: 'go-to-native-welcome',
                'forward-to-native': true,
                nativeLink: {
                  page: 'nativeLogin'
                }
              },
              validate_code_verification: {
                bind: 'validate-referral-code'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-nativeconnector-document-capture',
        familyPath: '@glomo-web-components/bbva-nativeconnector-document-capture',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('document_capture_launch')]: {
                bind: 'launchDocumentCapture'
              }
            },
            out: {
              [getChannelName('document_capture_success')]: {
                bind: 'launch-document-capture-success'
              },
              [getChannelName('document_capture_error')]: {
                bind: 'launch-document-capture-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-dataprovider-notifications-list',
        tag: 'bbva-dataprovider-notifications-list',
        render: 'litElement',
        properties: {
          headers: { 'Accept-Language': 'es' },
          host,
          native: isNative,
          otpId: pageName,
          requiredToken,
          cellsConnections: {
            in: {
              digital_account_post_active_notification_request: {
                bind: 'postActivateNotifications'
              },
              digital_account_update_active_notification_headers: {
                bind: 'signRequest'
              }
            },
            out: {
              digital_account_post_active_notifications_success: {
                bind: 'success-on-post-active-notifications'
              },
              digital_account_post_active_notifications_error: {
                bind: 'error-on-post-active-notifications'
              },
              [getChannelName('otp')]: {
                bind: 'signature-required-first-step-dm'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-nativesettings',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('open_native_settings')]: {
                bind: 'openSetting'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'glomo-photo-converter-manager',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('request_get_picture_front')]: {
                bind: 'getImageFile'
              },
              [getChannelName('request_get_picture_back')]: {
                bind: 'getImageFile'
              }
            },
            out: {
              [getChannelName('photo_converter_success_front')]: {
                bind: 'glomo-photo-converter-success-front-manager'
              },
              [getChannelName('photo_converter_success_back')]: {
                bind: 'glomo-photo-converter-success-back-manager'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-dataprovider-document-processes',
        familyPath: '@glomo-web-components/bbva-dataprovider-document-processes',
        render: 'litElement',
        properties: {
          host,
          native: isNative,
          version: CONFIG.globalServices.versions.documentProcesses,
          nsId: CONFIG.globalServices.ieNamespace,
          requiredToken,
          cellsConnections: {
            in: {
              [getChannelName('post_intelligent_extract')]: {
                bind: 'postIntelligentExtractUpload'
              },
              [getChannelName('set_extraction_id')]: {
                bind: 'extractionId'
              },
              [getChannelName('get_intelligent_extract')]: {
                bind: 'getIntelligentExtractExtractions'
              },
              [getChannelName('delete_intelligent_extract')]: {
                bind: 'deleteIntelligentExtractExtractions'
              }
            },
            out: {
              [getChannelName('post_intelligent_extract_upload_success')]: {
                bind: 'post-intelligent-extract-upload-success'
              },
              [getChannelName('post_intelligent_extract_upload_error')]: {
                bind: 'post-intelligent-extract-upload-error'
              },
              [getChannelName('get_intelligent_extract_upload_success')]: {
                bind: 'get-intelligent-extract-get-success'
              },
              [getChannelName('get_intelligent_extract_upload_error')]: {
                bind: 'get-intelligent-extract-get-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-dataprovider-catalogs',
        familyPath: '@glomo-web-components/bbva-dataprovider-catalogs',
        render: 'litElement',
        properties: {
          host,
          catalogId: '06320074E',
          version: CONFIG.globalServices.versions.catalogs,
          requiredToken,
          native: isNative,
          cellsConnections: {
            in: {
              [getChannelName('get_list_records')]: {
                bind: 'getCatalogsCatalogRecords'
              }
            },
            out: {
              open_digital_account_multistep_response_success_list_records: {
                bind: 'get-catalogs-catalog-record-get-v0-success'
              },
              open_digital_account_multistep_response_error_list_records: {
                bind: 'get-catalogs-catalog-record-get-v0-error'
              },
              open_digital_account_multistep_response_error_list_records_api: {
                bind: 'api-dm-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-dataprovider-geographicplaces',
        familyPath: '@glomo-web-components/bbva-dataprovider-geographicplaces',
        render: 'litElement',
        properties: {
          host,
          version: CONFIG.globalServices.versions.geographicPlaces,
          requiredToken,
          native: isNative,
          cellsConnections: {
            in: {
              [getChannelName('request_list_places')]: {
                bind: 'getPlaces'
              },
              digital_account_send_version_geographic_places: {
                bind: 'version'
              }
            },
            out: {
              [getChannelName('response_list_places')]: {
                bind: 'get-geographicplaces-places-v0-success'
              },
              [getChannelName('response_error_list_places')]: {
                bind: 'get-geographicplaces-places-v0-error'
              },
              [getChannelName('get_list_places_error')]: {
                bind: 'api-dm-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-dataprovider-customers',
        familyPath: '@glomo-web-components/bbva-dataprovider-customers',
        render: 'litElement',
        properties: {
          host,
          native: isNative,
          apiVersion: CONFIG.globalServices.versions.customersV1,
          requiredToken,
          otpId: pageName,
          requiredOTP: true,
          cellsConnections: {
            in: {
              [getChannelName('post_customer_civil_registries')]: {
                bind: 'postCustomersCivilRegistries'
              },
              [getChannelName('post_customer_onboarding')]: {
                bind: 'postMxCustomerOnboarding'
              },
              [getChannelName('post_customer')]: {
                bind: 'postCustomer'
              },
              [getChannelName('set_customer_id')]: {
                bind: 'customerId'
              },
              open_digital_account_post_create_signature: {
                bind: 'postCustomersCustomerSignature'
              },
              [getChannelName('onboarding_bureau_consultation')]: {
                bind: 'postCustomersCustomerTerms'
              },
              [getChannelName('update-onboarding-headers')]: {
                bind: 'signRequest'
              }
            },
            out: {
              [getChannelName('post_customer_civil_registries_success')]: {
                bind: 'post-customer-civil-registries-success'
              },
              [getChannelName('post_customer_civil_registries_error')]: {
                bind: 'post-customer-civil-registries-error'
              },
              [getChannelName('onboarding_success')]: {
                bind: 'post-mx-customer-onboarding-v1-success'
              },
              [getChannelName('onboarding_error')]: {
                bind: 'post-mx-customer-onboarding-v1-error'
              },
              [getChannelName('customer_success')]: {
                bind: 'post-customers-v1-success'
              },
              [getChannelName('customer_error')]: {
                bind: 'post-customers-v1-error'
              },
              [getChannelName('customer_error')]: {
                bind: 'api-dm-error'
              },
              [getChannelName('create_signature_success')]: {
                bind: 'post-customers-customer-signature-success'
              },
              [getChannelName('create_signature_error')]: {
                bind: 'post-customers-customer-signature-error'
              },
              [getChannelName('customer_terms_success')]: {
                bind: 'post-customers-customer-terms-v1-success'
              },
              [getChannelName('customer_terms_error')]: {
                bind: 'post-customers-customer-terms-v1-error'
              },
              [getChannelName('go_to_otp')]: {
                bind: 'signature-required-first-step-dm'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-dataprovider-security',
        familyPath: '@glomo-web-components/bbva-dataprovider-security',
        render: 'litElement',
        properties: {
          host,
          native: isNative,
          version: CONFIG.globalServices.security.localVersion,
          requiredToken,
          cellsConnections: {
            in: {
              [getChannelName('software_tokens_register')]: {
                bind: 'postMxSoftwareTokensRegister'
              }
            },
            out: {
              [getChannelName('post_mx_software_tokens_register')]: {
                bind: 'post-mx-software-tokens-register'
              },
              [getChannelName('error_on_post_mx_software_tokens_register')]: {
                bind: 'error-on-post-mx-software-tokens-register'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-local-business-documents-api-dm',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-local-business-documents-api-dm',
        properties: {
          host,
          version: CONFIG.globalServices.versions.businessDocumentsV0,
          native: isNative,
          requiredToken,
          cellsConnections: {
            in: {
              [getChannelName('_get_basic_digital_account_contract')]: {
                bind: 'getBusinessDocuments'
              },
              [getChannelName('_get_single_digital_contract')]: {
                bind: 'getBusinessDocuments'
              },
              [getChannelName('send_version_business-documents')]: {
                bind: 'version'
              }
            },
            out: {
              [getChannelName('get_business_documents_success')]: {
                bind: 'business-documents-api-dm-fetch'
              },
              [getChannelName('get_business_documents_error')]: {
                bind: 'business-documents-api-dm-fetch-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-local-customers-api-dm',
        familyPath: '@glomo-web-components/bbva-local-customers-api-dm',
        render: 'litElement',
        properties: {
          host,
          version: CONFIG.globalServices.versions.customersV1,
          requiredToken,
          native: isNative,
          cellsConnections: {
            in: {
              digital_account_post_digital_activation: {
                bind: 'postDigitalActivation'
              },
              digital_account_send_cunstomer_id: {
                bind: 'customerId'
              },
              digital_account_post_call_up: {
                bind: 'postCallUp'
              }
            },
            out: {
              digital_account_response_success_digital_activation: {
                bind: 'post-digital-activation-success'
              },
              digital_account_response_error_digital_activation_generic: {
                bind: 'api-dm-error'
              },
              digital_account_response_error_digital_activation: {
                bind: 'post-digital-activation-error'
              },
              [getChannelName('response_success_call_up')]: {
                bind: 'post-call-up-success'
              },
              digital_account_response_error_call_up: {
                bind: 'post-call-up-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'glomo-device-accesses-controller',
        tag: 'glomo-device-accesses-mx-controller',
        properties: {
          typeDevice: isNativeIos,
          cellsConnections: {
            in: {
              [getChannelName('secure_sharing_get_data')]: {
                bind: 'secureSharingData'
              },
              global_device_get_device_platform_success: {
                bind: 'platformInfo'
              },
              global_device_get_device_model_success: {
                bind: 'modelInfo'
              },
              global_device_get_manufacturer_success: {
                bind: 'manufacturer'
              },
              global_storage_get_deviceId_success: {
                bind: 'deviceId'
              }
            },
            out: {
              global_device_info_get_model: {
                bind: 'device-info-started'
              },
              global_device_info_get_manufacturer: {
                bind: 'device-info-started'
              },
              [getChannelName('device_info_send_dm')]: {
                bind: 'device-accesses-send-device-info'
              },
              global_get_from_storage: {
                bind: 'get-from-local-storage'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-digital-account',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-digital-account',
        properties: {
          bindedLiterals: pageAnalytics.bindedLiterals,
          cellsConnections: {
            in: {
              [getChannelName('init_page')]: {
                bind: 'analyticAppPageVisit'
              },
              [getChannelName('open_exit_modal')]: {
                bind: 'reset'
              },
              [getChannelName('analytics_first_item_interaction')]: {
                bind: 'analyticAppStarted'
              },
              open_digital_account_tmp_data_user: {
                bind: 'setUserGender'
              },
              [getChannelName('go_to_step_address')]: {
                bind: 'firesAnalyticsStepAddress'
              },
              [getChannelName('go_to_step_contact')]: {
                bind: 'firesAnalyticsStepContact'
              },
              [getChannelName('go_to_step_contracts')]: {
                bind: 'firesAnalyticsStepContracts'
              },
              [getChannelName('go_to_step_password')]: {
                bind: 'firesAnalyticsStepPassword'
              },
              [getChannelName('set_customer_id')]: {
                bind: 'setProspectId'
              },
              [getChannelName('go_to_summary')]: {
                bind: 'firesAnalyticsStepConfirmation'
              },
              [getChannelName('go_to_otp')]: {
                bind: 'firesAnalyticsStepOtp'
              },
              [getChannelName('analytics_open_recomendations_modal')]: {
                bind: 'firesRecomendationsModalFootprint'
              },
              [getChannelName('set_operation_number')]: {
                bind: 'setOperationNumber'
              },
              [getChannelName('set_process')]: {
                bind: 'setProcess'
              },
              [getChannelName('error_data_validation_modal')]: {
                bind: 'firesErrorDataValidationFootprint'
              },
              [getChannelName('error_personal_data_validation_modal')]: {
                bind: 'firesAppCompletedRejected'
              },
              [getChannelName('error_scan_id_modal')]: {
                bind: 'firesErrorScanIdFootprint'
              },
              open_digital_account_analytics_fire_error_contact_data_footprint: {
                bind: 'firesErrorContactDataFootprint'
              },
              open_digital_account_error_post_contact_data_rejected: {
                bind: 'firesAppCompletedRejected'
              },
              open_digital_account_error_personal_data_app_completed_review: {
                bind: 'firesAppCompletedReview'
              },
              open_digital_account_error_registered_data_modal: {
                bind: 'firesAppCompletedReview'
              },
              open_digital_account_analytics_transversal_flag: {
                bind: 'setTransversalFlag'
              },
              open_digital_account_analytic_ine_number: {
                bind: 'firesIneNumberModalFootprint'
              },
              open_digital_account_multistep_launch_signature_pad: {
                bind: 'firesSignModalFootprint'
              },
              digital_account_send_phone_otp_datamanager: {
                bind: 'firesAnalyticsStepOtp'
              },
              open_digital_account_analytics_transversal_success: {
                bind: 'firesTransversalSuccess'
              },
              open_digital_account_analytic_digital_services: {
                bind: 'firesDigitalServicesFootprint'
              },
              open_digital_account_analytic_call_process: {
                bind: 'firesCallProcessFootprint'
              },
              open_digital_account_analytics_personal_data_spinner: {
                bind: 'firesPersonalDataSpinnerFootprint'
              },
              open_digital_account_post_create_signature: {
                bind: 'firesSignedContractsFootprint'
              },
              open_digital_account_multistep_continue_button_analytics: {
                bind: 'handleContinueButtonClick'
              },
              mgm_code_validation_success: {
                bind: 'setTypology'
              }
            },
            out: {
              open_digital_account_flag_to_referral_code: {
                bind: 'is-flag-to-referral-code'
              },
              open_digital_account_multistep_personal_data_spinner: {
                bind: 'analytics-fire-personal-data-spinner-footprint',
                analytics: pageAnalytics.getAdvancedFootprintAnalytics({ level2: 'spinner' })
              },
              [getChannelName('analytic_on_page_visit')]: {
                bind: 'analytics-page-visit',
                analytics: pageAnalytics._getPageVisitRaw('1 datos personales', '1 datos personales', true)
              },
              [getChannelName('analytic_app_started')]: {
                bind: 'analytics-app-started',
                analytics: pageAnalytics.appStarted
              },
              [getChannelName('analytic_step_address')]: {
                bind: 'analytics-step-address',
                analytics: pageAnalytics._getAppStep('2 domicilio', '2 domicilio', '2', true, false, false, true)
              },
              [getChannelName('analytic_step_contact')]: {
                bind: 'analytics-step-contact',
                analytics: pageAnalytics._getAppStep('3 datos de contacto', '3 datos de contacto', '3', true, false, false, true)
              },
              [getChannelName('analytic_step_contracts')]: {
                bind: 'analytics-step-contracts',
                analytics: pageAnalytics._getAppStep('4 contratos', '4 contratos', '4', true, true, false, true)
              },
              [getChannelName('analytic_step_password')]: {
                bind: 'analytics-step-password',
                analytics: pageAnalytics._getAppStep('5 contrasena', '5 contrasena', '5', true, true, true, true)
              },
              [getChannelName('analytic_step_confirmation')]: {
                bind: 'analytics-step-confirmation',
                analytics: pageAnalytics._getAppStep('6 confirmacion', '6 confirmacion', '6', true, true, true, true)
              },
              [getChannelName('analytic_step_otp')]: {
                bind: 'analytics-step-otp',
                analytics: pageAnalytics._getAppStep('7 otp', '7 otp', '7', true, true, true, true)
              },
              [getChannelName('app_complete')]: {
                bind: 'analytics-app-completed',
                analytics: pageAnalytics.getAppCompletedLevel2Analytics({})
              },
              open_digital_account_multistep_app_completed_review: {
                bind: 'analytics-fire-app-completed-review',
                analytics: pageAnalytics.getAppCompletedLevel2Analytics({ state: 'en revision' })
              },
              open_digital_account_multistep_app_completed_rejected: {
                bind: 'analytics-fire-app-completed-rejected',
                analytics: pageAnalytics.getAppCompletedLevel2Analytics({ state: 'rechazado' })
              },
              [getChannelName('open_modal_info')]: {
                bind: 'analytics-page-view-recomendations-modal',
                analytics: pageAnalytics.getAdvancedFootprintAnalytics({ level2: 'escanea tu ine' })
              },
              [getChannelName('error_data_validation_footprint')]: {
                bind: 'analytics-error-data-validation-footprint',
                analytics: pageAnalytics._getAdvancedFootprintError('refactorN2.data.validation', 'error validacion de datos')
              },
              [getChannelName('error_scan_id_footprint')]: {
                bind: 'analytics-fire-error-scan-id-footprint',
                analytics: pageAnalytics._getAdvancedFootprintError('refactorN2.scan', 'error no es posible escanear ine')
              },
              [getChannelName('error_contact_data_footprint')]: {
                bind: 'analytics-fire-error-contact-data-footprint',
                analytics: pageAnalytics._getAdvancedFootprintError('refactorN2.contact.data', 'error datos ya registrados')
              },
              open_digital_account_multistep_transversal_page_visit: {
                bind: 'analytics-transversal-app-page-visit',
                analytics: transversalAnalytics.appPageVisit
              },
              open_digital_account_multistep_transversal_page_started: {
                bind: 'analytics-transversal-app-started',
                analytics: transversalAnalytics.appStarted
              },
              open_digital_account_multistep_transversal_address: {
                bind: 'analytics-transversal-address',
                analytics: transversalAnalytics.setStep('appStepTwo')
              },
              open_digital_account_multistep_transversal_contact: {
                bind: 'analytics-transversal-contact',
                analytics: transversalAnalytics.setStep('appStepThree')
              },
              open_digital_account_multistep_transversal_otp: {
                bind: 'analytics-transversal-otp',
                analytics: transversalAnalytics.setStep('appStepFour')
              },
              open_digital_account_multistep_transversal_contract: {
                bind: 'analytics-transversal-contract',
                analytics: transversalAnalytics.setStep('appStepFive')
              },
              open_digital_account_multistep_transversal_password: {
                bind: 'analytics-transversal-password',
                analytics: transversalAnalytics.setStep('appStepSix')
              },
              open_digital_account_multistep_transversal_confirmation: {
                bind: 'analytics-transversal-confirmation',
                analytics: transversalAnalytics.setStep('appStepSeven')
              },
              open_digital_account_multistep_transversal_app_completed: {
                bind: 'analytics-transversal-app-completed',
                analytics: transversalAnalytics.appCompleted
              },
              open_digital_account_multistep_transversal_id_recommendations: {
                bind: 'analytics-transversal-id-recommendations',
                analytics: transversalAnalytics.advancedFootprintFlag('transversalMonoproduct', 'recomendaciones escanear ine')
              },
              open_digital_account_multistep_transversal_id_signature: {
                bind: 'analytics-transversal-id-signature',
                analytics: transversalAnalytics.advancedFootprintFlag('transversalMonoproduct', 'firma')
              },
              open_digital_account_multistep_transversal_id_number: {
                bind: 'analytics-transversal-id-number',
                analytics: transversalAnalytics.advancedFootprintFlag('transversalMonoproduct', 'numero ine')
              },
              open_digital_account_multistep_id_signature: {
                bind: 'analytics-signal-modal-footprint',
                analytics: pageAnalytics.getAdvancedFootprintAnalytics({ level2: '4 contratos', level3: 'firma digital' })
              },
              open_digital_account_multistep_digital_services: {
                bind: 'analytics-transversal-digital-services-footprint',
                analytics: transversalAnalytics.advancedFootprintFlag('transversalMonoproduct', 'activacion de servicios digitales')
              },
              open_digital_account_multistep_call_process: {
                bind: 'analytics-transversal-digital-call-process',
                analytics: transversalAnalytics.advancedFootprintFlag('transversalMonoproduct', 'llamada en proceso')
              },
              open_digital_account_multistep_signed_contracts: {
                bind: 'analytics-signed-contracts',
                analytics: pageAnalytics.appSignedContracts
              },
              open_digital_account_analytics_continue_button_step: {
                bind: 'analytics-continue-button-step',
                analytics: pageAnalytics.getInternalLinkForSteps()
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-digital-activation-mx',
        familyPath: '@glomo-web-components/bbva-controller-digital-activation-mx',
        render: 'litElement',
        properties: {
          host,
          native: isNative,
          requiredToken,
          cellsConnections: {
            in: {
              open_digital_account_request_list_business_documents_api: {
                bind: 'requestListBusinessDocumentApi'
              }
            },
            out: {
              open_digital_account_get_bussiness_document_success: {
                bind: 'bbva-controller-digital-activation-get-bussiness-document-success'
              },
              open_digital_account_get_bussiness_document_error: {
                bind: 'bbva-controller-digital-activation-get-bussiness-document-unsuccess'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-public-app-settings',
        properties: {
          host: CONFIG.settingsHost,
          native: isNative,
          namespace: CONFIG.namespace,
          endpoint: CONFIG.endpoints.publicSettings,
          cellsConnections: {
            in: {
              open_digital_account_multistep_init_page: {
                bind: 'getAppSettings'
              }
            },
            out: {
              global_set_app_settings: {
                bind: 'app-settings-request-success'
              },
              global_set_app_settings_error: {
                bind: 'app-settings-request-error'
              }
            }
          }
        }
      }
    ]
  };
  const signConnectorAlert = require('./common/_sign-connector')(CONFIG)(base);

  Object.assign(connectionsIn(base)('cells-spinner-veil'), {
    [getChannelName('open_control_veil')]: {
      bind: 'openVeil'
    },
    [getChannelName('open_messages_veil')]: {
      bind: 'messages'
    },
    [getChannelName('close_control_veil')]: {
      bind: 'closeVeil'
    }
  });
  if (isNative) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  if (!isNativeIos) {
    base.components.push({
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
            [getChannelName('date_picker_success')]: {
              bind: 'launch-date-picker-success'
            },
            [getChannelName('date_picker_error')]: {
              bind: 'launch-date-picker-error'
            }
          }
        }
      }
    });
  }

  addRetryErrors(base)([
    {
      id: 'ODA-BASIC-DIGITAL-ACCOUNT-ERROR-REQUEST',
      acceptRetry: { bind: 'getBasicDigitalAccount', component: 'bbva-manager-digital-account' },
      finishRetry: { bind: 'exhaustedAttempts', component: 'bbva-manager-digital-account' }
    },
    {
      id: 'DIGITAL-ACTIVATION-DIGITAL-ACCOUNT-ERROR-REQUEST',
      acceptRetry: { bind: 'createAccountTransversal', component: 'bbva-multistep-digital-account' },
      finishRetry: { bind: 'reset', component: 'bbva-manager-digital-account' }
    },
    {
      id: 'CUSTOMER-DIGITAL-ACCOUNT-ERROR-REQUEST',
      acceptRetry: { bind: 'sendCustomerData', component: 'bbva-multistep-digital-account' },
      finishRetry: { bind: 'reset', component: 'bbva-manager-digital-account' }
    },
    {
      id: 'CALL-UP-DIGITAL-ACCOUNT-ERROR-REQUEST',
      acceptRetry: { bind: 'requestCallUp', component: 'bbva-manager-digital-account' },
      finishRetry: { bind: 'reset', component: 'bbva-manager-digital-account' }
    }
  ]);
  localStorageGet.addOutStorageChannels(base.components, [ 'deviceId' ], CONFIG);
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-customers', pageName, [
    'post-mx-customer-onboarding-v1-success',
    'post-mx-customer-onboarding-v1-error'
  ]);

  connectionsOut(base)('cells-sign-operation-dm-mx').open_digital_account_multistep_update_signature_type = {
    bind: 'signature-type-enabled-openDigitalAccountMultistep'
  };
  connectionsIn(base)('bbva-dataprovider-customers').signature_type_enabled_openDigitalAccountMultistep = {
    bind: 'setPhoneNumber'
  };

  signConnectorAlert('bbva-dataprovider-notifications-list', `${pageName}Transversal`,
    ['success-on-post-active-notifications', 'error-on-post-active-notifications']);

  const connectionsInDigital = connectionsIn(base);
  connectionsInDigital('bbva-dataprovider-notifications-list').signature_type_enabled_openDigitalAccountMultistepTransversal = {
    bind: 'setPhoneNumber'
  };
  connectionsInDigital('bbva-dataprovider-notifications-list').signature_request_new_sms_openDigitalAccountMultistepTransversal = {
    bind: 'setPhoneNumber'
  };
  const connectionsOutDigital = connectionsOut(base);
  connectionsOutDigital('cells-sign-operation-dm-mx').digital_account_update_signature_type = {
    bind: 'signature-type-enabled-openDigitalAccountMultistepTransversal'
  };
  connectionsOutDigital('cells-sign-operation-dm-mx').digital_account_update_signature_type_new_otp = {
    bind: 'signature-request-new-sms-openDigitalAccountMultistepTransversal'
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  } else {
    base.components.push(glomoAlertManager(CONFIG, pageName));
  }

  return sphericaPageUtils.spherize(base);
};
