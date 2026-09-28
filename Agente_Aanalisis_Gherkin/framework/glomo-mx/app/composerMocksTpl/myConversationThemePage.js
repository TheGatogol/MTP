'use strict';

module.exports = CONFIG => {
  const {
    SPINNER: spinner,
    headerHeight
  } = require('./common/helpers/_utils');
  const {
    globalServices: { host, versions, requiredToken = 'tsec' },
    native = false,
    nativeIos = false
  } = CONFIG;
  const PAGE_NAME = 'myConversationThemePage';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_myTalks')(CONFIG);

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerHeight,
      className: nativeIos ? 'ios-top-padding' : '',
      mode: 'seamed'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'myConversationThemePage',
      requiredToken,
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_myConversationThemePage: {
            bind: 'init'
          }
        },
        out: {
          my_conversation_theme_init_page: {
            bind: 'init-page'
          },
          my_conversation_theme_reset_page: {
            bind: 'reset'
          },
          app_error_access_token: {
            bind: 'access-token-error'
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
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      continue: 'myConversationMessagePage',
      cellsConnections: {
        in: {
          navigation_my_conversation_theme_back_request: {
            bind: 'goBack'
          },
          AMB_PRIMARY_CHANNEL: {
            bind: 'navigate'
          }
        },
        out: {
          navigate_my_conversation_theme_to_myConversationMessagePage: {
            bind: 'navigation-to-myConversationMessagePage',
            link: {
              page: 'myConversationMessagePage'
            }
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
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'my-conversations-theme-title',
      cellsConnections: {
        in: {},
        out: {
          MC_NAVIGATION_MESSSAGE_CHANNEL: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    }
  };

  const coversationOption = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-conversation-option',
    properties: {
      srcImage: 'images/chat.svg',
      showInputTheme: true,
      titleLabel: 'glomo-conversation-theme-title-label',
      descriptionLabel: 'glomo-conversation-theme-description-label',
      inputLabel: 'glomo-conversation-theme-input-label',
      inputInfoMessage: 'glomo-conversation-theme-input-info-message',
      maxLengthInput: 70,
      cellsConnections: {
        in: {
          MCT_EDIT_SUBJECT: {
            bind: 'inputThemeValue'
          }
        },
        out: {
          MCT_SET_SUBJECT: {
            bind: 'option-theme-selected'
          }
        }
      }
    }
  };

  const conversationOptionDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-conversation-option-dm',
    properties: {
      cellsConnections: {
        in: {
          my_conversation_theme_init_page: {
            bind: 'init'
          },
          MCM_ID_BANKER_CH: {
            bind: 'idBanker'
          },
          MCT_SET_SUBJECT: {
            bind: 'createConversation'
          },
          MCT_SUCCESS_CREATE_CONVERSATION_CH: {
            bind: 'getNewConversation'
          },
          MCT_ERROR_CREATE_CONVERSATION_CH: {
            bind: 'onConversationGetErrorCreate'
          },
          MCT_SHOW_PREVIEW_SUBJECT_CH: {
            bind: 'showPreviewSubject'
          },
          MCT_SHOW_MODAL_GET_CREATE_CONV_ERROR_CHAT_CH: {
            bind: 'retryCreateConversation'
          }
        },
        out: {
          MCT_DATA_REQUEST_CREATE_CONV_CH: {
            bind: 'create-conversation'
          },
          MTC_DATA_REQUEST_CREATE_CONV_SESSION_CH: {
            bind: 'create-conversation-session-validate'
          },
          MCT_NAVIGATION_TO_CONV_CH: {
            bind: 'go-to-conversation',
            link: {
              page: 'myConversationChatPage',
              skipHistory: true
            }
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          MCC_OPEN_MODAL_ERROR_CH: {
            bind: 'open-error-modal'
          },
          MCT_EDIT_SUBJECT: {
            bind: 'edit-subject'
          }
        }
      }
    }
  };

  const globalApisConversation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-conversation',
    properties: {
      host,
      native,
      conversationAPIVersion: versions.conversations,
      requiredToken,
      requiresTsec: true,
      cellsConnections: {
        in: {
          MCT_DATA_REQUEST_CREATE_CONV_CH: {
            bind: 'postCreateConversation'
          }
        },
        out: {
          MCT_SUCCESS_CREATE_CONVERSATION_CH: {
            bind: 'location-create-conversation'
          },
          MCT_ERROR_CREATE_CONVERSATION_CH: {
            bind: 'error-post-create-conversation'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-my-conversations',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          MC_REMOTE_MANAGER_INFO: {
            bind: 'validateSegment'
          },
          MC_NAVIGATION_THEME_CHANNEL: {
            bind: 'firePageVisit'
          },
          MCC_OPEN_MODAL_ERROR_CH: {
            bind: 'fireModalWithData'
          }
        },
        out: {
          MCM_ANALYTICS_CREATE_NEW_CONVERSATION: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS._getAdvancedFootprints('createNewConversation')
          },
          MCM_ANALYTICS_ERROR_CREATE_NEW_CONVERSATION: {
            bind: 'analytics-modal',
            analytics: ANALYTICS._myTalksGetErrors('errorCreateConversation')
          }
        }
      }
    }
  };

  const mxConversation = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-conversations',
    familyPath: '@glomo-web-components/bbva-dataprovider-conversations',
    render: 'litElement',
    properties: {
      host,
      native,
      version: versions.conversations,
      requiredToken,
      requiresTsec: true,
      cellsConnections: {
        in: {
          MTC_DATA_REQUEST_CREATE_CONV_SESSION_CH: {
            bind: 'postSessionsValidate'
          }
        }
      }
    }
  };

  const base = {
    hash: 'my-conversation-theme-page',
    currentPage: {
      url: '/my-conversation-theme-page',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      coversationOption,
      conversationOptionDM,
      globalApisConversation,
      analyticsManager,
      mxConversation,
      spinner(CONFIG)
    ]
  };

  return base;
};
