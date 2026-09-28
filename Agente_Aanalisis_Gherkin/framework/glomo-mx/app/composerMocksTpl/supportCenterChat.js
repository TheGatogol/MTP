/* eslint-disable no-dupe-keys, no-shadow */
'use strict';
module.exports = CONFIG => {
  const {
    globalServices: { host, requiredToken = 'tsec' }
  } = CONFIG;
  const pageName = 'supportCenterChat';
  const _localStorage = require('./common/_local-storage');
  const page = require('./common/_pages')(CONFIG)(pageName);
  const phoneAsistanceNumber = CONFIG.bbvaLine;
  const { nativeIos: isNativeIos = false } = CONFIG;
  const analyticsSupportCenterChat = require('./analytics/_supportCenterChat')(CONFIG);
  const analyticsLiterals = require('./analytics/common/_literals');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: 0,
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'bbva-core-blue',
      cellsConnections: {
        in: {
          [pageName + '_recalculate_header']: {
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
      customInitEvents: {
        'set-feedback-exit-url': 'dashboard',
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          [pageName + '_recalculate_header']: {
            bind: 'init-page'
          },
          global_feedback_set_exit_url: {
            bind: 'set-feedback-exit-url'
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
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          },
          session_timeout_expired: {
            bind: 'goBack'
          },
          support_center_chat_leave: {
            bind: 'goBack'
          }
        },
        out: {
          support_center_chat_exit_page: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };
  const speechPlugin = {
    zone: 'app__main',
    tag: 'cells-mobile-speechrecognition',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_start_recognition']: {
            bind: 'recognizer'
          },
          [pageName + '_stop_recognition']: {
            bind: 'stopRecognition'
          }
        },
        out: {
          [pageName + '_recognizer_success']: {
            bind: 'start-recognition'
          }
        }
      }
    }
  };
  const bbvaWidgetChat = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-chat',
    familyPath: '@glomo-web-components/bbva-widget-chat',
    render: 'litElement',
    properties: {
      hostASO: host,
      nativeGenesys: false,
      native: !!CONFIG.native,
      requiredToken,
      isSupportCenterChat: true,
      messageChatForm: 'bbva-widget-smart-assistant-form-text-placeholder',
      messageToast: 'bbva-widget-chat-message-toast',
      bbvaLinePhone: phoneAsistanceNumber,
      messageTitleError: 'glomo-conversation-create-message-error-header',
      messageBodyError: 'bbva-widget-chat-support-center-message-body-error',
      messageButtonError: 'bbva-widget-faqs-list-button',
      cellsConnections: {
        in: {
          [pageName + '_init_page']: {
            bind: 'init'
          },
          [pageName + '_recognizer_success']: {
            bind: 'transcription'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'closeChatModal'
          },
          dashboard_financial_overview: {
            bind: 'setFinancialOverviewData'
          },
          global_storage_set_support_center_chat_success: {
            bind: 'saveLocalStorageSuccess'
          },
          global_storage_set_support_center_chat_error: {
            bind: 'saveLocalStorageError'
          },
          global_storage_get_support_center_chat_success: {
            bind: 'fetchSupportCenterStorageSuccess'
          },
          global_storage_get_support_center_chat_error: {
            bind: 'fetchSupportCenterStorageError'
          },
          visual_menu_native_journey_id: {
            bind: 'setJourneyId'
          },
          visual_menu_set_journey_id: {
            bind: 'setJourneyId'
          },
          support_center_chat_service_hours: {
            bind: 'isChatOutOfService'
          },
          global_login_success: {
            bind: 'getCustomerName'
          },
          support_center_chat_close_chat: {
            bind: 'closeChatModal'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'closeChatModal'
          },
          global_support_center_chat_close_chat_accept: {
            bind: 'handleExit'
          },
          global_support_center_chat_out_of_service_accept: {
            bind: 'handleExit'
          },
          global_support_center_chat_out_of_service_cancel: {
            bind: 'handleExit'
          },
          global_support_center_chat_session_failed_accept: {
            bind: 'handleCall'
          },
          session_timeout_expired: {
            bind: 'closeChat'
          },
          global_logout_success: {
            bind: 'closeChat'
          },
          global_logout_notify_channel: {
            bind: 'sessionLogout'
          },
          global_logout_notify_action: {
            bind: 'sessionStatus'
          },
          web_view_visibility: {
            bind: 'checkVisibility'
          }
        },
        out: {
          support_center_chat_fire_notification: {
            bind: 'send-push-notification',
            'forward-to-native': true
          },
          [pageName + '_start_recognition']: {
            bind: 'bbva-widget-chat-support-center-start-recognition'
          },
          [pageName + '_stop_recognition']: {
            bind: 'bbva-widget-chat-support-center-stop-recognition'
          },
          support_center_chat_ended: {
            bind: 'support-center-chat-ended',
            'forward-to-native': true
          },
          support_center_chat_message_sent: {
            bind: 'support-center-chat-message-sent',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-modal'
          },
          support_center_chat_leave: {
            bind: 'leave-support-center-chat',
            link: {
              page: 'dashboard',
              cleanUntil: 'supportCenterChat'
            }
          },
          global_retry_error: {
            bind: 'send-retry-error'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva'
          },
          global_set_in_storage: {
            bind: 'global-set-in-storage'
          },
          global_remove_from_storage: {
            bind: 'global-remove-from-storage'
          },
          global_get_from_storage: {
            bind: 'get-from-storage'
          },
          global_message_notification: {
            bind: 'send-support-center-chat-notification'
          },
          support_center_chat_init_chat: {
            bind: 'init-support-center-chat',
            analytics: analyticsSupportCenterChat._getAdvancedFootprints(
              true,
              true,
              false,
              analyticsLiterals.commons.welcomeChat,
              analyticsLiterals.commons.waitingTime
            )
          },
          support_center_chat_started: {
            bind: 'support-center-chat-started',
            analytics: analyticsSupportCenterChat._getAdvancedFootprints(
              true,
              false,
              false,
              analyticsLiterals.commons.bbvaChat
            )
          },
          support_center_chat_out_of_service: {
            bind: 'chat-out-of-service',
            analytics: analyticsSupportCenterChat._getAdvancedFootprints(
              true,
              false,
              false,
              analyticsLiterals.commons.chatOutOfSchedule
            )
          },
          support_center_chat_error_creating_chat: {
            bind: 'support-center-chat-error-creating-session',
            analytics: analyticsSupportCenterChat._getAdvancedFootprints(
              true,
              false,
              true,
              analyticsLiterals.commons.errorInitChat,
              analyticsLiterals.commons.errorInitChat
            )
          },
          support_center_chat_click_card: {
            bind: 'support-center-chat-card-click',
            analytics: analyticsSupportCenterChat._getAdvancedInteractionLink('clientCard')
          },
          support_center_chat_active: {
            bind: 'support-center-chat-active',
            'forward-to-native': true
          },
          support_center_chat_inactive: {
            bind: 'support-center-chat-inactive',
            'fower-to-native': true
          },
          global_prepare_feedback: {
            bind: 'navigate-to-feedback'
          }
        }
      }
    }
  };
  const base = {
    hash: 'supportCenterChat',
    currentPage: {
      url: '/support-center-chat'
    },
    page,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      speechPlugin,
      bbvaWidgetChat
    ]
  };
  addCommonErrors(base.components)();
  _localStorage.addOutStorageChannels(base.components, [ 'support_center_chat' ], CONFIG);
  const selectComponent = 'bbva-widget-chat';
  addRetryErrors(base, [
    {
      id: 'register-traceability-error',
      acceptRetry: { bind: 'initChat', component: selectComponent },
      cancelRetry: { bind: 'handleExit', component: selectComponent },
      finishRetry: { bind: 'handleCall', component: selectComponent }
    },
    {
      id: 'create-sso-error',
      acceptRetry: { bind: 'initChat', component: selectComponent },
      cancelRetry: { bind: 'handleExit', component: selectComponent },
      finishRetry: { bind: 'handleCall', component: selectComponent }
    },
    {
      id: 'create-conversation-error',
      acceptRetry: { bind: 'initSupportCenterChat', component: selectComponent },
      cancelRetry: { bind: 'handleExit', component: selectComponent },
      finishRetry: { bind: 'handleCall', component: selectComponent }
    },
    {
      id: 'list-participants-error',
      acceptRetry: { bind: 'listParticipants', component: selectComponent },
      cancelRetry: { bind: 'handleExit', component: selectComponent },
      finishRetry: { bind: 'handleCall', component: selectComponent }
    },
    {
      id: 'modify-participants-error',
      acceptRetry: { bind: 'listParticipants', component: selectComponent },
      cancelRetry: { bind: 'handleExit', component: selectComponent },
      finishRetry: { bind: 'handleCall', component: selectComponent }
    }
  ]);
  return base;
};
