'use strict';
module.exports = CONFIG => {
  const _page = require('./common/_pages');
  const { SPINNER: _getSpinner, useNames, toUnderscoreCase, connectionsOut, getLocalCurrency } = require('./common/helpers/_utils');
  const pageName = 'clarificationsManagementCarePage';
  const operativePrefix = toUnderscoreCase(pageName).toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const isNative = CONFIG.native || false;
  const pages = _page(CONFIG)(pageName);
  const token = CONFIG.globalServices.requiredToken || 'tsec';
  const spinner = _getSpinner(CONFIG);
  const analytics = require('./analytics/_careClarification')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const { mobileActionLauncher } = require('./common/_cross-components');
  const localStorageApp = require('./common/_local-storage');
  spinner.properties.className = 'solid-spinner';
  let segmentsByUser = [
    {
      name: 'segmentA',
      keys: ['P0', 'P1', 'P2', 'P3', 'P4', 'IM', 'P5', 'P6', 'P7', 'P8', 'P9', 'X1', 'X2', 'X3', 'X4', 'X5']
    },
    {
      name: 'segmentB',
      keys: ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'C0', 'G0', 'R1', 'R2', 'R3', 'R5', 'R6', 'S0', 'N1', 'BB', 'BA', 'BC', 'BF', 'B7', 'B8', 'B9', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'N1']
    },
    {
      name: 'segmentC',
      keys: ['Q1', 'FE', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F9', 'D7', 'D8', 'D9', 'FF', 'FM', 'F1', 'F8', 'H1', 'T1', 'U1']
    },
    {
      name: 'segmentD',
      keys: [ 'S1' ]
    }
  ];
  const template = {
    tag: 'glomo-opx-template',
    properties: {
      extraHeaderClass: 'bbva-core-blue ' + (isNativeIos ? 'ios-top-padding' : ''),
      iOSFixedHeader: isNativeIos,
      headerFixed: true,
      topOnConfirm: true,
      display: 'flex',
      decorateSteps: true,
      className: 'bg-core-blue header-fixed ' + (isNativeIos ? 'safe-card-header ' : ''),
      cellsConnections: {
        in: {
          [pageName + '_SHOW_CONFIRM']: {
            bind: 'showConfirm'
          },
          [pageName + '_CLOSE_CONFIRM']: {
            bind: 'close'
          },
          [pageName + '_RESET_SCROLL_LAYER']: {
            bind: 'resetLayerScroll'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'resetLayerScroll'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: true,
      tokenName: token,
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
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'init-page'
          },
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          },
          [pageName + '_INIT_PAGE']: {
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
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      id: 'clarifications-management-care-page',
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'clarifications-management-header-text',
      cellsConnections: {
        in: {
          [pageName + '_GO_BACK']: {
            bind: 'removeSecondaryClass'
          }
        },
        out: {
          [pageName + '_GO_BACK_NAVIGATION']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const clarificationDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-clarifications-management-dm',
    properties: {
      native: isNative,
      pageName,
      maxSteps: 5,
      segmentsByUser: segmentsByUser,
      returnKeyMap: {
        'cardDetail': 'card-detail'
      },
      cellsConnections: {
        in: {
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_CANCEL_OUT_OF_TIME_ACCEPT: {
            bind: 'navigatePage'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_TRACKING_CANCEL_OUT_OF_TIME_ACCEPT: {
            bind: 'manageOperationLineBbva'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_TRACKING_ACCEPT: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          [pageName + '_REGISTER_STEP']: {
            bind: 'registerStep'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          [pageName + '_NEXT_STEP']: {
            bind: 'setStepChangeRadioButtons'
          },
          [pageName + '_NEXT_STEP_CLARIFICATIONS_TYPE']: {
            bind: 'setStepClarificationsType'
          },
          [pageName + '_OPEN_STEP']: {
            bind: 'openStep'
          },
          [pageName + '_CLOSE_SUMMARY_CONFIRM']: {
            bind: 'successScreenClarifications'
          },
          show_clarifications_management_care_channel: {
            bind: 'transactionClaim'
          },
          [pageName + '_MODAL_BBVA_CASE_NUMBER_PHONE_TEXT']: {
            bind: 'showCaseNumberModal'
          },
          [pageName + '_MODAL_BBVA_INSURANCE_PHONE_TEXT']: {
            bind: 'showModalInsurance'
          },
          [pageName + '_OPEN_MODAL_SUMMARY_ICON']: {
            bind: 'openModalSummaryIconHelp'
          },
          global_login_success_indicators: {
            bind: 'globalCacheStorage'
          },
          global_financial_overview_details: {
            bind: 'globalFinancialData'
          },
          [pageName + '_MANAGE_BBVA_LINE']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_POST_SUCCESS_RESPONSE_DATA_SERVICE']: {
            bind: 'responsePostSuccessData'
          },
          [pageName + '_POST_SUCCESS_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'responsePost'
          },
          [pageName + '_POST_ERROR_RESPONSE_DATA_SERVICE']: {
            bind: 'errorResponsePost'
          },
          [pageName + '_POST_ERROR_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'validateError'
          },
          [pageName + '_PATCH_SUCCESS_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'responsePatch'
          },
          [pageName + '_PATCH_SUCCESS_RESPONSE_DATA_SERVICE']: {
            bind: 'responsePatchSuccessData'
          },
          [pageName + '_PATCH_ERROR_RESPONSE_DATA_SERVICE']: {
            bind: 'validateError'
          },
          [pageName + '_PATCH_ERROR_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'errorResponsePatch'
          },
          [pageName + '_GO_BACK_NAVIGATION']: {
            bind: 'exitPage'
          },
          [pageName + '_OPEN_MODAL_CLOSE_CONFIRM']: {
            bind: 'exitFromTheClarificationPage'
          },
          [pageName + '_ICON_HELP_MODAL']: {
            bind: 'tooltipHelpModalCommerce'
          },
          [pageName + '_SWITCH_MODALS']: {
            bind: 'checkModal'
          },
          [pageName + '_SWITCH_MODALS_CANCEL']: {
            bind: 'checkModal'
          },
          [pageName + '_CASE_NUMBER_MODAL_ACCEPT']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_CASE_NUMBER_MODAL_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CASE_NUMBER_MODAL_OUT_OF_LINE_ACCEPT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CASE_NUMBER_MODAL_OUT_OF_LINE_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CLARIFICATION_MODAL_ACCEPT']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_CLARIFICATIONS_MODAL_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CLARIFICATION_MODAL_OUT_OF_LINE_ACCEPT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CLARIFICATION_MODAL_OUT_OF_LINE_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_INSURANCE_MODAL_ACCEPT']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_INSURANCE_MODAL_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_INSURANCE_MODAL_OUT_OF_LINE_ACCEPT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_INSURANCE_MODAL_OUT_OF_LINE_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_ERROR_CLARIFICATIONS_MANAGEMENT_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_ERROR_CLARIFICATIONS_MANAGEMENT_CANCEL_OUT_OF_TIME_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_ERROR_NO_AVAILABLE_ACCEPT']: {
            bind: 'requestPostData'
          },
          [pageName + '_ERROR_NO_AVAILABLE_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_ERROR_THREE_TIMES_NO_AVAILABLE_ACCEPT']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_TIME_EXPIRED_ACCEPT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_TIME_EXPIRED_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_ERROR_THREE_TIMES_NO_AVAILABLE_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_LOST_CARD_MODAL_ACCEPT']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + '_COMMERCE_MODAL_ACCEPT']: {
            bind: 'manageOperationLineBbva'
          },
          [pageName + 'CLASSIFICATIONS_RESPONSE']: {
            bind: 'successResponseClassification'
          },
          [pageName + '_CLASSIFICATIONS_RESPONSE_ERROR']: {
            bind: 'errorResponseCassification'
          },
          [pageName + 'radio_selected_changed']: {
            bind: 'radioCareSelectedObserver'
          },
          [pageName + 'RADIO_SELECTED_ATTENTION_TYPE']: {
            bind: 'setValueRadioAttentionType'
          },
          [pageName + '_folio_channel']: {
            bind: 'getCaseNumber'
          },
          clarificationsManagementCarePage_ACCEPTED_BUTTON_EXIT: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CONTINUE_NEXT_STEP_BLOCK_CARD']: {
            bind: 'validateBlockCardStep'
          },
          [pageName + '_CONTINUE_NEXT_STEP_BLOCK_CHARGE']: {
            bind: 'validateBlockPaymentStep'
          },
          [pageName + '_BLOCK_CARD_SUCCESS']: {
            bind: 'successResponseBlockCard'
          },
          [pageName + '_BLOCK_CARD_ERROR']: {
            bind: 'validateErrorBlockCard'
          },
          [pageName + '_SUCCES_BLOCK_PAYMENT']: {
            bind: 'successBlockPayment'
          },
          [pageName + '_ERROR_BLOCK_PAYMENT']: {
            bind: 'validateErrorBlockPayment'
          },
          [pageName + '_BLOCK_PAYMENTS_ANALYTICS_OTP']: {
            bind: 'fireAnalyticsOtp'
          },
          [pageName + '_SEND_ICON_HELP_MODAL_CHIP']: {
            bind: 'tooltipHelpCaseAgainstOnline'
          },
          [pageName + '_MODAL_CHIP_NIP_ACCEPT']: {
            bind: 'returnCardDetail'
          },
          [pageName + '_MODAL_CHIP_NIP_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_CHIP_NIP_CARD_BLOCKED_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_CHIP_NIP_GO_OUT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_CVV_GO_OUT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_HRS_GO_OUT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_HRS_GO_OUT_BLOCKED_CARD']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_HRS_GO_OUT_BLOCKED_CARD_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_SEND_ICON_HELP_MODAL_CVV']: {
            bind: 'tooltipHelpCaseAgainstOnline'
          },
          [pageName + '_MODAL_CVV_ACCEPT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_CVV_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_SEND_ICON_HELP_MODAL_TOKEN']: {
            bind: 'tooltipHelpCaseAgainstOnline'
          },
          [pageName + '_MODAL_TOKEN_ACCEPT']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_MODAL_TOKEN_CANCEL']: {
            bind: 'returnMovementDetail'
          },
          [pageName + '_CASE_AGAINST_ACCEPT']: {
            bind: 'eclModalType'
          },
          [pageName + '_CASE_AGAINST_CANCEL']: {
            bind: 'eclModalType'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          [pageName + '_RESPONSE_SEGMENT']: {
            bind: 'getUserClassifications'
          },
          global_storage_get_loginData_success: {
            bind: 'obtainIdClient'
          },
          global_storage_get_loginData_error: {
            bind: 'obtainIdClient'
          },
          [pageName + '_PATCH_DIRECT_DEBITS_DEACTIVATE_HANDLER_SUCCESS']: {
            bind: 'patchDirectDebitsDeactivateHandlerSuccess'
          },
          [pageName + '_PATCH_DIRECT_DEBITS_DEACTIVATE_HANDLER_ERROR']: {
            bind: 'patchDirectDebitsDeactivateHandlerError'
          },
          CLARIFICATION_MANAGEMENT_CARE_POST_DEBIT_SEARCH_RESPONSE_SUCCESS: {
            bind: 'postDirectDebitsSearchHandlerSuccess'
          },
          CLARIFICATION_MANAGEMENT_CARE_POST_DEBIT_SEARCH_RESPONSE_ERROR: {
            bind: 'postDirectDebitsSearchHandlerError'
          },
          global_set_app_settings: {
            bind: 'setAppSettingsClarificationsSchedule'
          }
        },
        out: {
          clarification_navigate_to_page_list_care: {
            bind: 'navigate-to-clarification-list-care',
            link: {
              page: 'clarificationsListCare',
              skipHistory: true
            }
          },
          [pageName + '_SET_CHECKBOX_LABEL_PAYMENT']: {
            bind: 'set-checkbox-label-payment'
          },
          [pageName + '_PATCH_DIRECT_DEBITS_DEACTIVATE']: {
            bind: 'patch-direct-debits-deactivate'
          },
          [pageName + '_FIRE_ANALYTIC_CHANNEL']: {
            bind: 'fire-opt-analytic-channel',
            analytics: analytics._getAppPageView('appOtp')
          },
          [pageName + '_ADD_DYNAMIC_TEMPLATE']: {
            bind: 'add-dynamic-template'
          },
          [pageName + 'SET_MESSAGE_INFO_BOX_DOMI_BLOCK_PAYMENT']: {
            bind: 'set-message-info-box-domi-block-payment'
          },
          [pageName + 'SET_INFO_BOX_PENDING_ATTENTION_TYPE']: {
            bind: 'set-info-box-pending-attention-type'
          },
          clarificationsManagementCarePage_SET_MESSAGE_INFO_BOX_GEOLOCATION: {
            bind: 'set-message-info-box-geolocation'
          },
          [pageName + '_SET_HEADER_CLASSNAME']: {
            bind: 'set-header-classname'
          },
          [pageName + 'SET_TITLE_RECURRENT_CHARGE_STEP']: {
            bind: 'set-title-recurrent-charge-step'
          },
          [pageName + '_SET_TITLE_PAGE']: {
            bind: 'set-title-page'
          },
          [pageName + '_SET_DESCRIPTION_STEP_ATTENTION_TYPE']: {
            bind: 'set-description-step-attention-type'
          },
          [pageName + '_CLICK_START']: {
            bind: 'click-start-tags',
            analytics: analytics.appOnClickStart
          },
          [pageName + '_SET_RADIO_BUTTONS']: {
            bind: 'set-radio-buttons'
          },
          [pageName + '_SET_STEP_RADIO_BUTTONS']: {
            bind: 'set-step-radio-buttons'
          },
          [pageName + '_SET_STEP_RADIO_BUTTONS_REJECTED']: {
            bind: 'set-step-radio-buttons-second-step'
          },
          [pageName + '_CLOSE_CONFIRM']: {
            bind: 'close-confirm'
          },
          [pageName + '_SHOW_CONFIRM']: {
            bind: 'all-steps-collapsed'
          },
          [pageName + '_BUTTON_CONFIRM']: {
            bind: 'send-amount-data'
          },
          [pageName + '_SHOW_SUCCESS_SCREEN']: {
            bind: 'success-transaction-screen',
            link: {
              page: 'clarificationsManagementCareSuccessPage',
              cleanUntil: 'clarificationsManagementCarePage'
            }
          },
          [pageName + '_SHOW_SUCCESS_CLARIFICATION_SCREEN']: {
            bind: 'success-clarification-screen',
            link: {
              page: 'clarificationsManagementClarificationSuccessPage',
              cleanUntil: 'clarificationsManagementCarePage'
            }
          },
          [pageName + '_SUMMARY_VIEW_TITLE']: {
            bind: 'election-type'
          },
          [pageName + '_RESPONSE_DATA_TO_SUCCESS_SCREEN']: {
            bind: 'send-data-to-success-screen'
          },
          [pageName + '_RESPONSE_GLOBAL_DATA_TO_SUCCESS_SCREEN']: {
            bind: 'send-global-data-to-success-screen'
          },
          [pageName + '_RESPONSE_GLOBAL_DATA_TO_SUCCESS_SCREEN_CORE']: {
            bind: 'send-global-data-to-success-screen-core'
          },
          [pageName + '_RESPONSE_DATA_TO_SUCCESS_CLARIFICATION_SCREEN']: {
            bind: 'send-data-to-success-screen'
          },
          [pageName + '_SUMMARY_VIEW_SUBTITLE_MESSAGE_PAYMENT']: {
            bind: 'radio-button-selected-payment'
          },
          [pageName + '_SUMMARY_VIEW_SUBTITLE_MESSAGE_EMPTY']: {
            bind: 'radio-button-selected-empty'
          },
          [pageName + '_SUMMARY_VIEW_SUBTITLE_MESSAGE_HELP_ICON']: {
            bind: 'radio-button-selected-exchange-rate'
          },
          [pageName + '_RESET_STEPS']: {
            bind: 'reset-flow'
          },
          [pageName + '_STEP_DESCRIPTION']: {
            bind: 'step-description'
          },
          [pageName + '_MODAL_BBVA_CASE_NUMBER_PHONE_TEXT']: {
            bind: 'send-modal-case-number-bbva-phone-text'
          },
          [pageName + '_MODAL_BBVA_INSURANCE_PHONE_TEXT']: {
            bind: 'send-modal-insurance-bbva-phone-text'
          },
          [pageName + '_SEND_ICON_HELP']: {
            bind: 'send-icon-help'
          },
          global_alert_manager_open_with_settings: {
            bind: 'send-modals-config'
          },
          open_control_veil: {
            bind: 'open-veil-spinner'
          },
          close_control_veil: {
            bind: 'close-veil-spinner'
          },
          global_action_launcher_dialer: {
            bind: 'request-phone-call'
          },
          [pageName + '_POST_REQUEST_DATA_SERVICE']: {
            bind: 'send-request-to-post-service'
          },
          [pageName + '_PATCH_REQUEST_DATA_SERVICE']: {
            bind: 'send-request-to-patch-service'
          },
          [pageName + '_SEND_DATE_AND_TIME']: {
            bind: 'send-date-and-time'
          },
          [pageName + '_SEND_CONCEPT']: {
            bind: 'send-concept'
          },
          [pageName + '_SEND_AMOUNT']: {
            bind: 'send-data-amount'
          },
          [pageName + '_STEP_RESET']: {
            bind: 'reset-flow'
          },
          [pageName + '_DESCOLLAPSED_STEP']: {
            bind: 'descollapsed-step'
          },
          [pageName + '_DESCOLLAPSED_STEP_MC']: {
            bind: 'descollapsed-step-one'
          },
          [pageName + '_ACTIVE_STEP']: {
            bind: 'active-step'
          },
          [pageName + '_RETURN_FLOW']: {
            bind: 'return-to-page',
            backStep: true
          },
          clarificationsManagementCarePage_RETURN_CARD: {
            bind: 'return-to-card-detail',
            link: {
              page: 'cardDetail',
              params: {
                productId: 'productId'
              }
            }
          },
          [pageName + '_ICON_HELP_MODAL_TO_GLOMO_ALERT_MANAGER']: {
            bind: 'send-icon-help-modal'
          },
          [pageName + 'app_started_click_channel']: {
            bind: 'app-started',
            analytics: analytics._getAppSteps('appStarted')
          },
          [pageName + 'app_page_visit_click_channel']: {
            bind: 'app-page-visit',
            analytics: analytics.appPageVisit
          },
          [pageName + 'FIRE_ANALYTICS_ATTENTION_TYPE']: {
            bind: 'fire-analytics-attention-type',
            analytics: analytics._getAppSteps('appStep2AttentionType')
          },
          [pageName + 'FIRE_ANALYTICS_REPORTING_REASON']: {
            bind: 'fire-analytics-reporting-reason',
            analytics: analytics._getAppSteps('appStep3ReportingReason')
          },
          [pageName + 'page_view_provisional']: {
            bind: 'page-view-provisional',
            analytics: analytics._getAppPageView('appProvisional')
          },
          [pageName + 'FIRE_ANALYTICS_CALL_MODAL']: {
            bind: 'page-view-call',
            analytics: analytics._getAppPageView('appCall')
          },
          [pageName + 'FIRE_ANALYTICS_PAYMENT_SUCCESS']: {
            bind: 'tag-transacction-success',
            analytics: analytics._getAppSteps('appViewCompletedSuccess')
          },
          [pageName + 'FIRE_ANALYTICS_CLARIFICATION_SUCCESS']: {
            bind: 'tag-clarification-success',
            analytics: analytics._getAppSteps('appViewCompletedLine')
          },
          [pageName + 'error-tag']: {
            bind: 'page-view-error',
            analytics: analytics._getAppPageView('appErrorCharge')
          },
          [pageName + '_REQUEST_SEGMENT']: {
            bind: 'request-user-classifications'
          },
          request_client_id: {
            bind: 'request-user-client-id',
            'forward-to-native': true
          },
          [pageName + 'BLOCK_RECURRING_TRANSACTION_LIST']: {
            bind: 'block-transactions-list'
          },
          [pageName + 'HIDDEN_COMPONENTS']: {
            bind: 'hidden-components'
          },
          [pageName + 'BLOCK_RECURRING_TRANSACTION']: {
            bind: 'block-recurring-transaction'
          },
          [pageName + 'BLOCK_CARD_STEP_DESCRIPTION']: {
            bind: 'block-card-step-description'
          },
          [pageName + 'BLOCK_CARD_STEP']: {
            bind: 'block-card'
          },
          [pageName + 'PRODUCT_BLOCKED']: {
            bind: 'product-blocked'
          },
          [pageName + 'LIST_PRODUCT']: {
            bind: 'list-product-description'
          },
          [pageName + 'BLOCK_PAYMENT']: {
            bind: 'send-request-block-payment'
          },
          [pageName + 'BLOCK_PAYMENT_STEP_DESCRIPTION']: {
            bind: 'block-payment-step-description'
          },
          [pageName + 'BLOCK_CARD']: {
            bind: 'send-request-block-card'
          },
          [pageName + 'BLOCK_CARD_ID']: {
            bind: 'send-block-card-id'
          },
          [pageName + 'BLOCK_ID']: {
            bind: 'send-block-id'
          },
          [pageName + '_SEND_GLOBAL_CACHE_TO_SUCCESS']: {
            bind: 'send-global-cache-to-success-screen'
          },
          success_operation_notification_channel: {
            bind: 'rating-clarifications-channel',
            'forward-to-native': true
          },
          [pageName + '_ACTIVE_BLOCK_CARD_STEP']: {
            bind: 'active-block-card-step'
          },
          [pageName + '_ACTIVE_BLOCK_PAYMENT_STEP']: {
            bind: 'active-block-payment-step'
          },
          [pageName + '_SEND_MODALS_ECL']: {
            bind: 'send-ecl-modals',
            analytics: analytics._getAppPageView('appAgainstLine')
          },
          [pageName + '_BLOCK_CARD_TAG']: {
            bind: 'block-card-analytics',
            analytics: analytics._getAppPageView('appBlockCard')
          },
          [pageName + '_BLOCK_RECURRING_PAYMENT_TAG']: {
            bind: 'block-recurrent-analytics',
            analytics: analytics._getAppPageView('appBlockRecurrentPayment')
          },
          [pageName + '_BLOCK_DIRECT_DEBIT_TAG']: {
            bind: 'block-direct-debit-analytics',
            analytics: analytics._getAppPageView('appBlockDirectDebit')
          },
          [pageName + '_ERROR_CLARIFICATION_INIT_TAG']: {
            bind: 'error-clarification-init-analytic',
            analytics: analytics._getAppPageView('appErrorClarificationInit')
          },
          [pageName + '_STEP_THREE_VIEW']: {
            bind: 'step-three-view'
          },
          [pageName + '_SET_ACTIVE_STEP']: {
            bind: 'set-active-step'
          },
          [pageName + '_VIEW_STEPS_BLOCK_CARD']: {
            bind: 'view-block-card-step'
          },
          [pageName + '_VIEW_STEPS_BLOCK_PAYMENT']: {
            bind: 'view-block-payment-step'
          },
          [pageName + '_DESCOLLAPSED_STEP_ATTENTION']: {
            bind: 'descollapsed-step-attention'
          },
          [pageName + '_DESCOLLAPSED_STEP_BLOCK_CARD']: {
            bind: 'descollapsed-step-block-card'
          },
          [pageName + '_DESCOLLAPSED_STEP_PAYMENT']: {
            bind: 'descollapsed-step-payment'
          },
          [pageName + '_SET_CHECKBOX_CHECKED']: {
            bind: 'set-checkbox-checked'
          },
          [pageName + '_SET_TRANSACTION_CLAIM']: {
            bind: 'set-transaction-claim'
          },
          [pageName + '_SET_IS_DOMICILIATION_FLAG']: {
            bind: 'set-is-domiciliation-flag'
          },
          [pageName + '_HANDLE_SHOW_FEES_MESSAGE']: {
            bind: 'handle-show-fees-message'
          },
          global_get_from_storage: {
            bind: 'global-get-from-storage'
          },
          [pageName + '_SET_CHECKBOX_LABEL_PAYMENT']: {
            bind: 'set-checkbox-label-payment'
          },
          CLARIFICATION_MANAGEMENT_CARE_POST_DEBIT_SEARCH_REQUEST: {
            bind: 'search-get-direct-debits'
          }
        },
        params: {
          customerId: 'customerId',
          clientId: 'global_client_id'
        }
      }
    }
  };
  const apisClaimsDm = {
    zone: 'app_main',
    type: 'DM',
    tag: 'cells-dm-global-apis-claims-mx',
    familyPath: 'cells-dm-global-apis-claims',
    properties: {
      claimsApiVersion: CONFIG.globalServices.versions.claims,
      host: CONFIG.globalServices.host,
      native: isNative,
      requiredToken: token,
      cellsConnections: {
        in: {
          [pageName + '_POST_REQUEST_DATA_SERVICE']: {
            bind: 'postValidateAutomaticRefund'
          },
          [pageName + '_PATCH_REQUEST_DATA_SERVICE']: {
            bind: 'patchAutomaticRefund'
          }
        },
        out: {
          [pageName + '_POST_SUCCESS_RESPONSE_DATA_SERVICE']: {
            bind: 'success-on-post-validate-automatic-refund'
          },
          [pageName + '_POST_SUCCESS_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'success-on-post-validate-automatic-refund'
          },
          [pageName + '_POST_ERROR_RESPONSE_DATA_SERVICE']: {
            bind: 'error-on-post-validate-automatic-refund'
          },
          [pageName + '_POST_ERROR_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'error-on-post-validate-automatic-refund'
          },
          [pageName + '_PATCH_SUCCESS_RESPONSE_DATA_SERVICE']: {
            bind: 'success-on-patch-automatic-refund'
          },
          [pageName + '_PATCH_SUCCESS_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'success-on-patch-automatic-refund'
          },
          [pageName + '_PATCH_ERROR_RESPONSE_DATA_SERVICE']: {
            bind: 'error-on-patch-automatic-refund'
          },
          [pageName + '_PATCH_ERROR_RESPONSE_DATA_SERVICE_VALIDATION']: {
            bind: 'error-on-patch-automatic-refund'
          },
          [pageName + '_folio_channel']: {
            bind: 'success-on-post-validate-automatic-refund'
          }
        }
      }
    }
  };
  const offerPageStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-offer-page',
    properties: {
      className: 'collapsed-divider-hidden equity-contracts',
      currentStep: 1,
      collapsed: true,
      disableChange: true,
      active: true,
      hideCollapsedBenefits: true,
      localCurrency: getLocalCurrency(),
      iconName: '',
      cellsConnections: {
        in: {
          [pageName + '_SET_TITLE_PAGE']: {
            bind: 'stepTitle'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [pageName + '_SEND_DATE_AND_TIME']: {
            bind: 'collapsedInfoMessage'
          },
          [pageName + '_SEND_CONCEPT']: {
            bind: 'availableLineText'
          },
          [pageName + '_SEND_AMOUNT']: {
            bind: 'cardOffer'
          }
        },
        out: {
          [pageName + '_REGISTER_STEP']: {
            bind: 'register-step'
          }
        }
      }
    }
  };
  const clarificationReasonStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-radio-buttons',
    properties: {
      currentStep: 2,
      title: 'clarifications-management-second-step-title',
      description: 'clarifications-management-step-description',
      collapsedTitleClass: 'spacing-bottom-xs',
      typeMessage: 'info-dark',
      active: true,
      cellsConnections: {
        in: {
          [pageName + '_SET_DESCRIPTION_STEP_ATTENTION_TYPE']: {
            bind: 'description'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [pageName + '_RESET_STEPS']: {
            bind: 'reset'
          },
          [pageName + '_SET_RADIO_BUTTONS']: {
            bind: 'radioButtonList'
          },
          clarificationsManagementCarePage_SET_MESSAGE_INFO_BOX_GEOLOCATION: {
            bind: 'infoMessage'
          },
          [pageName + '_STEP_RESET']: {
            bind: 'reset'
          },
          [pageName + '_DESCOLLAPSED_STEP']: {
            bind: 'collapsed'
          },
          [pageName + '_DESCOLLAPSED_STEP_MC']: {
            bind: 'collapsed'
          }
        },
        out: {
          [pageName + '_NEXT_STEP']: {
            bind: 'continue-pressed'
          },
          [pageName + '_SHOW_CLOSE_CONFIRM']: {
            bind: 'continue-pressed'
          },
          [pageName + '_REGISTER_STEP']: {
            bind: 'register-step'
          },
          [pageName + '_OPEN_STEP']: {
            bind: 'change-pressed'
          },
          [pageName + 'app-step']: {
            bind: 'continue-pressed'
          },
          [pageName + 'radio_selected_changed']: {
            bind: 'changed-radio-button-selected'
          }
        }
      }
    }
  };
  const clarificationTypeStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-radio-buttons',
    properties: {
      currentStep: 3,
      className: 'cells-step-container',
      title: 'clarifications-management-third-step-title',
      collapsedTitleClass: 'spacing-bottom-xs',
      hidden: true,
      cellsConnections: {
        in: {
          [pageName + 'SET_INFO_BOX_PENDING_ATTENTION_TYPE']: {
            bind: 'infoMessage'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [pageName + '_RESET_STEPS']: {
            bind: 'reset'
          },
          [pageName + '_STEP_THREE_VIEW']: {
            bind: 'hidden'
          },
          [pageName + 'HIDDEN_COMPONENTS']: {
            bind: 'hidden'
          },
          [pageName + '_SET_STEP_RADIO_BUTTONS']: {
            bind: 'radioButtonList'
          },
          [pageName + '_SET_STEP_RADIO_BUTTONS_REJECTED']: {
            bind: 'radioButtonList'
          },
          [pageName + '_STEP_DESCRIPTION']: {
            bind: 'description'
          },
          [pageName + '_STEP_RESET']: {
            bind: 'reset'
          },
          [pageName + '_DESCOLLAPSED_STEP']: {
            bind: 'collapsed'
          },
          [pageName + '_DESCOLLAPSED_STEP_ATTENTION']: {
            bind: 'collapsed'
          },
          [pageName + '_ACTIVE_STEP']: {
            bind: 'active'
          },
          [pageName + '_SET_ACTIVE_STEP']: {
            bind: 'active'
          }
        },
        out: {
          [pageName + '_NEXT_STEP_CLARIFICATIONS_TYPE']: {
            bind: 'continue-pressed'
          },
          [pageName + '_REGISTER_STEP']: {
            bind: 'register-step'
          },
          [pageName + '_OPEN_STEP']: {
            bind: 'change-pressed'
          },
          [pageName + 'app-step']: {
            bind: 'continue-pressed'
          },
          [pageName + 'RADIO_SELECTED_ATTENTION_TYPE']: {
            bind: 'changed-radio-button-selected'
          }
        }
      }
    }
  };
  const blockRecurrentStep = {
    zone: 'app__main',
    tag: 'cells-step-conditions',
    type: 'UI',
    properties: {
      checkboxLabel: 'clarifications-management-accept-conditions-block-payment',
      textButton: 'clarifications-management-button-continue',
      stepTitle: 'clarifications-management-block-payment-step',
      titleInformationClass: 'text-info-detached',
      changeLabel: 'cells-step-legal-terms-consult',
      hidden: true,
      currentStep: 4,
      collapsedIcon: 'coronita:correct',
      collapsedText: 'clarifications-management-accept',
      message: 'clarifications-management-step-block-payment-info-box',
      messageClass: 'spacing-message',
      reverseContent: 'reverse-content',
      titleTransactionClass: 'transactions-title',
      cellsConnections: {
        in: {
          [pageName + '_SET_CHECKBOX_LABEL_PAYMENT']: {
            bind: 'checkboxLabel'
          },
          [pageName + 'SET_MESSAGE_INFO_BOX_DOMI_BLOCK_PAYMENT']: {
            bind: 'message'
          },
          [pageName + 'SET_TITLE_RECURRENT_CHARGE_STEP']: {
            bind: 'stepTitle'
          },
          [pageName + 'HIDDEN_COMPONENTS']: {
            bind: 'hidden'
          },
          [pageName + '_VIEW_STEPS_BLOCK_PAYMENT']: {
            bind: 'hidden'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [pageName + 'BLOCK_RECURRING_TRANSACTION']: {
            bind: 'hidden'
          },
          [pageName + 'BLOCK_RECURRING_TRANSACTION_LIST']: {
            bind: 'transactionList'
          },
          [pageName + '_ACTIVE_STEP']: {
            bind: 'active'
          },
          [pageName + '_ACTIVE_BLOCK_PAYMENT_STEP']: {
            bind: 'active'
          },
          [pageName + '_STEP_RESET']: {
            bind: 'reset'
          },
          [pageName + '_RESET_STEPS']: {
            bind: 'reset'
          },
          [pageName + '_DESCOLLAPSED_STEP']: {
            bind: 'collapsed'
          },
          [pageName + '_DESCOLLAPSED_STEP_PAYMENT']: {
            bind: 'collapsed'
          },
          [pageName + 'BLOCK_PAYMENT_STEP_DESCRIPTION']: {
            bind: 'description'
          },
          [pageName + '_ACTIVE_BLOCK_RECURRING_PAYMENT']: {
            bind: 'active'
          },
          [pageName + '_SET_CHECKBOX_CHECKED']: {
            bind: 'checkboxChecked'
          },
          [pageName + '_SET_CHECKBOX_LABEL_PAYMENT']: {
            bind: 'checkboxLabel'
          }
        },
        out: {
          [pageName + '_REGISTER_STEP']: {
            bind: 'register-step'
          },
          [pageName + '_CONTINUE_NEXT_STEP_BLOCK_CHARGE']: {
            bind: 'continue-pressed'
          },
          [pageName + '_OPEN_STEP']: {
            bind: 'change-step-state'
          }
        }
      }
    }
  };
  const blockCardStep = {
    zone: 'app__main',
    tag: 'cells-step-conditions',
    type: 'UI',
    properties: {
      checkboxLabel: 'clarifications-management-accept-conditions-block-card',
      textButton: 'clarifications-management-button-continue',
      stepTitle: 'clarifications-management-block-card-step',
      className: 'message spacing-message',
      titleInformationClass: 'text-info-detached',
      hidden: true,
      changeLabel: 'cells-step-legal-terms-consult',
      collapsedIcon: 'coronita:correct',
      collapsedText: 'clarifications-management-accept',
      currentStep: 5,
      active: true,
      cellsConnections: {
        in: {
          [pageName + 'HIDDEN_COMPONENTS']: {
            bind: 'hidden'
          },
          [pageName + '_VIEW_STEPS_BLOCK_CARD']: {
            bind: 'hidden'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [pageName + 'BLOCK_CARD_STEP']: {
            bind: 'hidden'
          },
          [pageName + '_ACTIVE_BLOCK_CARD_STEP']: {
            bind: 'active'
          },
          [pageName + 'PRODUCT_BLOCKED']: {
            bind: 'productCard'
          },
          [pageName + 'LIST_PRODUCT']: {
            bind: 'list'
          },
          [pageName + '_STEP_RESET']: {
            bind: 'reset'
          },
          [pageName + '_RESET_STEPS']: {
            bind: 'reset'
          },
          [pageName + '_DESCOLLAPSED_STEP']: {
            bind: 'collapsed'
          },
          [pageName + '_DESCOLLAPSED_STEP_BLOCK_CARD']: {
            bind: 'collapsed'
          },
          [pageName + 'BLOCK_CARD_STEP_DESCRIPTION']: {
            bind: 'description'
          },
          [pageName + '_SET_CHECKBOX_CHECKED']: {
            bind: 'checkboxChecked'
          }
        },
        out: {
          [pageName + '_UNCOLLAPSED_STEP']: {
            bind: 'change-pressed'
          },
          [pageName + '_REGISTER_STEP']: {
            bind: 'register-step'
          },
          [pageName + '_OPEN_STEP']: {
            bind: 'change-step-state'
          },
          [pageName + '_CONTINUE_NEXT_STEP_BLOCK_CARD']: {
            bind: 'continue-pressed'
          }
        }
      }
    }
  };
  const summaryStep = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      className: 'aqua-dark-button',
      showAddition: true,
      buttonLabel: 'clarifications-management-button-summary-view',
      operationAmountClass: 'amount-huge-decimals cells-summary-view--quantity--amount-currency-font-custom-size',
      localCurrency: getLocalCurrency(),
      hideCustomFeesMessage: true,
      feesIconSize: '22',
      cellsConnections: {
        in: {
          [pageName + '_HANDLE_SHOW_FEES_MESSAGE']: {
            bind: 'forceFeesMessage'
          },
          [pageName + '_BUTTON_CONFIRM']: {
            bind: 'operation'
          },
          [pageName + '_SUMMARY_VIEW_TITLE']: {
            bind: 'summaryViewTitle'
          },
          [pageName + '_SUMMARY_VIEW_SUBTITLE_MESSAGE_PAYMENT']: {
            bind: 'managmentFeesMessage'
          },
          [pageName + '_SUMMARY_VIEW_SUBTITLE_MESSAGE_EMPTY']: {
            bind: 'managmentFeesMessage'
          },
          [pageName + '_SUMMARY_VIEW_SUBTITLE_MESSAGE_HELP_ICON']: {
            bind: 'managmentFeesMessage'
          },
          [pageName + '_SEND_ICON_HELP']: {
            bind: 'showFeesIcon'
          }
        },
        out: {
          [pageName + '_CLOSE_SUMMARY_CONFIRM']: {
            bind: 'summary-closed'
          },
          [pageName + '_OPEN_MODAL_SUMMARY_ICON']: {
            bind: 'open-fees-modal'
          }
        }
      }
    }
  };
  const apisPaymentsDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: token,
      native: isNative,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      cellsConnections: {
        in: {
          [pageName + 'BLOCK_PAYMENT']: {
            bind: 'paymentsBlocks'
          }
        },
        out: {
          [pageName + '_SUCCES_BLOCK_PAYMENT']: {
            bind: 'success-block-payment'
          },
          [pageName + '_ERROR_BLOCK_PAYMENT']: {
            bind: 'error-on-block-payment'
          }
        }
      }
    }
  };
  const apisCardsDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards',
    properties: {
      host: CONFIG.globalServices.host,
      cardsApiVersion: CONFIG.globalServices.versions.cards,
      native: isNative,
      requiredToken: token,
      cellsConnections: {
        in: {
          [pageName + 'BLOCK_CARD']: {
            bind: 'putCardBlock'
          },
          [pageName + 'BLOCK_CARD_ID']: {
            bind: 'cardId'
          },
          [pageName + 'BLOCK_ID']: {
            bind: 'blockId'
          }
        },
        out: {
          [pageName + '_BLOCK_CARD_SUCCESS']: {
            bind: 'put-card-block-response'
          },
          [pageName + '_BLOCK_CARD_ERROR']: {
            bind: 'error-on-put-card-block'
          }
        }
      }
    }
  };
  const apisCustomersDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      customerExpand: {
        expand: 'classifications'
      },
      host: CONFIG.globalServices.host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: token,
      native: isNative,
      cellsConnections: {
        in: {
          [pageName + '_REQUEST_SEGMENT']: {
            bind: 'getCustomers'
          }
        },
        out: {
          [pageName + 'CLASSIFICATIONS_RESPONSE']: {
            bind: 'set-customers'
          }
        }
      }
    }
  };

  const dataProviderPayments = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-payments',
    familyPath: '@glomo-web-components/bbva-dataprovider-payments',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: token,
      version: CONFIG.globalServices.versions.paymentsV1,
      native: isNative,
      requiredOTP: true,
      cellsConnections: {
        in: {
          [pageName + '_PATCH_DIRECT_DEBITS_DEACTIVATE']: {
            bind: 'patchDirectDebitsDeactivate'
          }
        },
        out: {
          [pageName + '_PATCH_DIRECT_DEBITS_DEACTIVATE_HANDLER_SUCCESS']: {
            bind: 'patch-direct-debits-deactivate-handler-success'
          },
          [pageName + '_PATCH_DIRECT_DEBITS_DEACTIVATE_HANDLER_ERROR']: {
            bind: 'patch-direct-debits-deactivate-handler-error'
          }
        }
      }
    }
  };
  const debitsSearch = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-local-payments-api-dm-mx',
    familyPath: '@glomo-web-components/bbva-local-payments-api-dm',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: token,
      version: CONFIG.globalServices.versions.paymentsV2,
      native: isNative,
      requiredOTP: true,
      cellsConnections: {
        in: {
          CLARIFICATION_MANAGEMENT_CARE_POST_DEBIT_SEARCH_REQUEST: {
            bind: 'postDebitsSearch'
          }
        },
        out: {
          CLARIFICATION_MANAGEMENT_CARE_POST_DEBIT_SEARCH_RESPONSE_SUCCESS: {
            bind: 'post-debits-search-success'
          },
          CLARIFICATION_MANAGEMENT_CARE_POST_DEBIT_SEARCH_RESPONSE_ERROR: {
            bind: 'post-debits-search-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'clarifications-management-care-page',
    currentPage: {
      url: '/clarifications-management-care-page'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      header,
      clarificationDm,
      apisClaimsDm,
      offerPageStep,
      clarificationReasonStep,
      clarificationTypeStep,
      blockRecurrentStep,
      blockCardStep,
      summaryStep,
      apisPaymentsDm,
      apisCardsDm,
      apisCustomersDm,
      dataProviderPayments,
      debitsSearch,
      mobileActionLauncher()
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-payments', pageName, ['success-block-payment', 'error-on-block-payment']);
  signConnector('bbva-dataprovider-payments', pageName, ['patch-direct-debits-deactivate-handler-success', 'patch-direct-debits-deactivate-handler-error']);
  const connectionsOutOTP = connectionsOut(base);
  connectionsOutOTP('cells-sign-operation-dm-mx').clarificationsManagementCarePage_BLOCK_PAYMENTS_ANALYTICS_OTP = {
    bind: 'signature-required'
  };
  connectionsOutOTP('cells-sign-operation-dm-mx').clarificationsManagementCarePage_BLOCK_PAYMENTS_ANALYTICS_OTP = {
    bind: 'signature-required'
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
