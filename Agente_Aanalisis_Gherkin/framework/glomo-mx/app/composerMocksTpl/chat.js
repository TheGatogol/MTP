'use strict';
module.exports = CONFIG => {
  const pageName = 'chatWidget';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const OPERATIVE_PREFIX = pageName.toLowerCase();
  const { useNames } = require('./common/helpers/_utils');
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const localStorageApp = require('./common/_local-storage');
  const ANALYTICS_CHAT = require('./analytics/_chat')();
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: 'bbva-core-blue',
      cellsConnections: {
        in: {
          [pageName + '_init_page']: {
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
        'swipe-menu-enabled': false,
        'set-feedback-exit-url': OPERATIVE_PREFIX
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_chat: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          global_feedback_set_exit_url: {
            bind: 'set-feedback-exit-url'
          }
        }
      }
    }
  };
  const bbvaHeaderMain = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      variant: 'modal',
      text: 'in-app-chat-header-main-text',
      iconRightPrimary: 'bbva:close',
      cellsConnections: {
        out: {
          [getChannelName('_execute_option_close')]: {
            bind: 'header-main-icon-right-primary-click'
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
      host: CONFIG.genesysHost,
      nativeGenesys: false,
      native: !!CONFIG.native,
      organizationId: CONFIG.genesysChat.organizationId,
      deploymentId: CONFIG.genesysChat.deploymentId,
      targetType: CONFIG.genesysChat.targetType,
      targetAddress: CONFIG.genesysChat.targetAddress,
      displayName: CONFIG.genesysChat.displayName,
      urlFeedback: CONFIG.genesysChat.urls.feedback,
      cellsConnections: {
        in: {
          global_storage_set_chat_login_success: {
            bind: 'saveLocalStorageSuccess'
          },
          global_storage_set_chat_login_error: {
            bind: 'saveLocalStorageError'
          },
          global_storage_get_chat_login_success: {
            bind: 'searchLocalStorageSuccess'
          },
          global_storage_get_chat_login_error: {
            bind: 'searchLocalStorageError'
          },
          global_storage_remove_chat_login_success: {
            bind: 'deleteLocalStorageSuccess'
          },
          global_storage_remove_chat_login_error: {
            bind: 'deleteLocalStorageError'
          },
          [getChannelName('open_opinator')]: {
            bind: 'openFeedback'
          },
          [getChannelName('_execute_option_close')]: {
            bind: 'optionClose'
          },
          chat_welcome_to_chat: {
            bind: 'controlChat'
          },
          [getChannelName('_clear_data')]: {
            bind: 'clearAll'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'close-chat-modal'
          },
          [getChannelName('close_chat')]: {
            bind: 'close-chat'
          },
          [getChannelName('open_opinator')]: {
            bind: 'open-opinator'
          },
          [getChannelName('_clear_data')]: {
            bind: 'clear-data'
          },
          global_set_feedback_link: {
            bind: 'set-feedback-link'
          },
          global_navigate_to_feedback: {
            bind: 'navigate-to-feedback'
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
          [getChannelName('_adviser_connected')]: {
            bind: 'adviser-connected',
            analytics: ANALYTICS_CHAT.CONVERSATION_ADVISER_ANA
          },
          [getChannelName('_finished_conversation')]: {
            bind: 'finished-conversation',
            analytics: ANALYTICS_CHAT.CONVERSATION_ADVISER_SUCCESS_ANA
          },
          [getChannelName('_create_chat_error')]: {
            bind: 'create-chat-error',
            analytics: ANALYTICS_CHAT.ERROR_CHAT_ANA
          }
        }
      }
    }
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'chat-welcome',
      cellsConnections: {
        in: {
          [getChannelName('close_chat')]: {
            bind: 'navigate'
          },
          in_app_chat_go_to_welcome_screen: {
            bind: 'navigate'
          }
        },
        out: {
          [getChannelName('_chat_to_chat_welcome')]: {
            bind: 'navigation-to-chat-welcome',
            link: {
              page: 'chatWelcome',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const base = {
    hash: 'chat',
    currentPage: {
      url: '/chat'
    },
    pages,
    template,
    components: [
      lifeCycle,
      bbvaHeaderMain,
      bbvaWidgetChat,
      glomoNavigationHandler
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'chat_login' ], CONFIG);

  return base;
};
