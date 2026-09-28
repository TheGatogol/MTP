/* eslint-disable max-statements, new-cap, no-dupe-keys */
'use strict';
module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = utils;
  const PAGE_NAME = 'updateNationalId';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_updateNationalId')(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const host = CONFIG.globalServices.host;
  const native = !!CONFIG.native;
  const MAX_STEPS = 2;
  const CHANNEL_PREFIX = 'update-national-id-';
  const spinner = utils.SPINNER(CONFIG);
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [getChannelName('HIDE_SPINNER_CHANNEL')]: {
      bind: 'hide'
    },
    [getChannelName('SHOW_SPINNER_CHANNEL')]: {
      bind: 'show'
    },
    [getChannelName('init_page')]: {
      bind: 'show'
    }
  };
  const spinnerWithText = utils.SPINNER(CONFIG);
  spinnerWithText.properties.id = 'spinner-with-text';
  spinnerWithText.properties.topMessage = 'update-national-id-spinner-1-top-message';
  spinnerWithText.properties.messages = [ 'update-national-id-spinner-1-text' ];
  spinnerWithText.properties.spinnerWithText = true;
  spinner.properties.open = true;
  spinnerWithText.properties.cellsConnections.in = {
    [getChannelName('close_veridas_box')]: {
      bind: 'openVeil'
    },
    [getChannelName('get_veridas_close_box_status_done')]: {
      bind: 'closeVeil'
    },
    [getChannelName('HIDE_SPINNER_CHANNEL')]: {
      bind: 'closeVeil'
    }
  };
  const spinnerWithText2 = utils.SPINNER(CONFIG);
  spinnerWithText2.properties.id = 'spinner-with-text2';
  spinnerWithText2.properties.topMessage = 'update-national-id-spinner-2-top-message';
  spinnerWithText2.properties.messages = [ '' ];
  spinnerWithText2.properties.spinnerWithText = true;
  spinner.properties.open = true;
  spinnerWithText2.properties.cellsConnections.in = {
    [getChannelName('SHOW_SPINNER_STEP1')]: {
      bind: 'openVeil'
    },
    [getChannelName('HIDE_SPINNER_STEP1')]: {
      bind: 'closeVeil'
    },
    [getChannelName('set_top_message')]: {
      bind: 'topMessage'
    }
  };
  const template = {
    tag: 'glomo-opx-template',
    properties: {
      delayScrollTop: 300,
      animationType: 'verticalUp',
      topOnConfirm: true,
      headerFixed: true,
      className: IS_NATIVE_IOS ? 'bg-core-blue header-fixed' : 'bg-core-blue',
      extraHeaderClass: 'dark-blue-bg',
      topOnConfirm: true,
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('hidden_flow')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('show_summary')]: {
            bind: 'showConfirm'
          },
          [getChannelName('collapsed_step_2_validate')]: {
            bind: 'showConfirm'
          },
          [getChannelName('reset_other_steps')]: {
            bind: 'close'
          },
          [getChannelName('reset_page')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('scroll_to_step')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('exit-flow')]: {
            bind: 'close'
          },
          update_national_id_exit_flow: {
            bind: 'close'
          },
          [getChannelName('exit-flow-dm')]: {
            bind: 'close'
          },
          [getChannelName('close-confirm-zone')]: {
            bind: 'close'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName: PAGE_NAME,
      private: false,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'DM',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: '',
      backAction: 'navigate-to-dashboard',
      cellsConnections: {
        in: {
          [getChannelName('navigate_to_dashboard')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('navigation_to_dashboard')]: {
            bind: 'navigate-to-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-add-national-id-manager',
    properties: {
      native,
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'halfReset'
          },
          [getChannelName('init_page')]: {
            bind: 'init'
          },
          navigation_profile_to_update_national_id: {
            bind: 'userInformation'
          },
          [getChannelName('help_icon_pressed')]: {
            bind: 'configModalHelp'
          },
          [getChannelName('show_notice_privacy')]: {
            bind: 'alertManager'
          },
          [getChannelName('attachment_accepted')]: {
            bind: 'requestCostumersTerms'
          },
          [getChannelName('open_veridas_documents_box_success')]: {
            bind: 'openVeridasBoxSuccess'
          },
          [getChannelName('open_veridas_documents_box_error')]: {
            bind: 'errorVeridasBox'
          },
          [getChannelName('scann_identification')]: {
            bind: 'configModalCardAdvice'
          },
          update_national_id_go_to_scann_id: {
            bind: 'scannIdentification'
          },
          [getChannelName('take_selfie')]: {
            bind: 'takeSelfie'
          },
          [getChannelName('put_document_without_flash_success')]: {
            bind: 'successPutDocumentWithoutFlash'
          },
          [getChannelName('put_document_with_flash_success')]: {
            bind: 'successPutDocumentWithFlash'
          },
          [getChannelName('put_document_selfie_success')]: {
            bind: 'successPutSelfie'
          },
          [getChannelName('put_document_reverse_success')]: {
            bind: 'successPutDocumentReverse'
          },
          update_national_id_exit_put_vertifications_without_flash_accept: {
            bind: 'retryPutWithoutFlash'
          },
          update_national_id_exit_put_vertifications_wiht_flash_accept: {
            bind: 'retryPutWithFlash'
          },
          update_national_id_exit_put_vertifications_reverse_accept: {
            bind: 'retryPutReverse'
          },
          update_national_id_exit_put_vertifications_selfie_accept: {
            bind: 'retryPutSelfie'
          },
          [getChannelName('show_front_document_preview')]: {
            bind: 'showFrontDocumentPreview'
          },
          [getChannelName('show_reverse_document_preview')]: {
            bind: 'showReverseDocumentPreview'
          },
          [getChannelName('show_selfie_preview')]: {
            bind: 'showSelfiePreview'
          },
          [getChannelName('confirm_remove_documents_photos')]: {
            bind: 'showConfirmDeleteDocumentModal'
          },
          [getChannelName('confirm_remove_selfie_photos')]: {
            bind: 'showConfirmDeleteSelfieModal'
          },
          update_national_id_remove_documents_photos: {
            bind: 'removeIdentificationPhotos'
          },
          update_national_id_remove_selfie_photos: {
            bind: 'removeSelfiePhotos'
          },
          [getChannelName('success_request_customers_terms')]: {
            bind: 'successPostCustomerTerms'
          },
          [getChannelName('post_documents_verifications_execute_success')]: {
            bind: 'successCloseVeridasBox'
          },
          [getChannelName('post_documents_verifications_execute_error')]: {
            bind: 'errorDocumentsVerifications'
          },
          [getChannelName('get_documents_verifications_success')]: {
            bind: 'getVeridasBoxStatusSucess'
          },
          [getChannelName('get_documents_verifications_error')]: {
            bind: 'errorVeridasBox'
          },
          [getChannelName('recovery_input_values')]: {
            bind: 'recoveryInputValues'
          },
          [getChannelName('post_national_electoral_institute_validate_credentials_data_success')]: {
            bind: 'successPostNationalElectoralInstituteValidate'
          },
          [getChannelName('post_national_electoral_institute_validate_credentials_data_error')]: {
            bind: 'errorPostNationalElectoralInstituteValidate'
          },
          [getChannelName('close_add_national_id_flow')]: {
            bind: 'closeAddNationalIdFlow'
          },
          [getChannelName('patch_customer_success')]: {
            bind: 'successPatchCustomer'
          },
          [getChannelName('error_on_patch_customer')]: {
            bind: 'errorPatchCustomer'
          },
          [getChannelName('post_customer_identification_process_documents_overse_sucess')]: {
            bind: 'successPostOverseDocument'
          },
          [getChannelName('post_customer_identification_process_documents_overse_error')]: {
            bind: 'errorPostOverseDocument'
          },
          [getChannelName('post_customer_identification_process_documents_reverse_sucess')]: {
            bind: 'successPostReverseDocument'
          },
          [getChannelName('post_customer_identification_process_documents_reverse_error')]: {
            bind: 'errorPostReverseDocument'
          },
          [getChannelName('error_request_customers_terms')]: {
            bind: 'errorRequestCustomerTerms'
          },
          update_national_id_retry_request_customer_terms: {
            bind: 'requestCostumersTerms'
          },
          update_national_id_exit_failed_request: {
            bind: 'exitFlow'
          },
          update_national_id_retry_permissions_camera: {
            bind: 'exitFlow'
          },
          update_national_id_exit_failed_veridas: {
            bind: 'exitFlow'
          },
          update_national_id_exit_flow: {
            bind: 'exitFlow'
          },
          [getChannelName('put_document_without_flash_error')]: {
            bind: 'errorPutVerificationsWithoutFlash'
          },
          [getChannelName('put_document_with_flash_error')]: {
            bind: 'errorPutVerificationsWithFlash'
          },
          [getChannelName('put_document_reverse_error')]: {
            bind: 'errorPutVerificationsReverse'
          },
          [getChannelName('put_document_selfie_error')]: {
            bind: 'errorPutVerificationsSelfie'
          },
          [getChannelName('exit-flow')]: {
            bind: 'exitFlow'
          },
          update_national_id_retry_request_customer_terms_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_modal_incomplete_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_veridas_box_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_put_verifications_attachments_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_put_verifications_attachments_cancel_flash: {
            bind: 'exitFlow'
          },
          update_national_id_exit_put_verifications_attachments_cancel_reverse: {
            bind: 'exitFlow'
          },
          update_national_id_exit_put_verifications_attachments_cancel_selfie: {
            bind: 'exitFlow'
          },
          update_national_id_exit_error_ine_validate_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_error_patch_customer_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_error_overse_document_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_error_reverse_document_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_visit_electoral_insitute_cancel: {
            bind: 'exitFlow'
          },
          update_national_id_exit_document_verifications_cancel: {
            bind: 'exitFlow'
          },
          [getChannelName('on_reset_dm_opx')]: {
            bind: 'reset'
          },
          in_app_crm_advanced_page_navigation_page: {
            bind: 'setFromInApp'
          }
        },
        out: {
          [getChannelName('set_button_label')]: {
            bind: CHANNEL_PREFIX + 'update-button-summary'
          },
          [getChannelName('set_operative_navigation')]: {
            bind: CHANNEL_PREFIX + 'set-operative-for-navigation'
          },
          [getChannelName('set_header_title')]: {
            bind: CHANNEL_PREFIX + 'set-header-title'
          },
          [getChannelName('set_add_national_step')]: {
            bind: CHANNEL_PREFIX + 'set-add-national-step'
          },
          [getChannelName('set_check_national_step')]: {
            bind: CHANNEL_PREFIX + 'set-check-national-id-step'
          },
          [getChannelName('request_customers_terms')]: {
            bind: CHANNEL_PREFIX + 'request-costumers-terms'
          },
          [getChannelName('set_navigation')]: {
            bind: CHANNEL_PREFIX + 'set-back-action'
          },
          [getChannelName('show_receipt')]: {
            bind: CHANNEL_PREFIX + 'set-receipt',
            link: {
              page: 'updateNationalIdSuccess',
              skipHistory: true
            }
          },
          [getChannelName('set_success_title')]: {
            bind: CHANNEL_PREFIX + 'set-success-title',
            link: {
              page: 'updateNationalIdSuccess',
              skipHistory: true
            }
          },
          [getChannelName('set_modal_help')]: {
            bind: CHANNEL_PREFIX + 'set-modal-help'
          },
          [getChannelName('HIDE_SPINNER_CHANNEL')]: {
            bind: CHANNEL_PREFIX + 'hide-spinner'
          },
          [getChannelName('SHOW_SPINNER_CHANNEL')]: {
            bind: CHANNEL_PREFIX + 'show-spinner'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customer-id-changed'
          },
          update_national_id_SHOW_ALERT_MANAGER_NOTICE_PRIVACY: {
            bind: 'alert-manager'
          },
          [getChannelName('open_veridas_documents_box')]: {
            bind: CHANNEL_PREFIX + 'open-veridas-box'
          },
          [getChannelName('put_documents_verification')]: {
            bind: CHANNEL_PREFIX + 'put-documents-verification'
          },
          update_national_id_show_document_info_modal: {
            bind: CHANNEL_PREFIX + 'show-document-info-modal'
          },
          [getChannelName('show_photo_preview')]: {
            bind: CHANNEL_PREFIX + 'show-photo-preview'
          },
          update_national_id_show_confirm_remove_photos: {
            bind: CHANNEL_PREFIX + 'show-confirm-delete-modal'
          },
          [getChannelName('close_veridas_box')]: {
            bind: CHANNEL_PREFIX + 'close-veridas-box'
          },
          [getChannelName('SHOW_SPINNER_STEP1')]: {
            bind: CHANNEL_PREFIX + 'open-spinner'
          },
          [getChannelName('HIDE_SPINNER_STEP1')]: {
            bind: CHANNEL_PREFIX + 'hide-spinner'
          },
          [getChannelName('verify_veridas_box_status')]: {
            bind: CHANNEL_PREFIX + 'verify-veridas-box-status'
          },
          [getChannelName('get_veridas_box_status')]: {
            bind: CHANNEL_PREFIX + 'get-veridas-box-status'
          },
          [getChannelName('get_veridas_close_box_status_done')]: {
            bind: CHANNEL_PREFIX + 'get-veridas-close-box-status-done'
          },
          [getChannelName('send_headers_customer_dm')]: {
            bind: CHANNEL_PREFIX + 'send-headers-customer-dm'
          },
          [getChannelName('validate_documents_with_national_electoral_institute')]: {
            bind: CHANNEL_PREFIX + 'validate-documents-with-national-electoral-institute'
          },
          update_national_id_show_error_modal: {
            bind: CHANNEL_PREFIX + 'show-error-modal'
          },
          [getChannelName('modify_customer_document_data')]: {
            bind: CHANNEL_PREFIX + 'modify-customer-document-data'
          },
          [getChannelName('update_customer_documents')]: {
            bind: CHANNEL_PREFIX + 'update-customer-documents'
          },
          [getChannelName('not_change_button_value')]: {
            bind: CHANNEL_PREFIX + 'not-change'
          },
          [getChannelName('reset_input')]: {
            bind: CHANNEL_PREFIX + 'reset-molecule-input'
          },
          [getChannelName('collapsed_step_2_validate')]: {
            bind: CHANNEL_PREFIX + 'collapsed-step-2'
          },
          [getChannelName('collapsed_step_2_validate')]: {
            bind: CHANNEL_PREFIX + 'final-step'
          },
          [getChannelName('exit-flow-dm')]: {
            bind: CHANNEL_PREFIX + 'exit-flow-reset',
            backStep: true
          },
          [getChannelName('navigate_to_dashboard')]: {
            bind: CHANNEL_PREFIX + 'navigate-to-dashboard'
          },
          [getChannelName('reset-step-1')]: {
            bind: CHANNEL_PREFIX + 'reset-step-add'
          },
          [getChannelName('close-confirm-zone')]: {
            bind: CHANNEL_PREFIX + 'close-confirm'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init-page'
          },
          [getChannelName('_FIRE_APP_PAGE_VISIT_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-app-page-visit'
          },
          [getChannelName('_FIRE_APP_STEP_3_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-app-step-3'
          },
          [getChannelName('_FIRE_APP_STEP_4_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-app-step-4'
          },
          [getChannelName('_FIRE_APP_STEP_5_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-app-step-5'
          },
          [getChannelName('_FIRE_APP_COMPLETED_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-app-completed'
          },
          [getChannelName('_FIRE_APP_FOOTPRINT_COMPLETE_UPDATE_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-footprint-complete-update',
            analytics: ANALYTICS.FOOTPRINT_COMPLETE
          },
          [getChannelName('_FIRE_APP_FOOTPRINT_ERROR_PERMISSIONS_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-footprint-permissions',
            analytics: ANALYTICS.footprints.permissions
          },
          [getChannelName('_FIRE_APP_FOOTPRINT_ERROR_COMMUNICATION_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-footprint-communication',
            analytics: ANALYTICS.footprints.communication
          },
          [getChannelName('_FIRE_APP_FOOTPRINT_ERROR_UNREADABLE_PICTURE_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-footprint-unreadable-picture',
            analytics: ANALYTICS.footprints.unredeablePicture
          },
          [getChannelName('_FIRE_APP_FOOTPRINT_ERROR_INVALID_DATA_ANALYTIC')]: {
            bind: CHANNEL_PREFIX + 'analytics-fire-footprint-invalid-data',
            analytics: ANALYTICS.footprints.invalidData
          },
          [getChannelName('set_top_message')]: {
            bind: CHANNEL_PREFIX + 'set-top-message-spinner-2'
          }
        }
      }
    }
  };
  const managerAnalitycs = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-add-national-id-manager',
    tag: 'glomo-add-national-id-analitycs-manager',
    properties: {
      native,
      cellsConnections: {
        in: {
          [getChannelName('exit-flow-dm')]: {
            bind: 'resetData'
          },
          sent_identity_custom_fields: {
            bind: 'customFields'
          },
          sent_identity_typology: {
            bind: 'typology'
          },
          [getChannelName('_FIRE_APP_PAGE_VISIT_ANALYTIC')]: {
            bind: 'appPageVisit'
          },
          [getChannelName('take_selfie')]: {
            bind: 'takePhoto'
          },
          [getChannelName('show_notice_privacy')]: {
            bind: 'noticePrivacy'
          },
          [getChannelName('_ANALYTIC_CHECK_BUTTON')]: {
            bind: 'checkboxCheckedChanged'
          },
          update_national_id_show_document_info_modal: {
            bind: 'showDocumentInfoModal'
          },
          [getChannelName('scann_identification')]: {
            bind: 'scannIdentification'
          },
          [getChannelName('_FIRE_APP_STEP_3_ANALYTIC')]: {
            bind: 'stepThree'
          },
          [getChannelName('_FIRE_APP_STEP_4_ANALYTIC')]: {
            bind: 'stepFour'
          },
          [getChannelName('_FIRE_APP_STEP_5_ANALYTIC')]: {
            bind: 'stepFive'
          },
          [getChannelName('conditions_accepted')]: {
            bind: 'conditionsAccepted'
          },
          [getChannelName('close_add_national_id_flow')]: {
            bind: 'summaryClose'
          },
          [getChannelName('_FIRE_APP_COMPLETED_ANALYTIC')]: {
            bind: 'appCompleted'
          }
        },
        out: {
          [getChannelName('_FIRE_MANAGER_APP_PAGE_VISIT_ANALYTIC')]: {
            bind: 'analytics-fire-app-page-visit',
            analytics: ANALYTICS.app.pageVisit
          },
          [getChannelName('_MANAGER_ATTACHMENT_ACCEPTED')]: {
            bind: 'analytics-fire-take-photo',
            analytics: ANALYTICS.app.started.takePhoto
          },
          [getChannelName('_MANAGER_SHOW_NOTICE_PRIVACY')]: {
            bind: 'analytics-fire-notice-privacy',
            analytics: ANALYTICS.app.started.privacyNotice
          },
          [getChannelName('_MANAGER_CHECKBOX_CHECKED_CHANGED')]: {
            bind: 'analytics-fire-checkbox-checked-changed',
            analytics: ANALYTICS.app.started.checkButton
          },
          [getChannelName('_MANAGER_SHOW_DOCUMENT_INFO_MODAL')]: {
            bind: 'analytics-fire-show-document-info-modal',
            analytics: ANALYTICS.app.step2
          },
          [getChannelName('_MANAGER_SCANN_IDENTIFICATION')]: {
            bind: 'analytics-fire-scann-identification',
            analytics: ANALYTICS.app.started.scan
          },
          [getChannelName('_MANAGER_STEP_3_ANALYTIC')]: {
            bind: 'analytics-fire-step-three',
            analytics: ANALYTICS.app.step3
          },
          [getChannelName('_MANAGER_STEP_4_ANALYTIC')]: {
            bind: 'analytics-fire-step-four',
            analytics: ANALYTICS.app.step4
          },
          [getChannelName('_MANAGER_STEP_5_ANALYTIC')]: {
            bind: 'analytics-fire-step-five',
            analytics: ANALYTICS.app.step5
          },
          [getChannelName('_MANAGER_CONDITIONS_ACCEPTED')]: {
            bind: 'analytics-fire-conditions-accepted',
            analytics: ANALYTICS.app.step6
          },
          [getChannelName('_MANAGER_SUMMARY_CLOSE')]: {
            bind: 'analytics-fire-summary-close',
            analytics: ANALYTICS.app.step7
          },
          [getChannelName('_MANAGER_APP_COMPLETED')]: {
            bind: 'analytics-fire-app-completed',
            analytics: ANALYTICS.app.completed
          }
        }
      }
    }
  };
  const opxDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-update-info-dm',
    properties: {
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      operativeName: PAGE_NAME.toUpperCase(),
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('exit-flow')]: {
            bind: 'exit'
          },
          update_national_id_exit_flow: {
            bind: 'exit'
          },
          [getChannelName('exit-flow-dm')]: {
            bind: 'exit'
          },
          [getChannelName('change_pressed_step_photos')]: {
            bind: 'reset'
          },
          [getChannelName('register_step')]: {
            bind: 'registerStep'
          },
          [getChannelName('get_veridas_close_box_status_done')]: {
            bind: 'goNextStep'
          },
          [getChannelName('collapsed_step_2_validate')]: {
            bind: 'goNextStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('back-button')]: {
            bind: 'manageBackButton'
          },
          update_national_id_active_modal_false: {
            bind: 'activeModalClosed'
          },
          update_national_id_active_modal_true: {
            bind: 'activeModalOpened'
          },
          [getChannelName('active-modal-update')]: {
            bind: 'activeModal'
          }
        },
        out: {
          update_national_id_show_exit_flow_modal: {
            bind: 'show-close-confirm'
          },
          [getChannelName('show_summary')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('scroll_to_step')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('on_reset_dm_opx')]: {
            bind: 'on-reset'
          },
          [getChannelName('on_exit_dm_opx')]: {
            bind: 'on-exit'
          },
          update_national_id_close_active_modal: {
            bind: 'close-active-modal'
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      id: '',
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        in: {
          [getChannelName('set_header_title')]: {
            bind: 'titleName'
          }
        },
        out: {
          [getChannelName('back-button')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const stepAdd = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-add-national-id',
    properties: {
      currentStep: 1,
      maxSteps: MAX_STEPS,
      lastStep: false,
      collapseUntilRequestSuccess: true,
      active: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_add_national_step')]: {
            bind: 'setProperties'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('get_veridas_close_box_status_done')]: {
            bind: 'collapsed'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('exit-flow-dm')]: {
            bind: 'reset'
          },
          [getChannelName('reset-step-1')]: {
            bind: 'resetCheckbox'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('attachment_accepted')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('change_pressed_step_photos')]: {
            bind: 'change-step-state'
          },
          [getChannelName('reset_other_steps')]: {
            bind: 'change-step-state'
          },
          [getChannelName('scann_identification')]: {
            bind: 'scan-id'
          },
          [getChannelName('take_selfie')]: {
            bind: 'take-selfie'
          },
          [getChannelName('show_notice_privacy')]: {
            bind: 'notice-privacy'
          },
          [getChannelName('_ANALYTIC_CHECK_BUTTON')]: {
            bind: 'checkbox-checked-changed'
          },
          [getChannelName('show_front_document_preview')]: {
            bind: 'show-front-document-preview'
          },
          [getChannelName('show_reverse_document_preview')]: {
            bind: 'show-reverse-document-preview'
          },
          [getChannelName('show_selfie_preview')]: {
            bind: 'cells-list-file-item-clicked'
          },
          [getChannelName('confirm_remove_documents_photos')]: {
            bind: 'glomo-list-select-list-icon-clicked'
          },
          [getChannelName('confirm_remove_selfie_photos')]: {
            bind: 'cells-list-file-delete'
          }
        }
      }
    }
  };
  const stepCheck = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-check-national-id',
    properties: {
      currentStep: 2,
      maxSteps: MAX_STEPS,
      collapseUntilRequestSuccess: true,
      lastStep: true,
      active: false,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_check_national_step')]: {
            bind: 'setProperties'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('collapsed_step_2_validate')]: {
            bind: 'collapsed'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('exit-flow-dm')]: {
            bind: 'reset'
          },
          [getChannelName('not_change_button_value')]: {
            bind: 'keepActive'
          },
          [getChannelName('reset_input')]: {
            bind: 'invalidInputValue'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('conditions_accepted')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('reset_other_steps')]: {
            bind: 'change-step-state'
          },
          [getChannelName('help_icon_pressed')]: {
            bind: 'help-icon-pressed'
          },
          [getChannelName('recovery_input_values')]: {
            bind: 'recovery-input-values'
          }
        }
      }
    }
  };
  const showHelp = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-help',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_modal_help')]: {
            bind: 'setProperties'
          }
        },
        out: {

        }
      }
    }
  };
  const summary = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      showAddition: true,
      buttonLabel: 'update-national-id-add-national-id-step-button',
      cellsConnections: {
        in: {
          [getChannelName('set_button_label')]: {
            bind: 'buttonLabel'
          }
        },
        out: {
          [getChannelName('close_add_national_id_flow')]: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };
  const apiCustomer = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    properties: {
      host: host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      headers: {'Accept-Language': 'es'},
      otpId: PAGE_NAME,
      returnTsec: true,
      customersApiVersion: '1',
      apiAggregatorApiVersion: '1',
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          [getChannelName('request_customers_terms')]: {
            bind: 'postCustomerTerms'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('send_headers_customer_dm')]: {
            bind: 'headers'
          },
          [getChannelName('validate_documents_with_national_electoral_institute')]: {
            bind: 'postNationalElectoralInstituteValidateCredentialsData'
          },
          [getChannelName('modify_customer_document_data')]: {
            bind: 'patchCustomer'
          },
          [getChannelName('update_customer_documents')]: {
            bind: 'postCustomerIdentificationProcessDocuments'
          }
        },
        out: {
          [getChannelName('success_request_customers_terms')]: {
            bind: 'post-customer-terms'
          },
          [getChannelName('error_request_customers_terms')]: {
            bind: 'error-on-post-customer-terms'
          },
          [getChannelName('post_national_electoral_institute_validate_credentials_data_success')]: {
            bind: 'post-national-electoral-institute-validate-credentials-data-success'
          },
          [getChannelName('post_national_electoral_institute_validate_credentials_data_error')]: {
            bind: 'post-national-electoral-institute-validate-credentials-data-error'
          },
          [getChannelName('patch_customer_success')]: {
            bind: 'patch-customer-success'
          },
          [getChannelName('error_on_patch_customer')]: {
            bind: 'error-on-patch-customer'
          },
          [getChannelName('post_customer_identification_process_documents_overse_sucess')]: {
            bind: 'post-customer-identification-process-documents-OBVERSE-sucess'
          },
          [getChannelName('post_customer_identification_process_documents_overse_error')]: {
            bind: 'post-customer-identification-process-documents-OBVERSE-error'
          },
          [getChannelName('post_customer_identification_process_documents_reverse_sucess')]: {
            bind: 'post-customer-identification-process-documents-REVERSE-sucess'
          },
          [getChannelName('post_customer_identification_process_documents_reverse_error')]: {
            bind: 'post-customer-identification-process-documents-REVERSE-error'
          }
        }
      }
    }
  };
  const apiDocumentsVerifications = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-documents-verifications',
    properties: {
      host: host,
      headers: {'Accept-Language': 'es'},
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      verificationsApiVersion: '1',
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          [getChannelName('open_veridas_documents_box')]: {
            bind: 'postCreateVerification'
          },
          [getChannelName('put_documents_verification')]: {
            bind: 'putVerificationAttachments'
          },
          [getChannelName('close_veridas_box')]: {
            bind: 'postCreateVerificationExecute'
          },
          [getChannelName('verify_veridas_box_status')]: {
            bind: 'getVerification'
          }
        },
        out: {
          [getChannelName('open_veridas_documents_box_success')]: {
            bind: 'success-on-post-create-verifications'
          },
          [getChannelName('open_veridas_documents_box_error')]: {
            bind: 'error-on-post-create-verifications'
          },
          [getChannelName('put_document_without_flash_success')]: {
            bind: 'succes-on-put-verifications-attachments-obverse-image'
          },
          [getChannelName('put_document_without_flash_error')]: {
            bind: 'error-on-put-verifications-attachments-obverse-image'
          },
          [getChannelName('put_document_with_flash_success')]: {
            bind: 'succes-on-put-verifications-attachments-obverse-flash-image'
          },
          [getChannelName('put_document_with_flash_error')]: {
            bind: 'error-on-put-verifications-attachments-obverse-flash-image'
          },
          [getChannelName('put_document_reverse_success')]: {
            bind: 'succes-on-put-verifications-attachments-reverse-image'
          },
          [getChannelName('put_document_reverse_error')]: {
            bind: 'error-on-put-verifications-attachments-reverse-image'
          },
          [getChannelName('put_document_selfie_success')]: {
            bind: 'succes-on-put-verifications-attachments-selfie-image'
          },
          [getChannelName('put_document_selfie_error')]: {
            bind: 'error-on-put-verifications-attachments-selfie-image'
          },
          [getChannelName('post_documents_verifications_execute_success')]: {
            bind: 'success-on-post-create-verifications-execute'
          },
          [getChannelName('post_documents_verifications_execute_error')]: {
            bind: 'error-on-post-create-verifications-execute'
          },
          [getChannelName('get_documents_verifications_success')]: {
            bind: 'success-on-get-verifications-verification'
          },
          [getChannelName('get_documents_verifications_error')]: {
            bind: 'error-on-get-verifications-verification'
          }
        }
      }
    }
  };
  const showPhotoModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'glomo-image-modal',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('show_photo_preview')]: {
            bind: 'setProperties'
          }
        },
        out: {}
      }
    }
  };
  const base = {
    hash: +'update-nationa-id',
    currentPage: {
      url: '/update-national-id',
      params: []
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      manager,
      managerAnalitycs,
      opxDm,
      spinner,
      spinnerWithText,
      spinnerWithText2,
      header,
      stepAdd,
      stepCheck,
      showHelp,
      summary,
      apiCustomer,
      apiDocumentsVerifications,
      showPhotoModal
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', PAGE_NAME, ['post-customer-terms', 'error-on-post-customer-terms']);
  return base;
};
